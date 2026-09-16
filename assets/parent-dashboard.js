/* ==========================================================
   parent-dashboard.js
   Parent Dashboard, reorganized around skill mastery.

   Sections:
     1. Overall stats (attempts, avg, time)
     2. Skill mastery by subject
        - Which skill is current
        - How many sessions passed (out of 5)
        - Full skill history (mastered, in progress, not started)
     3. Homework history per subject
        - Every homework attempt with score, duration
        - Click any attempt to see the full answer key
     4. Quiz performance by chapter
     5. Recent attempts (all types)
     6. Most-missed questions

   Also handles export / import / clear.
   ========================================================== */

import { Storage } from "./storage.js";

const PASSING_THRESHOLD = 85;
const SESSIONS_REQUIRED = 5;

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
  if (a.type === "homework") return "📝 " + (a.skillLabel || a.chapterName || "Homework");
  // legacy type from previous version
  if (a.type === "daily-homework") {
    const dayLabel = a.dayNumber === 6 || a.dayNumber === 7 ? "Weekend Review" : `Day ${a.dayNumber}`;
    return `📅 ${a.chapterName || "Daily"} — ${dayLabel}`;
  }
  return a.type;
}

function starsInline(n) {
  let html = '<span class="stars">';
  for (let i = 0; i < SESSIONS_REQUIRED; i++) {
    html += i < n
      ? '<span class="star filled">★</span>'
      : '<span class="star empty">★</span>';
  }
  html += '</span>';
  return html;
}

/* ==========================================================
   Main render
   ========================================================== */

export async function renderParentDashboard(mainEl, subjects) {
  const attempts = await Storage.getAllAttempts();

  // Header card with actions
  const headerCard = document.createElement("div");
  headerCard.className = "card";
  headerCard.style.borderLeftColor = "var(--primary-purple)";
  headerCard.innerHTML = `
    <h2>📊 Parent Dashboard</h2>
    <p>All homework, quiz, and exam attempts are saved on this device automatically. Export regularly to back up.</p>
    <div class="btn-row">
      <button class="btn-primary" id="btnExport">📥 Export Data (JSON)</button>
      <button class="btn-secondary" id="btnImport">📤 Import Data</button>
      <input type="file" id="importFile" accept=".json" style="display:none;">
      <button class="btn-danger" id="btnClear">🗑️ Clear All Data</button>
    </div>
  `;
  mainEl.innerHTML = "";
  mainEl.appendChild(headerCard);

  wireDashboardActions(headerCard, mainEl, subjects);

  if (attempts.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<div class="empty-state">
      No attempts yet. Once practice starts, results show up here.
    </div>`;
    mainEl.appendChild(empty);
    return;
  }

  // 1. Overall stats
  renderOverallStats(mainEl, attempts);

  // 2. Skill mastery by subject
  await renderSkillMastery(mainEl, subjects);

  // 3. Homework history
  await renderHomeworkHistory(mainEl, subjects, attempts);

  // 4. Quiz performance by chapter
  renderChapterPerformance(mainEl, attempts, subjects);

  // 5. Recent attempts
  renderRecentAttempts(mainEl, attempts);

  // 6. Most-missed questions
  renderMostMissed(mainEl, attempts);
}

/* ==========================================================
   Action buttons
   ========================================================== */

function wireDashboardActions(headerCard, mainEl, subjects) {
  headerCard.querySelector("#btnExport").addEventListener("click", async () => {
    const json = await Storage.exportJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `explorer-data-${dateStr}.json`;
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
          alert("That file doesn't look like an Explorer export.");
          return;
        }
        const merge = confirm(
          `Import ${data.attempts.length} attempts?\n\n` +
          `OK = MERGE with existing data\n` +
          `Cancel = REPLACE existing data`
        );
        await Storage.importJSON(e.target.result, merge ? "merge" : "replace");
        alert("Import complete!");
        renderParentDashboard(mainEl, subjects);
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
        renderParentDashboard(mainEl, subjects);
      }
    }
  });
}

/* ==========================================================
   1. Overall stats
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
   2. Skill mastery by subject
   ========================================================== */

async function renderSkillMastery(mainEl, subjects) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.borderLeftColor = "var(--primary-blue)";

  let html = `<h3>🎯 Skill Mastery by Subject</h3>
    <p style="color:#666; font-size:0.95em;">
      Homework is organized into skills. Each skill needs 5 passing sessions (85%+).
      The star rating shows progress on the current skill.
    </p>`;

  for (const subj of Object.values(subjects || {})) {
    if (!subj.chapters || subj.chapters.length === 0) continue;

    const meta = await Storage.getMeta(`skillProgress_${subj.id}`);
    const currentChapterId = meta ? meta.chapterId : null;
    const currentSkillKey = meta ? meta.skillKey : null;
    const currentPassed = meta ? meta.sessionsPassed || 0 : 0;

    html += `
      <div style="margin-top: 20px;">
        <div style="font-weight: bold; font-size: 1.05em; color: var(--primary-purple); margin-bottom: 12px;">
          ${subj.icon} ${subj.name}
        </div>
    `;

    if (!meta) {
      html += `<div style="color:#888; font-style:italic; padding-left:12px;">
        No homework started yet.
      </div>`;
      html += `</div>`;
      continue;
    }

    const currentChapter = subj.chapters.find(c => c.id === currentChapterId);
    const currentSkill = currentChapter && currentChapter.skills
      ? currentChapter.skills.find(s => s.key === currentSkillKey)
      : null;

    if (currentChapter && currentSkill) {
      html += `
        <div style="background:#FAFBFF; border-radius:12px; padding:16px; border-left:5px solid var(--primary-blue); margin-bottom:12px;">
          <div style="font-weight: bold; color: var(--primary-blue);">
            Current: ${currentSkill.label}
          </div>
          <div style="font-size: 0.9em; color: #666; margin-top: 4px;">
            Chapter: ${currentChapter.name}
          </div>
          <div style="margin-top: 10px;">
            ${starsInline(currentPassed)}
            <span style="margin-left: 10px; font-weight: bold; color: var(--text-dark);">
              ${currentPassed} / ${SESSIONS_REQUIRED} sessions passed
            </span>
          </div>
        </div>
      `;
    }

    // Full chapter list with skill status
    html += `<div style="padding-left: 12px;">`;
    for (const chapter of subj.chapters) {
      if (!chapter.skills || chapter.skills.length === 0) continue;

      const isCurrentChapter = chapter.id === currentChapterId;
      const chapterIdx = subj.chapters.indexOf(chapter);
      const currentChapterIdx = currentChapterId
        ? subj.chapters.findIndex(c => c.id === currentChapterId)
        : -1;

      html += `<div style="margin: 10px 0;">
        <div style="font-weight: bold; color: #444; margin-bottom: 6px;">${chapter.name}</div>
        <div style="padding-left: 12px;">`;

      for (const skill of chapter.skills) {
        let icon = "○";
        let color = "#999";
        let statusText = "Not started";

        if (isCurrentChapter && skill.key === currentSkillKey) {
          icon = "▶";
          color = "var(--primary-blue)";
          statusText = `${currentPassed}/5 passed`;
        } else if (isCurrentChapter) {
          const skillIdx = chapter.skills.findIndex(s => s.key === skill.key);
          const currentSkillIdx = chapter.skills.findIndex(s => s.key === currentSkillKey);
          if (skillIdx < currentSkillIdx) {
            icon = "✓";
            color = "#2ECC71";
            statusText = "Mastered";
          }
        } else if (chapterIdx >= 0 && currentChapterIdx >= 0 && chapterIdx < currentChapterIdx) {
          icon = "✓";
          color = "#2ECC71";
          statusText = "Mastered";
        }

        html += `
          <div style="display:flex; align-items:center; gap:10px; padding: 4px 0; font-size: 0.95em;">
            <span style="color:${color}; font-weight:bold; min-width:16px;">${icon}</span>
            <span style="flex:1;">${skill.label}</span>
            <span style="color:#888; font-size:0.85em;">${statusText}</span>
          </div>
        `;
      }
      html += `</div></div>`;
    }
    html += `</div></div>`;
  }

  card.innerHTML = html;
  mainEl.appendChild(card);
}

/* ==========================================================
   3. Homework history with answer key
   ========================================================== */

async function renderHomeworkHistory(mainEl, subjects, attempts) {
  const homeworkAttempts = attempts.filter(a =>
    a.type === "homework" || a.type === "daily-homework"
  );

  if (homeworkAttempts.length === 0) return;

  const card = document.createElement("div");
  card.className = "card";
  card.style.borderLeftColor = "var(--accent-orange)";

  let html = `<h3>📝 Homework History</h3>
    <p style="color:#666; font-size:0.95em;">Click any attempt to open the full answer key.</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>When</th>
          <th>Subject</th>
          <th>Skill</th>
          <th>Score</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>`;

  homeworkAttempts.slice(0, 30).forEach((a, idx) => {
    const cls = scoreClass(a.percent);
    const skillLabel = a.skillLabel || a.chapterName || "Homework";
    const subjectName = a.subjectName || a.subject || "—";
    html += `<tr class="hw-row" data-attempt-idx="${idx}" style="cursor:pointer;">
      <td>${formatDate(a.timestamp)}</td>
      <td>${subjectName}</td>
      <td>${skillLabel}</td>
      <td><span class="score-pill ${cls}">${a.score}/${a.total} (${a.percent}%)</span></td>
      <td>${formatDuration(a.duration)}</td>
    </tr>`;
  });

  html += `</tbody></table>
    <div id="hwAnswerKey" style="margin-top: 20px;"></div>`;

  card.innerHTML = html;
  mainEl.appendChild(card);

  // Wire clicks
  card.querySelectorAll(".hw-row").forEach(row => {
    row.addEventListener("click", () => {
      const idx = parseInt(row.dataset.attemptIdx);
      const attempt = homeworkAttempts[idx];
      renderHomeworkAnswerKey(card.querySelector("#hwAnswerKey"), attempt);
    });
  });
}

function renderHomeworkAnswerKey(container, attempt) {
  const dayLabel = attempt.skillLabel || attempt.chapterName || "Homework";
  const subjectName = attempt.subjectName || attempt.subject || "";

  let html = `
    <div style="background: #FAFBFF; border-radius: 14px; padding: 20px; border: 2px solid #D6E4FF;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
        <div>
          <div style="font-weight: bold; font-size: 1.1em; color: var(--primary-purple);">
            ${subjectName} — ${dayLabel}
          </div>
          <div style="font-size: 0.9em; color: #666;">
            ${formatDate(attempt.timestamp)} • Session ${attempt.sessionNumber || "—"} of 5
          </div>
        </div>
        <div class="score-pill ${scoreClass(attempt.percent)}" style="font-size: 1.1em; padding: 8px 16px;">
          ${attempt.score}/${attempt.total} (${attempt.percent}%)
        </div>
      </div>
  `;

  if (attempt.questions && attempt.questions.length > 0) {
    html += `<ol style="list-style: decimal; padding-left: 24px;">`;
    attempt.questions.forEach(q => {
      const clean = (s) => (s || "").toString().trim().toLowerCase().replace(/,/g, "").replace(/\s+/g, "");
      const isCorrect = clean(q.userAnswer) === clean(q.correctAnswer);
      html += `<li style="padding: 8px 0; border-bottom: 1px solid #EEE;">
        <div style="color: #333;">${q.question}</div>
        <div style="font-size: 0.95em; margin-top: 4px;">
          <span style="color: ${isCorrect ? "#28A745" : "#DC3545"};">
            ${isCorrect ? "✓" : "✗"} Student: ${q.userAnswer || "(blank)"}
          </span>
          ${!isCorrect ? `<span style="color: #28A745; margin-left: 12px;">Correct: ${q.correctAnswer}</span>` : ""}
        </div>
      </li>`;
    });
    html += `</ol>`;
  } else {
    html += `<div style="color:#666; font-style:italic;">Detailed answers not available for this attempt.</div>`;
  }

  html += `</div>`;
  container.innerHTML = html;
  container.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ==========================================================
   4. Quiz performance by chapter
   ========================================================== */

function renderChapterPerformance(mainEl, attempts, subjects) {
  const card = document.createElement("div");
  card.className = "card";

  let html = `<h3>📚 Quiz Performance by Chapter</h3>`;

  Object.values(subjects || {}).forEach(subj => {
    if (!subj.chapters || subj.chapters.length === 0) return;

    const hasAny = subj.chapters.some(ch =>
      attempts.some(a => a.subject === subj.id && a.chapter === ch.id &&
        (a.type === "chapter" || a.type === "mini"))
    );
    if (!hasAny) return;

    html += `<div style="margin-top: 20px;">
      <div style="font-weight: bold; font-size: 1.05em; color: var(--primary-purple); margin-bottom: 12px;">
        ${subj.icon} ${subj.name}
      </div>`;

    subj.chapters.forEach(ch => {
      const chAttempts = attempts.filter(a =>
        a.subject === subj.id && a.chapter === ch.id &&
        (a.type === "chapter" || a.type === "mini")
      );

      if (chAttempts.length === 0) {
        html += `<div class="topic-row">
          <div class="topic-name">${ch.name}
            <span style="color:#999; font-weight:normal; font-size:0.85em;">— no attempts</span>
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
            — avg ${avg}% (${chAttempts.length} attempts)
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
   5. Recent attempts
   ========================================================== */

function renderRecentAttempts(mainEl, attempts) {
  const card = document.createElement("div");
  card.className = "card";

  const recent = attempts.slice(0, 25);
  let html = `<h3>🕐 Recent Activity (last 25)</h3>
    <table class="data-table">
      <thead><tr><th>When</th><th>Type</th><th>Score</th><th>Time</th></tr></thead>
      <tbody>`;

  recent.forEach(a => {
    const cls = scoreClass(a.percent);
    html += `<tr>
      <td>${formatDate(a.timestamp)}</td>
      <td>${typeLabel(a)}</td>
      <td><span class="score-pill ${cls}">${a.score}/${a.total} (${a.percent}%)</span></td>
      <td>${formatDuration(a.duration)}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  mainEl.appendChild(card);
}

/* ==========================================================
   6. Most-missed questions
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