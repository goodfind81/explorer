/* ==========================================================
   home-page.js
   Renders the home page:
     - Points balance + streak at top
     - One card per subject with stars, current skill, and
       recent homework scores
     - Request payout button
     - Recent points history
   ========================================================== */

import { Storage } from "./storage.js";
import { getCurrentSkill } from "./skill-tracker.js";
import {
  getBalance,
  getCurrentStreak,
  getPointsToday,
  getTotalEarned,
  getTotalRedeemed,
  getRecentLedger,
  requestRedemption,
  getRateInfo
} from "./points.js";

const SESSIONS_REQUIRED = 5;
const PASSING_THRESHOLD = 85;

/* ==========================================================
   Stars
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

/* ==========================================================
   Data fetchers
   ========================================================== */

async function getLastFiveHomeworkScores(subjectId) {
  const all = await Storage.getAllAttempts();
  const filtered = all
    .filter(a => a.subject === subjectId && a.type === "homework")
    .slice(0, 5);
  return filtered.map(a => a.percent);
}

async function getPointsTodayForSubject(subjectId) {
  const ledger = await getRecentLedger(50);
  const today = new Date().toISOString().slice(0, 10);
  return ledger
    .filter(r => r.subject === subjectId && r.timestamp.slice(0, 10) === today && r.points > 0)
    .reduce((s, r) => s + r.points, 0);
}

/* ==========================================================
   Main render
   ========================================================== */

export async function renderHomePage(container, subjects) {
  if (!subjects || Object.keys(subjects).length === 0) {
    container.innerHTML = `<div class="empty-state">No subjects available.</div>`;
    return;
  }

  // Show loading state
  container.innerHTML = `<div class="loading-state">Loading your progress…</div>`;

  // Fetch all top-level data in parallel
  let balance = 0, streak = 0, pointsToday = 0, totalEarned = 0, redeemed = { dollars: 0, points: 0 }, ledger = [];
  try {
    [balance, streak, pointsToday, totalEarned, redeemed, ledger] = await Promise.all([
      getBalance(),
      getCurrentStreak(),
      getPointsToday(),
      getTotalEarned(),
      getTotalRedeemed(),
      getRecentLedger(10)
    ]);
  } catch (err) {
    console.warn("Could not load points data:", err);
  }

  // Build the reward banner HTML
  const rewardsHtml = buildRewardsBanner(balance, streak, pointsToday, totalEarned, redeemed);

  // Build subject cards
  const order = ["math", "science"];
  const subjectsToShow = [];
  order.forEach(id => { if (subjects[id]) subjectsToShow.push(subjects[id]); });
  Object.values(subjects).forEach(s => {
    if (!order.includes(s.id)) subjectsToShow.push(s);
  });

  let cardsHtml = "";
  try {
    const cardPromises = subjectsToShow.map(subj => buildSubjectCard(subj));
    const resolved = await Promise.all(cardPromises);
    cardsHtml = resolved.join("");
  } catch (err) {
    console.error("Could not render subject cards:", err);
    container.innerHTML = `<div class="empty-state">Could not load your subjects.</div>`;
    return;
  }

  // Recent points history
  const historyHtml = buildPointsHistory(ledger);

  container.innerHTML = `
    ${rewardsHtml}
    <div class="subject-cards">${cardsHtml}</div>
    ${historyHtml}
  `;

  // Wire up subject cards
  container.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      const subjectId = card.dataset.subject;
      if (typeof window.App?.openSubject === "function") {
        window.App.openSubject(subjectId);
      }
    });
  });

  // Wire up payout button
  const payoutBtn = container.querySelector("#payoutBtn");
  if (payoutBtn) {
    payoutBtn.addEventListener("click", () => {
      handleRequestPayout(balance);
    });
  }
}

/* ==========================================================
   Rewards banner
   ========================================================== */

function buildRewardsBanner(balance, streak, pointsToday, totalEarned, redeemed) {
  const rate = getRateInfo();
  const dollars = (balance / rate.pointsPerDollar).toFixed(2);
  const canPayout = balance >= rate.minRedemptionPoints;

  const streakHtml = streak >= 2
    ? `<span class="streak-badge">🔥 ${streak}-day streak</span>`
    : streak === 1
      ? `<span class="streak-badge streak-cold">🔥 Day 1</span>`
      : `<span class="streak-badge streak-cold">No streak yet</span>`;

  return `
    <div class="rewards-banner">
      <div class="rewards-left">
        <div class="rewards-balance">
          <div class="rewards-balance-value">${balance} <span class="rewards-balance-unit">pts</span></div>
          <div class="rewards-balance-label">≈ $${dollars}</div>
        </div>
        <div class="rewards-sub">
          ${streakHtml}
          ${pointsToday > 0 ? `<span class="points-today">+${pointsToday} today</span>` : ""}
        </div>
      </div>
      <div class="rewards-right">
        ${canPayout ? `
          <button class="payout-btn" id="payoutBtn">💵 Request payout</button>
          <div class="payout-hint">${rate.minRedemptionPoints} pts = $${(rate.minRedemptionPoints / rate.pointsPerDollar).toFixed(2)}</div>
        ` : `
          <div class="payout-hint">
            ${rate.minRedemptionPoints - balance} more points to cash out
          </div>
        `}
      </div>
    </div>
  `;
}

/* ==========================================================
   Subject cards
   ========================================================== */

async function buildSubjectCard(subject) {
  const [current, lastFive, pointsToday] = await Promise.all([
    getCurrentSkill(subject.id, subject.chapters).catch(() => null),
    getLastFiveHomeworkScores(subject.id).catch(() => []),
    getPointsTodayForSubject(subject.id).catch(() => 0)
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

      ${pointsToday > 0 ? `<div class="subject-points-today">+${pointsToday} today</div>` : ""}

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

/* ==========================================================
   Recent points history
   ========================================================== */

function buildPointsHistory(ledger) {
  if (!ledger || ledger.length === 0) return "";

  const rows = ledger.map(r => {
    const sign = r.points > 0 ? "+" : "";
    const cls = r.points > 0 ? "points-positive" : "points-negative";
    const when = new Date(r.timestamp).toLocaleDateString("en-US", {
      month: "short", day: "numeric"
    });
    return `
      <div class="points-history-row">
        <span class="points-history-when">${when}</span>
        <span class="points-history-reason">${r.reason || r.type}</span>
        <span class="points-history-amount ${cls}">${sign}${r.points}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="points-history-card">
      <div class="points-history-title">📜 Recent Points</div>
      <div class="points-history-list">${rows}</div>
    </div>
  `;
}

/* ==========================================================
   Request payout
   ========================================================== */

async function handleRequestPayout(balance) {
  const rate = getRateInfo();
  const maxDollars = Math.floor(balance / rate.pointsPerDollar);

  if (maxDollars < 1) {
    alert(`You need at least ${rate.pointsPerDollar} points to cash out.`);
    return;
  }

  const choice = prompt(
    `You have ${balance} points.\n\n` +
    `How many points do you want to cash out?\n` +
    `(${rate.pointsPerDollar} points = $1, max = ${maxDollars * rate.pointsPerDollar} points for $${maxDollars})`,
    String(Math.min(balance, rate.pointsPerDollar))
  );

  if (!choice) return;

  const points = parseInt(choice, 10);
  if (isNaN(points) || points <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  try {
    await requestRedemption(points);
    alert(`✅ Payout request sent! Ask a parent to approve it.\n\n${points} points → $${(points / rate.pointsPerDollar).toFixed(2)}`);
    // Reload the home page to show the pending state (though balance stays same until approved)
    window.location.reload();
  } catch (err) {
    alert("Could not request payout: " + err.message);
  }
}