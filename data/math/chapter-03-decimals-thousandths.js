/* ==========================================================
   Math Chapter 3 — Decimals to the Thousandths
   Covers enVision Topic 1, Lesson 1-3.
   ========================================================== */

export const chapter = {
  id: "chapter-03-decimals-thousandths",
  name: "Decimals to the Thousandths",
  shortName: "Thousandths",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>🔢 Decimals to the Thousandths</h2>
    <p>Thousandths are the third place to the right of the decimal point. One thousandth is 1 out of 1,000 equal parts of a whole.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Thousandths Place</span>
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
          The thousandths place is <strong>three places to the right</strong> of the decimal point.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How the Places Are Related</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          • The <strong>tenths</strong> place is <strong>10 times</strong> the value of the hundredths place.<br>
          • The <strong>hundredths</strong> place is <strong>10 times</strong> the value of the thousandths place.<br>
          • Moving LEFT → multiply by 10.<br>
          • Moving RIGHT → multiply by 1/10 (or divide by 10).<br><br>
          Example in <strong>0.555</strong>:<br>
          • First 5 (tenths) = 0.5<br>
          • Middle 5 (hundredths) = 0.05 = 1/10 of 0.5<br>
          • Last 5 (thousandths) = 0.005 = 1/10 of 0.05
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 1 — Writing a decimal as a fraction</span>
        <div class="sg-def">
          Write 0.025 as a fraction.<br><br>
          • The last digit (5) is in the thousandths place → denominator is 1,000.<br>
          • The digits after the decimal (025) = 25 → numerator is 25.<br>
          • <strong>0.025 = 25/1,000</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 2 — Writing a fraction as a decimal</span>
        <div class="sg-def">
          Write 11/1,000 as a decimal.<br><br>
          • Denominator is 1,000 → the decimal goes to the thousandths place.<br>
          • 11 as a 3-digit numerator is 011 → 0.011<br>
          • <strong>11/1,000 = 0.011</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example 3 — The place-value relationship</span>
        <div class="sg-def">
          In 0.555, how does the value of the middle 5 relate to the value of the 5 to its right?<br><br>
          • Middle 5 is in the hundredths place → 0.05<br>
          • 5 to its right is in the thousandths place → 0.005<br>
          • 0.05 ÷ 0.005 = 10<br>
          • <strong>The middle 5 is 10 times the value of the 5 to its right.</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Equivalent Fractions and Decimals</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>0.2 = 2/10</strong><br>
          <strong>0.02 = 2/100</strong><br>
          <strong>0.002 = 2/1,000</strong><br><br>
          The number of decimal places matches the number of zeros in the denominator!
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Writing 97/1,000 as 0.97 (wrong!) instead of 0.097 (correct). Remember — thousandths requires <em>three</em> decimal places. Always pad with zeros if needed.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do we need thousandths? Because sometimes things are REALLY small — like the thickness of a coin (about 0.001 meter) or the weight of a single grain of rice.</div>
    </div>
  `,

  /* ==========================================================
     QUICK CHECK (5 questions)
     ========================================================== */
  miniCheck: [
    {
      question: "Write 0.007 as a fraction.",
      options: ["7/100", "7/1,000", "7/10", "7/10,000"],
      correct: 1,
      explanation: "The last digit is in the thousandths place, so the denominator is 1,000. 0.007 = 7/1,000."
    },
    {
      question: "Write 434/1,000 as a decimal.",
      options: ["0.434", "0.0434", "4.34", "43.4"],
      correct: 0,
      explanation: "Denominator is 1,000 → three decimal places. 434 → 0.434."
    },
    {
      question: "Write 0.05 as a fraction.",
      options: ["5/10", "5/100", "5/1,000", "5/10,000"],
      correct: 1,
      explanation: "The last digit is in the hundredths place, so 0.05 = 5/100."
    },
    {
      question: "Which decimal is 10 times as great as 0.008?",
      options: ["0.8", "0.08", "0.0008", "0.80"],
      correct: 1,
      explanation: "Moving one place left multiplies by 10. 0.008 → 0.08."
    },
    {
      question: "In 0.555, the middle 5 is ___ the value of the 5 to its right.",
      options: ["1/10 of", "10 times", "equal to", "100 times"],
      correct: 1,
      explanation: "The middle 5 is 0.05. The right 5 is 0.005. 0.05 ÷ 0.005 = 10. So the middle 5 is 10 times the value."
    }
  ],

  /* ==========================================================
     CHAPTER QUIZ (20 multiple-choice questions)
     ========================================================== */
  chapterQuiz: [
    {
      question: "Write 0.001 as a fraction.",
      options: ["1/10", "1/100", "1/1,000", "1/10,000"],
      correct: 2,
      explanation: "0.001 has 3 decimal places → denominator is 1,000. 0.001 = 1/1,000."
    },
    {
      question: "Write 0.05 as a fraction.",
      options: ["5/10", "5/100", "5/1,000", "5/10,000"],
      correct: 1,
      explanation: "0.05 has 2 decimal places → denominator is 100. 0.05 = 5/100."
    },
    {
      question: "Write 0.512 as a fraction.",
      options: ["512/10", "512/100", "512/1,000", "512/10,000"],
      correct: 2,
      explanation: "0.512 has 3 decimal places → denominator is 1,000. 0.512 = 512/1,000."
    },
    {
      question: "Write 0.309 as a fraction.",
      options: ["309/100", "309/1,000", "309/10", "309/10,000"],
      correct: 1,
      explanation: "0.309 has 3 decimal places → denominator is 1,000. 0.309 = 309/1,000."
    },
    {
      question: "Write 2/1000 as a decimal.",
      options: ["0.002", "0.02", "0.2", "2.0"],
      correct: 0,
      explanation: "Denominator 1,000 → three decimal places. 2 → 0.002."
    },
    {
      question: "Write 34/100 as a decimal.",
      options: ["0.034", "0.34", "3.4", "34.0"],
      correct: 1,
      explanation: "Denominator 100 → two decimal places. 34 → 0.34."
    },
    {
      question: "Write 508/1000 as a decimal.",
      options: ["0.0508", "0.508", "5.08", "50.8"],
      correct: 1,
      explanation: "Denominator 1,000 → three decimal places. 508 → 0.508."
    },
    {
      question: "Write 99/1000 as a decimal.",
      options: ["0.099", "0.99", "9.9", "99.0"],
      correct: 0,
      explanation: "Denominator 1,000 → three decimal places. 99 → 099 → 0.099."
    },
    {
      question: "Write 0.78 as a fraction.",
      options: ["78/10", "78/100", "78/1,000", "78/10,000"],
      correct: 1,
      explanation: "0.78 has 2 decimal places → denominator 100. 0.78 = 78/100."
    },
    {
      question: "Write 0.9 as a fraction.",
      options: ["9/10", "9/100", "9/1,000", "9/10,000"],
      correct: 0,
      explanation: "0.9 has 1 decimal place → denominator 10. 0.9 = 9/10."
    },
    {
      question: "Write 0.832 as a fraction.",
      options: ["832/100", "832/1,000", "832/10", "832/10,000"],
      correct: 1,
      explanation: "0.832 has 3 decimal places → denominator 1,000. 0.832 = 832/1,000."
    },
    {
      question: "Write 0.203 as a fraction.",
      options: ["203/100", "203/1,000", "203/10", "2,030/1,000"],
      correct: 1,
      explanation: "0.203 has 3 decimal places → denominator 1,000. 0.203 = 203/1,000."
    },
    {
      question: "Write 3/10 as a decimal.",
      options: ["0.03", "0.3", "3.0", "0.003"],
      correct: 1,
      explanation: "Denominator 10 → one decimal place. 3 → 0.3."
    },
    {
      question: "Write 873/1000 as a decimal.",
      options: ["0.0873", "0.873", "8.73", "87.3"],
      correct: 1,
      explanation: "Denominator 1,000 → three decimal places. 873 → 0.873."
    },
    {
      question: "Write 5/1000 as a decimal.",
      options: ["0.0005", "0.005", "0.05", "0.5"],
      correct: 1,
      explanation: "Denominator 1,000 → three decimal places. 5 → 005 → 0.005."
    },
    {
      question: "Write 6/100 as a decimal.",
      options: ["0.006", "0.06", "0.6", "6.0"],
      correct: 1,
      explanation: "Denominator 100 → two decimal places. 6 → 06 → 0.06."
    },
    {
      question: "Which fraction is equivalent to 0.322?",
      options: ["322/10", "322/100", "322/1,000", "3,220/1,000"],
      correct: 2,
      explanation: "0.322 has 3 decimal places → denominator 1,000. 0.322 = 322/1,000."
    },
    {
      question: "Kelly said that 97/1,000 can be written as 0.97. Is she correct?",
      options: [
        "Yes, she is correct",
        "No, it's 0.097 (three decimal places needed)",
        "No, it's 9.7",
        "No, it's 0.0097"
      ],
      correct: 1,
      explanation: "97/1,000 needs three decimal places: 097 → 0.097. Kelly forgot to pad with a zero."
    },
    {
      question: "In 0.555, the value of the 5 in the thousandths place is ___ the value of the 5 in the hundredths place.",
      options: ["1/10 of", "10 times", "equal to", "100 times"],
      correct: 0,
      explanation: "Thousandths (0.005) is 1/10 of hundredths (0.05). Moving left multiplies by 10; moving right divides by 10."
    },
    {
      question: "Which decimal is 10 times as great as 0.009?",
      options: ["0.0009", "0.09", "0.9", "9.0"],
      correct: 1,
      explanation: "Moving one place to the left multiplies by 10. 0.009 → 0.09."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     ========================================================== */
  dailyHomework: {
    day1: {
      skill: "Write decimals as fractions",
      generator: "fractionDecimal",
      args: { direction: "toFraction" },
      count: 15,
      remember: "Count the decimal places. 1 place → /10, 2 places → /100, 3 places → /1,000. The digits after the decimal become the numerator.",
      workedExample: "0.005 = 5/1,000\n0.08 = 8/100\n0.5 = 5/10"
    },

    day2: {
      skill: "Write fractions as decimals",
      generator: "fractionDecimal",
      args: { direction: "toDecimal" },
      count: 15,
      remember: "Look at the denominator. 10 → 1 decimal place, 100 → 2 places, 1,000 → 3 places. Pad with leading zeros if needed.",
      workedExample: "5/1,000 = 0.005 (pad with zeros)\n34/100 = 0.34\n7/10 = 0.7"
    },

    day3: {
      skill: "Identify the value of a digit in a decimal",
      generator: "identifyDecimalPlace",
      args: {},
      count: 15,
      remember: "The three places after the decimal are: tenths, hundredths, thousandths. Say them in order.",
      workedExample: "In 3.457:\n• 4 is in tenths\n• 5 is in hundredths\n• 7 is in thousandths"
    },

    day4: {
      skill: "Mixed: fractions ↔ decimals and place ID",
      mix: [
        { generator: "fractionDecimal", args: { direction: "toFraction" }, weight: 1, skill: "Decimal → fraction" },
        { generator: "fractionDecimal", args: { direction: "toDecimal" }, weight: 1, skill: "Fraction → decimal" },
        { generator: "identifyDecimalPlace", args: {}, weight: 1, skill: "Place ID" }
      ],
      count: 15,
      remember: "Mixed day. Read each problem carefully — is it asking for a fraction, a decimal, or a place?",
      workedExample: "0.05 = 5/100\n5/100 = 0.05\nIn 0.05, 5 is in the hundredths place"
    },

    day5: {
      skill: "Challenge — thousandths and place relationships",
      mix: [
        { generator: "fractionDecimal", args: { direction: "toFraction" }, weight: 1, skill: "Decimal → fraction" },
        { generator: "fractionDecimal", args: { direction: "toDecimal" }, weight: 1, skill: "Fraction → decimal" },
        { generator: "identifyDecimalPlace", args: {}, weight: 1, skill: "Place ID" },
        { generator: "compareDecimals", args: {}, weight: 1, skill: "Compare" }
      ],
      count: 15,
      remember: "Challenge day! Mix of all skills from the week. Take your time with each problem.",
      workedExample: "0.555 in expanded form:\n(5 × 1/10) + (5 × 1/100) + (5 × 1/1,000)"
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