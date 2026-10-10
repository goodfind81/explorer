-- Force a password change at next sign-in. Safe to re-run.
-- The admin-users function sets the flag (create / reset password); the portal makes the
-- user pick a new password, then calls password_changed() to clear it.

alter table public.profiles add column if not exists must_change_password boolean not null default false;

-- Same as 0001's version, plus must_change_password from app_metadata (service role only).
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
  insert into public.profiles (id, username, display_name, section, role, active, must_change_password)
  values (
    new.id, uname,
    coalesce(new.raw_user_meta_data->>'display_name', ''),
    case when new.raw_user_meta_data->>'section' in ('g4','psat','sat') then new.raw_user_meta_data->>'section' else 'psat' end,
    case when by_admin and new.raw_app_meta_data->>'role' = 'parent' then 'parent' else 'student' end,
    by_admin,
    by_admin and coalesce(new.raw_app_meta_data->>'must_change_password', 'false') = 'true'
  )
  on conflict (id) do nothing;
  return new;
end $$;

-- Called by the signed-in user right after they set a new password.
create or replace function public.password_changed() returns void
language sql security definer set search_path = public as $$
  update public.profiles set must_change_password = false where id = auth.uid();
$$;

revoke execute on function public.password_changed() from public, anon;
grant execute on function public.password_changed() to authenticated;
