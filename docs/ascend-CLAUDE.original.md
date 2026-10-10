# CLAUDE.md: Ascend by KidosTutor

Context for Claude Code sessions on this repo. Read this first; README.md has the step-by-step setup for humans.

## What this is

**Ascend** is a daily PSAT/SAT practice site for a small group of students tutored by Andy (KidosTutor).

- Every day each student gets **15 Reading & Writing + 15 Math** questions, matched to their grade and weighted toward their weak skills.
- Andy (admin) reviews a **weekly report** of weak areas, generates new questions aimed at those areas (AI drafts or CSV import), reviews them, and publishes them to the bank.

| | |
|---|---|
| Live URL (planned) | `https://ascend.kidostutor.com` (student) · `/admin.html` (admin) |
| Hosting | GitHub Pages, deploying the `web/` folder via `.github/workflows/pages.yml` |
| Back end | Supabase: Postgres + Auth + Edge Functions (Deno) |
| Users | A few students Andy knows, plus Andy as admin. Not a public product (yet). |
| Owner | Andy, a web developer. Prefers direct answers without long caveats. |

### Grade tracks

Tracks are stored as `profiles.track`.

| Track | Test | Question levels |
|---|---|---|
| `g9` | PSAT 8/9 | 1–2 (easy, medium) |
| `g11` | PSAT/NMSQT & SAT | 2–3 (medium, hard) |

## History and decisions (why things are the way they are)

1. **Prototype first.** The first version was a claude.ai Artifact called "Daily Fifteen". It used claude.ai logins and claude.ai storage, with AI top-up through the artifact's built-in sampling. It is superseded and not part of this repo.
2. **Moved to Supabase.** Andy wanted his own logins and his own question database, with no claude.ai accounts for kids. Artifacts can't call outside servers, so it became this standalone codebase.
3. **Stack choices.** Andy chose:
   - plain HTML/JS with no framework and no build step
   - username + password logins that the admin creates
   - question creation by both AI drafts and CSV import
   - the weekly report as an admin dashboard page (no email)
4. **Renamed from Daily Fifteen to Ascend** on the `ascend.kidostutor.com` subdomain. Andy's Schoology content lives elsewhere on kidostutor.com, so only the `ascend` CNAME points to GitHub.
5. **Question sources.** Never scrape or copy College Board, Bluebook or Khan Academy questions. They're copyrighted and their terms forbid it. All content is original: 90 hand-written starter questions, AI drafts reviewed by Andy, and Andy's own CSVs. The student site links to official resources instead.
6. **Avoid "SAT" in the brand name** (College Board trademark). "PSAT & SAT practice" as a description is fine.

## Repo layout

```
web/                          static site (GitHub Pages serves this folder as-is)
  index.html + student.js       student: login, today's two sets, practice, progress, account
  admin.html + admin.js         admin: Weekly report · Questions · Generate · Import CSV · Students · Reported
  lib.js                        Supabase client, constants (TRACKS, SUBJ domains/skills), render helpers
  styles.css                    design tokens + components (light/dark)
  config.js                     SUPABASE_URL, SUPABASE_ANON_KEY, STUDENT_EMAIL_DOMAIN  ← placeholders, Andy fills in
  question-template.csv         CSV import template
supabase/
  migrations/0001_ascend.sql    all tables, RLS, SQL functions (idempotent; safe to re-run)
  seed.sql                      90 starter questions, status=published, source=bank
  functions/_shared/common.ts   CORS, caller/service clients, requireAdmin(), DOMAINS/SKILLS lists
  functions/admin-users/        create student, set_password, delete (service role)
  functions/generate-questions/ calls Claude Messages API → inserts DRAFT questions
.github/workflows/pages.yml     deploy web/ on push to main
```

## Architecture

### Logins

- Students type a **username**. `lib.js#loginEmail()` maps it to `username@STUDENT_EMAIL_DOMAIN` (`students.kidostutor.com`). No email is ever sent.
- The admin logs in with a real email (anything containing `@` is used as-is).
- Accounts are created only by the `admin-users` edge function. It sets `app_metadata.created_by_admin = true`, and only the service role can set that.
- The `handle_new_user` trigger creates the `profiles` row:
  - `active` is true only when that flag is present, so self-registered accounts start **paused**. This is a backup to the dashboard setting "Allow new users to sign up" = off.
  - `role` is always `student`. Admins are promoted manually with SQL.

### Data model (public schema)

| Table | Purpose |
|---|---|
| `profiles` | id = auth.users.id, `username`, `display_name`, `track` (`g9`/`g11`), `role` (`student`/`admin`), `active` |
| `questions` | `subject` (`rw`/`math`), `level` 1–3, `domain`, `skill`, `passage`, `data_table` (`{h:[], r:[[]]}`), `question`, `choices` (4 strings, or null for typed answers), `answer_index`, `accept` (typed answers), `explanation`, `status` (`draft`/`published`/`retired`), `source` (`bank`/`ai`/`import`/`manual`). Check constraints enforce valid domains per subject and the answer shape. |
| `daily_sets` | One row per (`student`, `day`, `subject`). `question_ids text[]` in display order, `review_count`. |
| `answers` | One per (`set_id`, `question_id`). Denormalized `subject`/`domain`/`skill`/`day` for fast reports. `response`, `correct`, `ms`. |
| `question_reports` | Students flag a question after answering it. Admin resolves. |

Domains and skills follow the College Board digital SAT taxonomy. Lists are in `lib.js` (SUBJ), `_shared/common.ts`, and the `questions_domain_ok` constraint. **Keep these three in sync** when changing them.

### Server functions (SQL, `security definer`)

| Function | Who | What |
|---|---|---|
| `get_today(p_day)` | student | Builds today's two sets on first call (via `build_set`), returns questions **without** answer keys, plus already-answered results. Rebuilds an unstarted set if the grade changed. Date must be within ±2 days of UTC today. |
| `build_set(student, subject, day)` | internal (execute revoked) | Up to 3 questions missed on earlier days → fresh unseen questions weighted by `random() * (1.5 − domain accuracy)` → more misses if the bank is short → oldest-seen recycle. R&W ordered by domain like the real test; Math easiest first. |
| `submit_answer(set_id, question_id, response, ms)` | student | Grades on the server (`grade()` handles A–D index and typed answers incl. fractions like `5/2`). Idempotent. Returns the key + explanation only after answering. |
| `my_progress()` | student | Per-skill totals, per-day totals (90 days), last 30 missed questions with keys. |
| `report_question(id, note)` | student | Only for questions they've answered. |
| `weekly_report(p_start)` | admin | Per student: answered, accuracy, previous week, minutes, days active, last day, skills worst-first. Also weak skills across students (with struggling `student_ids`), bank inventory by subject/domain/level, open report count. |
| `is_admin()` | anyone | Used by RLS and edge functions. |

### Security model (don't weaken it)

- **Students can't read `questions` directly** (RLS: admin only). They see questions only through `get_today` and `submit_answer`, so answer keys never reach the browser before answering.
- Students read only their own `profiles`, `daily_sets` and `answers`. They can't insert answers directly; everything goes through the RPCs.
- Admin has full access through RLS `is_admin()` policies.
- The service role key lives only in edge function env. `web/config.js` holds only the anon key (public by design).
- Edge functions verify the caller with `requireAdmin()` (`getUser` + `is_admin` RPC).

### Edge functions

- **`admin-users`:** `{action: "create" | "set_password" | "delete", ...}`.
- **`generate-questions`:**
  - Input: `{subject, track, count ≤ 8, focus: [{domain, skill}], note}`.
  - Prompts Claude with the taxonomy, two published questions as style examples, and the 40 most recent stems to avoid. For math, it asks Claude to solve each question before writing it.
  - Validates the shape and inserts the results as `draft` with `source = 'ai'`.
  - The admin UI calls it in batches of 5 to stay under function time limits.
- **Secrets:**
  - `ANTHROPIC_API_KEY`
  - `STUDENT_EMAIL_DOMAIN`
  - `ANTHROPIC_MODEL` (optional; default `claude-sonnet-5-5`)

### Front end conventions

- ES modules loaded directly in the browser. supabase-js is pinned: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm`. **No bundler**, so keep it that way unless Andy asks.
- Rendering uses template strings into `#app`, with a single state object (`S` in student.js, `A` in admin.js) and event delegation on `data-*` attributes. Always escape user/DB text with `esc()`, `inline()` or `fmt()`.
- Text markup in questions:
  - `^{2}` → superscript
  - `______` → blank line
  - blank line → paragraph
  - `\n` → line break
- **Design**, a test-booklet look:
  - Fonts: Bricolage Grotesque (display), Atkinson Hyperlegible (body), Source Serif 4 (passages), IBM Plex Mono (numbers).
  - Accents: teal `--accent` and pencil yellow `--pencil`.
  - Answer choices are circular "bubbles".
  - Logo: an upward chevron on a pencil-yellow circle.
  - All colors are CSS tokens with light/dark variants. Don't hard-code colors.
- Copy is plain and direct, written from the student's side ("Check answer", "Today's fifteen").

## Status

### Done and tested

- Schema, RLS and all SQL functions were run on local Postgres 16 with stubbed `auth` schema and roles. Tests covered:
  - students can't read `questions` or each other's data, and can't insert answers directly
  - grading is correct, including fractions and decimals
  - resubmitting is idempotent
  - review slots appear the next day
  - grade changes rebuild unstarted sets
  - the weekly report builds
  - self-registered accounts are paused and blocked
- Math answer keys in the starter bank were verified by script.
- `deno check` passes on both edge functions. `node --check` passes on all web JS.

### Not yet verified

- The pages have **not been run against a live Supabase project**. Expect small integration fixes on the first real run, for example:
  - supabase-js response shapes
  - `functions.invoke` error bodies
  - the PostgREST embedded select in `admin.js#loadReports` (`profiles(...)`, `questions(*)`)
- No automated test suite in the repo yet.

### Andy's setup checklist (from README)

1. [ ] Create the Supabase project. Run `supabase/migrations/0001_ascend.sql`, then `supabase/seed.sql`.
2. [ ] Auth: turn **off** "Allow new users to sign up" and "Confirm email". Set Site URL to `https://ascend.kidostutor.com`.
3. [ ] Add his admin user in the dashboard, then: `update profiles set role='admin', active=true ...`.
4. [ ] `supabase secrets set ANTHROPIC_API_KEY=… STUDENT_EMAIL_DOMAIN=students.kidostutor.com`, then deploy `admin-users` and `generate-questions`.
5. [ ] Fill in `web/config.js` (URL + anon key).
6. [ ] Push to GitHub. Pages source: GitHub Actions. Custom domain `ascend.kidostutor.com`, then Enforce HTTPS.
7. [ ] DNS: CNAME `ascend` → `<github-username>.github.io`.
8. [ ] Create the student accounts in Admin → Students. Do an end-to-end test: login → answer both sets → progress → weekly report → generate → publish.

## Backlog (suggested next steps, roughly in priority order)

1. **Live integration pass.** Run the checklist above, fix whatever breaks, and add a smoke test (e.g. Playwright against a test project).
2. **Grow the verified bank** from 90 toward ~300 questions. Each grade currently has 30 per subject, about 2 days before review/recycle dominates. Check Admin → Weekly report → Question bank for thin domains.
3. **AI draft quality.** Add a second-pass "verifier" call in `generate-questions` that re-solves each math draft and flags disagreements in `notes`. Show question stats (accuracy from `answers`) to spot bad keys.
4. **Automated tests.** Turn the local-Postgres SQL tests into pgTAP or a script in `supabase/tests/`. Add a minimal Playwright flow.
5. **Timed mock module.** An optional 27-question R&W or 22-question Math block with real timing (≈71 s / 95 s per question).
6. **Score estimate** per student from difficulty-weighted accuracy. Label it clearly as an estimate.
7. **Parent view or weekly email** (e.g. Resend + pg_cron). Andy chose dashboard-only for now.
8. **Admin quality of life:** bulk edit, duplicate detection, question version history (edits currently change the content behind historical answers).

## Known limitations

- The week in `weekly_report` starts on the Monday the admin picks. "Days" are the student's local dates, sent by the browser.
- Streaks are computed in the browser: a day counts when any subject has ≥15 answers.
- Editing a published question changes what past answers point to. Prefer retiring the question and creating a new one for big changes.
- Deleting a student cascades to their sets and answers.
- The `generate-questions` default model string comes from `ANTHROPIC_MODEL`. Update it if Anthropic model names change.

## Working rules for future changes

- **Schema changes:** add `supabase/migrations/0002_*.sql` rather than editing 0001 after it's been applied. Keep functions `security definer` with `set search_path = public`, and keep RLS on every new table.
- Never send answer keys to students before they answer. Never put the service role key in `web/`.
- Keep all question content original: no copying from College Board, Bluebook or Khan.
- When adding a domain or skill, update `lib.js`, `_shared/common.ts` and the `questions_domain_ok` constraint together.
- For local SQL testing, run Postgres 16 with a stub `auth` schema:
  - `auth.users(id, email, raw_user_meta_data, raw_app_meta_data)`
  - `auth.uid()` reading `current_setting('request.jwt.claim.sub')`
  - roles `anon` and `authenticated`
  
  Then switch users with `set role authenticated; select set_config('request.jwt.claim.sub', '<uuid>', false);`.
