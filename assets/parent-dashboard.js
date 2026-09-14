/* ==========================================================
   parent-dashboard.js
   Renders the Parent Dashboard into the main content area.
   Shows overall stats, per-chapter performance, recent
   attempts, and most-missed questions. Also handles
   export/import/clear.
   ========================================================== */

import { Storage } from "./storage.js";

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
  return a.type;
}

export async function renderParentDashboard(mainEl, subtitleEl) {
  subtitleEl.textContent = "Parent Dashboard — all quiz history on this device";

  const attempts = await Storage.getAllAttempts();

  // ---- Header card with actions ----
  const headerCard = document.createElement("div");
  headerCard.className = "card";
  headerCard.style.borderLeftColor = "var(--primary-purple)";
  headerCard.innerHTML = `
    <h2>📊 Parent Dashboard</h2>
    <p>All quiz attempts are saved on this device automatically. Export regularly to back up.</p>
    <div class="btn-row">
      <button class="btn-primary" id="btnExport">📥 Export Data (JSON)</button>
      <button class="btn-secondary" id="btnImport">📤 Import Data</button>
      <input type="file" id="importFile" accept=".json" style="display:none;">
      <button class="btn-danger" id="btnClear">🗑️ Clear All Data</button>
    </div>
  `;
  mainEl.innerHTML = "";
  mainEl.appendChild(headerCard);

  // Wire action buttons
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
        renderParentDashboard(mainEl, subtitleEl);
      } catch (err) {
        alert("Could not read that file: " + err.message);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  });

  headerCard.querySelector("#btnClear").addEventListener("click", async () => {
    if (confirm("This will permanently delete ALL quiz history on this device. Are you sure?\n\n(Tip: Export first if you want a backup!)")) {
      if (confirm("Really delete everything? This can't be undone.")) {
        await Storage.clearAllAttempts();
        alert("All data cleared.");
        renderParentDashboard(mainEl, subtitleEl);
      }
    }
  });

  // ---- Empty state ----
  if (attempts.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<div class="empty-state">
      No quiz attempts yet. Once your child starts taking quizzes, their results will show up here.
    </div>`;
    mainEl.appendChild(empty);
    return;
  }

  // ---- Compute stats ----
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

  // ---- Stats card ----
  const statsCard = document.createElement("div");
  statsCard.className = "card";
  statsCard.innerHTML = `
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
  mainEl.appendChild(statsCard);

  // ---- Per-chapter performance (mini + chapter quizzes combined) ----
  const chapterIds = [
    "chapter-01-scientific-method",
    "chapter-02-observations",
    "chapter-03-inferences",
    "chapter-04-qual-quant",
    "chapter-05-measurement",
    "chapter-06-variables"
  ];
  const chapterNames = {
    "chapter-01-scientific-method": "Scientific Method",
    "chapter-02-observations": "Observations",
    "chapter-03-inferences": "Inferences",
    "chapter-04-qual-quant": "Qual vs Quant",
    "chapter-05-measurement": "Measurement",
    "chapter-06-variables": "Variables"
  };

  const topicCard = document.createElement("div");
  topicCard.className = "card";
  let topicHtml = `<h3>📚 Performance by Chapter</h3>`;

  chapterIds.forEach(cid => {
    const chapterAttempts = attempts.filter(a => a.chapter === cid);
    if (chapterAttempts.length === 0) {
      topicHtml += `<div class="topic-row">
        <div class="topic-name">${chapterNames[cid]}
          <span style="color:#999; font-weight:normal; font-size:0.85em;">— no attempts yet</span>
        </div>
        <div class="topic-bar"><div class="topic-bar-fill" style="width:0%; background:#CCC;"></div></div>
      </div>`;
      return;
    }
    const avg = Math.round(
      chapterAttempts.reduce((s, a) => s + a.percent, 0) / chapterAttempts.length
    );
    const color = avg >= 80 ? "#2ECC71" : (avg >= 60 ? "#F1C40F" : "#E74C3C");
    topicHtml += `<div class="topic-row">
      <div class="topic-name">${chapterNames[cid]}
        <span style="font-weight:normal; color:#666; font-size:0.9em;">
          — avg ${avg}% over ${chapterAttempts.length} attempt${chapterAttempts.length > 1 ? "s" : ""}
        </span>
      </div>
      <div class="topic-bar">
        <div class="topic-bar-fill" style="width:${avg}%; background:${color};">${avg}%</div>
      </div>
    </div>`;
  });
  topicCard.innerHTML = topicHtml;
  mainEl.appendChild(topicCard);

  // ---- Recent attempts table ----
  const recentCard = document.createElement("div");
  recentCard.className = "card";
  const recent = attempts.slice(0, 20); // already sorted newest first
  let recentHtml = `
    <h3>🕐 Recent Attempts (last 20)</h3>
    <table class="data-table">
      <thead>
        <tr>
          <th>When</th>
          <th>Type</th>
          <th>Score</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
  `;
  recent.forEach(a => {
    const cls = scoreClass(a.percent);
    recentHtml += `<tr>
      <td>${formatDate(a.timestamp)}</td>
      <td>${typeLabel(a)}</td>
      <td><span class="score-pill ${cls}">${a.score}/${a.total} (${a.percent}%)</span></td>
      <td>${formatDuration(a.duration)}</td>
    </tr>`;
  });
  recentHtml += `</tbody></table>`;
  recentCard.innerHTML = recentHtml;
  mainEl.appendChild(recentCard);

  // ---- Most-missed questions ----
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

  const missedCard = document.createElement("div");
  missedCard.className = "card";
  let missedInner = `<h3>🎯 Most-Missed Questions</h3>`;

  if (topMissed.length === 0) {
    missedInner += `<p style="color:#666; font-style:italic;">No missed questions recorded yet — great work!</p>`;
  } else {
    missedInner += `<div class="missed-list">`;
    topMissed.forEach(([q, data]) => {
      missedInner += `
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
    missedInner += `</div>`;
  }
  missedCard.innerHTML = missedInner;
  mainEl.appendChild(missedCard);
}