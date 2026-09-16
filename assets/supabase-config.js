/* ==========================================================
   supabase-config.js
   Supabase connection + family codes.

   The publishable key is designed to be public — RLS on the
   database controls what it can actually access.
   ========================================================== */

export const SUPABASE_URL = "https://lairmjaqsqyqbrcatubm.supabase.co";
export const SUPABASE_KEY = "sb_publishable_5Za7731n8QQu7xykFmiNYg_MraLKf7b";

/* Family codes. Both map to the same underlying data.
   The code entered determines which view is shown. */
export const FAMILY_CODE_KID = "srk";
export const FAMILY_CODE_PARENT = "ar";

/* The internal family id used in the database.
   All data is keyed by this so a rename of the codes
   doesn't lose data. */
export const FAMILY_ID = "srk-family";

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