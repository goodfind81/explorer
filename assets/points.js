/* ==========================================================
   points.js
   Reward system engine.

   Award rules (final):
     Homework:
       - 1 point per correct answer
       - +15 bonus if the attempt passes AND advances 5/5 progression
       - +30 bonus (instead of +15) if the attempt is 100%
       - Only the best attempt of the day counts
     Chapter quiz:
       - 1 point per correct answer
       - +5 bonus if 100%
       - No retries (enforced by session-lock)
     Mini-check:
       - 1 point per correct answer
       - No bonus
       - No retries (enforced by session-lock)
     Streak:
       - Disabled (bonus = 0)
       - Streak is still computed for the 🔥 badge on the home page

   Redemption: 100 points = $1
   ========================================================== */

import {
  supaGet,
  supaInsert,
  supaPatch,
  FAMILY_ID
} from "./supabase-config.js";

/* ==========================================================
   Constants
   ========================================================== */

const POINTS_PER_DOLLAR = 100;
const MIN_REDEMPTION_POINTS = 100;
const SESSIONS_REQUIRED = 5;
const PASSING_THRESHOLD = 85;
const STREAK_BONUS = 0;         // streaks disabled

const PASS_BONUS = 15;          // homework that advances 5/5 (85-99%)
const PERFECT_PASS_BONUS = 30;  // homework that advances 5/5 (100%) — replaces PASS_BONUS
const CHAPTER_QUIZ_PERFECT_BONUS = 5;

/* ==========================================================
   Award points for an attempt
   ========================================================== */

/**
 * Compute and award points for a single attempt.
 *
 * @param {object} attempt - { id, type, subject, score, total, percent, ... }
 * @param {object} context - { advanced: bool }
 *   advanced = did this attempt advance the 5/5 progression?
 * @returns {object} - { points, breakdown, ledgerRow }
 */
export async function awardPointsForAttempt(attempt, context = {}) {
  const { advanced = false } = context;

  const type = attempt.type;
  const percent = attempt.percent || 0;
  const correct = attempt.score || 0;

  let points = 0;
  const breakdown = {
    correct: 0,
    bonus: 0,
    perfectBonus: 0
  };

  // ---------- Per-correct points (homework + chapter + mini) ----------
  if (type === "homework" || type === "chapter" || type === "mini") {
    breakdown.correct = correct;
    points += correct;
  }

  // ---------- Homework bonus ----------
  if (type === "homework" && advanced) {
    if (percent === 100) {
      breakdown.perfectBonus = PERFECT_PASS_BONUS;
      points += PERFECT_PASS_BONUS;
    } else if (percent >= PASSING_THRESHOLD) {
      breakdown.bonus = PASS_BONUS;
      points += PASS_BONUS;
    }
  }

  // ---------- Chapter quiz bonus ----------
  if (type === "chapter" && percent === 100) {
    breakdown.perfectBonus = CHAPTER_QUIZ_PERFECT_BONUS;
    points += CHAPTER_QUIZ_PERFECT_BONUS;
  }

  // ---------- Mini-check has no bonus ----------

  if (points <= 0) {
    return { points: 0, breakdown, ledgerRow: null };
  }

  // Write ledger row
  const reason = buildReason(type, attempt, points, breakdown);
  const row = {
    id: `pts-${attempt.id}-${Date.now()}`,
    family_id: FAMILY_ID,
    subject: attempt.subject,
    type: type,
    attempt_id: attempt.id,
    points: points,
    reason: reason,
    metadata: {
      score: attempt.score,
      total: attempt.total,
      percent: percent,
      breakdown: breakdown,
      skillLabel: attempt.skillLabel || null,
      chapterName: attempt.chapterName || null
    }
  };

  try {
    const result = await supaInsert("points_ledger", row);
    return { points, breakdown, ledgerRow: result && result[0] ? result[0] : row };
  } catch (err) {
    console.error("awardPointsForAttempt failed:", err);
    throw err;
  }
}

function buildReason(type, attempt, points, breakdown) {
  const label = attempt.skillLabel || attempt.chapterName || type;

  const parts = [];
  if (breakdown.correct) parts.push(`${breakdown.correct} correct`);
  if (breakdown.bonus) parts.push(`${breakdown.bonus} pass bonus`);
  if (breakdown.perfectBonus) parts.push(`${breakdown.perfectBonus} perfect bonus`);

  if (type === "chapter") {
    return `Chapter quiz: ${label} — ${attempt.score}/${attempt.total} (${parts.join(", ")}) = +${points}`;
  }
  if (type === "mini") {
    return `Mini-check: ${label} — ${attempt.score}/${attempt.total} (${parts.join(", ")}) = +${points}`;
  }
  return `${label} — ${attempt.score}/${attempt.total} (${parts.join(", ")}) = +${points}`;
}

/* ==========================================================
   Award streak bonus
   ========================================================== */

/**
 * Called once per day after the first homework of the day.
 *
 * If STREAK_BONUS is 0 (disabled), returns null immediately
 * without inserting anything into the ledger.
 *
 * @param {string} dateISO - today's date in YYYY-MM-DD
 * @param {number} streakDays - current consecutive days count
 * @returns {object|null}
 */
export async function maybeAwardStreak(dateISO, streakDays) {
  // Streak bonuses disabled
  if (STREAK_BONUS === 0) return null;

  if (streakDays < 2) return null;

  // Check if a streak row already exists for today
  const existing = await supaGet(
    `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&type=eq.streak&timestamp=gte.${dateISO}T00:00:00&timestamp=lt.${dateISO}T23:59:59&limit=1`
  );
  if (existing && existing.length > 0) return null;

  const row = {
    id: `streak-${dateISO}-${Date.now()}`,
    family_id: FAMILY_ID,
    subject: null,
    type: "streak",
    attempt_id: null,
    points: STREAK_BONUS,
    reason: `🔥 ${streakDays}-day streak! (+${STREAK_BONUS})`,
    metadata: { streakDays: streakDays }
  };

  try {
    const result = await supaInsert("points_ledger", row);
    return { points: STREAK_BONUS, ledgerRow: result && result[0] ? result[0] : row };
  } catch (err) {
    console.error("maybeAwardStreak failed:", err);
    return null;
  }
}

/* ==========================================================
   Balance & ledger reads
   ========================================================== */

export async function getBalance() {
  try {
    const rows = await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&select=points`
    );
    return rows.reduce((sum, r) => sum + (r.points || 0), 0);
  } catch (err) {
    console.error("getBalance failed:", err);
    return 0;
  }
}

export async function getTotalEarned() {
  try {
    const rows = await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&points=gt.0&select=points`
    );
    return rows.reduce((sum, r) => sum + (r.points || 0), 0);
  } catch (err) {
    console.error("getTotalEarned failed:", err);
    return 0;
  }
}

export async function getTotalRedeemed() {
  try {
    const rows = await supaGet(
      `redemptions?family_id=eq.${encodeURIComponent(FAMILY_ID)}&status=eq.approved&select=points,dollars`
    );
    const dollars = rows.reduce((sum, r) => sum + parseFloat(r.dollars || 0), 0);
    const points = rows.reduce((sum, r) => sum + (r.points || 0), 0);
    return { dollars, points };
  } catch (err) {
    console.error("getTotalRedeemed failed:", err);
    return { dollars: 0, points: 0 };
  }
}

export async function getRecentLedger(limit = 20) {
  try {
    const rows = await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&order=timestamp.desc&limit=${limit}`
    );
    return rows;
  } catch (err) {
    console.error("getRecentLedger failed:", err);
    return [];
  }
}

export async function getPointsToday() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const rows = await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&points=gt.0&timestamp=gte.${today}T00:00:00&select=points`
    );
    return rows.reduce((sum, r) => sum + (r.points || 0), 0);
  } catch (err) {
    return 0;
  }
}

/* ==========================================================
   Streak calculation
   (Still runs even when STREAK_BONUS is 0 — used for the
    🔥 badge display on the home page.)
   ========================================================== */

export async function getCurrentStreak() {
  try {
    const rows = await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&type=eq.homework&points=gt.0&select=timestamp&order=timestamp.desc`
    );
    if (rows.length === 0) return 0;

    const dates = new Set();
    rows.forEach(r => {
      dates.add(r.timestamp.slice(0, 10));
    });

    const today = new Date();
    let streak = 0;
    let check = new Date(today);

    const todayISO = formatDateISO(today);
    if (!dates.has(todayISO)) {
      check.setDate(check.getDate() - 1);
      const yesterdayISO = formatDateISO(check);
      if (!dates.has(yesterdayISO)) return 0;
    }

    for (let i = 0; i < 365; i++) {
      const iso = formatDateISO(check);
      if (dates.has(iso)) {
        streak++;
        check.setDate(check.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  } catch (err) {
    console.error("getCurrentStreak failed:", err);
    return 0;
  }
}

function formatDateISO(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/* ==========================================================
   Redemptions
   ========================================================== */

export async function requestRedemption(points) {
  if (!Number.isInteger(points) || points < MIN_REDEMPTION_POINTS) {
    throw new Error(`Minimum redemption is ${MIN_REDEMPTION_POINTS} points.`);
  }
  if (points % POINTS_PER_DOLLAR !== 0) {
    throw new Error(`Points must be a multiple of ${POINTS_PER_DOLLAR}.`);
  }

  const balance = await getBalance();
  if (balance < points) {
    throw new Error(`Not enough points. Balance is ${balance}.`);
  }

  const dollars = points / POINTS_PER_DOLLAR;

  const row = {
    id: `red-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    family_id: FAMILY_ID,
    points: points,
    dollars: dollars,
    status: "pending"
  };

  const result = await supaInsert("redemptions", row);
  return result && result[0] ? result[0] : row;
}

export async function approveRedemption(redemptionId, parentNote = null) {
  const rows = await supaGet(
    `redemptions?id=eq.${encodeURIComponent(redemptionId)}&limit=1`
  );
  if (!rows || rows.length === 0) throw new Error("Redemption not found");
  const red = rows[0];

  if (red.status !== "pending") {
    throw new Error(`Redemption is already ${red.status}`);
  }

  await supaPatch(
    `redemptions?id=eq.${encodeURIComponent(redemptionId)}`,
    {
      status: "approved",
      decided_at: new Date().toISOString(),
      parent_note: parentNote
    }
  );

  const ledgerRow = {
    id: `red-deduct-${redemptionId}`,
    family_id: FAMILY_ID,
    subject: null,
    type: "redemption",
    attempt_id: null,
    points: -1 * red.points,
    reason: `💵 Payout approved: $${parseFloat(red.dollars).toFixed(2)} (-${red.points})`,
    metadata: { redemptionId: redemptionId }
  };

  await supaInsert("points_ledger", ledgerRow);
  return true;
}

export async function denyRedemption(redemptionId, parentNote = null) {
  await supaPatch(
    `redemptions?id=eq.${encodeURIComponent(redemptionId)}`,
    {
      status: "denied",
      decided_at: new Date().toISOString(),
      parent_note: parentNote
    }
  );
  return true;
}

export async function getPendingRedemptions() {
  try {
    return await supaGet(
      `redemptions?family_id=eq.${encodeURIComponent(FAMILY_ID)}&status=eq.pending&order=requested_at.desc`
    );
  } catch (err) {
    console.error("getPendingRedemptions failed:", err);
    return [];
  }
}

export async function getAllRedemptions(limit = 50) {
  try {
    return await supaGet(
      `redemptions?family_id=eq.${encodeURIComponent(FAMILY_ID)}&order=requested_at.desc&limit=${limit}`
    );
  } catch (err) {
    return [];
  }
}

export function getRateInfo() {
  return {
    pointsPerDollar: POINTS_PER_DOLLAR,
    minRedemptionPoints: MIN_REDEMPTION_POINTS,
    streakBonus: STREAK_BONUS,
    sessionsRequired: SESSIONS_REQUIRED,
    passingThreshold: PASSING_THRESHOLD,
    passBonus: PASS_BONUS,
    perfectPassBonus: PERFECT_PASS_BONUS,
    chapterQuizPerfectBonus: CHAPTER_QUIZ_PERFECT_BONUS
  };
}