/* ==========================================================
   Math Chapter 5 — Compare Decimals
   Covers enVision Topic 1, Lesson 1-5.
   ========================================================== */

export const chapter = {
  id: "chapter-05-compare-decimals",
  name: "Compare Decimals",
  shortName: "Compare",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>⚖️ Compare Decimals</h2>
    <p>Comparing decimals is just like comparing whole numbers. But you have to <strong>line up the decimal points</strong> first!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The 3 Steps to Compare</span>
        <div class="sg-def">
          <strong>Step 1:</strong> Line up the numbers by their decimal points.<br>
          <strong>Step 2:</strong> Start at the <em>left</em>. Compare digits of the same place value.<br>
          <strong>Step 3:</strong> Find the first place where the digits are different. That digit tells you which number is greater.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Symbols</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          <strong>&lt;</strong> means "is less than"<br>
          <strong>&gt;</strong> means "is greater than"<br>
          <strong>=</strong> means "is equal to"<br><br>
          💡 The alligator eats the <em>bigger</em> number. The open side faces the larger value.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 1 — Compare 3.576 and 3.432</span>
        <div class="sg-def">
          3.576<br>
          3.432<br><br>
          • Line up decimal points: ✓<br>
          • Ones place: both are 3 (same)<br>
          • Tenths place: 5 vs 4 — different!<br>
          • 5 &gt; 4, so <strong>3.576 &gt; 3.432</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 2 — Compare 8.6 and 8.64</span>
        <div class="sg-def">
          8.6<strong>0</strong> &nbsp; ← add a zero to make them the same length<br>
          8.6<strong>4</strong><br><br>
          • Add a zero to 8.6 → 8.60<br>
          • Now compare: 8.60 vs 8.64<br>
          • Hundreds place: 0 vs 4 — different!<br>
          • 0 &lt; 4, so <strong>8.60 &lt; 8.64</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Zero Trick</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Adding zeros to the <em>right</em> of the last digit does <strong>NOT</strong> change the value.<br>
          <strong>0.6 = 0.60 = 0.600</strong><br><br>
          Use this trick when numbers have different lengths. It makes them easier to compare.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 3 — Order from least to greatest</span>
        <div class="sg-def">
          Order: 3.576, 3.432, 3.582<br><br>
          1. Line them up:<br>
          &nbsp;&nbsp;3.576<br>
          &nbsp;&nbsp;3.432<br>
          &nbsp;&nbsp;3.582<br><br>
          2. Compare tenths: 4 (from 3.432) is the smallest<br>
          &nbsp;&nbsp;→ <strong>3.432</strong> is least<br><br>
          3. Compare remaining: 3.576 vs 3.582<br>
          &nbsp;&nbsp;Hundredths: 7 vs 8 → 7 is smaller<br>
          &nbsp;&nbsp;→ <strong>3.576 &lt; 3.582</strong><br><br>
          4. Order: <strong>3.432, 3.576, 3.582</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> "12.68 is greater than 12.8 because 68 &gt; 8." <em>Wrong!</em> You can't compare the whole string. Align the decimals first:<br>
      12.68<br>
      12.80 &nbsp; ← 12.8 with the zero added<br>
      12.80 &gt; 12.68 because 8 tenths &gt; 6 tenths.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why does lining up decimals matter? Because 0.5 and 0.05 look similar but 0.5 is TEN times larger! The decimal point is your anchor.</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 questions)
     ========================================================== */
  miniCheck: [
    {
      question: "Which symbol makes this true?  0.4 ___ 0.04",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "0.4 = 0.40. Compare 0.40 and 0.04. Tenths: 4 > 0. So 0.4 > 0.04."
    },
    {
      question: "Which number is greater: 5.62 or 5.7?",
      options: ["5.62", "5.7", "They are equal", "Can't tell"],
      correct: 1,
      explanation: "Add a zero: 5.70. Compare 5.62 vs 5.70. Tenths: 6 vs 7. 7 > 6, so 5.7 > 5.62."
    },
    {
      question: "Which symbol makes this true?  3.45 ___ 3.499",
      options: ["<", ">", "="],
      correct: 0,
      explanation: "Line up: 3.45 = 3.450. Compare 3.450 vs 3.499. Hundredths: 5 vs 9. 5 < 9, so 3.45 < 3.499."
    },
    {
      question: "Order from least to greatest: 2.5, 2.35, 2.505",
      options: ["2.5, 2.35, 2.505", "2.35, 2.5, 2.505", "2.505, 2.5, 2.35", "2.35, 2.505, 2.5"],
      correct: 1,
      explanation: "Add zeros: 2.500, 2.350, 2.505. Tenths: 3, 5, 5. Least is 2.35. Then hundreds: 2.500 vs 2.505 → 0 < 5. Order: 2.35, 2.5, 2.505."
    },
    {
      question: "Which is true?",
      options: ["4.23 > 4.135", "4.23 < 4.135", "4.23 = 4.135"],
      correct: 0,
      explanation: "Add a zero: 4.230 vs 4.135. Tenths: 2 vs 1. 2 > 1, so 4.23 > 4.135."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (20 multiple-choice questions)
     ========================================================== */
  chapterQuiz: [
    {
      question: "Which symbol makes this true?  7.539 ___ 7.344",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "Ones both 7. Tenths: 5 vs 3. 5 > 3, so 7.539 > 7.344."
    },
    {
      question: "Which symbol makes this true?  4.953 ___ 4.951",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "Same until thousandths. 3 > 1, so 4.953 > 4.951."
    },
    {
      question: "Which symbol makes this true?  0.75 ___ 0.750",
      options: ["<", ">", "="],
      correct: 2,
      explanation: "Adding zeros to the right does not change the value. 0.75 = 0.750."
    },
    {
      question: "Which symbol makes this true?  3.074 ___ 3.740",
      options: ["<", ">", "="],
      correct: 0,
      explanation: "Ones both 3. Tenths: 0 vs 7. 0 < 7, so 3.074 < 3.740."
    },
    {
      question: "Which symbol makes this true?  15.99 ___ 15.991",
      options: ["<", ">", "="],
      correct: 0,
      explanation: "15.99 = 15.990. Compare 15.990 vs 15.991. Thousandths: 0 vs 1. 0 < 1, so 15.99 < 15.991."
    },
    {
      question: "Which symbol makes this true?  14.87 ___ 14.78",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "Tenths: 8 vs 7. 8 > 7, so 14.87 > 14.78."
    },
    {
      question: "Which symbol makes this true?  0.623 ___ 0.632",
      options: ["<", ">", "="],
      correct: 0,
      explanation: "Tenths: 6 vs 6 (same). Hundredths: 2 vs 3. 2 < 3, so 0.623 < 0.632."
    },
    {
      question: "Which symbol makes this true?  0.04 ___ 0.003",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "Hundredths: 4 vs 0. 4 > 0, so 0.04 > 0.003."
    },
    {
      question: "Which symbol makes this true?  6.51 ___ 6.510",
      options: ["<", ">", "="],
      correct: 2,
      explanation: "Adding a trailing zero doesn't change the value. 6.51 = 6.510."
    },
    {
      question: "Which symbol makes this true?  9.31 ___ 9.302",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "9.31 = 9.310. Compare 9.310 vs 9.302. Hundredths: 1 vs 0. 1 > 0, so 9.31 > 9.302."
    },
    {
      question: "Order from least to greatest: 4.25, 4.312, 4.241",
      options: [
        "4.241, 4.25, 4.312",
        "4.25, 4.241, 4.312",
        "4.312, 4.25, 4.241",
        "4.241, 4.312, 4.25"
      ],
      correct: 0,
      explanation: "Tenths: 2, 3, 2. 4.312 is greatest. Between 4.25 and 4.241 — add zero to 4.25 → 4.250. Hundredths: 5 vs 4. 4 is smaller. Order: 4.241, 4.25, 4.312."
    },
    {
      question: "Order from least to greatest: 0.312, 0.032, 0.203",
      options: [
        "0.032, 0.203, 0.312",
        "0.312, 0.203, 0.032",
        "0.203, 0.032, 0.312",
        "0.032, 0.312, 0.203"
      ],
      correct: 0,
      explanation: "Tenths: 3, 0, 2. Smallest is 0.032. Between 0.203 and 0.312: 0.2 < 0.3. Order: 0.032, 0.203, 0.312."
    },
    {
      question: "Order from greatest to least: 9.708, 9.087, 9.78",
      options: [
        "9.78, 9.708, 9.087",
        "9.087, 9.708, 9.78",
        "9.708, 9.78, 9.087",
        "9.78, 9.087, 9.708"
      ],
      correct: 0,
      explanation: "Tenths: 7, 0, 7. 9.087 is smallest. Between 9.708 and 9.78 → 9.780. Hundredths: 0 vs 8. 9.780 > 9.708. Order: 9.78, 9.708, 9.087."
    },
    {
      question: "Order from greatest to least: 62.905, 62.833, 62.950, 62.383",
      options: [
        "62.950, 62.905, 62.833, 62.383",
        "62.383, 62.833, 62.905, 62.950",
        "62.905, 62.950, 62.833, 62.383",
        "62.950, 62.833, 62.905, 62.383"
      ],
      correct: 0,
      explanation: "Tenths: 9, 8, 9, 3. 62.383 is smallest. 62.833 next. Between 62.905 and 62.950: hundredths 0 vs 5 → 950 > 905. Order: 62.950, 62.905, 62.833, 62.383."
    },
    {
      question: "Which number is greatest?",
      options: ["3.042", "3.24", "3.204", "3.024"],
      correct: 1,
      explanation: "Tenths: 0, 2, 2, 0. Largest is 2. Between 3.24 and 3.204: add zero → 3.240 vs 3.204. Hundredths: 4 vs 0. 3.24 is greatest."
    },
    {
      question: "Which statement is correct?",
      options: [
        "3,903 > 3,093",
        "5,889 > 5,889",
        "6,734 > 7,634",
        "300,012 > 300,102"
      ],
      correct: 0,
      explanation: "3,903 vs 3,093: thousands both 3, hundreds 9 vs 0. 9 > 0, so 3,903 > 3,093."
    },
    {
      question: "Which comparison is true?",
      options: [
        "3.062 > 3.26",
        "2.36 < 2.306",
        "6.23 > 6.203",
        "3.62 < 3.206"
      ],
      correct: 2,
      explanation: "6.23 = 6.230. Compare 6.230 vs 6.203: hundredths 3 vs 0. 6.23 > 6.203."
    },
    {
      question: "Choose ALL the numbers greater than 13.706.",
      options: [
        "13.7 only",
        "13.7 and 13.76 only",
        "13.7, 13.76, and 13.766",
        "All of them"
      ],
      correct: 2,
      explanation: "13.7 = 13.700 > 13.706 ✓. 13.67 < 13.706 ✗. 13.76 > 13.706 ✓. 13.607 < 13.706 ✗. 13.766 > 13.706 ✓."
    },
    {
      question: "A swimmer wins a race by 2/10 of a second. Which decimal is equal to 2/10?",
      options: ["0.02", "0.20", "2.00", "0.002"],
      correct: 1,
      explanation: "2/10 means 2 tenths. In decimal form, that's 0.2, which equals 0.20."
    },
    {
      question: "Which decimal is equivalent to 0.60?",
      options: ["0.06", "0.600", "6.0", "0.006"],
      correct: 1,
      explanation: "Adding zeros to the right does not change the value. 0.60 = 0.600."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     ========================================================== */
  dailyHomework: {
    day1: {
      skill: "Compare two decimals with <, >, or =",
      generator: "compareDecimals",
      args: {},
      count: 15,
      remember: "Line up the decimal points. Compare digit by digit from left to right. The first difference tells you which is greater.",
      workedExample: "Compare 3.45 and 3.49:\n3.45\n3.49\nTenths: 4 = 4\nHundredths: 5 vs 9 → 5 < 9\nSo 3.45 < 3.49"
    },

    day2: {
      skill: "Compare more decimals (with zero trick)",
      generator: "compareDecimals",
      args: {},
      count: 15,
      remember: "When one number has fewer decimal places, add zeros to the right to make them the same length. Then compare.",
      workedExample: "Compare 8.6 and 8.64:\n8.60\n8.64\nHundredths: 0 vs 4 → 0 < 4\nSo 8.60 < 8.64"
    },

    day3: {
      skill: "Order decimals (least to greatest)",
      generator: "orderDecimals",
      args: { count: 4, direction: "least" },
      count: 12,
      remember: "Line up decimal points. Compare the leftmost place first. The smallest digit in the leftmost place is your smallest number.",
      workedExample: "Order: 2.5, 2.35, 2.505\nAdd zeros: 2.500, 2.350, 2.505\nSmallest tenths: 3 → 2.35 is first\nThen 2.500 vs 2.505: hundredths 0 vs 0 (same), thousandths 0 vs 5 → 2.500 < 2.505\nOrder: 2.35, 2.5, 2.505"
    },

    day4: {
      skill: "Mixed: compare and order",
      mix: [
        { generator: "compareDecimals", args: {}, weight: 1, skill: "Compare" },
        { generator: "orderDecimals", args: { count: 4, direction: "least" }, weight: 1, skill: "Order least to greatest" },
        { generator: "orderDecimals", args: { count: 3, direction: "greatest" }, weight: 1, skill: "Order greatest to least" }
      ],
      count: 15,
      remember: "Read each question carefully. 'Compare' wants <, >, or =. 'Order' wants the numbers listed.",
      workedExample: "Compare: 4.5 ___ 4.48 → 4.5 > 4.48\nOrder 4.5, 4.48, 4.508 least to greatest: 4.48, 4.5, 4.508"
    },

    day5: {
      skill: "Compare and order decimals (challenge)",
      mix: [
        { generator: "compareDecimals", args: {}, weight: 1, skill: "Compare" },
        { generator: "orderDecimals", args: { count: 4, direction: "least" }, weight: 1, skill: "Order" },
        { generator: "identifyDecimalPlace", args: {}, weight: 1, skill: "Place ID" }
      ],
      count: 15,
      remember: "Mixed challenge day. Combine all the skills from this week.",
      workedExample: "In 3.457, which digit is in the hundredths place? → 5"
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