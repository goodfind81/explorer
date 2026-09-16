/* ==========================================================
   home-page.js
   Renders the home page: one card per subject with stars,
   current skill, and the last 5 homework scores.

   Reads from Storage to figure out:
     - Which skill is currently active in each subject
     - How many sessions passed on that skill (out of 5)
     - The last 5 homework attempts for each subject
   ========================================================== */

import { Storage } from "./storage.js";

/* ==========================================================
   Skill progress helpers
   ========================================================== */

const SESSIONS_REQUIRED = 5;
const PASSING_THRESHOLD = 85;

/**
 * For a subject, get the current skill and progress.
 * Returns:
 *   {
 *     chapterId, chapterName, skillKey, skillLabel,
 *     sessionsPassed, sessionsAttempted, mastered
 *   }
 */
async function getCurrentSkill(subjectId, chapters) {
  // Read progress meta saved by skill-tracker
  const key = `skillProgress_${subjectId}`;
  const saved = await Storage.getMeta(key);

  if (saved) {
    const chapter = chapters.find(c => c.id === saved.chapterId);
    if (chapter) {
      const skillMeta = getSkillMeta(chapter, saved.skillKey);
      return {
        chapterId: saved.chapterId,
        chapterName: chapter.name,
        skillKey: saved.skillKey,
        skillLabel: skillMeta ? skillMeta.label : saved.skillKey,
        sessionsPassed: saved.sessionsPassed || 0,
        sessionsAttempted: saved.sessionsAttempted || 0,
        mastered: (saved.sessionsPassed || 0) >= SESSIONS_REQUIRED
      };
    }
  }

  // No saved progress: default to first chapter, first skill
  if (chapters.length === 0) return null;
  const firstChapter = chapters[0];
  const firstSkill = firstChapter.skills && firstChapter.skills[0];
  if (!firstSkill) return null;
  return {
    chapterId: firstChapter.id,
    chapterName: firstChapter.name,
    skillKey: firstSkill.key,
    skillLabel: firstSkill.label,
    sessionsPassed: 0,
    sessionsAttempted: 0,
    mastered: false
  };
}

function getSkillMeta(chapter, skillKey) {
  if (!chapter.skills) return null;
  return chapter.skills.find(s => s.key === skillKey) || null;
}

/* ==========================================================
   Stars rendering
   ========================================================== */

function starsHtml(sessionsPassed) {
  const total = SESSIONS_REQUIRED;
  const filled = Math.min(sessionsPassed, total);
  let html = '<span class="stars">';
  for (let i = 0; i < total; i++) {
    html += i < filled
      ? '<span class="star filled">★</span>'
      : '<span class="star empty">★</span>';
  }
  html += '</span>';
  return html;
}

/* ==========================================================
   Recent scores rendering
   ========================================================== */

function recentScoresHtml(scores) {
  if (scores.length === 0) {
    return '<span class="no-scores">No homework yet</span>';
  }
  let html = '<span class="recent-scores">';
  scores.forEach(s => {
    const cls = s >= PASSING_THRESHOLD ? "score-good" : "score-low";
    html += `<span class="score-pill ${cls}">${s}%</span>`;
  });
  html += '</span>';
  return html;
}

/**
 * Last 5 homework scores for a subject (newest first).
 */
async function getLastFiveHomeworkScores(subjectId) {
  const all = await Storage.getAllAttempts();
  const filtered = all
    .filter(a => a.subject === subjectId && a.type === "homework")
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5);
  return filtered.map(a => a.percent);
}

/* ==========================================================
   Render
   ========================================================== */

export async function renderHomePage(container, subjects) {
  if (!subjects || Object.keys(subjects).length === 0) {
    container.innerHTML = `<div class="empty-state">No subjects available.</div>`;
    return;
  }

  // Build cards in a fixed order: Math first, then Science
  // (or whatever exists)
  const order = ["math", "science"];
  const subjectsToShow = [];

  order.forEach(id => {
    if (subjects[id]) subjectsToShow.push(subjects[id]);
  });
  // Add any other subjects not in the order list
  Object.values(subjects).forEach(s => {
    if (!order.includes(s.id)) subjectsToShow.push(s);
  });

  const cardsHtml = await Promise.all(subjectsToShow.map(buildSubjectCard));
  container.innerHTML = `<div class="subject-cards">${cardsHtml.join("")}</div>`;

  // Wire up click handlers
  container.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      const subjectId = card.dataset.subject;
      if (typeof window.App?.openSubject === "function") {
        window.App.openSubject(subjectId);
      }
    });
  });
}

async function buildSubjectCard(subject) {
  const current = await getCurrentSkill(subject.id, subject.chapters);
  const lastFive = await getLastFiveHomeworkScores(subject.id);

  const sessionsPassed = current ? current.sessionsPassed : 0;
  const skillLabel = current ? current.skillLabel : "Getting started";
  const chapterName = current ? current.chapterName : "";
  const mastered = current ? current.mastered : false;

  const progressText = mastered
    ? `✅ Mastered!`
    : `Progress: ${sessionsPassed} / ${SESSIONS_REQUIRED} sessions`;

  const icon = subject.icon || "📘";

  return `
    <div class="subject-card" data-subject="${subject.id}">
      <div class="subject-card-icon">${icon}</div>
      <div class="subject-card-title">${subject.name}</div>

      <div class="subject-card-skill">
        <div class="skill-label">${skillLabel}</div>
        <div class="skill-chapter">${chapterName}</div>
      </div>

      <div class="subject-card-stars">
        ${starsHtml(sessionsPassed)}
      </div>

      <div class="subject-card-progress">${progressText}</div>

      <div class="subject-card-recent">
        <div class="recent-label">Last 5 homework scores:</div>
        ${recentScoresHtml(lastFive)}
      </div>
    </div>
  `;
}