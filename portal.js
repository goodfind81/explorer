/* ==========================================================
   portal.js — kidostutor.com/
   Signed out: the three sections + a sign-in form.
   Signed in:  students and parents go straight to their
               section; admins pick from the three cards.
   ========================================================== */

import { mountSitebar } from "./shared/sitebar.js";
import { sb, signIn, signOut, getProfile, logLogin, homeFor, kidHref, nameOf, changePassword, friendlyError, SECTIONS } from "./shared/session.js";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const CARDS = [
  { key: "g4", icon: "🎒", blurb: "Science, Math and History chapters with study guides, quick checks, quizzes and daily homework. Points turn into rewards." },
  { key: "psat", icon: "📘", blurb: "15 Reading & Writing and 15 Math questions a day at PSAT 8/9 and PSAT 10 difficulty, aimed at your weak skills." },
  { key: "sat", icon: "🎓", blurb: "The same daily fifteen at SAT and PSAT/NMSQT difficulty: medium to hard questions." }
];

function card(c, body) {
  const s = SECTIONS[c.key];
  return `<article class="card sec-${c.key}">
    <div class="card-head"><span class="card-icon" aria-hidden="true">${c.icon}</span><h2>${esc(s.name)}</h2></div>
    <p class="muted">${esc(c.blurb)}</p>
    ${body || ""}
  </article>`;
}

/* ───────── views ───────── */
function viewSignedOut(err = "") {
  $("#who").innerHTML = "";
  $("#app").innerHTML = `
    <div class="intro"><p class="eyebrow">Welcome</p><h1>Sign in to start practicing</h1>
      <p class="muted">One login for every section. You’ll go straight to yours.</p></div>
    <div class="split">
      <form id="loginForm" class="panel login">
        <div class="field"><label for="lu">Username</label><input id="lu" autocomplete="username" autocapitalize="none" spellcheck="false" required></div>
        <div class="field"><label for="lp">Password</label><input id="lp" type="password" autocomplete="current-password" required></div>
        <p class="err" id="loginErr">${esc(err)}</p>
        <button class="btn" type="submit">Sign in</button>
        <p class="note">No account yet? Your tutor creates it for you.</p>
      </form>
      <div class="cards">${CARDS.map((c) => card(c)).join("")}</div>
    </div>`;
  $("#lu").focus();
}

async function viewAdmin(profile) {
  renderWho(profile);
  const draw = (counts) => {
    $("#app").innerHTML = `
      <div class="intro admin-intro"><div><p class="eyebrow">Admin</p><h1>Hi ${esc(profile.display_name || profile.username)}. Pick a section.</h1></div>
        <a class="btn ghost" href="admin/">Manage accounts</a></div>
      <div class="cards three">${CARDS.map((c) => card(c,
        `${counts ? `<p class="count">${counts[c.key] || 0} account${counts[c.key] === 1 ? "" : "s"}</p>` : ""}<div class="actions"><a class="btn" href="${SECTIONS[c.key].href}">Open</a></div>`)).join("")}</div>`;
  };
  draw(null);
  // Admins can read every profile (RLS), so show how many accounts each section has.
  const { data } = await sb.from("profiles").select("section,role").neq("role", "admin");
  if (data) { const n = {}; data.forEach((p) => (n[p.section] = (n[p.section] || 0) + 1)); draw(n); }
}

function viewParent(profile) {
  renderWho(profile);
  const kids = profile.kids || [];
  if (!kids.length) return viewMessage(profile, "No kids linked yet", "Ask your tutor to link your account to your kids.");
  const icon = Object.fromEntries(CARDS.map((c) => [c.key, c.icon]));
  $("#app").innerHTML = `
    <div class="intro"><p class="eyebrow">Parent</p><h1>Hi ${esc(nameOf(profile))}. Whose progress?</h1></div>
    <div class="cards three">${kids.map((k) => `<article class="card sec-${k.section}">
      <div class="card-head"><span class="card-icon" aria-hidden="true">${icon[k.section] || ""}</span><h2>${esc(nameOf(k))}</h2></div>
      <p class="muted">${esc(SECTIONS[k.section].name)}</p>
      <div class="actions"><a class="btn" href="${kidHref(k)}">Open</a></div></article>`).join("")}</div>`;
}

function viewChangePassword(profile, err = "") {
  renderWho(profile);
  $("#app").innerHTML = `
    <div class="intro"><p class="eyebrow">One more step</p><h1>Set a new password</h1>
      <p class="muted">Choose your own password. You’ll use it from now on.</p></div>
    <form id="pwForm" class="panel login">
      <div class="field"><label for="np1">New password</label><input id="np1" type="password" minlength="6" autocomplete="new-password" required></div>
      <div class="field"><label for="np2">Type it again</label><input id="np2" type="password" minlength="6" autocomplete="new-password" required></div>
      <p class="err" id="pwErr">${esc(err)}</p>
      <button class="btn" type="submit">Save and continue</button>
      <p class="note">At least 6 characters.</p>
    </form>`;
  $("#np1").focus();
}

function viewMessage(profile, title, text) {
  renderWho(profile);
  $("#app").innerHTML = `<div class="intro"><h1>${esc(title)}</h1><p class="muted">${esc(text)}</p></div>
    <div class="actions"><button class="btn ghost" data-signout>Sign out</button></div>`;
}

// Signed-in users get the site bar (links + Sign out) instead of a header menu.
function renderWho(profile) {
  $("#who").innerHTML = "";
  if (profile) mountSitebar(profile, "home");
}

/* ───────── routing ───────── */
async function route(profile) {
  if (!profile) return viewSignedOut();
  if (!profile.active) return viewMessage(profile, "This account is paused", "Ask your tutor to turn it back on.");
  if (profile.must_change_password) return viewChangePassword(profile);
  if (profile.role === "admin") return viewAdmin(profile);
  const home = homeFor(profile);
  if (!home && profile.role === "parent") return viewParent(profile);
  if (!home) return viewMessage(profile, "No section yet", "Your account isn’t linked to a section. Ask your tutor.");
  $("#app").innerHTML = `<p class="muted">Opening…</p>`;
  location.replace(home);
}

document.addEventListener("submit", async (e) => {
  if (e.target.id === "pwForm") {
    e.preventDefault();
    const p1 = $("#np1").value, p2 = $("#np2").value;
    if (p1 !== p2) { $("#pwErr").textContent = "The two passwords don’t match."; return; }
    const btn = e.target.querySelector("button[type=submit]");
    btn.disabled = true; btn.textContent = "Saving…";
    try {
      await changePassword(p1);
      await route(await getProfile());
    } catch (er) {
      btn.disabled = false; btn.textContent = "Save and continue";
      $("#pwErr").textContent = friendlyError(er);
    }
    return;
  }
  if (e.target.id !== "loginForm") return;
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = "Signing in…";
  try {
    await route(await signIn($("#lu").value, $("#lp").value));
  } catch (er) {
    btn.disabled = false; btn.textContent = "Sign in";
    $("#loginErr").textContent = friendlyError(er);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-signout]")) signOut();
});

(async () => {
  try {
    const profile = await getProfile();
    if (profile) logLogin("visit", profile.id);
    await route(profile);
  } catch (er) {
    // Signed in but the profile can't load (e.g. migrations not run yet).
    await sb.auth.signOut();
    viewSignedOut(friendlyError(er));
  }
})();
