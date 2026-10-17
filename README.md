# KidosTutor

One site at `https://kidostutor.com` with three sections behind a single login:

| Section | URL | Who |
|---|---|---|
| Portal (sign in) | `/` | Everyone. Students and parents go straight to their section; admins pick one. |
| 4th Grade Explorer | `/grade4/` | Krishna (student) and parents |
| PSAT practice | `/ascend/` | PSAT students: levels 1–2 |
| SAT practice | `/ascend/` | SAT students: levels 2–3 |
| Accounts | `/admin/` | Admin: create, rename, reset passwords, link parents to kids |
| PSAT & SAT admin | `/ascend/admin.html` | Admin: weekly report, questions, AI drafts, CSV import |

PSAT and SAT share one app (Ascend). A student's `profiles.section` decides which difficulty they get.

## Folder structure

```
index.html, portal.js, portal.css   portal: sign-in, section picker, parent kid picker, forced password change
admin/                              accounts page (all sections)
shared/
  config.js                         Supabase URL + publishable key (one project for everything)
  session.js                        login, profile lookup, section routing, sign out
grade4/                             4th Grade Explorer (was the repo root)
  index.html, assets/, data/          unchanged app; auth.js now uses the shared login
ascend/                             PSAT & SAT (Ascend)
  index.html + student.js             daily practice
  admin.html + admin.js               admin
  lib.js, styles.css, question-template.csv
supabase/
  migrations/0001_profiles.sql      shared accounts table + signup trigger
  migrations/0002_ascend.sql        ascend_* tables, RLS, server functions
  migrations/0003–0005              forced password change, active-by-default accounts, parent_links
  migrations/0006_login_events.sql  login history (shown on the Accounts page)
  migrations/0007_balance_…sql      spread starter-bank answers evenly across A–D
  seed/ascend_questions.sql         90 starter PSAT/SAT questions
  seed/ascend_questions_batch2.sql  194 more (levels 1–2), answers balanced across A–D
  functions/admin-users             create/reset/delete accounts (any section)
  functions/generate-questions      Claude drafts PSAT/SAT questions
docs/                               handoff docs (4th Grade + original Ascend notes)
CNAME                               kidostutor.com
```

## Database (one Supabase project)

| Table | Used by |
|---|---|
| `profiles` | Everyone. `section` = `g4` / `psat` / `sat`, `role` = `student` / `parent` / `admin`, `active`, `must_change_password`, `g4_family_id` |
| `parent_links` | Which parent follows which kid (any section) |
| `ascend_questions`, `ascend_daily_sets`, `ascend_answers`, `ascend_question_reports` | PSAT & SAT |
| `attempts`, `points_ledger`, `quiz_locks`, `redemptions`, `skill_progress` | 4th Grade (existing; keyed by `family_id`: Krishna = `srk-family`, other kids = `g4-<profile id>`) |

Server functions for PSAT/SAT are all `ascend_*` (`ascend_get_today`, `ascend_submit_answer`, `ascend_weekly_report`, …).

## Go-live checklist

Do these **before** pushing to `main`. Once pushed, Krishna's old `srk` code stops working and he signs in with a username and password.

1. **Supabase → SQL Editor:** run the migrations `0001`–`0005` in order, plus `supabase/seed/ascend_questions.sql` after `0002`. (Done for the live project on 2026-10-09.)
2. **Authentication → Sign In / Providers:** turn **off** "Allow new users to sign up" and "Confirm email".
   **URL Configuration:** Site URL `https://kidostutor.com`.
3. **Your admin account:** Authentication → Users → Add user (your real email, auto-confirm). Then:
   ```sql
   update public.profiles set role = 'admin', active = true, section = 'sat', display_name = 'Andy'
   where id = (select id from auth.users where email = 'you@example.com');
   ```
4. **Edge functions** (Supabase CLI, from the repo root):
   ```bash
   supabase link --project-ref lairmjaqsqyqbrcatubm
   supabase secrets set STUDENT_EMAIL_DOMAIN=students.kidostutor.com ANTHROPIC_API_KEY=sk-ant-...
   supabase functions deploy admin-users
   supabase functions deploy generate-questions
   ```
5. **Accounts:** portal → **Manage accounts**. Students get a section; parents get ticked kids.
6. Push to `main`. GitHub Pages already serves the repo root at `kidostutor.com`, so no DNS change is needed for `/ascend`.
7. Smoke test: sign in as each account and check it lands in the right section. Then, as a PSAT student, answer a question and check that it appears in the admin's weekly report.

## Running locally

```bash
python3 -m http.server 8000     # from the repo root
```
Open `http://localhost:8000/` and add it to Supabase → Authentication → Redirect URLs.

## Adding content

- **4th Grade:** add `grade4/data/<subject>/chapter-NN-slug.js` and register it in that subject's `subject.js`. See `docs/4th Grade Explorer-handoff doc.docx`.
- **PSAT/SAT:** use Admin → Generate (AI drafts) or Import CSV, review, then publish.
