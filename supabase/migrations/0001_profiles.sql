-- KidosTutor · shared accounts for every section (4th Grade Explorer, PSAT, SAT)
-- Run in the Supabase SQL editor before 0002_ascend.sql. Safe to re-run.
--
-- Naming: shared tables have no prefix (profiles). Section tables carry their
-- section's prefix (ascend_*). The 4th Grade Explorer tables (attempts,
-- points_ledger, quiz_locks, redemptions, skill_progress) predate this and keep
-- their names; they're keyed by family_id and not covered by these migrations.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  username      text not null unique check (username ~ '^[a-z0-9_.-]{3,40}$'),
  display_name  text not null default '',
  section       text not null default 'psat' check (section in ('g4','psat','sat')),
  role          text not null default 'student' check (role in ('student','parent','admin')),
  active        boolean not null default true,
  created_at    timestamptz not null default now()
);
create index if not exists profiles_section_idx on public.profiles (section, role);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin' and active);
$$;

-- New auth user → profile.
-- * section comes from user_metadata (harmless: it only picks which section they see).
-- * role 'parent' and active=true come only from app_metadata, which only the service role
--   (the admin-users edge function) can set. Self-registered accounts start paused students.
-- * 'admin' is never set here. Promote admins by hand with SQL.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  base text := lower(coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1), 'user'));
  uname text;
  by_admin boolean := coalesce(new.raw_app_meta_data->>'created_by_admin', 'false') = 'true';
begin
  base := regexp_replace(base, '[^a-z0-9_.-]', '', 'g');
  if length(base) < 3 then base := base || 'user'; end if;
  base := left(base, 34);
  uname := base;
  if exists (select 1 from public.profiles where username = uname) then
    uname := base || '-' || left(replace(new.id::text, '-', ''), 5);
  end if;
  insert into public.profiles (id, username, display_name, section, role, active)
  values (
    new.id, uname,
    coalesce(new.raw_user_meta_data->>'display_name', ''),
    case when new.raw_user_meta_data->>'section' in ('g4','psat','sat') then new.raw_user_meta_data->>'section' else 'psat' end,
    case when by_admin and new.raw_app_meta_data->>'role' = 'parent' then 'parent' else 'student' end,
    by_admin
  )
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;

drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select using (id = auth.uid() or public.is_admin());
drop policy if exists profiles_admin on public.profiles;
create policy profiles_admin on public.profiles for update using (public.is_admin()) with check (public.is_admin());

revoke execute on function public.handle_new_user() from public, anon, authenticated;
