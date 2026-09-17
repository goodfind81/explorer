/* ==========================================================
   session-lock.js
   Manages daily quiz locks for mini-checks and chapter quizzes.

   Problem being solved:
     Without this, a kid can open a mini-check, answer a couple
     questions, refresh the page, and the quiz restarts from
     scratch — infinite retries.

   Solution:
     Each (subject, chapter, type) pair can have ONE session per
     calendar day. The session is stored in localStorage:
       - questions (so they don't change on reload)
       - user answers (so partial progress isn't lost)
       - completed flag (so it can't be re-done until tomorrow)

   Storage key format:
     quizLock_<subject>_<chapter>_<type>

   Value shape:
     {
       date: "2026-09-16",
       questions: [ { question, options, correct, explanation } ],
       userAnswers: [ "...", "...", null, ... ],  // null = unanswered
       currentIndex: 2,
       completed: false,
       score: null,
       percent: null,
       startedAt: 1712345678901
     }

   Public API:
     - getLock(subject, chapter, type)
       Returns the current lock object, or null if none exists for today.

     - createLock(subject, chapter, type, questions)
       Creates a new lock for today. Clears any stale lock.

     - saveAnswer(subject, chapter, type, index, answer)
       Persists a single answer.

     - saveProgress(subject, chapter, type, currentIndex)
       Persists which question they were on.

     - completeLock(subject, chapter, type, score, percent)
       Marks the lock complete.

     - clearLock(subject, chapter, type)
       Removes the lock (used on new day or manual reset).

     - isCompletedToday(subject, chapter, type)
       Quick check.

   Auto-cleanup:
     On any read, if the stored lock's date is not today, it's
     considered stale and removed automatically.
   ========================================================== */

const KEY_PREFIX = "quizLock_";

/* ==========================================================
   Helpers
   ========================================================== */

function storageKey(subject, chapter, type) {
  return `${KEY_PREFIX}${subject}_${chapter}_${type}`;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function safeRead(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn("session-lock: could not read", key, err);
    return null;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("session-lock: could not write", key, err);
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {}
}

/* ==========================================================
   Public API
   ========================================================== */

/**
 * Get the lock for today, or null if none / stale.
 * Stale locks (from previous days) are automatically removed.
 */
export function getLock(subject, chapter, type) {
  const key = storageKey(subject, chapter, type);
  const lock = safeRead(key);
  if (!lock) return null;

  // If the lock is from a previous day, remove it
  if (lock.date !== todayISO()) {
    safeRemove(key);
    return null;
  }

  return lock;
}

/**
 * Create a new lock for today with the given questions.
 * Overwrites any existing lock.
 *
 * @param {string} subject - "math" | "science"
 * @param {string} chapter - chapter id
 * @param {string} type - "mini" | "chapter"
 * @param {Array} questions - the question pool (5 for mini, 15 for chapter)
 * @returns {object} the created lock
 */
export function createLock(subject, chapter, type, questions) {
  const lock = {
    date: todayISO(),
    questions: questions,
    userAnswers: new Array(questions.length).fill(null),
    currentIndex: 0,
    completed: false,
    score: null,
    percent: null,
    startedAt: Date.now()
  };
  safeWrite(storageKey(subject, chapter, type), lock);
  return lock;
}

/**
 * Save a single answer.
 */
export function saveAnswer(subject, chapter, type, index, answer) {
  const key = storageKey(subject, chapter, type);
  const lock = safeRead(key);
  if (!lock || lock.date !== todayISO()) return false;

  if (index < 0 || index >= lock.userAnswers.length) return false;
  lock.userAnswers[index] = answer;
  safeWrite(key, lock);
  return true;
}

/**
 * Save which question index the user is currently on.
 */
export function saveProgress(subject, chapter, type, currentIndex) {
  const key = storageKey(subject, chapter, type);
  const lock = safeRead(key);
  if (!lock || lock.date !== todayISO()) return false;

  lock.currentIndex = currentIndex;
  safeWrite(key, lock);
  return true;
}

/**
 * Mark a lock complete with final score.
 */
export function completeLock(subject, chapter, type, score, percent) {
  const key = storageKey(subject, chapter, type);
  const lock = safeRead(key);
  if (!lock || lock.date !== todayISO()) return false;

  lock.completed = true;
  lock.score = score;
  lock.percent = percent;
  lock.completedAt = Date.now();
  safeWrite(key, lock);
  return true;
}

/**
 * Remove a lock entirely.
 */
export function clearLock(subject, chapter, type) {
  safeRemove(storageKey(subject, chapter, type));
}

/**
 * Quick check: has this quiz already been completed today?
 */
export function isCompletedToday(subject, chapter, type) {
  const lock = getLock(subject, chapter, type);
  return lock !== null && lock.completed === true;
}

/**
 * Debug helper — dump all locks (useful for testing).
 */
export function dumpAllLocks() {
  const result = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(KEY_PREFIX)) {
        result[key] = JSON.parse(localStorage.getItem(key));
      }
    }
  } catch (err) {}
  return result;
}