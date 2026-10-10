-- Simpler accounts: every new account starts active. Safe to re-run.
-- Public sign-ups are off in Supabase Auth, so only the admin can create accounts anyway.
-- Role and must_change_password are set by the admin-users function right after it
-- creates the user (Supabase writes app_metadata after the insert, so a trigger can't see it).

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  base text := lower(coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1), 'user'));
  uname text;
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
    'student',
    true
  )
  on conflict (id) do nothing;
  return new;
end $$;

alter table public.profiles alter column active set default true;

-- Turn on the accounts that were created paused by the old trigger.
update public.profiles set active = true where not active;
