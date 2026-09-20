/**
 * supabase-client.js
 * ---------------------------------------------------------------------------
 * Thin wrapper around a single Supabase table used to persist completion
 * state across devices. No auth — this is a personal tracker on a private
 * domain, protected only by obscurity (the URL/anon key aren't secret, but
 * anyone who wanted your leetcode progress could just... not care).
 *
 * SETUP:
 *   1. Create a free project at https://supabase.com
 *   2. In the SQL editor, run the contents of db.sql (creates the table +
 *      inserts the single row this app reads/writes).
 *   3. Go to Project Settings -> API. Copy:
 *        - "Project URL"        -> paste into SUPABASE_URL below
 *        - "anon public" key    -> paste into SUPABASE_ANON_KEY below
 *   4. That's it — no auth setup needed.
 *
 * If you leave these as placeholders, the app runs in local-only mode
 * (localStorage per device) and just won't sync across devices.
 * ---------------------------------------------------------------------------
 */

const SUPABASE_URL = "$SUPABASE_URL";
const SUPABASE_ANON_KEY = "$SUPABASE_ANON_KEY";

const TABLE_NAME = "tracker_state";
const ROW_ID = 1; // single-row table; this app only ever reads/writes id=1

function isConfigured() {
  return (
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.startsWith("YOUR_") &&
    !SUPABASE_ANON_KEY.startsWith("YOUR_")
  );
}

function restUrl(path) {
  return `${SUPABASE_URL}/rest/v1/${path}`;
}

function headers(extra = {}) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function fetchState() {
  const res = await fetch(
    restUrl(`${TABLE_NAME}?id=eq.${ROW_ID}&select=data`),
    { headers: headers() }
  );
  if (!res.ok) throw new Error(`Supabase fetch failed: ${res.status}`);
  const rows = await res.json();
  if (!rows.length) return null;
  return rows[0].data || {};
}

async function saveState(state) {
  // Upsert via PATCH-with-fallback-to-POST is fiddly over raw REST; simplest
  // reliable approach is POST with Prefer: resolution=merge-duplicates and
  // an explicit `id` in the body, relying on the unique constraint on id.
  const res = await fetch(restUrl(TABLE_NAME), {
    method: "POST",
    headers: headers({ Prefer: "resolution=merge-duplicates" }),
    body: JSON.stringify([{ id: ROW_ID, data: state, updated_at: new Date().toISOString() }]),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Supabase save failed: ${res.status} ${text}`);
  }
}

window.SupabaseSync = { isConfigured, fetchState, saveState };
