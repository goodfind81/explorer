/* ==========================================================
   Math Chapter 13 — Topic 4 Test Practice, Set A
   Built 2026-11-05 from the graded Topic 4 Test (10/28). The chapter
   quiz mirrors the test question for question (20 questions) with new
   numbers. Set B (chapter 14) is a second version.
   Reuses the Chapter 11/12 generators.
   ========================================================== */

export const chapter = {
  id: "chapter-13-topic-4-test-practice-a",
  name: "Topic 4 Test Practice — Set A",
  shortName: "T4 Practice A",

  /* ==========================================================
     STUDY GUIDE — the four kinds of questions on the test
     ========================================================== */
  studyGuideHtml: `
    <h2>🔁 Topic 4 Test Practice — Set A</h2>
    <p>These 20 questions are just like the ones on the <strong>Topic 4 Test</strong>, with new numbers. Read this page first, then show what you know!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">1. Multiply by 1,000 — Move and Annex</span>
        <div class="sg-def">
          <strong>Annex</strong> means <strong>add zeros to the end</strong>.<br>
          × 10 → move 1 place. × 100 → move 2 places. × 1,000 → move <strong>3 places</strong> to the right.<br>
          If you run out of digits, annex zeros to fill the empty places.<br><br>
          • 8.31 × 1,000: 2 digits after the point, so move 2 and annex <strong>1 zero</strong> → <strong>8,310</strong><br>
          • 4.7 × 1,000: 1 digit after the point, so move 1 and annex <strong>2 zeros</strong> → <strong>4,700</strong><br>
          • 0.57 × 1,000 → <strong>570</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">2. Estimate a Product</span>
        <div class="sg-def">
          Round to <strong>easy numbers</strong>, then multiply.<br>
          • 18.25 × 4 → 18 × 4 = <strong>72</strong><br>
          • 306 × 1.87 → 300 × 2 = <strong>600</strong><br><br>
          <strong>Two big decimals:</strong> round the 2-digit number to the nearest <strong>ten</strong> and the 3-digit number to the nearest <strong>hundred</strong>.<br>
          • 43.7 × 186.9 → 40 × 200: 4 × 2 = 8, then write 3 zeros → <strong>8,000</strong><br>
          • 47.9 × 384.3 → 50 × 400: 5 × 4 = 20, then write 3 zeros → <strong>20,000</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">3. Multiply, Then Place the Decimal Point</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>Step 1:</strong> Estimate. 59 × 19.2 → 60 × 20 = <strong>1,200</strong><br>
          <strong>Step 2:</strong> Multiply as whole numbers: 59 × 192 = 11,328<br>
          <strong>Step 3:</strong> Count the decimal places in the factors. 19.2 has <strong>1</strong>, so the answer has 1: <strong>1,132.8</strong><br>
          <strong>Step 4:</strong> Check: 1,132.8 is close to 1,200 ✅ (113.28 is <strong>not</strong> close, so it's wrong.)<br><br>
          Two decimals: 9.17 × 2.3 → 917 × 23 = 21,091. 2 + 1 = <strong>3</strong> places → <strong>21.091</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">4. Decimals as Fractions</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          Tenths → × <sup>1</sup>⁄<sub>10</sub>. Hundredths → × <sup>1</sup>⁄<sub>100</sub>.<br>
          5.4 × 0.18 = (54 × <sup>1</sup>⁄<sub>10</sub>) × (18 × <sup>1</sup>⁄<sub>100</sub>) = <strong>(54 × 18) × (<sup>1</sup>⁄<sub>10</sub> × <sup>1</sup>⁄<sub>100</sub>)</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Word Clues</span>
        <div class="sg-def">
          • "<strong>times as much</strong>" → multiply<br>
          • "<strong>each</strong>" → multiply the number of things by the amount for each one<br>
          • "<strong>0.6 of</strong> a field" → 0.6 × the field<br>
          • "<strong>about</strong>" or "<strong>best estimate</strong>" → round first
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Getting the digits right but putting the decimal point in the wrong place. Always compare your answer to your estimate. If the estimate is about 1,200, the answer can't be 113.28!
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> On a multiple-choice test, the answer choices often have the same digits with the decimal point in different places. A quick estimate tells you which one is right, without finishing the multiplication!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 3.06 × 1,000?",
      options: ["306", "3,060", "30,600", "30.6"],
      correct: 1,
      explanation: "Move the decimal point 3 places to the right. 3.06 has 2 digits after the point, so annex 1 zero: 3,060."
    },
    {
      question: "Which is the best estimate for 31.6 × 497.2?",
      options: ["150", "1,500", "15,000", "150,000"],
      correct: 2,
      explanation: "Round: 31.6 → 30 and 497.2 → 500. 3 × 5 = 15, then write 3 zeros: 15,000."
    },
    {
      question: "25 × 14.2 = 3550 with the decimal point missing. What is the product?",
      options: ["3.55", "35.5", "355", "3,550"],
      correct: 2,
      explanation: "Estimate: 25 × 14 = 350, so the product is 355. Or count: 14.2 has 1 decimal place → 355.0 = 355."
    },
    {
      question: "A bag of rice weighs 2.4 pounds. A sack weighs 15 times as much. How much does the sack weigh?",
      options: ["3.6 pounds", "36 pounds", "360 pounds", "17.4 pounds"],
      correct: 1,
      explanation: "\"Times as much\" means multiply: 15 × 24 = 360. 2.4 has 1 decimal place → 36.0 = 36 pounds. Check: 15 × 2 = 30 ✅"
    },
    {
      question: "What is 4.3 × 1.2?",
      options: ["5.16", "51.6", "0.516", "5.5"],
      correct: 0,
      explanation: "43 × 12 = 516. There are 1 + 1 = 2 decimal places → 5.16. Check: 4 × 1 = 4, so about 5 ✅"
    }
  ],

  chapterQuiz: [
    // --- Multiply by 10, 100, 1,000 (test #1–4) ---
    {
      question: "What steps can be taken to find the product of 4.7 and 1,000?",
      options: [
        "Move the decimal point 1 place to the right and annex 2 zeros.",
        "Move the decimal point 2 places to the right and annex 1 zero.",
        "Move the decimal point 3 places to the right and annex 1 zero.",
        "Move the decimal point 3 places to the right and annex 2 zeros."
      ],
      correct: 3,
      explanation: "1,000 has 3 zeros, so the decimal point moves 3 places right. 4.7 has only 1 digit after the point, so annex 2 zeros: 4,700."
    },
    {
      question: "What is 0.64 × 1,000?",
      options: ["6.4", "64", "640", "6,400"],
      correct: 2,
      explanation: "Move the decimal point 3 places to the right: 0.64 → 640 (annex 1 zero)."
    },
    {
      question: "Maria bought 100 pencils. Each pencil cost $0.28. How much did Maria spend?",
      options: ["$2,800.00", "$280.00", "$28.00", "$2.80"],
      correct: 2,
      explanation: "100 × $0.28: move the decimal point 2 places to the right → $28.00."
    },
    {
      question: "What steps can be taken to find the product of 0.75 and 1,000?",
      options: [
        "Move the decimal point 2 places to the right and annex 1 zero.",
        "Move the decimal point 2 places to the right and annex 2 zeros.",
        "Move the decimal point 3 places to the right and annex 1 zero.",
        "Move the decimal point 3 places to the right and annex 2 zeros."
      ],
      correct: 2,
      explanation: "× 1,000 means move 3 places right. 0.75 has 2 digits after the point, so annex 1 zero: 750."
    },

    // --- Estimate (test #5–7) ---
    {
      question: "Each spelling quiz has 20 words. Mia's average for correct words is 17.75. Which is the best estimate of Mia's total correct words for 4 quizzes?",
      options: ["80", "76", "72", "64"],
      correct: 2,
      explanation: "Round 17.75 to 18. Then 18 × 4 = 72."
    },
    {
      question: "Sam's family drinks 2.95 gallons of juice each week. Which is the best estimate of the number of gallons they drink in 26 weeks?",
      options: ["78 gallons", "52 gallons", "60 gallons", "90 gallons"],
      correct: 0,
      explanation: "Round 2.95 to 3. Then 26 × 3 = 78 gallons."
    },
    {
      question: "Which equation gives the best estimate of the product of 412 and 2.89?",
      options: ["400 × 2 = 800", "400 × 2.5 = 1,000", "400 × 3 = 1,200", "500 × 3 = 1,500"],
      correct: 2,
      explanation: "412 rounds to 400 and 2.89 rounds to 3. 400 × 3 = 1,200."
    },

    // --- 2-digit number × decimal word problems (test #8–12) ---
    {
      question: "A house cat weighs 4.6 kilograms. A tiger weighs 38 times as much as the cat. How much does the tiger weigh?",
      options: ["17.48 kilograms", "164.8 kilograms", "174.8 kilograms", "1,748 kilograms"],
      correct: 2,
      explanation: "Estimate: 40 × 5 = 200. Multiply: 38 × 46 = 1,748. 4.6 has 1 decimal place → 174.8 kilograms."
    },
    {
      question: "A truck is carrying 47 containers that weigh 18.6 pounds each. What is the total weight the truck is carrying?",
      options: ["874.2 pounds", "864.2 pounds", "8,742 pounds", "87.42 pounds"],
      correct: 0,
      explanation: "Estimate: 50 × 20 = 1,000. Multiply: 47 × 186 = 8,742. 18.6 has 1 decimal place → 874.2 pounds."
    },
    {
      question: "A truck is carrying 60 containers that weigh 30.4 pounds each. What is the total weight the truck is carrying?",
      options: ["1,824 pounds", "1,804 pounds", "18,240 pounds", "182.4 pounds"],
      correct: 0,
      explanation: "Estimate: 60 × 30 = 1,800. Multiply: 60 × 304 = 18,240. 30.4 has 1 decimal place → 1,824.0 = 1,824 pounds."
    },
    {
      question: "A store worker is moving 34 boxes. Each box weighs 12.5 pounds. What is the total weight of the boxes?",
      options: ["415 pounds", "425 pounds", "4,250 pounds", "42.5 pounds"],
      correct: 1,
      explanation: "Estimate: 30 × 13 = 390. Multiply: 34 × 125 = 4,250. 12.5 has 1 decimal place → 425.0 = 425 pounds."
    },
    {
      question: "A hamster weighs 3.4 ounces. A rabbit weighs 23 times as much as the hamster. How much does the rabbit weigh?",
      options: ["782 ounces", "68.2 ounces", "78.2 ounces", "7.82 ounces"],
      correct: 2,
      explanation: "Estimate: 20 × 3 = 60, or 23 × 3 = 69. Multiply: 23 × 34 = 782. 3.4 has 1 decimal place → 78.2 ounces."
    },

    // --- "About ___ times as many" table (test #13) ---
    {
      question: "Visitors to five parks last year (in thousands): Maple Park 214.8, Oak Park 432.5, Pine Park 655.3, Cedar Park 1,078.2, Birch Park 318.9. Which park had about 3.1 times as many visitors as Maple Park?",
      options: ["Oak Park", "Pine Park", "Cedar Park", "Birch Park"],
      correct: 1,
      explanation: "Round: 3.1 → 3 and 214.8 → 215 (or 200). 3 × 215 = 645, which is closest to Pine Park's 655.3."
    },

    // --- Decimal × decimal (test #14–16) ---
    {
      question: "What is 8.26 × 3.4?",
      options: ["28.084", "28.84", "280.84", "2.8084"],
      correct: 0,
      explanation: "826 × 34 = 28,084. There are 2 + 1 = 3 decimal places → 28.084. Check: 8 × 3 = 24, so about 28 ✅"
    },
    {
      question: "A farmer plants 0.7 of a field with corn. The field is 6.2 acres. How many acres are planted with corn?",
      options: ["0.434 acres", "4.34 acres", "43.4 acres", "6.9 acres"],
      correct: 1,
      explanation: "0.7 of 6.2 means 0.7 × 6.2. 7 × 62 = 434, and there are 1 + 1 = 2 decimal places → 4.34 acres. It's less than 6.2 because 0.7 is less than 1 ✅"
    },
    {
      question: "Lena takes 3.85 minutes to run around the track. How long does it take Lena to run around the track 12 times?",
      options: ["45.20 minutes", "46.20 minutes", "47.25 minutes", "36.20 minutes"],
      correct: 1,
      explanation: "Estimate: 4 × 12 = 48. Multiply: 385 × 12 = 4,620. 3.85 has 2 decimal places → 46.20 minutes."
    },

    // --- Decimals as fractions (test #17) ---
    {
      question: "Which expression is equivalent to 6.3 × 0.27?",
      options: [
        "(63 × 27) × (1/10 × 1/100)",
        "(63 × 27) × (1/10 × 1/10)",
        "(6.3 × 0.27) × (1/10 × 1/10)",
        "(6.3 × 0.27) × (1/10 × 1/100)"
      ],
      correct: 0,
      explanation: "6.3 = 63 × 1/10 (tenths) and 0.27 = 27 × 1/100 (hundredths). Regroup: (63 × 27) × (1/10 × 1/100)."
    },

    // --- Estimate by rounding to tens and hundreds (test #18–20) ---
    {
      question: "Which of the following is the best estimate for 52.6 × 297.4?",
      options: ["150", "1,500", "15,000", "150,000"],
      correct: 2,
      explanation: "Round: 52.6 → 50 and 297.4 → 300. 5 × 3 = 15, then write 3 zeros: 15,000."
    },
    {
      question: "Which of the following is the best estimate for 38.2 × 612.7?",
      options: ["240", "2,400", "24,000", "240,000"],
      correct: 2,
      explanation: "Round: 38.2 → 40 and 612.7 → 600. 4 × 6 = 24, then write 3 zeros: 24,000."
    },
    {
      question: "Which of the following is the best estimate for 19.8 × 402.3?",
      options: ["80", "800", "8,000", "80,000"],
      correct: 2,
      explanation: "Round: 19.8 → 20 and 402.3 → 400. 2 × 4 = 8, then write 3 zeros: 8,000."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK — the test's main skills
     ========================================================== */
  skills: [
    {
      key: "t4-practice-a-power-of-10",
      label: "Test practice A: Multiply by 10, 100 and 1,000",
      generator: "multiplyDecimalPowerOf10",
      args: {},
      remember: "Count the zeros and move the decimal point that many places to the RIGHT. Annex (add) zeros if you run out of digits.",
      workedExample: "4.7 × 1,000\nMove 3 places: 4.7 → 47 → 470 → 4,700\n(annex 2 zeros)"
    },
    {
      key: "t4-practice-a-estimate",
      label: "Test practice A: Estimate by rounding to tens and hundreds",
      generator: "estimateTensHundreds",
      args: {},
      remember: "Round the 2-digit number to the nearest ten and the 3-digit number to the nearest hundred. Multiply the front digits, then write the zeros.",
      workedExample: "43.7 × 186.9\n43.7 → 40, 186.9 → 200\n4 × 2 = 8 → 8,000"
    },
    {
      key: "t4-practice-a-two-digit",
      label: "Test practice A: Word problems, 2-digit number × decimal",
      generator: "multiplyDecimalByTwoDigit",
      args: {},
      remember: "Estimate first. Multiply as whole numbers, then give the product as many decimal places as the decimal factor. Check it's close to your estimate.",
      workedExample: "59 × 19.2\nEstimate: 60 × 20 = 1,200\n59 × 192 = 11,328 → 1,132.8"
    },
    {
      key: "t4-practice-a-decimal-by-decimal",
      label: "Test practice A: Multiply a decimal by a decimal",
      generator: "multiplyDecimalsPartial",
      args: {},
      remember: "Multiply as whole numbers. Add up the decimal places in BOTH factors, and give the answer that many.",
      workedExample: "9.17 × 2.3\n917 × 23 = 21,091\n2 + 1 = 3 places → 21.091"
    }
  ]
};
