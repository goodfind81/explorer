/* ==========================================================
   app.js
   Master router. Orchestrates the four views:
     - Login          (if not signed in)
     - Home           (#homeView)
     - Subject        (#subjectView)
     - Homework       (#homeworkView)
     - Parent         (#parentView)

   Uses auth.js to determine whether to show the login
   screen and what role the user is in. Role determines:
     - Whether the Parent Dashboard button is shown
     - Whether the parent view is accessible
   ========================================================== */

import { Storage } from "./storage.js";
import {
  getSession,
  renderLoginScreen,
  isParent
} from "./auth.js";
import { renderHomePage } from "./home-page.js";
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
   State
   ========================================================== */
const state = {
  subjects: {},
  activeSubjectId: null,
  activeChapterId: null,
  previousView: null,
  session: null
};

/* ==========================================================
   DOM refs
   ========================================================== */
const els = {
  homeView: document.getElementById("homeView"),
  subjectView: document.getElementById("subjectView"),
  homeworkView: document.getElementById("homeworkView"),
  parentView: document.getElementById("parentView"),
  loginView: document.getElementById("loginView"),

  homeContent: document.getElementById("homeContent"),
  subjectTitle: document.getElementById("subjectTitle"),
  chapterSelect: document.getElementById("chapterSelect"),
  homeworkBtn: document.getElementById("homeworkBtn"),
  sectionContent: document.getElementById("sectionContent"),
  homeworkTitle: document.getElementById("homeworkTitle"),
  homeworkContent: document.getElementById("homeworkContent"),
  parentContent: document.getElementById("parentContent"),
  roleIndicator: document.getElementById("roleIndicator")
};

/* ==========================================================
   BOOT
   ========================================================== */
async function boot() {
  await Storage.init();

  state.session = getSession();

  if (!state.session) {
    // Show login screen, hide everything else
    showView("login");
    renderLoginScreen(els.loginView, async (session) => {
      state.session = session;
      await boot();
    });
    return;
  }

  // Signed in — load subjects and show home
  await loadAllSubjects();
  applyRoleToUI();

  if (Object.keys(state.subjects).length === 0) {
    els.homeContent.innerHTML = `<div class="empty-state">No subjects found. Please check the data folder.</div>`;
    showView("home");
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

/**
 * Show / hide parent-only UI based on role.
 */
function applyRoleToUI() {
  const parent = isParent(state.session);

  // Parent Dashboard button — visible only to parents
  document.querySelectorAll(".parent-only").forEach(el => {
    el.style.display = parent ? "" : "none";
  });

  // Role indicator in the footer (both roles see it, but content differs)
  if (els.roleIndicator) {
    const emoji = parent ? "👤" : "🎒";
    const label = parent ? "Parent mode" : "Student mode";
    els.roleIndicator.innerHTML = `
      <span class="role-label">${emoji} ${label}</span>
      <button class="logout-btn" id="logoutBtn">Sign out</button>
    `;
    const btn = els.roleIndicator.querySelector("#logoutBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        if (confirm("Sign out? You'll need to enter the code again next time.")) {
          localStorage.removeItem("explorer_familyCode");
          localStorage.removeItem("explorer_role");
          window.location.reload();
        }
      });
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
    parent: els.parentView,
    login: els.loginView
  };
  Object.values(views).forEach(v => { if (v) v.style.display = "none"; });
  if (views[which]) views[which].style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function goHome() {
  showView("home");
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

  els.subjectTitle.textContent = `${subj.icon} ${subj.name}`;

  els.chapterSelect.innerHTML = "";
  subj.chapters.forEach(ch => {
    const opt = document.createElement("option");
    opt.value = ch.id;
    opt.textContent = ch.name;
    els.chapterSelect.appendChild(opt);
  });

  let defaultChapterId = subj.chapters[0].id;
  try {
    const { getCurrentSkill } = await import("./skill-tracker.js");
    const current = await getCurrentSkill(subjectId, subj.chapters);
    if (current) defaultChapterId = current.chapterId;
  } catch (err) {
    console.warn("Could not read current skill:", err);
  }
  els.chapterSelect.value = defaultChapterId;

  els.chapterSelect.onchange = (e) => {
    activateChapter(e.target.value);
  };

  showView("subject");
  await activateChapter(defaultChapterId);
}

async function activateChapter(chapterId) {
  state.activeChapterId = chapterId;

  const subj = state.subjects[state.activeSubjectId];
  const chapter = subj.chapters.find(c => c.id === chapterId);
  if (!chapter) return;

  els.chapterSelect.value = chapterId;

  const sections = [
    { key: "study", label: "Study Guide", render: renderStudyGuideSection },
    { key: "check", label: "Quick Check", render: renderQuickCheckSection },
    { key: "quiz",  label: "Chapter Quiz", render: renderChapterQuizSection }
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
  if (!isParent(state.session)) {
    alert("Parent access only.");
    return;
  }
  const mod = await import("./parent-dashboard.js");
  showView("parent");
  await mod.renderParentDashboard(els.parentContent, state.subjects);
}

/* ==========================================================
   Expose globally
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
  document.body.innerHTML = `
    <div style="padding: 40px; text-align: center; font-family: sans-serif;">
      <h2>Something went wrong.</h2>
      <p>${err.message}</p>
    </div>
  `;
});