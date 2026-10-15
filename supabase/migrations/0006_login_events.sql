-- Login history for every section. Safe to re-run.
--
-- * login_events: one row per sign-in (password typed on the portal) or visit
--   (came back with a saved login; logged at most once per browser tab).
-- * Rows are only written through log_login(), always for the caller.
-- * Admins read everyone's; parents read their linked kids'; everyone reads their own.
-- * login_summary(): last sign-in/visit and counts per account, for the Accounts page.

create table if not exists public.login_events (
  id          bigserial primary key,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  kind        text not null default 'sign_in' check (kind in ('sign_in','visit')),
  section     text,
  user_agent  text,
  at          timestamptz not null default now()
);
create index if not exists login_events_user_at_idx on public.login_events (user_id, at desc);
create index if not exists login_events_at_idx on public.login_events (at desc);

alter table public.login_events enable row level security;
drop policy if exists login_events_read on public.login_events;
create policy login_events_read on public.login_events for select
  using (user_id = auth.uid() or public.is_admin() or public.is_parent_of(user_id));
drop policy if exists login_events_admin on public.login_events;
create policy login_events_admin on public.login_events for delete using (public.is_admin());

create or replace function public.log_login(p_kind text, p_section text default null, p_agent text default null) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if p_kind not in ('sign_in','visit') then raise exception 'bad kind'; end if;
  insert into login_events (user_id, kind, section, user_agent)
  values (auth.uid(), p_kind,
          case when p_section in ('g4','psat','sat') then p_section end,
          left(p_agent, 300));
end $$;

create or replace function public.login_summary() returns table (
  user_id uuid, last_at timestamptz, sign_ins bigint, visits bigint
)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'admins only'; end if;
  return query
    select e.user_id, max(e.at),
           count(*) filter (where e.kind = 'sign_in'),
           count(*) filter (where e.kind = 'visit')
    from login_events e group by e.user_id;
end $$;

revoke execute on function public.log_login(text, text, text), public.login_summary() from public, anon;
grant execute on function public.log_login(text, text, text), public.login_summary() to authenticated;
