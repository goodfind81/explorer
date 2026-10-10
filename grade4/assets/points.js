/* ==========================================================
   points.js

   Points engine — reduced scope.

   Chapters and mini-checks:
     Points are awarded AUTOMATICALLY via a Postgres trigger
     when the attempt is inserted. This file does NOT award
     them. Client just reads the balance.

   Homework:
     Still awarded client-side because the pass bonus depends
     on whether the attempt advanced the 5/5 progression.
     Client calls awardPointsForAttempt() after scoring.

   Streaks:
     Disabled. Streak is still computed for display.

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
const STREAK_BONUS = 0;

const PASS_BONUS = 15;
const PERFECT_PASS_BONUS = 30;

/* ==========================================================
   Homework points (client-side)
   Chapters and mini-checks skip this function entirely —
   they go through the DB trigger.
   ========================================================== */

export async function awardPointsForAttempt(attempt, context = {}) {
  // Only homework needs client-side award now
  if (attempt.type !== "homework") {
    // Already awarded by trigger. Return a no-op result.
    return { points: 0, breakdown: null, ledgerRow: null, skipped: true };
  }

  const { advanced = false } = context;
  const percent = attempt.percent || 0;
  const correct = attempt.score || 0;

  let points = correct;
  const breakdown = { correct, bonus: 0, perfectBonus: 0 };

  if (advanced) {
    if (percent === 100) {
      breakdown.perfectBonus = PERFECT_PASS_BONUS;
      points += PERFECT_PASS_BONUS;
    } else if (percent >= PASSING_THRESHOLD) {
      breakdown.bonus = PASS_BONUS;
      points += PASS_BONUS;
    }
  }

  if (points <= 0) {
    return { points: 0, breakdown, ledgerRow: null };
  }

  const label = attempt.skillLabel || attempt.chapterName || "homework";
  const parts = [];
  if (breakdown.correct) parts.push(`${breakdown.correct} correct`);
  if (breakdown.bonus) parts.push(`${breakdown.bonus} pass bonus`);
  if (breakdown.perfectBonus) parts.push(`${breakdown.perfectBonus} perfect bonus`);
  const reason = `${label} — ${attempt.score}/${attempt.total} (${parts.join(", ")}) = +${points}`;

  const row = {
    id: `pts-${attempt.id}-${Date.now()}`,
    family_id: FAMILY_ID,
    subject: attempt.subject,
    type: "homework",
    attempt_id: attempt.id,
    points: points,
    reason: reason,
    metadata: {
      score: attempt.score,
      total: attempt.total,
      percent: percent,
      breakdown: breakdown,
      skillLabel: attempt.skillLabel || null
    }
  };

  try {
    const result = await supaInsert("points_ledger", row);
    return { points, breakdown, ledgerRow: result && result[0] ? result[0] : row };
  } catch (err) {
    console.error("awardPointsForAttempt (homework) failed:", err);
    throw err;
  }
}

/* ==========================================================
   Streak (disabled bonus, still computed for display)
   ========================================================== */

export async function maybeAwardStreak() {
  return null;   // STREAK_BONUS = 0
}

export async function getCurrentStreak() {
  try {
    const rows = await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&type=eq.homework&points=gt.0&select=timestamp&order=timestamp.desc`
    );
    if (rows.length === 0) return 0;

    const dates = new Set();
    rows.forEach(r => dates.add(r.timestamp.slice(0, 10)));

    const today = new Date();
    let check = new Date(today);
    const todayISO = formatDateISO(today);

    if (!dates.has(todayISO)) {
      check.setDate(check.getDate() - 1);
      const yesterdayISO = formatDateISO(check);
      if (!dates.has(yesterdayISO)) return 0;
    }

    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const iso = formatDateISO(check);
      if (dates.has(iso)) {
        streak++;
        check.setDate(check.getDate() - 1);
      } else break;
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
   Balance & ledger readers
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
    return 0;
  }
}

export async function getTotalRedeemed() {
  try {
    const rows = await supaGet(
      `redemptions?family_id=eq.${encodeURIComponent(FAMILY_ID)}&status=eq.approved&select=points,dollars`
    );
    const dollars = rows.reduce((s, r) => s + parseFloat(r.dollars || 0), 0);
    const points = rows.reduce((s, r) => s + (r.points || 0), 0);
    return { dollars, points };
  } catch (err) {
    return { dollars: 0, points: 0 };
  }
}

export async function getRecentLedger(limit = 20) {
  try {
    return await supaGet(
      `points_ledger?family_id=eq.${encodeURIComponent(FAMILY_ID)}&order=timestamp.desc&limit=${limit}`
    );
  } catch (err) {
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
   Redemptions (unchanged)
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
    perfectPassBonus: PERFECT_PASS_BONUS
  };
}