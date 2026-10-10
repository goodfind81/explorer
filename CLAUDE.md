# CLAUDE.md: KidosTutor

Read README.md first for the layout, the database and the go-live checklist. This file covers the rules for changing things.

## Shape

- A static site on GitHub Pages, served from the repo root at `kidostutor.com`. There's no build step and no framework. ES modules load directly in the browser.
- One Supabase project (`lairmjaqsqyqbrcatubm`) backs every section.
- **One login.** The portal (`/`) signs everyone in with Supabase Auth: a username maps to `username@students.kidostutor.com`, and an admin can type a real email. Section pages call `requireSection()` from `shared/session.js`, which sends anyone without access back to the portal. Never add a second login form inside a section.
- `profiles.section` (`g4` | `psat` | `sat`) routes users. `profiles.role` (`student` | `parent` | `admin`) sets permissions. Admins can open every section.

## Sections

### `grade4/`: 4th Grade Explorer

The original app, moved here unchanged except for login.

- `auth.js#startSession()` maps the profile to the old `kid`/`parent` role and mirrors it to localStorage, so `getSession()` stays synchronous.
- Its data still goes through the REST helpers in `grade4/assets/supabase-config.js` using the publishable key and `FAMILY_ID = "srk-family"`.
- Those tables (`attempts`, `points_ledger`, `quiz_locks`, `redemptions`, `skill_progress`) and their RPCs/trigger live only in Supabase. They are **not** in `supabase/migrations/`.
- Points for mini/chapter attempts are awarded by a DB trigger. Homework points are awarded client-side. Don't double-award.
- Full architecture: `docs/4th Grade Explorer-handoff doc.docx` (read with `textutil -convert txt -stdout`).

### `ascend/`: PSAT & SAT

- Daily practice: 15 Reading & Writing and 15 Math questions a day, chosen to target weak skills.
- `psat` → question levels 1–2; `sat` → levels 2–3 (`ascend_levels()` in SQL, `ASCEND_SECTIONS` in `lib.js`).
- Original design notes: `docs/ascend-CLAUDE.original.md`. It still applies apart from the renames: `track` → `section`, `g9`/`g11` → `psat`/`sat`, `ascend_` prefixes, and the shared login.

Security model (don't weaken it):

- Students can't read `ascend_questions`. They only see questions through `ascend_get_today` and `ascend_submit_answer`, which grade on the server and reveal the key only after an answer.
- Every `ascend_*` RPC rejects accounts whose section isn't `psat`/`sat`.

Content rules:

- All questions are original. Never copy College Board, Bluebook or Khan Academy questions.
- Avoid "SAT" in brand names. "PSAT & SAT practice" is fine as a description.

## Database rules

- Shared tables have no prefix. Section tables are prefixed with their section (`ascend_*`). If 4th Grade tables are ever moved into migrations, rename them to `g4_*` in a migration that also updates the RPCs and trigger.
- Add new migrations as `supabase/migrations/000N_*.sql`. Don't edit a migration that's already been applied. Keep functions `security definer` with `set search_path = public`, and keep RLS on every table.
- When changing PSAT/SAT domains or skills, update `ascend/lib.js` (SUBJ), `supabase/functions/_shared/common.ts` and the `ascend_questions_domain_ok` constraint together.
- Local SQL testing:
  - Postgres 16/17 is installed via Homebrew.
  - Stub the `auth` schema: `auth.users(id, email, raw_user_meta_data, raw_app_meta_data)`, with `auth.uid()` reading `current_setting('request.jwt.claim.sub')`, plus roles `anon` and `authenticated`.
  - Switch users with `set role authenticated; select set_config('request.jwt.claim.sub', '<uuid>', false);`.
  - Use TCP (`-k ''`). The scratchpad socket path is too long for a Unix socket.

## Never

- Put the service role key or Anthropic key in anything under the web root. That's the whole repo except `supabase/functions` env.
- Commit `downloads/`. It's a stray copy of the original Ascend project and is gitignored.
