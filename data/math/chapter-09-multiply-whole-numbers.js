/* ==========================================================
   Math Chapter 9 — Multiply Whole Numbers
   Covers enVision Topic 3: Lessons 3-1 (part of Topic 3), 3-2, 3-3.
   Growing chapter — new lessons add new skills as they arrive.
   ========================================================== */

export const chapter = {
  id: "chapter-09-multiply-whole-numbers",
  name: "Multiply Whole Numbers",
  shortName: "Multiply",

  studyGuideHtml: `
    <h2>✖️ Multiply Whole Numbers</h2>
    <p>This chapter covers two big ideas: <strong>estimating products</strong> and <strong>multiplying by 1-digit numbers</strong> using the Standard Algorithm.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Big Idea 1 — Estimate Products</span>
        <div class="sg-def">
          Before multiplying, <strong>round or use compatible numbers</strong> to estimate the product.<br><br>
          <strong>Estimate 47 × 412:</strong><br>
          • Round 47 → 50<br>
          • Round 412 → 400<br>
          • 50 × 400 = 20,000<br><br>
          <strong>Estimate 24 × 398:</strong><br>
          • Replace 24 with 25 (compatible with 4)<br>
          • Replace 398 with 400<br>
          • 25 × 400 = 10,000
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Overestimate vs Underestimate</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          • If both rounded numbers are <strong>LESS</strong> than the originals → estimate is an <strong>underestimate</strong>.<br>
          • If both rounded numbers are <strong>GREATER</strong> than the originals → estimate is an <strong>overestimate</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Big Idea 2 — Multiply by 1-Digit Numbers</span>
        <div class="sg-def">
          The <strong>Standard Algorithm</strong> multiplies each place value in order, beginning with the ones. Regroup when needed.<br><br>
          <strong>Example: 154 × 4</strong><br>
          • Multiply ones: 4 × 4 = 16 → record 6, regroup 1 ten<br>
          • Multiply tens: 4 × 5 = 20 → 20 + 1 = 21 tens → record 1, regroup 2 hundreds<br>
          • Multiply hundreds: 4 × 1 = 4 → 4 + 2 = 6<br>
          • <strong>Product: 616</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Example: 2,746 × 3</span>
        <div class="sg-def">
          1. Multiply ones: 3 × 6 = 18 → record 8, regroup 1<br>
          2. Multiply tens: 3 × 4 = 12 → 12 + 1 = 13 → record 3, regroup 1<br>
          3. Multiply hundreds: 3 × 7 = 21 → 21 + 1 = 22 → record 2, regroup 2<br>
          4. Multiply thousands: 3 × 2 = 6 → 6 + 2 = 8<br>
          • <strong>Product: 8,238</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Common Mistake</span>
        <div class="sg-def" style="background:#FCE8E8; border-left-color: var(--accent-red);">
          <strong>Forgetting to regroup.</strong> When a digit multiplication gives 10 or more, you must carry to the next place value. Forgetting to add the regrouped number is the most common error.
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> The Standard Algorithm works the same whether there are 2, 3, or 4 digits. You just keep going place by place.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "Estimate 47 × 412 by rounding each factor.",
      options: ["10,000", "20,000", "200,000", "2,000"],
      correct: 1,
      explanation: "47 → 50, 412 → 400. 50 × 400 = 20,000."
    },
    {
      question: "Estimate 24 × 398 using compatible numbers.",
      options: ["8,000", "10,000", "12,000", "6,000"],
      correct: 1,
      explanation: "Replace 24 with 25 (compatible with 400): 25 × 400 = 10,000."
    },
    {
      question: "Find 13 × 3.",
      options: ["26", "39", "49", "93"],
      correct: 1,
      explanation: "3 × 3 = 9 ones. 3 × 1 = 3 tens. So 39."
    },
    {
      question: "Find 154 × 4.",
      options: ["416", "516", "616", "716"],
      correct: 2,
      explanation: "4×4=16 → record 6, carry 1. 4×5=20+1=21 → record 1, carry 2. 4×1=4+2=6. → 616."
    },
    {
      question: "Find 2,746 × 3.",
      options: ["6,238", "7,238", "8,238", "9,238"],
      correct: 2,
      explanation: "Work through each place value: 8,238."
    }
  ],

  chapterQuiz: [
    {
      question: "Estimate 29 × 688 by rounding each factor.",
      options: ["14,000", "21,000", "28,000", "35,000"],
      correct: 1,
      explanation: "29 → 30, 688 → 700. 30 × 700 = 21,000."
    },
    {
      question: "Estimate 43 × 108 by rounding each factor.",
      options: ["400", "4,000", "40,000", "44,000"],
      correct: 1,
      explanation: "43 → 40, 108 → 100. 40 × 100 = 4,000."
    },
    {
      question: "Estimate 19 × 513 using compatible numbers.",
      options: ["5,000", "10,000", "15,000", "20,000"],
      correct: 1,
      explanation: "19 → 20, 513 → 500. 20 × 500 = 10,000."
    },
    {
      question: "A club orders 124 T-shirts at $18 each. Which is the best estimate?",
      options: ["$1,000", "$2,000", "$3,000", "$4,000"],
      correct: 1,
      explanation: "124 → 100, 18 → 20. 100 × 20 = 2,000. Or 120 × 20 = 2,400 ≈ 2,000."
    },
    {
      question: "Estimate 530 × 375. Is the estimate closer to 150,000 or 200,000?",
      options: ["150,000", "200,000", "250,000", "Neither"],
      correct: 1,
      explanation: "530 → 500, 375 → 400. 500 × 400 = 200,000. Closer to 200,000."
    },
    {
      question: "Is 500 an underestimate or overestimate for 12 × 53?",
      options: ["Underestimate", "Overestimate", "Exact", "Cannot tell"],
      correct: 0,
      explanation: "12 → 10 (less), 53 → 50 (less), 10 × 50 = 500. But 12 × 53 = 636. So 500 is an underestimate. Wait — 10 < 12 and 50 < 53, so both rounded DOWN → underestimate. Correct answer: Underestimate."
    },
    {
      question: "Find 13 × 3.",
      options: ["39", "33", "36", "43"],
      correct: 0,
      explanation: "3 × 3 = 9, 3 × 10 = 30. Total = 39."
    },
    {
      question: "Find 17 × 7.",
      options: ["77", "107", "119", "127"],
      correct: 2,
      explanation: "7 × 7 = 49 → record 9, carry 4. 7 × 1 = 7 + 4 = 11. → 119."
    },
    {
      question: "Find 741 × 3.",
      options: ["2,123", "2,223", "2,323", "2,423"],
      correct: 1,
      explanation: "3 × 1 = 3. 3 × 4 = 12 → record 2, carry 1. 3 × 7 = 21 + 1 = 22. → 2,223."
    },
    {
      question: "Find 587 × 3.",
      options: ["1,661", "1,761", "1,861", "1,961"],
      correct: 1,
      explanation: "3 × 7 = 21 → record 1, carry 2. 3 × 8 = 24 + 2 = 26 → record 6, carry 2. 3 × 5 = 15 + 2 = 17. → 1,761."
    },
    {
      question: "Find 413 × 6.",
      options: ["2,378", "2,478", "2,578", "2,678"],
      correct: 1,
      explanation: "6 × 3 = 18 → record 8, carry 1. 6 × 1 = 6 + 1 = 7. 6 × 4 = 24. → 2,478."
    },
    {
      question: "Find 625 × 6.",
      options: ["3,550", "3,650", "3,750", "3,850"],
      correct: 2,
      explanation: "6 × 5 = 30 → record 0, carry 3. 6 × 2 = 12 + 3 = 15 → record 5, carry 1. 6 × 6 = 36 + 1 = 37. → 3,750."
    },
    {
      question: "Find 731 × 9.",
      options: ["6,479", "6,579", "6,679", "6,779"],
      correct: 1,
      explanation: "9 × 1 = 9. 9 × 3 = 27 → record 7, carry 2. 9 × 7 = 63 + 2 = 65. → 6,579."
    },
    {
      question: "Find 88 × 5.",
      options: ["340", "400", "440", "480"],
      correct: 2,
      explanation: "5 × 8 = 40 → record 0, carry 4. 5 × 8 = 40 + 4 = 44. → 440."
    },
    {
      question: "Find 52 × 8.",
      options: ["316", "416", "516", "616"],
      correct: 1,
      explanation: "8 × 2 = 16 → record 6, carry 1. 8 × 5 = 40 + 1 = 41. → 416."
    },
    {
      question: "Find 352 × 3.",
      options: ["1,056", "1,156", "1,256", "1,356"],
      correct: 0,
      explanation: "3 × 2 = 6. 3 × 5 = 15 → record 5, carry 1. 3 × 3 = 9 + 1 = 10. → 1,056."
    },
    {
      question: "Find 159 × 5.",
      options: ["695", "745", "795", "845"],
      correct: 2,
      explanation: "5 × 9 = 45 → record 5, carry 4. 5 × 5 = 25 + 4 = 29 → record 9, carry 2. 5 × 1 = 5 + 2 = 7. → 795."
    },
    {
      question: "Find 164 × 5.",
      options: ["720", "820", "920", "1,020"],
      correct: 1,
      explanation: "5 × 4 = 20 → record 0, carry 2. 5 × 6 = 30 + 2 = 32 → record 2, carry 3. 5 × 1 = 5 + 3 = 8. → 820."
    },
    {
      question: "Find 19 × 8.",
      options: ["142", "152", "162", "172"],
      correct: 1,
      explanation: "8 × 9 = 72 → record 2, carry 7. 8 × 1 = 8 + 7 = 15. → 152."
    },
    {
      question: "Find 478 × 2.",
      options: ["856", "906", "956", "1,006"],
      correct: 2,
      explanation: "2 × 8 = 16 → record 6, carry 1. 2 × 7 = 14 + 1 = 15 → record 5, carry 1. 2 × 4 = 8 + 1 = 9. → 956."
    },
    {
      question: "Find 862 × 7.",
      options: ["5,934", "6,034", "6,134", "6,234"],
      correct: 1,
      explanation: "7 × 2 = 14 → record 4, carry 1. 7 × 6 = 42 + 1 = 43 → record 3, carry 4. 7 × 8 = 56 + 4 = 60. → 6,034."
    },
    {
      question: "Find 651 × 7.",
      options: ["4,457", "4,557", "4,657", "4,757"],
      correct: 1,
      explanation: "7 × 1 = 7. 7 × 5 = 35 → record 5, carry 3. 7 × 6 = 42 + 3 = 45. → 4,557."
    },
    {
      question: "Find 2,311 × 6.",
      options: ["13,766", "13,866", "13,966", "14,066"],
      correct: 1,
      explanation: "6 × 1 = 6. 6 × 1 = 6. 6 × 3 = 18 → record 8, carry 1. 6 × 2 = 12 + 1 = 13. → 13,866."
    },
    {
      question: "Find 1,945 × 3.",
      options: ["5,735", "5,835", "5,935", "6,035"],
      correct: 1,
      explanation: "3 × 5 = 15 → record 5, carry 1. 3 × 4 = 12 + 1 = 13 → record 3, carry 1. 3 × 9 = 27 + 1 = 28 → record 8, carry 2. 3 × 1 = 3 + 2 = 5. → 5,835."
    }
  ],

  skills: [
    {
      key: "estimate-products",
      label: "Estimate products using rounding and compatible numbers",
      generator: "estimateProduct",
      args: {},
      remember: "Round each factor (or use compatible numbers), then multiply. If both rounded numbers are less than the originals, the estimate is an underestimate.",
      workedExample: "Estimate 47 × 412:\n47 → 50\n412 → 400\n50 × 400 = 20,000"
    },
    {
      key: "multiply-1-digit",
      label: "Multiply by 1-digit numbers using the Standard Algorithm",
      generator: "multiplyByOneDigit",
      args: {},
      remember: "Multiply each place value in order, starting with the ones. Regroup any 10s to the next place value. Don't forget to add the regrouped amount.",
      workedExample: "Find 154 × 4:\n4 × 4 = 16 → record 6, carry 1\n4 × 5 = 20 + 1 = 21 → record 1, carry 2\n4 × 1 = 4 + 2 = 6\nProduct: 616"
    }
  ]
};