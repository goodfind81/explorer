/* ==========================================================
   storage.js
   Supabase-backed storage layer.

   Replaces the previous IndexedDB implementation. All
   attempts and skill progress now live in Supabase.

   Public API is IDENTICAL to the previous version, so
   callers (quiz-engine, homework-view, parent-dashboard,
   skill-tracker) don't need to change.

   The only difference: everything is now async, and reads
   are scoped by FAMILY_ID.
   ========================================================== */

import {
  supaGet,
  supaInsert,
  supaUpsert,
  supaDelete,
  FAMILY_ID
} from "./supabase-config.js";

export const Storage = {
  /**
   * No-op — was used for IndexedDB setup.
   * Kept so callers don't break.
   */
  async init() {
    return true;
  },

  /* ==========================================================
     Attempts
     ========================================================== */

  /**
   * Save a quiz/homework attempt.
   * @param {Object} attempt
   */
  async saveAttempt(attempt) {
    // Shape matches our Supabase table columns
    const row = {
      id: attempt.id || `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      family_id: FAMILY_ID,
      type: attempt.type,
      subject: attempt.subject,
      subject_name: attempt.subjectName || null,
      chapter: attempt.chapter || null,
      chapter_name: attempt.chapterName || null,
      skill_key: attempt.skillKey || null,
      skill_label: attempt.skillLabel || null,
      session_number: attempt.sessionNumber || null,
      score: attempt.score,
      total: attempt.total,
      percent: attempt.percent,
      passed: attempt.passed || false,
      duration: attempt.duration || null,
      questions: attempt.questions || null,
      missed: attempt.missed || null,
      timestamp: attempt.timestamp || new Date().toISOString()
    };

    try {
      const result = await supaUpsert("attempts", row, "id");
      return result && result[0] ? result[0] : row;
    } catch (err) {
      console.error("Storage.saveAttempt failed:", err);
      throw err;
    }
  },

  /**
   * Get all attempts for this family, sorted newest first.
   */
  async getAllAttempts() {
    try {
      const rows = await supaGet(
        `attempts?family_id=eq.${encodeURIComponent(FAMILY_ID)}&order=timestamp.desc`
      );
      return rows.map(rowToAttempt);
    } catch (err) {
      console.error("Storage.getAllAttempts failed:", err);
      return [];
    }
  },

  /**
   * Get attempts filtered by type/subject/chapter.
   */
  async getAttemptsBy(filter = {}) {
    const all = await this.getAllAttempts();
    return all.filter(a => {
      if (filter.type && a.type !== filter.type) return false;
      if (filter.subject && a.subject !== filter.subject) return false;
      if (filter.chapter && a.chapter !== filter.chapter) return false;
      return true;
    });
  },

  /**
   * Clear all attempts for this family.
   */
  async clearAllAttempts() {
    try {
      await supaDelete(
        `attempts?family_id=eq.${encodeURIComponent(FAMILY_ID)}`
      );
      return true;
    } catch (err) {
      console.error("Storage.clearAllAttempts failed:", err);
      throw err;
    }
  },

  /**
   * Bulk insert attempts (used by import).
   */
  async bulkInsert(attempts) {
    if (!attempts || attempts.length === 0) return true;

    const rows = attempts.map(a => ({
      id: a.id || `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      family_id: FAMILY_ID,
      type: a.type,
      subject: a.subject,
      subject_name: a.subjectName || null,
      chapter: a.chapter || null,
      chapter_name: a.chapterName || null,
      skill_key: a.skillKey || null,
      skill_label: a.skillLabel || null,
      session_number: a.sessionNumber || null,
      score: a.score,
      total: a.total,
      percent: a.percent,
      passed: a.passed || false,
      duration: a.duration || null,
      questions: a.questions || null,
      missed: a.missed || null,
      timestamp: a.timestamp || new Date().toISOString()
    }));

    // Insert in batches of 100 to avoid payload limits
    const BATCH_SIZE = 100;
    for (let i = 0; i < rows.length; i += BATCH_SIZE) {
      const batch = rows.slice(i, i + BATCH_SIZE);
      try {
        await supaUpsert("attempts", batch, "id");
      } catch (err) {
        console.error("Storage.bulkInsert batch failed:", err);
        throw err;
      }
    }
    return true;
  },

  /* ==========================================================
     Meta (skill progress)
     ========================================================== */

  /**
   * Get the current skill progress for a subject.
   * Returns null if nothing saved yet.
   *
   * Old shape: { chapterId, skillKey, sessionsPassed, sessionsAttempted }
   */
  async getMeta(key) {
    // key is expected to be "skillProgress_<subject>"
    const subject = extractSubjectFromKey(key);
    if (!subject) return null;

    try {
      const rows = await supaGet(
        `skill_progress?family_id=eq.${encodeURIComponent(FAMILY_ID)}&subject=eq.${encodeURIComponent(subject)}&limit=1`
      );
      if (!rows || rows.length === 0) return null;
      const row = rows[0];
      return {
        chapterId: row.chapter_id,
        skillKey: row.skill_key,
        sessionsPassed: row.sessions_passed || 0,
        sessionsAttempted: row.sessions_attempted || 0,
        lastUpdated: row.last_updated
      };
    } catch (err) {
      console.error("Storage.getMeta failed:", err);
      return null;
    }
  },

  /**
   * Save skill progress.
   * key is expected to be "skillProgress_<subject>"
   */
  async setMeta(key, value) {
    const subject = extractSubjectFromKey(key);
    if (!subject) {
      console.warn("setMeta: cannot extract subject from key", key);
      return false;
    }

    const row = {
      family_id: FAMILY_ID,
      subject: subject,
      chapter_id: value.chapterId,
      skill_key: value.skillKey,
      sessions_passed: value.sessionsPassed || 0,
      sessions_attempted: value.sessionsAttempted || 0,
      last_updated: new Date().toISOString()
    };

    try {
      await supaUpsert("skill_progress", row, "family_id,subject");
      return true;
    } catch (err) {
      console.error("Storage.setMeta failed:", err);
      throw err;
    }
  },

  /* ==========================================================
     Export / Import
     ========================================================== */

  async exportJSON() {
    const attempts = await this.getAllAttempts();
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      appVersion: "2.0",
      familyId: FAMILY_ID,
      attempts
    }, null, 2);
  },

  async importJSON(jsonString, mode = "merge") {
    const data = JSON.parse(jsonString);
    if (!data.attempts || !Array.isArray(data.attempts)) {
      throw new Error("Invalid file — missing attempts array.");
    }
    if (mode === "replace") {
      await this.clearAllAttempts();
    }
    await this.bulkInsert(data.attempts);
    return data.attempts.length;
  }
};

/* ==========================================================
   Helpers
   ========================================================== */

/**
 * Converts a Supabase row back to the shape the app expects.
 */
function rowToAttempt(row) {
  return {
    id: row.id,
    type: row.type,
    subject: row.subject,
    subjectName: row.subject_name,
    chapter: row.chapter,
    chapterName: row.chapter_name,
    skillKey: row.skill_key,
    skillLabel: row.skill_label,
    sessionNumber: row.session_number,
    score: row.score,
    total: row.total,
    percent: row.percent,
    passed: row.passed,
    duration: row.duration,
    questions: row.questions,
    missed: row.missed,
    timestamp: row.timestamp
  };
}

/**
 * Extracts the subject from a meta key of the form
 * "skillProgress_<subject>". Returns null if the key
 * doesn't match the pattern.
 */
function extractSubjectFromKey(key) {
  if (!key) return null;
  const prefix = "skillProgress_";
  if (!key.startsWith(prefix)) return null;
  return key.slice(prefix.length);
}