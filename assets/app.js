/* ==========================================================
   app.js
   Main orchestrator. Boots the app, loads subject and chapter
   registries, renders navigation and chapter content.
   ========================================================== */

import { Storage } from "./storage.js";
import { QuizEngine, shuffle } from "./quiz-engine.js";

// ---- Subject registry ----
// When we add Math later, we add an entry here.
// Each entry points to a subject.js file inside data/<subject>/.
const SUBJECT_LOADERS = [
  { id: "science", name: "Science", icon: "🔬", loader: () => import("../data/science/subject.js") },
  // { id: "math", name: "Math", icon: "🔢", loader: () => import("../data/math/subject.js") },
];

// ---- App state ----
const state = {
  subjects: {},          // { science: { id, name, icon, chapters: [...] } }
  activeSubjectId: null,
  activeChapterId: null,
};

// ---- DOM refs ----
const els = {
  subjectTabs: document.getElementById("subjectTabs"),
  chapterTabs: document.getElementById("chapterTabs"),
  main: document.getElementById("mainContent"),
  subtitle: document.getElementById("headerSubtitle"),
};

// ==========================================================
// BOOT
// ==========================================================
async function boot() {
  await Storage.init();
  await loadAllSubjects();

  if (Object.keys(state.subjects).length === 0) {
    els.main.innerHTML = `<div class="empty-state">No subjects found. Please check the data folder.</div>`;
    return;
  }

  // Activate the first subject
  const firstId = SUBJECT_LOADERS[0].id;
  activateSubject(firstId);

  // Parent dashboard button is wired in index.html
}

async function loadAllSubjects() {
  for (const entry of SUBJECT_LOADERS) {
    try {
      const mod = await entry.loader();
      state.subjects[entry.id] = {
        id: entry.id,
        name: entry.name,
        icon: entry.icon,
        chapters: mod.chapters || [],
      };
    } catch (err) {
      console.warn(`Could not load subject "${entry.id}":`, err);
    }
  }
}

// ==========================================================
// NAVIGATION
// ==========================================================
function renderSubjectTabs() {
  els.subjectTabs.innerHTML = "";
  Object.values(state.subjects).forEach(subj => {
    const btn = document.createElement("button");
    btn.className = "nav-btn subject-tab";
    if (subj.id === state.activeSubjectId) btn.classList.add("active");
    btn.textContent = `${subj.icon} ${subj.name}`;
    btn.addEventListener("click", () => activateSubject(subj.id));
    els.subjectTabs.appendChild(btn);
  });
}

function activateSubject(subjectId) {
  state.activeSubjectId = subjectId;
  const subj = state.subjects[subjectId];
  if (!subj || subj.chapters.length === 0) {
    renderSubjectTabs();
    els.chapterTabs.innerHTML = "";
    els.main.innerHTML = `<div class="empty-state">No chapters yet in ${subj ? subj.name : "this subject"}.</div>`;
    els.subtitle.textContent = subj ? subj.name : "";
    return;
  }
  // Activate the first chapter by default
  activateChapter(subj.chapters[0].id);
}

function renderChapterTabs() {
  const subj = state.subjects[state.activeSubjectId];
  els.chapterTabs.innerHTML = "";

  // Add a "Final Exam" tab at the end
  subj.chapters.forEach(ch => {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    if (ch.id === state.activeChapterId) btn.classList.add("active");
    btn.textContent = ch.shortName || ch.name;
    btn.addEventListener("click", () => activateChapter(ch.id));
    els.chapterTabs.appendChild(btn);
  });

  const finalBtn = document.createElement("button");
  finalBtn.className = "nav-btn";
  finalBtn.style.borderColor = "var(--accent-green)";
  finalBtn.style.color = "var(--accent-green)";
  if (state.activeChapterId === "__final__") {
    finalBtn.classList.add("active");
    finalBtn.style.background = "var(--accent-green)";
    finalBtn.style.color = "white";
  }
  finalBtn.textContent = "🎯 Final Exam";
  finalBtn.addEventListener("click", () => activateChapter("__final__"));
  els.chapterTabs.appendChild(finalBtn);
}

function activateChapter(chapterId) {
  state.activeChapterId = chapterId;
  renderSubjectTabs();
  renderChapterTabs();

  if (chapterId === "__final__") {
    renderFinalExamPage();
    return;
  }

  const subj = state.subjects[state.activeSubjectId];
  const ch = subj.chapters.find(c => c.id === chapterId);
  if (!ch) {
    els.main.innerHTML = `<div class="empty-state">Chapter not found.</div>`;
    return;
  }

  els.subtitle.textContent = `${subj.name} — ${ch.name}`;
  renderChapterPage(subj, ch);
}

// ==========================================================
// CHAPTER PAGE
// ==========================================================
function renderChapterPage(subject, chapter) {
  els.main.innerHTML = "";

  // Study guide content
  const contentCard = document.createElement("div");
  contentCard.className = "card";
  contentCard.innerHTML = chapter.studyGuideHtml;
  els.main.appendChild(contentCard);

  // Mini-check quiz
  const miniCard = document.createElement("div");
  miniCard.className = "card";
  miniCard.innerHTML = `<h2>🤔 Quick Check</h2>
    <p>5 questions to test what you just learned.</p>
    <div class="quiz-wrapper mini" id="miniQuiz"></div>`;
  els.main.appendChild(miniCard);

  const miniContainer = miniCard.querySelector("#miniQuiz");
  const miniEngine = new QuizEngine(miniContainer, {
    mode: "mini",
    subject: subject.id,
    subjectName: subject.name,
    chapter: chapter.id,
    chapterName: chapter.name,
    pool: chapter.miniCheck,
    count: 5,
  });
  miniEngine.start();

  // Chapter quiz
  const chapterCard = document.createElement("div");
  chapterCard.className = "card";
  chapterCard.innerHTML = `<h2>📝 Chapter Quiz</h2>
    <p>15 questions from this chapter. Fresh questions every time.</p>
    <div class="quiz-wrapper chapter" id="chapterQuiz"></div>`;
  els.main.appendChild(chapterCard);

  const chapterContainer = chapterCard.querySelector("#chapterQuiz");
  const chapterEngine = new QuizEngine(chapterContainer, {
    mode: "chapter",
    subject: subject.id,
    subjectName: subject.name,
    chapter: chapter.id,
    chapterName: chapter.name,
    pool: chapter.chapterQuiz,
    count: 15,
  });
  chapterEngine.start();
}

// ==========================================================
// FINAL EXAM PAGE
// ==========================================================
function renderFinalExamPage() {
  const subj = state.subjects[state.activeSubjectId];
  els.subtitle.textContent = `${subj.name} — Final Exam`;

  els.main.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";
  card.style.borderLeftColor = "var(--accent-green)";
  card.innerHTML = `<h2>🎯 Final Exam</h2>
    <p>20 questions drawn from every chapter. Each attempt gives you a fresh mix — no repeats from your last 5 attempts.</p>
    <div class="quiz-wrapper final" id="finalQuiz"></div>`;
  els.main.appendChild(card);

  const container = card.querySelector("#finalQuiz");
  const engine = new QuizEngine(container, {
    mode: "final",
    subject: subj.id,
    subjectName: subj.name,
    allChapters: subj.chapters.map(ch => ({
      chapter: ch.id,
      chapterName: ch.name,
      chapterQuiz: ch.chapterQuiz,
    })),
    count: 20,
  });
  engine.start();
}

// ==========================================================
// PARENT DASHBOARD (delegated to parent-dashboard.js)
// ==========================================================
async function showParentDashboard() {
  const { renderParentDashboard } = await import("./parent-dashboard.js");
  renderParentDashboard(els.main, els.subtitle);
  // Clear active tabs
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  els.chapterTabs.innerHTML = "";
}

// Expose App for inline onclick handlers
window.App = { showParentDashboard };

// ==========================================================
// KICK OFF
// ==========================================================
boot().catch(err => {
  console.error("Boot failed:", err);
  els.main.innerHTML = `<div class="empty-state">
    <strong>Something went wrong starting the app.</strong><br>
    ${err.message}<br><br>
    Make sure you're running from a local server (not opening the file directly).
  </div>`;
});