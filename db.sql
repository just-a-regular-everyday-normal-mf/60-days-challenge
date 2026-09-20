-- Run this once in Supabase's SQL editor (Project -> SQL Editor -> New query).
-- Creates a single-row table holding the whole tracker's completion state as JSON.

create table if not exists tracker_state (
  id int primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Seed the single row this app reads/writes (id = 1).
insert into tracker_state (id, data)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

-- Row Level Security: this is a personal, no-auth tracker. We disable RLS
-- entirely on this table so the anon key can read/write it directly.
-- This means anyone with your Supabase URL + anon key (both are visible in
-- your deployed site's JS) could read/edit this one row. That's an
-- acceptable trade-off for a private personal tracker with nothing
-- sensitive in it (just checkbox states) — but understand the exposure.
alter table tracker_state disable row level security;
