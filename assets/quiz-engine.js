/* ==========================================================
   quiz-engine.js
   Reusable quiz renderer for mini-checks and chapter quizzes.

   Integrates with session-lock.js (Supabase-backed) — each
   (subject, chapter, type) has one session per calendar day,
   shared across all devices.

   Key invariants (fixed in this version):
     1. Questions AND correct answers are captured ONCE at
        quiz start and never re-read from the pool.
     2. Score and missed list are computed at the END from
        the answers, not accumulated during the quiz. This
        survives page reloads and mid-quiz refreshes.
     3. saveAnswer stores the correct answer text alongside
        the user's pick, so the review view is not dependent
        on the pool's option order.
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
   Normalize a question into a stable internal shape.
   Once normalized, we never look at q.options[q.correct] again.
   ========================================================== */

function normalizeQuestion(rawQuestion) {
  return {
    question: rawQuestion.question,
    options: rawQuestion.options.slice(),
    correctAnswer: rawQuestion.options[rawQuestion.correct],
    explanation: rawQuestion.explanation || ""
  };
}

/* ==========================================================
   QuizEngine class
   ========================================================== */

export class QuizEngine {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.questions = [];       // normalized {question, options, correctAnswer, explanation}
    this.currentIndex = 0;
    this.answered = false;
    this.startTime = 0;
    this.lock = null;
    this.userAnswers = [];      // "user's picked option text" or null, one per question
    this.reviewMode = false;
    this.reviewData = null;
  }

  async start() {
    const { mode, subject, chapter } = this.config;

    if (mode !== "final") {
      let existingLock = null;
      try {
        existingLock = await getLock(subject, chapter, mode);
      } catch (err) {
        console.warn("Could not check lock (offline?):", err);
      }

      if (existingLock) {
        this.lock = existingLock;
        this.questions = existingLock.questions.map(normalizeQuestion);
        this.currentIndex = existingLock.currentIndex || 0;
        this.userAnswers = (existingLock.userAnswers || new Array(this.questions.length).fill(null))
          .slice(0, this.questions.length);
        while (this.userAnswers.length < this.questions.length) {
          this.userAnswers.push(null);
        }

        if (existingLock.completed) {
          this.reviewMode = true;
          this._renderCompletedView();
          return;
        }

        this.startTime = existingLock.startedAt || Date.now();
        this._renderQuestion();
        return;
      }
    }

    // No lock — generate fresh questions
    const rawQuestions = await this._pickQuestions();
    if (rawQuestions.length === 0) {
      this.container.innerHTML = `<div class="empty-state">No questions available for this quiz yet.</div>`;
      return;
    }
    this.questions = rawQuestions.map(normalizeQuestion);
    this.userAnswers = new Array(this.questions.length).fill(null);

    if (mode !== "final") {
      try {
        this.lock = await createLock(subject, chapter, mode, this.questions);
      } catch (err) {
        console.warn("Could not create lock:", err);
        this.lock = null;
      }
    }

    this.currentIndex = 0;
    this.answered = false;
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
      const historyIds = Array.isArray(history) && Array.isArray(history[0])
        ? history.flat()
        : (Array.isArray(history) ? history : []);
      const chosen = pickFreshQuizQuestions(combined, count, historyIds);

      const newRun = chosen.map(q => q.id);
      const updatedHistory = [newRun, ...(Array.isArray(history) ? history : [])].slice(0, HISTORY_LENGTH);
      await Storage.setMeta(HISTORY_META_KEY, updatedHistory);

      return chosen;
    }

    return shuffle(pool).slice(0, count);
  }

  /* ==========================================================
     Score / missed computation (single source of truth)
     ========================================================== */

  _computeScoreAndMissed() {
    let score = 0;
    const missed = [];
    for (let i = 0; i < this.questions.length; i++) {
      const q = this.questions[i];
      const userAns = this.userAnswers[i];
      if (userAns != null && userAns === q.correctAnswer) {
        score++;
      } else {
        missed.push({
          question: q.question,
          correctAnswer: q.correctAnswer,
          userAnswer: userAns || null,
          explanation: q.explanation
        });
      }
    }
    return { score, missed };
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
    const shuffledOpts = shuffle(q.options);
    this.answered = false;

    // If the user already answered this question (e.g., after refresh),
    // we don't show the previous answer — they get a fresh shot at it.
    // (Their progress saves; they just don't see the prior pick.)

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
      btn.addEventListener("click", async () => {
        if (this.answered) return;
        this.answered = true;

        const picked = btn.dataset.answer;
        buttons.forEach(b => (b.disabled = true));

        // Store the user's pick in memory
        this.userAnswers[this.currentIndex] = picked;

        // Display feedback
        if (picked === q.correctAnswer) {
          btn.classList.add("correct");
          feedback.className = "quiz-feedback correct show";
          feedback.innerHTML = `<strong>✅ Correct!</strong>${q.explanation || ""}`;
        } else {
          btn.classList.add("incorrect");
          buttons.forEach(b => {
            if (b.dataset.answer === q.correctAnswer) b.classList.add("correct");
          });
          feedback.className = "quiz-feedback incorrect show";
          feedback.innerHTML = `<strong>❌ Not quite.</strong>${q.explanation || ""}`;
        }

        // Save answer to Supabase (non-blocking, best-effort)
        if (this.lock && this.config.mode !== "final") {
          saveAnswer(
            this.config.subject,
            this.config.chapter,
            this.config.mode,
            this.currentIndex,
            picked
          ).catch(err => console.warn("Could not save answer:", err));
        }

        // Next button
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
            ).catch(err => console.warn("Could not save progress:", err));
          }
          this._renderQuestion();
        });
        this.container.appendChild(nextBtn);
        nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  /* ==========================================================
     Finishing
     ========================================================== */

  async _finishQuiz() {
    const total = this.questions.length;
    const { score, missed } = this._computeScoreAndMissed();
    const pct = Math.round((score / total) * 100);
    const duration = Math.round((Date.now() - this.startTime) / 1000);

    // Save the merged user answers back to the lock
    if (this.lock && this.config.mode !== "final") {
      try {
        await completeLock(
          this.config.subject,
          this.config.chapter,
          this.config.mode,
          score,
          pct,
          this.userAnswers
        );
      } catch (err) {
        console.warn("Could not complete lock:", err);
      }
    }

    // Build attempt
    const attempt = {
      id: `${this.config.mode}-${this.config.subject}-${this.config.chapter || "all"}-${Date.now()}`,
      type: this.config.mode,
      subject: this.config.subject,
      subjectName: this.config.subjectName,
      chapter: this.config.chapter || "all",
      chapterName: this.config.chapterName || "All Chapters",
      score: score,
      total: total,
      percent: pct,
      duration: duration,
      missed: missed,
      questions: this.questions.map((q, i) => ({
        question: q.question,
        correctAnswer: q.correctAnswer,
        userAnswer: this.userAnswers[i] || null,
        explanation: q.explanation
      })),
      timestamp: new Date().toISOString()
    };

    try {
      await Storage.saveAttempt(attempt);
    } catch (err) {
      console.error("Could not save attempt to Supabase:", err);
      alert(
        "⚠️ Your score couldn't be saved to the cloud. " +
        "Check your internet connection. " +
        "The quiz is marked complete for today, but your points may not be awarded."
      );
    }

    if (typeof this.config.onComplete === "function") {
      try {
        await this.config.onComplete(attempt);
      } catch (err) {
        console.warn("onComplete callback failed:", err);
      }
    }

    if (this.config.mode === "chapter" && pct === 100) {
      this._renderPerfectScoreCelebration(attempt);
      return;
    }

    this._renderSummary(attempt);
  }

  /* ==========================================================
     Summary
     ========================================================== */

  _renderSummary(attempt) {
    const { score, total, percent, missed } = attempt;

    let emoji, message;
    if (percent === 100) { emoji = "🌟"; message = "Perfect! Outstanding!"; }
    else if (percent >= 80) { emoji = "🎉"; message = "Amazing work!"; }
    else if (percent >= 60) { emoji = "👍"; message = "Great job!"; }
    else if (percent >= 40) { emoji = "📖"; message = "Good try — review the study guide."; }
    else { emoji = "💪"; message = "Keep practicing! Read the study guide and try again."; }

    let missedHtml = "";
    if (missed && missed.length > 0) {
      missedHtml = `
        <div class="missed-list">
          <h4>📝 Review these questions you missed:</h4>
          ${missed.map(m => `
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
        <div class="quiz-summary-text">You scored ${score} / ${total} (${percent}%)</div>
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
     Perfect Score celebration
     ========================================================== */

  _renderPerfectScoreCelebration(attempt) {
    const { total } = attempt;

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
     Completed review view
     ========================================================== */

  _renderCompletedView() {
    const lock = this.lock;
    const percent = lock.percent;
    const score = lock.score;
    const total = this.questions.length;

    let emoji, message;
    if (percent === 100) { emoji = "🌟"; message = "Perfect! Outstanding!"; }
    else if (percent >= 80) { emoji = "🎉"; message = "Amazing work!"; }
    else if (percent >= 60) { emoji = "👍"; message = "Great job!"; }
    else if (percent >= 40) { emoji = "📖"; message = "Review the study guide."; }
    else { emoji = "💪"; message = "Read the study guide and try again tomorrow."; }

    let reviewHtml = "";
    this.questions.forEach((q, i) => {
      const userAns = this.userAnswers[i];
      const isCorrect = userAns === q.correctAnswer;
      reviewHtml += `
        <div class="review-item ${isCorrect ? "review-correct" : "review-incorrect"}">
          <div class="review-q">${i + 1}. ${q.question}</div>
          <div class="review-a">
            ${isCorrect
              ? `<span class="review-ok">✓ Your answer: ${userAns}</span>`
              : `<span class="review-bad">✗ Your answer: ${userAns || "(no answer)"}</span>
                 <span class="review-correct-answer">Correct: ${q.correctAnswer}</span>`}
          </div>
          ${q.explanation ? `<div class="review-explain">${q.explanation}</div>` : ""}
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-emoji">${emoji}</div>
        <div class="quiz-summary-text">You scored ${score} / ${total} (${percent}%)</div>
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