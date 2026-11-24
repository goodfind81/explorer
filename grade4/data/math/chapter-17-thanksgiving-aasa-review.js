/* ==========================================================
   Math Chapter 17 — Thanksgiving AASA Extra Credit Review
   A mixed-review practice chapter built from the Thanksgiving
   Break AASA extra credit packet (questions 13–24): dividing
   by a 1-digit number, equivalent fractions, ordering and
   decomposing fractions, fraction of a set, multiplying a
   fraction by a whole number, decimals ↔ fractions, and
   multiplicative comparison.
   Quiz-only chapter — no homework generator (same as Ch 10).
   ========================================================== */

export const chapter = {
  id: "chapter-17-thanksgiving-aasa-review",
  name: "Thanksgiving AASA Extra Credit Review",
  shortName: "Thanksgiving Review",

  studyGuideHtml: `
    <h2>🦃 Thanksgiving AASA Extra Credit Review</h2>
    <p>This chapter is a <strong>mixed review</strong> from the Thanksgiving Break extra credit packet. Most of it is about <strong>fractions</strong>, with some division and multiplication too.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Dividing with a basic fact</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          Use a basic fact you know, then think about the tens.<br><br>
          <strong>420 ÷ 7</strong> → 42 ÷ 7 = 6, so 42 tens ÷ 7 = 6 tens = <strong>60</strong><br>
          Check: 60 × 7 = 420 ✔
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Equivalent fractions</span>
        <div class="sg-def">
          Equivalent fractions name the <strong>same amount</strong>. Multiply the top (numerator) and the bottom (denominator) by the <strong>same number</strong>.<br><br>
          3/4 → (3 × 2)/(4 × 2) = <strong>6/8</strong><br>
          9/10 → (9 × 10)/(10 × 10) = <strong>90/100</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Ordering fractions</span>
        <div class="sg-def">
          Rename the fractions so they have the <strong>same denominator</strong>, then compare the numerators.<br><br>
          1/2, 1/4, 3/4 → 2/4, 1/4, 3/4<br>
          Least to greatest: <strong>1/4, 1/2, 3/4</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Decomposing a fraction</span>
        <div class="sg-def">
          To <strong>decompose</strong> a fraction, break it into smaller fractions with the <strong>same denominator</strong> whose numerators add up to the original numerator.<br><br>
          7/10 = 3/10 + 4/10 (because 3 + 4 = 7)<br>
          7/10 = 1/10 + 6/10 also works.<br>
          The denominator stays 10. You never add the denominators.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">A fraction of a number</span>
        <div class="sg-def">
          <strong>Divide by the denominator</strong> to find one part, then <strong>multiply by the numerator</strong>.<br><br>
          1/4 of 12 → 12 ÷ 4 = <strong>3</strong><br>
          2/5 of 20 → 20 ÷ 5 = 4, then 4 × 2 = <strong>8</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Multiplying a fraction by a whole number</span>
        <div class="sg-def">
          Multiply the whole number by the numerator. Keep the denominator.<br><br>
          A track is 2/3 mile. 6 laps → 6 × 2/3 = 12/3 = <strong>4 miles</strong><br>
          (12 ÷ 3 = 4)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Decimals as fractions</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Read the decimal's place value, then simplify.<br><br>
          0.45 = forty-five <strong>hundredths</strong> = 45/100<br>
          Divide top and bottom by 5 → <strong>9/20</strong> (simplest form)<br><br>
          To compare a fraction with decimals, change it to a decimal: 2/5 = 4/10 = <strong>0.4</strong>. So 0.5 is greater than 2/5.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Multiplicative comparison</span>
        <div class="sg-def">
          A multiplication equation can be read as a comparison.<br><br>
          <strong>24 = 4 × 6</strong> means "24 is <strong>4 times as many as</strong> 6" (or 6 times as many as 4).<br><br>
          Equal groups: 5 boxes × 8 crayons = <strong>40 crayons</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common Mistake:</strong> Adding or multiplying the denominators. 3/10 + 4/10 is <strong>7/10</strong>, not 7/20. And 6 × 2/3 is <strong>12/3</strong>, not 12/18. The denominator tells the size of the pieces, and that doesn't change.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> 1/2, 2/4, 6/12 and 50/100 all look different, but they are the exact same amount. Fractions can wear lots of different costumes!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is 420 ÷ 7?",
      options: ["6", "60", "70", "600"],
      correct: 1,
      explanation: "42 ÷ 7 = 6, so 420 ÷ 7 = 60. Check: 60 × 7 = 420."
    },
    {
      question: "Which fraction is equivalent to 3/4?",
      options: ["3/8", "4/3", "6/8", "6/4"],
      correct: 2,
      explanation: "Multiply the top and bottom by 2: (3 × 2)/(4 × 2) = 6/8."
    },
    {
      question: "What is 2/5 of 20?",
      options: ["8", "4", "10", "50"],
      correct: 0,
      explanation: "20 ÷ 5 = 4 (one fifth). Two fifths is 4 × 2 = 8."
    },
    {
      question: "How is 0.45 written as a fraction in simplest form?",
      options: ["45/10", "4/5", "45/1000", "9/20"],
      correct: 3,
      explanation: "0.45 = 45/100. Divide the top and bottom by 5 to get 9/20."
    },
    {
      question: "Which statement matches the equation 24 = 4 × 6?",
      options: [
        "24 is 4 more than 6.",
        "24 is 4 times as many as 6.",
        "4 is 6 times as many as 24.",
        "6 is 24 more than 4."
      ],
      correct: 1,
      explanation: "Multiplication compares by 'times as many.' 24 is 4 times as many as 6."
    }
  ],

  chapterQuiz: [
    // ---- Packet questions 13–24 (numbers mirrored) ----
    {
      question: "What is 420 ÷ 7?",
      options: ["60", "6", "600", "70"],
      correct: 0,
      explanation: "42 ÷ 7 = 6, so 42 tens ÷ 7 = 6 tens = 60. Check: 60 × 7 = 420."
    },
    {
      question: "Which fraction is equivalent to 3/4?",
      options: ["6/8", "3/8", "6/4", "4/3"],
      correct: 0,
      explanation: "Multiply the numerator and denominator by 2: 3/4 = 6/8."
    },
    {
      question: "Put these fractions in order from least to greatest: 1/2, 1/4, 3/4",
      options: ["1/4, 1/2, 3/4", "1/2, 1/4, 3/4", "3/4, 1/2, 1/4", "1/4, 3/4, 1/2"],
      correct: 0,
      explanation: "Rename with fourths: 1/2 = 2/4. So 1/4 < 2/4 < 3/4, which is 1/4, 1/2, 3/4."
    },
    {
      question: "Which of these correctly decomposes 7/10?",
      options: ["3/10 + 4/10", "1/10 + 5/10", "2/10 + 4/10", "7/5 + 7/5"],
      correct: 0,
      explanation: "3/10 + 4/10 = 7/10 because 3 + 4 = 7. The others add to 6/10 or 14/5."
    },
    {
      question: "What is 1/4 of 12?",
      options: ["3", "48", "1/48", "12/48"],
      correct: 0,
      explanation: "Divide 12 into 4 equal parts: 12 ÷ 4 = 3."
    },
    {
      question: "What is 2/5 of 20?",
      options: ["8", "50", "2/100", "40/100"],
      correct: 0,
      explanation: "20 ÷ 5 = 4 is one fifth. Two fifths is 4 × 2 = 8."
    },
    {
      question: "A running track is 2/3 of a mile long. A runner runs 6 laps. How far did the runner go?",
      options: ["4 miles", "12/18 miles", "6 2/3 miles", "3 miles"],
      correct: 0,
      explanation: "6 × 2/3 = 12/3 = 4 miles. Keep the denominator; don't multiply it."
    },
    {
      question: "Which fraction is equivalent to 9/10?",
      options: ["90/100", "9/100", "10/9", "19/100"],
      correct: 0,
      explanation: "Multiply the top and bottom by 10: 9/10 = 90/100."
    },
    {
      question: "How do you write 0.45 as a fraction in simplest form?",
      options: ["9/20", "45/10", "4/5", "45/1000"],
      correct: 0,
      explanation: "0.45 = 45/100. Divide the top and bottom by 5: 9/20."
    },
    {
      question: "Which of these is greater than 2/5?",
      options: ["0.5", "0.3", "0.4", "0.35"],
      correct: 0,
      explanation: "2/5 = 4/10 = 0.4. Only 0.5 is greater than 0.4. (0.4 is equal, not greater.)"
    },
    {
      question: "Which statement represents the equation 24 = 4 × 6?",
      options: [
        "24 is 4 times as many as 6.",
        "24 is 4 more than 6.",
        "4 is 6 times as many as 24.",
        "6 is 24 more than 4."
      ],
      correct: 0,
      explanation: "A multiplication equation is a 'times as many' comparison: 24 is 4 times as many as 6."
    },
    {
      question: "There are 5 boxes of crayons with 8 crayons in each box. How many crayons are there in all?",
      options: ["40 crayons", "13 crayons", "3 crayons", "8 crayons"],
      correct: 0,
      explanation: "5 equal groups of 8: 5 × 8 = 40 crayons."
    },

    // ---- Extra practice on the same skills ----
    {
      question: "What is 360 ÷ 9?",
      options: ["4", "40", "400", "36"],
      correct: 1,
      explanation: "36 ÷ 9 = 4, so 36 tens ÷ 9 = 4 tens = 40. Check: 40 × 9 = 360."
    },
    {
      question: "What is 2,400 ÷ 6?",
      options: ["40", "4,000", "400", "4"],
      correct: 2,
      explanation: "24 ÷ 6 = 4, so 24 hundreds ÷ 6 = 4 hundreds = 400. Check: 400 × 6 = 2,400."
    },
    {
      question: "Which fraction is equivalent to 2/3?",
      options: ["3/2", "4/6", "2/6", "4/3"],
      correct: 1,
      explanation: "Multiply the top and bottom by 2: 2/3 = 4/6."
    },
    {
      question: "Which fraction is equivalent to 3/10?",
      options: ["3/100", "13/100", "10/3", "30/100"],
      correct: 3,
      explanation: "Multiply the top and bottom by 10: 3/10 = 30/100."
    },
    {
      question: "Put these fractions in order from least to greatest: 5/8, 1/8, 3/8",
      options: ["5/8, 3/8, 1/8", "1/8, 5/8, 3/8", "1/8, 3/8, 5/8", "3/8, 1/8, 5/8"],
      correct: 2,
      explanation: "The denominators match, so compare numerators: 1 < 3 < 5. Order: 1/8, 3/8, 5/8."
    },
    {
      question: "Put these fractions in order from greatest to least: 1/3, 5/6, 1/2",
      options: ["5/6, 1/2, 1/3", "1/3, 1/2, 5/6", "1/2, 5/6, 1/3", "5/6, 1/3, 1/2"],
      correct: 0,
      explanation: "Rename with sixths: 1/3 = 2/6, 1/2 = 3/6, 5/6. Greatest to least: 5/6, 1/2, 1/3."
    },
    {
      question: "Which of these correctly decomposes 5/8?",
      options: ["2/8 + 2/8", "2/4 + 3/4", "1/8 + 4/8", "5/4 + 5/4"],
      correct: 2,
      explanation: "1/8 + 4/8 = 5/8 because 1 + 4 = 5 and the denominator stays 8."
    },
    {
      question: "What is 1/3 of 18?",
      options: ["6", "3", "54", "9"],
      correct: 0,
      explanation: "Divide 18 into 3 equal parts: 18 ÷ 3 = 6."
    },
    {
      question: "What is 3/4 of 16?",
      options: ["4", "12", "48", "64"],
      correct: 1,
      explanation: "16 ÷ 4 = 4 is one fourth. Three fourths is 4 × 3 = 12."
    },
    {
      question: "A bike path is 3/4 of a mile long. Maya rides it 8 times. How far does she ride?",
      options: ["24/32 miles", "8 3/4 miles", "6 miles", "3 miles"],
      correct: 2,
      explanation: "8 × 3/4 = 24/4 = 6 miles."
    },
    {
      question: "How do you write 0.25 as a fraction in simplest form?",
      options: ["1/4", "25/10", "2/5", "25/1000"],
      correct: 0,
      explanation: "0.25 = 25/100. Divide the top and bottom by 25: 1/4."
    },
    {
      question: "Which of these is less than 3/5?",
      options: ["0.7", "0.6", "0.65", "0.5"],
      correct: 3,
      explanation: "3/5 = 6/10 = 0.6. Only 0.5 is less than 0.6. (0.6 is equal, not less.)"
    },
    {
      question: "Which statement represents the equation 35 = 5 × 7?",
      options: [
        "35 is 5 more than 7.",
        "7 is 5 times as many as 35.",
        "35 is 5 times as many as 7.",
        "5 is 35 more than 7."
      ],
      correct: 2,
      explanation: "35 = 5 × 7 means 35 is 5 times as many as 7."
    },
    {
      question: "A bakery packs 6 muffins in each box. It fills 9 boxes. How many muffins is that?",
      options: ["15", "54", "3", "45"],
      correct: 1,
      explanation: "9 equal groups of 6: 9 × 6 = 54 muffins."
    }
  ]
};
