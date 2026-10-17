import { mountSitebar } from "../shared/sitebar.js";
import { sb, $, esc, inline, fmt, today, dstr, toast, friendlyError, requireSection, signOut, PORTAL_URL, passageHtml, answerHtml, ago, ASCEND_SECTIONS, SUBJ } from "./lib.js";

const A = {
  tab: "report", me: null,
  week: mondayOf(new Date()), report: null,
  qf: { status: "", subject: "", domain: "", level: "", source: "", q: "", page: 0 }, qlist: null, qcount: 0, qstats: {}, picked: new Set(),
  edit: null,
  gen: { subject: "rw", section: "sat", total: 10, focus: [], note: "", running: false, log: [], made: 0 },
  imp: null, impStatus: "draft",
  reports: null,
};
const PAGE = 50;

function mondayOf(d) { const x = new Date(d); const k = (x.getDay() + 6) % 7; x.setDate(x.getDate() - k); return dstr(x); }
function addDays(s, n) { const [y, m, d] = s.split("-").map(Number); const x = new Date(y, m - 1, d); x.setDate(x.getDate() + n); return dstr(x); }
function shortDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "short", day: "numeric" }); }
const pct = (c, t) => (t ? Math.round((100 * c) / t) : null);

async function fnError(error) {
  try { const b = await error.context.json(); return b.error || error.message; } catch { return error.message; }
}

/* ───────── shell ───────── */
function renderTop() {
  $("#who").innerHTML = A.me ? `<a class="note" href="index.html">Try it as a student</a>` : "";
  const tabs = [["report", "Weekly report"], ["questions", "Questions"], ["generate", "Generate"], ["import", "Import CSV"], ["reports", "Reported"]];
  $("#tabs").innerHTML = A.me ? tabs.map(([k, l]) => `<button class="tab" data-tab="${k}" ${A.tab === k ? 'aria-current="page"' : ""}>${l}${k === "reports" && A.report?.open_reports ? ` <span class="pill draft">${A.report.open_reports}</span>` : ""}</button>`).join("") : "";
}
function render() {
  renderTop();
  const views = { denied: viewDenied, report: viewReport, questions: viewQuestions, edit: viewEdit, generate: viewGenerate, import: viewImport, reports: viewReports };
  $("#app").innerHTML = (views[A.tab] || (() => "<p class='muted'>Loading…</p>"))();
}
async function go(tab) {
  A.tab = tab; render();
  try {
    if (tab === "report" && !A.report) await loadReport();
    if (tab === "questions" && !A.qlist) await loadQuestions();
    if (tab === "reports" && !A.reports) await loadReports();
  } catch (e) { toast(friendlyError(e)); }
  render();
}

/* ───────── access ───────── */
function viewDenied() {
  return `<div class="login"><h1>Admins only</h1><p class="muted">This account doesn’t have admin access.</p><div class="actions"><a class="btn" href="index.html">Go to practice</a><button class="btn ghost" data-signout>Sign out</button></div></div>`;
}

/* ───────── weekly report ───────── */
async function loadReport() {
  const { data, error } = await sb.rpc("ascend_weekly_report", { p_start: A.week });
  if (error) throw error;
  A.report = data;
}
function viewReport() {
  const r = A.report;
  const weeks = Array.from({ length: 10 }, (_, i) => addDays(mondayOf(new Date()), -7 * i));
  const head = `<div class="hello"><div><p class="eyebrow">Weekly report</p><h1>${r ? `${shortDate(r.start)} – ${shortDate(r.end)}` : "Loading…"}</h1></div>
    <div class="field" style="max-width:220px"><label for="weekSel" class="note">Week starting</label><select id="weekSel">${weeks.map((w) => `<option value="${w}" ${w === A.week ? "selected" : ""}>${shortDate(w)}${w === mondayOf(new Date()) ? " (this week)" : ""}</option>`).join("")}</select></div></div>`;
  if (!r) return head + `<div class="actions"><span class="spin"></span><span class="muted">Building report…</span></div>`;
  const st = r.students || [];
  const active = st.filter((s) => s.t > 0);
  const T = active.reduce((a, s) => a + Number(s.t), 0), C = active.reduce((a, s) => a + Number(s.c), 0);
  const stats = `<div class="stats">
    <div class="panel stat"><span class="note">Students practicing</span><b class="num">${active.length}/${st.length}</b></div>
    <div class="panel stat"><span class="note">Questions answered</span><b class="num">${T}</b></div>
    <div class="panel stat"><span class="note">Average accuracy</span><b class="num">${T ? pct(C, T) + "%" : "—"}</b></div>
    <div class="panel stat"><span class="note">Open question reports</span><b class="num">${r.open_reports}</b></div></div>`;

  const rows = st.map((s) => {
    const acc = pct(s.c, s.t), prev = pct(s.prev_c, s.prev_t);
    const trend = acc != null && prev != null ? (acc > prev ? `<span class="up">▲ ${acc - prev}</span>` : acc < prev ? `<span class="down">▼ ${prev - acc}</span>` : "=") : "";
    const weak = (s.skills || []).filter((k) => k.t >= 3).slice(0, 3);
    return `<tr><td><a href="index.html?kid=${encodeURIComponent(s.id)}"><b>${esc(s.display_name || s.username)}</b></a><div class="mini muted">${esc(s.username)}${s.active ? "" : " · paused"}</div></td>
      <td>${esc(ASCEND_SECTIONS[s.section]?.grade || "")}</td><td class="num">${s.days_active}/7</td><td class="num">${s.t}</td>
      <td class="num">${acc != null ? acc + "%" : "—"} ${trend}</td><td class="num">${s.minutes}</td>
      <td>${weak.length ? weak.map((k) => `<div class="mini">${esc(k.skill)} <span class="muted num">${k.c}/${k.t}</span></div>`).join("") : '<span class="muted mini">Not enough answers</span>'}</td>
      <td class="mini muted">${esc(ago(s.last_day))}</td></tr>`;
  }).join("");

  const weakAll = (r.weak_skills || []).slice(0, 12);
  const weakRows = weakAll.map((w, i) => `<tr><td><span class="pill">${w.subject === "rw" ? "R&W" : "Math"}</span></td><td><b>${esc(w.skill)}</b><div class="mini muted">${esc(w.domain)}</div></td>
     <td class="num">${Math.round(w.acc * 100)}%</td><td class="num">${w.c}/${w.t}</td><td class="num">${w.struggling}</td>
     <td><button class="btn small" data-draft-weak="${i}">Draft 5 questions</button></td></tr>`).join("");

  const inv = {}; (r.inventory || []).forEach((i) => { const k = `${i.subject}|${i.domain}`; (inv[k] = inv[k] || { 1: 0, 2: 0, 3: 0, d: 0 }); inv[k][i.level] = i.published; inv[k].d += i.drafts; });
  const invRows = ["rw", "math"].flatMap((s) => SUBJ[s].domains.map((d) => { const v = inv[`${s}|${d}`] || { 1: 0, 2: 0, 3: 0, d: 0 };
    const cell = (n) => `<td class="num ${n < 10 ? "down" : ""}">${n}</td>`;
    return `<tr><td>${s === "rw" ? "R&W" : "Math"}</td><td>${esc(d)}</td>${cell(v[1])}${cell(v[2])}${cell(v[3])}<td class="num">${v.d}</td></tr>`; })).join("");

  return `${head}${stats}
  <section class="panel"><h2>Students</h2><div class="tblwrap"><table class="dtable"><thead><tr><th>Student</th><th>Section</th><th>Days</th><th>Answered</th><th>Accuracy vs last week</th><th>Minutes</th><th>Weakest skills this week</th><th>Last practiced</th></tr></thead><tbody>${rows || `<tr><td colspan="8" class="muted">No students yet. Add them in the Students tab.</td></tr>`}</tbody></table></div></section>
  <section class="panel"><div class="subj-head"><h2>Weak areas across students</h2><span class="note">Skills with 3+ answers, weakest first</span></div>
    ${weakRows ? `<div class="tblwrap"><table class="dtable"><thead><tr><th></th><th>Skill</th><th>Accuracy</th><th>Right</th><th>Students below 60%</th><th></th></tr></thead><tbody>${weakRows}</tbody></table></div>
    <div class="actions"><button class="btn ghost small" data-draft-top="rw">Draft for the top R&W weak skills</button><button class="btn ghost small" data-draft-top="math">Draft for the top Math weak skills</button></div>` : '<p class="note">Not enough answers this week to spot weak areas.</p>'}
  </section>
  <section class="panel"><div class="subj-head"><h2>Question bank</h2><span class="note">Published questions by difficulty. Under 10 shown in red.</span></div>
    <div class="tblwrap"><table class="dtable"><thead><tr><th>Subject</th><th>Domain</th><th>Easy</th><th>Medium</th><th>Hard</th><th>Drafts</th></tr></thead><tbody>${invRows}</tbody></table></div>
    <p class="note">PSAT uses easy and medium. SAT uses medium and hard.</p></section>`;
}
function sectionOf(ids) {
  const m = { psat: 0, sat: 0 };
  (A.report?.students || []).forEach((s) => { if ((ids || []).includes(s.id)) m[s.section]++; });
  return m.psat > m.sat ? "psat" : "sat";
}
function draftFrom(list) {
  const subject = list[0].subject;
  const ids = list.flatMap((w) => w.student_ids || []);
  A.gen = { ...A.gen, subject, section: sectionOf(ids), total: Math.max(5, Math.min(30, list.length * 5)), focus: list.map((w) => ({ domain: w.domain, skill: w.skill })), log: [], made: 0,
    note: `Students are struggling with: ${list.map((w) => `${w.skill} (${Math.round(w.acc * 100)}%)`).join(", ")}.` };
  go("generate");
}

/* ───────── questions ───────── */
async function loadQuestions() {
  const f = A.qf;
  let q = sb.from("ascend_questions").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(f.page * PAGE, f.page * PAGE + PAGE - 1);
  if (f.status) q = q.eq("status", f.status);
  if (f.subject) q = q.eq("subject", f.subject);
  if (f.domain) q = q.eq("domain", f.domain);
  if (f.level) q = q.eq("level", Number(f.level));
  if (f.source) q = q.eq("source", f.source);
  if (f.q) q = q.ilike("question", `%${f.q.replace(/[%_]/g, "")}%`);
  const { data, error, count } = await q;
  if (error) throw error;
  A.qlist = data; A.qcount = count || 0; A.picked = new Set();
  A.qstats = {};
  const ids = data.map((x) => x.id);
  if (ids.length) {
    const { data: ans } = await sb.from("ascend_answers").select("question_id,correct").in("question_id", ids).limit(10000);
    (ans || []).forEach((a) => { const s = (A.qstats[a.question_id] = A.qstats[a.question_id] || [0, 0]); s[1]++; if (a.correct) s[0]++; });
  }
}
function sel(id, label, opts, val) {
  return `<div class="field"><label for="${id}" class="note">${label}</label><select id="${id}">${opts.map(([v, l]) => `<option value="${esc(v)}" ${String(val) === String(v) ? "selected" : ""}>${esc(l)}</option>`).join("")}</select></div>`;
}
function viewQuestions() {
  const f = A.qf;
  const doms = f.subject ? SUBJ[f.subject].domains : [...SUBJ.rw.domains, ...SUBJ.math.domains];
  const filters = `<div class="row">
    ${sel("fStatus", "Status", [["", "Any"], ["draft", "Draft"], ["published", "Published"], ["retired", "Retired"]], f.status)}
    ${sel("fSubject", "Subject", [["", "Both"], ["rw", "Reading & Writing"], ["math", "Math"]], f.subject)}
    ${sel("fDomain", "Domain", [["", "Any"], ...doms.map((d) => [d, d])], f.domain)}
    ${sel("fLevel", "Difficulty", [["", "Any"], ["1", "Easy"], ["2", "Medium"], ["3", "Hard"]], f.level)}
    ${sel("fSource", "Source", [["", "Any"], ["bank", "Starter bank"], ["ai", "AI"], ["import", "Imported"], ["manual", "Written here"]], f.source)}
    <div class="field"><label for="fQ" class="note">Search question text</label><input id="fQ" value="${esc(f.q)}" placeholder="e.g. slope"></div>
  </div>`;
  const list = A.qlist;
  const body = !list ? `<div class="actions"><span class="spin"></span><span class="muted">Loading questions…</span></div>`
    : !list.length ? `<p class="note">No questions match these filters.</p>`
    : `<div class="tblwrap"><table class="dtable"><thead><tr><th><input type="checkbox" id="pickAll" aria-label="Select all on this page"></th><th>Status</th><th>Subject · skill</th><th>Level</th><th>Question</th><th>Students</th><th></th></tr></thead><tbody>
      ${list.map((q) => { const s = A.qstats[q.id]; return `<tr class="${A.picked.has(q.id) ? "sel" : ""}"><td><input type="checkbox" data-pick="${esc(q.id)}" ${A.picked.has(q.id) ? "checked" : ""} aria-label="Select"></td>
        <td><span class="pill ${q.status}">${q.status}</span>${q.source === "ai" ? ' <span class="pill ai">AI</span>' : ""}</td>
        <td><b>${q.subject === "rw" ? "R&W" : "Math"}</b> · ${esc(q.skill)}<div class="mini muted">${esc(q.domain)}</div></td>
        <td>${["", "Easy", "Medium", "Hard"][q.level]}</td>
        <td class="qprev" title="${esc(q.question)}">${esc((q.passage ? q.passage + " — " : "") + q.question)}</td>
        <td class="num mini">${s ? `${pct(s[0], s[1])}% of ${s[1]}` : "—"}</td>
        <td><div class="row"><button class="btn small ghost" data-edit="${esc(q.id)}">Open</button>${q.status !== "published" ? `<button class="btn small" data-setstatus="published" data-id="${esc(q.id)}">Publish</button>` : `<button class="btn small ghost" data-setstatus="retired" data-id="${esc(q.id)}">Retire</button>`}</div></td></tr>`; }).join("")}
      </tbody></table></div>`;
  const pages = Math.ceil(A.qcount / PAGE);
  return `<div class="hello"><div><p class="eyebrow">Question bank</p><h1>Questions</h1></div><button class="btn" data-new>New question</button></div>
  <section class="panel">${filters}</section>
  <section class="panel">
    <div class="row"><span class="note">${A.qcount} question${A.qcount === 1 ? "" : "s"}${A.picked.size ? ` · ${A.picked.size} selected` : ""}</span><span class="spacer" style="flex:1"></span>
      ${A.picked.size ? `<button class="btn small" data-bulk="published">Publish selected</button><button class="btn small ghost" data-bulk="retired">Retire selected</button>` : ""}</div>
    ${body}
    ${pages > 1 ? `<div class="row"><button class="btn small ghost" data-page="-1" ${f.page === 0 ? "disabled" : ""}>← Newer</button><span class="note">Page ${f.page + 1} of ${pages}</span><button class="btn small ghost" data-page="1" ${f.page >= pages - 1 ? "disabled" : ""}>Older →</button></div>` : ""}
  </section>`;
}
async function setStatus(ids, status) {
  const patch = { status }; if (status === "published") patch.published_at = new Date().toISOString();
  const { error } = await sb.from("ascend_questions").update(patch).in("id", ids);
  if (error) return toast(friendlyError(error));
  toast(`${ids.length} question${ids.length > 1 ? "s" : ""} ${status === "published" ? "published" : status === "retired" ? "retired" : "updated"}.`);
  A.report = null; await loadQuestions(); render();
}

/* ───────── editor ───────── */
const blankQ = () => ({ id: null, subject: "rw", level: 2, domain: SUBJ.rw.domains[0], skill: SUBJ.rw.skills[SUBJ.rw.domains[0]][0], passage: "", data_table: null, question: "", choices: ["", "", "", ""], answer_index: 0, accept: null, explanation: "", status: "draft", source: "manual", notes: "" });
function openEdit(q) {
  A.edit = q ? JSON.parse(JSON.stringify(q)) : blankQ();
  if (!A.edit.choices && !A.edit.accept) A.edit.choices = ["", "", "", ""];
  A.backTo = A.tab; A.tab = "edit"; render(); window.scrollTo(0, 0);
}
function readEditor() {
  const e = A.edit;
  e.subject = $("#eSubject").value; e.level = Number($("#eLevel").value);
  e.domain = $("#eDomain").value; e.skill = $("#eSkill").value;
  e.passage = $("#ePassage").value; e.question = $("#eQuestion").value; e.explanation = $("#eExpl").value; e.notes = $("#eNotes").value;
  const typed = !!$("#eAccept"); // what the form currently shows
  if (typed) { e.choices = null; e.answer_index = null; e.accept = $("#eAccept").value.split("|").map((s) => s.trim()).filter(Boolean); }
  else { e.choices = [0, 1, 2, 3].map((i) => $(`#eC${i}`).value); const r = document.querySelector("input[name=eAns]:checked"); e.answer_index = r ? Number(r.value) : null; e.accept = null; }
  const tbl = $("#eTable").value.trim();
  if (!tbl) e.data_table = null;
  else { const lines = tbl.split("\n").map((l) => l.split("|").map((c) => c.trim())); e.data_table = { h: lines[0], r: lines.slice(1) }; }
}
function editorErrors(e) {
  const errs = [];
  if (!e.question.trim()) errs.push("Write the question.");
  if (e.choices) { if (e.choices.some((c) => !c.trim())) errs.push("Fill in all four choices."); if (e.answer_index == null) errs.push("Mark the correct choice."); }
  else if (!e.accept?.length) errs.push("List at least one accepted answer.");
  if (e.subject === "rw" && !e.passage.trim()) errs.push("Reading & Writing questions need a passage.");
  return errs;
}
function viewEdit() {
  const e = A.edit; const typed = !e.choices;
  const skills = SUBJ[e.subject].skills[e.domain] || [];
  const tableText = e.data_table ? [e.data_table.h, ...(e.data_table.r || [])].map((r) => r.join(" | ")).join("\n") : "";
  const preview = { ...e, passage: e.passage || null };
  return `<div class="hello"><div><p class="eyebrow">${e.id ? `Editing ${esc(e.id)}` : "New question"}</p><h1>${e.id ? "Edit question" : "Write a question"}</h1></div>
    <div class="row"><span class="pill ${e.status}">${e.status}</span>${e.source === "ai" ? '<span class="pill ai">AI draft</span>' : ""}</div></div>
  <div class="editor">
    <form class="panel" id="editForm">
      <div class="row">
        ${sel("eSubject", "Subject", [["rw", "Reading & Writing"], ["math", "Math"]], e.subject)}
        ${sel("eLevel", "Difficulty", [["1", "Easy"], ["2", "Medium"], ["3", "Hard"]], e.level)}
      </div>
      <div class="row">
        ${sel("eDomain", "Domain", SUBJ[e.subject].domains.map((d) => [d, d]), e.domain)}
        ${sel("eSkill", "Skill", (skills.includes(e.skill) ? skills : [...skills, e.skill]).map((s) => [s, s]), e.skill)}
      </div>
      <div class="field"><label for="ePassage" class="note">Passage ${e.subject === "math" ? "(optional)" : ""}. Use ______ for a blank, a blank line between paragraphs.</label><textarea id="ePassage" rows="6">${esc(e.passage || "")}</textarea></div>
      <div class="field"><label for="eTable" class="note">Table (optional). First line is the header; separate cells with |</label><textarea id="eTable" rows="3" placeholder="Year | Share&#10;2015 | 2%">${esc(tableText)}</textarea></div>
      <div class="field"><label for="eQuestion" class="note">Question. Write exponents as x^{2}.</label><textarea id="eQuestion" rows="3">${esc(e.question)}</textarea></div>
      <label class="row note"><input type="checkbox" id="eTyped" ${typed ? "checked" : ""}> Typed-in answer (no choices)</label>
      ${typed ? `<div class="field"><label for="eAccept" class="note">Accepted answers, separated by | (e.g. 2.5 | 5/2)</label><input id="eAccept" value="${esc((e.accept || []).join(" | "))}"></div>`
        : `<fieldset class="choices" style="gap:8px"><legend class="note">Choices · pick the correct one</legend>${[0, 1, 2, 3].map((i) => `<div class="choice-edit"><input type="radio" name="eAns" value="${i}" id="eA${i}" ${e.answer_index === i ? "checked" : ""} aria-label="Choice ${"ABCD"[i]} is correct"><input id="eC${i}" value="${esc(e.choices[i] || "")}" placeholder="Choice ${"ABCD"[i]}"></div>`).join("")}</fieldset>`}
      <div class="field"><label for="eExpl" class="note">Explanation shown after answering</label><textarea id="eExpl" rows="3">${esc(e.explanation)}</textarea></div>
      <div class="field"><label for="eNotes" class="note">Private notes</label><input id="eNotes" value="${esc(e.notes || "")}"></div>
      <p class="err" id="editErr"></p>
      <div class="actions">
        <button class="btn" type="submit" data-save-as="published">Save and publish</button>
        <button class="btn ghost" type="submit" data-save-as="draft">Save as draft</button>
        ${e.id && e.status !== "retired" ? `<button class="btn ghost" type="submit" data-save-as="retired">Retire</button>` : ""}
        <span class="spacer"></span><button class="link" type="button" data-back>Cancel</button>
      </div>
    </form>
    <div class="panel"><p class="eyebrow">Student preview · correct answer marked</p>
      <article class="sheet"><div class="sheet-tag"><span>${SUBJ[e.subject].name} · ${esc(e.domain)}</span><span>${esc(e.skill)}</span></div>
      <div class="sheet-body">${passageHtml(preview)}<div class="qside"><div class="qtext ${e.subject === "math" ? "math" : ""}">${fmt(e.question || "Your question appears here.")}</div>
      ${e.choices ? answerHtml(e, { showKey: true, disabled: true }) : `<p class="note">Accepted: <b>${esc((e.accept || []).join(" or ") || "—")}</b></p>`}
      <div class="feedback ok"><span>${inline(e.explanation || "Explanation appears here.")}</span></div></div></div></article>
      <button class="btn small ghost" type="button" data-refresh-preview>Refresh preview</button>
    </div>
  </div>`;
}
async function saveEdit(status) {
  readEditor();
  const e = A.edit;
  const errs = editorErrors(e);
  if (errs.length && status !== "retired") { $("#editErr").textContent = errs.join(" "); return; }
  const row = { subject: e.subject, level: e.level, domain: e.domain, skill: e.skill, passage: e.passage.trim() || null, data_table: e.data_table, question: e.question.trim(),
    choices: e.choices, answer_index: e.answer_index, accept: e.accept, explanation: e.explanation.trim(), notes: e.notes || null, status };
  if (status === "published" && e.status !== "published") row.published_at = new Date().toISOString();
  let res;
  if (e.id) res = await sb.from("ascend_questions").update(row).eq("id", e.id).select().single();
  else res = await sb.from("ascend_questions").insert({ ...row, source: "manual", created_by: (await sb.auth.getUser()).data.user?.id }).select().single();
  if (res.error) { $("#editErr").textContent = friendlyError(res.error); return; }
  toast(status === "published" ? "Saved and published." : status === "retired" ? "Retired." : "Saved as draft.");
  A.edit = null; A.qlist = null; A.reports = null; A.report = null; go(A.backTo === "reports" ? "reports" : "questions");
}

/* ───────── generate ───────── */
function viewGenerate() {
  const g = A.gen;
  const focusSet = new Set(g.focus.map((f) => `${f.domain}|${f.skill || ""}`));
  const checks = SUBJ[g.subject].domains.map((d) => `<div><div class="dom" style="padding-top:6px">${esc(d)}</div>${SUBJ[g.subject].skills[d].map((s) => `<label><input type="checkbox" data-focus="${esc(d)}|${esc(s)}" ${focusSet.has(`${d}|${s}`) ? "checked" : ""}> ${esc(s)}</label>`).join("")}</div>`).join("");
  return `<div><p class="eyebrow">AI drafts</p><h1>Generate questions</h1></div>
  <p class="muted">Claude writes new questions aimed at the skills you pick. They arrive as drafts; nothing reaches students until you publish.</p>
  <div class="grid2">
    <form class="panel" id="genForm">
      <div class="row">${sel("gSubject", "Subject", [["rw", "Reading & Writing"], ["math", "Math"]], g.subject)}${sel("gSection", "For", [["psat", "PSAT · easy–medium"], ["sat", "SAT · medium–hard"]], g.section)}${sel("gTotal", "How many", [5, 10, 15, 20, 30].map((n) => [n, n]), g.total)}</div>
      <div><p class="note">Focus skills (leave empty to spread across all)</p><div class="checks">${checks}</div></div>
      <div class="field"><label for="gNote" class="note">Note for Claude (optional)</label><textarea id="gNote" rows="3" placeholder="e.g. more questions with tables; avoid sports topics">${esc(g.note)}</textarea></div>
      <div class="actions"><button class="btn" type="submit" ${g.running ? "disabled" : ""}>${g.running ? '<span class="spin"></span> Writing…' : "Write drafts"}</button></div>
    </form>
    <div class="panel"><h3>Progress</h3>
      ${g.log.length ? `<div class="mini">${g.log.map((l) => `<div>${esc(l)}</div>`).join("")}</div>` : '<p class="note">Questions are written in batches of 5, about 30–60 seconds each.</p>'}
      ${g.made && !g.running ? `<div><button class="btn small" data-review-drafts>Review ${g.made} new draft${g.made > 1 ? "s" : ""}</button></div>` : ""}
    </div>
  </div>`;
}
function readGen() {
  const g = A.gen;
  const subj = $("#gSubject").value;
  if (subj !== g.subject) g.focus = [];
  else g.focus = [...document.querySelectorAll("[data-focus]:checked")].map((c) => { const [domain, skill] = c.dataset.focus.split("|"); return { domain, skill }; });
  g.subject = subj; g.section = $("#gSection").value; g.total = Number($("#gTotal").value); g.note = $("#gNote").value;
}
async function runGenerate() {
  readGen();
  const g = A.gen; g.running = true; g.log = []; g.made = 0; render();
  let left = g.total, batch = 1;
  while (left > 0) {
    const n = Math.min(5, left);
    g.log.push(`Batch ${batch}: writing ${n}…`); render();
    const { data, error } = await sb.functions.invoke("generate-questions", { body: { subject: g.subject, section: g.section, count: n, focus: g.focus, note: g.note } });
    if (error) { g.log[g.log.length - 1] = `Batch ${batch}: ${await fnError(error)}`; render(); break; }
    g.made += data.inserted;
    g.log[g.log.length - 1] = `Batch ${batch}: ${data.inserted} draft${data.inserted === 1 ? "" : "s"} saved${data.skipped ? `, ${data.skipped} unusable skipped` : ""}.`;
    left -= n; batch++; render();
  }
  g.running = false; A.qlist = null; A.report = null; render();
}

/* ───────── import ───────── */
function parseCSV(text) {
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(f); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows.filter((r) => r.some((x) => x.trim()));
}
const COLS = ["subject", "level", "domain", "skill", "passage", "question", "choice_a", "choice_b", "choice_c", "choice_d", "answer", "explanation"];
function toQuestion(rec) {
  const errs = [];
  const sRaw = (rec.subject || "").trim().toLowerCase();
  const subject = sRaw === "math" ? "math" : ["rw", "r&w", "reading & writing", "reading and writing"].includes(sRaw) ? "rw" : null;
  if (!subject) errs.push("subject must be rw or math");
  const level = Number(rec.level); if (![1, 2, 3].includes(level)) errs.push("level must be 1, 2 or 3");
  const domain = subject && SUBJ[subject].domains.find((d) => d.toLowerCase() === (rec.domain || "").trim().toLowerCase());
  if (subject && !domain) errs.push("unknown domain");
  const skill = (rec.skill || "").trim() || (domain ? SUBJ[subject].skills[domain][0] : "");
  const choices = ["choice_a", "choice_b", "choice_c", "choice_d"].map((k) => (rec[k] || "").trim());
  const hasChoices = choices.some(Boolean);
  const ans = (rec.answer || "").trim();
  let answer_index = null, accept = null;
  if (hasChoices) { if (choices.some((c) => !c)) errs.push("fill all four choices"); answer_index = "ABCD".indexOf(ans.toUpperCase()); if (answer_index < 0) errs.push("answer must be A–D"); }
  else { accept = ans.split("|").map((s) => s.trim()).filter(Boolean); if (!accept.length) errs.push("typed answer missing"); }
  if (!(rec.question || "").trim()) errs.push("question missing");
  if (subject === "rw" && !(rec.passage || "").trim()) errs.push("R&W needs a passage");
  return { errs, row: { subject, level, domain, skill, passage: (rec.passage || "").trim() || null, question: (rec.question || "").trim(), choices: hasChoices ? choices : null, answer_index: hasChoices ? answer_index : null, accept, explanation: (rec.explanation || "").trim(), source: "import" } };
}
function viewImport() {
  const p = A.imp;
  const preview = p ? `<section class="panel"><div class="subj-head"><h2>${p.items.length} rows read</h2><span class="note">${p.items.filter((x) => !x.errs.length).length} ready · ${p.items.filter((x) => x.errs.length).length} with problems</span></div>
    ${p.missing.length ? `<p class="err">Missing columns: ${esc(p.missing.join(", "))}</p>` : ""}
    <div class="tblwrap"><table class="dtable"><thead><tr><th>#</th><th>Subject · skill</th><th>Question</th><th>Answer</th><th>Status</th></tr></thead><tbody>
    ${p.items.slice(0, 200).map((x, i) => `<tr><td class="num">${i + 2}</td><td>${esc(x.row.subject || "?")} · ${esc(x.row.skill)}</td><td class="qprev">${esc(x.row.question)}</td><td>${x.row.choices ? "ABCD"[x.row.answer_index] || "?" : esc((x.row.accept || []).join(" | "))}</td><td>${x.errs.length ? `<span class="err mini">${esc(x.errs.join("; "))}</span>` : '<span class="pill published">ok</span>'}</td></tr>`).join("")}
    </tbody></table></div>
    <div class="row"><label class="note"><input type="radio" name="impSt" value="draft" ${A.impStatus === "draft" ? "checked" : ""}> Import as drafts</label><label class="note"><input type="radio" name="impSt" value="published" ${A.impStatus === "published" ? "checked" : ""}> Publish immediately</label></div>
    <div class="actions"><button class="btn" data-do-import ${p.items.some((x) => !x.errs.length) ? "" : "disabled"}>Import ${p.items.filter((x) => !x.errs.length).length} questions</button><span class="note">Rows with problems are skipped.</span></div></section>` : "";
  return `<div><p class="eyebrow">Bulk add</p><h1>Import CSV</h1></div>
  <section class="panel">
    <p>Columns: <code class="mini">${COLS.join(", ")}</code></p>
    <p class="note">subject is rw or math · level is 1 (easy) to 3 (hard) · domain must match the College Board domain names · for multiple choice, answer is A–D · for typed answers, leave the choice columns empty and put accepted answers in answer separated by | (e.g. 2.5|5/2).</p>
    <div class="row"><a class="btn small ghost" href="question-template.csv" download>Download template</a><label class="btn small"><input type="file" id="csvFile" accept=".csv,text/csv" hidden>Choose CSV file</label></div>
  </section>${preview}`;
}
async function readCsvFile(file) {
  const text = await file.text();
  const rows = parseCSV(text.replace(/^﻿/, ""));
  const head = (rows[0] || []).map((h) => h.trim().toLowerCase());
  const missing = COLS.filter((c) => !head.includes(c) && !["passage", "choice_a", "choice_b", "choice_c", "choice_d", "explanation", "skill"].includes(c));
  const items = rows.slice(1).map((r) => { const rec = {}; head.forEach((h, i) => (rec[h] = r[i] ?? "")); return toQuestion(rec); });
  A.imp = { items, missing }; render();
}
async function doImport() {
  const ok = A.imp.items.filter((x) => !x.errs.length).map((x) => ({ ...x.row, status: A.impStatus, published_at: A.impStatus === "published" ? new Date().toISOString() : null }));
  let n = 0;
  for (let i = 0; i < ok.length; i += 100) {
    const { error } = await sb.from("ascend_questions").insert(ok.slice(i, i + 100));
    if (error) { toast(`Stopped after ${n}: ${friendlyError(error)}`); break; }
    n += Math.min(100, ok.length - i);
  }
  toast(`Imported ${n} question${n === 1 ? "" : "s"}.`); A.imp = null; A.qlist = null; A.report = null; render();
}

/* ───────── reported questions ───────── */
async function loadReports() {
  const { data, error } = await sb.from("ascend_question_reports")
    .select("id,note,created_at,question_id,profiles(username,display_name),questions:ascend_questions(*)")
    .eq("resolved", false).order("created_at", { ascending: false }).limit(200);
  if (error) throw error;
  A.reports = data;
}
function viewReports() {
  const r = A.reports;
  return `<div><p class="eyebrow">From students</p><h1>Reported questions</h1></div>
  ${!r ? '<div class="actions"><span class="spin"></span></div>' : !r.length ? '<section class="panel"><p class="note">No open reports.</p></section>'
    : r.map((x) => { const q = x.questions; return `<section class="panel"><div class="subj-head"><h3>${esc(q?.skill || "")} <span class="pill ${q?.status}">${q?.status}</span>${q?.source === "ai" ? ' <span class="pill ai">AI</span>' : ""}</h3><span class="note">${esc(x.profiles?.display_name || x.profiles?.username || "A student")} · ${new Date(x.created_at).toLocaleDateString()}</span></div>
      <p><b>“${esc(x.note || "No note")}”</b></p>
      ${q ? `<div class="mini muted">${q.passage ? esc(q.passage.slice(0, 220)) + (q.passage.length > 220 ? "…" : "") + "<br>" : ""}${esc(q.question)}</div>` : ""}
      <div class="actions"><button class="btn small" data-edit-report="${x.id}">Open question</button>${q?.status === "published" ? `<button class="btn small ghost" data-retire-report="${x.id}">Retire question</button>` : ""}<button class="btn small ghost" data-resolve="${x.id}">Mark resolved</button></div></section>`; }).join("")}`;
}
async function resolveReport(id) {
  const { error } = await sb.from("ascend_question_reports").update({ resolved: true }).eq("id", id);
  if (error) return toast(friendlyError(error));
  A.reports = A.reports.filter((x) => x.id !== id); if (A.report) A.report.open_reports = Math.max(0, A.report.open_reports - 1); render();
}

/* ───────── events ───────── */
document.addEventListener("click", async (e) => {
  const t = e.target.closest("button,[data-pick],#pickAll"); if (!t) return;
  const d = t.dataset;
  try {
    if (d.tab) return go(d.tab);
    if (t.hasAttribute("data-signout")) return signOut();
    // report
    if (d.draftWeak != null) return draftFrom([A.report.weak_skills[Number(d.draftWeak)]]);
    if (d.draftTop) { const l = (A.report.weak_skills || []).filter((w) => w.subject === d.draftTop).slice(0, 3); if (l.length) draftFrom(l); else toast("No weak skills in that subject this week."); return; }
    // questions
    if (t.hasAttribute("data-new")) return openEdit(null);
    if (d.edit) return openEdit(A.qlist.find((q) => q.id === d.edit));
    if (d.setstatus) return setStatus([d.id], d.setstatus);
    if (d.bulk) return setStatus([...A.picked], d.bulk);
    if (d.page) { A.qf.page += Number(d.page); A.qlist = null; render(); await loadQuestions(); return render(); }
    if (d.pick != null) { t.checked ? A.picked.add(d.pick) : A.picked.delete(d.pick); return render(); }
    if (t.id === "pickAll") { (A.qlist || []).forEach((q) => (t.checked ? A.picked.add(q.id) : A.picked.delete(q.id))); return render(); }
    // editor
    if (t.hasAttribute("data-back")) { A.edit = null; return go(A.backTo || "questions"); }
    if (t.hasAttribute("data-refresh-preview")) { readEditor(); return render(); }
    // generate
    if (t.hasAttribute("data-review-drafts")) { A.qf = { ...A.qf, status: "draft", source: "ai", subject: A.gen.subject, domain: "", level: "", q: "", page: 0 }; A.qlist = null; return go("questions"); }
    // import
    if (t.hasAttribute("data-do-import")) { t.disabled = true; return doImport(); }
    // reports
    if (d.editReport) { const x = A.reports.find((r) => String(r.id) === d.editReport); A.tab = "reports"; return openEdit(x.questions); }
    if (d.retireReport) { const x = A.reports.find((r) => String(r.id) === d.retireReport); const { error } = await sb.from("ascend_questions").update({ status: "retired" }).eq("id", x.question_id); if (error) throw error; await resolveReport(x.id); toast("Question retired."); A.qlist = null; return; }
    if (d.resolve) return resolveReport(Number(d.resolve));
  } catch (er) { toast(friendlyError(er)); }
});

document.addEventListener("change", async (e) => {
  const t = e.target;
  if (t.id === "weekSel") { A.week = t.value; A.report = null; render(); await loadReport().catch((er) => toast(friendlyError(er))); return render(); }
  if (["fStatus", "fSubject", "fDomain", "fLevel", "fSource"].includes(t.id)) {
    const k = { fStatus: "status", fSubject: "subject", fDomain: "domain", fLevel: "level", fSource: "source" }[t.id];
    A.qf[k] = t.value; if (k === "subject") A.qf.domain = ""; A.qf.page = 0; A.qlist = null; render(); await loadQuestions().catch((er) => toast(friendlyError(er))); return render();
  }
  if (t.id === "eSubject") { readEditor(); const e2 = A.edit; e2.domain = SUBJ[e2.subject].domains[0]; e2.skill = SUBJ[e2.subject].skills[e2.domain][0]; return render(); }
  if (t.id === "eDomain") { readEditor(); A.edit.skill = SUBJ[A.edit.subject].skills[A.edit.domain][0]; return render(); }
  if (t.id === "eTyped") { readEditor(); const e2 = A.edit; if (t.checked) { e2.choices = null; e2.answer_index = null; e2.accept = e2.accept || []; } else { e2.choices = ["", "", "", ""]; e2.answer_index = 0; e2.accept = null; } return render(); }
  if (t.id === "gSubject") { readGen(); return render(); }
  if (t.id === "csvFile" && t.files[0]) return readCsvFile(t.files[0]);
  if (t.name === "impSt") { A.impStatus = t.value; return; }
});
let searchTimer;
document.addEventListener("input", (e) => {
  if (e.target.id === "fQ") { clearTimeout(searchTimer); searchTimer = setTimeout(async () => { A.qf.q = e.target.value; A.qf.page = 0; await loadQuestions().catch((er) => toast(friendlyError(er))); render(); const i = $("#fQ"); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); } }, 400); }
});

document.addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target;
  try {
    if (f.id === "editForm") return saveEdit(e.submitter?.dataset.saveAs || "draft");
    if (f.id === "genForm") return runGenerate();
  } catch (er) { toast(friendlyError(er)); }
});

/* ───────── boot ───────── */
async function boot() {
  const me = await requireSection(["psat", "sat"]);   // signed out → portal
  A.me = me;
  mountSitebar(me, "questions");
  if (!me || me.role !== "admin") { A.tab = "denied"; return render(); }
  go("report");
}
boot();
