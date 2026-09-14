/* ==========================================================
   quiz-engine.js
   Reusable quiz renderer. One engine, three modes:
     - "mini"    → 5 questions from one chapter's miniCheck bank
     - "chapter" → 15 questions from one chapter's chapterQuiz bank
     - "final"   → 20 questions mixed across all chapters
   Handles: shuffling, feedback, missed-question tracking,
            auto-save to Storage, no-repeat across last 5 runs
            (final exam only).
   ========================================================== */

import { Storage } from "./storage.js";

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

export class QuizEngine {
  /**
   * @param {HTMLElement} container - where to render the quiz
   * @param {Object} config
   *   mode: "mini" | "chapter" | "final"
   *   subject: subject id (e.g., "science")
   *   subjectName: display name (e.g., "Science")
   *   chapter: chapter id (e.g., "chapter-01-scientific-method") — required for mini/chapter
   *   chapterName: display name for the chapter
   *   pool: array of question objects { question, options, correct, explanation }
   *   count: how many questions to show
   *   allChapters: array of { chapter, chapterName, chapterQuiz } — used for final exam
   *   onComplete: callback(attemptObject)
   */
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.missed = [];
    this.startTime = 0;
  }

  async start() {
    this.questions = await this._pickQuestions();
    if (this.questions.length === 0) {
      this.container.innerHTML = `<div class="empty-state">No questions available for this quiz yet.</div>`;
      return;
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
      // Combine all chapter quiz banks, apply no-repeat across last 5 runs
      let combined = [];
      allChapters.forEach(ch => {
        ch.chapterQuiz.forEach(q => {
          combined.push({ ...q, _chapterId: ch.chapter, _chapterName: ch.chapterName });
        });
      });
      const history = (await Storage.getMeta(HISTORY_META_KEY)) || [];
      const historyIds = history.flat();
      const chosen = pickFreshQuizQuestions(combined, count, historyIds);

      // Save this run's IDs to history
      const newRun = chosen.map(q => q.id);
      const updatedHistory = [newRun, ...history].slice(0, HISTORY_LENGTH);
      await Storage.setMeta(HISTORY_META_KEY, updatedHistory);

      return chosen;
    }

    // mini or chapter — just shuffle and take `count`
    return shuffle(pool).slice(0, count);
  }

  _renderQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this._renderSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    const correctText = q.options[q.correct];
    const shuffledOpts = shuffle(q.options);
    this.answered = false;

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

        const nextBtn = document.createElement("button");
        nextBtn.className = "quiz-next";
        nextBtn.textContent = this.currentIndex === this.questions.length - 1
          ? "See Results →" : "Next Question →";
        nextBtn.addEventListener("click", () => {
          this.currentIndex++;
          this._renderQuestion();
        });
        this.container.appendChild(nextBtn);
        nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  async _renderSummary() {
    const total = this.questions.length;
    const pct = Math.round((this.score / total) * 100);
    const duration = Math.round((Date.now() - this.startTime) / 1000);

    let emoji, message;
    if (pct === 100) { emoji = "🌟"; message = "Perfect! Outstanding!"; }
    else if (pct >= 80) { emoji = "🎉"; message = "Amazing work!"; }
    else if (pct >= 60) { emoji = "👍"; message = "Great job!"; }
    else if (pct >= 40) { emoji = "📖"; message = "Good try — review the study guide."; }
    else { emoji = "💪"; message = "Keep practicing! Read the study guide and try again."; }

    // Build attempt object and save
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

    if (typeof this.config.onComplete === "function") {
      this.config.onComplete(attempt);
    }

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

    this.container.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-emoji">${emoji}</div>
        <div class="quiz-summary-text">You scored ${this.score} / ${total} (${pct}%)</div>
        <div class="quiz-summary-sub">${message}</div>
        ${missedHtml}
        <button class="quiz-restart" id="quizRestartBtn">Try Again 🔄</button>
      </div>
    `;

    this.container.querySelector("#quizRestartBtn").addEventListener("click", () => {
      this.start();
    });
  }
}

export { shuffle };