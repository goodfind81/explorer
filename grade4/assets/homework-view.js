/* ==========================================================
   homework-view.js
   The standalone homework sheet feature.

   Renders 15 fresh questions for the CURRENT skill of a
   subject, gives the student input boxes, scores on demand,
   saves the attempt, awards points.

   Celebrations:
     - SKILL MASTERED (5/5 sessions) → purple celebration
     - PERFECT SCORE (100% on any session) → gold celebration
     - If both apply → SKILL MASTERED wins (bigger milestone)
     - Otherwise → standard results with points summary
   ========================================================== */

import * as Generators from "./question-generators.js";
import { Storage } from "./storage.js";
import {
  getCurrentSkill,
  recordHomeworkAttempt
} from "./skill-tracker.js";
import {
  awardPointsForAttempt,
  maybeAwardStreak,
  getCurrentStreak,
  getBalance
} from "./points.js";

const PASSING_THRESHOLD = 85;
const QUESTIONS_PER_SHEET = 15;

/* ==========================================================
   Main render
   ========================================================== */

export async function renderHomeworkView(container, config) {
  const { subject, chapters } = config;

  const current = await getCurrentSkill(subject.id, chapters);
  if (!current) {
    container.innerHTML = `<div class="empty-state">No skills configured yet for ${subject.name}.</div>`;
    return;
  }

  if (current.mastered) {
    container.innerHTML = `
      <div class="dh-sheet">
        <div class="dh-header">
          <div class="dh-day">Skill Mastered</div>
          <div class="dh-title">${subject.name} — ${current.skillLabel}</div>
        </div>
        <div class="dh-score dh-pass">
          <div class="dh-score-emoji">🌟</div>
          <div class="dh-score-text">You've mastered this skill!</div>
          <div class="dh-score-sub">Come back after the next skill starts.</div>
        </div>
      </div>
    `;
    return;
  }

  const chapter = chapters.find(c => c.id === current.chapterId);
  if (!chapter) {
    container.innerHTML = `<div class="empty-state">Chapter not found.</div>`;
    return;
  }
  const skillMeta = chapter.skills.find(s => s.key === current.skillKey);
  if (!skillMeta || !skillMeta.generator) {
    container.innerHTML = `<div class="empty-state">Skill misconfigured.</div>`;
    return;
  }

  const gen = Generators[skillMeta.generator];
  if (typeof gen !== "function") {
    container.innerHTML = `<div class="empty-state">Generator not found: ${skillMeta.generator}.</div>`;
    return;
  }

  const questions = generateUniqueQuestions(gen, skillMeta.args || {}, QUESTIONS_PER_SHEET);

  const attemptNumber = await getAttemptsTodayForSkill(subject.id, current.skillKey);

  const state = {
    subject,
    chapters,
    current,
    chapter,
    skillMeta,
    questions,
    userAnswers: new Array(questions.length).fill(""),
    startTime: Date.now(),
    scored: false,
    attemptNumber: attemptNumber + 1
  };

  renderSheet(container, state);
}

async function getAttemptsTodayForSkill(subjectId, skillKey) {
  try {
    const all = await Storage.getAllAttempts();
    const todayISO = new Date().toISOString().slice(0, 10);
    return all.filter(a =>
      a.type === "homework" &&
      a.subject === subjectId &&
      a.skillKey === skillKey &&
      a.timestamp.slice(0, 10) === todayISO
    ).length;
  } catch (err) {
    return 0;
  }
}

/* ==========================================================
   Question dedupe
   ========================================================== */

function generateUniqueQuestions(gen, args, count) {
  const questions = [];
  const seenText = new Set();

  for (let i = 0; i < count; i++) {
    let attempt = 0;
    let q;
    let key;

    while (attempt < 5) {
      q = gen({ ...args, multipleChoice: false });
      key = q.question.trim().toLowerCase();
      if (!seenText.has(key)) break;
      attempt++;
    }

    seenText.add(key);
    questions.push(q);
  }
  return questions;
}

/* ==========================================================
   Sheet rendering
   ========================================================== */

function renderSheet(container, state) {
  const { subject, current, skillMeta, attemptNumber } = state;

  const progressLabel = current.mastered
    ? "Skill Mastered"
    : `Progress: ${current.sessionsPassed} / 5 sessions passed`;

  const attemptLabel = attemptNumber === 1
    ? "First attempt"
    : attemptNumber === 2
      ? "Retry (0.5× points)"
      : `Retry #${attemptNumber - 1} (0.25× points)`;

  const headerSub = `Homework session ${current.sessionsPassed + 1} of 5 · ${attemptLabel}`;

  container.innerHTML = `
    <div class="dh-sheet">
      <div class="dh-header">
        <div class="dh-day">${subject.icon || "📘"} ${subject.name} — Today's Homework</div>
        <div class="dh-title">${skillMeta.label}</div>
        <div class="dh-header-sub">${headerSub}</div>
      </div>

      <div class="dh-remember">
        <div class="dh-remember-title">📌 Remember</div>
        <div class="dh-remember-body">${skillMeta.remember || "Follow the steps from your notes."}</div>
      </div>

      ${skillMeta.workedExample ? `
        <div class="dh-example">
          <div class="dh-example-title">✏️ Worked Example</div>
          <div class="dh-example-body">${skillMeta.workedExample}</div>
        </div>
      ` : ""}

      <div class="dh-progress-row">
        <span class="dh-progress-label">${progressLabel}</span>
        <span class="dh-progress-stars">${starsInline(current.sessionsPassed)}</span>
      </div>

      <div class="dh-problems">
        <div class="dh-problems-title">Your Turn — 15 problems</div>
        <ol class="dh-problem-list">
          ${state.questions.map((q, i) => `
            <li class="dh-problem">
              <span class="dh-q-text">${q.question}</span>
              <input
                type="text"
                class="dh-input"
                data-index="${i}"
                inputmode="text"
                autocomplete="off"
                placeholder="Answer"
              />
            </li>
          `).join("")}
        </ol>
      </div>

      <div class="dh-actions">
        <button class="dh-check-btn" id="dhCheckBtn">Check Answers</button>
        <button class="dh-retry-btn" id="dhRetryBtn" style="display:none;">Try New Questions 🔄</button>
      </div>

      <div class="dh-results" id="dhResults"></div>
    </div>
  `;

  container.querySelectorAll(".dh-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.dataset.index);
      state.userAnswers[idx] = e.target.value;
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const idx = parseInt(e.target.dataset.index);
        const next = container.querySelector(`.dh-input[data-index="${idx + 1}"]`);
        if (next) next.focus();
        else container.querySelector("#dhCheckBtn").click();
      }
    });
  });

  container.querySelector("#dhCheckBtn").addEventListener("click", () => {
    checkAnswers(container, state);
  });
  container.querySelector("#dhRetryBtn").addEventListener("click", () => {
    renderHomeworkView(container, { subject: state.subject, chapters: state.chapters });
  });

  const first = container.querySelector(".dh-input");
  if (first) first.focus();
}

function starsInline(n) {
  let html = "";
  for (let i = 0; i < 5; i++) {
    html += i < n
      ? '<span class="star filled">★</span>'
      : '<span class="star empty">★</span>';
  }
  return html;
}

/* ==========================================================
   Answer checking + scoring + points
   ========================================================== */

async function checkAnswers(container, state) {
  if (state.scored) return;
  state.scored = true;

  const { questions, userAnswers, current, subject, chapters, attemptNumber } = state;
  let correctCount = 0;
  const missed = [];

  questions.forEach((q, i) => {
    const input = container.querySelector(`.dh-input[data-index="${i}"]`);
    const userAnswer = (userAnswers[i] || "").trim();
    const correctAnswer = q.answer.toString().trim();

    const isCorrect = answersMatch(userAnswer, correctAnswer);

    if (isCorrect) {
      input.classList.add("dh-correct");
      correctCount++;
    } else {
      input.classList.add("dh-incorrect");
      missed.push({
        question: q.question,
        correctAnswer,
        userAnswer,
        explanation: q.explanation || ""
      });
    }
    input.disabled = true;
  });

  const total = questions.length;
  const percent = Math.round((correctCount / total) * 100);
  const passed = percent >= PASSING_THRESHOLD;
  const duration = Math.round((Date.now() - state.startTime) / 1000);

  const attempt = {
    id: `hw-${subject.id}-${Date.now()}`,
    type: "homework",
    subject: subject.id,
    subjectName: subject.name,
    chapter: current.chapterId,
    chapterName: current.chapterName,
    skillKey: current.skillKey,
    skillLabel: current.skillLabel,
    sessionNumber: current.sessionsPassed + 1,
    score: correctCount,
    total: total,
    percent: percent,
    passed: passed,
    duration: duration,
    missed: missed,
    questions: questions.map((q, i) => ({
      question: q.question,
      correctAnswer: q.answer.toString(),
      userAnswer: userAnswers[i] || ""
    })),
    timestamp: new Date().toISOString()
  };

  try {
    await Storage.saveAttempt(attempt);
  } catch (err) {
    console.warn("Could not save homework attempt:", err);
  }

  let trackerResult = null;
  try {
    trackerResult = await recordHomeworkAttempt(subject.id, chapters, attempt);
  } catch (err) {
    console.warn("Could not update skill tracker:", err);
  }

  let pointsResult = null;
  try {
    pointsResult = await awardPointsIfBest(subject, current.skillKey, attempt, {
      attemptNumber: attemptNumber,
      advanced: trackerResult && trackerResult.advanced
    });
  } catch (err) {
    console.warn("Could not award points:", err);
  }

  let streakResult = null;
  try {
    const streak = await getCurrentStreak();
    if (streak >= 2) {
      streakResult = await maybeAwardStreak(new Date().toISOString().slice(0, 10), streak);
    }
  } catch (err) {
    console.warn("Streak bonus failed:", err);
  }

  let balance = 0;
  try {
    balance = await getBalance();
  } catch (err) {}

  renderResults(container, state, {
    correctCount,
    total,
    percent,
    passed,
    missed,
    trackerResult,
    pointsResult,
    streakResult,
    balance
  });
}

/* ==========================================================
   Best-attempt-of-the-day
   ========================================================== */

async function awardPointsIfBest(subject, skillKey, attempt, context) {
  const all = await Storage.getAllAttempts();
  const todayISO = new Date().toISOString().slice(0, 10);
  const previousToday = all.filter(a =>
    a.type === "homework" &&
    a.subject === subject.id &&
    a.skillKey === skillKey &&
    a.timestamp.slice(0, 10) === todayISO &&
    a.id !== attempt.id
  );

  const earned = await awardPointsForAttempt(attempt, context);
  const thisPoints = earned.points;

  if (thisPoints <= 0) {
    return { awarded: 0, reason: "No points earned" };
  }

  if (previousToday.length === 0) {
    return { awarded: thisPoints, ledgerRow: earned.ledgerRow, breakdown: earned.breakdown };
  }

  const prevBest = previousToday.reduce(
    (max, a) => a.percent > max.percent ? a : max,
    previousToday[0]
  );

  if (attempt.percent > prevBest.percent) {
    return { awarded: thisPoints, ledgerRow: earned.ledgerRow, breakdown: earned.breakdown };
  } else {
    return { awarded: 0, reason: "A previous attempt today scored higher" };
  }
}

/* ==========================================================
   Results rendering
   ========================================================== */

function renderResults(container, state, result) {
  const {
    correctCount, total, percent, passed, missed,
    trackerResult, pointsResult, streakResult, balance
  } = result;

  const advanced = trackerResult && trackerResult.advanced;
  const isPerfect = percent === 100;

  // ---------- Priority: Skill Mastery > Perfect Score > Standard ----------
  if (advanced && passed) {
    renderSkillMasteredCelebration(container, state, result);
    return;
  }
  if (isPerfect && passed) {
    renderPerfectScoreCelebration(container, state, result);
    return;
  }

  // ---------- Standard results ----------
  let headlineEmoji = passed ? "🌟" : "📖";
  let headlineText = passed
    ? `You passed! ${correctCount} / ${total} (${percent}%)`
    : `Not yet. ${correctCount} / ${total} (${percent}%)`;
  let subText = "";

  if (passed) {
    const newPassed = (state.current.sessionsPassed || 0) + 1;
    subText = `Session ${newPassed} of 5 passed. ${5 - newPassed} more to master this skill.`;
  } else {
    subText = `You need 85% to pass. Try again with new questions.`;
  }

  let html = `
    <div class="dh-score ${passed ? "dh-pass" : "dh-fail"}">
      <div class="dh-score-emoji">${headlineEmoji}</div>
      <div class="dh-score-text">${headlineText}</div>
      <div class="dh-score-sub">${subText}</div>
    </div>
  `;

  if (pointsResult && pointsResult.awarded > 0) {
    html += renderPointsBox(pointsResult, streakResult, balance);
  } else if (pointsResult && pointsResult.reason) {
    html += `
      <div class="dh-points-box dh-points-none">
        <div class="dh-points-text">No new points — ${pointsResult.reason}</div>
      </div>
    `;
  }

  if (missed.length > 0) {
    html += `
      <div class="dh-missed">
        <h4>📝 Review these problems</h4>
        ${missed.map(m => `
          <div class="dh-missed-item">
            <div class="dh-missed-q">${m.question}</div>
            <div class="dh-missed-a">Your answer: <span class="dh-user-ans">${m.userAnswer || "(blank)"}</span></div>
            <div class="dh-missed-a">Correct answer: <span class="dh-correct-ans">${m.correctAnswer}</span></div>
            ${m.explanation ? `<div class="dh-missed-explain">${m.explanation}</div>` : ""}
          </div>
        `).join("")}
      </div>
    `;
  }

  if (!passed) {
    html += `
      <div class="dh-actions">
        <button class="dh-retry-btn" id="dhRetryBtn2">Try New Questions 🔄</button>
      </div>
    `;
  } else {
    html += `
      <div class="dh-actions">
        <button class="dh-check-btn" onclick="App.goHome()">🏠 Back to Home</button>
        <button class="dh-secondary-btn" id="dhMoreBtn">Do more today 🔁</button>
      </div>
    `;
  }

  const resultsEl = container.querySelector("#dhResults");
  resultsEl.innerHTML = html;
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });

  const retryBtn = resultsEl.querySelector("#dhRetryBtn2") || resultsEl.querySelector("#dhMoreBtn");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      renderHomeworkView(container, { subject: state.subject, chapters: state.chapters });
    });
  }
}

/* ==========================================================
   Skill Mastered celebration (purple, biggest reward)
   ========================================================== */

function renderSkillMasteredCelebration(container, state, result) {
  const { skillMeta } = state;
  const { correctCount, total, percent, pointsResult, streakResult, balance } = result;

  const resultsEl = container.querySelector("#dhResults");

  const confettiPieces = Array.from({ length: 40 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
    const emoji = ["🎉", "⭐", "✨", "🎊", "🏆"][i % 5];
    return `<span class="confetti" style="left:${left}%; animation-delay:${delay}s;">${emoji}</span>`;
  }).join("");

  let html = `
    <div class="dh-celebration">
      <div class="dh-confetti-container">${confettiPieces}</div>

      <div class="dh-celebration-content">
        <div class="dh-celebration-emoji">🏆</div>
        <div class="dh-celebration-title">SKILL MASTERED!</div>
        <div class="dh-celebration-skill">${skillMeta.label}</div>
        <div class="dh-celebration-sub">You passed 5 sessions in a row!</div>

        <div class="dh-celebration-stats">
          <div class="dh-celebration-stat">
            <div class="dh-celebration-stat-value">${correctCount}/${total}</div>
            <div class="dh-celebration-stat-label">This attempt (${percent}%)</div>
          </div>
        </div>

        ${renderPointsBox(pointsResult, streakResult, balance, true)}

        <div class="dh-celebration-actions">
          <button class="dh-check-btn" onclick="App.goHome()">🏠 Back to Home</button>
        </div>
      </div>
    </div>
  `;

  resultsEl.innerHTML = html;
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ==========================================================
   Perfect Score celebration (gold, second-biggest reward)
   ========================================================== */

function renderPerfectScoreCelebration(container, state, result) {
  const { skillMeta } = state;
  const { correctCount, total, percent, pointsResult, streakResult, balance } = result;

  const resultsEl = container.querySelector("#dhResults");

  const confettiPieces = Array.from({ length: 30 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
    const emoji = ["⭐", "✨", "🌟", "🎉", "💫"][i % 5];
    return `<span class="confetti" style="left:${left}%; animation-delay:${delay}s;">${emoji}</span>`;
  }).join("");

  let html = `
    <div class="dh-celebration dh-celebration-perfect">
      <div class="dh-confetti-container">${confettiPieces}</div>

      <div class="dh-celebration-content dh-celebration-content-gold">
        <div class="dh-celebration-emoji">⭐</div>
        <div class="dh-celebration-title dh-celebration-title-gold">PERFECT SCORE!</div>
        <div class="dh-celebration-skill">${skillMeta.label}</div>
        <div class="dh-celebration-sub">You got all ${total} right — 100%!</div>

        ${renderPointsBox(pointsResult, streakResult, balance, true)}

        <div class="dh-celebration-actions">
          <button class="dh-check-btn" onclick="App.goHome()">🏠 Back to Home</button>
        </div>
      </div>
    </div>
  `;

  resultsEl.innerHTML = html;
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ==========================================================
   Points box
   ========================================================== */

function renderPointsBox(pointsResult, streakResult, balance, celebrated = false) {
  const awarded = pointsResult ? pointsResult.awarded : 0;
  const breakdown = pointsResult && pointsResult.breakdown ? pointsResult.breakdown : null;

  let html = `
    <div class="dh-points-box">
      <div class="dh-points-header">
        <span class="dh-points-emoji">💰</span>
        <span class="dh-points-title">You earned <strong>${awarded} points</strong>!</span>
      </div>
  `;

  if (breakdown) {
    html += `<div class="dh-points-breakdown">`;
    if (breakdown.correct) html += `<div>• ${breakdown.correct} for correct answers</div>`;
    if (breakdown.bonus) html += `<div>• ${breakdown.bonus} pass bonus</div>`;
    if (breakdown.perfectBonus) html += `<div>• ${breakdown.perfectBonus} perfect bonus</div>`;
    html += `</div>`;
  }

  if (streakResult && streakResult.points) {
    html += `
      <div class="dh-points-streak">
        🔥 +${streakResult.points} streak bonus!
      </div>
    `;
  }

  if (typeof balance === "number" && balance > 0) {
    const dollars = (balance / 100).toFixed(2);
    html += `
      <div class="dh-points-balance">
        💰 Balance: <strong>${balance} points</strong> (~$${dollars})
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

/* ==========================================================
   Answer matching
   ========================================================== */

function answersMatch(userAnswer, correctAnswer) {
  if (!userAnswer) return false;
  const clean = (s) =>
    s.toString().trim().toLowerCase()
      .replace(/,/g, "")
      .replace(/\s+/g, "")
      .replace(/^0+(\d)/, "$1");

  const u = clean(userAnswer);
  const c = clean(correctAnswer);
  if (u === c) return true;

  const uNum = parseFloat(u);
  const cNum = parseFloat(c);
  if (!isNaN(uNum) && !isNaN(cNum) && Math.abs(uNum - cNum) < 0.0001) return true;

  return false;
}