/* ==========================================================
   app.js
   Main orchestrator. Boots the app, loads subject and chapter
   registries, renders navigation and chapter content.

   Science: uses tab-based navigation (as before).
   Math:    uses dropdown navigation + daily homework day picker.
   ========================================================== */

import { Storage } from "./storage.js";
import { QuizEngine, shuffle } from "./quiz-engine.js";
import { DailyHomework } from "./daily-homework.js";
import {
  getTodayDayNumber,
  getDayLabel,
  getDayName,
  getDayStatus,
  getWeekSkillsFromChapter,
  isWeekendReady
} from "./daily-planner.js";

// ---- Subject registry ----
const SUBJECT_LOADERS = [
  { id: "science", name: "Science", icon: "🔬", nav: "tabs",     loader: () => import("../data/science/subject.js") },
  { id: "math",    name: "Math",    icon: "🔢", nav: "dropdown", loader: () => import("../data/math/subject.js") }
];

// ---- App state ----
const state = {
  subjects: {},
  activeSubjectId: null,
  activeChapterId: null,
  activeDay: null
};

// ---- DOM refs ----
const els = {
  subjectTabs: document.getElementById("subjectTabs"),
  chapterTabs: document.getElementById("chapterTabs"),
  main: document.getElementById("mainContent"),
  subtitle: document.getElementById("headerSubtitle")
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

  const firstId = SUBJECT_LOADERS[0].id;
  activateSubject(firstId);
}

async function loadAllSubjects() {
  for (const entry of SUBJECT_LOADERS) {
    try {
      const mod = await entry.loader();
      state.subjects[entry.id] = {
        id: entry.id,
        name: entry.name,
        icon: entry.icon,
        nav: entry.nav,
        chapters: mod.chapters || []
      };
    } catch (err) {
      console.warn(`Could not load subject "${entry.id}":`, err);
      // Register it with an error marker so user sees the tab
      state.subjects[entry.id] = {
        id: entry.id,
        name: entry.name,
        icon: entry.icon,
        nav: entry.nav,
        chapters: [],
        error: err.message
      };
    }
  }
}

// ==========================================================
// SUBJECT NAVIGATION
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
  state.activeDay = null;

  const subj = state.subjects[subjectId];
  renderSubjectTabs();

  if (!subj || subj.chapters.length === 0) {
    els.chapterTabs.innerHTML = "";
    els.main.innerHTML = `<div class="empty-state">
      ${subj && subj.error
        ? `Could not load ${subj.name}: ${subj.error}`
        : `No chapters yet in ${subj ? subj.name : "this subject"}.`}
    </div>`;
    els.subtitle.textContent = subj ? subj.name : "";
    return;
  }

  // For tab-nav subjects (Science), activate first chapter
  // For dropdown subjects (Math), also activate first chapter
  activateChapter(subj.chapters[0].id);
}

// ==========================================================
// CHAPTER NAVIGATION — two modes: tabs (Science) or dropdown (Math)
// ==========================================================
function renderChapterNav() {
  const subj = state.subjects[state.activeSubjectId];

  if (subj.nav === "dropdown") {
    renderChapterDropdown(subj);
  } else {
    renderChapterTabs(subj);
  }
}

function renderChapterTabs(subj) {
  els.chapterTabs.innerHTML = "";
  els.chapterTabs.className = "nav-tabs";

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

function renderChapterDropdown(subj) {
  els.chapterTabs.innerHTML = "";
  els.chapterTabs.className = "";

  const wrapper = document.createElement("div");
  wrapper.className = "nav-dropdown";

  const label = document.createElement("label");
  label.textContent = "📘 Choose a chapter:";
  label.setAttribute("for", "chapterSelect");

  const select = document.createElement("select");
  select.id = "chapterSelect";

  subj.chapters.forEach(ch => {
    const opt = document.createElement("option");
    opt.value = ch.id;
    opt.textContent = `${ch.name}`;
    if (ch.id === state.activeChapterId) opt.selected = true;
    select.appendChild(opt);
  });

  // Add final exam option
  const finalOpt = document.createElement("option");
  finalOpt.value = "__final__";
  finalOpt.textContent = "🎯 Final Exam (all chapters)";
  if (state.activeChapterId === "__final__") finalOpt.selected = true;
  select.appendChild(finalOpt);

  select.addEventListener("change", (e) => activateChapter(e.target.value));

  wrapper.appendChild(label);
  wrapper.appendChild(select);
  els.chapterTabs.appendChild(wrapper);
}

function activateChapter(chapterId) {
  state.activeChapterId = chapterId;
  state.activeDay = null;

  renderSubjectTabs();
  renderChapterNav();

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
async function renderChapterPage(subject, chapter) {
  els.main.innerHTML = "";

  // Study guide content
  const contentCard = document.createElement("div");
  contentCard.className = "card";
  contentCard.innerHTML = chapter.studyGuideHtml;
  els.main.appendChild(contentCard);

  // Daily homework picker (only for chapters that have dailyHomework)
  if (chapter.dailyHomework) {
    await renderDailyHomeworkPicker(subject, chapter);
  }

  // Mini-check quiz
  if (chapter.miniCheck && chapter.miniCheck.length > 0) {
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
      count: 5
    });
    miniEngine.start();
  }

  // Chapter quiz
  if (chapter.chapterQuiz && chapter.chapterQuiz.length > 0) {
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
      count: 15
    });
    chapterEngine.start();
  }
}

// ==========================================================
// DAILY HOMEWORK PICKER + SHEET
// ==========================================================
async function renderDailyHomeworkPicker(subject, chapter) {
  const todayDayNumber = getTodayDayNumber();
  const dayStatus = await getDayStatus(subject.id, chapter.id);

  // Build the picker card
  const pickerCard = document.createElement("div");
  pickerCard.className = "card";
  pickerCard.style.borderLeftColor = "var(--primary-blue)";

  const todayLabel = getDayName(todayDayNumber);

  let boxesHtml = "";
  dayStatus.forEach(s => {
    const label = getDayLabel(s.dayNumber);
    let classes = "dh-day-box";
    if (s.passed) classes += " dh-day-passed";
    else if (s.attempted) classes += " dh-day-failed";
    if (s.dayNumber === todayDayNumber) classes += " dh-day-today";

    const dayName = s.dayNumber === 6 || s.dayNumber === 7
      ? "Weekend Review"
      : `Day ${s.dayNumber}`;

    boxesHtml += `<button class="${classes}" data-day="${s.dayNumber}">
      <span class="dh-day-label">${label}${s.passed ? " ✓" : ""}</span>
      <span class="dh-day-name">${dayName}</span>
    </button>`;
  });

  pickerCard.innerHTML = `
    <h2>📅 Daily Homework</h2>
    <p>Today is <strong>${todayLabel}</strong>. Pick a day to practice. Days turn green when you score 85% or higher.</p>
    <div class="dh-picker">
      <div class="dh-picker-title">This week's practice sheets</div>
      <div class="dh-day-boxes">${boxesHtml}</div>
    </div>
    <div id="dhSheetContainer"></div>
  `;
  els.main.appendChild(pickerCard);

  // Wire up day boxes
  pickerCard.querySelectorAll(".dh-day-box").forEach(box => {
    box.addEventListener("click", async () => {
      const dayNumber = parseInt(box.dataset.day);
      // Re-render box states so current is highlighted
      pickerCard.querySelectorAll(".dh-day-box").forEach(b => b.classList.remove("dh-day-active"));
      box.classList.add("dh-day-active");
      await loadDailySheet(subject, chapter, dayNumber);
    });
  });

  // Auto-open today's sheet
  const todayBox = pickerCard.querySelector(`.dh-day-box[data-day="${todayDayNumber}"]`);
  if (todayBox) {
    todayBox.classList.add("dh-day-active");
    await loadDailySheet(subject, chapter, todayDayNumber);
  }
}

async function loadDailySheet(subject, chapter, dayNumber) {
  const container = document.getElementById("dhSheetContainer");
  if (!container) return;

  const dayConfig = chapter.dailyHomework[`day${dayNumber}`];
  if (!dayConfig) {
    container.innerHTML = `<div class="empty-state">No homework configured for day ${dayNumber}.</div>`;
    return;
  }

  // Prepare weekend review skills if needed
  let weekSkills = null;
  if (dayConfig.type === "weekendReview") {
    // Only allow if 3+ weekday days passed
    const ready = await isWeekendReady(subject.id, chapter);
    if (!ready) {
      container.innerHTML = `<div class="empty-state">
        Weekend Review unlocks after you pass at least 3 of the 5 weekday sheets.
      </div>`;
      return;
    }
    weekSkills = getWeekSkillsFromChapter(chapter);
  }

  const engine = new DailyHomework(container, {
    subject: subject.id,
    subjectName: subject.name,
    chapter: chapter.id,
    chapterName: chapter.name,
    dayNumber,
    dayConfig,
    weekSkills,
    onComplete: async () => {
      // Refresh the day box states after scoring
      await refreshDayBoxes(subject, chapter);
    }
  });

  engine.start();
}

async function refreshDayBoxes(subject, chapter) {
  const dayStatus = await getDayStatus(subject.id, chapter.id);
  const todayDayNumber = getTodayDayNumber();

  document.querySelectorAll(".dh-day-box").forEach(box => {
    const day = parseInt(box.dataset.day);
    const status = dayStatus.find(s => s.dayNumber === day);
    if (!status) return;

    box.classList.remove("dh-day-passed", "dh-day-failed", "dh-day-today");

    if (status.passed) box.classList.add("dh-day-passed");
    else if (status.attempted) box.classList.add("dh-day-failed");
    if (day === todayDayNumber) box.classList.add("dh-day-today");

    // Update the label
    const labelEl = box.querySelector(".dh-day-label");
    if (labelEl) {
      labelEl.textContent = getDayLabel(day) + (status.passed ? " ✓" : "");
    }
  });
}

// ==========================================================
// FINAL EXAM PAGE
// ==========================================================
function renderFinalExamPage() {
  const subj = state.subjects[state.activeSubjectId];
  els.subtitle.textContent = `${subj.name} — Final Exam`;

  els.main.innerHTML = "";

  // Only include chapters that have chapterQuiz
  const chaptersWithQuiz = subj.chapters.filter(ch => ch.chapterQuiz && ch.chapterQuiz.length > 0);

  if (chaptersWithQuiz.length === 0) {
    els.main.innerHTML = `<div class="empty-state">No chapters with quizzes yet.</div>`;
    return;
  }

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
    allChapters: chaptersWithQuiz.map(ch => ({
      chapter: ch.id,
      chapterName: ch.name,
      chapterQuiz: ch.chapterQuiz
    })),
    count: 20
  });
  engine.start();
}

// ==========================================================
// PARENT DASHBOARD
// ==========================================================
async function showParentDashboard() {
  const { renderParentDashboard } = await import("./parent-dashboard.js");
  renderParentDashboard(els.main, els.subtitle, state.subjects);
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