/* ==========================================================
   homework-view.js
   The standalone homework sheet feature.

   Renders 15 fresh questions for the CURRENT skill of a
   subject, gives the student input boxes, scores on demand,
   and saves the attempt.

   Uses skill-tracker.js to know which skill is current and
   to record the result. Uses question-generators.js to build
   the questions.

   Unlike the old daily-homework.js, this is not tied to a
   chapter's daily schedule. It's one sheet — today's sheet —
   for whatever skill the tracker says is active.
   ========================================================== */

import * as Generators from "./question-generators.js";
import { Storage } from "./storage.js";
import {
  getCurrentSkill,
  recordHomeworkAttempt
} from "./skill-tracker.js";

const PASSING_THRESHOLD = 85;
const QUESTIONS_PER_SHEET = 15;

/* ==========================================================
   Main render
   ========================================================== */

export async function renderHomeworkView(container, config) {
  const { subject, chapters } = config;

  // Which skill are we doing?
  const current = await getCurrentSkill(subject.id, chapters);
  if (!current) {
    container.innerHTML = `<div class="empty-state">No skills configured yet for ${subject.name}.</div>`;
    return;
  }

  // Already mastered — nothing to do here
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

  // Look up chapter and skill config
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

  // Generate 15 unique questions (retry on duplicates)
  const questions = generateUniqueQuestions(gen, skillMeta.args || {}, QUESTIONS_PER_SHEET);

  // Set up state
  const state = {
    subject,
    chapters,
    current,
    chapter,
    skillMeta,
    questions,
    userAnswers: new Array(questions.length).fill(""),
    startTime: Date.now(),
    scored: false
  };

  // Render the sheet
  renderSheet(container, state);
}

/* ==========================================================
   Question dedupe helper
   Generates `count` unique questions.
   Retries up to 5× per question to avoid duplicates.
   ========================================================== */

function generateUniqueQuestions(gen, args, count) {
  const questions = [];
  const seenText = new Set();

  for (let i = 0; i < count; i++) {
    let attempt = 0;
    let q;
    let key;

    // Try up to 5 times to generate a unique question
    while (attempt < 5) {
      q = gen({ ...args, multipleChoice: false });
      key = q.question.trim().toLowerCase();
      if (!seenText.has(key)) break;
      attempt++;
    }

    // If we still got a duplicate after 5 tries, accept it
    // (extremely unlikely with our generators, but safe fallback)
    seenText.add(key);
    questions.push(q);
  }
  return questions;
}

/* ==========================================================
   Sheet rendering
   ========================================================== */

function renderSheet(container, state) {
  const { subject, current, skillMeta } = state;

  const sessionsLeft = 5 - current.sessionsPassed;
  const progressLabel = current.mastered
    ? "Skill Mastered"
    : `Progress: ${current.sessionsPassed} / 5 sessions passed`;

  const headerSub = `Homework session ${current.sessionsPassed + 1} of 5`;

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

  // Wire up inputs
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
    // Reload the page — a fresh sheet with new questions
    renderHomeworkView(container, { subject: state.subject, chapters: state.chapters });
  });

  // Focus first input
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
   Answer checking + scoring
   ========================================================== */

async function checkAnswers(container, state) {
  if (state.scored) return;
  state.scored = true;

  const { questions, userAnswers, current, subject, chapters } = state;
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

  // Save attempt
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

  // Update skill tracker
  let trackerResult = null;
  try {
    trackerResult = await recordHomeworkAttempt(subject.id, chapters, attempt);
  } catch (err) {
    console.warn("Could not update skill tracker:", err);
  }

  // Render results
  renderResults(container, state, {
    correctCount,
    total,
    percent,
    passed,
    missed,
    trackerResult
  });
}

function renderResults(container, state, result) {
  const resultsEl = container.querySelector("#dhResults");
  const { passed, correctCount, total, percent, missed, trackerResult } = result;

  let headlineEmoji = passed ? "🌟" : "📖";
  let headlineText = passed
    ? `You passed! ${correctCount} / ${total} (${percent}%)`
    : `Not yet. ${correctCount} / ${total} (${percent}%)`;
  let subText = "";

  if (passed && trackerResult && trackerResult.advanced && trackerResult.newSkill) {
    // Skill mastered, advancing
    subText = `🎉 Skill mastered! Moving on to: <strong>${trackerResult.newSkill.skillLabel}</strong>`;
    headlineEmoji = "🏆";
    headlineText = `Skill mastered! ${correctCount} / ${total} (${percent}%)`;
  } else if (passed) {
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

  // Action buttons
  if (passed && trackerResult && trackerResult.advanced) {
    // Skill mastered — offer a button to go home
    html += `
      <div class="dh-actions">
        <button class="dh-check-btn" onclick="App.goHome()">🏠 Back to Home</button>
      </div>
    `;
  } else if (!passed) {
    // Failed — offer retry
    html += `
      <div class="dh-actions">
        <button class="dh-retry-btn" id="dhRetryBtn2">Try New Questions 🔄</button>
      </div>
    `;
  } else {
    // Passed but skill not yet mastered
    html += `
      <div class="dh-actions">
        <button class="dh-check-btn" onclick="App.goHome()">🏠 Back to Home</button>
        <button class="dh-secondary-btn" id="dhMoreBtn">Do more today 🔁</button>
      </div>
    `;
  }

  resultsEl.innerHTML = html;
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });

  // Wire up retry button
  const retryBtn = resultsEl.querySelector("#dhRetryBtn2") || resultsEl.querySelector("#dhMoreBtn");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      renderHomeworkView(container, { subject: state.subject, chapters: state.chapters });
    });
  }
}

/* ==========================================================
   Answer matching (loose — handles numbers, commas, spacing)
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