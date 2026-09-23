/* ==========================================================
   quiz-engine.js
   Quiz renderer for mini-checks and chapter quizzes.

   Uses session-lock.js for atomic, multi-device locking.
   All score computation is server-side (submit_quiz_attempt).

   Flow:
     1. claimLock()        — claim or resume today's quiz
     2. render question
     3. on answer: saveAnswer() (fire-and-forget)
     4. on next: saveProgress() (fire-and-forget)
     5. on last: submitAttempt() — single atomic request
     6. render summary with server-computed score

   Multi-device:
     - If another device owns the lock, show takeover prompt
     - Heartbeat every 60s. If lost, show takeover modal.
   ========================================================== */

import {
  claimLock,
  saveAnswer,
  saveProgress,
  submitAttempt,
  startHeartbeat,
  getDeviceToken
} from "./session-lock.js";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ==========================================================
   Normalize question to internal shape
   ========================================================== */

function normalizeQuestion(rawQuestion) {
  // Accept either {correct: index, options} OR {correctAnswer: text}
  let correctAnswer;
  if (rawQuestion.correctAnswer != null) {
    correctAnswer = rawQuestion.correctAnswer;
  } else if (rawQuestion.options && rawQuestion.correct != null) {
    correctAnswer = rawQuestion.options[rawQuestion.correct];
  } else {
    correctAnswer = null;
  }
  return {
    question: rawQuestion.question,
    options: (rawQuestion.options || []).slice(),
    correctAnswer: correctAnswer,
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
    this.questions = [];
    this.currentIndex = 0;
    this.answered = false;
    this.startTime = 0;
    this.userAnswers = [];
    this.heartbeat = null;
    this.ownedByThisDevice = true;   // flips false when taken over
  }

  async start() {
    const { mode, subject, chapter, pool, count } = this.config;

    // Non-locked modes (final exam) skip the lock system entirely
    if (mode === "final") {
      const rawQuestions = shuffle(pool).slice(0, count);
      this.questions = rawQuestions.map(normalizeQuestion);
      this.userAnswers = new Array(this.questions.length).fill(null);
      this.currentIndex = 0;
      this.answered = false;
      this.startTime = Date.now();
      this.ownedByThisDevice = true;
      this._renderQuestion();
      return;
    }

    // Build the question pool to seed the lock (if it needs creating)
    const rawQuestions = shuffle(pool).slice(0, count);
    const questionsForLock = rawQuestions.map(normalizeQuestion);

    // Claim the lock
    let claimResult;
    try {
      claimResult = await claimLock(subject, chapter, mode, questionsForLock, false);
    } catch (err) {
      this.container.innerHTML = `<div class="empty-state">Could not open the quiz. Check your connection and try again.</div>`;
      console.error(err);
      return;
    }

    if (claimResult.action === "completed") {
      // Show review
      this.questions = claimResult.lock.questions.map(normalizeQuestion);
      this.userAnswers = claimResult.lock.userAnswers || [];
      while (this.userAnswers.length < this.questions.length) this.userAnswers.push(null);
      this._renderCompletedView(claimResult.lock);
      return;
    }

    if (claimResult.needsTakeover) {
      // Another device owns this quiz. Ask the user.
      this._renderTakeoverPrompt(claimResult.lock, questionsForLock);
      return;
    }

    // We own it — resume or start fresh
    this._initializeFromLock(claimResult.lock);
  }

  _initializeFromLock(lock) {
    const { subject, chapter, mode } = this.config;

    // If the lock has no questions (shouldn't happen), fall back to fresh
    this.questions = (lock.questions && lock.questions.length > 0)
      ? lock.questions.map(normalizeQuestion)
      : this.questions;

    this.userAnswers = (lock.userAnswers || []).slice();
    while (this.userAnswers.length < this.questions.length) this.userAnswers.push(null);

    // Resume at first unanswered question, or saved index
    let startIndex = lock.currentIndex || 0;
    if (startIndex >= this.questions.length) {
      // Find first unanswered instead
      const firstUnanswered = this.userAnswers.findIndex(a => a == null);
      startIndex = firstUnanswered === -1 ? 0 : firstUnanswered;
    }
    this.currentIndex = startIndex;
    this.answered = false;
    this.startTime = lock.startedAt || Date.now();
    this.ownedByThisDevice = true;

    // Start heartbeat
    this._beginHeartbeat();

    this._renderQuestion();
  }

  _beginHeartbeat() {
    const { subject, chapter, mode } = this.config;
    if (mode === "final") return;

    if (this.heartbeat) this.heartbeat.stop();
    this.heartbeat = startHeartbeat(subject, chapter, mode, (reason) => {
      // Lost ownership
      this.ownedByThisDevice = false;
      this._renderTakeoverModal("Another device has taken over this quiz.");
    });
  }

  _stopHeartbeat() {
    if (this.heartbeat) {
      this.heartbeat.stop();
      this.heartbeat = null;
    }
  }

  /* ==========================================================
     Takeover prompt / modal
     ========================================================== */

  _renderTakeoverPrompt(lock, questionsForLock) {
    this.container.innerHTML = `
      <div class="quiz-takeover-overlay">
        <div class="quiz-takeover-modal">
          <div class="quiz-takeover-emoji">🔄</div>
          <div class="quiz-takeover-title">Quiz in progress elsewhere</div>
          <div class="quiz-takeover-body">
            This quiz is currently open on another device.
            Do you want to continue here? The other device will
            no longer be able to answer questions.
          </div>
          <div class="quiz-takeover-actions">
            <button class="section-back-btn" id="takeoverCancel">No, go back</button>
            <button class="section-next-btn" id="takeoverContinue">Yes, continue here</button>
          </div>
        </div>
      </div>
    `;

    this.container.querySelector("#takeoverCancel").addEventListener("click", () => {
      if (typeof this.config.onExit === "function") this.config.onExit();
      else if (window.App && window.App.goHome) window.App.goHome();
    });

    this.container.querySelector("#takeoverContinue").addEventListener("click", async () => {
      try {
        const result = await claimLock(
          this.config.subject, this.config.chapter, this.config.mode,
          questionsForLock, true
        );
        this._initializeFromLock(result.lock);
      } catch (err) {
        console.error("Takeover failed:", err);
        alert("Could not take over the quiz. Try again.");
      }
    });
  }

  _renderTakeoverModal(message) {
    this._stopHeartbeat();
    const overlay = document.createElement("div");
    overlay.className = "quiz-takeover-overlay";
    overlay.innerHTML = `
      <div class="quiz-takeover-modal">
        <div class="quiz-takeover-emoji">⚠️</div>
        <div class="quiz-takeover-title">Quiz taken over</div>
        <div class="quiz-takeover-body">${message}</div>
        <div class="quiz-takeover-actions">
          <button class="section-next-btn" id="takeoverOk">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector("#takeoverOk").addEventListener("click", () => {
      overlay.remove();
      if (window.App && window.App.goHome) window.App.goHome();
    });
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

    const pct = Math.round((this.currentIndex / this.questions.length) * 100);
    const priorAnswer = this.userAnswers[this.currentIndex];

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

    // If this question was already answered (resumed from another device),
    // let the user re-answer. We don't show the prior selection.

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.answered) return;
        if (!this.ownedByThisDevice) {
          this._renderTakeoverModal("This quiz was taken over by another device.");
          return;
        }
        this.answered = true;

        const picked = btn.dataset.answer;
        buttons.forEach(b => (b.disabled = true));

        this.userAnswers[this.currentIndex] = picked;

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

        // Save answer (fire-and-forget)
        if (this.config.mode !== "final") {
          saveAnswer(
            this.config.subject,
            this.config.chapter,
            this.config.mode,
            this.currentIndex,
            picked
          ).then(res => {
            if (res && res.ok === false) {
              if (res.reason === "not_owner") {
                this.ownedByThisDevice = false;
                this._renderTakeoverModal("Another device has taken over this quiz.");
              }
            }
          }).catch(() => {});
        }

        const nextBtn = document.createElement("button");
        nextBtn.className = "quiz-next";
        nextBtn.textContent = this.currentIndex === this.questions.length - 1
          ? "See Results →" : "Next Question →";
        nextBtn.addEventListener("click", () => {
          this.currentIndex++;
          if (this.config.mode !== "final") {
            saveProgress(
              this.config.subject, this.config.chapter, this.config.mode,
              this.currentIndex
            ).catch(() => {});
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
    // Guard: no submission with blanks
    const firstUnanswered = this.userAnswers.findIndex(a => a == null);
    if (firstUnanswered !== -1) {
      alert(
        `You still have unanswered questions.\n\n` +
        `Please answer question ${firstUnanswered + 1} before finishing.`
      );
      this.currentIndex = firstUnanswered;
      this._renderQuestion();
      return;
    }

    this._stopHeartbeat();

    const { mode, subject, subjectName, chapter, chapterName } = this.config;
    const duration = Math.round((Date.now() - this.startTime) / 1000);

    // Final exam: no lock, score client-side, no server submission
    if (mode === "final") {
      this._renderFinalExamSummary(duration);
      return;
    }

    // Submit to server for atomic score + attempt + points
    let result;
    try {
      result = await submitAttempt(
        subject, subjectName, chapter, chapterName, mode,
        this.userAnswers, duration
      );
    } catch (err) {
      console.error("submitAttempt failed:", err);
      this.container.innerHTML = `
        <div class="quiz-summary">
          <div class="quiz-summary-emoji">⚠️</div>
          <div class="quiz-summary-text">Could not save your score</div>
          <div class="quiz-summary-sub">
            Check your internet connection and try again.
          </div>
          <button class="quiz-restart" onclick="App.goHome()">🏠 Back to Home</button>
        </div>
      `;
      return;
    }

    if (!result || result.ok === false) {
      // Server refused
      if (result && result.reason === "already_submitted") {
        // Already submitted elsewhere
        this._renderTakeoverModal("This quiz was already submitted from another device.");
      } else if (result && result.reason === "not_owner") {
        this._renderTakeoverModal("Another device has taken over this quiz.");
      } else {
        alert("Could not submit the quiz. Reason: " + (result ? result.reason : "unknown"));
      }
      return;
    }

    // Success — render based on score
    const { score, total, percent } = result;

    if (mode === "chapter" && percent === 100) {
      this._renderPerfectScoreCelebration(score, total);
      return;
    }
    this._renderSummaryFromResult(score, total, percent);
  }

  /* ==========================================================
     Summary (server-computed result)
     ========================================================== */

  _renderSummaryFromResult(score, total, percent) {
    let emoji, message;
    if (percent === 100) { emoji = "🌟"; message = "Perfect! Outstanding!"; }
    else if (percent >= 80) { emoji = "🎉"; message = "Amazing work!"; }
    else if (percent >= 60) { emoji = "👍"; message = "Great job!"; }
    else if (percent >= 40) { emoji = "📖"; message = "Good try — review the study guide."; }
    else { emoji = "💪"; message = "Keep practicing! Read the study guide and try again."; }

    // Compute missed list from local state for display
    const missed = [];
    for (let i = 0; i < this.questions.length; i++) {
      const q = this.questions[i];
      const ua = this.userAnswers[i];
      if (ua !== q.correctAnswer) {
        missed.push({ question: q.question, correctAnswer: q.correctAnswer, explanation: q.explanation });
      }
    }

    let missedHtml = "";
    if (missed.length > 0) {
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

    this.container.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-emoji">${emoji}</div>
        <div class="quiz-summary-text">You scored ${score} / ${total} (${percent}%)</div>
        <div class="quiz-summary-sub">${message}</div>
        ${missedHtml}
        <div class="quiz-locked-msg">
          🔒 This quiz is done for today. Come back tomorrow for a fresh one!
        </div>
      </div>
    `;
  }

  _renderFinalExamSummary(duration) {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correctAnswer) score++;
    }
    const total = this.questions.length;
    const percent = Math.round((score / total) * 100);

    this._renderSummaryFromResult(score, total, percent);
    // Re-render without the "done for today" message for final exam
    this.container.querySelector(".quiz-locked-msg")?.remove();
    const btn = document.createElement("button");
    btn.className = "quiz-restart";
    btn.textContent = "Try Again 🔄";
    btn.addEventListener("click", () => this.start());
    this.container.querySelector(".quiz-summary")?.appendChild(btn);
  }

  _renderPerfectScoreCelebration(score, total) {
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
     Completed review (returned when the lock is already done)
     ========================================================== */

  _renderCompletedView(lock) {
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