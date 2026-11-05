/* ==========================================================
   Math Chapter 14 — Topic 4 Test Practice, Set B
   Built 2026-11-05 from the graded Topic 4 Test (10/28). A second
   version of Set A (chapter 13): the chapter quiz mirrors the test
   question for question (20 questions) with different numbers.
   Reuses the Chapter 11/12 generators.
   ========================================================== */

export const chapter = {
  id: "chapter-14-topic-4-test-practice-b",
  name: "Topic 4 Test Practice — Set B",
  shortName: "T4 Practice B",

  /* ==========================================================
     STUDY GUIDE — a quick recap before the second set
     ========================================================== */
  studyGuideHtml: `
    <h2>🔁 Topic 4 Test Practice — Set B</h2>
    <p>Here's a second set of 20 test-style questions. Same kinds of questions, different numbers. Use the 4 steps below on every one.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Move and Annex</span>
        <div class="sg-def">
          × 1,000 → move the decimal point <strong>3 places</strong> to the right. Annex zeros for any empty places.<br>
          • 3.18 × 1,000 → move 2, annex <strong>1 zero</strong> → <strong>3,180</strong><br>
          • 0.6 × 1,000 → move 1, annex <strong>2 zeros</strong> → <strong>600</strong><br>
          • 0.083 × 1,000 → move 3, no zeros needed → <strong>83</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Round Before You Multiply</span>
        <div class="sg-def">
          • 14.75 × 6 → 15 × 6 = <strong>90</strong><br>
          • 289 × 4.12 → 300 × 4 = <strong>1,200</strong><br>
          • 61.4 × 198.7 → 60 × 200: 6 × 2 = 12, then 3 zeros → <strong>12,000</strong><br><br>
          Count the zeros carefully! 60 has <strong>1</strong> zero and 200 has <strong>2</strong>, so the answer gets <strong>3</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Multiply in 4 Steps</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>38 crates × 24.5 pounds</strong><br>
          1. Estimate: 40 × 25 = <strong>1,000</strong><br>
          2. Multiply as whole numbers: 38 × 245 = 9,310<br>
          3. 24.5 has <strong>1</strong> decimal place → 931.0 = <strong>931</strong><br>
          4. Check: 931 is close to 1,000 ✅ (9,310 and 93.1 are not.)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Decimals as Fractions</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          0.72 is 72 hundredths = 72 × <sup>1</sup>⁄<sub>100</sub>. 4.6 is 46 tenths = 46 × <sup>1</sup>⁄<sub>10</sub>.<br>
          So 0.72 × 4.6 = <strong>(72 × 46) × (<sup>1</sup>⁄<sub>100</sub> × <sup>1</sup>⁄<sub>10</sub>)</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Counting decimal places in only one factor. In 7.48 × 5.6, 7.48 has 2 places and 5.6 has 1, so the answer needs <strong>3</strong>: 41.888.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> When one factor is less than 1, the answer is smaller than the other factor. 0.8 of 9.4 acres must be less than 9.4 acres. That rules out some answer choices right away!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 0.9 × 1,000?",
      options: ["9", "90", "900", "9,000"],
      correct: 2,
      explanation: "Move the decimal point 3 places to the right. 0.9 has 1 digit after the point, so annex 2 zeros: 900."
    },
    {
      question: "Which is the best estimate for 28.4 × 712.5?",
      options: ["210", "2,100", "21,000", "210,000"],
      correct: 2,
      explanation: "Round: 28.4 → 30 and 712.5 → 700. 3 × 7 = 21, then write 3 zeros: 21,000."
    },
    {
      question: "A box of crayons costs $3.25. How much do 16 boxes cost?",
      options: ["$5.20", "$52.00", "$520.00", "$48.75"],
      correct: 1,
      explanation: "Estimate: 16 × 3 = 48. Multiply: 16 × 325 = 5,200. $3.25 has 2 decimal places → $52.00."
    },
    {
      question: "What is 0.4 × 8.5?",
      options: ["34", "3.4", "0.34", "8.9"],
      correct: 1,
      explanation: "4 × 85 = 340. There are 1 + 1 = 2 decimal places → 3.40 = 3.4. It's less than 8.5 because 0.4 is less than 1 ✅"
    },
    {
      question: "Which expression is equivalent to 2.5 × 0.36?",
      options: [
        "(25 × 36) × (1/10 × 1/100)",
        "(25 × 36) × (1/100 × 1/100)",
        "(2.5 × 0.36) × (1/10 × 1/100)",
        "(25 × 36) × (1/10 × 1/10)"
      ],
      correct: 0,
      explanation: "2.5 = 25 × 1/10 and 0.36 = 36 × 1/100, so the product is (25 × 36) × (1/10 × 1/100)."
    }
  ],

  chapterQuiz: [
    // --- Multiply by 10, 100, 1,000 (test #1–4) ---
    {
      question: "What steps can be taken to find the product of 3.18 and 1,000?",
      options: [
        "Move the decimal point 2 places to the right and annex 1 zero.",
        "Move the decimal point 2 places to the right and annex 2 zeros.",
        "Move the decimal point 3 places to the right and annex 1 zero.",
        "Move the decimal point 3 places to the right and annex 2 zeros."
      ],
      correct: 2,
      explanation: "× 1,000 means move 3 places right. 3.18 has 2 digits after the point, so annex 1 zero: 3,180."
    },
    {
      question: "What is 0.083 × 1,000?",
      options: ["0.83", "8.3", "83", "830"],
      correct: 2,
      explanation: "Move the decimal point 3 places to the right: 0.083 → 83. No zeros need to be annexed."
    },
    {
      question: "Leo bought 100 tickets. Each ticket cost $0.45. How much did Leo spend?",
      options: ["$4,500.00", "$450.00", "$45.00", "$4.50"],
      correct: 2,
      explanation: "100 × $0.45: move the decimal point 2 places to the right → $45.00."
    },
    {
      question: "What steps can be taken to find the product of 0.6 and 1,000?",
      options: [
        "Move the decimal point 1 place to the right and annex 1 zero.",
        "Move the decimal point 1 place to the right and annex 2 zeros.",
        "Move the decimal point 3 places to the right and annex 1 zero.",
        "Move the decimal point 3 places to the right and annex 2 zeros."
      ],
      correct: 3,
      explanation: "× 1,000 means move 3 places right. 0.6 has only 1 digit after the point, so annex 2 zeros: 600."
    },

    // --- Estimate (test #5–7) ---
    {
      question: "Tom's average score is 14.75 points per basketball game. Which is the best estimate of Tom's total points for 6 games?",
      options: ["60", "84", "90", "96"],
      correct: 2,
      explanation: "Round 14.75 to 15. Then 15 × 6 = 90."
    },
    {
      question: "A dog eats 1.9 pounds of food each day. Which is the best estimate of how much food the dog eats in 31 days?",
      options: ["31 pounds", "55 pounds", "62 pounds", "93 pounds"],
      correct: 2,
      explanation: "Round 1.9 to 2. Then 31 × 2 = 62 pounds."
    },
    {
      question: "Which equation gives the best estimate of the product of 289 and 4.12?",
      options: ["200 × 4 = 800", "300 × 4 = 1,200", "300 × 4.5 = 1,350", "300 × 5 = 1,500"],
      correct: 1,
      explanation: "289 rounds to 300 and 4.12 rounds to 4. 300 × 4 = 1,200."
    },

    // --- 2-digit number × decimal word problems (test #8–12) ---
    {
      question: "A puppy weighs 2.8 kilograms. A horse weighs 64 times as much as the puppy. How much does the horse weigh?",
      options: ["17.92 kilograms", "169.2 kilograms", "179.2 kilograms", "1,792 kilograms"],
      correct: 2,
      explanation: "Estimate: 60 × 3 = 180. Multiply: 64 × 28 = 1,792. 2.8 has 1 decimal place → 179.2 kilograms."
    },
    {
      question: "A truck is carrying 38 crates that weigh 24.5 pounds each. What is the total weight the truck is carrying?",
      options: ["93.1 pounds", "921 pounds", "931 pounds", "9,310 pounds"],
      correct: 2,
      explanation: "Estimate: 40 × 25 = 1,000. Multiply: 38 × 245 = 9,310. 24.5 has 1 decimal place → 931.0 = 931 pounds."
    },
    {
      question: "A truck is carrying 50 bags that weigh 40.8 pounds each. What is the total weight the truck is carrying?",
      options: ["204 pounds", "2,004 pounds", "2,040 pounds", "20,400 pounds"],
      correct: 2,
      explanation: "Estimate: 50 × 40 = 2,000. Multiply: 50 × 408 = 20,400. 40.8 has 1 decimal place → 2,040.0 = 2,040 pounds."
    },
    {
      question: "A worker is moving 27 boxes. Each box weighs 15.6 pounds. What is the total weight of the boxes?",
      options: ["42.12 pounds", "411.2 pounds", "421.2 pounds", "4,212 pounds"],
      correct: 2,
      explanation: "Estimate: 30 × 15 = 450. Multiply: 27 × 156 = 4,212. 15.6 has 1 decimal place → 421.2 pounds."
    },
    {
      question: "A robin weighs 2.7 ounces. An eagle weighs 53 times as much as the robin. How much does the eagle weigh?",
      options: ["14.31 ounces", "133.1 ounces", "143.1 ounces", "1,431 ounces"],
      correct: 2,
      explanation: "Estimate: 50 × 3 = 150. Multiply: 53 × 27 = 1,431. 2.7 has 1 decimal place → 143.1 ounces."
    },

    // --- "About ___ times as many" table (test #13) ---
    {
      question: "Library books checked out last year (in thousands): Hilltop 126.4, River 501.8, Lakeside 249.7, Summit 382.1, Valley 760.3. Which library checked out about 3.9 times as many books as Hilltop?",
      options: ["River", "Lakeside", "Summit", "Valley"],
      correct: 0,
      explanation: "Round: 3.9 → 4 and 126.4 → 125. 4 × 125 = 500, which is closest to River's 501.8."
    },

    // --- Decimal × decimal (test #14–16) ---
    {
      question: "What is 7.48 × 5.6?",
      options: ["4.1888", "41.888", "418.88", "41.88"],
      correct: 1,
      explanation: "748 × 56 = 41,888. There are 2 + 1 = 3 decimal places → 41.888. Check: 7 × 6 = 42 ✅"
    },
    {
      question: "A farmer plants 0.8 of a field with beans. The field is 9.4 acres. How many acres are planted with beans?",
      options: ["0.752 acres", "7.52 acres", "75.2 acres", "10.2 acres"],
      correct: 1,
      explanation: "0.8 of 9.4 means 0.8 × 9.4. 8 × 94 = 752, and there are 1 + 1 = 2 decimal places → 7.52 acres. It's less than 9.4 because 0.8 is less than 1 ✅"
    },
    {
      question: "A bus ride to the library takes 6.25 minutes. How long do 13 bus rides take?",
      options: ["71.25 minutes", "81.25 minutes", "82.25 minutes", "812.5 minutes"],
      correct: 1,
      explanation: "Estimate: 6 × 13 = 78. Multiply: 625 × 13 = 8,125. 6.25 has 2 decimal places → 81.25 minutes."
    },

    // --- Decimals as fractions (test #17) ---
    {
      question: "Which expression is equivalent to 0.72 × 4.6?",
      options: [
        "(72 × 46) × (1/100 × 1/10)",
        "(72 × 46) × (1/10 × 1/10)",
        "(72 × 46) × (1/100 × 1/100)",
        "(0.72 × 4.6) × (1/100 × 1/10)"
      ],
      correct: 0,
      explanation: "0.72 = 72 × 1/100 (hundredths) and 4.6 = 46 × 1/10 (tenths). Regroup: (72 × 46) × (1/100 × 1/10)."
    },

    // --- Estimate by rounding to tens and hundreds (test #18–20) ---
    {
      question: "Which of the following is the best estimate for 61.4 × 198.7?",
      options: ["120", "1,200", "12,000", "120,000"],
      correct: 2,
      explanation: "Round: 61.4 → 60 and 198.7 → 200. 6 × 2 = 12, then write 3 zeros: 12,000."
    },
    {
      question: "Which of the following is the best estimate for 27.8 × 503.6?",
      options: ["150", "1,500", "15,000", "150,000"],
      correct: 2,
      explanation: "Round: 27.8 → 30 and 503.6 → 500. 3 × 5 = 15, then write 3 zeros: 15,000."
    },
    {
      question: "Which of the following is the best estimate for 71.3 × 812.4?",
      options: ["560", "5,600", "56,000", "560,000"],
      correct: 2,
      explanation: "Round: 71.3 → 70 and 812.4 → 800. 7 × 8 = 56, then write 3 zeros: 56,000."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK — the test's main skills
     ========================================================== */
  skills: [
    {
      key: "t4-practice-b-power-of-10",
      label: "Test practice B: Multiply by 10, 100 and 1,000",
      generator: "multiplyDecimalPowerOf10",
      args: {},
      remember: "Count the zeros and move the decimal point that many places to the RIGHT. Annex (add) zeros if you run out of digits.",
      workedExample: "0.6 × 1,000\nMove 3 places: 0.6 → 6 → 60 → 600\n(annex 2 zeros)"
    },
    {
      key: "t4-practice-b-estimate",
      label: "Test practice B: Estimate by rounding to tens and hundreds",
      generator: "estimateTensHundreds",
      args: {},
      remember: "Round the 2-digit number to the nearest ten and the 3-digit number to the nearest hundred. Multiply the front digits, then write the zeros.",
      workedExample: "61.4 × 198.7\n61.4 → 60, 198.7 → 200\n6 × 2 = 12 → 12,000"
    },
    {
      key: "t4-practice-b-two-digit",
      label: "Test practice B: Word problems, 2-digit number × decimal",
      generator: "multiplyDecimalByTwoDigit",
      args: {},
      remember: "Estimate first. Multiply as whole numbers, then give the product as many decimal places as the decimal factor. Check it's close to your estimate.",
      workedExample: "38 × 24.5\nEstimate: 40 × 25 = 1,000\n38 × 245 = 9,310 → 931"
    },
    {
      key: "t4-practice-b-decimal-by-decimal",
      label: "Test practice B: Multiply a decimal by a decimal",
      generator: "multiplyDecimalsPartial",
      args: {},
      remember: "Multiply as whole numbers. Add up the decimal places in BOTH factors, and give the answer that many.",
      workedExample: "7.48 × 5.6\n748 × 56 = 41,888\n2 + 1 = 3 places → 41.888"
    }
  ]
};
