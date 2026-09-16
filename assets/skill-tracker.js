/* ==========================================================
   skill-tracker.js
   The brain that decides:
     - Which skill is currently active in a subject
     - How many homework sessions have been passed (out of 5)
     - When to advance to the next skill
     - When the skill is mastered

   Data stored in IndexedDB meta table:
     skillProgress_<subjectId> = {
       chapterId: "chapter-06-round-decimals",
       skillKey: "round-tenth",
       sessionsPassed: 3,
       sessionsAttempted: 4,
       lastUpdated: "2025-..."
     }

   A skill is "mastered" when sessionsPassed reaches 5.
   Once mastered, the tracker advances to the next skill
   in the chapter's skills array. If the chapter is finished,
   it advances to the first skill of the next chapter.
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
 *     skillIndex,               // 0-based index within chapter.skills
 *     sessionsPassed,
 *     sessionsAttempted,
 *     mastered,                 // sessionsPassed >= 5
 *     chapterComplete,          // all skills in chapter mastered
 *     allComplete               // every chapter in subject mastered
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
      sessionsAttempted: 0,
      lastUpdated: new Date().toISOString()
    };
    await writeProgress(subjectId, progress);
  }

  // Resolve chapter + skill from progress
  const chapter = chapters.find(c => c.id === progress.chapterId);
  if (!chapter) {
    // Stale reference — reset
    const first = firstSkillOfChapter(chapters[0]);
    if (!first) return null;
    progress = {
      chapterId: chapters[0].id,
      skillKey: first.key,
      sessionsPassed: 0,
      sessionsAttempted: 0,
      lastUpdated: new Date().toISOString()
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
    progress.lastUpdated = new Date().toISOString();
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
 *
 * Returns:
 *   {
 *     passed,                 // did this attempt pass?
 *     advanced,               // did we move to a new skill?
 *     newSkill: { ... }       // if advanced, info about the new skill
 *   }
 */
export async function recordHomeworkAttempt(subjectId, chapters, attempt) {
  const passed = attempt.percent >= PASSING_THRESHOLD;
  let progress = await readProgress(subjectId);
  if (!progress) {
    // Shouldn't happen if getCurrentSkill was called first, but be safe
    await getCurrentSkill(subjectId, chapters);
    progress = await readProgress(subjectId);
  }

  progress.sessionsAttempted = (progress.sessionsAttempted || 0) + 1;
  if (passed) {
    progress.sessionsPassed = (progress.sessionsPassed || 0) + 1;
  }
  progress.lastUpdated = new Date().toISOString();

  await writeProgress(subjectId, progress);

  let advanced = false;
  let newSkill = null;

  if (progress.sessionsPassed >= SESSIONS_REQUIRED) {
    // Advance to next skill
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
      sessionsAttempted: 0,
      lastUpdated: new Date().toISOString()
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
      sessionsAttempted: 0,
      lastUpdated: new Date().toISOString()
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
    sessionsAttempted: 0,
    lastUpdated: new Date().toISOString()
  };
  await writeProgress(subjectId, progress);
  return progress;
}

/* ==========================================================
   Public API — get skill progress for a specific chapter
   (used by parent dashboard and chapter view)
   ========================================================== */

/**
 * Get the full skills array of a chapter with per-skill status.
 * Returns an array of:
 *   {
 *     key, label,
 *     sessionsPassed,       // 0..5
 *     mastered,             // true if passed 5 times
 *     current,              // true if this is the active skill
 *     attempted             // true if any attempt exists
 *   }
 * The current skill state is derived from meta. Other skills
 * in the chapter are assumed mastered if they come before
 * the current skill (because the tracker only moves forward),
 * and not started if they come after.
 */
export async function getChapterSkillStatus(subjectId, chapter) {
  if (!chapter || !chapter.skills) return [];

  const progress = await readProgress(subjectId);
  const isThisChapter = progress && progress.chapterId === chapter.id;
  const currentKey = isThisChapter ? progress.skillKey : null;
  const currentIdx = currentKey
    ? chapter.skills.findIndex(s => s.key === currentKey)
    : -1;

  // Is the whole chapter behind us? (i.e., we've moved past it)
  const chapterIdxInSubject = chapter.__subjectIndex;
  const currentChapterIdx = progress
    ? progress.chapterId // compare by id
    : null;

  return chapter.skills.map((skill, idx) => {
    let sessionsPassed = 0;
    let mastered = false;
    let current = false;
    let attempted = false;

    if (isThisChapter) {
      if (idx < currentIdx) {
        // Previous skills in this chapter are mastered
        sessionsPassed = SESSIONS_REQUIRED;
        mastered = true;
        attempted = true;
      } else if (idx === currentIdx) {
        sessionsPassed = progress.sessionsPassed || 0;
        mastered = sessionsPassed >= SESSIONS_REQUIRED;
        current = true;
        attempted = (progress.sessionsAttempted || 0) > 0;
      } else {
        // Future skills in this chapter — not started
        sessionsPassed = 0;
      }
    } else if (progress && isChapterBeforeInSubject(chapter, progress, chapterIdxInSubject)) {
      // Chapter is entirely before the current chapter — all mastered
      sessionsPassed = SESSIONS_REQUIRED;
      mastered = true;
      attempted = true;
    } else {
      // Chapter is after the current chapter — nothing started
      sessionsPassed = 0;
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

/**
 * Dummy helper — we'll simplify this in a later pass.
 * For now, only treats skills within the current chapter specially.
 */
function isChapterBeforeInSubject() {
  return false;
}