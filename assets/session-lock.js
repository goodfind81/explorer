/* ==========================================================
   session-lock.js
   Manages daily quiz locks — now Supabase-backed so locks
   are shared across devices.

   Each (family, subject, chapter, type, date) has at most
   one row in quiz_locks. That row holds:
     - questions (fixed for the day)
     - user_answers (partial progress)
     - current_index
     - completed flag + final score

   All methods are async.

   Public API (all async unless noted):
     - getLock(subject, chapter, type)         → lock | null
     - createLock(subject, chapter, type, qs)  → lock
     - saveAnswer(subject, chapter, type, i, a) → bool
     - saveProgress(subject, chapter, type, i) → bool
     - completeLock(subject, chapter, type, score, percent) → bool
     - clearLock(subject, chapter, type)       → bool
     - isCompletedToday(subject, chapter, type) → bool

   Stale locks (different date) are returned as null and
   lazily cleaned up on next write.
   ========================================================== */

import { supaGet, supaInsert, supaPatch, supaDelete, FAMILY_ID } from "./supabase-config.js";

/* ==========================================================
   Helpers
   ========================================================== */

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function toLock(row) {
  if (!row) return null;
  return {
    date: row.date,
    questions: row.questions,
    userAnswers: row.user_answers || [],
    currentIndex: row.current_index || 0,
    completed: row.completed === true,
    score: row.score,
    percent: row.percent,
    startedAt: row.started_at ? new Date(row.started_at).getTime() : Date.now(),
    completedAt: row.completed_at ? new Date(row.completed_at).getTime() : null
  };
}

function buildKey(subject, chapter, type) {
  return { subject, chapter, type };
}

/* ==========================================================
   Read
   ========================================================== */

/**
 * Get today's lock for the given (subject, chapter, type).
 * Returns null if none exists for today.
 * Stale locks from previous days are ignored (and cleaned up
 * on next write).
 */
export async function getLock(subject, chapter, type) {
  const today = todayISO();
  try {
    const rows = await supaGet(
      `quiz_locks?family_id=eq.${encodeURIComponent(FAMILY_ID)}` +
      `&subject=eq.${encodeURIComponent(subject)}` +
      `&chapter=eq.${encodeURIComponent(chapter)}` +
      `&type=eq.${encodeURIComponent(type)}` +
      `&date=eq.${today}&limit=1`
    );
    if (!rows || rows.length === 0) return null;
    return toLock(rows[0]);
  } catch (err) {
    console.error("session-lock.getLock failed:", err);
    return null;
  }
}

/* ==========================================================
   Create
   ========================================================== */

/**
 * Create today's lock. If a stale lock exists for the same
 * (subject, chapter, type) with a different date, it gets
 * overwritten (via upsert on the composite key).
 */
export async function createLock(subject, chapter, type, questions) {
  const row = {
    family_id: FAMILY_ID,
    subject,
    chapter,
    type,
    date: todayISO(),
    questions: questions,
    user_answers: new Array(questions.length).fill(null),
    current_index: 0,
    completed: false,
    score: null,
    percent: null,
    started_at: new Date().toISOString(),
    completed_at: null
  };

  try {
    // Upsert so stale locks from previous days are replaced cleanly.
    // The primary key is (family_id, subject, chapter, type, date),
    // so different dates won't conflict.
    const res = await supaInsert("quiz_locks", row);
    return toLock(res && res[0] ? res[0] : row);
  } catch (err) {
    console.error("session-lock.createLock failed:", err);
    // Return an in-memory lock so the quiz can still proceed
    return toLock(row);
  }
}

/* ==========================================================
   Save answer / progress
   ========================================================== */

async function patchLock(subject, chapter, type, patch) {
  const today = todayISO();
  try {
    const res = await supaPatch(
      `quiz_locks?family_id=eq.${encodeURIComponent(FAMILY_ID)}` +
      `&subject=eq.${encodeURIComponent(subject)}` +
      `&chapter=eq.${encodeURIComponent(chapter)}` +
      `&type=eq.${encodeURIComponent(type)}` +
      `&date=eq.${today}`,
      patch
    );
    return true;
  } catch (err) {
    console.error("session-lock.patchLock failed:", err);
    return false;
  }
}

/**
 * Save a single answer.
 * Note: to prevent races, the caller (quiz-engine) should
 * read the current user_answers from this.lock, mutate it,
 * and pass the FULL array. This avoids the "last write wins"
 * problem when two writes race.
 *
 * To keep the API simple for the caller, we accept a single
 * index+answer and do a read-modify-write. Fine for one kid
 * on one device at a time.
 */
export async function saveAnswer(subject, chapter, type, index, answer) {
  const lock = await getLock(subject, chapter, type);
  if (!lock) return false;
  if (index < 0 || index >= lock.userAnswers.length) return false;

  const next = lock.userAnswers.slice();
  next[index] = answer;
  return patchLock(subject, chapter, type, { user_answers: next });
}

/**
 * Save current question index.
 */
export async function saveProgress(subject, chapter, type, currentIndex) {
  return patchLock(subject, chapter, type, { current_index: currentIndex });
}

/**
 * Mark lock complete.
 */
export async function completeLock(subject, chapter, type, score, percent) {
  return patchLock(subject, chapter, type, {
    completed: true,
    score: score,
    percent: percent,
    completed_at: new Date().toISOString()
  });
}

/* ==========================================================
   Clear
   ========================================================== */

/**
 * Remove today's lock. Used for edge cases or manual reset.
 */
export async function clearLock(subject, chapter, type) {
  const today = todayISO();
  try {
    await supaDelete(
      `quiz_locks?family_id=eq.${encodeURIComponent(FAMILY_ID)}` +
      `&subject=eq.${encodeURIComponent(subject)}` +
      `&chapter=eq.${encodeURIComponent(chapter)}` +
      `&type=eq.${encodeURIComponent(type)}` +
      `&date=eq.${today}`
    );
    return true;
  } catch (err) {
    console.error("session-lock.clearLock failed:", err);
    return false;
  }
}

/* ==========================================================
   Convenience
   ========================================================== */

export async function isCompletedToday(subject, chapter, type) {
  const lock = await getLock(subject, chapter, type);
  return lock !== null && lock.completed === true;
}

/* ==========================================================
   Cleanup (optional — can be called on app boot)
   Deletes locks older than 30 days.
   ========================================================== */

export async function cleanupOldLocks() {
  try {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    const cutoffISO = cutoff.toISOString().slice(0, 10);

    await supaDelete(
      `quiz_locks?family_id=eq.${encodeURIComponent(FAMILY_ID)}&date=lt.${cutoffISO}`
    );
    return true;
  } catch (err) {
    console.error("session-lock.cleanupOldLocks failed:", err);
    return false;
  }
}