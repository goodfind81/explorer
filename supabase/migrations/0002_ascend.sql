-- Ascend (PSAT & SAT) · tables, security rules and server functions
-- Run after 0001_profiles.sql in the Supabase SQL editor. Safe to re-run functions; tables use IF NOT EXISTS.
-- Everything here is prefixed ascend_ so it sits beside the 4th Grade Explorer tables in the same project.
-- profiles.section picks the level range: psat → levels 1–2, sat → levels 2–3.

create extension if not exists pgcrypto;

-- ───────────────────────── Tables ─────────────────────────

create table if not exists public.ascend_questions (
  id            text primary key default ('q_' || replace(gen_random_uuid()::text, '-', '')),
  subject       text not null check (subject in ('rw','math')),
  level         smallint not null check (level between 1 and 3),
  domain        text not null,
  skill         text not null,
  passage       text,
  data_table    jsonb,                 -- optional {"h":["col",...],"r":[["cell",...],...]}
  question      text not null,
  choices       jsonb,                 -- 4 strings, or null for a typed-in (student-produced) answer
  answer_index  smallint,              -- 0-3 when choices is set
  accept        jsonb,                 -- accepted typed answers, e.g. ["2.5","5/2"]
  explanation   text not null default '',
  status        text not null default 'draft' check (status in ('draft','published','retired')),
  source        text not null default 'manual' check (source in ('bank','ai','import','manual')),
  notes         text,
  created_by    uuid references auth.users(id) on delete set null,
  created_at    timestamptz not null default now(),
  published_at  timestamptz,
  constraint ascend_questions_domain_ok check (
    (subject = 'rw'   and domain in ('Craft and Structure','Information and Ideas','Standard English Conventions','Expression of Ideas')) or
    (subject = 'math' and domain in ('Algebra','Advanced Math','Problem-Solving and Data Analysis','Geometry and Trigonometry'))
  ),
  constraint ascend_questions_answer_shape check (
    (choices is not null and jsonb_typeof(choices) = 'array' and jsonb_array_length(choices) = 4
       and answer_index between 0 and 3)
    or
    (choices is null and accept is not null and jsonb_typeof(accept) = 'array' and jsonb_array_length(accept) > 0)
  )
);
create index if not exists ascend_questions_pick_idx on public.ascend_questions (status, subject, level);

create table if not exists public.ascend_daily_sets (
  id            bigint generated always as identity primary key,
  student_id    uuid not null references public.profiles(id) on delete cascade,
  day           date not null,
  subject       text not null check (subject in ('rw','math')),
  section       text not null,
  question_ids  text[] not null,
  review_count  int not null default 0,
  created_at    timestamptz not null default now(),
  unique (student_id, day, subject)
);

create table if not exists public.ascend_answers (
  id            bigint generated always as identity primary key,
  student_id    uuid not null references public.profiles(id) on delete cascade,
  set_id        bigint not null references public.ascend_daily_sets(id) on delete cascade,
  question_id   text not null references public.ascend_questions(id) on delete cascade,
  day           date not null,
  subject       text not null,
  domain        text not null,
  skill         text not null,
  response      text not null,
  correct       boolean not null,
  ms            int not null default 0,
  answered_at   timestamptz not null default now(),
  unique (set_id, question_id)
);
create index if not exists ascend_answers_student_idx on public.ascend_answers (student_id, answered_at);
create index if not exists ascend_answers_time_idx on public.ascend_answers (answered_at);
create index if not exists ascend_answers_question_idx on public.ascend_answers (question_id);

create table if not exists public.ascend_question_reports (
  id            bigint generated always as identity primary key,
  question_id   text not null references public.ascend_questions(id) on delete cascade,
  student_id    uuid references public.profiles(id) on delete set null,
  note          text not null default '',
  resolved      boolean not null default false,
  created_at    timestamptz not null default now()
);

-- ───────────────────────── Helpers ─────────────────────────

-- Number parser for typed-in math answers: "5/2", "2.5", "−3", "1,500".
create or replace function public.ascend_parse_num(t text) returns numeric
language plpgsql immutable as $$
declare
  s text := replace(replace(regexp_replace(coalesce(t, ''), '\s', '', 'g'), '−', '-'), ',', '');
  a numeric; b numeric;
begin
  if s ~ '^-?\d*\.?\d+/-?\d*\.?\d+$' then
    a := split_part(s, '/', 1)::numeric; b := split_part(s, '/', 2)::numeric;
    if b = 0 then return null; end if;
    return a / b;
  elsif s ~ '^-?\d*\.?\d+$' then
    return s::numeric;
  end if;
  return null;
end $$;

create or replace function public.ascend_grade(q public.ascend_questions, resp text) returns boolean
language plpgsql immutable as $$
begin
  if q.choices is not null then
    return trim(resp) ~ '^[0-3]$' and trim(resp)::int = q.answer_index;
  end if;
  return exists (
    select 1 from jsonb_array_elements_text(q.accept) a(v)
    where lower(trim(a.v)) = lower(trim(resp))
       or (public.ascend_parse_num(a.v) is not null and public.ascend_parse_num(resp) is not null
           and abs(public.ascend_parse_num(a.v) - public.ascend_parse_num(resp)) < 0.000001)
  );
end $$;

create or replace function public.ascend_levels(t text) returns int[]
language sql immutable as $$ select case t when 'sat' then array[2,3] else array[1,2] end $$;

-- Question as a student sees it: answer fields only once answered.
create or replace function public.ascend_question_json(q public.ascend_questions, a public.ascend_answers) returns jsonb
language sql stable as $$
  select jsonb_strip_nulls(jsonb_build_object(
    'id', q.id, 'subject', q.subject, 'level', q.level, 'domain', q.domain, 'skill', q.skill,
    'passage', q.passage, 'data_table', q.data_table, 'question', q.question, 'choices', q.choices,
    'typed', q.choices is null, 'ai', q.source = 'ai',
    'answered', case when a.id is null then null else jsonb_build_object(
        'response', a.response, 'correct', a.correct, 'ms', a.ms,
        'answer_index', q.answer_index, 'accept', q.accept, 'explanation', q.explanation) end
  ));
$$;

-- ───────────────────────── Daily set ─────────────────────────

create or replace function public.ascend_build_set(p_student uuid, p_subject text, p_day date)
returns bigint language plpgsql security definer set search_path = public as $$
declare
  v_section text; v_levels int[]; v_ids text[]; v_review text[]; v_recycle text[]; v_need int; v_id bigint;
  v_doms text[] := case p_subject
    when 'rw' then array['Craft and Structure','Information and Ideas','Standard English Conventions','Expression of Ideas']
    else array['Algebra','Advanced Math','Problem-Solving and Data Analysis','Geometry and Trigonometry'] end;
begin
  select section into v_section from profiles where id = p_student;
  v_levels := ascend_levels(v_section);

  -- 1. Up to 3 questions missed on earlier days (latest attempt wrong), so mistakes come back.
  select coalesce(array_agg(question_id), '{}') into v_review from (
    select x.question_id from (
      select distinct on (question_id) question_id, correct, answered_at, day
      from ascend_answers where student_id = p_student and subject = p_subject
      order by question_id, answered_at desc
    ) x join ascend_questions q on q.id = x.question_id and q.status = 'published' and q.level = any(v_levels)
    where not x.correct and x.day < p_day
    order by x.answered_at desc limit 3
  ) r0;

  -- 2. Fresh questions, weighted toward the student's weakest domains (weight 0.5–1.5).
  with dstats as (
    select domain, count(*) t, sum(correct::int) c
    from ascend_answers where student_id = p_student and subject = p_subject group by domain
  )
  select coalesce(array_agg(id), '{}') into v_ids from (
    select q.id from ascend_questions q
    left join dstats d on d.domain = q.domain
    where q.status = 'published' and q.subject = p_subject and q.level = any(v_levels)
      and not exists (select 1 from ascend_answers a where a.student_id = p_student and a.question_id = q.id)
    order by random() * (case when coalesce(d.t, 0) < 3 then 1.0 else 1.5 - d.c::numeric / d.t end) desc
    limit 15 - coalesce(array_length(v_review, 1), 0)
  ) f;

  -- 3. Bank running low: more missed questions.
  v_need := 15 - coalesce(array_length(v_ids, 1), 0) - coalesce(array_length(v_review, 1), 0);
  select v_review || coalesce(array_agg(question_id), '{}') into v_review from (
    select x.question_id from (
      select distinct on (question_id) question_id, correct, answered_at
      from ascend_answers where student_id = p_student and subject = p_subject
      order by question_id, answered_at desc
    ) x join ascend_questions q on q.id = x.question_id and q.status = 'published' and q.level = any(v_levels)
    where not x.correct and not (x.question_id = any(v_ids)) and not (x.question_id = any(v_review))
    order by x.answered_at desc limit greatest(v_need, 0)
  ) r;

  -- 4. Still short: repeat the questions seen longest ago.
  v_need := 15 - coalesce(array_length(v_ids, 1), 0) - coalesce(array_length(v_review, 1), 0);
  select coalesce(array_agg(question_id), '{}') into v_recycle from (
    select a.question_id from ascend_answers a join ascend_questions q on q.id = a.question_id
    where a.student_id = p_student and a.subject = p_subject and q.status = 'published'
      and q.level = any(v_levels)
      and not (a.question_id = any(v_ids)) and not (a.question_id = any(v_review))
    group by a.question_id order by max(a.answered_at) asc limit greatest(v_need, 0)
  ) c;

  v_ids := v_ids || v_review || v_recycle;

  -- Test order: R&W by domain like the real section; Math easiest first.
  select coalesce(array_agg(q.id order by
           case when p_subject = 'rw' then array_position(v_doms, q.domain) else 0 end, q.level, q.id), '{}')
    into v_ids
  from ascend_questions q where q.id = any(v_ids);

  insert into ascend_daily_sets (student_id, day, subject, section, question_ids, review_count)
  values (p_student, p_day, p_subject, v_section, v_ids, coalesce(array_length(v_review, 1), 0))
  on conflict (student_id, day, subject) do nothing
  returning id into v_id;

  if v_id is null then
    select id into v_id from ascend_daily_sets where student_id = p_student and day = p_day and subject = p_subject;
  end if;
  return v_id;
end $$;

-- Student: today's two sets (built on first call of the day). p_day is the student's local date.
create or replace function public.ascend_get_today(p_day date) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid(); v_prof profiles; v_out jsonb := '{}'; v_set ascend_daily_sets; s text;
begin
  select * into v_prof from profiles where id = v_uid;
  if v_prof.id is null or not v_prof.active then raise exception 'account not active'; end if;
  if v_prof.section not in ('psat','sat') then raise exception 'not a PSAT or SAT account'; end if;
  if p_day not between (now() at time zone 'utc')::date - 2 and (now() at time zone 'utc')::date + 2 then
    raise exception 'invalid date';
  end if;
  foreach s in array array['rw','math'] loop
    select * into v_set from ascend_daily_sets where student_id = v_uid and day = p_day and subject = s;
    if v_set.id is null or v_set.section <> v_prof.section then
      if v_set.id is not null and not exists (select 1 from ascend_answers where set_id = v_set.id) then
        delete from ascend_daily_sets where id = v_set.id;   -- grade changed before starting: rebuild
      end if;
      if not exists (select 1 from ascend_daily_sets where student_id = v_uid and day = p_day and subject = s) then
        perform ascend_build_set(v_uid, s, p_day);
      end if;
      select * into v_set from ascend_daily_sets where student_id = v_uid and day = p_day and subject = s;
    end if;
    v_out := v_out || jsonb_build_object(s, jsonb_build_object(
      'id', v_set.id, 'review_count', v_set.review_count,
      'items', coalesce((
        select jsonb_agg(ascend_question_json(q, a) order by ord)
        from unnest(v_set.question_ids) with ordinality u(qid, ord)
        join ascend_questions q on q.id = u.qid
        left join ascend_answers a on a.set_id = v_set.id and a.question_id = q.id
      ), '[]'::jsonb)));
  end loop;
  return jsonb_build_object(
    'profile', jsonb_build_object('username', v_prof.username, 'display_name', v_prof.display_name,
                                  'section', v_prof.section, 'role', v_prof.role),
    'day', p_day, 'sets', v_out);
end $$;

-- Student: answer one question. Graded on the server; the key is revealed only after answering.
create or replace function public.ascend_submit_answer(p_set_id bigint, p_question_id text, p_response text, p_ms int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid(); v_set ascend_daily_sets; q ascend_questions; a ascend_answers; ok boolean;
begin
  select * into v_set from ascend_daily_sets where id = p_set_id and student_id = v_uid;
  if v_set.id is null or not (p_question_id = any(v_set.question_ids)) then
    raise exception 'question not in your set';
  end if;
  if not exists (select 1 from profiles where id = v_uid and active) then raise exception 'account not active'; end if;
  select * into q from ascend_questions where id = p_question_id;
  select * into a from ascend_answers where set_id = p_set_id and question_id = p_question_id;
  if a.id is null then
    ok := ascend_grade(q, coalesce(p_response, ''));
    insert into ascend_answers (student_id, set_id, question_id, day, subject, domain, skill, response, correct, ms)
    values (v_uid, p_set_id, q.id, v_set.day, q.subject, q.domain, q.skill, left(coalesce(p_response, ''), 40),
            ok, least(greatest(coalesce(p_ms, 0), 0), 900000))
    returning * into a;
  end if;
  return ascend_question_json(q, a);
end $$;

-- Student: progress page data.
create or replace function public.ascend_my_progress() returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'skills', coalesce((select jsonb_agg(s) from (
        select subject, domain, skill, sum(correct::int) c, count(*) t
        from ascend_answers where student_id = auth.uid() group by 1, 2, 3) s), '[]'),
    'days', coalesce((select jsonb_agg(d) from (
        select day, subject, sum(correct::int) c, count(*) t
        from ascend_answers where student_id = auth.uid() and day > current_date - 90 group by 1, 2) d), '[]'),
    'missed', coalesce((select jsonb_agg(j order by at desc) from (
        select ascend_question_json(q, a) j, a.answered_at at
        from ascend_answers a join ascend_questions q on q.id = a.question_id
        where not a.correct and a.id in (
          select distinct on (question_id) id from ascend_answers where student_id = auth.uid()
          order by question_id, answered_at desc)
        order by a.answered_at desc limit 30) m), '[]')
  );
$$;

create or replace function public.ascend_report_question(p_question_id text, p_note text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from ascend_answers where student_id = auth.uid() and question_id = p_question_id) then
    raise exception 'answer the question before reporting it';
  end if;
  insert into ascend_question_reports (question_id, student_id, note) values (p_question_id, auth.uid(), left(coalesce(p_note, ''), 500));
end $$;

-- ───────────────────────── Admin: weekly report ─────────────────────────

create or replace function public.ascend_weekly_report(p_start date) returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare v jsonb;
begin
  if not is_admin() then raise exception 'admins only'; end if;
  with wk as (
    select a.* from ascend_answers a where a.day >= p_start and a.day < p_start + 7
  ), prev as (
    select student_id, count(*) t, sum(correct::int) c from ascend_answers
    where day >= p_start - 7 and day < p_start group by 1
  ), sk as (
    select student_id, subject, domain, skill, count(*) t, sum(correct::int) c from wk group by 1, 2, 3, 4
  ), stu as (
    select p.id, p.username, p.display_name, p.section, p.active,
      (select count(*) from wk where wk.student_id = p.id) t,
      (select coalesce(sum(correct::int), 0) from wk where wk.student_id = p.id) c,
      (select coalesce(sum(ms), 0) / 60000 from wk where wk.student_id = p.id) minutes,
      (select count(distinct day) from wk where wk.student_id = p.id) days_active,
      (select max(day) from ascend_answers x where x.student_id = p.id) last_day,
      coalesce(pr.t, 0) prev_t, coalesce(pr.c, 0) prev_c,
      coalesce((select jsonb_agg(jsonb_build_object('subject', subject, 'domain', domain, 'skill', skill, 't', t, 'c', c)
                order by c::numeric / t, t desc) from sk where sk.student_id = p.id), '[]') skills
    from profiles p left join prev pr on pr.student_id = p.id
    where p.role = 'student' and p.section in ('psat','sat')
  )
  select jsonb_build_object(
    'start', p_start, 'end', p_start + 6,
    'students', coalesce((select jsonb_agg(to_jsonb(stu) order by t desc, username) from stu), '[]'),
    'weak_skills', coalesce((select jsonb_agg(w order by w.acc, w.t desc) from (
        select subject, domain, skill, sum(t) t, sum(c) c, round(sum(c)::numeric / sum(t), 3) acc,
               count(*) filter (where c::numeric / t < 0.6 and t >= 3) struggling,
               array_agg(distinct student_id) filter (where c::numeric / t < 0.6 and t >= 3) student_ids
        from sk group by 1, 2, 3 having sum(t) >= 3) w), '[]'),
    'inventory', coalesce((select jsonb_agg(i) from (
        select subject, level, domain, count(*) filter (where status = 'published') published,
               count(*) filter (where status = 'draft') drafts
        from ascend_questions group by 1, 2, 3 order by 1, 3, 2) i), '[]'),
    'open_reports', (select count(*) from ascend_question_reports where not resolved)
  ) into v;
  return v;
end $$;

-- ───────────────────────── Row-level security ─────────────────────────

alter table public.ascend_questions         enable row level security;
alter table public.ascend_daily_sets        enable row level security;
alter table public.ascend_answers           enable row level security;
alter table public.ascend_question_reports  enable row level security;

drop policy if exists questions_admin on public.ascend_questions;
create policy questions_admin on public.ascend_questions for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists sets_read on public.ascend_daily_sets;
create policy sets_read on public.ascend_daily_sets for select using (student_id = auth.uid() or public.is_admin());
drop policy if exists sets_admin on public.ascend_daily_sets;
create policy sets_admin on public.ascend_daily_sets for delete using (public.is_admin());

drop policy if exists answers_read on public.ascend_answers;
create policy answers_read on public.ascend_answers for select using (student_id = auth.uid() or public.is_admin());

drop policy if exists reports_admin on public.ascend_question_reports;
create policy reports_admin on public.ascend_question_reports for all using (public.is_admin()) with check (public.is_admin());

-- Internal helpers are not callable from the browser.
revoke execute on function public.ascend_build_set(uuid, text, date) from public, anon, authenticated;
revoke execute on function public.ascend_get_today(date), public.ascend_submit_answer(bigint, text, text, int),
  public.ascend_my_progress(), public.ascend_report_question(text, text), public.ascend_weekly_report(date) from public, anon;
grant execute on function public.ascend_get_today(date), public.ascend_submit_answer(bigint, text, text, int),
  public.ascend_my_progress(), public.ascend_report_question(text, text), public.ascend_weekly_report(date) to authenticated;
