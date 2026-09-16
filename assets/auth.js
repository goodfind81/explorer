/* ==========================================================
   auth.js
   Handles family-code entry and role detection.

   Flow:
     1. App boots → checks localStorage for a saved code
     2. If none → shows the login screen
     3. User enters a code:
          - matches FAMILY_CODE_KID    → role = "kid"
          - matches FAMILY_CODE_PARENT → role = "parent"
          - else → error
     4. Code + role are saved to localStorage
     5. Every subsequent page load skips the login screen

   Logout clears both localStorage keys and shows the login
   screen again.
   ========================================================== */

import {
  FAMILY_CODE_KID,
  FAMILY_CODE_PARENT,
  FAMILY_ID,
  LS_KEYS
} from "./supabase-config.js";

/* ==========================================================
   Current state
   ========================================================== */

/**
 * Returns the current session, or null if not signed in.
 * {
 *   code: "srk" | "ar",
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
    return { code, role, familyId: FAMILY_ID };
  } catch (e) {
    return null;
  }
}

/**
 * Save a session after a successful login.
 */
function setSession(code, role) {
  try {
    localStorage.setItem(LS_KEYS.familyCode, code);
    localStorage.setItem(LS_KEYS.role, role);
  } catch (e) {
    // localStorage might be disabled — app will still work
    // but the user will have to log in again next time
    console.warn("Could not save session:", e);
  }
}

/**
 * Clear the session.
 */
export function logout() {
  try {
    localStorage.removeItem(LS_KEYS.familyCode);
    localStorage.removeItem(LS_KEYS.role);
  } catch (e) {}
}

/* ==========================================================
   Login screen
   ========================================================== */

/**
 * Renders the login screen into the given container.
 * On success, calls onSuccess(session).
 *
 * @param {HTMLElement} container
 * @param {Function} onSuccess
 */
export function renderLoginScreen(container, onSuccess) {
  container.innerHTML = `
    <div class="login-screen">
      <div class="login-card">
        <div class="login-logo">🎒</div>
        <h1 class="login-title">Welcome Back!</h1>
        <p class="login-sub">Enter your code to continue</p>

        <form id="loginForm" class="login-form" autocomplete="off">
          <input
            type="text"
            id="loginCode"
            class="login-input"
            placeholder="Enter code"
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            required
          />
          <button type="submit" class="login-btn">Continue →</button>
        </form>

        <div class="login-error" id="loginError"></div>
      </div>
    </div>
  `;

  const form = container.querySelector("#loginForm");
  const input = container.querySelector("#loginCode");
  const errorEl = container.querySelector("#loginError");

  // Focus the input
  setTimeout(() => input.focus(), 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered = input.value.trim().toLowerCase();

    if (!entered) {
      showError("Please enter a code");
      return;
    }

    let role = null;
    if (entered === FAMILY_CODE_KID.toLowerCase()) {
      role = "kid";
    } else if (entered === FAMILY_CODE_PARENT.toLowerCase()) {
      role = "parent";
    }

    if (!role) {
      showError("That code doesn't match. Try again.");
      input.select();
      return;
    }

    setSession(entered, role);
    onSuccess({ code: entered, role, familyId: FAMILY_ID });
  });

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.classList.add("show");
  }
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
      <span class="role-label">${roleEmoji} ${roleLabel} mode</span>
      <button class="logout-btn" id="logoutBtn" title="Sign out">Sign out</button>
    </div>
  `;

  const btn = container.querySelector("#logoutBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      if (confirm("Sign out? You'll need to enter the code again next time.")) {
        logout();
        window.location.reload();
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