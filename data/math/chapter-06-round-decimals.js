/* ==========================================================
   Math Chapter 6 — Round Decimals
   Covers enVision Topic 1, Lesson 1-6.

   Daily Homework uses procedural generators from
   question-generators.js so every day's sheet is fresh.
   ========================================================== */

export const chapter = {
  id: "chapter-06-round-decimals",
  name: "Round Decimals",
  shortName: "Rounding",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>🎯 Round Decimals</h2>
    <p>Rounding replaces a number with another number that tells <strong>about how many</strong> or <strong>about how much</strong>. It's useful when you don't need an exact value.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The 3 Steps to Round</span>
        <div class="sg-def">
          <strong>Step 1:</strong> Find the rounding place. <em>Underline</em> that digit.<br>
          <strong>Step 2:</strong> Look at the digit <em>to the right</em>. <em>Circle</em> it.<br>
          <strong>Step 3:</strong> If the circled digit is <strong>5 or more, round UP</strong>. If it's <strong>less than 5, keep the same</strong>. Then drop all digits to the right.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Rhyme to Remember</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          <strong>4 or less — let it rest.</strong><br>
          <strong>5 or more — let it soar!</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 1 — Round to the nearest tenth</span>
        <div class="sg-def">
          Round <strong>2.36</strong> to the nearest tenth.<br><br>
          • Underline the tenths place: <strong>2.3</strong>6<br>
          • Circle the digit to the right: 2.3<strong>⑥</strong><br>
          • 6 is 5 or more → round up → <strong>2.4</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 2 — Round to the nearest whole number</span>
        <div class="sg-def">
          Round <strong>3.2</strong> to the nearest whole number.<br><br>
          • Underline the ones place: <strong>3</strong>.2<br>
          • Circle the digit to the right: 3.<strong>②</strong><br>
          • 2 is less than 5 → keep it the same → <strong>3</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 3 — Round to the nearest hundred</span>
        <div class="sg-def">
          Round <strong>428.1</strong> to the nearest hundred.<br><br>
          • Find the hundreds digit: <strong>4</strong>28.1<br>
          • Look at the digit to the right: 4<strong>②</strong>8.1<br>
          • 2 is less than 5 → keep the 4 → <strong>400</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Key Vocabulary</span>
        <div class="sg-def">
          • <strong>Rounding place</strong> — the place you want to round to (whole, tenth, hundredth, etc.)<br>
          • <strong>Halfway number</strong> — the number exactly between two values. If the digit is 5 or more, you've passed halfway.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake to Avoid:</strong> Do NOT round the final answer. Round <em>each number first</em>, then do the math. See the "Estimate Sums" section for examples.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do we round? Because sometimes "about 30" is more useful than "29.8735" — like when you estimate how much a grocery bag weighs!</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 questions)
     ========================================================== */
  miniCheck: [
    {
      question: "Round 2.36 to the nearest tenth.",
      options: ["2.3", "2.4", "2.0", "3.0"],
      correct: 1,
      explanation: "The tenths digit is 3. The digit to its right is 6, which is 5 or more, so round up: 2.4."
    },
    {
      question: "Round 8.542 to the nearest hundredth.",
      options: ["8.54", "8.55", "8.5", "9.00"],
      correct: 0,
      explanation: "The hundredths digit is 4. The digit to its right is 2, which is less than 5, so keep it: 8.54."
    },
    {
      question: "Round 15.7 to the nearest whole number.",
      options: ["15", "16", "15.5", "20"],
      correct: 1,
      explanation: "The ones digit is 5. The digit to its right is 7, which is 5 or more, so round up: 16."
    },
    {
      question: "Round 428.1 to the nearest hundred.",
      options: ["400", "500", "430", "428"],
      correct: 0,
      explanation: "The hundreds digit is 4. The digit to its right is 2, which is less than 5, so keep it: 400."
    },
    {
      question: "Round 56.24 to the nearest tenth.",
      options: ["56.2", "56.3", "56.0", "57.0"],
      correct: 0,
      explanation: "The tenths digit is 2. The digit to its right is 4, which is less than 5, so keep it: 56.2."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (20 multiple-choice questions)
     ========================================================== */
  chapterQuiz: [
    {
      question: "Round 10.278 to the nearest hundredth.",
      options: ["10.3", "10.28", "10.27", "10.30"],
      correct: 1,
      explanation: "Hundredths digit is 7. Digit to the right is 8, which is 5+. Round up: 10.28."
    },
    {
      question: "Round 5.643 to the nearest tenth.",
      options: ["5.6", "5.7", "5.64", "6.0"],
      correct: 0,
      explanation: "Tenths digit is 6. Digit to the right is 4, which is less than 5. Keep: 5.6."
    },
    {
      question: "Round 12.85 to the nearest whole number.",
      options: ["12", "13", "12.8", "12.9"],
      correct: 1,
      explanation: "The digit after the decimal is 8, which is 5+. Round up: 13."
    },
    {
      question: "Round 3.14159 to the nearest thousandth.",
      options: ["3.14", "3.142", "3.141", "3.15"],
      correct: 1,
      explanation: "Thousandths digit is 1. Digit to the right is 5, which is 5+. Round up: 3.142."
    },
    {
      question: "Round 47.385 to the nearest tenth.",
      options: ["47.3", "47.4", "47.38", "47.5"],
      correct: 1,
      explanation: "Tenths digit is 3. Digit to the right is 8, which is 5+. Round up: 47.4."
    },
    {
      question: "Round 68,472 to the nearest thousand.",
      options: ["68,000", "68,500", "69,000", "70,000"],
      correct: 0,
      explanation: "Thousands digit is 8. Digit to the right is 4, which is less than 5. Keep: 68,000."
    },
    {
      question: "Round 52.752 to the nearest tenth.",
      options: ["52.7", "52.8", "52.75", "53.0"],
      correct: 1,
      explanation: "Tenths digit is 7. Digit to the right is 5, which is 5+. Round up: 52.8."
    },
    {
      question: "Round 0.354 to the place of the underlined digit: 0.3<u>5</u>4",
      options: ["0.3", "0.35", "0.4", "0.36"],
      correct: 3,
      explanation: "The underlined digit is in the hundredths place (5). The digit to the right is 4, which is less than 5, so keep it: 0.35."
    },
    {
      question: "Round 8.418 to the place of the underlined digit: 8.4<u>1</u>8",
      options: ["8.4", "8.41", "8.42", "8.5"],
      correct: 2,
      explanation: "The underlined digit is in the hundredths place (1). Digit to the right is 8, which is 5+. Round up: 8.42."
    },
    {
      question: "Round 27.639 to the place of the underlined digit: 27.<u>6</u>39",
      options: ["27.6", "27.64", "27.7", "28"],
      correct: 0,
      explanation: "The underlined digit is in the tenths place (6). Digit to the right is 3, which is less than 5. Keep: 27.6."
    },
    {
      question: "Round 5.402 to the place of the underlined digit: <u>5</u>.402",
      options: ["5", "5.4", "6", "5.40"],
      correct: 0,
      explanation: "The underlined digit is the ones place (5). Digit to the right is 4, less than 5. Keep: 5."
    },
    {
      question: "Round 3.992 to the nearest tenth.",
      options: ["3.9", "3.99", "4.0", "4.1"],
      correct: 2,
      explanation: "Tenths digit is 9. Digit to the right is 9, which is 5+. 9 rounds up to 10, so carry to the ones place: 4.0."
    },
    {
      question: "Round 1.086 to the nearest whole number.",
      options: ["1", "2", "1.0", "1.1"],
      correct: 0,
      explanation: "Digit after the decimal is 0, which is less than 5. Keep the whole number: 1."
    },
    {
      question: "Round 183.92 to the nearest whole number.",
      options: ["183", "184", "183.9", "180"],
      correct: 1,
      explanation: "Digit after the decimal is 9, which is 5+. Round up: 184."
    },
    {
      question: "Round 905.255 to the nearest tenth.",
      options: ["905.2", "905.3", "905.25", "905.26"],
      correct: 1,
      explanation: "Tenths digit is 2. Digit to the right is 5, which is 5+. Round up: 905.3."
    },
    {
      question: "Estimate 61.4 + 88.3 by rounding each addend to the nearest whole number.",
      options: ["140", "149", "150", "160"],
      correct: 2,
      explanation: "61.4 → 61. 88.3 → 88. 61 + 88 = 149. Since the question says round each addend to the nearest whole number, the estimate is 149."
    },
    {
      question: "Estimate 398 + 612 by rounding each addend to the nearest hundred.",
      options: ["900", "1,000", "1,010", "1,100"],
      correct: 1,
      explanation: "398 → 400. 612 → 600. 400 + 600 = 1,000."
    },
    {
      question: "Estimate 7,842 − 3,267 by rounding each number to the nearest thousand.",
      options: ["4,000", "5,000", "4,500", "5,500"],
      correct: 1,
      explanation: "7,842 → 8,000. 3,267 → 3,000. 8,000 − 3,000 = 5,000."
    },
    {
      question: "Which two numbers both round to 15.5 when rounded to the nearest tenth?",
      options: ["15.04 and 15.55", "15.49 and 15.508", "15.0 and 15.445", "15.55 and 15.49"],
      correct: 1,
      explanation: "For a number to round to 15.5, the hundredths digit must be 5-9 AND the number must be between 15.45 and 15.55. 15.49 → 15.5. 15.508 → 15.5. Both work."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     Each day declares which generator to use. The generators
     produce fresh questions every time the sheet opens.
     ========================================================== */
  dailyHomework: {
    day1: {
      skill: "Round to the nearest tenth",
      generator: "roundToPlace",
      args: { place: "tenth" },
      count: 15,
      remember: "Find the tenths digit. Look at the digit to its right. If it's 5 or more, round up. If less than 5, keep the same.",
      workedExample: "2.36 → 2.4\n\n(look at the 6 after 3 → 6 is 5+ → round 3 up to 4)"
    },

    day2: {
      skill: "Round to the nearest hundredth",
      generator: "roundToPlace",
      args: { place: "hundredth" },
      count: 15,
      remember: "Find the hundredths digit. Look at the digit to its right. Round up if 5 or more.",
      workedExample: "8.542 → 8.54\n\n(look at the 2 after 4 → 2 is less than 5 → keep 4)"
    },

    day3: {
      skill: "Round to the nearest whole number",
      generator: "roundToPlace",
      args: { place: "whole" },
      count: 15,
      remember: "Look at the first digit after the decimal point. If it's 5 or more, round the whole number up. If less than 5, keep the whole number the same.",
      workedExample: "3.2 → 3\n\n(look at the 2 → 2 is less than 5 → keep 3)"
    },

    day4: {
      skill: "Mixed rounding (tenth, hundredth, whole)",
      mix: [
        { generator: "roundToPlace", args: { place: "tenth" }, weight: 1, skill: "Round to tenth" },
        { generator: "roundToPlace", args: { place: "hundredth" }, weight: 1, skill: "Round to hundredth" },
        { generator: "roundToPlace", args: { place: "whole" }, weight: 1, skill: "Round to whole" }
      ],
      count: 15,
      remember: "Read each problem carefully. The rounding place changes! Underline the rounding digit first.",
      workedExample: "3.456 to the nearest tenth → 3.5\n3.456 to the nearest hundredth → 3.46\n3.456 to the nearest whole → 3"
    },

    day5: {
      skill: "Round to hundred and thousand + estimate sums",
      mix: [
        { generator: "roundToPlace", args: { place: "hundred" }, weight: 1, skill: "Round to hundred" },
        { generator: "roundToPlace", args: { place: "thousand" }, weight: 1, skill: "Round to thousand" },
        { generator: "estimateSum", args: { roundTo: "hundred" }, weight: 1, skill: "Estimate sum" }
      ],
      count: 15,
      remember: "For estimation, round EACH number first, then do the math. Don't round the final answer!",
      workedExample: "Estimate 398 + 612:\n398 → 400\n612 → 600\n400 + 600 = 1,000"
    },

    day6: {
      type: "weekendReview",
      latestWeight: 0.6,
      count: 15
    },

    day7: {
      type: "weekendReview",
      latestWeight: 0.6,
      count: 15
    }
  }
};