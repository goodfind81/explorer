/* ==========================================================
   Math Chapter 10 — AASA Extra Credit Review
   A mixed-review practice chapter covering multiple-choice
   questions from the Fall Break extra credit packet.
   Quiz-only chapter — no homework generator.
   ========================================================== */

export const chapter = {
  id: "chapter-10-aasa-extra-credit",
  name: "AASA Extra Credit Review",
  shortName: "AASA Review",

  studyGuideHtml: `
    <h2>📝 AASA Extra Credit Review</h2>
    <p>This chapter is a <strong>mixed review</strong> — questions from across 3rd and 4th grade math. Use it to practice before a test.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Picture Graphs — read the KEY first</span>
        <div class="sg-def">
          A picture graph uses symbols (like ⭐) to stand for a certain number.<br><br>
          <strong>The key tells you what each symbol means.</strong><br><br>
          Example: If the key says ⭐ = 2 days, then 3 stars = 3 × 2 = 6 days.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Multiplying by 10, 100, 1,000</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          When you multiply a whole number by 10, just add a zero.<br><br>
          <strong>6 × 40</strong> → 6 × 4 = 24, then × 10 = <strong>240</strong><br>
          <strong>7 × 1,000</strong> = <strong>7,000</strong> (add three zeros)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Fractions — same number of slices ≠ same size</span>
        <div class="sg-def">
          If a small pizza is cut into 4 slices and a large pizza is cut into 4 slices, each slice is <strong>NOT</strong> the same size.<br><br>
          The large pizza slice is bigger because the whole pizza is bigger. Fractions are always a part of a <em>specific</em> whole.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Multi-step word problems</span>
        <div class="sg-def">
          Read carefully — sometimes you need to do <strong>two steps</strong>.<br><br>
          Example: "12 rows × 10 plants per row. Then harvest 30. How many left?"<br>
          <strong>Step 1:</strong> 12 × 10 = 120<br>
          <strong>Step 2:</strong> 120 − 30 = 90
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Angle types</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>Acute</strong> — less than 90° (small, sharp)<br>
          <strong>Right</strong> — exactly 90° (like a square corner)<br>
          <strong>Obtuse</strong> — more than 90° but less than 180° (wide)<br>
          <strong>Straight</strong> — exactly 180° (a straight line)<br><br>
          Example: 135° is <strong>obtuse</strong> (wider than a right angle, but not straight).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Triangle types by sides</span>
        <div class="sg-def">
          <strong>Equilateral</strong> — all 3 sides the same length<br>
          <strong>Isosceles</strong> — exactly 2 sides the same length<br>
          <strong>Scalene</strong> — all 3 sides different lengths<br><br>
          Example: Sides of 7 cm, 7 cm, 10 cm → <strong>isosceles</strong> (two sides match).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Elapsed time</span>
        <div class="sg-def">
          To find a time "later," add the hours and minutes.<br><br>
          Example: School starts at <strong>8:15 AM</strong>. Recess is <strong>2 hours 10 minutes</strong> later.<br>
          • Add 2 hours → 10:15 AM<br>
          • Add 10 minutes → <strong>10:25 AM</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Degrees in a circle</span>
        <div class="sg-def">
          A full circle measures <strong>360 degrees</strong>.<br><br>
          If a circle is divided into <strong>360 equal parts</strong>, each part is <strong>1 degree</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Place value — value of a digit changes with ×10</span>
        <div class="sg-def">
          When you multiply a number by 10, each digit moves one place to the left. Its value becomes 10 times bigger.<br><br>
          <strong>46 × 10 = 460</strong><br>
          In 46, the digit 4 is in the <strong>tens</strong> place → value 40.<br>
          In 460, the digit 4 is in the <strong>hundreds</strong> place → value <strong>400</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Word form to standard form</span>
        <div class="sg-def">
          Break the words into groups of thousands, hundreds, tens, and ones.<br><br>
          Example: "twenty-three thousand, six hundred nine"<br>
          • 23 thousand → 23,000<br>
          • 6 hundred → 600<br>
          • 9 ones → 9<br>
          • Total: <strong>23,609</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Subtraction with regrouping</span>
        <div class="sg-def">
          When the bottom digit is bigger than the top digit, <strong>regroup</strong> (borrow) from the next place value.<br><br>
          Example: <strong>921 − 567</strong><br>
          • Ones: 1 − 7 → borrow → 11 − 7 = 4<br>
          • Tens: 1 (after borrow) − 6 → borrow → 11 − 6 = 5<br>
          • Hundreds: 8 (after borrow) − 5 = 3<br>
          • Answer: <strong>354</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Test-Taking Tip:</strong> Read every question twice. Underline what it's asking. Watch for words like "then" or "left" — they mean two steps.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> The best test-takers aren't always the fastest — they're the ones who read carefully, estimate first, and double-check their work.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 6 × 40?",
      options: ["24", "100", "240", "2,400"],
      correct: 2,
      explanation: "6 × 4 = 24, then × 10 = 240."
    },
    {
      question: "An angle measures 135°. What type of angle is it?",
      options: ["Acute", "Right", "Obtuse", "Straight"],
      correct: 2,
      explanation: "An obtuse angle is more than 90° but less than 180°. 135° is obtuse."
    },
    {
      question: "A triangle has sides of 7 cm, 7 cm, and 10 cm. What kind of triangle is it?",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
      correct: 1,
      explanation: "Two sides are the same length (7 cm and 7 cm), so it's isosceles."
    },
    {
      question: "School starts at 8:15 AM. Recess is 2 hours and 10 minutes later. What time is recess?",
      options: ["10:15 AM", "10:25 AM", "9:25 AM", "11:25 AM"],
      correct: 1,
      explanation: "8:15 + 2 hours = 10:15. Then + 10 minutes = 10:25 AM."
    },
    {
      question: "What is 7 × 1,000?",
      options: ["70", "700", "7,000", "70,000"],
      correct: 2,
      explanation: "Multiplying by 1,000 adds three zeros. 7 × 1,000 = 7,000."
    }
  ],

  chapterQuiz: [
    {
      question: "A class recorded sunny days: Week 1 = 4, Week 2 = 6, Week 3 = 2. If the key is ⭐ = 2 days, which row correctly shows Week 2?",
      options: [
        "Week 2: ⭐ ⭐ ⭐",
        "Week 2: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
        "Week 2: ⭐ ⭐",
        "Week 2: ⭐"
      ],
      correct: 0,
      explanation: "The key says each star = 2 days. Week 2 had 6 sunny days. 6 ÷ 2 = 3 stars."
    },
    {
      question: "What is 6 × 40?",
      options: ["240", "100", "24", "2,400"],
      correct: 0,
      explanation: "6 × 4 = 24, then × 10 = 240."
    },
    {
      question: "A small pizza is cut into 4 slices, and a large pizza is cut into 4 slices. Is a slice from the small pizza the same size as a slice from the large pizza?",
      options: [
        "No — the large pizza slice is bigger because the whole pizza is bigger",
        "Yes — they both have 4 slices",
        "Only if both are cheese pizzas",
        "It depends on the number of pepperonis"
      ],
      correct: 0,
      explanation: "Fractions are a part of a specific whole. The large pizza is a bigger whole, so each 1/4 slice is bigger."
    },
    {
      question: "A farmer has 12 rows of corn with 10 plants in each row. He harvests 30 plants. How many plants are left?",
      options: ["120", "90", "150", "80"],
      correct: 1,
      explanation: "Step 1: 12 × 10 = 120. Step 2: 120 − 30 = 90 plants left."
    },
    {
      question: "An angle measures 135°. What type of angle is it?",
      options: ["Acute", "Right", "Obtuse", "Straight"],
      correct: 2,
      explanation: "An obtuse angle is more than 90° and less than 180°. 135° is obtuse."
    },
    {
      question: "A triangle has sides of 7 cm, 7 cm, and 10 cm. How would you classify it based on side lengths?",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
      correct: 1,
      explanation: "Two sides are the same length (7 and 7), so it's isosceles."
    },
    {
      question: "School starts at 8:15 AM. If recess is 2 hours and 10 minutes after school starts, what time is recess?",
      options: ["10:25 AM", "10:15 AM", "9:25 AM", "11:25 AM"],
      correct: 0,
      explanation: "8:15 + 2 hours = 10:15. Then + 10 minutes = 10:25 AM."
    },
    {
      question: "A circle is divided into 360 equal parts. What is the measure of the angle that represents one of these parts?",
      options: ["1 degree", "10 degrees", "360 degrees", "180 degrees"],
      correct: 0,
      explanation: "A full circle is 360°. Divided into 360 equal parts, each part is 1°."
    },
    {
      question: "Consider the number 46. If you multiply it by 10, what is the new value of the digit 4?",
      options: ["400", "40", "4", "4,000"],
      correct: 0,
      explanation: "46 × 10 = 460. In 460, the 4 is in the hundreds place, so its value is 400."
    },
    {
      question: "What is 'twenty-three thousand, six hundred nine' written in standard form?",
      options: ["23,609", "23,069", "2,369", "23,690"],
      correct: 0,
      explanation: "23 thousand (23,000) + 6 hundred (600) + 9 ones (9) = 23,609."
    },
    {
      question: "What is 921 − 567?",
      options: ["354", "364", "454", "353"],
      correct: 0,
      explanation: "921 − 567 = 354. (Regroup as needed across ones, tens, and hundreds.)"
    },
    {
      question: "What is 7 × 1,000?",
      options: ["7,000", "700", "70", "1,007"],
      correct: 0,
      explanation: "Multiplying by 1,000 adds three zeros. 7 × 1,000 = 7,000."
    }
  ]
};