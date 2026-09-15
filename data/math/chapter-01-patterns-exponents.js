/* ==========================================================
   Math Chapter 1 — Patterns with Exponents and Powers of 10
   Covers enVision Topic 1, Lesson 1-1.
   ========================================================== */

export const chapter = {
  id: "chapter-01-patterns-exponents",
  name: "Patterns with Exponents and Powers of 10",
  shortName: "Exponents",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>⚡ Patterns with Exponents and Powers of 10</h2>
    <p>An exponent is a shortcut for repeated multiplication. When the base is 10, the exponent tells you how many zeros will be in the answer!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Parts of a Power</span>
        <div class="sg-def">
          <div style="text-align:center; font-size:1.4em; margin: 10px 0;">
            <span style="color: var(--primary-blue); font-weight: bold;">10</span><sup style="color: var(--accent-red); font-weight: bold;">3</sup>
          </div>
          <div style="text-align:center;">
            <span style="color: var(--primary-blue); font-weight: bold;">↑ base</span> &nbsp;&nbsp;
            <span style="color: var(--accent-red); font-weight: bold;">↑ exponent</span>
          </div>
          <br>
          • <strong>Base</strong> — the number being multiplied (here, 10).<br>
          • <strong>Exponent</strong> — how many times to multiply the base by itself (here, 3 times).<br>
          • <strong>Power</strong> — the whole thing: 10<sup>3</sup>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Magic Pattern of 10s</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          <strong>10<sup>0</sup> = 1</strong> &nbsp; (no zeros)<br>
          <strong>10<sup>1</sup> = 10</strong> &nbsp; (1 zero)<br>
          <strong>10<sup>2</sup> = 100</strong> &nbsp; (2 zeros)<br>
          <strong>10<sup>3</sup> = 1,000</strong> &nbsp; (3 zeros)<br>
          <strong>10<sup>4</sup> = 10,000</strong> &nbsp; (4 zeros)<br>
          <strong>10<sup>5</sup> = 100,000</strong> &nbsp; (5 zeros)<br>
          <strong>10<sup>6</sup> = 1,000,000</strong> &nbsp; (6 zeros)<br><br>
          💡 <strong>The exponent = the number of zeros!</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 1 — Multiplying by 10</span>
        <div class="sg-def">
          Write <strong>10 × 10 × 10 × 10 × 10</strong> with an exponent.<br><br>
          • Count the number of 10s: 5<br>
          • Exponent = 5<br>
          • Base = 10<br>
          • <strong>10 × 10 × 10 × 10 × 10 = 10<sup>5</sup></strong> = 100,000
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 2 — Multiplying a single digit by a power of 10</span>
        <div class="sg-def">
          Write <strong>5,000</strong> using an exponent.<br><br>
          • 5,000 = 5 × 1,000<br>
          • 1,000 = 10<sup>3</sup> (3 zeros)<br>
          • <strong>5,000 = 5 × 10<sup>3</sup></strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 3 — Same for other digits</span>
        <div class="sg-def">
          <strong>6 × 10<sup>1</sup> = 60</strong> &nbsp; (1 zero)<br>
          <strong>6 × 10<sup>2</sup> = 600</strong> &nbsp; (2 zeros)<br>
          <strong>6 × 10<sup>3</sup> = 6,000</strong> &nbsp; (3 zeros)<br>
          <strong>6 × 10<sup>4</sup> = 60,000</strong> &nbsp; (4 zeros)<br><br>
          💡 <strong>The exponent tells you how many zeros to put after the digit!</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 4 — Identify the pattern</span>
        <div class="sg-def">
          Look at the pattern: <strong>300, 30, 3, 0.3, ___, ___</strong><br><br>
          • Each step, the number is divided by 10 (moves 1 place to the right).<br>
          • After 0.3 → 0.03 → 0.003<br><br>
          The next two numbers are <strong>0.03 and 0.003</strong>.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Thinking 10<sup>5</sup> = 50 (that's 10 × 5!). 10<sup>5</sup> means 10 × 10 × 10 × 10 × 10 = 100,000. The exponent is not a multiplier.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Did you know a "googol" is 1 followed by 100 zeros? That's 10<sup>100</sup>! The name for Google (the company) came from misspelling this math term.</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 questions)
     ========================================================== */
  miniCheck: [
    {
      question: "Write 10 × 10 × 10 × 10 × 10 × 10 × 10 using an exponent.",
      options: ["10^6", "10^7", "10^8", "7^10"],
      correct: 1,
      explanation: "Count the 10s: there are 7. So the exponent is 7 → 10^7."
    },
    {
      question: "What is 10^5 in standard form?",
      options: ["50", "5,000", "100,000", "10,000"],
      correct: 2,
      explanation: "10^5 has 5 zeros → 100,000."
    },
    {
      question: "Write 6,000 using an exponent.",
      options: ["6 × 10^2", "6 × 10^3", "6 × 10^4", "6 × 10^1"],
      correct: 1,
      explanation: "6,000 has 3 zeros → 6 × 10^3."
    },
    {
      question: "How many zeros are in the standard form of 10^7?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      explanation: "The exponent tells you the number of zeros. 10^7 has 7 zeros → 10,000,000."
    },
    {
      question: "What is 8 × 10^4?",
      options: ["8,000", "80,000", "800,000", "8,000,000"],
      correct: 1,
      explanation: "8 × 10^4 = 8 followed by 4 zeros = 80,000."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (20 multiple-choice questions)
     ========================================================== */
  chapterQuiz: [
    {
      question: "Write 10 × 10 × 10 × 10 × 10 × 10 with an exponent.",
      options: ["10^5", "10^6", "10^7", "6^10"],
      correct: 1,
      explanation: "Count the 10s: 6. So the exponent is 6 → 10^6."
    },
    {
      question: "Write 6 × 10 × 10 × 10 × 10 with an exponent.",
      options: ["6 × 10^3", "6 × 10^4", "6 × 10^5", "6^4"],
      correct: 1,
      explanation: "There are 4 tens multiplied together, so the exponent is 4 → 6 × 10^4."
    },
    {
      question: "How many zeros are in the standard form of 10^7?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      explanation: "10^7 has 7 zeros → 10,000,000."
    },
    {
      question: "What is 4 × 10^1?",
      options: ["4", "40", "400", "4,000"],
      correct: 1,
      explanation: "4 × 10^1 = 4 × 10 = 40."
    },
    {
      question: "What is 4 × 10^2?",
      options: ["40", "400", "4,000", "40,000"],
      correct: 1,
      explanation: "4 × 10^2 = 4 × 100 = 400."
    },
    {
      question: "What is 4 × 10^3?",
      options: ["400", "4,000", "40,000", "400,000"],
      correct: 1,
      explanation: "4 × 10^3 = 4 × 1,000 = 4,000."
    },
    {
      question: "What is 7 × 10^4?",
      options: ["7,000", "70,000", "700,000", "7,000,000"],
      correct: 1,
      explanation: "7 × 10^4 = 7 followed by 4 zeros = 70,000."
    },
    {
      question: "What is 3 × 10^1?",
      options: ["3", "30", "300", "3,000"],
      correct: 1,
      explanation: "3 × 10^1 = 3 × 10 = 30."
    },
    {
      question: "What is 3 × 10^3?",
      options: ["30", "300", "3,000", "30,000"],
      correct: 2,
      explanation: "3 × 10^3 = 3 × 1,000 = 3,000."
    },
    {
      question: "What is 5 × 10^2?",
      options: ["50", "500", "5,000", "50,000"],
      correct: 1,
      explanation: "5 × 10^2 = 5 × 100 = 500."
    },
    {
      question: "What is 8 × 10^5?",
      options: ["8,000", "80,000", "800,000", "8,000,000"],
      correct: 2,
      explanation: "8 × 10^5 = 8 followed by 5 zeros = 800,000."
    },
    {
      question: "What is 1,000 × 9?",
      options: ["90", "900", "9,000", "90,000"],
      correct: 2,
      explanation: "1,000 × 9 = 9,000."
    },
    {
      question: "What is 10,000 × 2?",
      options: ["200", "2,000", "20,000", "200,000"],
      correct: 2,
      explanation: "10,000 × 2 = 20,000."
    },
    {
      question: "What is 6 × 10^2?",
      options: ["60", "600", "6,000", "60,000"],
      correct: 1,
      explanation: "6 × 10^2 = 6 × 100 = 600."
    },
    {
      question: "What is 10^3 in standard form?",
      options: ["30", "300", "1,000", "10,000"],
      correct: 2,
      explanation: "10^3 = 1,000."
    },
    {
      question: "A pattern is 300, 30, 3, 0.3, ___, ___. What are the next two numbers?",
      options: ["0.03 and 0.003", "0.003 and 0.0003", "30 and 300", "0.3 and 0.3"],
      correct: 0,
      explanation: "Each step divides by 10. After 0.3: 0.03, then 0.003."
    },
    {
      question: "Write 100,000 using an exponent.",
      options: ["10^4", "10^5", "10^6", "10 × 5"],
      correct: 1,
      explanation: "100,000 has 5 zeros → 10^5."
    },
    {
      question: "Write 6,000 using an exponent.",
      options: ["6 × 10^2", "6 × 10^3", "6 × 10^4", "6 × 10^1"],
      correct: 1,
      explanation: "6,000 has 3 zeros → 6 × 10^3."
    },
    {
      question: "What is 9 × 10^6?",
      options: ["9,000", "90,000", "900,000", "9,000,000"],
      correct: 3,
      explanation: "9 × 10^6 = 9 followed by 6 zeros = 9,000,000."
    },
    {
      question: "Which is the expanded form of 4,325 using powers of 10?",
      options: [
        "(4 × 10^3) + (3 × 10^2) + (2 × 10^1) + (5 × 10^0)",
        "(4 × 10^4) + (3 × 10^3) + (2 × 10^2) + (5 × 10^1)",
        "(4 × 10^2) + (3 × 10^1) + (2 × 10^0) + (5 × 10^-1)",
        "(4 × 10^5) + (3 × 10^4) + (2 × 10^3) + (5 × 10^2)"
      ],
      correct: 0,
      explanation: "4,325: 4 is thousands (10^3), 3 is hundreds (10^2), 2 is tens (10^1), 5 is ones (10^0)."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     ========================================================== */
  dailyHomework: {
    day1: {
      skill: "Evaluate powers of 10",
      generator: "powersOf10",
      args: { variant: "evaluate" },
      count: 15,
      remember: "The exponent tells you how many zeros to write after 1. 10^5 = 1 followed by 5 zeros = 100,000.",
      workedExample: "10^3 = 1,000 (3 zeros)\n10^5 = 100,000 (5 zeros)\n10^7 = 10,000,000 (7 zeros)"
    },

    day2: {
      skill: "Multiply single digits by powers of 10",
      generator: "powersOf10",
      args: { variant: "multiply" },
      count: 15,
      remember: "Write the digit, then add the number of zeros equal to the exponent. 7 × 10^3 = 7 followed by 3 zeros = 7,000.",
      workedExample: "4 × 10^2 = 400\n6 × 10^4 = 60,000\n9 × 10^6 = 9,000,000"
    },

    day3: {
      skill: "Write large numbers as a power of 10",
      generator: "powersOf10",
      args: { variant: "identify" },
      count: 15,
      remember: "Count the zeros in the number. That count is your exponent. 100,000 has 5 zeros → 10^5.",
      workedExample: "1,000 = 10^3 (3 zeros)\n100,000 = 10^5 (5 zeros)\n10,000,000 = 10^7 (7 zeros)"
    },

    day4: {
      skill: "Mixed powers of 10",
      mix: [
        { generator: "powersOf10", args: { variant: "evaluate" }, weight: 1, skill: "Evaluate 10^n" },
        { generator: "powersOf10", args: { variant: "multiply" }, weight: 1, skill: "Multiply by 10^n" },
        { generator: "powersOf10", args: { variant: "identify" }, weight: 1, skill: "Write as 10^n" }
      ],
      count: 15,
      remember: "Read each problem. Is it asking for the value, the product, or the exponent form?",
      workedExample: "10^4 = 10,000\n5 × 10^3 = 5,000\n100,000 = 10^5"
    },

    day5: {
      skill: "Challenge — powers of 10 in different forms",
      mix: [
        { generator: "powersOf10", args: { variant: "evaluate" }, weight: 1, skill: "Evaluate" },
        { generator: "powersOf10", args: { variant: "multiply" }, weight: 1, skill: "Multiply" },
        { generator: "powersOf10", args: { variant: "identify" }, weight: 1, skill: "Identify" },
        { generator: "expandedFormWhole", args: {}, weight: 1, skill: "Expanded form" }
      ],
      count: 15,
      remember: "Challenge day! Mix of powers of 10 and expanded form. Take your time.",
      workedExample: "3,000 = 3 × 10^3\n10^6 = 1,000,000\n4,325 in expanded form = (4×10^3) + (3×10^2) + (2×10^1) + (5×10^0)"
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