/* ==========================================================
   admin/accounts.js — kidostutor.com/admin/
   Accounts for every section: create, change section,
   reset password, pause/resume, delete, and login history.
   Admins only.

   Reads and simple updates go straight to the profiles table
   (RLS lets admins do that). Creating, resetting passwords and
   deleting need the service role, so they go through the
   admin-users edge function.
   ========================================================== */

import { sb, getProfile, signOut, friendlyError, PORTAL_URL } from "../shared/session.js";

const SECTIONS = { g4: "4th Grade", psat: "PSAT", sat: "SAT" };
const S = { me: null, list: null, links: [], created: null, resetFor: null, deleteFor: null, editFor: null, newRole: "student",
  seen: {}, logins: null, lf: { who: "", from: daysAgo(6), to: daysAgo(0) } };

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const opts = (map, cur) => Object.entries(map).map(([k, v]) => `<option value="${k}" ${k === cur ? "selected" : ""}>${esc(v)}</option>`).join("");

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.hidden = false;
  clearTimeout(toast.h); toast.h = setTimeout(() => (t.hidden = true), 3500);
}
function daysAgo(n) {
  const d = new Date(); d.setDate(d.getDate() - n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
const when = (t) => new Date(t).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
function ago(t) {
  const m = Math.round((Date.now() - new Date(t)) / 60000);
  if (m < 60) return m <= 1 ? "just now" : `${m} min ago`;
  const h = Math.round(m / 60); if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24); return d === 1 ? "yesterday" : `${d} days ago`;
}
function newPassword() {
  const w = ["maple", "river", "comet", "tiger", "piano", "cedar", "orbit", "lemon", "falcon", "harbor"];
  return w[Math.floor(Math.random() * w.length)] + Math.floor(10 + Math.random() * 90);
}

async function call(body) {
  const { data, error } = await sb.functions.invoke("admin-users", { body });
  if (error) {
    let msg = error.message;
    try { msg = (await error.context.json()).error || msg; } catch {}
    throw new Error(msg);
  }
  return data;
}

async function load() {
  const { data, error } = await sb.from("profiles").select("*").order("section").order("username");
  if (error) throw error;
  const { data: links, error: e2 } = await sb.from("parent_links").select("parent_id,student_id");
  if (e2) throw e2;
  S.list = data; S.links = links;
  // Login history needs migration 0006; the rest of the page works without it.
  const { data: seen, error: e3 } = await sb.rpc("login_summary");
  S.seen = e3 ? {} : Object.fromEntries(seen.map((r) => [r.user_id, r]));
}

/* Login history for the chosen person and dates (inclusive, local time). */
async function loadLogins() {
  const { who, from, to } = S.lf;
  const end = new Date(`${to}T00:00`); end.setDate(end.getDate() + 1);
  let q = sb.from("login_events").select("user_id,kind,section,at")
    .gte("at", new Date(`${from}T00:00`).toISOString()).lt("at", end.toISOString())
    .order("at", { ascending: false }).limit(500);
  if (who) q = q.eq("user_id", who);
  const { data, error } = await q;
  if (error) throw error;
  S.logins = data;
}
const students = () => (S.list || []).filter((p) => p.role === "student");
const kidsOf = (parentId) => S.links.filter((l) => l.parent_id === parentId).map((l) => l.student_id);
const kidName = (p) => `${p.display_name || p.username} · ${SECTIONS[p.section]}`;

/* Checkbox list of students; `checked` is an array of student ids. */
function kidBoxes(name, checked, parentId = "") {
  const list = students();
  if (!list.length) return '<p class="note">No students yet.</p>';
  return `<div class="kids">${list.map((k) => `<label class="check"><input type="checkbox" name="${name}" value="${k.id}" ${parentId ? `data-link="${parentId}"` : ""} ${checked.includes(k.id) ? "checked" : ""}> ${esc(kidName(k))}</label>`).join("")}</div>`;
}

/* ───────── view ───────── */
function render() {
  $("#who").innerHTML = `<a class="note" href="${PORTAL_URL}">All sections</a><button class="link" data-signout>Sign out</button>`;
  const c = S.created;
  const rows = (S.list || []).map((p) => {
    const me = p.id === S.me.id;
    let actions;
    if (S.editFor === p.id) {
      actions = `<input id="eName" value="${esc(p.display_name)}" placeholder="Name" class="small-input" aria-label="Name">
        ${p.role === "admin" ? "" : `<input id="eUser" value="${esc(p.username)}" class="small-input" aria-label="Username" autocapitalize="none">`}
        <button class="btn small" data-do-edit="${p.id}">Save</button><button class="link" data-cancel>Cancel</button>`;
    } else if (S.resetFor === p.id) {
      actions = `<input id="rp" value="${esc(newPassword())}" minlength="6" aria-label="New password" class="small-input">
        <label class="check"><input type="checkbox" id="rm" checked> must change</label>
        <button class="btn small" data-do-reset="${p.id}">Set</button><button class="link" data-cancel>Cancel</button>`;
    } else if (S.deleteFor === p.id) {
      actions = `<span class="err">Delete ${esc(p.username)}?</span>
        <button class="btn small danger" data-do-delete="${p.id}">Delete</button><button class="link" data-cancel>Cancel</button>`;
    } else {
      actions = `<button class="btn small ghost" data-edit="${p.id}">Edit</button><button class="btn small ghost" data-reset="${p.id}">Reset password</button>
        ${me ? "" : `<button class="btn small ghost" data-active="${p.id}">${p.active ? "Pause" : "Resume"}</button>
        <button class="link" data-delete="${p.id}">Delete</button>`}`;
    }
    return `<tr>
      <td><b>${esc(p.display_name || p.username)}</b><div class="mini muted">${esc(p.username)}</div></td>
      <td>${p.role === "admin" ? "All" : p.role === "parent" ? kidBoxes(`k_${p.id}`, kidsOf(p.id), p.id) : `<select data-section="${p.id}" aria-label="Section">${opts(SECTIONS, p.section)}</select>`}</td>
      <td>${esc(p.role)}</td>
      <td>${p.active ? '<span class="pill ok">active</span>' : '<span class="pill off">paused</span>'}
          ${p.must_change_password ? '<span class="pill warn">must reset password</span>' : ""}</td>
      <td>${seenCell(p)}</td>
      <td><div class="row">${actions}</div></td></tr>`;
  }).join("");

  $("#app").innerHTML = `
    <div class="intro"><p class="eyebrow">Admin</p><h1>Accounts</h1></div>
    <form id="newForm" class="panel">
      <h2>Add an account</h2>
      <div class="form-grid">
        <div class="field"><label for="nName">Name</label><input id="nName" maxlength="60" placeholder="e.g. Krishna"></div>
        <div class="field"><label for="nUser">Username</label><input id="nUser" required pattern="[a-z0-9_.\\-]{3,30}" autocapitalize="none" spellcheck="false" placeholder="e.g. krishna"></div>
        <div class="field"><label for="nRole">Role</label><select id="nRole">${opts({ student: "Student", parent: "Parent" }, S.newRole)}</select></div>
        ${S.newRole === "parent" ? "" : `<div class="field"><label for="nSection">Section</label><select id="nSection">${opts(SECTIONS, "g4")}</select></div>`}
        <div class="field"><label for="nPass">Password</label><input id="nPass" required minlength="6" value="${esc(newPassword())}"></div>
      </div>
      ${S.newRole === "parent" ? `<div class="field"><span class="label">Kids</span>${kidBoxes("nKids", [])}</div>` : ""}
      <div class="form-foot">
        <label class="check"><input type="checkbox" id="nMust" checked> Must change password at first sign-in</label>
        <button class="btn" type="submit">Create account</button>
      </div>
      <p class="err" id="nErr"></p>
      ${c ? `<div class="done"><b>${esc(c.username)}</b> is ready. Password: <b>${esc(c.password)}</b></div>` : ""}
    </form>
    <div class="panel table-panel">
      ${!S.list ? '<p class="muted">Loading…</p>' : S.list.length ? `<div class="tblwrap"><table>
        <thead><tr><th>Name</th><th>Section / kids</th><th>Role</th><th>Status</th><th>Last seen</th><th></th></tr></thead>
        <tbody>${rows}</tbody></table></div>` : '<p class="muted">No accounts yet.</p>'}
    </div>
    <div id="loginsWrap"></div>`;
  renderLogins();
}

/* Drawn on its own so changing the filter doesn't reset the add-account form. */
function renderLogins() {
  const w = $("#loginsWrap"); if (w) w.innerHTML = S.list ? loginPanel() : "";
}

function seenCell(p) {
  const r = S.seen[p.id];
  if (!r) return '<span class="muted mini">Never</span>';
  const n = Number(r.sign_ins) + Number(r.visits);
  return `<span title="${esc(when(r.last_at))}">${esc(ago(r.last_at))}</span>
    <div class="mini muted"><button class="link mini" data-history="${p.id}">${n} login${n === 1 ? "" : "s"}</button></div>`;
}

function loginPanel() {
  const { who, from, to } = S.lf;
  const byId = Object.fromEntries(S.list.map((p) => [p.id, p]));
  const people = Object.fromEntries([["", "Everyone"], ...S.list.map((p) => [p.id, `${p.display_name || p.username} (${p.role})`])]);
  const rows = (S.logins || []).map((r) => {
    const p = byId[r.user_id];
    return `<tr><td>${esc(when(r.at))}</td><td><b>${esc(p ? p.display_name || p.username : "Deleted account")}</b>${p ? `<div class="mini muted">${esc(p.username)}</div>` : ""}</td>
      <td>${r.kind === "sign_in" ? "Signed in" : "Came back"}</td><td>${esc(SECTIONS[r.section] || "Portal")}</td></tr>`;
  }).join("");
  return `<section class="panel table-panel" id="logins">
    <h2>Login history</h2>
    <div class="form-grid">
      <div class="field"><label for="lfWho">Who</label><select id="lfWho">${opts(people, who)}</select></div>
      <div class="field"><label for="lfFrom">From</label><input id="lfFrom" type="date" value="${from}" max="${to}"></div>
      <div class="field"><label for="lfTo">To</label><input id="lfTo" type="date" value="${to}" min="${from}" max="${daysAgo(0)}"></div>
    </div>
    ${!S.logins ? '<p class="muted">Loading…</p>' : S.logins.length ? `<div class="tblwrap"><table>
      <thead><tr><th>When</th><th>Who</th><th>How</th><th>Section</th></tr></thead><tbody>${rows}</tbody></table></div>
      ${S.logins.length === 500 ? '<p class="note">Showing the latest 500. Narrow the dates to see older ones.</p>' : ""}`
      : '<p class="muted">No logins in these dates.</p>'}
    <p class="note">“Signed in” means they typed their password. “Came back” means they opened the site while still signed in (counted once per browser tab).</p>
  </section>`;
}

async function refreshLogins() {
  try { await loadLogins(); } catch (er) { S.logins = []; toast(friendlyError(er)); }
  renderLogins();
}

/* ───────── events ───────── */
document.addEventListener("click", async (e) => {
  const t = e.target.closest("button"); if (!t) return;
  const d = t.dataset;
  try {
    if (t.hasAttribute("data-signout")) return signOut();
    if (d.history) {
      S.lf = { who: d.history, from: daysAgo(29), to: daysAgo(0) }; S.logins = null; renderLogins();
      $("#logins").scrollIntoView({ behavior: "smooth" });
      return refreshLogins();
    }
    if (t.hasAttribute("data-cancel")) { S.resetFor = S.deleteFor = S.editFor = null; return render(); }
    if (d.edit) { S.editFor = d.edit; S.resetFor = S.deleteFor = null; return render(); }
    if (d.doEdit) {
      const p = S.list.find((x) => x.id === d.doEdit);
      const username = ($("#eUser")?.value ?? p.username).trim().toLowerCase(), display_name = $("#eName").value.trim();
      await call({ action: "rename", user_id: p.id, username, display_name });
      const renamed = username !== p.username;
      Object.assign(p, { username, display_name }); S.editFor = null;
      toast(renamed ? "Saved. They sign in with the new username now." : "Saved."); return render();
    }
    if (d.reset) { S.resetFor = d.reset; S.deleteFor = S.editFor = null; return render(); }
    if (d.delete) { S.deleteFor = d.delete; S.resetFor = S.editFor = null; return render(); }
    if (d.doReset) {
      const pw = $("#rp").value, must = $("#rm").checked;
      await call({ action: "set_password", user_id: d.doReset, password: pw, must_change_password: must });
      const p = S.list.find((x) => x.id === d.doReset);
      p.must_change_password = must; S.resetFor = null; S.created = { username: p.username, password: pw };
      toast("Password reset."); return render();
    }
    if (d.doDelete) {
      await call({ action: "delete", user_id: d.doDelete });
      S.list = S.list.filter((x) => x.id !== d.doDelete); S.deleteFor = null;
      toast("Account deleted."); return render();
    }
    if (d.active) {
      const p = S.list.find((x) => x.id === d.active);
      const { error } = await sb.from("profiles").update({ active: !p.active }).eq("id", p.id);
      if (error) throw error;
      p.active = !p.active; return render();
    }
  } catch (er) { toast(friendlyError(er)); }
});

document.addEventListener("change", async (e) => {
  const t = e.target;
  if (["lfWho", "lfFrom", "lfTo"].includes(t.id)) {
    const from = $("#lfFrom").value, to = $("#lfTo").value;
    if (!from || !to) return;
    S.lf = { who: $("#lfWho").value, from: from <= to ? from : to, to: from <= to ? to : from };
    S.logins = null; renderLogins();
    return refreshLogins();
  }
  if (t.id === "nRole") {
    // keep what's typed in the form while switching between student and parent fields
    const keep = ["nName", "nUser", "nPass"].map((i) => [i, $("#" + i).value]);
    const must = $("#nMust").checked;
    S.newRole = t.value; render();
    keep.forEach(([i, v]) => ($("#" + i).value = v)); $("#nMust").checked = must;
    return;
  }
  if (t.dataset.link) {
    const row = { parent_id: t.dataset.link, student_id: t.value };
    const { error } = t.checked
      ? await sb.from("parent_links").insert(row)
      : await sb.from("parent_links").delete().eq("parent_id", row.parent_id).eq("student_id", row.student_id);
    if (error) { t.checked = !t.checked; return toast(friendlyError(error)); }
    S.links = t.checked ? [...S.links, row] : S.links.filter((l) => !(l.parent_id === row.parent_id && l.student_id === row.student_id));
    return toast(t.checked ? "Linked." : "Unlinked.");
  }
  const id = t.dataset.section; if (!id) return;
  const { error } = await sb.from("profiles").update({ section: e.target.value }).eq("id", id);
  if (error) return toast(friendlyError(error));
  S.list.find((x) => x.id === id).section = e.target.value;
  toast("Section updated.");
});

document.addEventListener("submit", async (e) => {
  if (e.target.id !== "newForm") return;
  e.preventDefault();
  const body = {
    action: "create",
    display_name: $("#nName").value.trim(),
    username: $("#nUser").value.trim().toLowerCase(),
    section: $("#nSection")?.value || "g4",
    role: $("#nRole").value,
    password: $("#nPass").value,
    must_change_password: $("#nMust").checked
  };
  const btn = e.target.querySelector("button[type=submit]"); btn.disabled = true;
  const kids = [...document.querySelectorAll('input[name="nKids"]:checked')].map((i) => i.value);
  try {
    const made = await call(body);
    if (kids.length) {
      const { error } = await sb.from("parent_links").insert(kids.map((k) => ({ parent_id: made.id, student_id: k })));
      if (error) throw error;
    }
    S.created = { username: body.username, password: body.password };
    await load(); render();
  } catch (er) {
    btn.disabled = false; $("#nErr").textContent = friendlyError(er);
  }
});

/* ───────── boot ───────── */
(async () => {
  let me = null;
  try { me = await getProfile(); } catch {}
  if (!me || me.role !== "admin" || !me.active) { location.replace(PORTAL_URL); return; }
  S.me = me; render();
  try { await load(); } catch (er) { toast(friendlyError(er)); }
  render();
  if (S.list) refreshLogins();
})();
