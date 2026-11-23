/* ==========================================================
   Math Chapter 16 — Topic 5 Test Review
   A test review for enVision Topic 5 (Divide Whole Numbers), from
   the Topic 5 Test Study Guide (UPDATED version, 11/20) and the
   Topic 5 Division Review Game (11/20). Follows the updated guide:
   it dropped the decimal ÷ 10/100/1,000 and 8.45 − B questions, and
   it fixed the bus answer (623 ÷ 43 needs 15 buses).
   Also mixes in the spiral review items on the guide: multiplying
   decimals, place value, rounding and estimating products.
   Reuses the Chapter 15 generators and adds interpretRemainder.
   ========================================================== */

export const chapter = {
  id: "chapter-16-topic-5-review",
  name: "Topic 5 Test Review",
  shortName: "T5 Review",

  /* ==========================================================
     STUDY GUIDE — a condensed cheat sheet
     ========================================================== */
  studyGuideHtml: `
    <h2>🎯 Topic 5 Test Review — Divide Whole Numbers</h2>
    <p>This chapter gets you ready for the <strong>Topic 5 test</strong>. It follows the Topic 5 Study Guide and the Division Review Game: dividing by multiples of 10, estimating quotients, what to do with a remainder, dividing by 1- and 2-digit numbers, and a few review questions from Topic 4.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Divide by Multiples of 10 🔟</span>
        <div class="sg-def">
          Use a <strong>basic fact</strong>, then <strong>place-value patterns</strong>.<br>
          • 2,800 ÷ 70 → 28 ÷ 7 = 4 → <strong>40</strong><br>
          • 2,000 ÷ 50 → 20 ÷ 5 = 4 → <strong>40</strong><br><br>
          <strong>Check by multiplying:</strong> 40 × 70 = 2,800 ✅<br>
          Be careful: 1,200 ÷ 400 = <strong>3</strong>, not 40, and 400 ÷ 2 = <strong>200</strong>, not 40. Always check!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Estimate a Quotient 🔍</span>
        <div class="sg-def">
          Change the numbers to <strong>compatible numbers</strong> that make a basic fact.<br>
          • 312 ÷ 48 → <strong>300 ÷ 50 = 6</strong><br>
          • 286 ÷ 39 → <strong>280 ÷ 40 = 7</strong><br><br>
          The <strong>best</strong> estimate uses numbers that are <strong>closest</strong> to the real ones. 280 ÷ 40 is better than 300 ÷ 30 for 286 ÷ 39, because 39 is much closer to 40 than to 30.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">What Do I Do with the Remainder? 🤔</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>218 trains, 20 in each box:</strong> 218 ÷ 20 = 10 R18<br>
          • How many <strong>completely filled</strong> boxes? → the quotient: <strong>10</strong><br>
          • How many <strong>left over</strong>? → the remainder: <strong>18</strong><br><br>
          <strong>623 students, 43 on each bus:</strong> 623 ÷ 43 = 14 R21<br>
          • How many buses for <strong>ALL</strong> the students? → add one more: <strong>15</strong><br>
          The 21 extra students still need a ride!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Which Operation? ➗</span>
        <div class="sg-def">
          <strong>8,100 crackers, 90 in each box.</strong> How many boxes?<br>
          Total ÷ number in each group → <strong>8,100 ÷ 90 = 90 boxes</strong><br>
          ❌ Not 90 ÷ 8,100 (the order matters) and ❌ not 90 × 8,100.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Divide by a 2-Digit Number ✍️</span>
        <div class="sg-def">
          <strong>4,944 ÷ 12</strong><br>
          • 49 ÷ 12 → 4 (4 × 12 = 48), 49 − 48 = 1<br>
          • Bring down 4 → 14 ÷ 12 → 1 (12), 14 − 12 = 2<br>
          • Bring down 4 → 24 ÷ 12 → 2 (24), 24 − 24 = 0<br>
          • Quotient: <strong>412</strong>. Check: 412 × 12 = 4,944 ✅<br><br>
          On a multiple-choice test, you can also <strong>multiply each answer choice</strong> by the divisor to see which one works.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Divide by a 1-Digit Number 🔢</span>
        <div class="sg-def">
          Divide, multiply, subtract, bring down.<br>
          • 672 ÷ 8: 67 ÷ 8 = 8 (64), 67 − 64 = 3, bring down 2 → 32 ÷ 8 = 4 → <strong>84</strong><br>
          • Check: 84 × 8 = 672 ✅
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Topic 4 &amp; Place Value Review 🔁</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          • <strong>4.7 × 6.3</strong>: 47 × 63 = 2,961. 1 + 1 = 2 decimal places → <strong>29.61</strong><br>
          • <strong>2.152 × 100</strong>: move the decimal point 2 places right → <strong>215.2</strong><br>
          • <strong>423 × 28</strong> is about 400 × 30 = <strong>12,000</strong><br>
          • <strong>Round 2,425</strong> to the nearest hundred: the tens digit is 2, so round down → <strong>2,400</strong><br>
          • The 4 in <strong>425</strong> (400) is <strong>10 times greater</strong> than the 4 in <strong>46</strong> (40).
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Giving the quotient when the question asks for ALL. If 157 muffins go on trays of 12, then 157 ÷ 12 = 13 R1. You need <strong>14</strong> trays, or 1 muffin has nowhere to go!
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Every division problem has a multiplication problem hiding inside it. If you know 12 × 412 = 4,944, you also know 4,944 ÷ 12 = 412. That's why checking with multiplication always works!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 2,400 ÷ 60?",
      options: ["4", "40", "400", "4,000"],
      correct: 1,
      explanation: "Basic fact: 24 ÷ 6 = 4. Then 240 ÷ 60 = 4 and 2,400 ÷ 60 = 40. Check: 40 × 60 = 2,400."
    },
    {
      question: "What is the best estimate of 274 ÷ 38?",
      options: ["280 ÷ 40 = 7", "300 ÷ 30 = 10", "250 ÷ 50 = 5", "200 ÷ 40 = 5"],
      correct: 0,
      explanation: "274 is close to 280 and 38 is close to 40. 280 ÷ 40 = 7 uses the closest compatible numbers."
    },
    {
      question: "What is 6,336 ÷ 12?",
      options: ["518", "528", "538", "548"],
      correct: 1,
      explanation: "63 ÷ 12 = 5 (60), 63 − 60 = 3. Bring down 3 → 33 ÷ 12 = 2 (24), 33 − 24 = 9. Bring down 6 → 96 ÷ 12 = 8. Quotient: 528. Check: 528 × 12 = 6,336."
    },
    {
      question: "214 students are going on a trip. Each bus holds 30 students. How many buses are needed for ALL the students?",
      options: ["6 buses", "7 buses", "8 buses", "9 buses"],
      correct: 2,
      explanation: "214 ÷ 30 = 7 R4. 7 buses carry 210 students, but 4 students are left, so you need 1 more bus: 8 buses."
    },
    {
      question: "What is 6.2 × 4.1?",
      options: ["2.542", "25.42", "254.2", "10.3"],
      correct: 1,
      explanation: "62 × 41 = 2,542. There are 1 + 1 = 2 decimal places → 25.42. Check: 6 × 4 = 24 ✅"
    }
  ],

  chapterQuiz: [
    // --- Divide by multiples of 10 ---
    {
      question: "Which equation has a correct quotient of 50?",
      options: ["3,500 ÷ 70 = 50", "2,500 ÷ 500 = 50", "450 ÷ 5 = 50", "1,000 ÷ 2 = 50"],
      correct: 0,
      explanation: "35 ÷ 7 = 5, so 3,500 ÷ 70 = 50. Check: 50 × 70 = 3,500. (2,500 ÷ 500 = 5, 450 ÷ 5 = 90, 1,000 ÷ 2 = 500.)"
    },
    {
      question: "Which equation has a correct quotient of 60?",
      options: ["3,600 ÷ 6 = 60", "4,200 ÷ 70 = 60", "1,800 ÷ 300 = 60", "540 ÷ 6 = 60"],
      correct: 1,
      explanation: "42 ÷ 7 = 6, so 4,200 ÷ 70 = 60. Check: 60 × 70 = 4,200. (3,600 ÷ 6 = 600, 1,800 ÷ 300 = 6, 540 ÷ 6 = 90.)"
    },
    {
      question: "Which equation is NOT true?",
      options: ["6,300 ÷ 90 = 70", "2,400 ÷ 40 = 60", "1,600 ÷ 400 = 40", "350 ÷ 7 = 50"],
      correct: 2,
      explanation: "1,600 ÷ 400 = 4, not 40 (16 ÷ 4 = 4, and 400 × 4 = 1,600). The other three are true."
    },
    {
      question: "Which expression has a quotient of 7?",
      options: ["360 ÷ 60", "420 ÷ 60", "480 ÷ 60", "300 ÷ 60"],
      correct: 1,
      explanation: "42 ÷ 6 = 7, so 420 ÷ 60 = 7. (360 ÷ 60 = 6, 480 ÷ 60 = 8, 300 ÷ 60 = 5.)"
    },
    {
      question: "Which expression has a quotient of 6?",
      options: ["210 ÷ 30", "150 ÷ 30", "222 ÷ 37", "280 ÷ 35"],
      correct: 2,
      explanation: "37 × 6 = 222, so 222 ÷ 37 = 6. (210 ÷ 30 = 7, 150 ÷ 30 = 5, 280 ÷ 35 = 8.)"
    },
    {
      question: "A bakery makes 6,300 cookies. The cookies are packed in boxes of 70. Which shows the number of boxes?",
      options: ["6,300 ÷ 70 = 90 boxes", "6,300 ÷ 10 = 630 boxes", "70 ÷ 6,300 = 90 boxes", "70 × 6,300 = 441,000 boxes"],
      correct: 0,
      explanation: "Total ÷ number in each box: 6,300 ÷ 70. Basic fact 63 ÷ 7 = 9, so the answer is 90 boxes."
    },
    {
      question: "A farm collects 4,800 eggs. The eggs are packed in cartons of 60. Which expression finds the number of cartons?",
      options: ["4,800 × 60", "60 ÷ 4,800", "4,800 ÷ 60", "4,800 − 60"],
      correct: 2,
      explanation: "Divide the total number of eggs by the number in each carton: 4,800 ÷ 60 = 80 cartons."
    },

    // --- Estimate quotients ---
    {
      question: "What is the best estimate of 357 ÷ 62?",
      options: ["3", "6", "36", "60"],
      correct: 1,
      explanation: "357 is close to 360 and 62 is close to 60. 360 ÷ 60 = 6."
    },
    {
      question: "What is the BEST estimate of 415 ÷ 69?",
      options: ["420 ÷ 70 = 6", "350 ÷ 70 = 5", "400 ÷ 50 = 8", "500 ÷ 100 = 5"],
      correct: 0,
      explanation: "415 is close to 420 and 69 is close to 70. 420 ÷ 70 = 6 uses the closest compatible numbers."
    },
    {
      question: "What is the best estimate of 238 ÷ 41?",
      options: ["4", "6", "8", "60"],
      correct: 1,
      explanation: "238 is close to 240 and 41 is close to 40. 240 ÷ 40 = 6."
    },
    {
      question: "Kim buys a used car for $4,782. She will pay for it in 6 equal payments. Which is the best estimate for each payment?",
      options: ["$600", "$700", "$800", "$900"],
      correct: 2,
      explanation: "$4,782 is close to $4,800, and 48 ÷ 6 = 8, so 4,800 ÷ 6 = 800. About $800."
    },

    // --- Remainders in word problems ---
    {
      question: "A factory makes 237 toy cars. The cars are placed in boxes that hold 20 cars each. How many completely filled boxes will there be, and how many cars will be left over?",
      options: ["10 boxes; 37 cars left over", "11 boxes; 17 cars left over", "12 boxes; 3 cars left over", "13 boxes; 0 cars left over"],
      correct: 1,
      explanation: "237 ÷ 20 = 11 R17. 11 boxes hold 220 cars, and 237 − 220 = 17 cars are left over."
    },
    {
      question: "A bakery has 189 muffins. Each tray holds 12 muffins. How many trays are needed for ALL the muffins?",
      options: ["14 trays", "15 trays", "16 trays", "17 trays"],
      correct: 2,
      explanation: "189 ÷ 12 = 15 R9. 15 trays hold 180 muffins, but 9 muffins are left, so you need 1 more tray: 16 trays."
    },
    {
      question: "712 students are going on a field trip. Each bus holds 48 students. How many buses are needed to take EVERY student?",
      options: ["13 buses", "14 buses", "15 buses", "16 buses"],
      correct: 2,
      explanation: "712 ÷ 48 = 14 R40. 14 buses carry 672 students, but 40 are still left, so 1 more bus is needed: 15 buses."
    },
    {
      question: "Ana has 400 stickers. She puts 30 stickers on each page of her album. How many pages can she completely fill?",
      options: ["10 pages", "12 pages", "13 pages", "14 pages"],
      correct: 2,
      explanation: "400 ÷ 30 = 13 R10. She can fill 13 pages. The 10 left over are not enough for another full page."
    },
    {
      question: "A store has 250 pencils. It packs them in boxes of 24. After filling as many boxes as it can, how many pencils are left over?",
      options: ["2 pencils", "10 pencils", "11 pencils", "14 pencils"],
      correct: 1,
      explanation: "250 ÷ 24 = 10 R10. 10 boxes use 240 pencils, and 250 − 240 = 10 pencils are left over."
    },

    // --- Divide by a 2-digit number ---
    {
      question: "What is 5,628 ÷ 12?",
      options: ["459", "469", "479", "489"],
      correct: 1,
      explanation: "56 ÷ 12 = 4 (48), 56 − 48 = 8. Bring down 2 → 82 ÷ 12 = 6 (72), 82 − 72 = 10. Bring down 8 → 108 ÷ 12 = 9. Quotient: 469. Check: 469 × 12 = 5,628."
    },
    {
      question: "What is 3,956 ÷ 23?",
      options: ["162", "172", "182", "192"],
      correct: 1,
      explanation: "39 ÷ 23 = 1 (23), 39 − 23 = 16. Bring down 5 → 165 ÷ 23 = 7 (161), 165 − 161 = 4. Bring down 6 → 46 ÷ 23 = 2. Quotient: 172. Check: 172 × 23 = 3,956."
    },
    {
      question: "What is 6,216 ÷ 24?",
      options: ["249", "259", "269", "279"],
      correct: 1,
      explanation: "62 ÷ 24 = 2 (48), 62 − 48 = 14. Bring down 1 → 141 ÷ 24 = 5 (120), 141 − 120 = 21. Bring down 6 → 216 ÷ 24 = 9. Quotient: 259. Check: 259 × 24 = 6,216."
    },
    {
      question: "What is 4,345 ÷ 55?",
      options: ["69", "79", "89", "99"],
      correct: 1,
      explanation: "434 ÷ 55 = 7 (385), 434 − 385 = 49. Bring down 5 → 495 ÷ 55 = 9. Quotient: 79. Check: 79 × 55 = 4,345."
    },
    {
      question: "Maya earns $14 per hour. How many hours does she need to work to earn $378?",
      options: ["25 hours", "26 hours", "27 hours", "28 hours"],
      correct: 2,
      explanation: "378 ÷ 14 = 27. Check: 27 × 14 = 378."
    },

    // --- Divide by a 1-digit number ---
    {
      question: "What is 744 ÷ 6?",
      options: ["114", "124", "134", "144"],
      correct: 1,
      explanation: "7 ÷ 6 = 1, 7 − 6 = 1. Bring down 4 → 14 ÷ 6 = 2 (12), 14 − 12 = 2. Bring down 4 → 24 ÷ 6 = 4. Quotient: 124. Check: 124 × 6 = 744."
    },
    {
      question: "What is 896 ÷ 7?",
      options: ["118", "128", "138", "148"],
      correct: 1,
      explanation: "8 ÷ 7 = 1, 8 − 7 = 1. Bring down 9 → 19 ÷ 7 = 2 (14), 19 − 14 = 5. Bring down 6 → 56 ÷ 7 = 8. Quotient: 128. Check: 128 × 7 = 896."
    },
    {
      question: "What is 585 ÷ 5?",
      options: ["107", "117", "127", "137"],
      correct: 1,
      explanation: "5 ÷ 5 = 1. Bring down 8 → 8 ÷ 5 = 1, 8 − 5 = 3. Bring down 5 → 35 ÷ 5 = 7. Quotient: 117. Check: 117 × 5 = 585."
    },

    // --- Topic 4 and place-value review ---
    {
      question: "What is 5.8 × 3.4?",
      options: ["1.972", "19.72", "197.2", "9.2"],
      correct: 1,
      explanation: "58 × 34 = 1,972. There are 1 + 1 = 2 decimal places → 19.72. Check: 6 × 3 = 18 ✅"
    },
    {
      question: "What is 3.874 × 100?",
      options: ["0.03874", "0.3874", "38.74", "387.4"],
      correct: 3,
      explanation: "100 has 2 zeros, so move the decimal point 2 places to the right: 3.874 → 387.4."
    },
    {
      question: "The 6 in 632 is how many times the value of the 6 in 68?",
      options: ["10 times greater", "100 times greater", "1,000 times greater", "The values are equal"],
      correct: 0,
      explanation: "The 6 in 632 is worth 600. The 6 in 68 is worth 60. 600 is 10 times 60."
    },
    {
      question: "The 3 in 3,170 is _____ times _____ than the 3 in 317.",
      options: ["10, greater", "10, less", "100, greater", "100, less"],
      correct: 0,
      explanation: "The 3 in 3,170 is worth 3,000. The 3 in 317 is worth 300. 3,000 is 10 times greater than 300."
    },
    {
      question: "Round 4,563 to the nearest hundred.",
      options: ["4,500", "4,560", "4,600", "5,000"],
      correct: 2,
      explanation: "Look at the tens digit: 6. It's 5 or more, so round the hundreds up: 4,563 → 4,600."
    },
    {
      question: "What is the best estimate of 386 × 42?",
      options: ["160", "1,600", "12,000", "16,000"],
      correct: 3,
      explanation: "Round: 386 → 400 and 42 → 40. 4 × 4 = 16, then write 3 zeros: 16,000."
    },
    {
      question: "What is the best estimate of 63 × 48? Round each factor to the nearest ten.",
      options: ["300", "2,400", "3,000", "30,000"],
      correct: 2,
      explanation: "Round: 63 → 60 and 48 → 50. 6 × 5 = 30, then write 2 zeros: 3,000."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK — mixed Topic 5 review
     ========================================================== */
  skills: [
    {
      key: "t5-review-divide-multiples-of-10",
      label: "Review: Divide by multiples of 10",
      generator: "divideMultiplesOf10",
      args: {},
      remember: "Find a basic fact, then use place-value patterns. Check by multiplying the quotient by the divisor.",
      workedExample: "2,800 ÷ 70\nBasic fact: 28 ÷ 7 = 4\n→ 40\nCheck: 40 × 70 = 2,800"
    },
    {
      key: "t5-review-estimate-quotients",
      label: "Review: Estimate quotients",
      generator: "estimateQuotientCompatible",
      args: {},
      remember: "Pick compatible numbers closest to the real ones so you get a basic fact, then use place-value patterns.",
      workedExample: "312 ÷ 48\n→ 300 ÷ 50\n30 ÷ 5 = 6\nAbout 6"
    },
    {
      key: "t5-review-interpret-remainder",
      label: "Remainders in word problems",
      generator: "interpretRemainder",
      args: {},
      remember: "Completely filled? Use the quotient. Left over? Use the remainder. Enough for ALL? Add 1 to the quotient.",
      workedExample: "623 students, 43 per bus\n623 ÷ 43 = 14 R21\nALL students → 15 buses"
    },
    {
      key: "t5-review-divide-2-digit",
      label: "Review: Divide by a 2-digit number",
      generator: "divideByTwoDigit",
      args: {},
      remember: "Divide, multiply, subtract, bring down. Check by multiplying the quotient by the divisor.",
      workedExample: "4,944 ÷ 12\n49 ÷ 12 = 4, 14 ÷ 12 = 1, 24 ÷ 12 = 2\n→ 412\nCheck: 412 × 12 = 4,944"
    },
    {
      key: "t5-review-long-division-1-digit",
      label: "Review: Divide by a 1-digit number",
      generator: "longDivision1Digit",
      args: {},
      remember: "Divide, multiply, subtract, bring down. If the first digit is smaller than the divisor, start with the first two digits.",
      workedExample: "672 ÷ 8\n67 ÷ 8 = 8, 67 − 64 = 3\nBring down 2 → 32 ÷ 8 = 4\n→ 84"
    }
  ]
};
