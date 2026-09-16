/* ==========================================================
   chapter-view.js
   Renders a chapter one section at a time:
     1. Study Guide
     2. Quick Check (mini-check quiz)
     3. Chapter Quiz

   Shows a progress strip at the top with clickable sections.
   Handles Next / Back navigation between sections.
   ========================================================== */

import { QuizEngine } from "./quiz-engine.js";
import { Storage } from "./storage.js";

/* ==========================================================
   Main render
   ========================================================== */

export function renderChapterView(container, config) {
  const { subject, chapter, sections, initialSection } = config;

  // sections: array of { key, label, render }
  //   e.g. [{ key: "study", label: "Study Guide", render: fn },
  //         { key: "check", label: "Quick Check", render: fn },
  //         { key: "quiz",  label: "Chapter Quiz", render: fn }]

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

  // Find initial section index
  if (initialSection) {
    const idx = sections.findIndex(s => s.key === initialSection);
    if (idx >= 0) state.currentIndex = idx;
  }

  renderCurrentSection(container, state);
}

/* ==========================================================
   Render the section at state.currentIndex
   ========================================================== */

function renderCurrentSection(container, state) {
  const { sections, currentIndex, subject, chapter } = state;
  const section = sections[currentIndex];

  // Build the progress strip
  const progressHtml = `
    <button class="section-step ${currentIndex === 0 ? "current" : ""} ${currentIndex > 0 ? "done" : ""}"
            data-idx="0">1. Study Guide</button>
    <button class="section-step ${currentIndex === 1 ? "current" : ""} ${currentIndex > 1 ? "done" : ""}"
            data-idx="1">2. Quick Check</button>
    <button class="section-step ${currentIndex === 2 ? "current" : ""} ${currentIndex > 2 ? "done" : ""}"
            data-idx="2">3. Chapter Quiz</button>
  `;

  // Clear and rebuild container
  container.innerHTML = `
    <div class="section-strip" id="sectionStrip">
      ${progressHtml}
    </div>
    <div class="section-body" id="sectionBody"></div>
  `;

  // Wire up section strip
  container.querySelectorAll(".section-step").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx);
      if (idx < sections.length) {
        state.currentIndex = idx;
        renderCurrentSection(container, state);
      }
    });
  });

  // Render the actual section content
  const body = container.querySelector("#sectionBody");
  section.render(body, {
    subject,
    chapter,
    onNext: () => {
      if (state.currentIndex < sections.length - 1) {
        state.currentIndex++;
        renderCurrentSection(container, state);
      }
    },
    onBack: () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderCurrentSection(container, state);
      }
    }
  });
}

/* ==========================================================
   Section renderers (exported so app.js can build the sections array)
   ========================================================== */

/**
 * Study Guide section: just renders the chapter's studyGuideHtml.
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
 * Quick Check section: mini-check quiz engine, 5 questions.
 * After completing, shows a "Next: Chapter Quiz" button.
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
      <p>5 questions to test what you just learned. Read the study guide first if you need a refresher.</p>
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
    onComplete: () => {
      // Reveal nav buttons after first attempt
      const actions = container.querySelector("#qcActions");
      if (actions) actions.style.display = "flex";
    }
  });
  engine.start();

  // Wire up nav buttons (visible after quiz completes)
  container.querySelector("#qcBackBtn").addEventListener("click", ctx.onBack);
  container.querySelector("#qcNextBtn").addEventListener("click", ctx.onNext);
}

/**
 * Chapter Quiz section: 15-question multiple choice quiz.
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
    count: 15
  });
  engine.start();

  container.querySelector("#cqBackBtn").addEventListener("click", ctx.onBack);
}