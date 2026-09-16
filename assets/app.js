/* ==========================================================
   app.js
   Master router. Orchestrates the four views:
     - Home           (#homeView)
     - Subject        (#subjectView)
     - Homework       (#homeworkView)
     - Parent         (#parentView)

   Handles navigation between them, and wires up the
   subject cards, chapter dropdown, section progress, and
   the "Today's Homework" button.

   Also exposes window.App with global navigation helpers
   so inline onclick handlers in HTML work.
   ========================================================== */

import { Storage } from "./storage.js";
import { renderHomePage } from "./home-page.js";
import {
  getCurrentSkill,
  getChapterSkillStatus
} from "./skill-tracker.js";
import { renderHomeworkView } from "./homework-view.js";
import {
  renderChapterView,
  renderStudyGuideSection,
  renderQuickCheckSection,
  renderChapterQuizSection
} from "./chapter-view.js";

/* ==========================================================
   Subject registry
   ========================================================== */
const SUBJECT_LOADERS = [
  { id: "science", name: "Science", icon: "🔬", loader: () => import("../data/science/subject.js") },
  { id: "math",    name: "Math",    icon: "🔢", loader: () => import("../data/math/subject.js") }
];

/* ==========================================================
   App state
   ========================================================== */
const state = {
  subjects: {},
  activeSubjectId: null,
  activeChapterId: null,
  previousView: null   // for back-from-homework
};

/* ==========================================================
   DOM refs
   ========================================================== */
const els = {
  homeView: document.getElementById("homeView"),
  subjectView: document.getElementById("subjectView"),
  homeworkView: document.getElementById("homeworkView"),
  parentView: document.getElementById("parentView"),

  homeContent: document.getElementById("homeContent"),

  subjectTitle: document.getElementById("subjectTitle"),
  chapterSelect: document.getElementById("chapterSelect"),
  homeworkBtn: document.getElementById("homeworkBtn"),
  sectionProgress: document.getElementById("sectionProgress"),
  sectionContent: document.getElementById("sectionContent"),

  homeworkTitle: document.getElementById("homeworkTitle"),
  homeworkContent: document.getElementById("homeworkContent"),

  parentContent: document.getElementById("parentContent")
};

/* ==========================================================
   BOOT
   ========================================================== */
async function boot() {
  await Storage.init();
  await loadAllSubjects();

  if (Object.keys(state.subjects).length === 0) {
    els.homeContent.innerHTML = `<div class="empty-state">No subjects found. Please check the data folder.</div>`;
    return;
  }

  showView("home");
  await renderHomePage(els.homeContent, state.subjects);
}

async function loadAllSubjects() {
  for (const entry of SUBJECT_LOADERS) {
    try {
      const mod = await entry.loader();
      state.subjects[entry.id] = {
        id: entry.id,
        name: entry.name,
        icon: entry.icon,
        chapters: mod.chapters || []
      };
    } catch (err) {
      console.warn(`Could not load subject "${entry.id}":`, err);
      state.subjects[entry.id] = {
        id: entry.id,
        name: entry.name,
        icon: entry.icon,
        chapters: [],
        error: err.message
      };
    }
  }
}

/* ==========================================================
   VIEW SWITCHING
   ========================================================== */
function showView(which) {
  const views = {
    home: els.homeView,
    subject: els.subjectView,
    homework: els.homeworkView,
    parent: els.parentView
  };
  Object.values(views).forEach(v => { if (v) v.style.display = "none"; });
  if (views[which]) views[which].style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function goHome() {
  showView("home");
  // Re-render home so stars and progress are fresh
  await renderHomePage(els.homeContent, state.subjects);
}

/* ==========================================================
   SUBJECT VIEW
   ========================================================== */
async function openSubject(subjectId) {
  const subj = state.subjects[subjectId];
  if (!subj || subj.chapters.length === 0) {
    alert(`No chapters available for ${subj ? subj.name : "this subject"}.`);
    return;
  }

  state.activeSubjectId = subjectId;

  // Populate toolbar
  els.subjectTitle.textContent = `${subj.icon} ${subj.name}`;

  // Build chapter dropdown
  els.chapterSelect.innerHTML = "";
  subj.chapters.forEach(ch => {
    const opt = document.createElement("option");
    opt.value = ch.id;
    opt.textContent = ch.name;
    els.chapterSelect.appendChild(opt);
  });

  // Determine which chapter to default to: the one with the current skill
  const current = await getCurrentSkill(subjectId, subj.chapters);
  const defaultChapterId = current ? current.chapterId : subj.chapters[0].id;
  els.chapterSelect.value = defaultChapterId;

  // Wire chapter dropdown
  els.chapterSelect.onchange = (e) => {
    activateChapter(e.target.value);
  };

  // Show subject view
  showView("subject");

  // Activate the default chapter
  await activateChapter(defaultChapterId);
}

async function activateChapter(chapterId) {
  state.activeChapterId = chapterId;

  const subj = state.subjects[state.activeSubjectId];
  const chapter = subj.chapters.find(c => c.id === chapterId);
  if (!chapter) return;

  // Update the dropdown to reflect this (in case we're called programmatically)
  els.chapterSelect.value = chapterId;

  // Section config
  const sections = [
    {
      key: "study",
      label: "Study Guide",
      render: (container, ctx) => renderStudyGuideSection(container, ctx)
    },
    {
      key: "check",
      label: "Quick Check",
      render: (container, ctx) => renderQuickCheckSection(container, ctx)
    },
    {
      key: "quiz",
      label: "Chapter Quiz",
      render: (container, ctx) => renderChapterQuizSection(container, ctx)
    }
  ];

  renderChapterView(els.sectionContent, {
    subject: subj,
    chapter,
    sections
  });
}

/* ==========================================================
   HOMEWORK VIEW
   ========================================================== */
async function openHomework() {
  const subj = state.subjects[state.activeSubjectId];
  if (!subj) return;

  state.previousView = "subject";

  els.homeworkTitle.textContent = `${subj.icon} ${subj.name} — Today's Homework`;

  showView("homework");

  await renderHomeworkView(els.homeworkContent, {
    subject: subj,
    chapters: subj.chapters
  });
}

function backFromHomework() {
  // Go back to whatever view launched homework
  if (state.previousView === "subject" && state.activeSubjectId) {
    showView("subject");
  } else {
    goHome();
  }
}

/* ==========================================================
   PARENT DASHBOARD
   ========================================================== */
async function showParentDashboard() {
  const mod = await import("./parent-dashboard.js");
  showView("parent");
  await mod.renderParentDashboard(els.parentContent, state.subjects);
}

/* ==========================================================
   Expose global helpers for inline HTML onclick
   ========================================================== */
window.App = {
  goHome,
  openSubject,
  openHomework,
  backFromHomework,
  showParentDashboard
};

/* ==========================================================
   KICK OFF
   ========================================================== */
boot().catch(err => {
  console.error("Boot failed:", err);
  els.homeContent.innerHTML = `
    <div class="empty-state">
      <strong>Something went wrong starting the app.</strong><br>
      ${err.message}<br><br>
      Make sure you're running from a local server (not opening the file directly).
    </div>
  `;
});