/* ==========================================================
   parent-dashboard.js
   Renders the Parent Dashboard into the main content area.
   Shows:
     - Overall stats
     - Per-chapter performance (from quizzes)
     - Daily Homework progress: which days passed, which pending
     - Day-by-day answer key for daily homework
     - Recent attempts table
     - Most-missed questions

   Also handles export / import / clear.
   ========================================================== */

import { Storage } from "./storage.js";
import {
  getTodayDayNumber,
  getDayLabel,
  getDayName,
  groupDailyAttemptsByChapterAndDay
} from "./daily-planner.js";

const PASSING_THRESHOLD = 85;

/* ==========================================================
   Formatting helpers
   ========================================================== */

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatDuration(seconds) {
  if (!seconds || seconds < 0) return "—";
  if (seconds < 60) return seconds + "s";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m + "m " + s + "s";
}

function scoreClass(pct) {
  if (pct >= 80) return "good";
  if (pct >= 60) return "mid";
  return "bad";
}

function typeLabel(a) {
  if (a.type === "final") return "🎯 Final Exam";
  if (a.type === "chapter") return "📝 " + (a.chapterName || "Chapter Quiz");
  if (a.type === "mini") return "🤔 " + (a.chapterName || "Quick Check");
  if (a.type === "daily-homework") {
    const dayLabel = a.dayNumber === 6 || a.dayNumber === 7 ? "Weekend Review" : `Day ${a.dayNumber}`;
    return `📅 ${a.chapterName || "Daily"} — ${dayLabel}`;
  }
  return a.type;
}

/* ==========================================================
   Main render
   ========================================================== */

export async function renderParentDashboard(mainEl, subtitleEl, subjects) {
  subtitleEl.textContent = "Parent Dashboard — all quiz and homework history on this device";

  const attempts = await Storage.getAllAttempts();

  // ---- Header card with actions ----
  const headerCard = document.createElement("div");
  headerCard.className = "card";
  headerCard.style.borderLeftColor = "var(--primary-purple)";
  headerCard.innerHTML = `
    <h2>📊 Parent Dashboard</h2>
    <p>All quiz and daily homework attempts are saved on this device automatically. Export regularly to back up.</p>
    <div class="btn-row">
      <button class="btn-primary" id="btnExport">📥 Export Data (JSON)</button>
      <button class="btn-secondary" id="btnImport">📤 Import Data</button>
      <input type="file" id="importFile" accept=".json" style="display:none;">
      <button class="btn-danger" id="btnClear">🗑️ Clear All Data</button>
    </div>
  `;
  mainEl.innerHTML = "";
  mainEl.appendChild(headerCard);

  wireDashboardActions(headerCard, mainEl, subtitleEl, subjects);

  if (attempts.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<div class="empty-state">
      No attempts yet. Once practice starts, results show up here.
    </div>`;
    mainEl.appendChild(empty);
    return;
  }

  // ---- Overall stats ----
  renderOverallStats(mainEl, attempts);

  // ---- Daily Homework section (Math only for now) ----
  await renderDailyHomeworkSection(mainEl, subjects);

  // ---- Per-chapter performance (from quizzes) ----
  renderChapterPerformance(mainEl, attempts, subjects);

  // ---- Recent attempts ----
  renderRecentAttempts(mainEl, attempts);

  // ---- Most missed questions ----
  renderMostMissed(mainEl, attempts);
}

/* ==========================================================
   Wire dashboard action buttons (export / import / clear)
   ========================================================== */

function wireDashboardActions(headerCard, mainEl, subtitleEl, subjects) {
  headerCard.querySelector("#btnExport").addEventListener("click", async () => {
    const json = await Storage.exportJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `science-explorer-${dateStr}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  headerCard.querySelector("#btnImport").addEventListener("click", () => {
    headerCard.querySelector("#importFile").click();
  });

  headerCard.querySelector("#importFile").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.attempts || !Array.isArray(data.attempts)) {
          alert("That file doesn't look like a Science Explorer export.");
          return;
        }
        const merge = confirm(
          `Import ${data.attempts.length} attempts?\n\n` +
          `OK = MERGE with existing data\n` +
          `Cancel = REPLACE existing data`
        );
        await Storage.importJSON(e.target.result, merge ? "merge" : "replace");
        alert("Import complete!");
        renderParentDashboard(mainEl, subtitleEl, subjects);
      } catch (err) {
        alert("Could not read that file: " + err.message);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  });

  headerCard.querySelector("#btnClear").addEventListener("click", async () => {
    if (confirm("This will permanently delete ALL history on this device. Are you sure?\n\n(Tip: Export first if you want a backup!)")) {
      if (confirm("Really delete everything? This can't be undone.")) {
        await Storage.clearAllAttempts();
        alert("All data cleared.");
        renderParentDashboard(mainEl, subtitleEl, subjects);
      }
    }
  });
}

/* ==========================================================
   Overall stats
   ========================================================== */

function renderOverallStats(mainEl, attempts) {
  const totalAttempts = attempts.length;
  const totalCorrect = attempts.reduce((s, a) => s + a.score, 0);
  const totalQuestions = attempts.reduce((s, a) => s + a.total, 0);
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const totalTime = attempts.reduce((s, a) => s + (a.duration || 0), 0);
  const timeStr = totalTime > 3600
    ? Math.floor(totalTime / 3600) + "h " + Math.floor((totalTime % 3600) / 60) + "m"
    : Math.floor(totalTime / 60) + "m " + (totalTime % 60) + "s";

  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const last7 = attempts.filter(a => new Date(a.timestamp).getTime() >= sevenDaysAgo);
  const last7Pct = last7.length > 0
    ? Math.round(last7.reduce((s, a) => s + a.percent, 0) / last7.length)
    : 0;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>📈 Overall Stats</h3>
    <div class="stat-grid">
      <div class="stat-box">
        <div class="stat-value">${totalAttempts}</div>
        <div class="stat-label">Total Attempts</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${overallPct}%</div>
        <div class="stat-label">Overall Average</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${last7Pct}%</div>
        <div class="stat-label">Last 7 Days Avg</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${timeStr}</div>
        <div class="stat-label">Total Practice Time</div>
      </div>
    </div>
  `;
  mainEl.appendChild(card);
}

/* ==========================================================
   Daily Homework section
   ========================================================== */

async function renderDailyHomeworkSection(mainEl, subjects) {
  // Only Math has daily homework
  const mathSubject = subjects && subjects.math;
  if (!mathSubject || !mathSubject.chapters || mathSubject.chapters.length === 0) return;

  const chaptersWithDH = mathSubject.chapters.filter(ch => ch.dailyHomework);
  if (chaptersWithDH.length === 0) return;

  const grouped = await groupDailyAttemptsByChapterAndDay("math");

  const card = document.createElement("div");
  card.className = "card";
  card.style.borderLeftColor = "var(--primary-blue)";

  let html = `<h3>📅 Daily Homework Progress</h3>
    <p style="color:#666; font-size:0.95em;">Each day's sheet is passed at 85% or higher. Tap any day to see the full answer key.</p>`;

  chaptersWithDH.forEach(ch => {
    const chapterAttempts = grouped[ch.id] || {};
    html += `<div style="margin: 20px 0;">
      <div style="font-weight: bold; font-size: 1.05em; color: var(--primary-purple); margin-bottom: 10px;">
        ${ch.name}
      </div>
      <div class="dh-day-boxes">`;

    for (let day = 1; day <= 7; day++) {
      const dayAttempts = chapterAttempts[day] || [];
      const label = getDayLabel(day);
      const dayName = day >= 6 ? "Weekend Review" : `Day ${day}`;

      let classes = "dh-day-box";
      let statusIcon = "";
      let subtitle = "Not started";

      if (dayAttempts.length > 0) {
        const best = dayAttempts.reduce((max, a) => a.percent > max.percent ? a : max, dayAttempts[0]);
        if (best.percent >= PASSING_THRESHOLD) {
          classes += " dh-day-passed";
          statusIcon = " ✓";
          subtitle = `${best.score}/${best.total}`;
        } else {
          classes += " dh-day-failed";
          subtitle = `${best.score}/${best.total}`;
        }
      }

      html += `<button class="${classes}" data-chapter="${ch.id}" data-day="${day}">
        <span class="dh-day-label">${label}${statusIcon}</span>
        <span class="dh-day-name">${dayName}</span>
        <span style="font-size: 0.75em; color: #666; display: block; margin-top: 2px;">${subtitle}</span>
      </button>`;
    }

    html += `</div></div>`;
  });

  html += `<div id="dhAnswerKey" style="margin-top: 20px;"></div>`;

  card.innerHTML = html;
  mainEl.appendChild(card);

  // Wire day-box clicks to show the answer key
  card.querySelectorAll(".dh-day-box[data-chapter]").forEach(box => {
    box.addEventListener("click", async () => {
      card.querySelectorAll(".dh-day-box[data-chapter]").forEach(b => b.classList.remove("dh-day-active"));
      box.classList.add("dh-day-active");

      const chapterId = box.dataset.chapter;
      const day = parseInt(box.dataset.day);
      await renderDayAnswerKey(card.querySelector("#dhAnswerKey"), grouped, chapterId, day);
    });
  });
}

/* ==========================================================
   Day-by-day answer key
   ========================================================== */

async function renderDayAnswerKey(container, grouped, chapterId, dayNumber) {
  const dayAttempts = (grouped[chapterId] || {})[dayNumber] || [];

  if (dayAttempts.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding: 20px;">
      No attempts yet for this day.
    </div>`;
    return;
  }

  // Most recent attempt is the "latest"
  const latest = dayAttempts[0];
  const dayName = dayNumber >= 6 ? "Weekend Review" : `Day ${dayNumber}`;
  const label = getDayName(dayNumber);

  let html = `
    <div style="background: #FAFBFF; border-radius: 14px; padding: 20px; border: 2px solid #D6E4FF;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
        <div>
          <div style="font-weight: bold; font-size: 1.1em; color: var(--primary-purple);">
            ${latest.chapterName} — ${dayName}
          </div>
          <div style="font-size: 0.9em; color: #666;">
            ${label} • Latest attempt: ${formatDate(latest.timestamp)} • ${dayAttempts.length} attempt${dayAttempts.length > 1 ? "s" : ""}
          </div>
        </div>
        <div class="score-pill ${scoreClass(latest.percent)}" style="font-size: 1.1em; padding: 8px 16px;">
          ${latest.score}/${latest.total} (${latest.percent}%)
        </div>
      </div>
  `;

  // Latest attempt answers (if available)
  if (latest.questions && latest.questions.length > 0) {
    html += `<div style="margin-top: 16px;">
      <div style="font-weight: bold; color: var(--primary-blue); margin-bottom: 10px;">
        Latest Attempt — Answer Key
      </div>
      <ol style="list-style: decimal; padding-left: 24px;">`;

    latest.questions.forEach(q => {
      const clean = (s) => (s || "").toString().trim().toLowerCase().replace(/,/g, "").replace(/\s+/g, "");
      const isCorrect = clean(q.userAnswer) === clean(q.correctAnswer);
      html += `<li style="padding: 8px 0; border-bottom: 1px solid #EEE;">
        <div style="color: #333;">${q.question}</div>
        <div style="font-size: 0.95em; margin-top: 4px;">
          <span style="color: ${isCorrect ? "#28A745" : "#DC3545"};">
            ${isCorrect ? "✓" : "✗"} Your answer: ${q.userAnswer || "(blank)"}
          </span>
          ${!isCorrect ? `<span style="color: #28A745; margin-left: 12px;">Correct: ${q.correctAnswer}</span>` : ""}
        </div>
      </li>`;
    });

    html += `</ol></div>`;
  } else {
    // Older attempts didn't save the questions
    html += `<div style="font-size: 0.9em; color: #666; font-style: italic; margin-top: 12px;">
      Detailed answers aren't available for this attempt (older format). New attempts will include them.
    </div>`;
  }

  // Prior attempts summary
  if (dayAttempts.length > 1) {
    html += `<div style="margin-top: 20px; padding-top: 16px; border-top: 2px dashed #DDD;">
      <div style="font-weight: bold; color: var(--primary-purple); margin-bottom: 10px;">
        Previous Attempts
      </div>
      <table class="data-table">
        <thead><tr><th>When</th><th>Score</th><th>Time</th></tr></thead>
        <tbody>`;
    dayAttempts.slice(1).forEach(a => {
      html += `<tr>
        <td>${formatDate(a.timestamp)}</td>
        <td><span class="score-pill ${scoreClass(a.percent)}">${a.score}/${a.total} (${a.percent}%)</span></td>
        <td>${formatDuration(a.duration)}</td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
  }

  html += `</div>`;
  container.innerHTML = html;
  container.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ==========================================================
   Per-chapter performance (quizzes)
   ========================================================== */

function renderChapterPerformance(mainEl, attempts, subjects) {
  const card = document.createElement("div");
  card.className = "card";

  let html = `<h3>📚 Quiz Performance by Chapter</h3>`;

  Object.values(subjects || {}).forEach(subj => {
    if (!subj.chapters || subj.chapters.length === 0) return;

    const hasAnyAttempts = subj.chapters.some(ch =>
      attempts.some(a => a.subject === subj.id && a.chapter === ch.id && a.type !== "daily-homework")
    );
    if (!hasAnyAttempts) return;

    html += `<div style="margin-top: 20px;">
      <div style="font-weight: bold; font-size: 1.05em; color: var(--primary-purple); margin-bottom: 12px;">
        ${subj.icon} ${subj.name}
      </div>`;

    subj.chapters.forEach(ch => {
      const chAttempts = attempts.filter(a =>
        a.subject === subj.id && a.chapter === ch.id && a.type !== "daily-homework"
      );

      if (chAttempts.length === 0) {
        html += `<div class="topic-row">
          <div class="topic-name">${ch.name}
            <span style="color:#999; font-weight:normal; font-size:0.85em;">— no quiz attempts</span>
          </div>
          <div class="topic-bar"><div class="topic-bar-fill" style="width:0%; background:#CCC;"></div></div>
        </div>`;
        return;
      }

      const avg = Math.round(chAttempts.reduce((s, a) => s + a.percent, 0) / chAttempts.length);
      const color = avg >= 80 ? "#2ECC71" : (avg >= 60 ? "#F1C40F" : "#E74C3C");
      html += `<div class="topic-row">
        <div class="topic-name">${ch.name}
          <span style="font-weight:normal; color:#666; font-size:0.9em;">
            — avg ${avg}% over ${chAttempts.length} attempt${chAttempts.length > 1 ? "s" : ""}
          </span>
        </div>
        <div class="topic-bar">
          <div class="topic-bar-fill" style="width:${avg}%; background:${color};">${avg}%</div>
        </div>
      </div>`;
    });

    html += `</div>`;
  });

  if (html === `<h3>📚 Quiz Performance by Chapter</h3>`) {
    html += `<p style="color:#666; font-style:italic;">No quiz attempts yet.</p>`;
  }

  card.innerHTML = html;
  mainEl.appendChild(card);
}

/* ==========================================================
   Recent attempts
   ========================================================== */

function renderRecentAttempts(mainEl, attempts) {
  const card = document.createElement("div");
  card.className = "card";

  const recent = attempts.slice(0, 25);
  let html = `<h3>🕐 Recent Attempts (last 25)</h3>
    <table class="data-table">
      <thead><tr><th>When</th><th>Type</th><th>Score</th><th>Time</th></tr></thead>
      <tbody>`;

  recent.forEach(a => {
    const cls = scoreClass(a.percent);
    const typeStr = typeLabel(a);
    html += `<tr>
      <td>${formatDate(a.timestamp)}</td>
      <td>${typeStr}</td>
      <td><span class="score-pill ${cls}">${a.score}/${a.total} (${a.percent}%)</span></td>
      <td>${formatDuration(a.duration)}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  mainEl.appendChild(card);
}

/* ==========================================================
   Most-missed questions
   ========================================================== */

function renderMostMissed(mainEl, attempts) {
  const missCounts = {};
  attempts.forEach(a => {
    (a.missed || []).forEach(m => {
      const key = m.question;
      if (!missCounts[key]) {
        missCounts[key] = {
          count: 0,
          correct: m.correctAnswer,
          explanation: m.explanation
        };
      }
      missCounts[key].count++;
    });
  });

  const topMissed = Object.entries(missCounts)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10);

  const card = document.createElement("div");
  card.className = "card";
  let html = `<h3>🎯 Most-Missed Questions</h3>`;

  if (topMissed.length === 0) {
    html += `<p style="color:#666; font-style:italic;">No missed questions recorded yet — great work!</p>`;
  } else {
    html += `<div class="missed-list">`;
    topMissed.forEach(([q, data]) => {
      html += `
        <div class="missed-item">
          <div class="missed-q">
            ${q}
            <span style="background:#F8D7DA; color:#721C24; padding:2px 8px;
                         border-radius:10px; font-size:0.85em; margin-left:8px;">
              missed ${data.count}×
            </span>
          </div>
          <div class="missed-a">Correct answer:
            <span class="correct-ans">${data.correct}</span>
          </div>
          ${data.explanation ? `<div class="missed-a" style="margin-top:4px;"><em>${data.explanation}</em></div>` : ""}
        </div>
      `;
    });
    html += `</div>`;
  }

  card.innerHTML = html;
  mainEl.appendChild(card);
}