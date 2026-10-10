// The Supabase client, login and section routing are shared with the rest of the site.
export { sb, loginEmail, friendlyError, requireSection, signOut, PORTAL_URL, pickKid, nameOf } from "../shared/session.js";

export const PER_DAY = 15;
export const L = "ABCD";
// profiles.section for Ascend accounts. Picks the question levels (see ascend_levels in SQL).
export const ASCEND_SECTIONS = {
  psat: { grade: "PSAT", test: "PSAT 8/9 & PSAT 10", levels: [1, 2] },
  sat: { grade: "SAT", test: "SAT & PSAT/NMSQT", levels: [2, 3] },
};
export const SUBJ = {
  rw: { name: "Reading & Writing", domains: ["Craft and Structure", "Information and Ideas", "Standard English Conventions", "Expression of Ideas"],
    skills: { "Craft and Structure": ["Words in Context", "Text Structure and Purpose", "Cross-Text Connections"], "Information and Ideas": ["Central Ideas and Details", "Command of Evidence", "Inferences"], "Standard English Conventions": ["Boundaries", "Form, Structure, and Sense"], "Expression of Ideas": ["Transitions", "Rhetorical Synthesis"] } },
  math: { name: "Math", domains: ["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"],
    skills: { "Algebra": ["Linear equations in one variable", "Linear functions", "Systems of linear equations", "Linear inequalities"], "Advanced Math": ["Equivalent expressions", "Nonlinear equations", "Nonlinear functions"], "Problem-Solving and Data Analysis": ["Ratios, rates, and proportions", "Percentages", "One-variable data", "Two-variable data", "Probability and conditional probability", "Inference from sample statistics"], "Geometry and Trigonometry": ["Area and volume", "Lines, angles, and triangles", "Right triangles and trigonometry", "Circles"] } },
};

export const $ = (s, r = document) => r.querySelector(s);
export const pad = (n) => String(n).padStart(2, "0");
export const dstr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const today = () => dstr(new Date());
export function esc(s) { return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
export function inline(s) { return esc(s).replace(/\^\{([^}]*)\}/g, "<sup>$1</sup>").replace(/_{4,}/g, '<span class="blank" aria-label="blank"></span>'); }
export function fmt(s) { return String(s ?? "").split(/\n\n+/).map((p) => "<p>" + inline(p).replace(/\n/g, "<br>") + "</p>").join(""); }
export function fmtDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }); }
export function ago(s) { if (!s) return "Never"; const days = Math.round((new Date(today()) - new Date(s)) / 864e5); return days <= 0 ? "Today" : days === 1 ? "Yesterday" : `${days} days ago`; }

export function toast(msg) {
  let t = $("#toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.append(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => (t.hidden = true), 3500);
}


/** The passage side of a question (passage + optional table). */
export function passageHtml(q) {
  if (!q.passage && !q.data_table) return "";
  const t = q.data_table;
  const table = t && Array.isArray(t.h) ? `<div class="tbl"><table><thead><tr>${t.h.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${(t.r || []).map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
  return `<div class="passage">${fmt(q.passage || "")}${table}</div>`;
}

/** Answer area. `state`: {selected, answered:{response,correct,answer_index,accept,explanation}|null, disabled} */
export function answerHtml(q, state = {}) {
  const a = state.answered;
  if (!q.choices) {
    const cls = a ? (a.correct ? "right" : "wrong") : "";
    return `<div class="gridin ${cls}"><label for="gridin" class="note">Your answer</label><input id="gridin" inputmode="decimal" autocomplete="off" value="${esc(a ? a.response : state.selected ?? "")}" ${a || state.disabled ? "disabled" : ""} placeholder="e.g. 3/4"></div>
      <p class="note">Type a number, decimal, or fraction like 5/2.</p>`;
  }
  const sel = a ? Number(a.response) : state.selected;
  const key = a ? a.answer_index : state.showKey ? q.answer_index : null;
  return `<div class="choices" role="group" aria-label="Answer choices">${q.choices.map((c, i) => {
    let cls = "";
    if (key != null) { if (i === key) cls = "right"; else if (a && i === sel) cls = "wrong"; }
    return `<button type="button" class="choice ${cls}" data-choice="${i}" aria-pressed="${sel === i}" ${a || state.disabled ? "disabled" : ""}><span class="bub">${L[i]}</span><span class="ctext">${inline(c)}</span></button>`;
  }).join("")}</div>`;
}

export function feedbackHtml(q, a) {
  if (!a) return "";
  const right = q.choices ? L[a.answer_index] : (a.accept || [])[0];
  return `<div class="feedback ${a.correct ? "ok" : "no"}" role="status"><strong>${a.correct ? "Correct" : `Not quite. The answer is ${esc(right)}.`}</strong><span>${inline(a.explanation)}</span></div>`;
}

export function streakFrom(daysMap) {
  const done = (d) => (daysMap[d] || 0) >= PER_DAY;
  const d = new Date(); if (!done(dstr(d))) d.setDate(d.getDate() - 1);
  let n = 0; while (done(dstr(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
