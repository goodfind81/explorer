/* ==========================================================
   Math Chapter 9 — Multiply Whole Numbers
   Covers enVision Topic 3: Lessons 3-2, 3-3, 3-6.
   Growing chapter — new lessons add new skills as they arrive.
   ========================================================== */

export const chapter = {
  id: "chapter-09-multiply-whole-numbers",
  name: "Multiply Whole Numbers",
  shortName: "Multiply",

  studyGuideHtml: `
    <h2>✖️ Multiply Whole Numbers</h2>
    <p>This chapter covers three big ideas: <strong>estimating products</strong>, <strong>multiplying by 1-digit numbers</strong>, and <strong>multiplying with zeros</strong>.</p>

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
        <span class="sg-label">Big Idea 3 — Multiply by 2-Digit Numbers (with zeros)</span>
        <div class="sg-def">
          The Standard Algorithm doesn't change when there's a zero in a factor. Multiply the ones, then multiply the tens (remember to add a 0 to the ones place), then add the partial products.<br><br>
          <strong>Example: 208 × 31</strong><br>
          • Multiply by ones (1): 208 × 1 = 208<br>
          • Multiply by tens (3): 208 × 3 = 624, then × 10 = 6,240<br>
          • Add the partial products: 208 + 6,240 = <strong>6,448</strong><br><br>
          <strong>Remember:</strong> Any number × 0 = 0. Any number × 1 = the original number.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Common Mistake</span>
        <div class="sg-def" style="background:#FCE8E8; border-left-color: var(--accent-red);">
          <strong>Forgetting the zero placeholder.</strong> When multiplying by the tens digit, you MUST add a 0 in the ones place of that partial product. Without it, the answer will be too small by a factor of 10.
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> The Standard Algorithm works the same whether there are 2, 3, or 4 digits, and whether or not there are zeros. You just keep going place by place — ones, then tens, then add.</div>
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
      question: "Find 154 × 4.",
      options: ["416", "516", "616", "716"],
      correct: 2,
      explanation: "4×4=16 → record 6, carry 1. 4×5=20+1=21 → record 1, carry 2. 4×1=4+2=6. → 616."
    },
    {
      question: "Find 208 × 31.",
      options: ["6,448", "6,248", "5,448", "6,648"],
      correct: 0,
      explanation: "208 × 1 = 208. 208 × 3 = 624, then × 10 = 6,240. 208 + 6,240 = 6,448."
    },
    {
      question: "Find 405 × 36.",
      options: ["13,580", "14,580", "14,480", "15,580"],
      correct: 1,
      explanation: "405 × 6 = 2,430. 405 × 3 = 1,215, then × 10 = 12,150. 2,430 + 12,150 = 14,580."
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
      explanation: "124 → 100, 18 → 20. 100 × 20 = 2,000."
    },
    {
      question: "Find 13 × 3.",
      options: ["39", "33", "36", "43"],
      correct: 0,
      explanation: "3 × 3 = 9, 3 × 10 = 30. Total = 39."
    },
    {
      question: "Find 154 × 4.",
      options: ["416", "516", "616", "716"],
      correct: 2,
      explanation: "4×4=16 → record 6, carry 1. 4×5=20+1=21 → record 1, carry 2. 4×1=4+2=6. → 616."
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
      question: "Find 88 × 5.",
      options: ["340", "400", "440", "480"],
      correct: 2,
      explanation: "5 × 8 = 40 → record 0, carry 4. 5 × 8 = 40 + 4 = 44. → 440."
    },
    {
      question: "Find 352 × 3.",
      options: ["1,056", "1,156", "1,256", "1,356"],
      correct: 0,
      explanation: "3 × 2 = 6. 3 × 5 = 15 → record 5, carry 1. 3 × 3 = 9 + 1 = 10. → 1,056."
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
    },
    // --- Lesson 3-6 problems: multiply with zeros ---
    {
      question: "Find 203 × 12.",
      options: ["2,436", "2,336", "2,536", "2,636"],
      correct: 0,
      explanation: "203 × 2 = 406. 203 × 1 = 203, then × 10 = 2,030. 406 + 2,030 = 2,436."
    },
    {
      question: "Find 306 × 21.",
      options: ["6,326", "6,426", "6,526", "6,626"],
      correct: 1,
      explanation: "306 × 1 = 306. 306 × 2 = 612, then × 10 = 6,120. 306 + 6,120 = 6,426."
    },
    {
      question: "Find 109 × 73.",
      options: ["7,957", "7,857", "8,057", "7,757"],
      correct: 0,
      explanation: "109 × 3 = 327. 109 × 7 = 763, then × 10 = 7,630. 327 + 7,630 = 7,957."
    },
    {
      question: "Find 601 × 45.",
      options: ["27,045", "26,045", "27,145", "28,045"],
      correct: 0,
      explanation: "601 × 5 = 3,005. 601 × 4 = 2,404, then × 10 = 24,040. 3,005 + 24,040 = 27,045."
    },
    {
      question: "Find 708 × 34.",
      options: ["24,072", "24,172", "23,972", "25,072"],
      correct: 0,
      explanation: "708 × 4 = 2,832. 708 × 3 = 2,124, then × 10 = 21,240. 2,832 + 21,240 = 24,072."
    },
    {
      question: "Find 520 × 63.",
      options: ["32,760", "32,860", "31,760", "33,760"],
      correct: 0,
      explanation: "520 × 3 = 1,560. 520 × 6 = 3,120, then × 10 = 31,200. 1,560 + 31,200 = 32,760."
    },
    {
      question: "Find 405 × 36.",
      options: ["13,580", "14,580", "14,480", "15,580"],
      correct: 1,
      explanation: "405 × 6 = 2,430. 405 × 3 = 1,215, then × 10 = 12,150. 2,430 + 12,150 = 14,580."
    },
    {
      question: "Find 802 × 94.",
      options: ["75,388", "74,388", "76,388", "74,288"],
      correct: 0,
      explanation: "802 × 4 = 3,208. 802 × 9 = 7,218, then × 10 = 72,180. 3,208 + 72,180 = 75,388."
    },
    {
      question: "Find 990 × 37.",
      options: ["36,630", "35,630", "37,630", "36,530"],
      correct: 0,
      explanation: "990 × 7 = 6,930. 990 × 3 = 2,970, then × 10 = 29,700. 6,930 + 29,700 = 36,630."
    },
    {
      question: "Sarah found that the product of 49 and 805 is 3,165. How would finding an estimate help her know the answer is NOT reasonable?",
      options: [
        "The estimate would be much larger — around 40,000 — so 3,165 is too small",
        "The estimate would be around 3,000 — so 3,165 is reasonable",
        "The estimate would be smaller than 3,165",
        "Estimates don't help here"
      ],
      correct: 0,
      explanation: "49 ≈ 50, 805 ≈ 800. 50 × 800 = 40,000. So 3,165 is way off — Sarah must have made a mistake."
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
      remember: "Multiply each place value in order, starting with the ones. Regroup any 10s to the next place value.",
      workedExample: "Find 154 × 4:\n4 × 4 = 16 → record 6, carry 1\n4 × 5 = 20 + 1 = 21 → record 1, carry 2\n4 × 1 = 4 + 2 = 6\nProduct: 616"
    },
    {
      key: "multiply-with-zeros",
      label: "Multiply whole numbers with zeros (2-digit × 2-digit or 3-digit × 2-digit)",
      generator: "multiplyWithZeros",
      args: {},
      remember: "Multiply by the ones digit, then by the tens digit (add a 0 placeholder), then add the partial products.",
      workedExample: "Find 208 × 31:\n208 × 1 = 208\n208 × 3 = 624, then × 10 = 6,240\n208 + 6,240 = 6,448"
    }
  ]
};