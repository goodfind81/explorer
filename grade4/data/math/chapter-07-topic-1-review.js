/* ==========================================================
   Math Chapter 7 — Topic 1 Review
   A mixed review that borrows generators from chapters 1-6.
   No new skills — everything here has been taught.
   ========================================================== */

export const chapter = {
  id: "chapter-07-topic-1-review",
  name: "Topic 1 Review",
  shortName: "Review",

  /* ==========================================================
     STUDY GUIDE — a condensed cheat sheet
     ========================================================== */
  studyGuideHtml: `
    <h2>🎯 Topic 1 Review — Place Value & Decimals</h2>
    <p>This chapter brings together everything from Lessons 1-1 through 1-6. Use it as a study guide before your unit test.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">1-1 — Patterns with Exponents and Powers of 10</span>
        <div class="sg-def">
          • <strong>Base</strong> = the number being multiplied. <strong>Exponent</strong> = how many times.<br>
          • <strong>10<sup>n</sup></strong> = 1 followed by n zeros.<br>
          • 10<sup>3</sup> = 1,000 &nbsp; 10<sup>5</sup> = 100,000 &nbsp; 10<sup>6</sup> = 1,000,000<br>
          • 5,000 = 5 × 10<sup>3</sup> &nbsp; 8 × 10<sup>4</sup> = 80,000
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">1-2 — Whole-Number Place Value</span>
        <div class="sg-def">
          • Places (left to right): millions, hundred-thousands, ten-thousands, thousands, hundreds, tens, ones.<br>
          • Each place is <strong>10× the value</strong> of the place to its right.<br>
          • <strong>Expanded form:</strong> 720,080 = (7×10<sup>5</sup>) + (2×10<sup>4</sup>) + (8×10<sup>1</sup>)<br>
          • <strong>Word form:</strong> 3,152,308 = three million, one hundred fifty-two thousand, three hundred eight
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">1-3 — Decimals to the Thousandths</span>
        <div class="sg-def">
          • Places (left to right after decimal): <strong>tenths, hundredths, thousandths</strong>.<br>
          • 0.001 = 1/1,000 &nbsp; 0.05 = 5/100 &nbsp; 0.245 = 245/1,000<br>
          • 11/1,000 = 0.011 (remember to pad with zeros)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">1-4 — Decimal Place Value</span>
        <div class="sg-def">
          • <strong>Expanded form of a decimal:</strong> 4.68 = (4×1) + (6×1/10) + (8×1/100)<br>
          • <strong>Word form:</strong> 4.68 = four and sixty-eight hundredths<br>
          • Never say "point" — always say "and."<br>
          • <strong>Equivalent decimals:</strong> 1.4 = 1.40 = 1.400
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">1-5 — Compare Decimals</span>
        <div class="sg-def">
          • Line up the decimal points. Compare digit by digit from the left.<br>
          • Add zeros to make the numbers the same length if needed.<br>
          • Example: 3.45 vs 3.499 → 3.450 vs 3.499 → 3.45 &lt; 3.499<br>
          • Alligator rule: <strong>&lt;</strong> and <strong>&gt;</strong> — the open side faces the bigger number.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">1-6 — Round Decimals</span>
        <div class="sg-def">
          • <strong>Step 1:</strong> Underline the rounding digit.<br>
          • <strong>Step 2:</strong> Circle the digit to the right.<br>
          • <strong>Step 3:</strong> If the circled digit is 5 or more, round UP. Otherwise, keep the same.<br>
          • <strong>Rhyme:</strong> "4 or less, let it rest. 5 or more, let it soar!"<br>
          • <strong>Example:</strong> 2.36 → 2.4 (tenths). 8.542 → 8.54 (hundredths).
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Test Tip:</strong> Before answering, ask: "Is this question about <em>place value, expanded form, word form, comparing, or rounding?</em>" Once you know what it's testing, the steps become clear.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> The reason decimals work is because our number system is built on 10s. Every place is 10 times the one to its right. That's also why we call it the <em>base-10</em> system.</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 mixed questions — one from each chapter)
     ========================================================== */
  miniCheck: [
    {
      question: "What is 7 × 10^6?",
      options: ["700,000", "7,000,000", "70,000", "7,000"],
      correct: 1,
      explanation: "7 × 10^6 = 7 followed by 6 zeros = 7,000,000."
    },
    {
      question: "Write 337,060 in expanded form using exponents.",
      options: [
        "(3 × 10^5) + (3 × 10^4) + (7 × 10^3) + (6 × 10^1)",
        "(3 × 10^6) + (3 × 10^5) + (7 × 10^4) + (6 × 10^2)",
        "(3 × 10^5) + (3 × 10^4) + (7 × 10^2) + (6 × 10^1)",
        "(3 × 10^4) + (3 × 10^3) + (7 × 10^2) + (6 × 10^0)"
      ],
      correct: 0,
      explanation: "337,060: 3 (hundred-thousands), 3 (ten-thousands), 7 (thousands), 6 (tens)."
    },
    {
      question: "Write 508/1000 as a decimal.",
      options: ["0.0508", "0.508", "5.08", "50.8"],
      correct: 1,
      explanation: "Denominator 1,000 → three decimal places. 508 → 0.508."
    },
    {
      question: "Which symbol makes this true?  7.539 ___ 7.344",
      options: ["<", ">", "="],
      correct: 1,
      explanation: "Tenths: 5 vs 3. 5 > 3, so 7.539 > 7.344."
    },
    {
      question: "Round 47.385 to the nearest tenth.",
      options: ["47.3", "47.4", "47.38", "47.5"],
      correct: 1,
      explanation: "Tenths digit is 3. Digit to the right is 8 (5+). Round up: 47.4."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (25 mixed questions — pulled from all topics)
     ========================================================== */
  chapterQuiz: [
    // --- Powers of 10 (1-1) ---
    {
      question: "What is 10^5 in standard form?",
      options: ["50", "5,000", "100,000", "10,000"],
      correct: 2,
      explanation: "10^5 has 5 zeros → 100,000."
    },
    {
      question: "Write 6,000 using exponents.",
      options: ["6 × 10^2", "6 × 10^3", "6 × 10^4", "6 × 10^1"],
      correct: 1,
      explanation: "6,000 = 6 followed by 3 zeros → 6 × 10^3."
    },

    // --- Whole-Number Place Value (1-2) ---
    {
      question: "In 6,346,105, what is the value of the digit in the ten-thousands place?",
      options: ["Four thousand", "Forty thousand", "Sixty thousand", "Thirty thousand"],
      correct: 1,
      explanation: "Ten-thousands digit is 4 → 40,000."
    },
    {
      question: "Write 720,080 in expanded form with exponents.",
      options: [
        "(7 × 10^5) + (2 × 10^4) + (8 × 10^1)",
        "(7 × 10^6) + (2 × 10^5) + (8 × 10^2)",
        "(7 × 10^5) + (2 × 10^4) + (8 × 10^0)",
        "(7 × 10^4) + (2 × 10^3) + (8 × 10^1)"
      ],
      correct: 0,
      explanation: "7 (hundred-thousands, 10^5), 2 (ten-thousands, 10^4), 8 (tens, 10^1)."
    },
    {
      question: "Write the number name for 43,080,700.",
      options: [
        "forty-three million, eighty thousand, seven hundred",
        "four hundred thirty million, eighty thousand, seven",
        "forty-three million, eight hundred thousand, seven hundred",
        "four billion, three hundred eight thousand, seven hundred"
      ],
      correct: 0,
      explanation: "Groups: 43 (million), 080 (thousand), 700. Read each."
    },
    {
      question: "In 42,256, what is the value of the FIRST 2 from the left?",
      options: ["2,000", "200", "20", "2"],
      correct: 0,
      explanation: "First 2 is in thousands place → 2,000."
    },

    // --- Decimals to Thousandths (1-3) ---
    {
      question: "Write 0.001 as a fraction.",
      options: ["1/10", "1/100", "1/1,000", "1/10,000"],
      correct: 2,
      explanation: "0.001 has 3 decimal places → 1/1,000."
    },
    {
      question: "Write 508/1000 as a decimal.",
      options: ["0.0508", "0.508", "5.08", "50.8"],
      correct: 1,
      explanation: "Denominator 1,000 → three decimal places. 508 → 0.508."
    },
    {
      question: "Write 0.05 as a fraction.",
      options: ["5/10", "5/100", "5/1,000", "5/10,000"],
      correct: 1,
      explanation: "0.05 has 2 decimal places → 5/100."
    },
    {
      question: "Which is equivalent to 0.322?",
      options: ["322/10", "322/100", "322/1,000", "3,220/1,000"],
      correct: 2,
      explanation: "0.322 has 3 decimal places → 322/1,000."
    },

    // --- Decimal Place Value (1-4) ---
    {
      question: "In 6.324, what is the value of the digit 2?",
      options: ["0.2", "0.02", "0.002", "2"],
      correct: 1,
      explanation: "The 2 is in the hundredths place → 0.02."
    },
    {
      question: "Write 4.68 in expanded form.",
      options: [
        "(4 × 1) + (6 × 1/10) + (8 × 1/100)",
        "(4 × 10) + (6 × 1) + (8 × 1/10)",
        "(4 × 1) + (6 × 1/100) + (8 × 1/1,000)",
        "(4 × 100) + (6 × 10) + (8 × 1)"
      ],
      correct: 0,
      explanation: "4 is in ones, 6 is in tenths, 8 is in hundredths."
    },
    {
      question: "Which decimal is equivalent to 1.4?",
      options: ["1.04", "1.40", "1.004", "14.0"],
      correct: 1,
      explanation: "Adding a zero to the right doesn't change the value. 1.4 = 1.40."
    },

    // --- Compare Decimals (1-5) ---
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
      explanation: "Adding zeros to the right doesn't change value. 0.75 = 0.750."
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
      explanation: "Tenths: 2, 3, 2. 4.312 greatest. Between 4.25 and 4.241, hundredths 5 vs 4 → 4.241 smaller. Order: 4.241, 4.25, 4.312."
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

    // --- Round Decimals (1-6) ---
    {
      question: "Round 10.278 to the nearest hundredth.",
      options: ["10.3", "10.28", "10.27", "10.30"],
      correct: 1,
      explanation: "Hundredths digit is 7. Digit to the right is 8 (5+). Round up: 10.28."
    },
    {
      question: "Round 5.643 to the nearest tenth.",
      options: ["5.6", "5.7", "5.64", "6.0"],
      correct: 0,
      explanation: "Tenths digit is 6. Digit to the right is 4 (< 5). Keep: 5.6."
    },
    {
      question: "Round 68,472 to the nearest thousand.",
      options: ["68,000", "68,500", "69,000", "70,000"],
      correct: 0,
      explanation: "Thousands digit is 8. Digit to the right is 4 (< 5). Keep: 68,000."
    },
    {
      question: "Round 52.752 to the nearest tenth.",
      options: ["52.7", "52.8", "52.75", "53.0"],
      correct: 1,
      explanation: "Tenths digit is 7. Digit to the right is 5 (5+). Round up: 52.8."
    },
    {
      question: "Round 8.418 to the place of the underlined digit: 8.4<u>1</u>8",
      options: ["8.4", "8.41", "8.42", "8.5"],
      correct: 2,
      explanation: "Underlined digit is hundredths (1). Digit to right is 8 (5+). Round up: 8.42."
    },

    // --- Estimation ---
    {
      question: "Estimate 61.4 + 88.3 by rounding each addend to the nearest whole number.",
      options: ["140", "149", "150", "160"],
      correct: 2,
      explanation: "61.4 → 61. 88.3 → 88. 61 + 88 = 149. Closest choice: 150."
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
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK — mixed review (borrows from all chapters)
     ========================================================== */
  skills: [
    {
      key: "review-round",
      label: "Review: Rounding to a place",
      generator: "roundToPlace",
      args: { place: "tenth" },
      remember: "Round to whatever place the problem asks. Watch the digit to the right of your rounding place.",
      workedExample: "2.36 → 2.4 (tenth)\n10.278 → 10.28 (hundredth)\n68,472 → 68,000 (thousand)"
    },
    {
      key: "review-compare",
      label: "Review: Compare decimals",
      generator: "compareDecimals",
      args: {},
      remember: "Line up the decimal points. Compare digit by digit from the left. Add zeros when needed.",
      workedExample: "Compare 5.62 and 5.7 → 5.62 < 5.70 → 5.62 < 5.7"
    },
    {
      key: "review-fraction-decimal",
      label: "Review: Fractions and decimals",
      generator: "fractionDecimal",
      args: { direction: "toDecimal" },
      remember: "Denominator tells you the decimal places: 10 → 1 place, 100 → 2 places, 1,000 → 3 places.",
      workedExample: "11/1,000 = 0.011\n5/100 = 0.05"
    },
    {
      key: "review-expanded",
      label: "Review: Expanded form",
      generator: "expandedFormWhole",
      args: {},
      remember: "Skip zeros. Include each non-zero digit multiplied by its power of 10.",
      workedExample: "720,080 → (7×10^5) + (2×10^4) + (8×10^1)"
    },
    {
      key: "review-estimate",
      label: "Review: Estimate sums and differences",
      generator: "estimateSum",
      args: { roundTo: "hundred" },
      remember: "Round EACH number first, then add. Don't round the final answer.",
      workedExample: "398 + 612:\n398 → 400\n612 → 600\n400 + 600 = 1,000"
    }
  ]
};