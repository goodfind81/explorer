/* ==========================================================
   chapter-view.js
   Renders a chapter one section at a time:
     1. Study Guide
     2. Quick Check (mini-check quiz)
     3. Chapter Quiz

   Section gating:
     - Study Guide is always open
     - Quick Check is always open
     - Chapter Quiz is locked until the Quick Check passes
       at >= 80% (configurable below)

   Points:
     - Quick Check awards points on complete (1 pt/correct, no bonus)
     - Chapter Quiz awards points on complete (1 pt/correct, +5 if perfect)
   ========================================================== */

import { QuizEngine } from "./quiz-engine.js";
import { Storage } from "./storage.js";
import { getLock } from "./session-lock.js";

const QUICK_CHECK_UNLOCK_THRESHOLD = 80; // % needed on Quick Check to unlock Chapter Quiz

/* ==========================================================
   Main render
   ========================================================== */

export function renderChapterView(container, config) {
  const { subject, chapter, sections, initialSection } = config;

  if (!sections || sections.length === 0) {
    container.innerHTML = `<div class="empty-state">No sections available.</div>`;
    return;
  }

  const state = {
    subject,
    chapter,
    sections,
    currentIndex: 0
  };

  if (initialSection) {
    const idx = sections.findIndex(s => s.key === initialSection);
    if (idx >= 0) state.currentIndex = idx;
  }

  // Kick off an initial check of the gating state, then render
  refreshAndRender(container, state);
}

/**
 * Reads the current lock state (mini-check), computes gate status,
 * then renders the section strip and current section.
 */
async function refreshAndRender(container, state) {
  const { subject, chapter } = state;

  // Check the mini-check lock status
  let quickCheckPassed = false;
  let quickCheckAttempted = false;
  try {
    const lock = await getLock(subject.id, chapter.id, "mini");
    if (lock && lock.completed) {
      quickCheckAttempted = true;
      if ((lock.percent || 0) >= QUICK_CHECK_UNLOCK_THRESHOLD) {
        quickCheckPassed = true;
      }
    }
  } catch (err) {
    console.warn("Could not check mini lock:", err);
  }

  state.quickCheckPassed = quickCheckPassed;
  state.quickCheckAttempted = quickCheckAttempted;

  renderCurrentSection(container, state);
}

/* ==========================================================
   Render the section at state.currentIndex
   ========================================================== */

function renderCurrentSection(container, state) {
  const { sections, currentIndex, subject, chapter, quickCheckPassed } = state;
  const section = sections[currentIndex];

  // Determine which sections are locked
  const studyLocked = false;
  const checkLocked = false;
  const quizLocked = !quickCheckPassed;

  // Build the progress strip
  const stripHtml = `
    <button class="section-step ${currentIndex === 0 ? "current" : ""} ${currentIndex > 0 ? "done" : ""}"
            data-idx="0">1. Study Guide</button>
    <button class="section-step ${currentIndex === 1 ? "current" : ""} ${currentIndex > 1 ? "done" : ""} ${checkLocked ? "locked" : ""}"
            data-idx="1" ${checkLocked ? "disabled" : ""}>
      2. Quick Check${checkLocked ? " 🔒" : ""}
    </button>
    <button class="section-step ${currentIndex === 2 ? "current" : ""} ${currentIndex > 2 ? "done" : ""} ${quizLocked ? "locked" : ""}"
            data-idx="2" ${quizLocked ? "disabled" : ""}>
      3. Chapter Quiz${quizLocked ? " 🔒" : ""}
    </button>
  `;

  container.innerHTML = `
    <div class="section-strip" id="sectionStrip">
      ${stripHtml}
    </div>
    <div class="section-body" id="sectionBody"></div>
  `;

  // Wire up section strip (skip locked)
  container.querySelectorAll(".section-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      const idx = parseInt(btn.dataset.idx);
      if (idx < sections.length) {
        state.currentIndex = idx;
        renderCurrentSection(container, state);
      }
    });
  });

  // Render the section content
  const body = container.querySelector("#sectionBody");
  section.render(body, {
    subject,
    chapter,
    onNext: () => {
      // Refresh gate state before moving forward
      if (state.currentIndex < sections.length - 1) {
        refreshAndRender(container, state).then(() => {
          // If the next section is now unlocked, advance to it
          const nextIdx = state.currentIndex + 1;
          if (nextIdx === 1) {
            state.currentIndex = 1;
            renderCurrentSection(container, state);
          } else if (nextIdx === 2 && state.quickCheckPassed) {
            state.currentIndex = 2;
            renderCurrentSection(container, state);
          }
        });
      }
    },
    onBack: () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderCurrentSection(container, state);
      }
    },
    onRefreshGate: async () => {
      await refreshAndRender(container, state);
    }
  });
}

/* ==========================================================
   Section renderers
   ========================================================== */

/**
 * Study Guide — renders chapter.studyGuideHtml
 */
export function renderStudyGuideSection(container, ctx) {
  const { chapter } = ctx;

  container.innerHTML = `
    <div class="card">
      ${chapter.studyGuideHtml}
    </div>
    <div class="section-actions">
      <button class="section-next-btn" id="studyNextBtn">
        Next: Quick Check →
      </button>
    </div>
  `;

  container.querySelector("#studyNextBtn").addEventListener("click", ctx.onNext);
}

/**
 * Quick Check — 5-question mini-check, awards points on complete.
 */
export function renderQuickCheckSection(container, ctx) {
  const { subject, chapter } = ctx;

  if (!chapter.miniCheck || chapter.miniCheck.length === 0) {
    container.innerHTML = `<div class="empty-state">No quick check available for this chapter yet.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="card">
      <h2>🤔 Quick Check</h2>
      <p>5 questions to test what you just learned. Pass at ${QUICK_CHECK_UNLOCK_THRESHOLD}%+ to unlock the Chapter Quiz.</p>
      <div class="quiz-wrapper mini" id="miniQuiz"></div>
    </div>
    <div class="section-actions" style="display:none;" id="qcActions">
      <button class="section-back-btn" id="qcBackBtn">← Back to Study Guide</button>
      <button class="section-next-btn" id="qcNextBtn">Next: Chapter Quiz →</button>
    </div>
  `;

  const miniContainer = container.querySelector("#miniQuiz");
  const engine = new QuizEngine(miniContainer, {
    mode: "mini",
    subject: subject.id,
    subjectName: subject.name,
    chapter: chapter.id,
    chapterName: chapter.name,
    pool: chapter.miniCheck,
    count: 5,
    onComplete: async (attempt) => {
      // Points are awarded by the server trigger for chapter/mini.
      // Client only needs to refresh the gate state and show nav buttons.

      // Refresh gate state so the Chapter Quiz unlocks if threshold met
      if (typeof ctx.onRefreshGate === "function") {
        await ctx.onRefreshGate();
      }

      // Reveal nav buttons
      const actions = container.querySelector("#qcActions");
      if (actions) actions.style.display = "flex";
    }
  });
  engine.start();

  container.querySelector("#qcBackBtn").addEventListener("click", ctx.onBack);
  container.querySelector("#qcNextBtn").addEventListener("click", () => {
    // Force a fresh gate check before advancing
    if (typeof ctx.onRefreshGate === "function") {
      ctx.onRefreshGate();
    }
    // The parent will handle moving to the next section
    setTimeout(() => {
      const next = document.querySelector('.section-step[data-idx="2"]');
      if (next && !next.disabled) next.click();
    }, 150);
  });
}

/**
 * Chapter Quiz — 15-question quiz, awards points on complete.
 */
export function renderChapterQuizSection(container, ctx) {
  const { subject, chapter } = ctx;

  if (!chapter.chapterQuiz || chapter.chapterQuiz.length === 0) {
    container.innerHTML = `
      <div class="empty-state">No chapter quiz available for this chapter yet.</div>
      <div class="section-actions">
        <button class="section-back-btn" id="cqBackBtn">← Back to Quick Check</button>
      </div>
    `;
    container.querySelector("#cqBackBtn").addEventListener("click", ctx.onBack);
    return;
  }

  container.innerHTML = `
    <div class="card">
      <h2>📝 Chapter Quiz</h2>
      <p>15 questions from this chapter. This is what a test on this material will feel like — multiple choice, all mixed together.</p>
      <div class="quiz-wrapper chapter" id="chapterQuiz"></div>
    </div>
    <div class="section-actions">
      <button class="section-back-btn" id="cqBackBtn">← Back to Quick Check</button>
      <button class="section-home-btn" onclick="App.goHome()">🏠 Back to Home</button>
    </div>
  `;

  const quizContainer = container.querySelector("#chapterQuiz");
  const engine = new QuizEngine(quizContainer, {
    mode: "chapter",
    subject: subject.id,
    subjectName: subject.name,
    chapter: chapter.id,
    chapterName: chapter.name,
    pool: chapter.chapterQuiz,
    count: 15,
    onComplete: async (attempt) => {
      //try {
      //  await awardPointsForAttempt(attempt, { advanced: false });
      //} catch (err) {
      //  console.warn("Could not award points for chapter quiz:", err);
      //}
    }
  });
  engine.start();

  container.querySelector("#cqBackBtn").addEventListener("click", ctx.onBack);
}