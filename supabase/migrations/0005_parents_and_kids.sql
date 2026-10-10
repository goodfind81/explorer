-- Parents linked to kids, and separate 4th Grade data per kid. Safe to re-run.
--
-- * parent_links: one parent can have several kids (any section); a kid can have several parents.
-- * profiles.g4_family_id: which family_id the kid's 4th Grade Explorer data lives under.
--   Null means "g4-<profile id>" (stable across username changes). Krishna keeps 'srk-family' so his existing work stays his.
-- * ascend_student_progress(): PSAT/SAT progress for a linked kid (or any student, for admins).

create table if not exists public.parent_links (
  parent_id   uuid not null references public.profiles(id) on delete cascade,
  student_id  uuid not null references public.profiles(id) on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (parent_id, student_id)
);
create index if not exists parent_links_student_idx on public.parent_links (student_id);

alter table public.profiles add column if not exists g4_family_id text;
update public.profiles set g4_family_id = 'srk-family' where username = 'krishna' and g4_family_id is null;

create or replace function public.is_parent_of(p_student uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.parent_links where parent_id = auth.uid() and student_id = p_student);
$$;

alter table public.parent_links enable row level security;
drop policy if exists links_read on public.parent_links;
create policy links_read on public.parent_links for select using (parent_id = auth.uid() or public.is_admin());
drop policy if exists links_admin on public.parent_links;
create policy links_admin on public.parent_links for all using (public.is_admin()) with check (public.is_admin());

-- Parents can read their kids' profiles (name, section) — nothing else changes.
drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select
  using (id = auth.uid() or public.is_admin() or public.is_parent_of(id));

-- ───────── PSAT/SAT progress for any allowed viewer ─────────

create or replace function public.ascend_progress_of(p_student uuid) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'skills', coalesce((select jsonb_agg(s) from (
        select subject, domain, skill, sum(correct::int) c, count(*) t
        from ascend_answers where student_id = p_student group by 1, 2, 3) s), '[]'),
    'days', coalesce((select jsonb_agg(d) from (
        select day, subject, sum(correct::int) c, count(*) t
        from ascend_answers where student_id = p_student and day > current_date - 90 group by 1, 2) d), '[]'),
    'missed', coalesce((select jsonb_agg(j order by at desc) from (
        select ascend_question_json(q, a) j, a.answered_at at
        from ascend_answers a join ascend_questions q on q.id = a.question_id
        where not a.correct and a.id in (
          select distinct on (question_id) id from ascend_answers where student_id = p_student
          order by question_id, answered_at desc)
        order by a.answered_at desc limit 30) m), '[]')
  );
$$;

create or replace function public.ascend_my_progress() returns jsonb
language sql stable security definer set search_path = public as $$
  select public.ascend_progress_of(auth.uid());
$$;

create or replace function public.ascend_student_progress(p_student uuid) returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not (public.is_admin() or public.is_parent_of(p_student)) then
    raise exception 'not your student';
  end if;
  return public.ascend_progress_of(p_student);
end $$;

revoke execute on function public.ascend_progress_of(uuid) from public, anon, authenticated;
revoke execute on function public.ascend_student_progress(uuid), public.is_parent_of(uuid) from public, anon;
grant execute on function public.ascend_student_progress(uuid), public.is_parent_of(uuid) to authenticated;
