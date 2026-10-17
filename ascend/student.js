import { mountSitebar } from "../shared/sitebar.js";
import { sb, $, esc, inline, fmt, fmtDate, today, dstr, toast, friendlyError, requireSection, signOut, PORTAL_URL, pickKid, nameOf, passageHtml, answerHtml, feedbackHtml, streakFrom, ASCEND_SECTIONS, SUBJ, PER_DAY } from "./lib.js";

// watch: the kid a parent (or admin) is viewing read-only; null for students practicing.
const S = { view: "loading", data: null, prog: null, p: null, busy: false, watch: null };

/* ───────── data ───────── */
async function loadToday() {
  const { data, error } = await sb.rpc("ascend_get_today", { p_day: today() });
  if (error) throw error;
  S.data = data;
}
async function loadProgress() {
  const { data, error } = S.watch
    ? await sb.rpc("ascend_student_progress", { p_student: S.watch.id })
    : await sb.rpc("ascend_my_progress");
  if (error) throw error;
  S.prog = data;
}
function daysMap(prog) {
  const m = {};
  (prog?.days || []).forEach((d) => { m[d.day] = Math.max(m[d.day] || 0, Number(d.t)); });
  return m;
}
const set = (s) => S.data.sets[s];
const items = (s) => set(s).items || [];

/* ───────── shell ───────── */
function renderTop() {
  if (S.watch) {
    const tr = ASCEND_SECTIONS[S.watch.section];
    $("#who").innerHTML = `<span class="chip acc">${esc(tr.grade)}</span><span>Viewing ${esc(nameOf(S.watch))}</span>`;
    const tabs = [["progress", "Progress"], ["resources", "Official practice"]];
    $("#tabs").innerHTML = tabs.map(([k, l]) => `<button class="tab" data-tab="${k}" ${S.view === k ? 'aria-current="page"' : ""}>${l}</button>`).join("");
    return;
  }
  const pr = S.data?.profile;
  const tr = pr && ASCEND_SECTIONS[pr.section];
  $("#who").innerHTML = pr ? `<span class="chip acc">${esc(tr.grade)}</span>` : "";
  const tabs = [["today", "Today"], ["progress", "Progress"], ["resources", "Official practice"], ["account", "Account"]];
  const cur = S.view === "practice" || S.view === "done" ? "today" : S.view;
  $("#tabs").innerHTML = pr ? tabs.map(([k, l]) => `<button class="tab" data-tab="${k}" ${cur === k ? 'aria-current="page"' : ""}>${l}</button>`).join("") : "";
}
function render() {
  renderTop();
  const app = $("#app");
  const v = S.view;
  app.innerHTML =
    v === "error" ? viewError() :
    v === "today" ? viewToday() :
    v === "practice" ? viewPractice() :
    v === "done" ? viewDone() :
    v === "progress" ? viewProgress() :
    v === "resources" ? viewResources() :
    v === "account" ? viewAccount() : `<p class="muted">Loading…</p>`;
  if (v === "practice") { const g = $("#gridin"); if (g && !g.disabled) g.focus(); }
}

/* ───────── views ───────── */
function viewError() {
  return `<div class="login"><div><p class="eyebrow">Ascend · KidosTutor</p><h1>Can’t load your practice</h1><p class="muted">${esc(S.error)}</p></div>
    <div class="actions"><button class="btn" data-signout>Sign out</button><a class="btn ghost" href="${PORTAL_URL}">All sections</a></div></div>`;
}

function dots(s, cur = -1) {
  return `<div class="dots" aria-hidden="true">${items(s).map((q, i) => `<span class="dot ${q.answered ? (q.answered.correct ? "ok" : "no") : ""} ${i === cur ? "cur" : ""}"></span>`).join("")}</div>`;
}

function viewToday() {
  const st = streakFrom(daysMap(S.prog));
  const cards = ["rw", "math"].map((s) => {
    const list = items(s);
    const answered = list.filter((q) => q.answered).length;
    const right = list.filter((q) => q.answered?.correct).length;
    const done = list.length > 0 && answered === list.length;
    const rc = set(s).review_count;
    return `<section class="subj" aria-label="${SUBJ[s].name}">
      <div class="subj-head"><h2>${SUBJ[s].name}</h2><span class="score">${answered ? `${right}/${answered} right` : `${list.length} questions`}</span></div>
      ${dots(s)}
      <p class="note">${s === "rw" ? "Short passages, one question each." : "Calculator allowed. Some answers are typed in."}${rc ? ` Includes ${rc} you missed before.` : ""}</p>
      ${list.length ? `<div><button class="btn ${done ? "ghost" : ""}" data-start="${s}">${done ? "Look over answers" : answered ? `Continue · ${answered + 1} of ${list.length}` : "Start"}</button></div>` : `<p class="note">No questions are available for your level yet. Ask your tutor to add some.</p>`}
    </section>`;
  }).join("");
  return `<div class="hello"><div><p class="eyebrow">${esc(fmtDate(S.data.day))}</p><h1>Today’s fifteen</h1></div>
    <div class="streak"><span class="streak-dot num">${st}</span><div><b>${st === 1 ? "1 day" : st + " days"}</b><div class="note">streak</div></div></div></div>
    <div class="subjects">${cards}</div>
    <p class="note">New questions every day, matched to your level and weighted toward the skills you miss most. Finish one full set to keep your streak.</p>`;
}

function viewPractice() {
  const { subj, idx } = S.p; const list = items(subj); const q = list[idx];
  const a = q.answered;
  const last = idx >= list.length - 1;
  const hasP = !!(q.passage || q.data_table);
  return `<div class="qbar"><button class="btn ghost small" data-go="today">← Today</button>${dots(subj, idx)}<span class="timer" id="timer"></span></div>
  <article class="sheet">
    <div class="sheet-tag"><span><span class="qnum">${idx + 1}</span> &nbsp;${SUBJ[subj].name} · ${esc(q.domain)}</span><span>${esc(q.skill)}</span></div>
    <div class="sheet-body ${hasP ? "has-p" : ""}">${passageHtml(q)}
      <div class="qside">
        <div class="qtext ${subj === "math" ? "math" : ""}">${fmt(q.question)}</div>
        ${answerHtml(q, { selected: S.p.sel, answered: a, disabled: S.busy })}
        ${feedbackHtml(q, a)}
        <div class="actions">
          ${a ? `<button class="btn" data-next>${last && !S.p.reviewing ? "See results" : last ? "Done" : "Next question →"}</button>`
              : `<button class="btn" data-check ${S.p.sel == null || S.p.sel === "" || S.busy ? "disabled" : ""}>${S.busy ? "Checking…" : "Check answer"}</button>`}
          <span class="spacer"></span>
          ${subj === "math" ? `<a class="note" href="https://www.desmos.com/testing/cb-digital-sat/graphing" target="_blank" rel="noopener">Desmos calculator ↗</a>` : ""}
        </div>
        ${a ? (S.p.reporting ? `<form id="reportForm" class="row"><div class="field"><label for="rnote" class="note">What’s wrong with this question?</label><input id="rnote" maxlength="300" placeholder="e.g. two answers look correct"></div><button class="btn small" type="submit">Send report</button><button class="link note" type="button" data-cancel-report>Cancel</button></form>`
              : `<div><button class="link note" data-report ${S.p.reported ? "disabled" : ""}>${S.p.reported ? "Reported. Thanks" : "Report a problem with this question"}</button></div>`) : ""}
      </div>
    </div>
  </article>`;
}

function viewDone() {
  const s = S.p.subj; const list = items(s);
  const right = list.filter((q) => q.answered?.correct).length;
  const ms = list.reduce((t, q) => t + (q.answered?.ms || 0), 0);
  const bySk = {}; list.filter((q) => q.answered && !q.answered.correct).forEach((q) => (bySk[q.skill] = (bySk[q.skill] || 0) + 1));
  const other = s === "rw" ? "math" : "rw";
  const otherDone = items(other).length && items(other).every((q) => q.answered);
  return `<div class="panel"><p class="eyebrow">${SUBJ[s].name} · done for today</p>
    <div class="row" style="align-items:flex-end;gap:16px"><span class="big num">${right}/${list.length}</span><span class="muted">correct · about ${Math.max(1, Math.round(ms / 60000))} min · ${list.length ? Math.round(ms / 1000 / list.length) : 0} s per question</span></div>
    ${Object.keys(bySk).length ? `<div><h3>To review</h3><div class="focus" style="margin-top:8px">${Object.entries(bySk).map(([k, n]) => `<span class="chip">${esc(k)} ×${n}</span>`).join("")}</div><p class="note" style="margin-top:8px">Missed questions come back on a later day.</p></div>` : "<p>A perfect set.</p>"}
    <div class="actions">${otherDone ? `<button class="btn" data-tab="progress">See progress</button>` : `<button class="btn" data-start="${other}">Start ${SUBJ[other].name}</button>`}<button class="btn ghost" data-review="${s}">Look over answers</button></div>
  </div>
  <p class="note">The real test gives about ${s === "rw" ? "71" : "95"} seconds per question.</p>`;
}

function chart14(prog) {
  const W = 640, H = 170, pl = 26, pb = 22, pt = 8, n = 14, max = PER_DAY;
  const by = {}; (prog.days || []).forEach((d) => { (by[d.day] = by[d.day] || {})[d.subject] = [Number(d.c), Number(d.t)]; });
  const bw = (W - pl) / n, y = (v) => pt + (H - pt - pb) * (1 - Math.min(v, max) / max);
  let g = "";
  [0, 5, 10, 15].forEach((v) => { g += `<line x1="${pl}" x2="${W}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)"/><text x="${pl - 6}" y="${y(v) + 3}" text-anchor="end">${v}</text>`; });
  for (let i = n - 1, k = 0; i >= 0; i--, k++) {
    const d = new Date(); d.setDate(d.getDate() - i); const key = dstr(d); const x = pl + k * bw; const dd = by[key] || {};
    [["rw", "var(--accent)"], ["math", "var(--pencil)"]].forEach(([s, c], j) => {
      const [cc, tt] = dd[s] || [0, 0]; const bx = x + bw * 0.14 + j * bw * 0.36;
      if (tt) g += `<rect x="${bx}" y="${y(tt)}" width="${bw * 0.32}" height="${y(0) - y(tt)}" fill="${c}" opacity=".25" rx="2"/>`;
      if (cc) g += `<rect x="${bx}" y="${y(cc)}" width="${bw * 0.32}" height="${y(0) - y(cc)}" fill="${c}" rx="2"/>`;
    });
    if (k % 2 === 1) g += `<text x="${x + bw / 2}" y="${H - 6}" text-anchor="middle">${d.getMonth() + 1}/${d.getDate()}</text>`;
  }
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Correct answers per day, last 14 days">${g}</svg>`;
}

function viewProgress() {
  if (!S.prog) return `<p class="muted">Loading progress…</p>`;
  const sk = {}; (S.prog.skills || []).forEach((r) => (sk[`${r.subject}|${r.domain}|${r.skill}`] = [Number(r.c), Number(r.t)]));
  const block = (s) => {
    let C = 0, T = 0, rows = "";
    SUBJ[s].domains.forEach((d) => {
      let dc = 0, dt = 0; let inner = "";
      SUBJ[s].skills[d].forEach((k) => {
        const v = sk[`${s}|${d}|${k}`]; if (v) { dc += v[0]; dt += v[1]; }
        const pct = v && v[1] ? v[0] / v[1] : null;
        inner += `<div class="skrow"><span>${esc(k)}</span><span class="bar">${pct != null ? `<i class="${pct < 0.5 ? "lo" : pct < 0.75 ? "mid" : ""}" style="width:${Math.round(pct * 100)}%"></i>` : ""}</span><span class="num muted" style="text-align:right">${v ? `${v[0]}/${v[1]}` : "—"}</span></div>`;
      });
      C += dc; T += dt;
      rows += `<div class="dom">${esc(d)} <span class="num" style="float:right">${dt ? Math.round((100 * dc) / dt) + "%" : "—"}</span></div>${inner}`;
    });
    return `<section class="panel"><div class="subj-head"><h2>${SUBJ[s].name}</h2><span class="score">${T ? `${Math.round((100 * C) / T)}% of ${T}` : "No answers yet"}</span></div><div class="skills">${rows}</div></section>`;
  };
  const missed = S.prog.missed || [];
  const dm = daysMap(S.prog);
  return `<div class="hello"><div><p class="eyebrow">Last 14 days</p><h1>${S.watch ? `${esc(nameOf(S.watch))}’s progress` : "Progress"}</h1></div>
    <div class="streak"><span class="streak-dot num">${streakFrom(dm)}</span><div><b>day streak</b><div class="note">${Object.keys(dm).length} days practiced</div></div></div></div>
    <section class="panel"><div class="legend"><span><i class="sw" style="background:var(--accent)"></i>Reading & Writing correct</span><span><i class="sw" style="background:var(--pencil)"></i>Math correct</span><span>Faded bar: answered</span></div>${chart14(S.prog)}</section>
    ${block("rw")}${block("math")}
    <section class="panel"><div class="subj-head"><h2>Missed questions</h2><span class="score">${missed.length}</span></div>
    ${missed.length ? missed.map((q) => {
      const a = q.answered;
      return `<details class="miss"><summary>${esc(SUBJ[q.subject].name)} · ${esc(q.skill)}</summary><div class="mbody">${q.passage ? `<div style="font-family:var(--f-read)">${fmt(q.passage)}</div>` : ""}<div><b>${fmt(q.question)}</b></div>
        ${q.choices ? `<div>${q.choices.map((c, i) => `<div>${i === a.answer_index ? "<b>" : ""}${"ABCD"[i]}. ${inline(c)}${i === a.answer_index ? " ✓</b>" : ""}${String(i) === a.response && i !== a.answer_index ? " <span class='down'>(your answer)</span>" : ""}</div>`).join("")}</div>`
          : `<div>Your answer: ${esc(a.response)} · Correct: <b>${esc((a.accept || []).join(" or "))}</b></div>`}
        <div class="muted">${inline(a.explanation)}</div></div></details>`;
    }).join("") : `<p class="note">Nothing to review yet.</p>`}</section>`;
}

function viewResources() {
  const r = [
    ["https://bluebook.collegeboard.org/", "Bluebook", "Official full-length adaptive practice tests for the SAT and every PSAT."],
    ["https://www.khanacademy.org/test-prep/digital-sat", "Khan Academy · Digital SAT", "Free official lessons and practice built with College Board."],
    ["https://satsuiteeducatorquestionbank.collegeboard.org/", "SAT Suite Question Bank", "Official questions you can filter by test, skill and difficulty."],
    ["https://www.desmos.com/testing/cb-digital-sat/graphing", "Desmos calculator", "The same graphing calculator built into the test."],
    ["https://satsuite.collegeboard.org/psat-nmsqt", "PSAT/NMSQT", "Test dates, scoring and National Merit details for 11th graders."],
    ["https://satsuite.collegeboard.org/psat-8-9", "PSAT 8/9", "What the 9th-grade test covers and how it is scored."],
  ];
  return `<div><p class="eyebrow">Free and official</p><h1>Official practice</h1></div>
    <p class="muted">Ascend uses original questions in the SAT style. For real College Board questions, use these alongside it.</p>
    <div class="res">${r.map(([u, t, d]) => `<a href="${u}" target="_blank" rel="noopener"><b>${t} ↗</b><span class="note">${d}</span></a>`).join("")}</div>`;
}

function viewAccount() {
  const pr = S.data.profile;
  return `<div><p class="eyebrow">Account</p><h1>${esc(pr.display_name || pr.username)}</h1></div>
    <section class="panel"><p>Username: <b>${esc(pr.username)}</b></p><p>Section: <b>${esc(ASCEND_SECTIONS[pr.section].grade)} · ${esc(ASCEND_SECTIONS[pr.section].test)}</b></p><p class="note">Your tutor sets your section.</p></section>
    <form class="panel" id="pwForm"><h2>Change password</h2>
      <div class="field"><label for="np">New password</label><input id="np" type="password" minlength="6" autocomplete="new-password" required></div>
      <p class="err" id="pwErr"></p>
      <div><button class="btn small" type="submit">Save new password</button></div></form>
    <div><button class="btn ghost" data-signout>Sign out</button></div>`;
}

/* ───────── actions ───────── */
function startSubject(s, review = false) {
  const list = items(s); if (!list.length) return;
  const first = list.findIndex((q) => !q.answered);
  if (first === -1 && !review) { S.p = { subj: s, idx: list.length - 1 }; S.view = "done"; return render(); }
  S.p = { subj: s, idx: review ? 0 : first, sel: null, t0: Date.now(), reviewing: review };
  S.view = "practice"; render(); window.scrollTo(0, 0);
}

async function check() {
  const { subj, idx } = S.p; const q = items(subj)[idx];
  let resp = S.p.sel;
  if (!q.choices) { resp = ($("#gridin")?.value || "").trim(); if (!resp) return; }
  S.busy = true; render();
  const { data, error } = await sb.rpc("ascend_submit_answer", { p_set_id: set(subj).id, p_question_id: q.id, p_response: String(resp), p_ms: Math.min(Date.now() - S.p.t0, 900000) });
  S.busy = false;
  if (error) { toast(friendlyError(error)); return render(); }
  set(subj).items[idx] = data;
  S.prog = null; loadProgress().catch(() => {});
  render();
}

function next() {
  const { subj, idx } = S.p; const list = items(subj);
  const go = (i) => { S.p = { ...S.p, idx: i, sel: null, t0: Date.now(), reported: false, reporting: false }; };
  if (S.p.reviewing) { if (idx < list.length - 1) go(idx + 1); else S.view = "done"; }
  else {
    let nx = list.findIndex((q, i) => i > idx && !q.answered);
    if (nx === -1) nx = list.findIndex((q) => !q.answered);
    if (nx === -1) S.view = "done"; else go(nx);
  }
  render(); window.scrollTo(0, 0);
}

document.addEventListener("click", async (e) => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.tab) {
    if (t.dataset.tab === "admin") { location.href = "admin.html"; return; }
    S.view = t.dataset.tab; render();
    if (S.view === "progress" && !S.prog) { await loadProgress().catch((er) => toast(friendlyError(er))); render(); }
    return;
  }
  if (t.dataset.go) { S.view = t.dataset.go; render(); return; }
  if (t.dataset.start) return startSubject(t.dataset.start);
  if (t.dataset.review) return startSubject(t.dataset.review, true);
  if (t.dataset.choice != null && S.view === "practice") { S.p.sel = Number(t.dataset.choice); render(); return; }
  if (t.hasAttribute("data-check")) return check();
  if (t.hasAttribute("data-next")) return next();
  if (t.hasAttribute("data-report")) { S.p.reporting = true; render(); $("#rnote")?.focus(); return; }
  if (t.hasAttribute("data-cancel-report")) { S.p.reporting = false; render(); return; }
  if (t.hasAttribute("data-signout")) return signOut();
});

document.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (e.target.id === "reportForm") {
    const q = items(S.p.subj)[S.p.idx];
    const { error } = await sb.rpc("ascend_report_question", { p_question_id: q.id, p_note: $("#rnote").value });
    if (error) return toast(friendlyError(error));
    S.p.reporting = false; S.p.reported = true; render(); toast("Thanks. Your tutor will check it.");
  }
  if (e.target.id === "pwForm") {
    const { error } = await sb.auth.updateUser({ password: $("#np").value });
    if (error) { $("#pwErr").textContent = friendlyError(error); return; }
    e.target.reset(); toast("Password changed.");
  }
});

document.addEventListener("input", (e) => {
  if (e.target.id === "gridin") { S.p.sel = e.target.value; const b = $("[data-check]"); if (b) b.disabled = !e.target.value.trim(); }
});
document.addEventListener("keydown", (e) => {
  if (S.view !== "practice" || S.busy) return;
  const q = items(S.p.subj)[S.p.idx];
  if (e.key === "Enter") { const b = $("[data-check]:not(:disabled)") || $("[data-next]"); if (b) { e.preventDefault(); b.click(); } return; }
  if (e.target.tagName === "INPUT") return;
  const i = "abcd".indexOf(e.key.toLowerCase());
  if (q.choices && i >= 0 && !q.answered) { S.p.sel = i; render(); }
});
setInterval(() => {
  const el = $("#timer"); if (!el || S.view !== "practice") return;
  const q = items(S.p.subj)[S.p.idx]; if (q.answered) { el.textContent = ""; return; }
  const s = Math.floor((Date.now() - S.p.t0) / 1000); el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}, 1000);

/* ───────── boot ───────── */
async function enter() {
  S.view = "loading"; render();
  try {
    await loadToday();
    loadProgress().then(() => { if (S.view === "today") render(); }).catch(() => {});
    S.view = "today";
  } catch (e) {
    S.error = friendlyError(e); S.view = "error"; render(); return;
  }
  render();
}
// Sign-in happens on the portal; anyone without a PSAT/SAT account (or admin) is sent back there.
(async () => {
  const me = await requireSection(["psat", "sat"]);
  const watching = me.role === "parent" || (me.role === "admin" && new URLSearchParams(location.search).get("kid"));
  mountSitebar(me, watching && me.role === "parent" ? (pickKid(me, ["psat", "sat"]) || {}).id : "ascend");
  // Parents (and admins following a ?kid= link) get a read-only view of that kid's progress.
  if (me.role === "parent" || (me.role === "admin" && new URLSearchParams(location.search).get("kid"))) {
    S.watch = pickKid(me, ["psat", "sat"]);
    if (!S.watch) { location.replace(PORTAL_URL); return; }
    S.view = "progress"; render();
    try { await loadProgress(); } catch (e) { S.error = friendlyError(e); S.view = "error"; }
    return render();
  }
  await enter();
})();
// Roll over to a new day's set if the tab stays open past midnight.
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && S.data && S.data.day !== today() && S.view !== "practice") enter();
});
