/* ==========================================================
   Math Chapter 15 — Topic 5 Get Ready: Division Review
   From the Topic 5 "Review What You Know" homework (p. 178,
   11/5): division vocabulary (dividend, divisor, quotient,
   remainder), dividing with basic facts and 1-digit divisors,
   multiplying whole numbers, word problems, and estimating to
   check whether a goal will be met.
   Lesson 5-1 (11/9): Use Patterns and Mental Math to Divide, from
   the 5-1 Additional Practice homework and the Topic 5 Family
   Engagement page (divide by multiples of 10 with a basic fact and
   place-value patterns; check by multiplying).
   Lesson 5-2 (11/16 download): Estimate Quotients with 2-Digit
   Divisors, from the 5-2 Additional Practice homework and the 5-3
   Daily Review (compatible numbers + a basic fact + place-value
   patterns).
   Lesson 5-3 (11/16 download): Use Models to Divide with 2-Digit
   Divisors, from the 5-3 Additional Practice homework (area model:
   divide the tens, then the ones; multiply to check) and the 5-5
   Daily Review (which expressions equal 43; hours to earn $432).
   Long division (Homework 11-16 ALL): 3-digit ÷ 1-digit with no
   remainders, using divide, multiply, subtract, bring down.
   Growing chapter for enVision Topic 5. Later Topic 5 lessons
   extend this chapter.
   Adds generators divideWholeNumbers, divisionVocab,
   divideMultiplesOf10, estimateQuotientCompatible, divideByTwoDigit
   and longDivision1Digit; reuses multiplyWithZeros and
   estimateProduct from Chapter 9.
   ========================================================== */

export const chapter = {
  id: "chapter-15-topic-5-get-ready",
  name: "Topic 5: Divide Whole Numbers",
  shortName: "÷ Whole Numbers",

  /* ==========================================================
     STUDY GUIDE
     ========================================================== */
  studyGuideHtml: `
    <h2>➗ Topic 5: Divide Whole Numbers</h2>
    <p>Topic 5 is all about <strong>dividing whole numbers</strong>, including dividing by <strong>2-digit numbers</strong>. It starts with a <strong>Get Ready</strong> review ("Review What You Know": division vocabulary, dividing, multiplying, and estimating), then <strong>Lesson 5-1</strong>: using patterns and mental math to divide by multiples of 10, <strong>Lesson 5-2</strong>: estimating quotients with 2-digit divisors, <strong>Lesson 5-3</strong>: using an area model to divide by a 2-digit number, and <strong>long division</strong> practice.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Division vocabulary 📖</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          In <strong>80 ÷ 10 = 8</strong>:<br>
          • <strong>80</strong> is the <strong>dividend</strong>: the number being divided.<br>
          • <strong>10</strong> is the <strong>divisor</strong>: the number used to divide another number.<br>
          • <strong>8</strong> is the <strong>quotient</strong>: the result of dividing two numbers.<br>
          • The <strong>remainder</strong> is the amount left over when a number can't be divided evenly. 17 ÷ 5 = 3 <strong>R2</strong> (5 × 3 = 15, and 2 is left over).<br><br>
          Memory trick: <strong>dividend ÷ divisor = quotient</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Divide with basic facts 🔢</span>
        <div class="sg-def">
          When the dividend ends in a zero, use a basic fact and think in <strong>tens</strong>.<br>
          • 630 ÷ 9 → 63 ÷ 9 = 7, so 63 tens ÷ 9 = 7 tens → <strong>70</strong><br>
          • 480 ÷ 6 → 48 ÷ 6 = 8, so 48 tens ÷ 6 = 8 tens → <strong>80</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Divide by a 1-digit number ✏️</span>
        <div class="sg-def">
          Ask: <strong>what times the divisor makes the dividend?</strong> Then check by multiplying.<br>
          • 755 ÷ 5 = <strong>151</strong> (check: 151 × 5 = 755)<br>
          • 657 ÷ 9 = <strong>73</strong> (check: 73 × 9 = 657)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Multiply whole numbers ✖️</span>
        <div class="sg-def">
          Multiply by the ones, then by the tens (or hundreds), and add the partial products.<br>
          • 57 × 13 = 57 × 3 + 57 × 10 = 171 + 570 = <strong>741</strong><br>
          • 71 × 109 = 71 × 9 + 71 × 100 = 639 + 7,100 = <strong>7,739</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Word problems: divide or multiply? 🤔</span>
        <div class="sg-def">
          • <strong>Equal groups, find how many in each</strong> → divide. 132 volunteers in 12 equal groups: 132 ÷ 12 = <strong>11</strong> in each group.<br>
          • <strong>Many groups of the same size, find the total</strong> → multiply. 112 communities with 14 players each: 112 × 14 = <strong>1,568</strong> players.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Estimate: will they reach the goal? 🎯</span>
        <div class="sg-def" style="background:#FFF9C4;">
          A county wants <strong>12,000</strong> bus stop shelters in <strong>48 months</strong>. It builds <strong>215</strong> each month. Will it reach the goal?<br><br>
          <strong>Way 1, round and multiply:</strong> 215 → 200 and 48 → 50. 200 × 50 = <strong>10,000</strong>, which is less than 12,000.<br>
          <strong>Way 2, find what's needed:</strong> 12,000 ÷ 48 is about 12,000 ÷ 50 = <strong>240</strong> a month. 215 is less than that.<br><br>
          Either way: <strong>No</strong>, the county won't reach its goal. (Exact check: 215 × 48 = 10,320.)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Lesson 5-1: Divide by multiples of 10 🔟</span>
        <div class="sg-def" style="background:#E8F5E9;">
          A school spends <strong>$12,000</strong> on <strong>20</strong> computers that cost the same. How much is each one?<br><br>
          <strong>Find a basic fact, then use patterns.</strong> The basic fact for 12,000 ÷ 20 is <strong>12 ÷ 2 = 6</strong>.<br>
          • 120 ÷ 20 = 6<br>
          • 1,200 ÷ 20 = 60<br>
          • 12,000 ÷ 20 = <strong>600</strong><br>
          Multiply to check: 600 × 20 = 12,000. Each computer costs <strong>$600</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Think in tens 🧠</span>
        <div class="sg-def">
          Another way to see it: turn both numbers into <strong>tens</strong>.<br>
          • 720 ÷ 90 = 72 tens ÷ 9 tens = <strong>8</strong><br>
          • 4,800 ÷ 60 = 480 tens ÷ 6 tens = <strong>80</strong><br>
          • 18,000 ÷ 90 = 1,800 tens ÷ 9 tens = <strong>200</strong> (check: 90 × 200 = 18,000)<br><br>
          <strong>Watch the zeros!</strong> Sometimes the basic fact already has a zero in it:<br>
          • 2,000 ÷ 40 → basic fact <strong>20 ÷ 4 = 5</strong>, so 2,000 ÷ 40 = <strong>50</strong><br>
          • 40,000 ÷ 50 → basic fact <strong>40 ÷ 5 = 8</strong>, so 40,000 ÷ 50 = <strong>800</strong><br>
          The 0 in 20 or 40 is used up by the basic fact. Only count the zeros that are left.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Estimate with numbers that divide easily 🎯</span>
        <div class="sg-def" style="background:#FFF9C4;">
          A club has <strong>$3,472</strong>. Each computer costs <strong>$680</strong>. About how many can it buy?<br>
          3,472 is close to <strong>3,500</strong> and 680 is close to <strong>700</strong>. 35 ÷ 7 = 5, so 3,500 ÷ 700 = <strong>5</strong>.<br>
          The club can buy <strong>about 5</strong> computers.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Lesson 5-2: Estimate with 2-digit divisors 🔍</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          A trail is <strong>1,976</strong> meters long. Shondra walks <strong>43</strong> meters each minute. About how many minutes will the walk take?<br><br>
          <strong>1. Find compatible numbers</strong> (numbers close to the real ones that divide easily): 1,976 → <strong>2,000</strong> and 43 → <strong>40</strong>.<br>
          <strong>2. Think of a basic fact:</strong> 20 ÷ 4 = 5.<br>
          <strong>3. Use place-value patterns:</strong> 2,000 ÷ 40 = <strong>50</strong>.<br>
          So 1,976 ÷ 43 is <strong>about 50</strong>. It takes about 50 minutes.<br><br>
          More examples:<br>
          • 1,769 ÷ 23 → 1,800 ÷ 20 = <strong>90</strong><br>
          • 891 ÷ 32 → 900 ÷ 30 = <strong>30</strong><br>
          • 5,624 ÷ 72 → 5,600 ÷ 70 = <strong>80</strong><br>
          • 593 acres in 32 equal parts → 600 ÷ 30 = about <strong>20 acres</strong> each<br>
          Tip: round the <strong>divisor</strong> to the nearest ten first, then pick a dividend that works with a basic fact.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Lesson 5-3: Divide with an area model 🟦</span>
        <div class="sg-def" style="background:#E8F5E9;">
          Hal has <strong>195</strong> cans of soup to put equally on <strong>13</strong> shelves. How many cans go on each shelf?<br>
          Ask: are there enough cans for <strong>10</strong> on each shelf? For <strong>20</strong>?<br><br>
          <strong>Step 1, divide the tens:</strong> 13 × 10 = 130. 195 − 130 = <strong>65</strong> left.<br>
          <strong>Step 2, divide the ones:</strong> 13 × 5 = 65. Nothing is left.<br>
          The parts of the rectangle are <strong>10 + 5</strong>, so 195 ÷ 13 = <strong>15</strong>.<br>
          <strong>Multiply to check:</strong> 13 × 15 = 13 × (10 + 5) = 130 + 65 = 195. ✅<br><br>
          More examples:<br>
          • 168 ÷ 12: 12 × 10 = 120, 168 − 120 = 48, 12 × 4 = 48 → <strong>14</strong><br>
          • 504 ÷ 14: 14 × 30 = 420, 504 − 420 = 84, 14 × 6 = 84 → <strong>36</strong><br>
          • 744 ÷ 24: 24 × 30 = 720, 744 − 720 = 24, 24 × 1 = 24 → <strong>31</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Long division ✍️</span>
        <div class="sg-def">
          For a 3-digit number ÷ a 1-digit number, repeat <strong>divide → multiply → subtract → bring down</strong>.<br>
          <strong>456 ÷ 8:</strong><br>
          • 4 is less than 8, so start with <strong>45</strong>. 45 ÷ 8 = <strong>5</strong>. 5 × 8 = 40. 45 − 40 = 5.<br>
          • Bring down the 6 → <strong>56</strong>. 56 ÷ 8 = <strong>7</strong>. 7 × 8 = 56. 56 − 56 = 0.<br>
          • So 456 ÷ 8 = <strong>57</strong>. Check: 57 × 8 = 456. ✅<br>
          <strong>576 ÷ 6:</strong> 57 ÷ 6 = 9 (54, 3 left) → bring down 6 → 36 ÷ 6 = 6 → <strong>96</strong>.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Mixing up the <strong>dividend</strong> and the <strong>divisor</strong>. The dividend is the big number being split up (it comes <strong>first</strong>). The divisor is the number you divide <strong>by</strong>. In 630 ÷ 9, 630 is the dividend and 9 is the divisor.<br><br>
      <strong>Lesson 5-1 mistake:</strong> Counting a zero twice. In 2,000 ÷ 40, the basic fact is 20 ÷ 4 = 5, so the answer is <strong>50</strong>, not 500. Always multiply to check: 50 × 40 = 2,000. ✅<br><br>
      <strong>Lesson 5-2 mistake:</strong> Picking a compatible dividend that doesn't fit the divisor. For 891 ÷ 32, the divisor rounds to 30, so pick a dividend that works with 3: <strong>900</strong> (9 ÷ 3 = 3), giving 900 ÷ 30 = <strong>30</strong>.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Every division fact hides a multiplication fact! If 657 ÷ 9 = 73, then 73 × 9 = 657. That's why multiplying is the best way to check your division.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "In the equation 80 ÷ 10 = 8, what is 80 called?",
      options: ["The dividend", "The divisor", "The quotient", "The remainder"],
      correct: 0,
      explanation: "80 is the number being divided, so it is the dividend."
    },
    {
      question: "The number used to divide another number is the…",
      options: ["Divisor", "Dividend", "Quotient", "Product"],
      correct: 0,
      explanation: "The divisor is the number you divide by."
    },
    {
      question: "Find 630 ÷ 9.",
      options: ["70", "7", "700", "79"],
      correct: 0,
      explanation: "63 ÷ 9 = 7, so 63 tens ÷ 9 = 7 tens = 70. Check: 70 × 9 = 630."
    },
    {
      question: "Find 57 × 13.",
      options: ["741", "171", "570", "731"],
      correct: 0,
      explanation: "57 × 3 = 171 and 57 × 10 = 570. 171 + 570 = 741."
    },
    {
      question: "132 volunteers form 12 equal groups. How many volunteers are in each group?",
      options: ["11", "12", "120", "144"],
      correct: 0,
      explanation: "Equal groups, find how many in each → divide. 132 ÷ 12 = 11, because 12 × 11 = 132."
    }
  ],

  chapterQuiz: [
    // --- Vocabulary ---
    {
      question: "The result of dividing two numbers is the…",
      options: ["Quotient", "Dividend", "Divisor", "Factor"],
      correct: 0,
      explanation: "The quotient is the answer to a division problem."
    },
    {
      question: "In 480 ÷ 6 = 80, which number is the divisor?",
      options: ["6", "480", "80", "0"],
      correct: 0,
      explanation: "The divisor is the number used to divide: 6."
    },
    {
      question: "In 755 ÷ 5 = 151, which number is the quotient?",
      options: ["151", "755", "5", "150"],
      correct: 0,
      explanation: "The quotient is the result: 151."
    },
    {
      question: "In 560 ÷ 8 = 70, which number is the dividend?",
      options: ["560", "8", "70", "56"],
      correct: 0,
      explanation: "The dividend is the number being divided: 560."
    },
    {
      question: "17 ÷ 5 = 3 R2. What is the 2 called?",
      options: ["The remainder", "The divisor", "The dividend", "The quotient"],
      correct: 0,
      explanation: "5 × 3 = 15, and 17 − 15 = 2 is left over. The amount left over is the remainder."
    },
    {
      question: "Which shows the parts of a division equation in order?",
      options: ["dividend ÷ divisor = quotient", "divisor ÷ dividend = quotient", "quotient ÷ divisor = dividend", "dividend ÷ quotient = remainder"],
      correct: 0,
      explanation: "The number being divided comes first: dividend ÷ divisor = quotient."
    },

    // --- Divide with basic facts ---
    {
      question: "Find 480 ÷ 6.",
      options: ["80", "8", "800", "86"],
      correct: 0,
      explanation: "48 ÷ 6 = 8, so 48 tens ÷ 6 = 8 tens = 80."
    },
    {
      question: "Find 420 ÷ 7.",
      options: ["60", "6", "600", "70"],
      correct: 0,
      explanation: "42 ÷ 7 = 6, so 42 tens ÷ 7 = 6 tens = 60."
    },
    {
      question: "Find 360 ÷ 4.",
      options: ["90", "9", "900", "80"],
      correct: 0,
      explanation: "36 ÷ 4 = 9, so 36 tens ÷ 4 = 9 tens = 90."
    },
    {
      question: "Which basic fact helps you find 630 ÷ 9?",
      options: ["63 ÷ 9 = 7", "6 ÷ 3 = 2", "9 × 9 = 81", "30 ÷ 9 = 3"],
      correct: 0,
      explanation: "630 is 63 tens. 63 ÷ 9 = 7, so 630 ÷ 9 = 7 tens = 70."
    },

    // --- Divide by a 1-digit number ---
    {
      question: "Find 755 ÷ 5.",
      options: ["151", "150", "105", "1,510"],
      correct: 0,
      explanation: "151 × 5 = 755, so 755 ÷ 5 = 151."
    },
    {
      question: "Find 657 ÷ 9.",
      options: ["73", "63", "83", "703"],
      correct: 0,
      explanation: "73 × 9 = 657, so 657 ÷ 9 = 73."
    },
    {
      question: "Find 848 ÷ 4.",
      options: ["212", "202", "220", "2,012"],
      correct: 0,
      explanation: "212 × 4 = 848, so 848 ÷ 4 = 212."
    },
    {
      question: "Find 581 ÷ 7.",
      options: ["83", "73", "93", "803"],
      correct: 0,
      explanation: "83 × 7 = 581, so 581 ÷ 7 = 83."
    },
    {
      question: "Maya says 672 ÷ 6 = 112. Which multiplication checks her answer?",
      options: ["112 × 6 = 672", "672 × 6 = 4,032", "112 + 6 = 118", "672 − 112 = 560"],
      correct: 0,
      explanation: "Multiply the quotient by the divisor. 112 × 6 = 672, so she is right."
    },

    // --- Multiply whole numbers ---
    {
      question: "Find 71 × 109.",
      options: ["7,739", "7,100", "7,039", "639"],
      correct: 0,
      explanation: "71 × 9 = 639 and 71 × 100 = 7,100. 639 + 7,100 = 7,739."
    },
    {
      question: "Find 46 × 12.",
      options: ["552", "460", "542", "92"],
      correct: 0,
      explanation: "46 × 2 = 92 and 46 × 10 = 460. 92 + 460 = 552."
    },
    {
      question: "Find 38 × 21.",
      options: ["798", "760", "788", "838"],
      correct: 0,
      explanation: "38 × 1 = 38 and 38 × 20 = 760. 38 + 760 = 798."
    },
    {
      question: "Find 62 × 104.",
      options: ["6,448", "6,200", "6,408", "6,248"],
      correct: 0,
      explanation: "62 × 4 = 248 and 62 × 100 = 6,200. 248 + 6,200 = 6,448."
    },

    // --- Word problems ---
    {
      question: "Each community has 14 players. 112 communities are competing. How many players are competing?",
      options: ["1,568", "1,676", "126", "98"],
      correct: 0,
      explanation: "Many groups of the same size, find the total → multiply. 112 × 14 = 1,568."
    },
    {
      question: "156 students are split into 12 equal teams. How many students are on each team?",
      options: ["13", "12", "14", "144"],
      correct: 0,
      explanation: "Equal teams, find how many in each → divide. 156 ÷ 12 = 13, because 12 × 13 = 156."
    },
    {
      question: "A school orders 124 boxes of pencils with 15 pencils in each box. How many pencils is that?",
      options: ["1,860", "139", "1,240", "1,760"],
      correct: 0,
      explanation: "Groups of the same size, find the total → multiply. 124 × 15 = 1,860."
    },
    {
      question: "Which problem should you solve by DIVIDING?",
      options: [
        "840 chairs are set up in 7 equal rows. How many chairs are in each row?",
        "There are 7 rows with 120 chairs in each row. How many chairs in all?",
        "A row has 120 chairs and 7 more are added. How many chairs now?",
        "There were 840 chairs and 7 broke. How many are left?"
      ],
      correct: 0,
      explanation: "Splitting a total into equal groups to find how many in each is division: 840 ÷ 7 = 120."
    },

    // --- Estimate ---
    {
      question: "A county wants 12,000 bus stop shelters in 48 months. It builds 215 each month. Which estimate makes sense?",
      options: [
        "200 × 50 = 10,000, so No, it won't reach the goal",
        "200 × 50 = 10,000, so Yes, it will reach the goal",
        "300 × 50 = 15,000, so Yes, it will reach the goal",
        "200 × 40 = 8,000, so Yes, it will reach the goal"
      ],
      correct: 0,
      explanation: "Round 215 → 200 and 48 → 50. 200 × 50 = 10,000, which is less than 12,000. The county won't reach its goal."
    },
    {
      question: "To reach 12,000 shelters in 48 months, ABOUT how many shelters must be built each month?",
      options: ["About 240", "About 24", "About 2,400", "About 60"],
      correct: 0,
      explanation: "12,000 ÷ 48 is about 12,000 ÷ 50 = 240. Building 215 a month is not enough."
    },
    {
      question: "A town wants 6,000 trees planted in 24 months. It plants 260 trees each month. Will it reach its goal?",
      options: [
        "Yes: it needs about 6,000 ÷ 25 = 240 a month, and 260 is more",
        "No: it needs about 6,000 ÷ 25 = 240 a month, and 260 is less",
        "No: 6,000 ÷ 24 is 25, and 260 is too many",
        "Yes: 260 + 24 = 284, which is less than 6,000"
      ],
      correct: 0,
      explanation: "6,000 ÷ 24 is about 6,000 ÷ 25 = 240 a month. 260 is more than 240, so yes. (Exact check: 260 × 24 = 6,240.)"
    },

    // --- Lesson 5-1: Use patterns and mental math to divide ---
    {
      question: "Find 720 ÷ 90.",
      options: ["8", "80", "9", "800"],
      correct: 0,
      explanation: "720 ÷ 90 = 72 tens ÷ 9 tens = 8. Check: 8 × 90 = 720."
    },
    {
      question: "Find 4,800 ÷ 60.",
      options: ["80", "8", "800", "60"],
      correct: 0,
      explanation: "4,800 ÷ 60 = 480 tens ÷ 6 tens = 80. Check: 80 × 60 = 4,800."
    },
    {
      question: "1,200 ÷ 30 = ___ tens ÷ ___ tens. Which fills in the blanks?",
      options: ["120 tens ÷ 3 tens", "12 tens ÷ 3 tens", "1,200 tens ÷ 30 tens", "120 tens ÷ 30 tens"],
      correct: 0,
      explanation: "1,200 is 120 tens and 30 is 3 tens. 120 ÷ 3 = 40, so 1,200 ÷ 30 = 40."
    },
    {
      question: "Find 1,200 ÷ 30.",
      options: ["40", "4", "400", "30"],
      correct: 0,
      explanation: "Basic fact: 12 ÷ 3 = 4. 120 tens ÷ 3 tens = 40. Check: 40 × 30 = 1,200."
    },
    {
      question: "Find 25,000 ÷ 50.",
      options: ["500", "50", "5,000", "5"],
      correct: 0,
      explanation: "Basic fact: 25 ÷ 5 = 5. 2,500 tens ÷ 5 tens = 500. Check: 500 × 50 = 25,000."
    },
    {
      question: "Find 9,000 ÷ 30.",
      options: ["300", "30", "3,000", "3"],
      correct: 0,
      explanation: "Basic fact: 9 ÷ 3 = 3. 900 tens ÷ 3 tens = 300. Check: 300 × 30 = 9,000."
    },
    {
      question: "Find 2,000 ÷ 40.",
      options: ["50", "500", "5", "5,000"],
      correct: 0,
      explanation: "Basic fact: 20 ÷ 4 = 5 (the 0 in 20 is part of the fact). 200 tens ÷ 4 tens = 50. Check: 50 × 40 = 2,000."
    },
    {
      question: "Find 42,000 ÷ 60.",
      options: ["700", "70", "7,000", "7"],
      correct: 0,
      explanation: "Basic fact: 42 ÷ 6 = 7. 4,200 tens ÷ 6 tens = 700. Check: 700 × 60 = 42,000."
    },
    {
      question: "Find 24,000 ÷ 80.",
      options: ["300", "30", "3,000", "400"],
      correct: 0,
      explanation: "Basic fact: 24 ÷ 8 = 3. 2,400 tens ÷ 8 tens = 300. Check: 300 × 80 = 24,000."
    },
    {
      question: "Which is 2,000 divided by 50?",
      options: ["40", "4", "400", "4,000"],
      correct: 0,
      explanation: "Basic fact: 20 ÷ 5 = 4. 200 tens ÷ 5 tens = 40. Check: 40 × 50 = 2,000."
    },
    {
      question: "Which basic fact helps you find 12,000 ÷ 20?",
      options: ["12 ÷ 2 = 6", "12 ÷ 3 = 4", "20 ÷ 2 = 10", "2 ÷ 2 = 1"],
      correct: 0,
      explanation: "Use 12 ÷ 2 = 6, then patterns: 120 ÷ 20 = 6, 1,200 ÷ 20 = 60, 12,000 ÷ 20 = 600."
    },
    {
      question: "Which expression has a quotient of 400?",
      options: ["8,000 ÷ 20", "80,000 ÷ 20", "8,000 ÷ 2", "800 ÷ 20"],
      correct: 0,
      explanation: "8,000 ÷ 20 = 800 tens ÷ 2 tens = 400. The others are 4,000, 4,000 and 40."
    },
    {
      question: "Which multiplication checks that 3,600 ÷ 90 = 40?",
      options: ["40 × 90 = 3,600", "40 × 9 = 360", "3,600 × 90 = 324,000", "36 × 9 = 324"],
      correct: 0,
      explanation: "Multiply the quotient by the divisor: 40 × 90 = 3,600. So 3,600 ÷ 90 = 40 is correct."
    },
    {
      question: "A school spends $12,000 on 20 new computers. Each costs the same amount. How much does each computer cost?",
      options: ["$600", "$60", "$6,000", "$240"],
      correct: 0,
      explanation: "Basic fact 12 ÷ 2 = 6. 120 ÷ 20 = 6, 1,200 ÷ 20 = 60, 12,000 ÷ 20 = 600. Check: 600 × 20 = 12,000."
    },
    {
      question: "A carton has 50 packages with 25,000 staples in all. Each package has the same number. How many staples are in each package?",
      options: ["500", "50", "5,000", "250"],
      correct: 0,
      explanation: "Basic fact: 25 ÷ 5 = 5. 25,000 ÷ 50 = 500. Check: 500 × 50 = 25,000."
    },
    {
      question: "A jet carried 18,000 passengers on 90 trips. It was full every time. How many passengers were on each trip?",
      options: ["200", "20", "2,000", "180"],
      correct: 0,
      explanation: "18,000 ÷ 90 = 1,800 tens ÷ 9 tens = 200. Check: 90 × 200 = 18,000."
    },
    {
      question: "A county has about 15,000 people living in 50 communities of about the same size. Marty estimates about 300 people live in each community. Is he right?",
      options: [
        "Yes, because 15,000 ÷ 50 = 300",
        "No, because 15,000 ÷ 50 = 30",
        "No, because 15,000 ÷ 50 = 3,000",
        "Yes, because 15,000 − 50 = 300"
      ],
      correct: 0,
      explanation: "Basic fact: 15 ÷ 5 = 3. 1,500 tens ÷ 5 tens = 300. Check: 300 × 50 = 15,000. His estimate is reasonable."
    },
    {
      question: "A club has $3,472 to buy computers. Each computer costs $680. About how many computers can the club buy?",
      options: ["About 5", "About 50", "About 500", "About 2"],
      correct: 0,
      explanation: "Use numbers that divide easily: 3,472 is close to 3,500 and 680 is close to 700. 3,500 ÷ 700 = 5."
    },
    {
      question: "A railroad container holds 42,000 pounds. It already has 90 ovens that weigh 200 pounds each. How many 600-pound freezers can also fit?",
      options: ["40", "70", "30", "400"],
      correct: 0,
      explanation: "Ovens: 90 × 200 = 18,000 pounds. Space left: 42,000 − 18,000 = 24,000 pounds. Freezers: 24,000 ÷ 600 = 40 (basic fact 24 ÷ 6 = 4)."
    },
    {
      question: "Jon says 2,000 ÷ 40 = 500. What went wrong?",
      options: [
        "He counted the 0 in the basic fact 20 ÷ 4 twice; the answer is 50",
        "Nothing, 500 is correct",
        "He should have added instead; the answer is 2,040",
        "He used the wrong fact; the answer is 5"
      ],
      correct: 0,
      explanation: "The basic fact is 20 ÷ 4 = 5. 200 tens ÷ 4 tens = 50. Check: 50 × 40 = 2,000, but 500 × 40 = 20,000."
    },

    // --- Lesson 5-2: Estimate quotients with 2-digit divisors ---
    {
      question: "A trail is 1,976 meters long. Shondra walks 43 meters each minute. Which compatible numbers help estimate how many minutes the walk takes?",
      options: ["2,000 ÷ 40", "1,976 ÷ 40", "2,000 ÷ 43", "1,900 ÷ 50"],
      correct: 0,
      explanation: "1,976 is close to 2,000 and 43 is close to 40. Basic fact 20 ÷ 4 = 5, so 2,000 ÷ 40 = 50 minutes."
    },
    {
      question: "Estimate 1,769 ÷ 23 using 1,800 ÷ 20.",
      options: ["90", "9", "900", "80"],
      correct: 0,
      explanation: "Basic fact: 18 ÷ 2 = 9. 1,800 ÷ 20 = 180 tens ÷ 2 tens = 90."
    },
    {
      question: "Estimate 516 ÷ 48 using compatible numbers.",
      options: ["About 10", "About 100", "About 1", "About 50"],
      correct: 0,
      explanation: "516 is close to 500 and 48 is close to 50. 500 ÷ 50 = 10."
    },
    {
      question: "Which compatible numbers are best for estimating 891 ÷ 32?",
      options: ["900 ÷ 30", "800 ÷ 30", "900 ÷ 40", "890 ÷ 35"],
      correct: 0,
      explanation: "32 rounds to 30, and 900 works with the basic fact 9 ÷ 3 = 3. 900 ÷ 30 = 30."
    },
    {
      question: "Estimate 5,624 ÷ 72.",
      options: ["About 80", "About 8", "About 800", "About 70"],
      correct: 0,
      explanation: "5,624 is close to 5,600 and 72 is close to 70. Basic fact 56 ÷ 7 = 8, so 5,600 ÷ 70 = 80."
    },
    {
      question: "Estimate 3,582 ÷ 43.",
      options: ["About 90", "About 9", "About 900", "About 60"],
      correct: 0,
      explanation: "3,582 is close to 3,600 and 43 is close to 40. Basic fact 36 ÷ 4 = 9, so 3,600 ÷ 40 = 90."
    },
    {
      question: "Mr. Crane divides his 593-acre farm into 32 equal parts. About how many acres are in each part?",
      options: ["About 20 acres", "About 10 acres", "About 100 acres", "About 200 acres"],
      correct: 0,
      explanation: "593 is close to 600 and 32 is close to 30. 600 ÷ 30 = 20 acres."
    },
    {
      question: "A scientist counted 3,921 eggs in 49 sea turtle nests, with about the same number in each. About how many eggs were in each nest?",
      options: ["About 80 eggs", "About 800 eggs", "About 100 eggs", "About 10 eggs"],
      correct: 0,
      explanation: "3,921 is close to 4,000 and 49 is close to 50. 4,000 ÷ 50 = 80 eggs."
    },
    {
      question: "A company activated 14,270 phones in 50 minutes. Why can Meg use 15,000 ÷ 50 to estimate how many phones were activated each minute?",
      options: [
        "14,270 is close to 15,000, and 15,000 divides easily by 50 (15 ÷ 5 = 3)",
        "15,000 is the exact number of phones",
        "You always round up to the next ten thousand",
        "50 is close to 15,000"
      ],
      correct: 0,
      explanation: "15,000 is a compatible number: it's close to 14,270 and uses the basic fact 15 ÷ 5 = 3. 15,000 ÷ 50 = 300 phones a minute."
    },
    {
      question: "A choir has 7 weeks (about 50 days) to learn a song with 3,016 lines. About how many lines should it learn each day?",
      options: ["About 60 lines", "About 6 lines", "About 600 lines", "About 430 lines"],
      correct: 0,
      explanation: "3,016 is close to 3,000. 3,000 ÷ 50 = 60 lines each day."
    },
    {
      question: "The band spent $1,480 on food for 73 students. Which is the best estimate of the cost per student?",
      options: ["$20", "$2", "$200", "$70"],
      correct: 0,
      explanation: "$1,480 is close to 1,400 and 73 is close to 70. 14 ÷ 7 = 2, so 1,400 ÷ 70 = 20."
    },
    {
      question: "A gray whale swam 152 kilometers at 7 to 8 kilometers each hour. About how many hours did it swim?",
      options: ["About 20 hours", "About 2 hours", "About 200 hours", "About 145 hours"],
      correct: 0,
      explanation: "Two ways with compatible numbers: 140 ÷ 7 = 20 or 160 ÷ 8 = 20. Either way, about 20 hours."
    },

    // --- Lesson 5-3: Use models to divide with 2-digit divisors ---
    {
      question: "Hal puts 195 cans equally on 13 shelves. Using an area model, 13 × 10 = 130. How many cans are left to share after that?",
      options: ["65", "130", "75", "55"],
      correct: 0,
      explanation: "195 − 130 = 65. Then 13 × 5 = 65, so each shelf gets 10 + 5 = 15 cans."
    },
    {
      question: "Find 195 ÷ 13.",
      options: ["15", "14", "16", "150"],
      correct: 0,
      explanation: "13 × 10 = 130, 195 − 130 = 65, 13 × 5 = 65. 10 + 5 = 15. Check: 13 × 15 = 195."
    },
    {
      question: "Find 168 ÷ 12.",
      options: ["14", "12", "16", "140"],
      correct: 0,
      explanation: "12 × 10 = 120, 168 − 120 = 48, 12 × 4 = 48. 10 + 4 = 14."
    },
    {
      question: "Find 208 ÷ 16.",
      options: ["13", "12", "14", "130"],
      correct: 0,
      explanation: "16 × 10 = 160, 208 − 160 = 48, 16 × 3 = 48. 10 + 3 = 13."
    },
    {
      question: "Find 385 ÷ 11.",
      options: ["35", "34", "36", "350"],
      correct: 0,
      explanation: "11 × 30 = 330, 385 − 330 = 55, 11 × 5 = 55. 30 + 5 = 35."
    },
    {
      question: "Find 675 ÷ 27.",
      options: ["25", "24", "26", "250"],
      correct: 0,
      explanation: "27 × 20 = 540, 675 − 540 = 135, 27 × 5 = 135. 20 + 5 = 25."
    },
    {
      question: "Find 558 ÷ 18.",
      options: ["31", "30", "32", "301"],
      correct: 0,
      explanation: "18 × 30 = 540, 558 − 540 = 18, 18 × 1 = 18. 30 + 1 = 31."
    },
    {
      question: "Which is 391 divided by 17?",
      options: ["23", "24", "230", "240"],
      correct: 0,
      explanation: "17 × 20 = 340, 391 − 340 = 51, 17 × 3 = 51. 20 + 3 = 23."
    },
    {
      question: "Which is 540 divided by 30?",
      options: ["18", "17", "180", "170"],
      correct: 0,
      explanation: "30 × 10 = 300, 540 − 300 = 240, 30 × 8 = 240. 10 + 8 = 18. (Or 54 tens ÷ 3 tens = 18.)"
    },
    {
      question: "A rectangular poster has an area of 504 square centimeters. Its width is 14 centimeters. How long is it?",
      options: ["36 centimeters", "34 centimeters", "30 centimeters", "490 centimeters"],
      correct: 0,
      explanation: "Length = area ÷ width. 14 × 30 = 420, 504 − 420 = 84, 14 × 6 = 84. 30 + 6 = 36 centimeters."
    },
    {
      question: "Astronauts spent 390 minutes installing 15 tiles, the same time for each. How many minutes did each tile take?",
      options: ["26 minutes", "25 minutes", "24 minutes", "36 minutes"],
      correct: 0,
      explanation: "15 × 20 = 300, 390 − 300 = 90, 15 × 6 = 90. 20 + 6 = 26 minutes."
    },
    {
      question: "A 208-yard road is divided into 16 equal parts. A 4-yard strip is painted in each part. How long is the unpainted strip of each part?",
      options: ["9 yards", "13 yards", "4 yards", "17 yards"],
      correct: 0,
      explanation: "Step 1: 208 ÷ 16 = 13 yards per part. Step 2: 13 − 4 = 9 yards unpainted."
    },
    {
      question: "Which expression is equal to 43?",
      options: ["645 ÷ 15", "8,600 ÷ 20", "4,730 ÷ 11", "430 ÷ 100"],
      correct: 0,
      explanation: "15 × 40 = 600, 645 − 600 = 45, 15 × 3 = 45 → 43. The others: 8,600 ÷ 20 = 430, 4,730 ÷ 11 = 430, 430 ÷ 100 = 4.3."
    },
    {
      question: "Maya earns $12 per hour. How many hours must she work to earn $432?",
      options: ["36 hours", "34 hours", "26 hours", "360 hours"],
      correct: 0,
      explanation: "432 ÷ 12: 12 × 30 = 360, 432 − 360 = 72, 12 × 6 = 72. 30 + 6 = 36 hours."
    },

    // --- Long division ---
    {
      question: "Use long division: 456 ÷ 8.",
      options: ["57", "56", "58", "507"],
      correct: 0,
      explanation: "45 ÷ 8 = 5 (40, 5 left). Bring down 6 → 56 ÷ 8 = 7. So 57. Check: 57 × 8 = 456."
    },
    {
      question: "Use long division: 294 ÷ 3.",
      options: ["98", "97", "88", "908"],
      correct: 0,
      explanation: "29 ÷ 3 = 9 (27, 2 left). Bring down 4 → 24 ÷ 3 = 8. So 98. Check: 98 × 3 = 294."
    },
    {
      question: "Use long division: 774 ÷ 9.",
      options: ["86", "84", "96", "806"],
      correct: 0,
      explanation: "77 ÷ 9 = 8 (72, 5 left). Bring down 4 → 54 ÷ 9 = 6. So 86. Check: 86 × 9 = 774."
    },
    {
      question: "In 138 ÷ 2, why do you start by dividing 13 instead of 1?",
      options: [
        "1 is less than 2, so use the first two digits",
        "You always start with the last digit",
        "13 is the remainder",
        "2 doesn't divide any number"
      ],
      correct: 0,
      explanation: "2 can't go into 1, so start with 13. 13 ÷ 2 = 6 (12, 1 left). Bring down 8 → 18 ÷ 2 = 9. 138 ÷ 2 = 69."
    },
    {
      question: "What are the four steps that repeat in long division?",
      options: [
        "Divide, multiply, subtract, bring down",
        "Add, subtract, multiply, divide",
        "Round, estimate, add, check",
        "Multiply, add, bring down, round"
      ],
      correct: 0,
      explanation: "Divide, multiply, subtract, bring down, and repeat until there are no more digits."
    }
  ],

  /* ==========================================================
     DAILY HOMEWORK
     ========================================================== */
  skills: [
    {
      key: "division-vocabulary",
      label: "Division vocabulary",
      generator: "divisionVocab",
      args: {},
      remember: "dividend ÷ divisor = quotient. The dividend is the number being divided, the divisor is the number you divide by, and the quotient is the result.",
      workedExample: "80 ÷ 10 = 8\ndividend = 80\ndivisor = 10\nquotient = 8"
    },
    {
      key: "divide-whole-numbers",
      label: "Divide whole numbers",
      generator: "divideWholeNumbers",
      args: {},
      remember: "Use a basic fact when the dividend ends in 0 (630 ÷ 9 → 63 ÷ 9 = 7 → 70). Otherwise ask what times the divisor makes the dividend. Always check by multiplying.",
      workedExample: "755 ÷ 5\n5 × 151 = 755\n→ 151"
    },
    {
      key: "t5-multiply-whole-numbers",
      label: "Multiply whole numbers",
      generator: "multiplyWithZeros",
      args: {},
      remember: "Multiply by the ones digit, then by the tens digit (write a 0 in the ones place), then add the partial products.",
      workedExample: "57 × 13\n57 × 3 = 171\n57 × 10 = 570\n171 + 570 = 741"
    },
    {
      key: "t5-estimate-product",
      label: "Estimate products to check a goal",
      generator: "estimateProduct",
      args: {},
      remember: "Round each factor, then multiply. Compare the estimate to the goal to decide if it will be reached.",
      workedExample: "215 shelters × 48 months\n200 × 50 = 10,000\n10,000 < 12,000 → No"
    },
    {
      key: "divide-multiples-of-10",
      label: "Divide by multiples of 10 (Lesson 5-1)",
      generator: "divideMultiplesOf10",
      args: {},
      remember: "Find a basic fact, then use place-value patterns (or think in tens). Watch for a zero that's already part of the basic fact. Check by multiplying the quotient by the divisor.",
      workedExample: "12,000 ÷ 20\nBasic fact: 12 ÷ 2 = 6\n120 ÷ 20 = 6\n1,200 ÷ 20 = 60\n12,000 ÷ 20 = 600\nCheck: 600 × 20 = 12,000"
    },
    {
      key: "estimate-quotients-2-digit",
      label: "Estimate quotients with 2-digit divisors (Lesson 5-2)",
      generator: "estimateQuotientCompatible",
      args: {},
      remember: "Find compatible numbers close to the real ones. Round the divisor to a ten, pick a dividend that fits a basic fact, then use place-value patterns.",
      workedExample: "1,976 ÷ 43\n→ 2,000 ÷ 40\nBasic fact: 20 ÷ 4 = 5\n2,000 ÷ 40 = 50\nAbout 50"
    },
    {
      key: "divide-2-digit-area-model",
      label: "Divide by a 2-digit number with an area model (Lesson 5-3)",
      generator: "divideByTwoDigit",
      args: {},
      remember: "Divide the tens first (divisor × 10, 20, 30…), subtract, then divide the ones. Add the parts and multiply to check.",
      workedExample: "195 ÷ 13\n13 × 10 = 130, 195 − 130 = 65\n13 × 5 = 65\n10 + 5 = 15\nCheck: 13 × 15 = 195"
    },
    {
      key: "long-division-1-digit",
      label: "Long division: 3-digit ÷ 1-digit",
      generator: "longDivision1Digit",
      args: {},
      remember: "Divide, multiply, subtract, bring down. If the first digit is smaller than the divisor, start with the first two digits. Check by multiplying.",
      workedExample: "456 ÷ 8\n45 ÷ 8 = 5, 5 × 8 = 40, 45 − 40 = 5\nBring down 6 → 56\n56 ÷ 8 = 7\n→ 57"
    }
  ]
};
