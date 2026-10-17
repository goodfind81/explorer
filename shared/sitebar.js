/* ==========================================================
   shared/sitebar.js
   One navigation bar across the top of every page, so admins
   and parents can reach everything from anywhere.

   mountSitebar(profile, current)
     current: "home" | "accounts" | "logins" | "questions" |
              "g4" | "ascend" | a kid's profile id
   Admin:   Home · Accounts · Logins · PSAT/SAT questions · 4th Grade · PSAT/SAT
   Parent:  Home · one link per kid
   Student: Home
   Everyone gets their name and Sign out on the right.
   ========================================================== */

import { PORTAL_URL, SECTIONS, ASCEND_ADMIN_URL, kidHref, nameOf, signOut } from "./session.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ACCOUNTS_URL = new URL("admin/", PORTAL_URL).href;

const CSS = `
.kt-bar{--kt-bg:#13201d;--kt-ink:#e9f2ef;--kt-muted:#9fb5ae;--kt-on:#2b8a77;
  background:var(--kt-bg);color:var(--kt-ink);font:500 14px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;position:relative;z-index:20}
.kt-bar *{box-sizing:border-box}
.kt-in{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;gap:4px;min-height:44px}
.kt-links{display:flex;align-items:center;gap:2px;overflow-x:auto;scrollbar-width:none;flex:1;min-width:0}
.kt-links::-webkit-scrollbar{display:none}
.kt-bar a,.kt-bar button{color:var(--kt-ink);text-decoration:none;white-space:nowrap;padding:8px 10px;border-radius:6px;border:0;background:none;font:inherit;cursor:pointer}
.kt-bar a:hover,.kt-bar button:hover{background:rgba(255,255,255,.08)}
.kt-bar a:focus-visible,.kt-bar button:focus-visible{outline:2px solid var(--kt-ink);outline-offset:1px}
.kt-bar a[aria-current="page"]{background:var(--kt-on);color:#fff}
.kt-home{font-weight:800}
.kt-sep{width:1px;height:20px;background:rgba(255,255,255,.18);margin:0 6px;flex:none}
.kt-me{display:flex;align-items:center;gap:4px;flex:none;color:var(--kt-muted)}
.kt-me .kt-name{padding:0 6px;max-width:16ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.kt-tag{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--kt-muted);padding:0 6px 0 2px}
@media (max-width:560px){
  .kt-in{flex-wrap:wrap;padding:4px 10px}
  .kt-links{order:2;flex-basis:100%;flex-wrap:wrap;overflow:visible}
  .kt-me{order:1;margin-left:auto}
  .kt-sep,.kt-tag{display:none}
  .kt-bar a,.kt-bar button{padding:7px 9px}
}
@media print{.kt-bar{display:none}}
`;

function links(profile) {
  const L = [{ key: "home", label: "KidosTutor", href: PORTAL_URL, cls: "kt-home" }];
  if (profile.role === "admin") {
    L.push(
      { sep: true },
      { key: "accounts", label: "Accounts", href: ACCOUNTS_URL },
      { key: "logins", label: "Logins", href: ACCOUNTS_URL + "#logins" },
      { key: "questions", label: "PSAT/SAT questions", href: ASCEND_ADMIN_URL },
      { sep: true },
      { key: "g4", label: "4th Grade", href: SECTIONS.g4.href },
      { key: "ascend", label: "PSAT/SAT", href: SECTIONS.psat.href },
    );
  } else if (profile.role === "parent" && (profile.kids || []).length) {
    L.push({ sep: true }, { tag: "Kids" });
    profile.kids.forEach((k) => L.push({ key: k.id, label: `${nameOf(k)} · ${SECTIONS[k.section]?.short || ""}`, href: kidHref(k) }));
  }
  return L;
}

export function mountSitebar(profile, current = "") {
  if (!profile || document.querySelector(".kt-bar")) return;
  if (!document.getElementById("kt-bar-css")) {
    const st = document.createElement("style"); st.id = "kt-bar-css"; st.textContent = CSS;
    document.head.appendChild(st);
  }
  const bar = document.createElement("nav");
  bar.className = "kt-bar";
  bar.setAttribute("aria-label", "Site");
  bar.innerHTML = `<div class="kt-in"><div class="kt-links">${links(profile).map((l) =>
      l.sep ? '<span class="kt-sep" aria-hidden="true"></span>'
      : l.tag ? `<span class="kt-tag">${esc(l.tag)}</span>`
      : `<a href="${esc(l.href)}" class="${l.cls || ""}" ${l.key === current ? 'aria-current="page"' : ""}>${esc(l.label)}</a>`).join("")}</div>
    <div class="kt-me"><span class="kt-name">${esc(nameOf(profile))}</span><button type="button" data-kt-signout>Sign out</button></div></div>`;
  bar.querySelector("[data-kt-signout]").addEventListener("click", () => signOut());
  document.body.prepend(bar);
  // The Logins link points at a section of the Accounts page; keep the highlight in sync.
  if (current === "accounts" || current === "logins") {
    const sync = () => bar.querySelectorAll("a").forEach((a) => {
      const k = a.textContent === "Logins" ? "logins" : a.textContent === "Accounts" ? "accounts" : null;
      if (k) a.toggleAttribute("aria-current", k === (location.hash === "#logins" ? "logins" : "accounts"));
      if (k && a.hasAttribute("aria-current")) a.setAttribute("aria-current", "page");
    });
    sync(); window.addEventListener("hashchange", sync);
  }
}
