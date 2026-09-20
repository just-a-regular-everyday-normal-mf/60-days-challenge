/**
 * app.js
 * ---------------------------------------------------------------------------
 * All rendering + state/sync logic. Reads structure from data.js (window.TrackerData)
 * and never hardcodes category/cadence rules — edit data.js for that.
 *
 * PERSISTENCE MODEL:
 *  - `completionState` = { "1": [true,false,...8 bools...], "2": [...], ... }
 *  - Written to localStorage immediately (optimistic).
 *  - Synced to Supabase in the background (debounced).
 *  - On load: try Supabase first (source of truth across devices), fall back
 *    to localStorage if offline/unreachable, and merge into localStorage.
 * ---------------------------------------------------------------------------
 */

const LOCAL_STORAGE_KEY = "prep_tracker_state_v1";
const SYNC_DEBOUNCE_MS = 800;

let completionState = {}; // { [day]: [bool x8] }
let trackerData = null;   // output of generateTracker()
let syncTimer = null;
let currentDetailDay = null;

/* ---------------------------------------------------------------------------
 * Local storage helpers
 * ------------------------------------------------------------------------ */
function loadLocalState() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("Failed to read local state", e);
    return {};
  }
}

function saveLocalState(state) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Failed to write local state", e);
  }
}

/* ---------------------------------------------------------------------------
 * Remote sync (Supabase). See supabase-client.js for config + fetch wrappers.
 * Falls back gracefully to local-only mode if Supabase isn't configured or
 * is unreachable — the tracker still works, it just won't sync cross-device.
 * ------------------------------------------------------------------------ */
async function loadRemoteState() {
  if (!window.SupabaseSync || !window.SupabaseSync.isConfigured()) {
    updateSyncBadge("local");
    return null;
  }
  try {
    updateSyncBadge("syncing");
    const remote = await window.SupabaseSync.fetchState();
    updateSyncBadge("synced");
    return remote;
  } catch (e) {
    console.warn("Remote fetch failed, using local cache", e);
    updateSyncBadge("offline");
    return null;
  }
}

function scheduleRemoteSync() {
  if (!window.SupabaseSync || !window.SupabaseSync.isConfigured()) return;
  if (syncTimer) clearTimeout(syncTimer);
  updateSyncBadge("pending");
  syncTimer = setTimeout(async () => {
    try {
      updateSyncBadge("syncing");
      await window.SupabaseSync.saveState(completionState);
      updateSyncBadge("synced");
    } catch (e) {
      console.warn("Remote sync failed, will retry on next change", e);
      updateSyncBadge("offline");
    }
  }, SYNC_DEBOUNCE_MS);
}

function updateSyncBadge(status) {
  const el = document.getElementById("sync-badge");
  if (!el) return;
  const map = {
    local: { text: "Local only (no backend configured)", cls: "badge-local" },
    syncing: { text: "Syncing…", cls: "badge-syncing" },
    synced: { text: "Synced", cls: "badge-synced" },
    pending: { text: "Unsaved changes…", cls: "badge-pending" },
    offline: { text: "Offline — saved locally", cls: "badge-offline" },
  };
  const cfg = map[status] || map.local;
  el.textContent = cfg.text;
  el.className = "sync-badge " + cfg.cls;
}

/* ---------------------------------------------------------------------------
 * State helpers
 * ------------------------------------------------------------------------ */
function getDayTasksState(day) {
  if (!completionState[day]) {
    completionState[day] = new Array(8).fill(false);
  }
  return completionState[day];
}

function setTaskChecked(day, taskIndex, checked) {
  const arr = getDayTasksState(day);
  arr[taskIndex] = checked;
  completionState[day] = arr;
  saveLocalState(completionState);
  scheduleRemoteSync();
}

function dayStatus(day) {
  const arr = completionState[day];
  if (!arr) return "not-started";
  const doneCount = arr.filter(Boolean).length;
  if (doneCount === 0) return "not-started";
  if (doneCount === 8) return "complete";
  return "partial";
}

function dayDoneCount(day) {
  const arr = completionState[day];
  return arr ? arr.filter(Boolean).length : 0;
}

/* ---------------------------------------------------------------------------
 * Rendering: grid
 * ------------------------------------------------------------------------ */
function renderGrid() {
  const grid = document.getElementById("day-grid");
  grid.innerHTML = "";
  for (const dayObj of trackerData.days) {
    const d = dayObj.day;
    const status = dayStatus(d);
    const tile = document.createElement("button");
    tile.className = `day-tile day-tile--${status}`;
    tile.setAttribute("aria-label", `Day ${d}, ${status.replace("-", " ")}`);
    tile.innerHTML = `<span class="day-tile__num">${d}</span>`;
    tile.addEventListener("click", () => openDetail(d));
    grid.appendChild(tile);
  }
}

/* ---------------------------------------------------------------------------
 * Rendering: stats
 * ------------------------------------------------------------------------ */
function renderStats() {
  const totalDays = trackerData.totalDays;
  let completeDays = 0;
  let partialDays = 0;
  const perCategoryDone = {};
  const perCategoryTotal = {};
  trackerData.categories.forEach((c) => {
    perCategoryDone[c.key] = 0;
    perCategoryTotal[c.key] = totalDays;
  });

  let currentStreak = 0;
  let streakBroken = false;

  // Walk from day 1 to totalDays to compute completion + streak (streak = consecutive
  // complete days counting back from the highest complete day going forward from day 1
  // isn't meaningful without dates, so we define "streak" as the longest run of
  // consecutive fully-complete days ending at the last complete day found).
  let longestRun = 0;
  let runningRun = 0;

  for (const dayObj of trackerData.days) {
    const d = dayObj.day;
    const status = dayStatus(d);
    if (status === "complete") {
      completeDays++;
      runningRun++;
      longestRun = Math.max(longestRun, runningRun);
    } else {
      runningRun = 0;
      if (status === "partial") partialDays++;
    }

    const arr = completionState[d];
    if (arr) {
      dayObj.tasks.forEach((task, idx) => {
        if (arr[idx]) perCategoryDone[task.category]++;
      });
    }
  }

  document.getElementById("stat-days-complete").textContent = `${completeDays} / ${totalDays}`;
  document.getElementById("stat-days-partial").textContent = `${partialDays}`;
  document.getElementById("stat-longest-streak").textContent = `${longestRun}`;

  const catList = document.getElementById("category-stats");
  catList.innerHTML = "";
  trackerData.categories.forEach((c) => {
    const pct = Math.round((perCategoryDone[c.key] / perCategoryTotal[c.key]) * 100);
    const row = document.createElement("div");
    row.className = "cat-stat-row";
    row.innerHTML = `
      <div class="cat-stat-row__label">${c.label}</div>
      <div class="cat-stat-row__bar-track">
        <div class="cat-stat-row__bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="cat-stat-row__pct">${pct}%</div>
    `;
    catList.appendChild(row);
  });
}

/* ---------------------------------------------------------------------------
 * Rendering: detail modal
 * ------------------------------------------------------------------------ */
function openDetail(day) {
  currentDetailDay = day;
  const dayObj = trackerData.days.find((d) => d.day === day);
  const arr = getDayTasksState(day);

  document.getElementById("modal-title").textContent = `Day ${day}`;
  const list = document.getElementById("modal-task-list");
  list.innerHTML = "";

  dayObj.tasks.forEach((task, idx) => {
    const catMeta = trackerData.categories.find((c) => c.key === task.category);
    const item = document.createElement("div");
    item.className = "task-item" + (arr[idx] ? " task-item--done" : "");

    const linksHtml = [];
    if (task.link) {
      linksHtml.push(`<a href="${task.link}" target="_blank" rel="noopener">Open link ↗</a>`);
    }
    if (task.subLinks && task.subLinks.length) {
      task.subLinks.forEach((sl) => {
        linksHtml.push(`<a href="${sl.url}" target="_blank" rel="noopener">${escapeHtml(sl.label)} ↗</a>`);
      });
    }

    item.innerHTML = `
      <label class="task-item__row">
        <input type="checkbox" ${arr[idx] ? "checked" : ""} data-idx="${idx}" />
        <div class="task-item__body">
          <div class="task-item__cat">${catMeta ? catMeta.label : task.category}</div>
          <div class="task-item__title">${escapeHtml(task.title)}</div>
          <div class="task-item__desc">${escapeHtml(task.description || "")}</div>
          ${linksHtml.length ? `<div class="task-item__links">${linksHtml.join("")}</div>` : ""}
        </div>
      </label>
    `;

    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", (e) => {
      setTaskChecked(day, idx, e.target.checked);
      item.classList.toggle("task-item--done", e.target.checked);
      renderGrid();
      renderStats();
      updateModalProgress(day);
    });

    list.appendChild(item);
  });

  updateModalProgress(day);
  document.getElementById("detail-modal").classList.add("modal--open");
  document.body.style.overflow = "hidden";
}

function updateModalProgress(day) {
  const done = dayDoneCount(day);
  document.getElementById("modal-progress").textContent = `${done} / 8 tasks complete`;
}

function closeDetail() {
  document.getElementById("detail-modal").classList.remove("modal--open");
  document.body.style.overflow = "";
  currentDetailDay = null;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------------------------
 * Init
 * ------------------------------------------------------------------------ */
async function init() {
  // 1. Optionally load external DSA problem list (dsa-problems.json), else sample data.
  await window.TrackerData.loadExternalDSAData();
  trackerData = window.TrackerData.generateTracker();

  // 2. Load local cache immediately so UI is responsive offline.
  completionState = loadLocalState();
  renderGrid();
  renderStats();

  // 3. Try to fetch remote (source of truth) and reconcile.
  const remote = await loadRemoteState();
  if (remote && typeof remote === "object") {
    completionState = remote;
    saveLocalState(completionState);
    renderGrid();
    renderStats();
  }

  // 4. Wire up modal close handlers.
  document.getElementById("modal-close").addEventListener("click", closeDetail);
  document.getElementById("detail-modal").addEventListener("click", (e) => {
    if (e.target.id === "detail-modal") closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentDetailDay !== null) closeDetail();
  });

  document.getElementById("prev-day-btn").addEventListener("click", () => {
    if (currentDetailDay > 1) openDetail(currentDetailDay - 1);
  });
  document.getElementById("next-day-btn").addEventListener("click", () => {
    if (currentDetailDay < trackerData.totalDays) openDetail(currentDetailDay + 1);
  });
}

document.addEventListener("DOMContentLoaded", init);
