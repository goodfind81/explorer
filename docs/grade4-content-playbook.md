# 4th Grade content playbook

How new Schoology downloads become 4th Grade Explorer chapters. The nightly job
(`~/project2026/Schoology Downloads/build_content.sh`) runs Claude with these
instructions; do the same steps by hand when asked in a session.

## Inputs

- Downloads live in `~/project2026/Schoology Downloads/<date>/<Math|Science|History>/`.
- `content_log.json` in that folder lists files already turned into content (or
  deliberately skipped). Only work on files that aren't in it.
- Read PDFs and images directly. `.webloc` files are web links: note them, don't build from them.
- Read `.docx`/`.doc` with `textutil -convert txt -stdout <file>`. Skim `.pptx`
  only if nothing else covers the lesson.

## Decide what to build

1. Group the new files by lesson/topic.
2. Check existing chapters in `grade4/data/<subject>/` (header comments and
   `sg-label`s) for what's already covered. Skip content that's already covered.
3. Then, for each new topic:
   - **Math:** a lesson in the same enVision topic as an existing "growing
     chapter" (e.g. Topic 4 → `chapter-11-multiply-decimals.js`) extends that
     chapter: add a study-guide section, quiz questions, and a skill. A new topic
     gets a new chapter.
   - **Science/History:** a new unit, region, or clearly new idea gets a new chapter.
     Small additions to a just-built chapter can extend it.
4. Skip files with no teachable content: Do Now slides with only directions,
   seating charts, links-only slides, answer keys for content not yet taught.

## Chapter format

Copy the shape of the most recent chapter in the same subject. Each chapter file
exports `chapter = { id, name, shortName, studyGuideHtml, miniCheck, chapterQuiz, skills }`.

- `id` matches the filename: `chapter-NN-slug`. Number = next free number in that subject.
- `studyGuideHtml`: `<h2>` with an emoji, intro `<p>`, then `.study-guide` with
  `.sg-row` → `.sg-label` + `.sg-def` blocks, then a `.highlight` (common mistake)
  and a `.fun-fact` ("Einstein Wonders").
- `miniCheck`: 5 questions. `chapterQuiz`: 25–50 questions (Math ~25, History/Science 30–50).
  Each `{ question, options, correct, explanation }`. Options are shuffled when
  shown, so never use "All of the above" or "Both A and B".
- `skills`:
  - **Math:** each skill names a `generator` in `grade4/assets/question-generators.js`
    and is used for daily typed-answer homework. Reuse an existing generator when one
    fits. Otherwise add one. Keep decimals as scaled integers so there's no
    floating-point noise, and support `multipleChoice: false` (returns `{question, answer, explanation}`).
  - **Science/History:** no generator. Just `key, label, remember, workedExample`.
- Register the chapter in `grade4/data/<subject>/subject.js` (import + add to `chapters`).

## Accuracy rules

- Every fact must come from the class materials. Don't add outside facts kids
  could be tested against differently.
- If the source is wrong (a wrong date or number), leave that detail out and
  mention it in the review notes. Don't teach the error, and don't contradict the teacher.
- Use the teacher's numbers when they differ from an older chapter, and flag the older
  chapter in the review notes. Don't edit published chapters unless asked.
- Write original questions in your own words. Mirroring a homework item's numbers is fine.

## Checks before finishing

Run from the repo root:

```sh
node -e 'for (const s of ["math","science","history"]) import(`./grade4/data/${s}/subject.js`).then(m => console.log(s, m.chapters.length))'
```

Then check each new or changed chapter: every `correct` index is in range, there
are no duplicate options, and every Math answer is recomputed with node (not by
eye). For new generators, run each 3,000 times and look for `NaN`, `undefined`,
`e+`, `9999`/`0000` float noise, and duplicate options.

## Finish

- **Don't commit and don't push.** Leave the new and changed files uncommitted in
  the working tree. The parent reviews them, commits, and pushes to publish.
- Write the review notes to `~/project2026/Schoology Downloads/content_review.md`:
  - what was added, and in which chapters
  - files skipped, and why
  - anything the parent should check
  - a `PROCESSED:` line followed by every source file path you handled or skipped, one per line

## Publishing

The nightly job writes straight into `~/project2026/explorer` on `main` and leaves
the changes uncommitted. It skips the night (and logs why) if the repo isn't on
`main`. The parent reviews the changes in VS Code's Source Control panel, then
commits and pushes. GitHub Pages publishes within a minute or two. Preview first with
`python3 -m http.server 8001` from the repo root if wanted.
