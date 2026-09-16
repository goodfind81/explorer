/* ==========================================================
   home-page.js
   Renders the home page: one card per subject with stars,
   current skill, and the last 5 homework scores.

   Reads from Storage (Supabase) to figure out:
     - Which skill is currently active in each subject
     - How many sessions passed on that skill (out of 5)
     - The last 5 homework attempts for each subject

   No changes in shape from the previous version — the
   Storage API is the same, it just hits Supabase now.
   ========================================================== */

import { Storage } from "./storage.js";
import { getCurrentSkill } from "./skill-tracker.js";

const SESSIONS_REQUIRED = 5;
const PASSING_THRESHOLD = 85;

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
    .slice(0, 5); // already sorted newest first by Storage
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

  // Fixed order: Math first, then Science
  const order = ["math", "science"];
  const subjectsToShow = [];

  order.forEach(id => {
    if (subjects[id]) subjectsToShow.push(subjects[id]);
  });
  Object.values(subjects).forEach(s => {
    if (!order.includes(s.id)) subjectsToShow.push(s);
  });

  // Show a loading state while we hit Supabase
  container.innerHTML = `<div class="loading-state">Loading your progress…</div>`;

  // Fetch data for each subject in parallel
  try {
    const cardHtmls = await Promise.all(
      subjectsToShow.map(subj => buildSubjectCard(subj))
    );
    container.innerHTML = `<div class="subject-cards">${cardHtmls.join("")}</div>`;
  } catch (err) {
    console.error("Could not render home page:", err);
    container.innerHTML = `<div class="empty-state">
      Could not load your progress.<br>
      Check your internet connection and try again.
    </div>`;
    return;
  }

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
  // Read current skill + last 5 scores in parallel
  const [current, lastFive] = await Promise.all([
    getCurrentSkill(subject.id, subject.chapters).catch(() => null),
    getLastFiveHomeworkScores(subject.id).catch(() => [])
  ]);

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