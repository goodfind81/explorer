/* ==========================================================
   storage.js
   IndexedDB wrapper for storing quiz attempts.
   Provides a simple async API: init, save, getAll, clear.
   Also handles JSON export/import.
   ========================================================== */

const DB_NAME = "scienceExplorerDB";
const DB_VERSION = 1;
const STORE_ATTEMPTS = "attempts";
const STORE_META = "meta";

let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_ATTEMPTS)) {
        const store = db.createObjectStore(STORE_ATTEMPTS, { keyPath: "id" });
        store.createIndex("timestamp", "timestamp", { unique: false });
        store.createIndex("type", "type", { unique: false });
        store.createIndex("subject", "subject", { unique: false });
        store.createIndex("chapter", "chapter", { unique: false });
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: "key" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

export const Storage = {
  /**
   * Initialize DB (called on app startup).
   */
  async init() {
    await openDB();
  },

  /**
   * Save a quiz attempt.
   * @param {Object} attempt - { id, type, subject, chapter, score, total, percent, duration, missed, timestamp }
   */
  async saveAttempt(attempt) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readwrite");
      const store = tx.objectStore(STORE_ATTEMPTS);
      store.put(attempt);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Get all attempts, sorted newest first.
   */
  async getAllAttempts() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readonly");
      const store = tx.objectStore(STORE_ATTEMPTS);
      const req = store.getAll();
      req.onsuccess = () => {
        const results = req.result || [];
        results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  },

  /**
   * Get attempts filtered by type/chapter.
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
   * Clear all attempts (used by Parent Dashboard).
   */
  async clearAllAttempts() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readwrite");
      tx.objectStore(STORE_ATTEMPTS).clear();
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Bulk insert attempts (used by import).
   */
  async bulkInsert(attempts) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readwrite");
      const store = tx.objectStore(STORE_ATTEMPTS);
      attempts.forEach(a => store.put(a));
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Get a meta value by key (used for quiz history tracking).
   */
  async getMeta(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_META, "readonly");
      const req = tx.objectStore(STORE_META).get(key);
      req.onsuccess = () => resolve(req.result ? req.result.value : null);
      req.onerror = () => reject(req.error);
    });
  },

  /**
   * Set a meta value (used for quiz history tracking).
   */
  async setMeta(key, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_META, "readwrite");
      tx.objectStore(STORE_META).put({ key, value });
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Export all data as a JSON string.
   */
  async exportJSON() {
    const attempts = await this.getAllAttempts();
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      appVersion: "1.0",
      attempts
    }, null, 2);
  },

  /**
   * Import from JSON string. Returns number of attempts imported.
   * mode = "merge" or "replace"
   */
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