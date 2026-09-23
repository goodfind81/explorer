/* ==========================================================
   session-lock.js
   Supabase-backed quiz lock with multi-device takeover.

   All state lives in the quiz_locks table. All writes go
   through SQL functions (claim_quiz_lock, save_quiz_answer,
   save_quiz_progress, heartbeat_quiz_lock, submit_quiz_attempt).

   Public API (all async):
     claimLock(subject, chapter, type, questions, forceTakeover?)
       → { action, lock, needsTakeover }
     saveAnswer(subject, chapter, type, index, answer)
       → { ok }
     saveProgress(subject, chapter, type, currentIndex)
       → { ok }
     submitAttempt(subject, subjectName, chapter, chapterName, type, answers, duration)
       → { ok, score, total, percent, attempt_id }
     startHeartbeat(subject, chapter, type)
       → { stop() }
     getLock(subject, chapter, type)
       → lock or null  (for read-only checks)

   Device token:
     Each browser tab gets a unique token stored in sessionStorage.
     The token is included in every write. Server checks ownership.
   ========================================================== */

import { supabaseRpc, FAMILY_ID, SUPABASE_URL, SUPABASE_KEY } from "./supabase-config.js";

/* ==========================================================
   Device token (per browser tab, persists across reloads of
   that tab but not across tabs or devices)
   ========================================================== */

const TOKEN_KEY = "explorer_device_token";

function getDeviceToken() {
  try {
    let token = sessionStorage.getItem(TOKEN_KEY);
    if (!token) {
      token = "dev-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);
      sessionStorage.setItem(TOKEN_KEY, token);
    }
    return token;
  } catch (e) {
    // sessionStorage disabled — fall back to in-memory
    if (!getDeviceToken._mem) {
      getDeviceToken._mem = "mem-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);
    }
    return getDeviceToken._mem;
  }
}

/* ==========================================================
   RPC helper (defined locally to avoid a hard dep on
   supabase-config having supabaseRpc)
   ========================================================== */

async function rpc(fnName, args) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fnName}`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(args || {})
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`RPC ${fnName} failed (${res.status}): ${text}`);
  }
  return res.json();
}

/* ==========================================================
   Public API
   ========================================================== */

/**
 * Claim (or take over) today's lock for a quiz.
 * @param {string} subject
 * @param {string} chapter
 * @param {string} type - "mini" | "chapter"
 * @param {array} questions - normalized questions
 * @param {boolean} forceTakeover - if true, skip the takeover prompt
 * @returns {object} - { action, lock, needsTakeover }
 *   action: "created" | "resumed" | "completed" | "needs_takeover" | "took_over"
 */
export async function claimLock(subject, chapter, type, questions, forceTakeover = false) {
  const token = getDeviceToken();
  const result = await rpc("claim_quiz_lock", {
    p_family_id: FAMILY_ID,
    p_subject: subject,
    p_chapter: chapter,
    p_type: type,
    p_device_token: token,
    p_questions: questions,
    p_force_takeover: forceTakeover
  });
  return {
    action: result.action,
    lock: normalizeLockFromServer(result.lock),
    needsTakeover: result.action === "needs_takeover"
  };
}

/**
 * Save a single answer. Fire-and-forget from the caller.
 */
export async function saveAnswer(subject, chapter, type, index, answer) {
  const token = getDeviceToken();
  try {
    const result = await rpc("save_quiz_answer", {
      p_family_id: FAMILY_ID,
      p_subject: subject,
      p_chapter: chapter,
      p_type: type,
      p_device_token: token,
      p_index: index,
      p_answer: answer
    });
    return result || { ok: false, reason: "unknown" };
  } catch (err) {
    console.warn("saveAnswer failed:", err);
    return { ok: false, reason: "network" };
  }
}

/**
 * Save current question index.
 */
export async function saveProgress(subject, chapter, type, currentIndex) {
  const token = getDeviceToken();
  try {
    const result = await rpc("save_quiz_progress", {
      p_family_id: FAMILY_ID,
      p_subject: subject,
      p_chapter: chapter,
      p_type: type,
      p_device_token: token,
      p_current_index: currentIndex
    });
    return result || { ok: false };
  } catch (err) {
    console.warn("saveProgress failed:", err);
    return { ok: false };
  }
}

/**
 * Submit the final attempt. Server computes score.
 */
export async function submitAttempt(
  subject, subjectName, chapter, chapterName, type, answers, durationSec
) {
  const token = getDeviceToken();
  const result = await rpc("submit_quiz_attempt", {
    p_family_id: FAMILY_ID,
    p_subject: subject,
    p_subject_name: subjectName,
    p_chapter: chapter,
    p_chapter_name: chapterName,
    p_type: type,
    p_device_token: token,
    p_answers: answers,
    p_duration_sec: durationSec
  });
  return result;
}

/**
 * Read-only fetch of today's lock (for checking state without
 * claiming). Returns null if none exists for today.
 */
export async function getLock(subject, chapter, type) {
  const today = new Date().toISOString().slice(0, 10);
  const path =
    `quiz_locks?family_id=eq.${encodeURIComponent(FAMILY_ID)}` +
    `&subject=eq.${encodeURIComponent(subject)}` +
    `&chapter=eq.${encodeURIComponent(chapter)}` +
    `&type=eq.${encodeURIComponent(type)}` +
    `&date=eq.${today}&limit=1`;

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      }
    });
    if (!res.ok) return null;
    const rows = await res.json();
    if (!rows || rows.length === 0) return null;
    return normalizeLockFromServer(rows[0]);
  } catch (err) {
    console.warn("getLock failed:", err);
    return null;
  }
}

/**
 * Heartbeat — pings every 60 seconds while the quiz is open.
 * Returns { stop() } to end the heartbeat.
 */
export function startHeartbeat(subject, chapter, type, onLost) {
  const token = getDeviceToken();
  let stopped = false;

  async function ping() {
    if (stopped) return;
    try {
      const result = await rpc("heartbeat_quiz_lock", {
        p_family_id: FAMILY_ID,
        p_subject: subject,
        p_chapter: chapter,
        p_type: type,
        p_device_token: token
      });
      if (result && result.ok === false && typeof onLost === "function") {
        onLost(result.reason || "lost_ownership");
        stopped = true;
      }
    } catch (err) {
      console.warn("Heartbeat failed:", err);
    }
  }

  // First ping immediately, then every 60s
  ping();
  const timer = setInterval(ping, 60000);

  return {
    stop() {
      stopped = true;
      clearInterval(timer);
    }
  };
}

/* ==========================================================
   Server → client normalization
   ========================================================== */

function normalizeLockFromServer(row) {
  if (!row) return null;
  return {
    date: row.date,
    questions: row.questions,
    userAnswers: row.user_answers || [],
    currentIndex: row.current_index || 0,
    completed: row.completed === true,
    score: row.score,
    percent: row.percent,
    deviceToken: row.device_token,
    startedAt: row.started_at ? new Date(row.started_at).getTime() : Date.now(),
    completedAt: row.completed_at ? new Date(row.completed_at).getTime() : null
  };
}

export { getDeviceToken };