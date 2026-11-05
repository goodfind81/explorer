/* ==========================================================
   Math Chapter 12 — Topic 4 Review
   A test review for enVision Topic 4 (Lessons 4-1 to 4-8), from the
   Topic 4 Reteaching sets A–F and the Topic 4 Assessment review.
   New here: Lesson 4-8 (Model with Math: write an equation for a
   two-step problem) and writing decimal factors as fractions.
   Borrows the Chapter 11 generators and adds multiStepDecimal.
   Extended 2026-11-04 from the Topic 4 Test Re-take Review Task Cards:
   rounding to the nearest ten and hundred, and 2-digit whole number ×
   decimal word problems (adds estimateTensHundreds, multiplyDecimalByTwoDigit).
   ========================================================== */

export const chapter = {
  id: "chapter-12-topic-4-review",
  name: "Topic 4 Review",
  shortName: "T4 Review",

  /* ==========================================================
     STUDY GUIDE — a condensed cheat sheet
     ========================================================== */
  studyGuideHtml: `
    <h2>🎯 Topic 4 Review — Multiply Decimals</h2>
    <p>This chapter pulls together Lessons 4-1 through 4-8 so you can get ready for the <strong>Topic 4 test</strong>. It follows the Topic 4 Reteaching pages (Sets A–F) and adds the one new lesson: <strong>4-8, Model with Math</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Set A — Multiply by Powers of 10, and Estimate</span>
        <div class="sg-def">
          <strong>Multiply by 10 → move the decimal point 1 place right. By 100 → 2 places. By 1,000 → 3 places.</strong><br>
          • 8.56 × 10 = <strong>85.6</strong><br>
          • 0.36 × 100 = 36.0 = <strong>36</strong><br>
          • 10<sup>0</sup> = 1, so 0.29 × 10<sup>0</sup> = 0.29 (nothing moves).<br><br>
          <strong>Estimate</strong> by rounding or with compatible numbers:<br>
          • 0.38 × 99 → 0.4 × 100 = <strong>40</strong><br>
          • 24 × 3.9 → 24 × 4 = <strong>96</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Set B — Multiply a Decimal by a Whole Number</span>
        <div class="sg-def">
          Think of it as <strong>repeated addition</strong> with place-value blocks.<br>
          <strong>3 × 0.15</strong> = 0.15 + 0.15 + 0.15 = 3 tenths and 15 hundredths = <strong>0.45</strong>.<br><br>
          Estimate first to check that your answer is <strong>reasonable</strong>: 0.15 is a little more than 0.1, and 3 × 0.1 = 0.3, so 0.45 makes sense.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Set C — Hundredths Grids</span>
        <div class="sg-def">
          <strong>0.2 × 1.7:</strong> shade 1.7 one way and 0.2 the other way. The product is <strong>where the shading overlaps</strong>: 34 hundredths.<br>
          So 0.2 × 1.7 = <strong>0.34</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Set D — Use Properties</span>
        <div class="sg-def">
          Rewrite each decimal as a whole number times 0.1 or 0.01, then use the <strong>Associative</strong> and <strong>Commutative</strong> Properties to regroup.<br>
          0.8 × 0.4<br>
          = (8 × 0.1) × (4 × 0.1)<br>
          = (8 × 4) × (0.1 × 0.1)<br>
          = 32 × 0.01 = <strong>0.32</strong><br><br>
          💡 When <strong>two factors less than 1</strong> are multiplied, the product is <strong>less than either factor</strong>. 0.32 is less than 0.8 and less than 0.4.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Decimals as Fractions</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          A decimal factor can be written as a fraction: tenths over 10, hundredths over 100.<br>
          <strong>0.48 × 0.3</strong> = <sup>48</sup>⁄<sub>100</sub> × <sup>3</sup>⁄<sub>10</sub><br><br>
          • Order doesn't matter: <sup>3</sup>⁄<sub>10</sub> × <sup>48</sup>⁄<sub>100</sub> is the same product.<br>
          • 0.3 = <sup>3</sup>⁄<sub>10</sub> = <sup>30</sup>⁄<sub>100</sub>, so <sup>48</sup>⁄<sub>100</sub> × <sup>30</sup>⁄<sub>100</sub> works too.<br>
          • ❌ <sup>48</sup>⁄<sub>100</sub> × <sup>3</sup>⁄<sub>100</sub> is <strong>not</strong> equal: <sup>3</sup>⁄<sub>100</sub> is 0.03, not 0.3.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Set E — Use Number Sense to Place the Decimal Point</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>Compare each factor to 1.</strong><br>
          <strong>43.5 × 1.7 = 7395</strong> (decimal point missing)<br>
          • 1.7 is greater than 1, so the product is <strong>greater than 43.5</strong>.<br>
          • 43.5 is about 40 and 1.7 is about 2, so the answer is <strong>about 80</strong>.<br>
          • The decimal point goes between the 3 and the 9: <strong>73.95</strong>.<br><br>
          If a factor is <strong>less than 1</strong>, the product is <strong>less than</strong> the other factor: 0.12 × 0.9 = 0.108.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Set F (Lesson 4-8) — Model with Math</span>
        <div class="sg-def">
          Some problems take <strong>two steps</strong>. Ask: <strong>What do I need to find first?</strong> Then write an <strong>equation</strong> for each step.<br><br>
          <strong>Example:</strong> Marcus buys a book for $4.25, 3 pens that cost $1.50 each, and a folder for $0.95. He pays with a $10 bill. How much change does he get?<br>
          • <strong>First</strong> find the total cost: 3 × $1.50 = $4.50, and $4.25 + $4.50 + $0.95 = <strong>$9.70</strong>.<br>
          • <strong>Then</strong> subtract: $10.00 − $9.70 = <strong>$0.30</strong>.<br><br>
          <strong>Area of a shape made of rectangles:</strong> find the area of each rectangle first, then add them.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Thinking Habits for Modeling with Math</span>
        <div class="sg-def">
          • How can I use math I know to help solve this problem?<br>
          • How can I use pictures, objects, or an equation to represent the problem?<br>
          • How can I use numbers, words, and symbols to solve the problem?
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Re-take Review — Task Card Tips</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          <strong>Describe the move:</strong> 6.42 × 1,000 → move the decimal point <strong>3 places to the right</strong> and <strong>add 1 zero</strong>, because 6.42 only has 2 digits after the point: <strong>6,420</strong>.<br><br>
          <strong>Round to the nearest ten and hundred</strong> to estimate two big decimals:<br>
          • 63.7 × 286.9 → <strong>60 × 300</strong> = <strong>18,000</strong><br>
          • Shortcut: 6 × 3 = 18, then write the 3 zeros (one from 60, two from 300).<br><br>
          <strong>A 2-digit whole number × a decimal:</strong> 64 boxes that weigh 8.5 pounds each.<br>
          • Estimate: 60 × 9 = 540.<br>
          • Multiply as whole numbers: 64 × 85 = 5,440. 8.5 has 1 decimal place → <strong>544 pounds</strong>. Close to 540 ✅<br><br>
          <strong>"Times as much" means multiply:</strong> a bird that weighs 36 times as much as a 2.8 kg flamingo weighs 36 × 2.8 = <strong>100.8 kg</strong>.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Splitting a decimal the wrong way in partial products. 0.89 is <strong>0.8 + 0.09</strong>, not 0.8 + 0.9! If your answer is far from your estimate, check your work, not your estimate.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> You can often pick the right product without multiplying at all! 6.32 × 0.15 must be less than 6.32 because 0.15 is less than 1. 9.28 × 4.15 is about 9 × 4 = 36. Number sense is a superpower on a test.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 0.36 × 100?",
      options: ["3.6", "36", "360", "0.036"],
      correct: 1,
      explanation: "100 has 2 zeros, so move the decimal point 2 places to the right: 0.36 → 36."
    },
    {
      question: "Find 3 × 0.15.",
      options: ["0.45", "4.5", "0.045", "0.18"],
      correct: 0,
      explanation: "0.15 + 0.15 + 0.15 = 0.45. Or 3 × 15 = 45, and 0.15 has 2 decimal places: 0.45."
    },
    {
      question: "Use properties to find 0.8 × 0.4.",
      options: ["3.2", "0.032", "0.32", "1.2"],
      correct: 2,
      explanation: "(8 × 4) × (0.1 × 0.1) = 32 × 0.01 = 0.32."
    },
    {
      question: "The decimal point is missing: 43.5 × 1.7 = 7395. What is the product?",
      options: ["739.5", "73.95", "7.395", "7,395"],
      correct: 1,
      explanation: "1.7 is greater than 1, so the product is greater than 43.5. About 40 × 2 = 80, so the product is 73.95."
    },
    {
      question: "Ana buys 4 stickers for $0.75 each and a pen for $1.20. She pays with a $5 bill. What should she find FIRST?",
      options: ["The total cost of what she buys", "How much change she gets", "How much a sticker weighs", "How many bills she has"],
      correct: 0,
      explanation: "First find the total cost: 4 × $0.75 = $3.00, plus $1.20 = $4.20. Then find the change: $5.00 − $4.20 = $0.80."
    }
  ],

  chapterQuiz: [
    // --- Powers of 10 (4-1) ---
    {
      question: "An envelope is 0.085 cm thick. How thick is a stack of 100 envelopes?",
      options: ["0.85 cm", "8.5 cm", "85 cm", "0.0085 cm"],
      correct: 1,
      explanation: "100 has 2 zeros, so move the decimal point 2 places to the right: 0.085 → 8.5 cm."
    },
    {
      question: "Which product equals 70.2?",
      options: ["7.02 × 10^2", "0.702 × 10", "0.702 × 10^2", "0.702 × 10^4"],
      correct: 2,
      explanation: "0.702 × 10^2 moves the decimal point 2 places: 70.2. (7.02 × 10^2 = 702, 0.702 × 10 = 7.02, 0.702 × 10^4 = 7,020.)"
    },
    {
      question: "If ▢ = 10^3, which equation is true?",
      options: ["0.79 × ▢ = 790", "0.79 × ▢ = 79", "0.79 × ▢ = 7.9", "0.79 × ▢ = 7,900"],
      correct: 0,
      explanation: "10^3 = 1,000, so move the decimal point 3 places right: 0.79 → 790."
    },
    {
      question: "Which equation is NOT true when ▢ = 10^3?",
      options: ["6.3 × ▢ = 6,300", "0.023 × ▢ = 23", "14.5 × ▢ = 1,450", "0.79 × ▢ = 790"],
      correct: 2,
      explanation: "14.5 × 1,000 = 14,500, not 1,450. The other three are true."
    },
    {
      question: "Which equation is true for the decimal 0.29?",
      options: ["10^2 × 0.29 = 290", "10^1 × 0.29 = 29", "10^0 × 0.29 = 0.29", "10^4 × 0.29 = 290"],
      correct: 2,
      explanation: "10^0 = 1, and 1 × 0.29 = 0.29. (10^2 × 0.29 = 29, 10^1 × 0.29 = 2.9, 10^4 × 0.29 = 2,900.)"
    },
    {
      question: "A phone plan charges $0.48 per minute. What do 100 minutes of calls cost?",
      options: ["$4.80", "$480", "$0.48", "$48"],
      correct: 3,
      explanation: "0.48 × 100: move the decimal point 2 places to the right → $48."
    },
    {
      question: "One floor tile has an area of 92.16 square inches. What is the area of 10^2 tiles?",
      options: ["921.6 square inches", "9,216 square inches", "92,160 square inches", "9.216 square inches"],
      correct: 1,
      explanation: "10^2 = 100, so move the decimal point 2 places to the right: 92.16 → 9,216 square inches."
    },

    // --- Estimate (4-2) ---
    {
      question: "Use compatible numbers to estimate 0.38 × 99.",
      options: ["4", "40", "400", "0.4"],
      correct: 1,
      explanation: "0.38 is close to 0.4 and 99 is close to 100. 0.4 × 100 = 40."
    },
    {
      question: "Dylan rides the bus 4.79 miles each school day. Estimate how far he rides in 21 school days.",
      options: ["About 10 miles", "About 50 miles", "About 100 miles", "About 1,000 miles"],
      correct: 2,
      explanation: "4.79 → 5 and 21 → 20. 5 × 20 = 100 miles. (The exact distance is 100.59 miles.)"
    },
    {
      question: "Sara buys 15 paddle balls at $0.89 each. She gets $25.50 and says her estimate of 15 × $1 = $15 must be too low. What really went wrong?",
      options: [
        "Her estimate is too low; $25.50 is right",
        "Her partial products are wrong: 0.89 is 0.8 + 0.09, not 0.8 + 0.9. The real cost is $13.35",
        "She should have rounded $0.89 to $0",
        "Nothing; both answers are correct"
      ],
      correct: 1,
      explanation: "$0.89 is less than $1, so 15 balls must cost less than $15. Sara split 0.89 into 0.8 and 0.9 by mistake. 15 × 0.89 = 13.35, so the cost is $13.35."
    },

    // --- Decimal × whole number (4-3, 4-4) ---
    {
      question: "Find 5 × 2.99 (the cost of 5 balloons at $2.99 each).",
      options: ["$14.95", "$149.50", "$1.495", "$15.95"],
      correct: 0,
      explanation: "299 × 5 = 1,495, and 2.99 has 2 decimal places: $14.95. Check: 5 × $3 = $15 ✅"
    },
    {
      question: "A bowling alley charges $185 per hour. How much does a 2.5-hour party cost?",
      options: ["$370", "$46.25", "$462.50", "$4,625"],
      correct: 2,
      explanation: "185 × 2.5 = 185 × 2 + 185 × 0.5 = 370 + 92.50 = $462.50."
    },
    {
      question: "One inch equals 2.54 centimeters. How many centimeters is 10 inches?",
      options: ["0.254", "25.4", "254", "12.54"],
      correct: 1,
      explanation: "2.54 × 10: move the decimal point 1 place to the right → 25.4 centimeters."
    },
    {
      question: "Nina hiked 4.35 km. Angela hiked 3 times as far. Which expression shows how far Angela hiked?",
      options: ["4.35 × 3", "4.35 ÷ 3", "4.35 × 1", "4.35 + 3"],
      correct: 0,
      explanation: "\"3 times as far\" means multiply by 3: 4.35 × 3 = 13.05 km."
    },
    {
      question: "How far did Angela hike if she went 3 times as far as Nina's 4.35 km?",
      options: ["12.05 km", "1.305 km", "130.5 km", "13.05 km"],
      correct: 3,
      explanation: "435 × 3 = 1,305, and 4.35 has 2 decimal places: 13.05 km. Check: 4 × 3 = 12 ✅"
    },

    // --- Decimal × decimal (4-5, 4-6, 4-7) ---
    {
      question: "Match the product: 0.06 × 0.5 = ?",
      options: ["30", "3", "0.3", "0.03"],
      correct: 3,
      explanation: "6 hundredths × 5 tenths = 30 thousandths = 0.030 = 0.03."
    },
    {
      question: "Match the product: 0.6 × 0.5 = ?",
      options: ["0.3", "3", "0.03", "30"],
      correct: 0,
      explanation: "6 tenths × 5 tenths = 30 hundredths = 0.30 = 0.3."
    },
    {
      question: "Use a hundredths grid to find 0.2 × 1.7.",
      options: ["3.4", "0.034", "1.9", "0.34"],
      correct: 3,
      explanation: "The shading overlaps in 34 squares, or 34 hundredths. 0.2 × 1.7 = 0.34."
    },
    {
      question: "Tomatoes cost $1.30 per pound. How much do 5.8 pounds cost?",
      options: ["$7.54", "$75.40", "$6.54", "$0.754"],
      correct: 0,
      explanation: "5.8 × 1.3: 58 × 13 = 754, and there are 2 decimal places in all: $7.54. Check: 6 × 1 = 6, and $7.54 is reasonable."
    },
    {
      question: "A square painting has sides of 9.5 inches. What is its area?",
      options: ["38 square inches", "90.25 square inches", "19 square inches", "902.5 square inches"],
      correct: 1,
      explanation: "Area = 9.5 × 9.5 = 90.25 square inches. (38 inches is the perimeter: 4 × 9.5.)"
    },
    {
      question: "A forest preserve is 1.6 square miles. 0.3 of it is open for hiking. How many square miles are open for hiking?",
      options: ["4.8", "0.048", "0.48", "1.9"],
      correct: 2,
      explanation: "1.6 × 0.3 = (16 × 3) × (0.1 × 0.1) = 48 × 0.01 = 0.48 square mile."
    },
    {
      question: "Which expression is equal to 0.48 × 0.3?",
      options: ["48/100 × 3/100", "3/100 × 48/100", "48/100 × 3/10", "48/10 × 3/10"],
      correct: 2,
      explanation: "0.48 = 48/100 and 0.3 = 3/10. 3/100 is 0.03, not 0.3."
    },
    {
      question: "Which expression is NOT equal to 0.8 × 0.07?",
      options: ["8/10 × 7/100", "7/100 × 80/100", "8/10 × 7/10", "80/100 × 7/100"],
      correct: 2,
      explanation: "0.07 = 7/100, not 7/10. 80/100 = 8/10 = 0.8, so the other three are all equal to 0.8 × 0.07."
    },
    {
      question: "Two factors are both less than 1. What is true about their product?",
      options: ["It is less than either factor", "It is greater than either factor", "It is always 1", "It is between the two factors"],
      correct: 0,
      explanation: "If two factors less than one are multiplied, their product is less than either factor. Example: 0.8 × 0.4 = 0.32."
    },

    // --- Number sense (Set E) ---
    {
      question: "Without multiplying, which is the product of 6.32 × 0.15?",
      options: ["26.52", "21.456", "0.948", "38.512"],
      correct: 2,
      explanation: "0.15 is less than 1, so the product must be less than 6.32. Only 0.948 fits."
    },
    {
      question: "Without multiplying, which is the product of 9.28 × 4.15?",
      options: ["0.948", "21.456", "26.52", "38.512"],
      correct: 3,
      explanation: "9.28 is about 9 and 4.15 is about 4, so the product is about 36. 38.512 is the closest."
    },
    {
      question: "The decimal point is missing: 7 × 21.6 = 1512. What is the product?",
      options: ["1.512", "15.12", "151.2", "1,512"],
      correct: 2,
      explanation: "21.6 is about 20, and 7 × 20 = 140. So the product is 151.2."
    },
    {
      question: "The decimal point is missing: 0.12 × 0.9 = 108. What is the product?",
      options: ["0.108", "1.08", "10.8", "0.0108"],
      correct: 0,
      explanation: "Both factors are less than 1, so the product is less than 0.12. It has 2 + 1 = 3 decimal places: 0.108."
    },

    // --- Model with Math (4-8) ---
    {
      question: "A window has three rectangular parts: 1.8 ft by 1.25 ft, 1.5 ft by 0.75 ft, and 1.5 ft by 0.5 ft. What is its total area?",
      options: ["4.125 square feet", "2.25 square feet", "41.25 square feet", "3.75 square feet"],
      correct: 0,
      explanation: "Find each area first: 1.8 × 1.25 = 2.25, 1.5 × 0.75 = 1.125, 1.5 × 0.5 = 0.75. Then add: 2.25 + 1.125 + 0.75 = 4.125 square feet."
    },
    {
      question: "Patti buys bread for $3.49, 6 muffins at $1.25 each, and juice for $1.79. She pays with a $20 bill. How much change should she get?",
      options: ["$12.78", "$13.47", "$7.22", "$8.22"],
      correct: 2,
      explanation: "First the total: 6 × $1.25 = $7.50, and $3.49 + $7.50 + $1.79 = $12.78. Then the change: $20.00 − $12.78 = $7.22."
    },
    {
      question: "Isabella practices piano for 0.75 hour and flute for 1.4 hours every day. How many hours does she practice in the 30 days of April?",
      options: ["2.15 hours", "64.5 hours", "645 hours", "6.45 hours"],
      correct: 1,
      explanation: "First find one day: 0.75 + 1.4 = 2.15 hours. Then multiply: 30 × 2.15 = 64.5 hours."
    },
    {
      question: "4 offices each have a floor 7.2 ft long and 5.8 ft wide. What is the exact total area of carpet needed?",
      options: ["41.76 square feet", "168 square feet", "167.04 square feet", "1,670.4 square feet"],
      correct: 2,
      explanation: "One office: 7.2 × 5.8 = 41.76 square feet. Four offices: 4 × 41.76 = 167.04 square feet. The estimate 4 × (7 × 6) = 168 shows this is reasonable."
    },

    // --- Re-take review task cards ---
    {
      question: "How should you find the product of 5.81 × 1,000?",
      options: [
        "Move the decimal point 3 places to the right and add 1 zero",
        "Move the decimal point 2 places to the right and add 1 zero",
        "Move the decimal point 1 place to the right and add 2 zeros",
        "Move the decimal point 3 places to the left"
      ],
      correct: 0,
      explanation: "1,000 has 3 zeros, so the decimal point moves 3 places to the right. 5.81 only has 2 digits after the point, so add 1 zero: 5,810."
    },
    {
      question: "What is 0.57 × 1,000?",
      options: ["5.7", "57", "570", "5,700"],
      correct: 2,
      explanation: "Move the decimal point 3 places to the right: 0.57 → 570 (add 1 zero)."
    },
    {
      question: "A school buys 100 pencils. Each pencil costs $0.36. How much does the school spend?",
      options: ["$3.60", "$36.00", "$360.00", "$0.36"],
      correct: 1,
      explanation: "0.36 × 100: move the decimal point 2 places to the right → $36.00."
    },
    {
      question: "Leo scores an average of 18.4 points a game. Round to the nearest whole number to estimate his total points in 5 games.",
      options: ["80", "85", "90", "100"],
      correct: 2,
      explanation: "18.4 rounds to 18. 18 × 5 = 90."
    },
    {
      question: "Which equation gives the best estimate of 312 × 3.08?",
      options: ["300 × 3 = 900", "400 × 3 = 1,200", "300 × 4 = 1,200", "300 × 1 = 300"],
      correct: 0,
      explanation: "312 rounds to 300 and 3.08 rounds to 3. 300 × 3 = 900."
    },
    {
      question: "A cat weighs 4.6 kilograms. A tiger weighs 42 times as much as the cat. How much does the tiger weigh?",
      options: ["19.32 kilograms", "193.2 kilograms", "1,932 kilograms", "184.2 kilograms"],
      correct: 1,
      explanation: "\"Times as much\" means multiply: 46 × 42 = 1,932, and 4.6 has 1 decimal place → 193.2 kg. Check: 5 × 40 = 200 ✅"
    },
    {
      question: "A ship carries 75 crates. Each crate weighs 6.4 pounds. What is the total weight of the crates?",
      options: ["48 pounds", "380 pounds", "480 pounds", "4,800 pounds"],
      correct: 2,
      explanation: "75 × 64 = 4,800, and 6.4 has 1 decimal place → 480.0 = 480 pounds. Check: 75 × 6 = 450 ✅"
    },
    {
      question: "Which expression is equivalent to 3.6 × 0.24?",
      options: [
        "(36 × 0.1) × (24 × 0.01)",
        "(36 × 0.1) × (24 × 0.1)",
        "(36 × 0.01) × (24 × 0.01)",
        "(3.6 × 0.1) × (0.24 × 0.01)"
      ],
      correct: 0,
      explanation: "3.6 = 36 tenths = 36 × 0.1, and 0.24 = 24 hundredths = 24 × 0.01."
    },
    {
      question: "Estimate 47.2 × 314.6. Round to the nearest ten and hundred.",
      options: ["150", "1,500", "15,000", "150,000"],
      correct: 2,
      explanation: "47.2 → 50 (nearest ten) and 314.6 → 300 (nearest hundred). 50 × 300 = 15,000."
    },
    {
      question: "A garden is 8.5 acres. Beans are planted on 0.6 of the garden. How many acres have beans?",
      options: ["51 acres", "5.1 acres", "0.51 acres", "9.1 acres"],
      correct: 1,
      explanation: "8.5 × 0.6: 85 × 6 = 510, and there are 2 decimal places in all → 5.10 = 5.1 acres. 0.6 is less than 1, so the answer is less than 8.5 ✅"
    },
    {
      question: "A town has 286,400 people. A nearby city has about 3 times as many. Which is a reasonable estimate of the city's population?",
      options: ["90,000", "600,000", "900,000", "1,200,000"],
      correct: 2,
      explanation: "286,400 rounds to 300,000. 300,000 × 3 = 900,000."
    },
    {
      question: "What is 7.25 × 2.6?",
      options: ["1.885", "18.35", "18.85", "188.5"],
      correct: 2,
      explanation: "725 × 26 = 18,850, and there are 2 + 1 = 3 decimal places → 18.850 = 18.85. Check: 7 × 3 = 21, so about 20 ✅"
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK — mixed Topic 4 review
     ========================================================== */
  skills: [
    {
      key: "review-decimal-power-of-10",
      label: "Review: Multiply decimals by powers of 10",
      generator: "multiplyDecimalPowerOf10",
      args: {},
      remember: "Count the zeros (or read the exponent) and move the decimal point that many places to the RIGHT. 10^0 = 1, so nothing moves.",
      workedExample: "8.56 × 10 = 85.6\n0.36 × 100 = 36\n0.29 × 10^0 = 0.29"
    },
    {
      key: "review-estimate-decimal-product",
      label: "Review: Estimate a decimal product",
      generator: "estimateDecimalProduct",
      args: {},
      remember: "Round or use compatible numbers, then multiply. Use your estimate to check that an exact answer is reasonable.",
      workedExample: "Estimate 0.38 × 99:\n0.38 → 0.4, 99 → 100\n0.4 × 100 = 40"
    },
    {
      key: "review-multiply-decimals",
      label: "Review: Multiply a decimal by a decimal",
      generator: "multiplyDecimalsPartial",
      args: {},
      remember: "Estimate first. Find the partial products and add them, or multiply as whole numbers and count the decimal places in both factors.",
      workedExample: "0.8 × 0.4\n= (8 × 4) × (0.1 × 0.1)\n= 32 × 0.01 = 0.32"
    },
    {
      key: "review-place-decimal-point",
      label: "Review: Place the decimal point with number sense",
      generator: "placeDecimalPoint",
      args: {},
      remember: "Compare each factor to 1 and estimate. A factor greater than 1 makes the product bigger than the other factor; a factor less than 1 makes it smaller.",
      workedExample: "43.5 × 1.7 = 7395\n1.7 > 1, and about 40 × 2 = 80\n→ 73.95"
    },
    {
      key: "model-with-math-two-step",
      label: "Model with math: two-step problems",
      generator: "multiStepDecimal",
      args: {},
      remember: "Ask: what do I need to find first? Write an equation for each step: find the total cost (or each area) first, then subtract (or add).",
      workedExample: "Bread $3.49, 6 muffins at $1.25, juice $1.79, paid $20:\n6 × 1.25 = 7.50\n3.49 + 7.50 + 1.79 = 12.78\n20.00 − 12.78 = 7.22"
    },
    {
      key: "estimate-round-tens-hundreds",
      label: "Estimate by rounding to the nearest ten and hundred",
      generator: "estimateTensHundreds",
      args: {},
      remember: "Round the 2-digit number to the nearest ten and the 3-digit number to the nearest hundred. Multiply the front digits, then write the zeros.",
      workedExample: "63.7 × 286.9\n63.7 → 60, 286.9 → 300\n6 × 3 = 18 → 18,000"
    },
    {
      key: "multiply-decimal-by-two-digit",
      label: "Word problems: a 2-digit number × a decimal",
      generator: "multiplyDecimalByTwoDigit",
      args: {},
      remember: "Estimate first. Multiply as whole numbers, then give the product as many decimal places as the decimal factor. \"Times as much\" means multiply.",
      workedExample: "64 boxes × 8.5 pounds\nEstimate: 60 × 9 = 540\n64 × 85 = 5,440 → 544.0 = 544 pounds"
    }
  ]
};
