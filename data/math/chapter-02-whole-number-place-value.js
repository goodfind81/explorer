/* ==========================================================
   Math Chapter 2 — Understand Whole-Number Place Value
   Covers enVision Topic 1, Lesson 1-2.
   ========================================================== */

export const chapter = {
  id: "chapter-02-whole-number-place-value",
  name: "Understand Whole-Number Place Value",
  shortName: "Whole Place",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>🏗️ Understand Whole-Number Place Value</h2>
    <p>Every digit in a number has a place — and each place is <strong>10 times</strong> the value of the place to its right.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Whole-Number Place Chart</span>
        <div class="sg-def">
          <table style="margin: 8px 0; font-size: 0.85em;">
            <thead>
              <tr>
                <th>Hundred Millions</th>
                <th>Ten Millions</th>
                <th>Millions</th>
                <th>Hundred Thousands</th>
                <th>Ten Thousands</th>
                <th>Thousands</th>
                <th>Hundreds</th>
                <th>Tens</th>
                <th>Ones</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#FFF9C4;">
                <td style="text-align:center;">10^8</td>
                <td style="text-align:center;">10^7</td>
                <td style="text-align:center;">10^6</td>
                <td style="text-align:center;">10^5</td>
                <td style="text-align:center;">10^4</td>
                <td style="text-align:center;">10^3</td>
                <td style="text-align:center;">10^2</td>
                <td style="text-align:center;">10^1</td>
                <td style="text-align:center;">10^0</td>
              </tr>
            </tbody>
          </table>
          <br>
          • Moving <strong>left</strong> → each place is 10 times greater.<br>
          • Moving <strong>right</strong> → each place is 1/10 as much.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 1 — Value of a digit</span>
        <div class="sg-def">
          In <strong>720,080</strong>, what is the value of the digit 2?<br><br>
          • 2 is in the ten-thousands place.<br>
          • Value = 2 × 10,000 = <strong>20,000</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 2 — Expanded form with exponents</span>
        <div class="sg-def">
          Write <strong>720,080</strong> in expanded form with exponents.<br><br>
          Break it into non-zero digits and their place values:<br>
          • 7 is in the hundred-thousands place → 7 × 10^5<br>
          • 2 is in the ten-thousands place → 2 × 10^4<br>
          • 8 is in the tens place → 8 × 10^1<br><br>
          <strong>(7 × 10^5) + (2 × 10^4) + (8 × 10^1)</strong><br><br>
          ⚠️ Skip the zeros! The 0s don't appear in expanded form.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 3 — Word form</span>
        <div class="sg-def">
          Write <strong>43,080,700</strong> in word form.<br><br>
          Break into groups of 3 from the right:<br>
          • 43 → millions group → "forty-three million"<br>
          • 080 → thousands group → "eighty thousand"<br>
          • 700 → ones group → "seven hundred"<br><br>
          <strong>forty-three million, eighty thousand, seven hundred</strong><br><br>
          ⚠️ Don't say "and" in whole numbers. Save "and" for decimals!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 4 — Standard form from words</span>
        <div class="sg-def">
          Write "six hundred forty million, four hundred nine thousand, two hundred ten" in standard form.<br><br>
          • 640,000,000<br>
          • 409,000<br>
          • 210<br><br>
          Standard form: <strong>640,409,210</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The "Same Digit, Different Value" Trick</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          In <strong>5,550,304</strong>:<br><br>
          • First 5 (millions) = 5,000,000<br>
          • Second 5 (hundred-thousands) = 500,000<br>
          • Third 5 (ten-thousands) = 50,000<br><br>
          Each 5 is <strong>10 times</strong> the value of the 5 to its right.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Writing "forty-three million, and eighty thousand" (with "and"). Don't do that in whole numbers. "And" means the decimal point.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do we group digits by 3? Because our number system uses <em>thousands</em> — every three digits forms a group: ones, thousands, millions, billions...</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 questions)
     ========================================================== */
  miniCheck: [
    {
      question: "In 6,346,105, what is the value of the digit 4?",
      options: ["4", "40", "40,000", "400,000"],
      correct: 2,
      explanation: "The digit 4 is in the ten-thousands place → value is 40,000."
    },
    {
      question: "Write 6,000 using exponents.",
      options: ["6 × 10^2", "6 × 10^3", "6 × 10^4", "6 × 10^1"],
      correct: 1,
      explanation: "6,000 has 3 zeros → 6 × 10^3."
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
      explanation: "7 is hundred-thousands (10^5), 2 is ten-thousands (10^4), 8 is tens (10^1)."
    },
    {
      question: "Write 3,152,308 in word form.",
      options: [
        "three million, one hundred fifty-two thousand, three hundred eight",
        "thirty-one million, fifty-two thousand, three hundred eight",
        "three million, one hundred fifty-two thousand, three hundred eighty",
        "three hundred fifteen thousand, two hundred thirty-eight"
      ],
      correct: 0,
      explanation: "Groups: 3 (million), 152 (thousand), 308. Read: three million, one hundred fifty-two thousand, three hundred eight."
    },
    {
      question: "In 5,550,304, the first 5 is ___ the value of the second 5.",
      options: ["1/10 of", "10 times", "equal to", "100 times"],
      correct: 1,
      explanation: "First 5 is in the millions place (5,000,000). Second 5 is in the hundred-thousands place (500,000). 5,000,000 ÷ 500,000 = 10. So the first 5 is 10 times the value."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (20 multiple-choice questions)
     ========================================================== */
  chapterQuiz: [
    {
      question: "In 6,346,105, what is the value of the digit in the ten-thousands place?",
      options: ["Four thousand", "Forty thousand", "Sixty thousand", "Thirty thousand"],
      correct: 1,
      explanation: "6,346,105: digits are 6 (millions), 3 (hundred-thousands), 4 (ten-thousands), 6 (thousands), 1 (hundreds), 0 (tens), 5 (ones). Ten-thousands digit is 4 → value 40,000."
    },
    {
      question: "Write 6,000 using exponents.",
      options: ["6 × 10^2", "6 × 10^3", "6 × 10^4", "6 × 10^1"],
      correct: 1,
      explanation: "6,000 = 6 followed by 3 zeros → 6 × 10^3."
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
      question: "Write 12,430,000 in expanded form.",
      options: [
        "(1 × 10^7) + (2 × 10^6) + (4 × 10^5) + (3 × 10^4)",
        "(1 × 10^8) + (2 × 10^7) + (4 × 10^6) + (3 × 10^5)",
        "(1 × 10^6) + (2 × 10^5) + (4 × 10^4) + (3 × 10^3)",
        "(1 × 10^5) + (2 × 10^4) + (4 × 10^3) + (3 × 10^2)"
      ],
      correct: 0,
      explanation: "12,430,000 has 8 digits, so the leftmost place is 10^7. Non-zero digits: 1, 2, 4, 3."
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
      explanation: "337,060 has 6 digits. 3 (hundred-thousands), 3 (ten-thousands), 7 (thousands), 6 (tens)."
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
      explanation: "Groups: 43 (million), 080 (thousand), 700. Read each group: forty-three million, eighty thousand, seven hundred."
    },
    {
      question: "Write the number name for 3,152,308.",
      options: [
        "three million, one hundred fifty-two thousand, three hundred eight",
        "three million, one hundred fifty-two thousand, three hundred eighty",
        "thirty-one million, fifty-two thousand, three hundred eight",
        "three hundred fifteen thousand, two hundred thirty-eight"
      ],
      correct: 0,
      explanation: "Groups: 3, 152, 308. Read each."
    },
    {
      question: "Write 'six hundred forty million, four hundred nine thousand, two hundred ten' in standard form.",
      options: ["64,409,210", "640,409,210", "640,490,210", "6,409,210"],
      correct: 1,
      explanation: "640 million + 409 thousand + 210 = 640,409,210."
    },
    {
      question: "In 42,256, what is the value of the FIRST 2 (from the left)?",
      options: ["2,000", "200", "20", "2"],
      correct: 0,
      explanation: "42,256: 4 (ten-thousands), 2 (thousands), 2 (hundreds), 5 (tens), 6 (ones). First 2 is in thousands → 2,000."
    },
    {
      question: "In 9,905,482, what is the value of the FIRST 9?",
      options: ["9,000,000", "900,000", "9,000", "900"],
      correct: 0,
      explanation: "First 9 is in millions place → 9,000,000."
    },
    {
      question: "In 305,444, what is the value of the FIRST 4 (from the left)?",
      options: ["4,000", "400", "40", "4"],
      correct: 1,
      explanation: "305,444: 4s are in the hundreds, tens, and ones places. First 4 is in hundreds → 400."
    },
    {
      question: "Write 4,007,603 in expanded form using powers of 10.",
      options: [
        "(4 × 10^6) + (7 × 10^3) + (6 × 10^2) + (3 × 10^0)",
        "(4 × 10^6) + (7 × 10^4) + (6 × 10^3) + (3 × 10^2)",
        "(4 × 10^7) + (7 × 10^5) + (6 × 10^3) + (3 × 10^1)",
        "(4 × 10^5) + (7 × 10^4) + (6 × 10^2) + (3 × 10^1)"
      ],
      correct: 0,
      explanation: "4 (millions, 10^6), 7 (thousands, 10^3), 6 (hundreds, 10^2), 3 (ones, 10^0)."
    },
    {
      question: "The population of Tennessee was 6,346,105. What is the value of the digit in the ten-thousands place?",
      options: ["Four thousand", "Forty thousand", "Sixty thousand", "Thirty thousand"],
      correct: 1,
      explanation: "6,346,105: ten-thousands digit is 4 → 40,000."
    },
    {
      question: "What is 7 × 10^6?",
      options: ["700,000", "7,000,000", "70,000", "7,000"],
      correct: 1,
      explanation: "7 × 10^6 = 7 followed by 6 zeros = 7,000,000."
    },
    {
      question: "Which equations are true?",
      options: [
        "10 × 10 × 10 × 10 × 10 = 100,000",
        "10 × 10 × 10 × 10 × 10 = 50",
        "10 × 10 × 10 × 10 × 10 = 10,000",
        "10 × 10 × 10 × 10 × 10 = 5 × 10^5"
      ],
      correct: 0,
      explanation: "10^5 = 10 × 10 × 10 × 10 × 10 = 100,000."
    },
    {
      question: "The 8 in 8,305,764 is ___ times the 8 in 2,830,621.",
      options: ["1", "10", "100", "1,000"],
      correct: 1,
      explanation: "In 8,305,764, the 8 is in the millions place (8,000,000). In 2,830,621, the 8 is in the hundred-thousands place (800,000). 8,000,000 ÷ 800,000 = 10."
    },
    {
      question: "In 5,550,304, how does the first 5 relate to the second 5?",
      options: [
        "The first 5 is 1/10 of the second 5",
        "The first 5 is 10 times the second 5",
        "They are equal in value",
        "The first 5 is 100 times the second 5"
      ],
      correct: 1,
      explanation: "First 5 is in millions (5,000,000). Second 5 is in hundred-thousands (500,000). 5,000,000 ÷ 500,000 = 10."
    },
    {
        question: "Is the value of the 1 in 1,440,000 ten times the value of the 4 in the hundred-thousands place?",
        options: [
            "Yes, because 1,000,000 is 10 times 100,000",
            "No, 1,000,000 is 2.5 times 400,000",
            "No, they're equal",
            "No, it's 1,000 times"
        ],
        correct: 1,
        explanation: "The 1 is in the millions place = 1,000,000. The 4 is in the hundred-thousands place = 400,000. 1,000,000 ÷ 400,000 = 2.5, not 10. So NO."
    },
    {
      question: "Which number is greater: one hundred fifty-two thousand OR five million?",
      options: [
        "one hundred fifty-two thousand",
        "five million",
        "They are equal",
        "Cannot tell"
      ],
      correct: 1,
      explanation: "152,000 vs 5,000,000. Five million is greater."
    },
    {
      question: "Dan wrote (2 × 10^6) + (3 × 10^4) + (5 × 10^3) + 4 for the number two million, three hundred fifty thousand, four. What error did he make?",
      options: [
        "He forgot the 5 × 10^2 term",
        "He wrote 3 × 10^4 for the 3 in the hundred-thousands place; should be 3 × 10^5",
        "He forgot the 0 place value",
        "No error"
      ],
      correct: 1,
      explanation: "In 2,350,004, the 3 is in the hundred-thousands place → 3 × 10^5, not 3 × 10^4. Dan misplaced a place value."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     ========================================================== */
  dailyHomework: {
    day1: {
      skill: "Identify the value of a digit in a large number",
      generator: "identifyDigitValue",
      args: {},
      count: 15,
      remember: "Find the digit's place, then multiply the digit by that place value.",
      workedExample: "In 6,346,105:\n• 4 is in the ten-thousands place\n• Value = 4 × 10,000 = 40,000"
    },

    day2: {
      skill: "Write large numbers in expanded form with exponents",
      generator: "expandedFormWhole",
      args: {},
      count: 15,
      remember: "Skip the zeros. Only include non-zero digits. Each digit's exponent is its position from the right (starting at 0).",
      workedExample: "720,080 =\n(7 × 10^5) + (2 × 10^4) + (8 × 10^1)"
    },

    day3: {
      skill: "Write large numbers in word form",
      generator: "numberNameWhole",
      args: {},
      count: 15,
      remember: "Break the number into groups of 3 (ones, thousands, millions). Read each group, then say the group name.",
      workedExample: "3,152,308 = 'three million, one hundred fifty-two thousand, three hundred eight'"
    },

    day4: {
      skill: "Mixed place-value skills",
      mix: [
        { generator: "identifyDigitValue", args: {}, weight: 1, skill: "Digit value" },
        { generator: "expandedFormWhole", args: {}, weight: 1, skill: "Expanded form" },
        { generator: "numberNameWhole", args: {}, weight: 1, skill: "Word form" }
      ],
      count: 15,
      remember: "Read carefully — each problem is a different skill!",
      workedExample: "In 4,582,731 the 8 is in the hundred-thousands place → 800,000."
    },

    day5: {
      skill: "Challenge — standard form and mixed review",
      mix: [
        { generator: "standardFromWords", args: {}, weight: 1, skill: "Words → standard" },
        { generator: "identifyDigitValue", args: {}, weight: 1, skill: "Digit value" },
        { generator: "expandedFormWhole", args: {}, weight: 1, skill: "Expanded form" }
      ],
      count: 15,
      remember: "Challenge day! Read words carefully and convert them into standard form. Watch out for place-value mistakes.",
      workedExample: "six hundred forty million, four hundred nine thousand, two hundred ten = 640,409,210"
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