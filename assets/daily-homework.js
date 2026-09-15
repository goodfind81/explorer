/* ==========================================================
   daily-homework.js
   Renders a Kumon-style worksheet for a given day.

   Takes a chapter's dailyHomework declaration, generates
   fresh questions via question-generators.js, renders the
   sheet with input boxes, and scores it when the user
   clicks Check Answers.
   ========================================================== */

import * as Generators from "./question-generators.js";
import { Storage } from "./storage.js";

const PASSING_THRESHOLD = 85;

export class DailyHomework {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.questions = [];
    this.userAnswers = [];
    this.startTime = 0;
    this.scored = false;
  }

  async start() {
    try {
      this.questions = this._generateQuestions();
    } catch (err) {
      this.container.innerHTML = `<div class="empty-state">
        Could not generate homework questions: ${err.message}
      </div>`;
      return;
    }

    if (this.questions.length === 0) {
      this.container.innerHTML = `<div class="empty-state">No questions available for this day yet.</div>`;
      return;
    }

    this.userAnswers = new Array(this.questions.length).fill("");
    this.startTime = Date.now();
    this.scored = false;
    this._render();
  }

  _generateQuestions() {
    const { dayConfig, weekSkills } = this.config;

    if (dayConfig.type === "weekendReview") {
      return this._generateWeekendReview(dayConfig, weekSkills);
    }

    if (dayConfig.generator) {
      return this._generateFromSingle(dayConfig);
    }

    if (dayConfig.mix) {
      return this._generateFromMix(dayConfig);
    }

    throw new Error("Unknown day config structure");
  }

  _generateFromSingle(dayConfig) {
    const gen = Generators[dayConfig.generator];
    if (typeof gen !== "function") {
      throw new Error(`Unknown generator: ${dayConfig.generator}`);
    }
    const count = dayConfig.count || 15;
    const questions = [];
    for (let i = 0; i < count; i++) {
      const q = gen({ ...dayConfig.args, multipleChoice: false });
      questions.push({ ...q, skill: dayConfig.skill });
    }
    return questions;
  }

  _generateFromMix(dayConfig) {
    const count = dayConfig.count || 15;
    const questions = [];
    const parts = dayConfig.mix;
    const totalWeight = parts.reduce((s, p) => s + (p.weight || 1), 0);

    for (let i = 0; i < count; i++) {
      let r = Math.random() * totalWeight;
      let chosen = parts[0];
      for (const p of parts) {
        r -= (p.weight || 1);
        if (r <= 0) { chosen = p; break; }
      }
      const gen = Generators[chosen.generator];
      if (typeof gen !== "function") {
        throw new Error(`Unknown generator: ${chosen.generator}`);
      }
      const q = gen({ ...chosen.args, multipleChoice: false });
      questions.push({ ...q, skill: chosen.skill || chosen.generator });
    }
    return questions;
  }

  _generateWeekendReview(dayConfig, weekSkills) {
    const count = dayConfig.count || 15;
    const latestWeight = dayConfig.latestWeight || 0.6;

    if (!weekSkills || weekSkills.length === 0) {
      throw new Error("Weekend review requires weekSkills");
    }

    const latest = weekSkills[weekSkills.length - 1];
    const oldSkills = weekSkills.slice(0, -1);
    const oldPool = oldSkills.length > 0 ? oldSkills : [latest];

    const latestCount = Math.round(count * latestWeight);
    const oldCount = count - latestCount;

    const questions = [];
    for (let i = 0; i < latestCount; i++) {
      const gen = Generators[latest.generator];
      const q = gen({ ...latest.args, multipleChoice: false });
      questions.push({ ...q, skill: latest.skill });
    }
    for (let i = 0; i < oldCount; i++) {
      const pick = oldPool[Math.floor(Math.random() * oldPool.length)];
      const gen = Generators[pick.generator];
      const q = gen({ ...pick.args, multipleChoice: false });
      questions.push({ ...q, skill: pick.skill });
    }

    return shuffleArray(questions);
  }

  _render() {
    const { dayNumber, chapterName, dayConfig } = this.config;

    const dayLabel = (dayNumber === 6 || dayNumber === 7)
      ? "Weekend Review"
      : `Day ${dayNumber}`;

    const skillTitle = dayConfig.skill || (dayConfig.type === "weekendReview" ? "Mixed Review" : "Practice");
    const workedExample = dayConfig.workedExample || dayConfig.workedExampleText || "See your notes for the step-by-step method.";

    let html = `
      <div class="dh-sheet">
        <div class="dh-header">
          <div class="dh-day">${dayLabel}</div>
          <div class="dh-title">${chapterName} — ${skillTitle}</div>
        </div>

        <div class="dh-remember">
          <div class="dh-remember-title">📌 Remember</div>
          <div class="dh-remember-body">${dayConfig.remember || "Follow the steps from your notes."}</div>
        </div>

        <div class="dh-example">
          <div class="dh-example-title">✏️ Worked Example</div>
          <div class="dh-example-body">${workedExample}</div>
        </div>

        <div class="dh-problems">
          <div class="dh-problems-title">Your Turn</div>
          <ol class="dh-problem-list">
    `;

    this.questions.forEach((q, i) => {
      html += `
        <li class="dh-problem">
          <span class="dh-q-text">${q.question}</span>
          <input
            type="text"
            class="dh-input"
            data-index="${i}"
            inputmode="text"
            autocomplete="off"
            placeholder="Your answer"
          />
        </li>
      `;
    });

    html += `
          </ol>
        </div>

        <div class="dh-actions">
          <button class="dh-check-btn" id="dhCheckBtn">Check Answers</button>
          <button class="dh-retry-btn" id="dhRetryBtn" style="display:none;">Try New Questions 🔄</button>
        </div>

        <div class="dh-results" id="dhResults"></div>
      </div>
    `;

    this.container.innerHTML = html;

    this.container.querySelectorAll(".dh-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const idx = parseInt(e.target.dataset.index);
        this.userAnswers[idx] = e.target.value;
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const idx = parseInt(e.target.dataset.index);
          const next = this.container.querySelector(`.dh-input[data-index="${idx + 1}"]`);
          if (next) next.focus();
          else this._check();
        }
      });
    });

    this.container.querySelector("#dhCheckBtn").addEventListener("click", () => this._check());
    this.container.querySelector("#dhRetryBtn").addEventListener("click", () => this.start());

    const firstInput = this.container.querySelector(".dh-input");
    if (firstInput) firstInput.focus();
  }

  async _check() {
    if (this.scored) return;
    this.scored = true;

    const answers = this.userAnswers;
    let correct = 0;
    const missed = [];

    this.questions.forEach((q, i) => {
      const input = this.container.querySelector(`.dh-input[data-index="${i}"]`);
      const userAnswer = (answers[i] || "").trim();
      const correctAnswer = q.answer.toString().trim();

      const isCorrect = this._answersMatch(userAnswer, correctAnswer);

      if (isCorrect) {
        input.classList.add("dh-correct");
        correct++;
      } else {
        input.classList.add("dh-incorrect");
        missed.push({
          question: q.question,
          correctAnswer: correctAnswer,
          userAnswer: userAnswer,
          explanation: q.explanation || ""
        });
      }
      input.disabled = true;
    });

    const total = this.questions.length;
    const percent = Math.round((correct / total) * 100);
    const passed = percent >= PASSING_THRESHOLD;
    const duration = Math.round((Date.now() - this.startTime) / 1000);

    const resultsEl = this.container.querySelector("#dhResults");
    let resultsHtml = `
      <div class="dh-score ${passed ? "dh-pass" : "dh-fail"}">
        <div class="dh-score-emoji">${passed ? "🌟" : "📖"}</div>
        <div class="dh-score-text">
          You scored <strong>${correct} / ${total}</strong> (${percent}%)
        </div>
        <div class="dh-score-sub">
          ${passed
            ? "Great job! You passed this day's homework."
            : `You need 85% to pass. Try again with new questions, or review the missed ones below.`}
        </div>
      </div>
    `;

    if (missed.length > 0) {
      resultsHtml += `
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

    resultsEl.innerHTML = resultsHtml;
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });

    this.container.querySelector("#dhRetryBtn").style.display = "inline-block";

    const attempt = {
      id: `dh-${this.config.subject}-${this.config.chapter}-day${this.config.dayNumber}-${Date.now()}`,
      type: "daily-homework",
      subject: this.config.subject,
      subjectName: this.config.subjectName,
      chapter: this.config.chapter,
      chapterName: this.config.chapterName,
      dayNumber: this.config.dayNumber,
      score: correct,
      total: total,
      percent: percent,
      passed: passed,
      duration: duration,
      missed: missed,
      questions: this.questions.map((q, i) => ({
        question: q.question,
        correctAnswer: q.answer.toString(),
        userAnswer: this.userAnswers[i] || "",
        skill: q.skill || ""
      })),
      timestamp: new Date().toISOString()
    };

    try {
      await Storage.saveAttempt(attempt);
    } catch (err) {
      console.warn("Could not save daily homework attempt:", err);
    }

    if (typeof this.config.onComplete === "function") {
      this.config.onComplete(attempt);
    }
  }

  _answersMatch(userAnswer, correctAnswer) {
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
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}