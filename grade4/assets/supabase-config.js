/* ==========================================================
   supabase-config.js
   Supabase REST helpers + family id for the 4th Grade data.

   The publishable key is designed to be public — RLS on the
   database controls what it can actually access.
   ========================================================== */

/* URL and key are shared by every section of the site. */
import { SUPABASE_URL, SUPABASE_KEY } from "../../shared/config.js";
export { SUPABASE_URL, SUPABASE_KEY };

/* Which kid's data this session reads and writes. Every row is keyed by it.
   Set once at boot by auth.js#startSession() from the signed-in profile
   (a live binding: modules that import FAMILY_ID see the new value). */
export let FAMILY_ID = null;
export function setFamilyId(id) { FAMILY_ID = id; }

/* localStorage keys */
export const LS_KEYS = {
  familyCode: "explorer_familyCode",
  role: "explorer_role"
};

/* ==========================================================
   Tiny fetch wrapper for Supabase REST API
   ========================================================== */

const HEADERS = {
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "return=representation"
};

/**
 * GET from Supabase REST API
 * @param {string} path - e.g., "attempts?family_code=eq.srk-family"
 */
export async function supaGet(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: "GET",
    headers: HEADERS
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase GET failed (${res.status}): ${text}`);
  }
  return res.json();
}

/**
 * POST to Supabase REST API (insert)
 * @param {string} table
 * @param {object|array} data
 */
export async function supaInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase INSERT failed (${res.status}): ${text}`);
  }
  return res.json();
}

/**
 * UPSERT (insert or update on conflict)
 * @param {string} table
 * @param {object|array} data
 * @param {string} onConflict - column name(s) to conflict on
 */
export async function supaUpsert(table, data, onConflict) {
  const url = onConflict
    ? `${SUPABASE_URL}/rest/v1/${table}?on_conflict=${onConflict}`
    : `${SUPABASE_URL}/rest/v1/${table}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      ...HEADERS,
      "Prefer": "resolution=merge-duplicates,return=representation"
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase UPSERT failed (${res.status}): ${text}`);
  }
  return res.json();
}

/**
 * PATCH (partial update)
 * @param {string} path - e.g., "attempts?id=eq.xyz"
 * @param {object} data
 */
export async function supaPatch(path, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase PATCH failed (${res.status}): ${text}`);
  }
  return res.json();
}

/**
 * DELETE
 * @param {string} path - e.g., "attempts?family_code=eq.srk-family"
 */
export async function supaDelete(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: "DELETE",
    headers: HEADERS
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase DELETE failed (${res.status}): ${text}`);
  }
  return true;
}