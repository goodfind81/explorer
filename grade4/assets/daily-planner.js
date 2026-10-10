/* ==========================================================
   daily-planner.js
   Determines which day of the daily homework sequence we're on,
   tracks which days have been passed, and prepares data for
   the parent dashboard.

   Day mapping (based on calendar day of week):
     Monday    → Day 1
     Tuesday   → Day 2
     Wednesday → Day 3
     Thursday  → Day 4
     Friday    → Day 5
     Saturday  → Day 6 (Weekend Review)
     Sunday    → Day 7 (Weekend Review)

   A day is "passed" if the student scored ≥ 85% on that day's
   sheet for that chapter.

   The planner checks IndexedDB via Storage.getAllAttempts() to
   find what's been passed.
   ========================================================== */

import { Storage } from "./storage.js";

const PASSING_THRESHOLD = 85;

/* ---------- Calendar helpers ---------- */

/**
 * Get the current day number (1-7) based on the calendar.
 * Monday = 1, Sunday = 7.
 */
export function getTodayDayNumber() {
  const jsDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  // Map: Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7
  const map = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 0: 7 };
  return map[jsDay];
}

/**
 * Get a friendly label for the given day number.
 */
export function getDayLabel(dayNumber) {
  return {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun"
  }[dayNumber] || "Day";
}

/**
 * Get a longer name for the day.
 */
export function getDayName(dayNumber) {
  return {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday (Weekend Review)",
    7: "Sunday (Weekend Review)"
  }[dayNumber] || "Day";
}

/* ---------- Progress tracking ---------- */

/**
 * For a given subject + chapter, return the status of all 7 days.
 * Returns an array of objects:
 *   [
 *     { dayNumber: 1, passed: true, bestScore: 15, bestPercent: 100, attempts: 2 },
 *     { dayNumber: 2, passed: false, bestScore: 11, bestPercent: 73, attempts: 1 },
 *     ...
 *   ]
 */
export async function getDayStatus(subjectId, chapterId) {
  const allAttempts = await Storage.getAllAttempts();

  const result = [];
  for (let day = 1; day <= 7; day++) {
    const dayAttempts = allAttempts.filter(a =>
      a.type === "daily-homework" &&
      a.subject === subjectId &&
      a.chapter === chapterId &&
      a.dayNumber === day
    );

    if (dayAttempts.length === 0) {
      result.push({
        dayNumber: day,
        passed: false,
        attempted: false,
        bestScore: 0,
        bestPercent: 0,
        attempts: 0,
        latestAttempt: null
      });
      continue;
    }

    // Find best score
    const best = dayAttempts.reduce((max, a) => a.percent > max.percent ? a : max, dayAttempts[0]);

    result.push({
      dayNumber: day,
      passed: best.percent >= PASSING_THRESHOLD,
      attempted: true,
      bestScore: best.score,
      bestPercent: best.percent,
      attempts: dayAttempts.length,
      latestAttempt: dayAttempts[0] // sorted newest first by Storage
    });
  }

  return result;
}

/**
 * Returns the last 5 skills for a chapter, in order, based on
 * day attempts. Used by the weekend review to blend 60% latest
 * + 40% old.
 *
 * Each returned item is:
 *   { generator, args, skill }  — extracted from the day config
 *
 * The chapter file supplies the dailyHomework declaration, so we
 * just read what's actually configured for each day rather than
 * inferring from attempt history.
 */
export function getWeekSkillsFromChapter(chapter) {
  if (!chapter.dailyHomework) return [];

  const skills = [];
  for (let day = 1; day <= 5; day++) {
    const dayConfig = chapter.dailyHomework[`day${day}`];
    if (!dayConfig) continue;

    if (dayConfig.generator) {
      skills.push({
        generator: dayConfig.generator,
        args: dayConfig.args || {},
        skill: dayConfig.skill || dayConfig.generator
      });
    } else if (dayConfig.mix) {
      // For a mixed day, use the first sub-generator as the "representative" skill
      const first = dayConfig.mix[0];
      skills.push({
        generator: first.generator,
        args: first.args || {},
        skill: dayConfig.skill || first.skill || first.generator
      });
    }
  }
  return skills;
}

/**
 * For a given chapter, determine if the student is ready for the
 * weekend review (Saturday/Sunday).
 * Ready = at least 3 of the 5 weekday days have been passed.
 */
export async function isWeekendReady(subjectId, chapter) {
  const status = await getDayStatus(subjectId, chapter.id);
  const weekdayDays = status.filter(s => s.dayNumber >= 1 && s.dayNumber <= 5);
  const passedCount = weekdayDays.filter(s => s.passed).length;
  return passedCount >= 3;
}

/* ---------- Dashboard feed ---------- */

/**
 * For the parent dashboard: get a summary of daily homework
 * across all chapters for the given subject.
 *
 * Returns:
 *   {
 *     byChapter: {
 *       "chapter-06-round-decimals": {
 *         chapterName, dayStatus: [...]
 *       },
 *       ...
 *     },
 *     todayChapter: "chapter-06-round-decimals" (or null),
 *     todayDayNumber: 3
 *   }
 */
export async function getDailyHomeworkSummary(subjectId, chapters) {
  const byChapter = {};
  for (const ch of chapters) {
    const dayStatus = await getDayStatus(subjectId, ch.id);
    byChapter[ch.id] = {
      chapterName: ch.name,
      shortName: ch.shortName,
      dayStatus
    };
  }

  return {
    byChapter,
    todayDayNumber: getTodayDayNumber()
  };
}

/**
 * Given a set of attempts filtered to daily-homework, group by
 * chapter and day for the parent's day-by-day answer view.
 *
 * Returns a nested structure:
 *   {
 *     "chapter-06-round-decimals": {
 *       1: [attempt1, attempt2, ...],  // all attempts on day 1
 *       2: [...],
 *       ...
 *     }
 *   }
 */
export async function groupDailyAttemptsByChapterAndDay(subjectId) {
  const all = await Storage.getAllAttempts();
  const filtered = all.filter(a =>
    a.type === "daily-homework" && a.subject === subjectId
  );

  const grouped = {};
  for (const a of filtered) {
    if (!grouped[a.chapter]) grouped[a.chapter] = {};
    if (!grouped[a.chapter][a.dayNumber]) grouped[a.chapter][a.dayNumber] = [];
    grouped[a.chapter][a.dayNumber].push(a);
  }
  return grouped;
}