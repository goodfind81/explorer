/* ==========================================================
   auth.js
   Role detection for the 4th Grade Explorer.

   Sign-in now happens once, on the site portal (/), with a
   username + password (Supabase Auth). On boot:
     1. startSession() asks shared/session.js for the profile
        and sends anyone without 4th Grade access back to the
        portal
     2. the profile maps to a role:
          role "student"           → "kid"
          role "parent" / "admin"  → "parent"
     3. the role is mirrored to localStorage so the rest of
        the app can keep calling the synchronous getSession()

   Data access is unchanged: everything is still keyed by
   FAMILY_ID through the REST helpers in supabase-config.js.
   ========================================================== */

import { FAMILY_ID, LS_KEYS, setFamilyId } from "./supabase-config.js";
import { requireSection, signOut, pickKid, g4FamilyId, nameOf, PORTAL_URL } from "../../shared/session.js";
import { mountSitebar } from "../../shared/sitebar.js";

/* ==========================================================
   Current state
   ========================================================== */

/**
 * Checks the shared login, then saves and returns the session.
 * Never resolves for users without 4th Grade access (they are
 * redirected to the portal).
 */
export async function startSession() {
  const profile = await requireSection("g4");
  // Students see their own data; parents/admins see the kid picked on the portal (?kid=).
  const kid = profile.role === "student" ? profile : pickKid(profile, "g4");
  if (!kid) { location.replace(PORTAL_URL); return new Promise(() => {}); }
  mountSitebar(profile, profile.role === "parent" ? kid.id : "g4");
  setFamilyId(g4FamilyId(kid));
  setSession(profile.username, profile.role === "student" ? "kid" : "parent");
  kidName = nameOf(kid);
  return getSession();
}
let kidName = "";

/**
 * Returns the current session, or null if not signed in.
 * {
 *   code: "<username>",
 *   role: "kid" | "parent",
 *   familyId: "srk-family"
 * }
 */
export function getSession() {
  try {
    const code = localStorage.getItem(LS_KEYS.familyCode);
    const role = localStorage.getItem(LS_KEYS.role);
    if (!code || !role) return null;
    if (role !== "kid" && role !== "parent") return null;
    return { code, role, familyId: FAMILY_ID, kidName };
  } catch (e) {
    return null;
  }
}

function setSession(code, role) {
  try {
    localStorage.setItem(LS_KEYS.familyCode, code);
    localStorage.setItem(LS_KEYS.role, role);
  } catch (e) {
    // localStorage might be disabled — getSession() will return null
    console.warn("Could not save session:", e);
  }
}

/**
 * Clear the session and sign out of the whole site.
 * Ends on the portal's sign-in page.
 */
export async function logout() {
  try {
    localStorage.removeItem(LS_KEYS.familyCode);
    localStorage.removeItem(LS_KEYS.role);
  } catch (e) {}
  await signOut();
}

/* ==========================================================
   Small "logout" link for the footer
   ========================================================== */

/**
 * Renders the current role + a logout link into a container.
 */
export function renderRoleIndicator(container, session) {
  if (!session) {
    container.innerHTML = "";
    return;
  }

  const roleLabel = session.role === "parent" ? "Parent" : "Student";
  const roleEmoji = session.role === "parent" ? "👤" : "🎒";

  container.innerHTML = `
    <div class="role-indicator">
      <span class="role-label">${roleEmoji} ${roleLabel} mode${session.role === "parent" && session.kidName ? ` · ${session.kidName}` : ""}</span>
      <button class="logout-btn" id="logoutBtn" title="Sign out">Sign out</button>
    </div>
  `;

  const btn = container.querySelector("#logoutBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      if (confirm("Sign out? You'll need your username and password next time.")) {
        logout();
      }
    });
  }
}

/* ==========================================================
   Convenience check
   ========================================================== */

export function isParent(session) {
  return session && session.role === "parent";
}

export function isKid(session) {
  return session && session.role === "kid";
}
