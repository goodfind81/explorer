# 4th Grade Science Explorer

An interactive learning app for 4th grade science, covering the Nature of Science unit. Includes chapter study guides, quick-check mini-quizzes, chapter quizzes, a mixed final exam, and a parent dashboard for tracking progress.

## What's inside

- **6 Science Chapters** — Scientific Method, Observations, Inferences, Qualitative vs Quantitative, Measurement, Variables
- **3 Quiz Modes per Chapter** — Mini-check (5 questions), Chapter Quiz (15 questions), Final Exam (20 mixed)
- **Parent Dashboard** — Track attempts, see topic performance, review missed questions
- **Data Storage** — IndexedDB (local browser storage) with JSON export/import for backups
- **Extensible** — Built to add Math and other subjects without touching core code

## Setup: Running Locally

Because the app uses JavaScript modules, you can't just double-click `index.html`. You need a small local server. Pick whichever is easiest:

### Option 1 — Python (usually already installed)
```bash
cd science-explorer
python3 -m http.server 8000