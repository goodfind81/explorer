/* ==========================================================
   Math Chapter 8 — Multiply Greater Numbers by Powers of 10
   Covers enVision Topic 3, Lesson 3-1.
   ========================================================== */

export const chapter = {
  id: "chapter-08-multiply-powers-of-10",
  name: "Multiply Greater Numbers by Powers of 10",
  shortName: "Multiply by 10s",

  studyGuideHtml: `
    <h2>⚡ Multiply Greater Numbers by Powers of 10</h2>
    <p>When you multiply a number by a power of 10, the digits don't change — you just add zeros to the end!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Big Pattern</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          <strong>The product ends with the same number of zeros as the power of 10.</strong><br><br>
          <strong>32 × 1 = 32</strong> &nbsp; (10<sup>0</sup> → 0 zeros)<br>
          <strong>32 × 10 = 320</strong> &nbsp; (10<sup>1</sup> → 1 zero)<br>
          <strong>32 × 100 = 3,200</strong> &nbsp; (10<sup>2</sup> → 2 zeros)<br>
          <strong>32 × 1,000 = 32,000</strong> &nbsp; (10<sup>3</sup> → 3 zeros)<br>
          <strong>32 × 10,000 = 320,000</strong> &nbsp; (10<sup>4</sup> → 4 zeros)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Examples</span>
        <div class="sg-def">
          <strong>46 × 10<sup>2</sup></strong> = 46 with 2 zeros = <strong>4,600</strong><br>
          <strong>62 × 10<sup>3</sup></strong> = 62 with 3 zeros = <strong>62,000</strong><br>
          <strong>19 × 10<sup>5</sup></strong> = 19 with 5 zeros = <strong>1,900,000</strong><br>
          <strong>61 × 10,000</strong> = 61 with 4 zeros = <strong>610,000</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Mental Math Trick</span>
        <div class="sg-def" style="background:#FFF9C4;">
          The exponent of the power of 10 tells you <strong>how many zeros to add</strong>.
          <br><br>
          <strong>5 × 10<sup>4</sup></strong> → 5 followed by 4 zeros → <strong>50,000</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Watch Out — Numbers Ending in 0</span>
        <div class="sg-def" style="background:#FCE8E8; border-left-color: var(--accent-red);">
          When the number already ends in a zero, count ALL the zeros.<br><br>
          <strong>60 × 1,000</strong> → 60 already has 1 zero, plus 3 zeros from 1,000 → 4 zeros total → <strong>60,000</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Why this works:</strong> Every time you multiply by 10, each digit moves one place to the left. The ones become tens, the tens become hundreds, and so on. A zero fills the empty ones place.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> This is why we can do big multiplications in our heads! 437 × 10,000 = 4,370,000 — just add 4 zeros to 437.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 46 × 10^0?",
      options: ["0", "46", "460", "4,600"],
      correct: 1,
      explanation: "10^0 = 1. So 46 × 1 = 46."
    },
    {
      question: "What is 46 × 10^2?",
      options: ["46", "460", "4,600", "46,000"],
      correct: 2,
      explanation: "10^2 = 100. 46 × 100 = 4,600."
    },
    {
      question: "What is 61 × 1,000?",
      options: ["610", "6,100", "61,000", "610,000"],
      correct: 2,
      explanation: "1,000 has 3 zeros. 61 × 1,000 = 61,000."
    },
    {
      question: "What is 62 × 10^3?",
      options: ["6,200", "62,000", "620,000", "6,200,000"],
      correct: 1,
      explanation: "10^3 = 1,000. 62 × 1,000 = 62,000."
    },
    {
      question: "What is 19 × 10^5?",
      options: ["190,000", "1,900,000", "19,000,000", "190,000,000"],
      correct: 1,
      explanation: "10^5 = 100,000. 19 × 100,000 = 1,900,000."
    }
  ],

  chapterQuiz: [
    {
      question: "What is 46 × 10^0?",
      options: ["0", "46", "460", "4,600"],
      correct: 1,
      explanation: "10^0 = 1. 46 × 1 = 46."
    },
    {
      question: "What is 46 × 10^1?",
      options: ["46", "460", "4,600", "46,000"],
      correct: 1,
      explanation: "10^1 = 10. 46 × 10 = 460."
    },
    {
      question: "What is 46 × 10^3?",
      options: ["460", "4,600", "46,000", "460,000"],
      correct: 2,
      explanation: "10^3 = 1,000. 46 × 1,000 = 46,000."
    },
    {
      question: "What is 46 × 10^4?",
      options: ["4,600", "46,000", "460,000", "4,600,000"],
      correct: 2,
      explanation: "10^4 = 10,000. 46 × 10,000 = 460,000."
    },
    {
      question: "What is 61 × 1,000?",
      options: ["610", "6,100", "61,000", "610,000"],
      correct: 2,
      explanation: "61 with 3 zeros = 61,000."
    },
    {
      question: "What is 50 × 10^2?",
      options: ["500", "5,000", "50,000", "500,000"],
      correct: 1,
      explanation: "10^2 = 100. 50 × 100 = 5,000."
    },
    {
      question: "What is 50 × 10^4?",
      options: ["5,000", "50,000", "500,000", "5,000,000"],
      correct: 2,
      explanation: "10^4 = 10,000. 50 × 10,000 = 500,000."
    },
    {
      question: "What is 99 × 10,000?",
      options: ["99,000", "990,000", "9,900,000", "99,000,000"],
      correct: 1,
      explanation: "99 with 4 zeros = 990,000."
    },
    {
      question: "What is 1,000 × 50?",
      options: ["500", "5,000", "50,000", "500,000"],
      correct: 2,
      explanation: "1,000 × 50 = 50,000."
    },
    {
      question: "What is 62 × 10^3?",
      options: ["6,200", "62,000", "620,000", "6,200,000"],
      correct: 1,
      explanation: "62 with 3 zeros = 62,000."
    },
    {
      question: "What is 437 × 10^4?",
      options: ["43,700", "437,000", "4,370,000", "43,700,000"],
      correct: 2,
      explanation: "437 with 4 zeros = 4,370,000."
    },
    {
      question: "What is 518 × 10,000?",
      options: ["51,800", "518,000", "5,180,000", "51,800,000"],
      correct: 2,
      explanation: "518 with 4 zeros = 5,180,000."
    },
    {
      question: "What is 376 × 100?",
      options: ["3,760", "37,600", "376,000", "3,760,000"],
      correct: 1,
      explanation: "376 with 2 zeros = 37,600."
    },
    {
      question: "What is 19 × 10^5?",
      options: ["190,000", "1,900,000", "19,000,000", "190,000,000"],
      correct: 1,
      explanation: "19 with 5 zeros = 1,900,000."
    },
    {
      question: "What is 75 × 1,000?",
      options: ["750", "7,500", "75,000", "750,000"],
      correct: 2,
      explanation: "75 with 3 zeros = 75,000."
    },
    {
      question: "What is 18 × 10^2?",
      options: ["180", "1,800", "18,000", "180,000"],
      correct: 1,
      explanation: "18 with 2 zeros = 1,800."
    },
    {
      question: "What is 90 × 10^4?",
      options: ["36,000", "90,000", "900,000", "9,000,000"],
      correct: 2,
      explanation: "10^4 = 10,000. 90 × 10,000 = 900,000."
    },
    {
      question: "Which is equivalent to multiplying a number by 10^3?",
      options: ["Multiplying by 30", "Multiplying by 1,000", "Multiplying by 10,000", "Multiplying by 10 twice"],
      correct: 1,
      explanation: "10^3 = 1,000. Multiplying by 10^3 = multiplying by 1,000."
    },
    {
      question: "Which are equivalent to 5 × 10^4? Select all that apply.",
      options: ["5 × 10,000", "5 × 100,000", "5,000", "50,000"],
      correct: 3,
      explanation: "5 × 10^4 = 5 × 10,000 = 50,000."
    },
    {
      question: "How many zeros are in the product 45 × 10^3?",
      options: ["2", "3", "4", "5"],
      correct: 1,
      explanation: "45 × 10^3 = 45,000. There are 3 zeros."
    },
    {
      question: "Ms. O'Malley's cousin lives 1,650 miles away. She has 100 gallons of gas and gets 35 miles per gallon. Can she drive round-trip (3,300 miles) on the free gas?",
      options: ["Yes, exactly", "Yes, with gas left over", "No, she falls short", "Cannot tell"],
      correct: 1,
      explanation: "100 gallons × 35 miles/gallon = 3,500 miles. Round-trip is 3,300 miles. 3,500 > 3,300 — yes, with gas left over."
    },
    {
      question: "Each beehive produces about 85 pounds of honey per year. About how many pounds will 10^3 hives produce?",
      options: ["850", "8,500", "85,000", "850,000"],
      correct: 2,
      explanation: "10^3 = 1,000. 85 × 1,000 = 85,000 pounds."
    },
    {
      question: "There are 2,000 pounds in 1 ton. A truck's weight limit is 40 tons. How many pounds is that?",
      options: ["8,000", "80,000", "800,000", "8,000,000"],
      correct: 1,
      explanation: "40 × 2,000 = 80,000 pounds."
    }
  ],

  skills: [
    {
      key: "multiply-10n",
      label: "Multiply by powers of 10",
      generator: "powersOf10",
      args: { variant: "multiply" },
      remember: "The exponent tells you how many zeros to add. 46 × 10² = 46 with 2 zeros = 4,600.",
      workedExample: "32 × 1 = 32\n32 × 10 = 320\n32 × 100 = 3,200\n32 × 1,000 = 32,000\n32 × 10,000 = 320,000"
    }
  ]
};