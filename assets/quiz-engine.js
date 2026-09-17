/* ==========================================================
   quiz-engine.js
   Reusable quiz renderer for mini-checks and chapter quizzes.

   Integrates with session-lock.js — each (subject, chapter, type)
   has one session per calendar day.

   Celebrations:
     - Chapter quiz at 100% → Perfect Score celebration (gold)
     - Mini-check → standard summary (no celebration)
     - Final exam → standard summary with retry option
   ========================================================== */

import { Storage } from "./storage.js";
import {
  getLock,
  createLock,
  saveAnswer,
  saveProgress,
  completeLock
} from "./session-lock.js";

const HISTORY_META_KEY = "finalExamHistory";
const HISTORY_LENGTH = 5;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickFreshQuizQuestions(pool, size, historyIds) {
  const recentlyUsed = new Set(historyIds);
  const withIds = pool.map(q => ({ ...q, id: q.question }));
  const fresh = withIds.filter(q => !recentlyUsed.has(q.id));
  const used = withIds.filter(q => recentlyUsed.has(q.id));
  const freshShuffled = shuffle(fresh);
  const usedShuffled = shuffle(used);
  const chosen = freshShuffled.slice(0, size);
  if (chosen.length < size) {
    chosen.push(...usedShuffled.slice(0, size - chosen.length));
  }
  return shuffle(chosen);
}

/* ==========================================================
   QuizEngine class
   ========================================================== */

export class QuizEngine {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.missed = [];
    this.startTime = 0;
    this.lock = null;
    this.reviewMode = false;
    this.reviewData = null;
  }

  async start() {
    const { mode, subject, chapter } = this.config;

    if (mode !== "final") {
      const existingLock = getLock(subject, chapter, mode);
      if (existingLock) {
        this.lock = existingLock;
        this.questions = existingLock.questions;
        this.currentIndex = existingLock.currentIndex || 0;

        if (existingLock.completed) {
          this.reviewMode = true;
          this.reviewData = {
            score: existingLock.score,
            percent: existingLock.percent,
            userAnswers: existingLock.userAnswers
          };
          this._renderCompletedView();
          return;
        }

        this.startTime = existingLock.startedAt || Date.now();
        this._renderQuestion();
        return;
      }
    }

    this.questions = await this._pickQuestions();
    if (this.questions.length === 0) {
      this.container.innerHTML = `<div class="empty-state">No questions available for this quiz yet.</div>`;
      return;
    }

    if (mode !== "final") {
      this.lock = createLock(subject, chapter, mode, this.questions);
    }

    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.missed = [];
    this.startTime = Date.now();
    this._renderQuestion();
  }

  async _pickQuestions() {
    const { mode, pool, count, allChapters } = this.config;

    if (mode === "final") {
      let combined = [];
      allChapters.forEach(ch => {
        ch.chapterQuiz.forEach(q => {
          combined.push({ ...q, _chapterId: ch.chapter, _chapterName: ch.chapterName });
        });
      });
      const history = (await Storage.getMeta(HISTORY_META_KEY)) || [];
      const historyIds = history.flat ? history.flat() : (Array.isArray(history) ? history : []);
      const chosen = pickFreshQuizQuestions(combined, count, historyIds);

      const newRun = chosen.map(q => q.id);
      const updatedHistory = [newRun, ...(Array.isArray(history) ? history : [])].slice(0, HISTORY_LENGTH);
      await Storage.setMeta(HISTORY_META_KEY, updatedHistory);

      return chosen;
    }

    return shuffle(pool).slice(0, count);
  }

  /* ==========================================================
     Rendering a question
     ========================================================== */

  _renderQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this._finishQuiz();
      return;
    }

    const q = this.questions[this.currentIndex];
    const correctText = q.options[q.correct];
    const shuffledOpts = shuffle(q.options);
    this.answered = false;

    const priorAnswer = this.lock && this.lock.userAnswers
      ? this.lock.userAnswers[this.currentIndex]
      : null;

    const pct = Math.round((this.currentIndex / this.questions.length) * 100);

    this.container.innerHTML = `
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="quiz-progress-text">Question ${this.currentIndex + 1} of ${this.questions.length}</div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options">
        ${shuffledOpts.map(opt =>
          `<button class="option-btn" data-answer="${opt.replace(/"/g, "&quot;")}">${opt}</button>`
        ).join("")}
      </div>
      <div class="quiz-feedback"></div>
    `;

    const buttons = this.container.querySelectorAll(".option-btn");
    const feedback = this.container.querySelector(".quiz-feedback");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.answered) return;
        this.answered = true;

        const picked = btn.dataset.answer;
        buttons.forEach(b => (b.disabled = true));

        if (picked === correctText) {
          btn.classList.add("correct");
          this.score++;
          feedback.className = "quiz-feedback correct show";
          feedback.innerHTML = `<strong>✅ Correct!</strong>${q.explanation || ""}`;
        } else {
          btn.classList.add("incorrect");
          buttons.forEach(b => {
            if (b.dataset.answer === correctText) b.classList.add("correct");
          });
          feedback.className = "quiz-feedback incorrect show";
          feedback.innerHTML = `<strong>❌ Not quite.</strong>${q.explanation || ""}`;
          this.missed.push({
            question: q.question,
            correctAnswer: correctText,
            explanation: q.explanation || ""
          });
        }

        if (this.lock && this.config.mode !== "final") {
          saveAnswer(
            this.config.subject,
            this.config.chapter,
            this.config.mode,
            this.currentIndex,
            picked
          );
        }

        const nextBtn = document.createElement("button");
        nextBtn.className = "quiz-next";
        nextBtn.textContent = this.currentIndex === this.questions.length - 1
          ? "See Results →" : "Next Question →";
        nextBtn.addEventListener("click", () => {
          this.currentIndex++;
          if (this.lock && this.config.mode !== "final") {
            saveProgress(
              this.config.subject,
              this.config.chapter,
              this.config.mode,
              this.currentIndex
            );
          }
          this._renderQuestion();
        });
        this.container.appendChild(nextBtn);
        nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  /* ==========================================================
     Finishing the quiz
     ========================================================== */

  async _finishQuiz() {
    const total = this.questions.length;
    const pct = Math.round((this.score / total) * 100);
    const duration = Math.round((Date.now() - this.startTime) / 1000);

    if (this.lock && this.config.mode !== "final") {
      completeLock(
        this.config.subject,
        this.config.chapter,
        this.config.mode,
        this.score,
        pct
      );
    }

    const attempt = {
      id: `${this.config.mode}-${this.config.subject}-${this.config.chapter || "all"}-${Date.now()}`,
      type: this.config.mode,
      subject: this.config.subject,
      subjectName: this.config.subjectName,
      chapter: this.config.chapter || "all",
      chapterName: this.config.chapterName || "All Chapters",
      score: this.score,
      total: total,
      percent: pct,
      duration: duration,
      missed: this.missed,
      timestamp: new Date().toISOString()
    };

    try {
      await Storage.saveAttempt(attempt);
    } catch (err) {
      console.warn("Could not save attempt:", err);
    }

    // Award points if a callback is provided
    if (typeof this.config.onComplete === "function") {
      this.config.onComplete(attempt);
    }

    // ================================================
    // Celebration routing:
    //   Chapter quiz at 100% → Perfect Score celebration
    //   Everything else → standard summary
    // ================================================
    if (this.config.mode === "chapter" && pct === 100) {
      this._renderPerfectScoreCelebration(attempt);
      return;
    }

    this._renderSummary(attempt);
  }

  _renderSummary(attempt) {
    const total = attempt.total;
    const pct = attempt.percent;

    let emoji, message;
    if (pct === 100) { emoji = "🌟"; message = "Perfect! Outstanding!"; }
    else if (pct >= 80) { emoji = "🎉"; message = "Amazing work!"; }
    else if (pct >= 60) { emoji = "👍"; message = "Great job!"; }
    else if (pct >= 40) { emoji = "📖"; message = "Good try — review the study guide."; }
    else { emoji = "💪"; message = "Keep practicing! Read the study guide and try again."; }

    let missedHtml = "";
    if (this.missed.length > 0) {
      missedHtml = `
        <div class="missed-list">
          <h4>📝 Review these questions you missed:</h4>
          ${this.missed.map(m => `
            <div class="missed-item">
              <div class="missed-q">${m.question}</div>
              <div class="missed-a">Correct answer: <span class="correct-ans">${m.correctAnswer}</span></div>
              ${m.explanation ? `<div class="missed-a" style="margin-top:4px;"><em>${m.explanation}</em></div>` : ""}
            </div>
          `).join("")}
        </div>
      `;
    }

    const showLockedMessage = this.config.mode !== "final";

    this.container.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-emoji">${emoji}</div>
        <div class="quiz-summary-text">You scored ${this.score} / ${total} (${pct}%)</div>
        <div class="quiz-summary-sub">${message}</div>
        ${missedHtml}
        ${showLockedMessage ? `
          <div class="quiz-locked-msg">
            🔒 This quiz is done for today. Come back tomorrow for a fresh one!
          </div>
        ` : `
          <button class="quiz-restart" id="quizRestartBtn">Try Again 🔄</button>
        `}
      </div>
    `;

    const restartBtn = this.container.querySelector("#quizRestartBtn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => this.start());
    }
  }

  /* ==========================================================
     Perfect Score celebration (chapter quiz at 100%)
     ========================================================== */

  _renderPerfectScoreCelebration(attempt) {
    const total = attempt.total;

    const confettiPieces = Array.from({ length: 30 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 1.5;
      const emoji = ["⭐", "✨", "🌟", "🎉", "💫"][i % 5];
      return `<span class="confetti" style="left:${left}%; animation-delay:${delay}s;">${emoji}</span>`;
    }).join("");

    this.container.innerHTML = `
      <div class="dh-celebration dh-celebration-perfect">
        <div class="dh-confetti-container">${confettiPieces}</div>

        <div class="dh-celebration-content dh-celebration-content-gold">
          <div class="dh-celebration-emoji">⭐</div>
          <div class="dh-celebration-title dh-celebration-title-gold">PERFECT SCORE!</div>
          <div class="dh-celebration-skill">${this.config.chapterName || "Chapter Quiz"}</div>
          <div class="dh-celebration-sub">You got all ${total} right — 100%!</div>

          <div class="dh-celebration-actions">
            <button class="dh-check-btn" onclick="App.goHome()">🏠 Back to Home</button>
          </div>
        </div>
      </div>
    `;
  }

  /* ==========================================================
     Completed review view (locked from earlier today)
     ========================================================== */

  _renderCompletedView() {
    const { score, percent, userAnswers } = this.reviewData;

    let emoji, message;
    if (percent === 100) { emoji = "🌟"; message = "Perfect! Outstanding!"; }
    else if (percent >= 80) { emoji = "🎉"; message = "Amazing work!"; }
    else if (percent >= 60) { emoji = "👍"; message = "Great job!"; }
    else if (percent >= 40) { emoji = "📖"; message = "Review the study guide."; }
    else { emoji = "💪"; message = "Read the study guide and try again tomorrow."; }

    let reviewHtml = "";
    this.questions.forEach((q, i) => {
      const correctText = q.options[q.correct];
      const userAns = userAnswers[i];
      const isCorrect = userAns === correctText;
      reviewHtml += `
        <div class="review-item ${isCorrect ? "review-correct" : "review-incorrect"}">
          <div class="review-q">${i + 1}. ${q.question}</div>
          <div class="review-a">
            ${isCorrect
              ? `<span class="review-ok">✓ Your answer: ${userAns}</span>`
              : `<span class="review-bad">✗ Your answer: ${userAns || "(no answer)"}</span>
                 <span class="review-correct-answer">Correct: ${correctText}</span>`}
          </div>
          ${q.explanation ? `<div class="review-explain">${q.explanation}</div>` : ""}
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-emoji">${emoji}</div>
        <div class="quiz-summary-text">You scored ${score} / ${this.questions.length} (${percent}%)</div>
        <div class="quiz-summary-sub">${message}</div>

        <div class="quiz-locked-msg">
          🔒 This quiz is done for today. Come back tomorrow for a fresh one!
        </div>

        <div class="quiz-review-list">
          <h4>📋 Today's Answers</h4>
          ${reviewHtml}
        </div>
      </div>
    `;
  }
}

export { shuffle };