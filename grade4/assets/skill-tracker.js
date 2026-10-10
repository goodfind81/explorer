/* ==========================================================
   skill-tracker.js
   The brain that decides:
     - Which skill is currently active in a subject
     - How many homework sessions have been passed (out of 5)
     - When to advance to the next skill
     - When the skill is mastered

   Backed by Supabase via the Storage layer. Uses the meta
   key format `skillProgress_<subject>` for compatibility with
   the existing Storage API.

   The shape of what getMeta returns is unchanged from the
   old IndexedDB version:
     {
       chapterId, skillKey,
       sessionsPassed, sessionsAttempted, lastUpdated
     }
   ========================================================== */

import { Storage } from "./storage.js";

const SESSIONS_REQUIRED = 5;
const PASSING_THRESHOLD = 85;

const META_KEY_PREFIX = "skillProgress_";

/* ==========================================================
   Read / write the current skill state
   ========================================================== */

async function readProgress(subjectId) {
  return await Storage.getMeta(META_KEY_PREFIX + subjectId);
}

async function writeProgress(subjectId, progress) {
  await Storage.setMeta(META_KEY_PREFIX + subjectId, progress);
}

/* ==========================================================
   Public API — get current skill
   ========================================================== */

/**
 * Get the current active skill for a subject.
 * Returns:
 *   {
 *     chapterId, chapterName,
 *     skillKey, skillLabel,
 *     skillIndex,
 *     sessionsPassed,
 *     sessionsAttempted,
 *     mastered,
 *     chapterComplete,
 *     allComplete
 *   }
 * Or null if subject has no chapters.
 */
export async function getCurrentSkill(subjectId, chapters) {
  if (!chapters || chapters.length === 0) return null;

  let progress = await readProgress(subjectId);

  // If no progress saved, initialise to first chapter, first skill
  if (!progress) {
    const first = firstSkillOfChapter(chapters[0]);
    if (!first) return null;
    progress = {
      chapterId: chapters[0].id,
      skillKey: first.key,
      sessionsPassed: 0,
      sessionsAttempted: 0
    };
    await writeProgress(subjectId, progress);
  }

  // Resolve chapter from progress
  const chapter = chapters.find(c => c.id === progress.chapterId);
  if (!chapter) {
    // Stale reference — reset
    const first = firstSkillOfChapter(chapters[0]);
    if (!first) return null;
    progress = {
      chapterId: chapters[0].id,
      skillKey: first.key,
      sessionsPassed: 0,
      sessionsAttempted: 0
    };
    await writeProgress(subjectId, progress);
    return getCurrentSkill(subjectId, chapters);
  }

  const skillMeta = findSkill(chapter, progress.skillKey);
  if (!skillMeta) {
    // Stale skill key — reset to first skill of this chapter
    const first = firstSkillOfChapter(chapter);
    progress.skillKey = first.key;
    progress.sessionsPassed = 0;
    progress.sessionsAttempted = 0;
    await writeProgress(subjectId, progress);
    return getCurrentSkill(subjectId, chapters);
  }

  const mastered = progress.sessionsPassed >= SESSIONS_REQUIRED;

  return {
    chapterId: chapter.id,
    chapterName: chapter.name,
    skillKey: skillMeta.key,
    skillLabel: skillMeta.label,
    skillIndex: chapter.skills.indexOf(skillMeta),
    sessionsPassed: progress.sessionsPassed,
    sessionsAttempted: progress.sessionsAttempted,
    mastered,
    chapterComplete: false,
    allComplete: false
  };
}

/* ==========================================================
   Public API — record a homework attempt
   ========================================================== */

/**
 * Called after scoring a homework sheet.
 * If passed (>= 85%), increments sessionsPassed.
 * If sessionsPassed reaches 5, advances to the next skill.
 */
export async function recordHomeworkAttempt(subjectId, chapters, attempt) {
  const passed = attempt.percent >= PASSING_THRESHOLD;
  let progress = await readProgress(subjectId);

  if (!progress) {
    await getCurrentSkill(subjectId, chapters);
    progress = await readProgress(subjectId);
  }

  progress.sessionsAttempted = (progress.sessionsAttempted || 0) + 1;
  if (passed) {
    progress.sessionsPassed = (progress.sessionsPassed || 0) + 1;
  }

  await writeProgress(subjectId, progress);

  let advanced = false;
  let newSkill = null;

  if (progress.sessionsPassed >= SESSIONS_REQUIRED) {
    const next = await advanceSkill(subjectId, chapters, progress);
    if (next) {
      advanced = true;
      newSkill = next;
    }
  }

  return { passed, advanced, newSkill };
}

/* ==========================================================
   Advance to the next skill
   ========================================================== */

async function advanceSkill(subjectId, chapters, progress) {
  const chapter = chapters.find(c => c.id === progress.chapterId);
  if (!chapter || !chapter.skills) return null;

  const currentIdx = chapter.skills.findIndex(s => s.key === progress.skillKey);
  if (currentIdx === -1) return null;

  const nextSkillInChapter = chapter.skills[currentIdx + 1];

  if (nextSkillInChapter) {
    // Move to next skill in the same chapter
    const nextProgress = {
      chapterId: chapter.id,
      skillKey: nextSkillInChapter.key,
      sessionsPassed: 0,
      sessionsAttempted: 0
    };
    await writeProgress(subjectId, nextProgress);
    return {
      chapterId: chapter.id,
      chapterName: chapter.name,
      skillKey: nextSkillInChapter.key,
      skillLabel: nextSkillInChapter.label
    };
  }

  // Chapter complete — move to next chapter's first skill
  const chapterIdx = chapters.findIndex(c => c.id === chapter.id);
  const nextChapter = chapters[chapterIdx + 1];

  if (nextChapter && nextChapter.skills && nextChapter.skills.length > 0) {
    const firstSkill = nextChapter.skills[0];
    const nextProgress = {
      chapterId: nextChapter.id,
      skillKey: firstSkill.key,
      sessionsPassed: 0,
      sessionsAttempted: 0
    };
    await writeProgress(subjectId, nextProgress);
    return {
      chapterId: nextChapter.id,
      chapterName: nextChapter.name,
      skillKey: firstSkill.key,
      skillLabel: firstSkill.label,
      newChapter: true
    };
  }

  // Subject complete — no more skills
  return null;
}

/* ==========================================================
   Public API — manual override
   ========================================================== */

/**
 * Allows the parent to jump to any skill in any chapter.
 * Resets sessions to 0/5 so the 5-session counter starts fresh.
 */
export async function setCurrentSkill(subjectId, chapterId, skillKey) {
  const progress = {
    chapterId,
    skillKey,
    sessionsPassed: 0,
    sessionsAttempted: 0
  };
  await writeProgress(subjectId, progress);
  return progress;
}

/* ==========================================================
   Public API — get chapter skill status (for parent dashboard)
   ========================================================== */

/**
 * Get the full skills array of a chapter with per-skill status.
 * Returns an array of:
 *   {
 *     key, label,
 *     sessionsPassed,
 *     mastered,
 *     current,
 *     attempted
 *   }
 */
export async function getChapterSkillStatus(subjectId, chapter) {
  if (!chapter || !chapter.skills) return [];

  const progress = await readProgress(subjectId);
  const isThisChapter = progress && progress.chapterId === chapter.id;
  const currentKey = isThisChapter ? progress.skillKey : null;
  const currentIdx = currentKey
    ? chapter.skills.findIndex(s => s.key === currentKey)
    : -1;

  return chapter.skills.map((skill, idx) => {
    let sessionsPassed = 0;
    let mastered = false;
    let current = false;
    let attempted = false;

    if (isThisChapter) {
      if (idx < currentIdx) {
        sessionsPassed = SESSIONS_REQUIRED;
        mastered = true;
        attempted = true;
      } else if (idx === currentIdx) {
        sessionsPassed = progress.sessionsPassed || 0;
        mastered = sessionsPassed >= SESSIONS_REQUIRED;
        current = true;
        attempted = (progress.sessionsAttempted || 0) > 0;
      }
    }

    return {
      key: skill.key,
      label: skill.label,
      sessionsPassed,
      mastered,
      current,
      attempted
    };
  });
}

/* ==========================================================
   Helpers
   ========================================================== */

function firstSkillOfChapter(chapter) {
  if (!chapter || !chapter.skills || chapter.skills.length === 0) return null;
  return chapter.skills[0];
}

function findSkill(chapter, skillKey) {
  if (!chapter || !chapter.skills) return null;
  return chapter.skills.find(s => s.key === skillKey) || null;
}

/* ==========================================================
   Reset (for testing / parent reset)
   ========================================================== */

export async function resetProgress(subjectId, chapters) {
  const first = firstSkillOfChapter(chapters[0]);
  if (!first) return null;
  const progress = {
    chapterId: chapters[0].id,
    skillKey: first.key,
    sessionsPassed: 0,
    sessionsAttempted: 0
  };
  await writeProgress(subjectId, progress);
  return progress;
}