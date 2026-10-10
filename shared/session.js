/* ==========================================================
   shared/session.js
   One login for the whole site. The portal (/) signs people in;
   each section calls requireSection() to check access and get
   the signed-in profile, or bounce back to the portal.

   profiles.section: "g4" | "psat" | "sat"
   profiles.role:    "student" | "parent" | "admin"
   Admins can open every section.
   ========================================================== */

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";
import { SUPABASE_URL, SUPABASE_KEY, STUDENT_EMAIL_DOMAIN } from "./config.js";

export const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

/* URLs are resolved from this file's location, so they work at
   kidostutor.com/ and on a local server alike. */
const root = new URL("../", import.meta.url);
export const PORTAL_URL = root.href;

export const SECTIONS = {
  g4:   { name: "4th Grade Explorer", short: "4th Grade", href: new URL("grade4/", root).href },
  psat: { name: "PSAT Practice",      short: "PSAT",      href: new URL("ascend/", root).href },
  sat:  { name: "SAT Practice",       short: "SAT",       href: new URL("ascend/", root).href }
};
export const ASCEND_ADMIN_URL = new URL("ascend/admin.html", root).href;

/** "krishna" → krishna@domain; an email (admins) is used as is. */
export function loginEmail(name) {
  const n = name.trim().toLowerCase();
  return n.includes("@") ? n : `${n}@${STUDENT_EMAIL_DOMAIN}`;
}

export async function signIn(username, password) {
  const { error } = await sb.auth.signInWithPassword({ email: loginEmail(username), password });
  if (error) throw error;
  return getProfile();
}

/**
 * The signed-in user's profile, or null when signed out.
 * Parents and admins also get `kids`: the students they can follow
 * (a parent's linked kids; for admins, every student).
 */
export async function getProfile() {
  const { data } = await sb.auth.getSession();
  if (!data.session) return null;
  const { data: prof, error } = await sb.from("profiles").select("*").eq("id", data.session.user.id).single();
  if (error) throw error;
  if (prof.role === "parent" || prof.role === "admin") {
    // RLS limits this to linked kids for parents and all profiles for admins.
    const { data: kids, error: e2 } = await sb.from("profiles").select("*")
      .eq("role", "student").order("display_name");
    if (e2) throw e2;
    prof.kids = kids;
  }
  return prof;
}

/** The family_id a 4th Grader's Explorer data lives under. Keyed by the account id, so renames are safe. */
export function g4FamilyId(kid) {
  return kid.g4_family_id || `g4-${kid.id}`;
}

/** Display name for a profile. */
export function nameOf(p) {
  return p.display_name || p.username;
}

export function canOpen(profile, section) {
  if (!profile || !profile.active) return false;
  if (profile.must_change_password) return false;   // the portal makes them set a new one first
  if (profile.role === "admin") return true;
  if (profile.role === "parent") return (profile.kids || []).some((k) => k.section === section);
  return profile.section === section;
}

/** Link into a section for a student, or for a parent/admin following that kid. */
export function kidHref(kid) {
  return `${SECTIONS[kid.section].href}?kid=${encodeURIComponent(kid.id)}`;
}

/** Where a profile lands after signing in. Admins (and parents with several kids) stay on the portal to pick. */
export function homeFor(profile) {
  if (!profile || profile.role === "admin") return null;
  if (profile.role === "parent") return profile.kids?.length === 1 ? kidHref(profile.kids[0]) : null;
  return SECTIONS[profile.section]?.href ?? null;
}

/**
 * For parents/admins on a section page: the kid named by ?kid=, else the first
 * kid they follow in one of `sections`. Null when there is none.
 */
export function pickKid(profile, sections) {
  const allowed = [].concat(sections);
  const kids = (profile.kids || []).filter((k) => allowed.includes(k.section));
  const want = new URLSearchParams(location.search).get("kid");
  return kids.find((k) => k.id === want) || kids[0] || null;
}

/**
 * Use at the top of a section page. Returns the profile when the
 * signed-in user may open `sections` (a key or an array of keys);
 * otherwise sends them to the portal and never resolves.
 */
export async function requireSection(sections) {
  const allowed = [].concat(sections);
  let prof = null;
  try { prof = await getProfile(); } catch (e) { console.warn("Could not load profile:", e); }
  if (prof && allowed.some((s) => canOpen(prof, s))) return prof;
  location.replace(PORTAL_URL);
  return new Promise(() => {});
}

/** Set a new password and clear the "must change password" flag. */
export async function changePassword(password) {
  const { error } = await sb.auth.updateUser({ password });
  if (error) throw error;
  const { error: e2 } = await sb.rpc("password_changed");
  if (e2) throw e2;
}

export async function signOut() {
  await sb.auth.signOut();
  location.href = PORTAL_URL;
}

export function friendlyError(e) {
  const m = (e && (e.message || e.error_description || e.error)) || String(e || "");
  if (/Invalid login credentials/i.test(m)) return "That username and password don’t match. Check both and try again.";
  if (/not active/i.test(m)) return "This account is paused. Ask your tutor to turn it back on.";
  if (/same_password|should be different/i.test(m)) return "Pick a password that’s different from the one your tutor gave you.";
  if (/at least \d+ characters|weak_password/i.test(m)) return "Passwords need at least 6 characters.";
  if (/Failed to fetch|NetworkError/i.test(m)) return "Can’t reach the server. Check your internet connection.";
  return m || "Something went wrong. Try again.";
}
