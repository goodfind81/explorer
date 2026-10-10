# Ascend

**Ascend by KidosTutor** · `https://ascend.kidostutor.com`

Daily PSAT/SAT practice for KidosTutor students: 15 Reading & Writing and 15 Math questions a day, matched to grade (Grade 9 → PSAT 8/9, Grade 11 → PSAT/NMSQT & SAT) and weighted toward each student's weakest skills.

- **Front end:** plain HTML/JS in `web/`, hosted on GitHub Pages (no build step).
- **Back end:** Supabase (Postgres, Auth, Edge Functions).
- **Starter content:** 90 original SAT-style questions in `supabase/seed.sql`.

```
web/                      the site (GitHub Pages serves this folder)
  index.html, student.js    student login and practice
  admin.html, admin.js      admin: weekly report, questions, generate, import, students, reports
  lib.js, styles.css        shared code and styles
  config.js                 your Supabase URL and anon key  ← edit this
  question-template.csv     CSV import template
supabase/
  migrations/0001_ascend.sql   tables, security rules, server functions
  seed.sql                            90 starter questions
  functions/admin-users               create students, reset passwords, delete
  functions/generate-questions        Claude writes draft questions for chosen skills
.github/workflows/pages.yml           deploys web/ to GitHub Pages on push
```

## How it works

| | |
|---|---|
| **Logins** | You create each student with a username and password. Behind the scenes the username maps to `username@STUDENT_EMAIL_DOMAIN`; no email is ever sent. |
| **Daily sets** | Built on the server the first time a student opens the site each day. Up to 3 questions they missed on earlier days come back, the rest are new questions weighted toward weak domains. When the bank runs low, more missed and then oldest questions fill the gap. |
| **Grading** | Done on the server. Students never receive the answer key until they've answered, and they can't read the question table directly. |
| **Weekly report** | Admin → Weekly report. Per student: days active, accuracy and trend vs last week, minutes, weakest skills. Across students: weakest skills, with a **Draft 5 questions** button that opens Generate prefilled with those skills. It also shows how many published questions each domain has per difficulty. |
| **New questions** | **Generate** (Claude writes drafts) or **Import CSV**. Everything new lands as a draft. Review it in **Questions**, edit if needed, then publish. Only published questions reach students. |
| **Reports** | Students can report a question after answering it. Reports show up in Admin → Reported. |

## Setup (about 30 minutes)

### 1. Supabase project

1. Create a project at [supabase.com](https://supabase.com).
2. **SQL Editor** → paste and run `supabase/migrations/0001_ascend.sql`, then `supabase/seed.sql`.
3. **Authentication → Sign In / Providers:**
   - Turn **off** "Allow new users to sign up" (in the User Signups section at the top) and click Save. Only you create accounts.
   - Under **Email**, turn **off** "Confirm email".

   Backup guard: even if sign-ups get switched back on, a self-registered account is created **paused** and gets no questions. Only accounts made from Admin → Students start active. A stray one shows up in the Students list as paused; delete it.
4. **Authentication → URL Configuration:** set Site URL to your site address, `https://ascend.kidostutor.com`.

### 2. Your admin account

1. **Authentication → Users → Add user** with your real email and a strong password. Tick "Auto confirm".
2. **SQL Editor:**
   ```sql
   update public.profiles set role = 'admin', active = true, display_name = 'Andy'
   where id = (select id from auth.users where email = 'you@example.com');
   ```

### 3. Edge functions

Install the [Supabase CLI](https://supabase.com/docs/guides/cli), then from this folder:

```bash
supabase login
supabase link --project-ref YOUR-PROJECT-REF
supabase secrets set STUDENT_EMAIL_DOMAIN=students.kidostutor.com
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...        # from console.anthropic.com
supabase secrets set ANTHROPIC_MODEL=claude-sonnet-5-5   # optional; this is the default
supabase functions deploy admin-users
supabase functions deploy generate-questions
```

`STUDENT_EMAIL_DOMAIN` can be any domain you control; nothing is sent to it. It must match `web/config.js`.

### 4. Site config

Edit `web/config.js` with values from **Project Settings → API**:

```js
export const SUPABASE_URL = "https://abcd1234.supabase.co";
export const SUPABASE_ANON_KEY = "eyJ...";            // the anon / publishable key, never the service role key
export const STUDENT_EMAIL_DOMAIN = "students.kidostutor.com";
```

The anon key is meant to be public. The database's row-level security rules decide what each login can do.

### 5. GitHub Pages and your subdomain

1. Push this folder to a GitHub repo (main branch).
2. Repo **Settings → Pages → Source: GitHub Actions**. The included workflow publishes `web/` on every push.
3. Same page → **Custom domain:** `ascend.kidostutor.com` → Save, then tick **Enforce HTTPS** once it appears.
4. At your domain's DNS provider, add a record:

   | Type | Name | Value |
   |---|---|---|
   | CNAME | `ascend` | `YOUR-GITHUB-USERNAME.github.io` |

   This doesn't touch the root domain or whatever hosts your Schoology content; only the new subdomain points to GitHub.

The student site is at `https://ascend.kidostutor.com/` and the admin at `https://ascend.kidostutor.com/admin.html`.

### 6. Add students

Admin → **Students** → Add a student. Copy the username and password it shows and give them to the student.

## Weekly routine

1. **Weekly report:** check who practiced and the weak areas across students.
2. Click **Draft 5 questions** on a weak skill, or **Draft for the top weak skills**. Adjust the count or add a note, then **Write drafts**.
3. **Review N new drafts** → open each one, check the answer and explanation, then **Save and publish** (or tick several and **Publish selected**).
4. Check **Reported** for questions students flagged.
5. Keep an eye on the Question bank table at the bottom of the report. Domains under 10 published questions for a grade's levels run out first.

## CSV format

`subject,level,domain,skill,passage,question,choice_a,choice_b,choice_c,choice_d,answer,explanation`

- `subject`: `rw` or `math`
- `level`: 1 easy, 2 medium, 3 hard. Grade 9 uses 1–2 and Grade 11 uses 2–3.
- `domain`: one of
  - R&W: Craft and Structure, Information and Ideas, Standard English Conventions, Expression of Ideas
  - Math: Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry
- `answer`: `A`–`D` for multiple choice. For typed answers, leave the four choice columns empty and list accepted answers separated by `|`, e.g. `2.5|5/2`.
- Write exponents as `x^{2}` and blanks as `______`.

See `web/question-template.csv`.

## About question sources

All questions here are original. Don't import questions copied from College Board, Bluebook or Khan Academy: they're copyrighted and their terms forbid reuse. The student site links to those official resources instead.

## Local testing

Serve `web/` with any static server, e.g. `npx serve web`, and add `http://localhost:3000` to Supabase's Redirect URLs.
