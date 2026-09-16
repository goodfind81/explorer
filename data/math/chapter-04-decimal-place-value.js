/* ==========================================================
   Math Chapter 4 — Understand Decimal Place Value
   Covers enVision Topic 1, Lesson 1-4.
   ========================================================== */

export const chapter = {
  id: "chapter-04-decimal-place-value",
  name: "Understand Decimal Place Value",
  shortName: "Decimal Place",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>🔢 Understand Decimal Place Value</h2>
    <p>Just like whole numbers, decimals have place values. Each place is <strong>10 times</strong> the value of the place to its right.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Place-Value Chart</span>
        <div class="sg-def">
          <table style="margin: 8px 0;">
            <thead>
              <tr>
                <th>Ones</th>
                <th>•</th>
                <th>Tenths</th>
                <th>Hundredths</th>
                <th>Thousandths</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#FFF9C4;">
                <td style="text-align:center;">1</td>
                <td style="text-align:center;">.</td>
                <td style="text-align:center;">1/10</td>
                <td style="text-align:center;">1/100</td>
                <td style="text-align:center;">1/1,000</td>
              </tr>
            </tbody>
          </table>
          <br>
          • The <strong>tenths</strong> place is 10 times the value of the hundredths place.<br>
          • The <strong>hundredths</strong> place is 10 times the value of the thousandths place.<br>
          • Moving LEFT → multiply by 10. Moving RIGHT → divide by 10.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 1 — Reading a decimal's places</span>
        <div class="sg-def">
          Number: <strong>3.457</strong><br><br>
          • 3 is in the <strong>ones</strong> place. Value = 3<br>
          • 4 is in the <strong>tenths</strong> place. Value = 0.4 or 4/10<br>
          • 5 is in the <strong>hundredths</strong> place. Value = 0.05 or 5/100<br>
          • 7 is in the <strong>thousandths</strong> place. Value = 0.007 or 7/1,000
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 2 — Expanded form of a decimal</span>
        <div class="sg-def">
          Write <strong>4.68</strong> in expanded form.<br><br>
          4 is in the ones place → 4 × 1<br>
          6 is in the tenths place → 6 × 1/10<br>
          8 is in the hundredths place → 8 × 1/100<br><br>
          So, 4.68 = <strong>(4 × 1) + (6 × 1/10) + (8 × 1/100)</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 3 — Word form of a decimal</span>
        <div class="sg-def">
          Write <strong>4.68</strong> in word form.<br><br>
          Step 1: Say the whole number part → "four"<br>
          Step 2: Say "<strong>and</strong>" for the decimal point<br>
          Step 3: Say the decimal part as a fraction name → "sixty-eight hundredths"<br><br>
          <strong>Four and sixty-eight hundredths</strong><br><br>
          ⚠️ Never say "point" in word form — always say "and."
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Equivalent Decimals (the zero trick)</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Adding zeros to the RIGHT of the last digit does <strong>NOT</strong> change the value.<br><br>
          <strong>1.4 = 1.40 = 1.400</strong><br>
          <strong>0.6 = 0.60 = 0.600</strong><br>
          <strong>5.300 = 5.30 = 5.3</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Why this matters:</strong> Understanding place value helps you write numbers in different forms, compare them, and round them correctly. It's the foundation of all decimal work.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why is 0.5 bigger than 0.05? Because 0.5 = 5 tenths, but 0.05 = 5 hundredths. Tenths are 10 times bigger than hundredths!</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 questions)
     ========================================================== */
  miniCheck: [
    {
      question: "In the number 3.457, what digit is in the hundredths place?",
      options: ["3", "4", "5", "7"],
      correct: 2,
      explanation: "Tenths is 4, hundredths is 5, thousandths is 7. So the hundredths digit is 5."
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
      explanation: "4 is in ones, 6 is in tenths, 8 is in hundredths. So (4×1) + (6×1/10) + (8×1/100)."
    },
    {
      question: "Which decimal is equivalent to 1.4?",
      options: ["1.04", "1.40", "1.004", "14.0"],
      correct: 1,
      explanation: "Adding a zero to the right of the last digit doesn't change the value. 1.4 = 1.40."
    },
    {
      question: "How do you write 0.245 in word form?",
      options: [
        "two hundred forty-five thousandths",
        "two hundred forty-five hundredths",
        "twenty-four and five tenths",
        "zero point two four five"
      ],
      correct: 0,
      explanation: "The last digit is in the thousandths place, so the fraction name is 'thousandths'. 0.245 = two hundred forty-five thousandths."
    },
    {
      question: "In 6.324, what is the value of the digit 2?",
      options: ["0.2", "0.02", "0.002", "2"],
      correct: 1,
      explanation: "The digit 2 is in the hundredths place. Its value is 0.02."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (20 multiple-choice questions)
     ========================================================== */
  chapterQuiz: [
    {
      question: "In 6.324, what is the value of the digit 2?",
      options: ["0.2", "0.02", "0.002", "2"],
      correct: 1,
      explanation: "The digit 2 is in the hundredths place → value is 0.02."
    },
    {
      question: "Write 863.141 in expanded form.",
      options: [
        "(8×100) + (6×10) + (3×1) + (1×1/10) + (4×1/100) + (1×1/1,000)",
        "(8×100) + (6×10) + (3×1) + (1×1/100) + (4×1/1,000) + (1×1/10,000)",
        "(8×1) + (6×1/10) + (3×1/100) + (1×1/1,000)",
        "(8×1,000) + (6×100) + (3×10) + (1×1) + (4×1/10)"
      ],
      correct: 0,
      explanation: "Each digit multiplied by its place value: 8×100 + 6×10 + 3×1 + 1×1/10 + 4×1/100 + 1×1/1,000."
    },
    {
      question: "Write in standard form: (8 × 1) + (5 × 1/100) + (9 × 1/1,000)",
      options: ["8.59", "8.059", "8.509", "85.9"],
      correct: 1,
      explanation: "8 ones, 0 tenths, 5 hundredths, 9 thousandths → 8.059."
    },
    {
      question: "Write in standard form: four hundred twenty-five and fifty-two hundredths",
      options: ["425.052", "425.52", "425.0052", "4,255.2"],
      correct: 1,
      explanation: "425 (whole) and 52 hundredths → 425.52."
    },
    {
      question: "Which decimals are equivalent to 5.300?",
      options: ["5.3 and 5.30", "5.03 and 5.003", "53.0 and 5.3000", "Only 5.3"],
      correct: 0,
      explanation: "Trailing zeros don't change the value. 5.300 = 5.30 = 5.3."
    },
    {
      question: "Which decimals are equivalent to 3.7?",
      options: ["3.70 and 3.700", "3.07 and 3.007", "37.0 and 3.70", "Only 3.7"],
      correct: 0,
      explanation: "Add zeros to the right. 3.7 = 3.70 = 3.700."
    },
    {
      question: "Which decimal is equivalent to 0.9?",
      options: ["0.09", "0.90", "9.0", "0.009"],
      correct: 1,
      explanation: "Adding a zero doesn't change the value. 0.9 = 0.90."
    },
    {
      question: "Which decimals are equivalent to 2.50?",
      options: ["2.5 and 2.500", "2.05 and 2.005", "25.0", "Only 2.50"],
      correct: 0,
      explanation: "2.50 = 2.5 = 2.500. Trailing zeros are equivalent."
    },
    {
      question: "What is the value of the underlined digit: 42,980,005 (the underlined digit is the 9)?",
      options: ["9", "90", "900,000", "90,000"],
      correct: 2,
      explanation: "The 9 is in the hundred-thousands place → value is 900,000."
    },
    {
      question: "Write 4,007,603 in expanded form using powers of 10.",
      options: [
        "(4×10^6) + (7×10^3) + (6×10^2) + (3×10^0)",
        "(4×10^6) + (7×10^4) + (6×10^3) + (3×10^2)",
        "(4×10^7) + (7×10^5) + (6×10^3) + (3×10^1)",
        "(4×10^5) + (7×10^4) + (6×10^2) + (3×10^1)"
      ],
      correct: 0,
      explanation: "4 is in millions (10^6), 7 is in thousands (10^3), 6 is in hundreds (10^2), 3 is in ones (10^0)."
    },
    {
      question: "Write 12,430,000 in expanded form.",
      options: [
        "(1×10^7) + (2×10^6) + (4×10^5) + (3×10^4)",
        "(1×10^8) + (2×10^7) + (4×10^6) + (3×10^5)",
        "(1×10^6) + (2×10^5) + (4×10^4) + (3×10^3)",
        "(1×10^5) + (2×10^4) + (4×10^3) + (3×10^2)"
      ],
      correct: 0,
      explanation: "12,430,000 has 8 digits. The leftmost is 10^7. Non-zero digits: 1, 2, 4, 3."
    },
    {
      question: "Write 337,060 in expanded form using exponents.",
      options: [
        "(3×10^5) + (3×10^4) + (7×10^3) + (6×10^1)",
        "(3×10^6) + (3×10^5) + (7×10^4) + (6×10^2)",
        "(3×10^5) + (3×10^4) + (7×10^2) + (6×10^1)",
        "(3×10^4) + (3×10^3) + (7×10^2) + (6×10^0)"
      ],
      correct: 0,
      explanation: "337,060 has 6 digits. 3 (hundred-thousands, 10^5), 3 (ten-thousands, 10^4), 7 (thousands, 10^3), 6 (tens, 10^1)."
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
      explanation: "Break into groups: 3 (million), 152 (thousand), 308. Read each group."
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
      explanation: "Groups: 43 (million), 080 (thousand), 700. Read: forty-three million, eighty thousand, seven hundred."
    },
    {
      question: "In 42,256, what is the value of the digit 2 (first one from the left)?",
      options: ["2,000", "200", "20", "2"],
      correct: 0,
      explanation: "42,256: digits are 4 (ten-thousands), 2 (thousands), 2 (hundreds), 5 (tens), 6 (ones). First 2 is in thousands place → 2,000."
    },
    {
      question: "In 9,905,482, what is the value of the digit 9 (the first one)?",
      options: ["9,000,000", "900,000", "9,000", "900"],
      correct: 0,
      explanation: "First 9 is in the millions place → 9,000,000."
    },
    {
      question: "In 305,444, what is the value of the digit 4 (the first one from the left)?",
      options: ["400", "40", "4", "4,000"],
      correct: 0,
      explanation: "305,444: 4s are in the hundreds, tens, and ones places. First 4 is in hundreds → 400."
    },
    {
      question: "Write 720,080 in expanded form with exponents.",
      options: [
        "(7×10^5) + (2×10^4) + (8×10^1)",
        "(7×10^6) + (2×10^5) + (8×10^2)",
        "(7×10^4) + (2×10^3) + (8×10^0)",
        "(7×10^5) + (2×10^4) + (8×10^3)"
      ],
      correct: 0,
      explanation: "720,080: 7 (hundred-thousands, 10^5), 2 (ten-thousands, 10^4), 8 (tens, 10^1). Other digits are 0."
    },
    {
      question: "Which decimal is equivalent to 0.60?",
      options: ["0.06", "0.600", "6.0", "0.006"],
      correct: 1,
      explanation: "0.60 = 0.600. Adding zeros to the right doesn't change the value."
    },
    {
      question: "Which statement is true about 6,044?",
      options: [
        "The 4 in the ones place is 1/10 the value of the 4 in the tens place",
        "The two 4s have the same value",
        "The ones digit is 10 times the tens digit",
        "The 6 is in the thousands place"
      ],
      correct: 0,
      explanation: "The 4 in tens = 40. The 4 in ones = 4. 4 is 1/10 of 40. So the ones 4 is 1/10 the value of the tens 4."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     ========================================================== */
  skills: [
    {
      key: "identify-place",
      label: "Identify digit place in a decimal",
      generator: "identifyDecimalPlace",
      args: {},
      remember: "Starting from the decimal point and moving right: tenths, hundredths, thousandths.",
      workedExample: "In 3.457:\n• Tenths digit → 4\n• Hundredths digit → 5\n• Thousandths digit → 7"
    },
    {
      key: "expanded-decimal",
      label: "Write decimals in expanded form",
      generator: "expandedFormDecimal",
      args: {},
      remember: "Multiply each digit by its place value. Use fractions for decimal places: 1/10, 1/100, 1/1,000.",
      workedExample: "4.68 = (4 × 1) + (6 × 1/10) + (8 × 1/100)"
    },
    {
      key: "word-decimal",
      label: "Write decimals in word form",
      generator: "numberNameDecimal",
      args: {},
      remember: "Say the whole number part, then 'and' for the decimal point, then the fraction name.",
      workedExample: "4.68 = 'four and sixty-eight hundredths'\n0.245 = 'two hundred forty-five thousandths'"
    },
    {
      key: "thousandths-decimal",
      label: "Decimal place value through thousandths",
      generator: "identifyDecimalPlace",
      args: {},
      remember: "Same skills, now extending to the thousandths place (three digits after the decimal).",
      workedExample: "In 5.472:\n• Tenths: 4\n• Hundredths: 7\n• Thousandths: 2"
    }
  ]
};