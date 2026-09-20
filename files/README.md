# 60-Day Interview Prep Tracker

A static, no-build personal tracker: 60 sequential "Days," each with 8 tasks
(DSA, Java+SpringBoot, SQL, System Design, Design Patterns, Projects, AI,
Random Stuff). Checkbox state syncs across devices via Supabase, with
localStorage as an offline cache.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `style.css` | All styling |
| `data.js` | **Edit this** — all cadence rules, DSA problems, design patterns, project placeholders |
| `app.js` | Rendering + state/sync logic (you shouldn't need to touch this) |
| `supabase-client.js` | Backend config — paste your Supabase URL/key here |
| `db.sql` | Run once in Supabase to create the table |
| `dsa-problems.json` | *(optional, you create this)* — your real ~500-problem list, auto-loaded if present |

## 1. Set up the free Supabase backend

Supabase was picked over Firebase here because there's no auth to configure —
just one table with Row Level Security turned off, since this is a private,
single-user tracker with nothing sensitive in it.

1. Go to [supabase.com](https://supabase.com) → sign up (free) → **New Project**.
   - Pick any name/region/password (the DB password isn't used by this app).
   - Wait ~2 minutes for provisioning.
2. Open **SQL Editor** (left sidebar) → **New query** → paste in the contents
   of `db.sql` from this project → **Run**.
   This creates a `tracker_state` table with one row (`id=1`) holding all
   your checkbox data as JSON, and disables Row Level Security so the app
   can read/write it without auth.
3. Go to **Project Settings** (gear icon) → **API**.
   - Copy the **Project URL** (looks like `https://abcdefgh.supabase.co`)
   - Copy the **anon / public** key (a long JWT string)
4. Open `supabase-client.js` in this project and paste them in:
   ```js
   const SUPABASE_URL = "https://abcdefgh.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGci...";
   ```
5. That's it — no auth setup, no Firebase config, no server code.

**Security note:** both values above are visible in your site's public JS
(this is unavoidable for a client-only static app) and there's no login, so
technically anyone who found your URL and dug into devtools could read or
edit your one row of checkbox data. There's nothing sensitive in it, and the
site itself isn't discoverable unless you share the domain, so this is a
reasonable trade-off for a personal tool. If that ever bothers you, the
next step up is a small serverless function that holds the key server-side
— but that adds real complexity for a single-user tracker.

If you skip this section entirely, the app still works — it just falls back
to `localStorage`, meaning progress won't sync between your phone and laptop.

## 2. Add your real DSA problem list (optional but recommended)

Create a file called `dsa-problems.json` in the same folder as `index.html`,
containing a flat JSON array like this:

```json
[
  {
    "pattern": "Sliding Window",
    "problem": "Longest Substring Without Repeating Characters",
    "number": 3,
    "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "pattern": "Sliding Window",
    "problem": "Minimum Window Substring",
    "number": 76,
    "link": "https://leetcode.com/problems/minimum-window-substring/"
  }
]
```

Rules:
- **Order matters**: patterns are detected in the order they first appear in
  this array. Put all problems for Pattern 1 first (in any order among
  themselves), then all of Pattern 2, etc. — up to 30 distinct patterns.
- Each pattern's problems get split roughly in half across its 2 assigned
  days automatically — no need to pre-split them yourself.
- If you have more or fewer than ~500 total, that's fine — the app just
  divides whatever you give it.
- If a pattern has zero problems, or you have fewer than 30 patterns total,
  the remaining day-pairs will show a "pattern not yet loaded" placeholder
  instead of breaking.

If `dsa-problems.json` isn't present, the app uses a small built-in sample
list (already in `data.js`) so the site works out of the box for testing.

You can ask me to convert a CSV into this JSON format any time — just paste
the CSV (or upload the file) and I'll generate `dsa-problems.json` for you.

## 3. Customize Design Patterns / Projects (optional)

Open `data.js` and edit:
- `DESIGN_PATTERNS` — array of 60 `{ name, type }` objects. A sensible
  default (30 system-design + 30 GoF patterns) is already filled in;
  reorder or replace freely, just keep exactly 60 entries.
- `PROJECTS` — array of 5 `{ title, description }` placeholders. Fill in
  your real project ideas whenever you decide on them.

No other code needs to change — `app.js` reads whatever `data.js` produces.

## 4. Test locally

Since this uses `fetch()` for the optional `dsa-problems.json`, opening
`index.html` directly via `file://` may block that fetch in some browsers.
Easiest fix — run a tiny local server from this folder:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

or, if you have Node:

```bash
npx serve .
```

## 5. Deploy to a free static host

Any of these work identically since this is plain static files:

### Vercel (recommended, simplest)
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Other** (no build step needed). Leave build command blank.
4. Deploy. You'll get a `*.vercel.app` URL immediately.

### Netlify
1. Push to GitHub, or drag-and-drop the folder directly at
   [app.netlify.com/drop](https://app.netlify.com/drop).
2. No build settings needed — it's already static.

### GitHub Pages
1. Push this folder to a GitHub repo (files at the repo root, or in `/docs`).
2. Repo → **Settings** → **Pages** → set source to your branch/folder.
3. Site publishes at `https://<username>.github.io/<repo>/`.

### Cloudflare Pages
1. Push to GitHub → Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → connect repo.
2. Build command: none. Output directory: `/` (root).

## 6. Point your custom domain at it

All four hosts support this similarly:

1. In your host's dashboard, find **Domains** (Vercel/Netlify/Cloudflare) or
   **Pages → Custom domain** (GitHub Pages) for this project.
2. Add your domain (e.g. `prep.yourdomain.com` or the bare root domain).
3. The host will show you a DNS record to add — usually either:
   - a **CNAME** record (for a subdomain) pointing to something like
     `cname.vercel-dns.com` / `<yoursite>.netlify.app` / `<username>.github.io`, or
   - an **A record** (for a root/apex domain) pointing to the host's IP(s).
4. Add that record at your domain registrar's DNS settings.
5. Wait for DNS propagation (usually minutes, occasionally up to ~24 hrs) —
   the host's dashboard will show a green checkmark once it's live, and
   auto-provisions HTTPS via Let's Encrypt.

## How syncing works

- Every checkbox click writes to `localStorage` immediately (instant, works offline).
- After a short debounce (0.8s), it also pushes the full state to Supabase.
- On page load, the app fetches the latest state from Supabase (if reachable)
  and uses that as the source of truth, falling back to the local cache if
  Supabase is unreachable (offline, or not configured yet).
- The small badge under the title shows sync status: *Synced*, *Unsaved
  changes…*, *Offline — saved locally*, or *Local only* (no backend configured).

This is a "last write wins" model with no conflict resolution — fine for a
single person using it from a couple of their own devices, since you're not
editing the same day from two devices at the same literal moment.
