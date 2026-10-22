/* ==========================================================
   Math Chapter 11 — Multiply Decimals
   Covers enVision Topic 4: Lessons 4-1, 4-2, 4-3, 4-5, 4-6, 4-7.
   Growing chapter — new Topic 4 lessons add new skills as they arrive.
   ========================================================== */

export const chapter = {
  id: "chapter-11-multiply-decimals",
  name: "Multiply Decimals",
  shortName: "× Decimals",

  studyGuideHtml: `
    <h2>🔢 Multiply Decimals</h2>
    <p>This chapter covers six big ideas: <strong>multiplying decimals by powers of 10</strong>, <strong>estimating the product of a decimal and a whole number</strong>, <strong>multiplying a decimal by a whole number</strong>, and three ways to <strong>multiply a decimal by a decimal</strong>: hundredths grids, partial products, and properties.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Big Idea 1 (Lesson 4-1) — Multiply Decimals by Powers of 10</span>
        <div class="sg-def">
          When you multiply by a power of 10, every digit moves to a <strong>greater place value</strong>. The decimal point moves to the <strong>right</strong>.<br><br>
          • Count the <strong>zeros</strong> in 10, 100, 1,000 … or read the <strong>exponent</strong> in 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup> …<br>
          • Move the decimal point that many places to the right.<br><br>
          <strong>Example: 0.057</strong><br>
          • 0.057 × 10 = <strong>0.57</strong> (1 place)<br>
          • 0.057 × 100 = <strong>5.7</strong> (2 places)<br>
          • 0.057 × 1,000 = <strong>57</strong> (3 places)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Run out of digits? Add zeros!</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          <strong>92.3 × 10<sup>4</sup></strong> → move the decimal point 4 places right.<br>
          92.3 → 923. → 9,230. → 92,300. → 923,000.<br>
          So 92.3 × 10<sup>4</sup> = <strong>923,000</strong>.<br><br>
          <strong>Multiplying by 1 (10<sup>0</sup>)</strong> doesn't move anything: 1.675 × 1 = 1.675.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Finding a Missing Exponent</span>
        <div class="sg-def">
          Count how many places the decimal point moved.<br><br>
          <strong>0.936 × 10<sup>▢</sup> = 93.6</strong><br>
          0.936 → 9.36 → 93.6 is <strong>2 places</strong>, so ▢ = <strong>2</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Big Idea 2 (Lesson 4-2) — Estimate a Decimal × a Whole Number</span>
        <div class="sg-def">
          <strong>Way 1 — Round both numbers.</strong><br>
          Estimate 23 × 1.75:<br>
          • 23 → 20 (nearest ten)<br>
          • 1.75 → 2 (nearest whole number)<br>
          • 20 × 2 = <strong>40</strong><br><br>
          <strong>Way 2 — Use compatible numbers</strong> (numbers that are easy to multiply in your head).<br>
          Estimate 12 × 0.49:<br>
          • 0.49 is close to 0.5 (one half)<br>
          • 12 × 0.5 = <strong>6</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Overestimate or Underestimate?</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          • If you rounded both numbers <strong>UP</strong>, your estimate is an <strong>overestimate</strong> (more than the real answer).<br>
          • If you rounded both numbers <strong>DOWN</strong>, it's an <strong>underestimate</strong>.<br><br>
          <strong>Money tip:</strong> when you need to know if you have enough money, an <strong>overestimate</strong> is safer!<br>
          3 raincoats at $25.99 → 3 × $26 = $78. We rounded up, so $78 is a little more than the real cost.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Big Idea 3 (Lesson 4-3) — Use Models to Multiply a Decimal by a Whole Number</span>
        <div class="sg-def">
          Place-value blocks: a <strong>flat = 1</strong>, a <strong>rod = 0.1</strong> (one tenth), a <strong>cube = 0.01</strong> (one hundredth).<br><br>
          <strong>Example: 0.45 × 3</strong><br>
          • Build 0.45 three times: 4 rods + 5 cubes, three times<br>
          • Total: 12 rods and 15 cubes<br>
          • Trade 10 cubes for 1 rod → 13 rods and 5 cubes<br>
          • Trade 10 rods for 1 flat → 1 flat, 3 rods, 5 cubes<br>
          • <strong>Product: 1.35</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Shortcut — Multiply, Then Place the Decimal Point</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>Find 2.89 × 3.</strong><br><br>
          <strong>Step 1 — Ignore the decimal point:</strong> 289 × 3 = 867.<br>
          <strong>Step 2 — Count decimal places:</strong> 2.89 has 2 decimal places, so the answer has 2: <strong>8.67</strong>.<br>
          <strong>Step 3 — Check with an estimate:</strong> 2.89 is about 3, and 3 × 3 = 9. 8.67 is close to 9 ✅
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Big Idea 4 (Lesson 4-5) — Use a Hundredths Grid to Multiply a Decimal by a Decimal</span>
        <div class="sg-def">
          Use each factor as one side of a rectangle on a hundredths grid. The <strong>double-shaded area</strong> is the product.<br><br>
          <strong>Example: 0.7 × 0.9</strong><br>
          • Shade 7 columns for 0.7 and 9 rows for 0.9.<br>
          • The double-shaded area has <strong>63</strong> small squares → 63 hundredths.<br>
          • 0.7 × 0.9 = <strong>0.63</strong><br><br>
          💡 Both factors are less than 1, so the product is also <strong>less than 1</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Big Idea 5 (Lesson 4-6) — Multiply Decimals Using Partial Products</span>
        <div class="sg-def">
          <strong>Step 1 — Estimate</strong> so you can check your answer. 9.5 × 5.6 → 10 × 6 = <strong>60</strong>.<br><br>
          <strong>Step 2 — Find the partial products</strong> (an area model helps you keep track):<br>
          • 0.6 × 0.5 = 0.30<br>
          • 0.6 × 9 = 5.4<br>
          • 5 × 0.5 = 2.5<br>
          • 5 × 9 = 45<br><br>
          <strong>Step 3 — Add them:</strong> 0.30 + 5.4 + 2.5 + 45 = <strong>53.20</strong>.<br>
          53.2 is close to the estimate 60, so the answer is <strong>reasonable</strong> ✅
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Big Idea 6 (Lesson 4-7) — Use Properties to Multiply Decimals</span>
        <div class="sg-def">
          Split each decimal into a <strong>whole number</strong> times a <strong>place value</strong>, multiply the whole numbers, then multiply the place values.<br><br>
          <strong>Example: 2.5 × 3.25</strong><br>
          = (25 × 325) × (0.1 × 0.01)<br>
          = 8,125 × 0.001<br>
          = <strong>8.125</strong><br><br>
          • tenth × tenth = <strong>hundredth</strong> (0.1 × 0.1 = 0.01)<br>
          • tenth × hundredth = <strong>thousandth</strong> (0.1 × 0.01 = 0.001)
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Putting the decimal point in the wrong place. 1.3 × 2 is <strong>2.6</strong>, not 26! Always check: 1.3 is about 1, and 1 × 2 = 2, so the answer must be about 2.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Multiplying by 10 doesn't really "add a zero" — it moves every digit one place to the left in the place-value chart. That's why 0.25 × 10 is 2.5, not 0.250!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 0.057 × 100?",
      options: ["0.57", "5.7", "57", "570"],
      correct: 1,
      explanation: "100 has 2 zeros, so move the decimal point 2 places to the right: 0.057 → 5.7."
    },
    {
      question: "What is 2.148 × 10^3?",
      options: ["21.48", "214.8", "2,148", "21,480"],
      correct: 2,
      explanation: "The exponent is 3, so move the decimal point 3 places to the right: 2.148 → 2,148."
    },
    {
      question: "Round to estimate 23 × 1.75.",
      options: ["20", "40", "46", "60"],
      correct: 1,
      explanation: "23 → 20 (nearest ten), 1.75 → 2 (nearest whole number). 20 × 2 = 40."
    },
    {
      question: "Find 0.45 × 3.",
      options: ["1.35", "0.135", "13.5", "1.25"],
      correct: 0,
      explanation: "45 × 3 = 135. 0.45 has 2 decimal places, so the product is 1.35. Check: 0.45 is about 0.5, and 0.5 × 3 = 1.5 ✅"
    },
    {
      question: "Find the missing exponent: 0.936 × 10^▢ = 93.6",
      options: ["1", "2", "3", "4"],
      correct: 1,
      explanation: "0.936 → 9.36 → 93.6 moves the decimal point 2 places, so the exponent is 2."
    }
  ],

  chapterQuiz: [
    // Lesson 4-1: multiply decimals by powers of 10
    {
      question: "What is 0.62 × 10?",
      options: ["0.062", "6.2", "62", "620"],
      correct: 1,
      explanation: "10 has 1 zero, so move the decimal point 1 place to the right: 0.62 → 6.2."
    },
    {
      question: "What is 0.0063 × 100?",
      options: ["0.063", "0.63", "6.3", "63"],
      correct: 1,
      explanation: "100 has 2 zeros, so move the decimal point 2 places to the right: 0.0063 → 0.63."
    },
    {
      question: "What is 19.212 × 10^2?",
      options: ["192.12", "1,921.2", "19,212", "1.9212"],
      correct: 1,
      explanation: "The exponent is 2, so move the decimal point 2 places to the right: 19.212 → 1,921.2."
    },
    {
      question: "What is 0.024 × 1,000?",
      options: ["0.24", "2.4", "24", "240"],
      correct: 2,
      explanation: "1,000 has 3 zeros, so move the decimal point 3 places to the right: 0.024 → 24."
    },
    {
      question: "What is 92.3 × 10^4?",
      options: ["9,230", "92,300", "923,000", "9,230,000"],
      correct: 2,
      explanation: "Move the decimal point 4 places to the right, adding zeros as needed: 92.3 → 923,000."
    },
    {
      question: "What is 1.675 × 1?",
      options: ["0", "1.675", "16.75", "1,675"],
      correct: 1,
      explanation: "Any number times 1 stays the same. 1.675 × 1 = 1.675."
    },
    {
      question: "Find the missing exponent: 10^▢ × 12.35 = 12,350",
      options: ["1", "2", "3", "4"],
      correct: 2,
      explanation: "12.35 → 123.5 → 1,235 → 12,350 moves the decimal point 3 places, so the exponent is 3."
    },
    {
      question: "Jennifer planted a tree that was 0.17 meter tall. Years later it was 100 times as tall. How tall is the tree now?",
      options: ["1.7 meters", "17 meters", "170 meters", "0.0017 meters"],
      correct: 1,
      explanation: "0.17 × 100: move the decimal point 2 places to the right. 0.17 → 17 meters."
    },
    {
      question: "Marco and Suzi each found 0.721 × 10^2. Marco got 7.21 and Suzi got 72.1. Who is correct?",
      options: [
        "Marco, because 10^2 moves the decimal point 1 place",
        "Suzi, because 10^2 moves the decimal point 2 places to the right",
        "Both are correct",
        "Neither is correct"
      ],
      correct: 1,
      explanation: "The exponent 2 means move the decimal point 2 places to the right: 0.721 → 72.1. Suzi is correct."
    },
    {
      question: "Which equation is NOT true?",
      options: ["0.036 × 1,000 = 36", "3.6 × 10^1 = 36", "0.36 × 100 = 3,600", "360 × 10^1 = 3,600"],
      correct: 2,
      explanation: "0.36 × 100 moves the decimal point 2 places: 0.36 → 36, not 3,600. The other three are true."
    },
    {
      question: "A peanut has a mass of about 0.45 gram. About what is the mass of 10,000 peanuts?",
      options: ["45 grams", "450 grams", "4,500 grams", "45,000 grams"],
      correct: 2,
      explanation: "10,000 has 4 zeros, so move the decimal point 4 places to the right: 0.45 → 4,500 grams."
    },

    // Lesson 4-2: estimate the product of a decimal and a whole number
    {
      question: "Party favors cost $2.98 each. Round both numbers to estimate the cost of 27 favors.",
      options: ["$60", "$81", "$90", "$900"],
      correct: 2,
      explanation: "$2.98 → $3 and 27 → 30. $3 × 30 = $90."
    },
    {
      question: "Use compatible numbers to estimate 12 × 0.49.",
      options: ["0.6", "6", "60", "5"],
      correct: 1,
      explanation: "0.49 is close to 0.5 (one half). 12 × 0.5 = 6."
    },
    {
      question: "Round to estimate 19.3 × 6.",
      options: ["12", "100", "120", "1,200"],
      correct: 2,
      explanation: "19.3 → 20. 20 × 6 = 120."
    },
    {
      question: "Round each number to its greatest place to estimate 345 × 5.79.",
      options: ["1,500", "1,800", "2,100", "18,000"],
      correct: 1,
      explanation: "345 → 300 (nearest hundred) and 5.79 → 6 (nearest whole number). 300 × 6 = 1,800."
    },
    {
      question: "Mrs. Smith bought 3 raincoats for $25.99 each. Rounding to the nearest dollar, about how much did she spend, and is it an overestimate or underestimate?",
      options: ["About $78, an overestimate", "About $78, an underestimate", "About $75, an underestimate", "About $90, an overestimate"],
      correct: 0,
      explanation: "$25.99 → $26. 3 × $26 = $78. We rounded UP, so $78 is a little more than the real cost: an overestimate."
    },
    {
      question: "Rounding each number to the nearest whole number, which gives an UNDERESTIMATE?",
      options: ["2.7 × 13.5", "4.51 × 8.7", "9.19 × 8.48", "3.6 × 6.5"],
      correct: 2,
      explanation: "9.19 → 9 and 8.48 → 8. Both were rounded DOWN, so 9 × 8 = 72 is less than the real product (about 77.9). The others round at least one number up."
    },
    {
      question: "Three sisters each pay $28.95 for hair coloring and leave a $10 tip in all. About how much do they spend?",
      options: ["About $77", "About $97", "About $107", "About $127"],
      correct: 1,
      explanation: "$28.95 → $29. 3 × $29 = $87. $87 + $10 = $97."
    },

    // Lesson 4-3: use models to multiply a decimal and a whole number
    {
      question: "Trail 1 is 1.3 miles long. Trail 2 is twice as long. How long is Trail 2?",
      options: ["2.6 miles", "26 miles", "0.26 mile", "1.6 miles"],
      correct: 0,
      explanation: "1.3 × 2: 13 × 2 = 26, and 1.3 has 1 decimal place, so 2.6 miles. Check: 1 × 2 = 2, close to 2.6 ✅"
    },
    {
      question: "Find 0.08 × 6.",
      options: ["4.8", "0.48", "0.048", "0.14"],
      correct: 1,
      explanation: "8 hundredths × 6 = 48 hundredths = 0.48."
    },
    {
      question: "Find 12 × 0.08.",
      options: ["9.6", "0.96", "0.096", "0.86"],
      correct: 1,
      explanation: "12 × 8 = 96, and 0.08 has 2 decimal places, so 0.96."
    },
    {
      question: "Find 1.75 × 4.",
      options: ["7", "70", "0.7", "4.75"],
      correct: 0,
      explanation: "175 × 4 = 700. 1.75 has 2 decimal places, so 7.00 = 7. Check: 1.75 is about 2, and 2 × 4 = 8 ✅"
    },
    {
      question: "Find 3 × 2.89.",
      options: ["8.67", "86.7", "6.67", "8.57"],
      correct: 0,
      explanation: "289 × 3 = 867. 2.89 has 2 decimal places, so 8.67. Check: 3 × 3 = 9, close to 8.67 ✅"
    },
    {
      question: "A square painting has sides of 30.5 centimeters. What is its perimeter? (P = 4 × s)",
      options: ["61 centimeters", "122 centimeters", "120.5 centimeters", "1,220 centimeters"],
      correct: 1,
      explanation: "4 × 30.5: 4 × 305 = 1,220, and 30.5 has 1 decimal place, so 122.0 = 122 centimeters."
    },
    {
      question: "Anthony bikes a 16.2-mile trail 4 times. How far does he travel?",
      options: ["64.8 miles", "648 miles", "48.8 miles", "6.48 miles"],
      correct: 0,
      explanation: "162 × 4 = 648. 16.2 has 1 decimal place, so 64.8 miles. Check: 16 × 4 = 64 ✅"
    },
    {
      question: "Doug buys 7 postcards for $0.25 each. What is the total cost?",
      options: ["$1.25", "$1.75", "$17.50", "$2.75"],
      correct: 1,
      explanation: "25 × 7 = 175. $0.25 has 2 decimal places, so $1.75."
    },
    {
      question: "Using snacks as place-value blocks, you build 0.32 five times. What is 5 × 0.32?",
      options: ["1.6", "0.16", "16", "1.06"],
      correct: 0,
      explanation: "5 × 3 tenths = 15 tenths and 5 × 2 hundredths = 10 hundredths = 1 tenth. 16 tenths = 1.6."
    },
    {
      question: "0.36 × 4 = 1.44. What is 0.36 × 0.4?",
      options: ["14.4", "1.44", "0.144", "0.0144"],
      correct: 2,
      explanation: "0.4 is one tenth of 4, so the product is one tenth of 1.44: 0.144."
    },
    {
      question: "Use a hundredths grid to find 0.7 × 0.9.",
      options: ["0.63", "6.3", "0.063", "0.16"],
      correct: 0,
      explanation: "Shade 7 columns and 9 rows. The double-shaded area has 63 squares, or 63 hundredths: 0.63."
    },
    {
      question: "Find 0.8 × 0.1.",
      options: ["0.8", "0.08", "0.008", "0.9"],
      correct: 1,
      explanation: "8 tenths × 1 tenth = 8 hundredths = 0.08."
    },
    {
      question: "Find 1.9 × 0.4.",
      options: ["7.6", "0.076", "0.76", "2.3"],
      correct: 2,
      explanation: "19 tenths × 4 tenths = 76 hundredths = 0.76. Check: 2 × 0.4 = 0.8, and 0.76 is close ✅"
    },
    {
      question: "On a hundredths grid, you shade 5 columns and 6 rows. What does the double-shaded area show?",
      options: ["5 × 6 = 30", "0.5 + 0.6 = 1.1", "0.5 × 0.6 = 3", "0.5 × 0.6 = 0.3"],
      correct: 3,
      explanation: "5 columns show 0.5 and 6 rows show 0.6. They overlap in 30 squares: 30 hundredths = 0.30 = 0.3."
    },
    {
      question: "A garden is 0.9 meter long and 0.6 meter wide. What is its area?",
      options: ["0.54 square meter", "5.4 square meters", "1.5 square meters", "0.054 square meter"],
      correct: 0,
      explanation: "Area = length × width = 0.9 × 0.6 = 54 hundredths = 0.54 square meter."
    },
    {
      question: "Both factors in a multiplication problem are less than 1. What must be true about the product?",
      options: ["It is greater than 1", "It is less than 1", "It equals 1", "It is greater than both factors"],
      correct: 1,
      explanation: "When both factors are less than 1, the product is also less than 1. Example: 0.7 × 0.9 = 0.63."
    },
    {
      question: "A truck travels 9.5 miles on 1 gallon of fuel. How far will it travel on 5.6 gallons?",
      options: ["532 miles", "5.32 miles", "60 miles", "53.2 miles"],
      correct: 3,
      explanation: "Partial products: 45 + 2.5 + 5.4 + 0.30 = 53.2 miles. The estimate 10 × 6 = 60 shows this is reasonable."
    },
    {
      question: "Round each factor to the nearest whole number to estimate 8.6 × 9.2.",
      options: ["81", "72", "90", "79.12"],
      correct: 0,
      explanation: "8.6 → 9 and 9.2 → 9. 9 × 9 = 81."
    },
    {
      question: "Find 3.9 × 7.1.",
      options: ["276.9", "27.69", "2.769", "21.69"],
      correct: 1,
      explanation: "Partial products: 3 × 7 = 21, 3 × 0.1 = 0.3, 0.9 × 7 = 6.3, 0.9 × 0.1 = 0.09. 21 + 0.3 + 6.3 + 0.09 = 27.69. Estimate: 4 × 7 = 28 ✅"
    },
    {
      question: "Which partial products add up to 1.3 × 2.3?",
      options: ["2 + 3 + 6 + 9", "1 + 2 + 0.3 + 0.3", "2 + 0.3 + 0.6 + 0.09", "2 + 0.6 + 0.9"],
      correct: 2,
      explanation: "1 × 2 = 2, 1 × 0.3 = 0.3, 0.3 × 2 = 0.6, 0.3 × 0.3 = 0.09. Together: 2.99."
    },
    {
      question: "A bag of grass seed weighs 5.8 pounds. How much do 2.5 bags weigh?",
      options: ["13.8 pounds", "8.3 pounds", "145 pounds", "14.5 pounds"],
      correct: 3,
      explanation: "5.8 × 2.5: 10 + 2.5 + 1.6 + 0.4 = 14.5 pounds. Estimate: 6 × 2.5 = 15 ✅"
    },
    {
      question: "One mile is about 1.6 kilometers. About how many kilometers are in 1.8 miles?",
      options: ["2.88", "28.8", "3.4", "0.288"],
      correct: 0,
      explanation: "1.6 × 1.8: 1 + 0.8 + 0.6 + 0.48 = 2.88. Estimate: 2 × 2 = 4, and 2.88 is reasonable because both factors were rounded up."
    },
    {
      question: "Marco hikes 2.5 miles each hour. At that speed, how far will he hike in 3.25 hours?",
      options: ["81.25 miles", "8.125 miles", "0.8125 mile", "5.75 miles"],
      correct: 1,
      explanation: "(25 × 325) × (0.1 × 0.01) = 8,125 × 0.001 = 8.125 miles."
    },
    {
      question: "Which expression is equivalent to 0.3 × 6.2?",
      options: ["(3 × 62) × (0.01 × 0.1)", "(3 × 62) × (10 × 10)", "(3 × 62) × (0.1 × 0.1)", "(3 × 62) × (0.01 × 0.01)"],
      correct: 2,
      explanation: "0.3 = 3 × 0.1 and 6.2 = 62 × 0.1, so 0.3 × 6.2 = (3 × 62) × (0.1 × 0.1) = 186 × 0.01 = 1.86."
    },
    {
      question: "What is 0.1 × 0.01?",
      options: ["0.01", "0.11", "0.001", "0.0001"],
      correct: 2,
      explanation: "One tenth times one hundredth equals one thousandth: 0.001."
    },
    {
      question: "Find 0.6 × 0.35.",
      options: ["0.21", "2.1", "0.021", "0.95"],
      correct: 0,
      explanation: "(6 × 35) × (0.1 × 0.01) = 210 × 0.001 = 0.210 = 0.21."
    },
    {
      question: "Find 0.07 × 1.2.",
      options: ["0.84", "0.084", "0.0084", "1.27"],
      correct: 1,
      explanation: "(7 × 12) × (0.01 × 0.1) = 84 × 0.001 = 0.084."
    },
    {
      question: "Helen uses 0.12 kilogram of nuts in each batch of granola. How many kilograms does she use for 2.5 batches?",
      options: ["3 kg", "0.03 kg", "2.62 kg", "0.3 kg"],
      correct: 3,
      explanation: "(12 × 25) × (0.01 × 0.1) = 300 × 0.001 = 0.300 = 0.3 kg."
    },
    {
      question: "Which rectangular room has the greatest area? Room A: 3.5 m by 4.4 m. Room B: 3.8 m by 3.8 m. Room C: 3.6 m by 4.1 m.",
      options: ["Room A", "Room B", "Room C", "They are all the same"],
      correct: 0,
      explanation: "Room A: 15.4 square meters. Room B: 14.44. Room C: 14.76. Room A is the largest."
    }
  ],

  skills: [
    {
      key: "decimal-times-power-of-10",
      label: "Multiply decimals by powers of 10",
      generator: "multiplyDecimalPowerOf10",
      args: {},
      remember: "Count the zeros (or read the exponent) and move the decimal point that many places to the RIGHT. Add zeros if you run out of digits.",
      workedExample: "0.057 × 10 = 0.57\n0.057 × 100 = 5.7\n0.057 × 1,000 = 57\n92.3 × 10^4 = 923,000"
    },
    {
      key: "estimate-decimal-product",
      label: "Estimate the product of a decimal and a whole number",
      generator: "estimateDecimalProduct",
      args: {},
      remember: "Round the whole number to its greatest place. Round the decimal to the nearest whole number (or nearest tenth if it is less than 1). Then multiply.",
      workedExample: "Estimate 23 × 1.75:\n23 → 20\n1.75 → 2\n20 × 2 = 40"
    },
    {
      key: "multiply-decimal-by-whole",
      label: "Multiply a decimal by a whole number",
      generator: "multiplyDecimalByWhole",
      args: {},
      remember: "Multiply as if there were no decimal point. Then give the answer the same number of decimal places as the decimal factor. Estimate to check.",
      workedExample: "Find 2.89 × 3:\n289 × 3 = 867\n2.89 has 2 decimal places → 8.67\nCheck: 3 × 3 = 9 ✅"
    },
    {
      key: "multiply-tenths-grid",
      label: "Use a hundredths grid to multiply a decimal by a decimal",
      generator: "multiplyTenthsModel",
      args: {},
      remember: "Shade one factor as columns and the other as rows. Count the double-shaded squares: that many hundredths is the product. If both factors are less than 1, the product is less than 1.",
      workedExample: "0.7 × 0.9:\n7 columns and 9 rows overlap in 63 squares\n63 hundredths = 0.63"
    },
    {
      key: "multiply-decimals-partial-products",
      label: "Multiply decimals using partial products",
      generator: "multiplyDecimalsPartial",
      args: {},
      remember: "Estimate first. Multiply each place by each place, then add the partial products. Compare with your estimate to check that the answer is reasonable.",
      workedExample: "9.5 × 5.6 (estimate 10 × 6 = 60):\n0.6 × 0.5 = 0.30\n0.6 × 9 = 5.4\n5 × 0.5 = 2.5\n5 × 9 = 45\nTotal = 53.2 ✅"
    },
    {
      key: "multiply-decimals-properties",
      label: "Use properties to multiply decimals",
      generator: "multiplyDecimalsProperties",
      args: {},
      remember: "Write each decimal as a whole number times 0.1 or 0.01. Multiply the whole numbers, then multiply by the place values. Tenth × tenth = hundredth; tenth × hundredth = thousandth.",
      workedExample: "2.5 × 3.25\n= (25 × 325) × (0.1 × 0.01)\n= 8,125 × 0.001\n= 8.125"
    }
  ]
};
