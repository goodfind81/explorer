/* ==========================================================
   Chapter 4 — Qualitative vs Quantitative
   ========================================================== */

export const chapter = {
  id: "chapter-04-qual-quant",
  name: "Qualitative vs Quantitative",
  shortName: "Qual vs Quant",

  studyGuideHtml: `
    <h2>🔢 Qualitative vs. Quantitative</h2>
    <p>There are two ways to describe what you observe. Both are important in science!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Qualitative — "Quality" (words)</span>
        <div class="sg-def">Describes something using words and qualities — what it <em>looks, feels, smells, or sounds like</em>. No numbers!</div>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Examples</strong>Rough, smooth, blue, small, soft, shiny, sweet smell, loud.</div>
          <div class="sg-nonex"><strong>❌ Not qualitative</strong>"25 grams" or "8 cm" — those are numbers.</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Quantitative — "Quantity" (numbers)</span>
        <div class="sg-def">Describes something using numbers or measurements. Often uses tools!</div>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Examples</strong>8 centimeters, 25 grams, 6 leaves, 10 milliliters, 30°C, 3 hours.</div>
          <div class="sg-nonex"><strong>❌ Not quantitative</strong>"Soft" or "shiny" — those are qualities.</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Trick to remember</span>
        <div class="sg-def">
          <strong>Qual</strong>itative = <strong>Qual</strong>ity = Words<br>
          <strong>Quant</strong>itative = <strong>Quant</strong>ity = Numbers
        </div>
      </div>
    </div>

    <div class="diagram-box">
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="180" height="160" fill="#E8F8F5" stroke="#2ECC71" stroke-width="3" rx="14"/>
        <text x="100" y="55" text-anchor="middle" font-family="Comic Sans MS" font-size="16" font-weight="bold" fill="#2ECC71">QUALITATIVE</text>
        <text x="100" y="95" text-anchor="middle" font-size="38">🎨</text>
        <text x="100" y="130" text-anchor="middle" font-size="13" fill="#333">Words &amp; qualities</text>
        <text x="100" y="155" text-anchor="middle" font-size="12" font-style="italic" fill="#666">"smooth, blue, soft"</text>

        <rect x="210" y="20" width="180" height="160" fill="#FFF9C4" stroke="#F1C40F" stroke-width="3" rx="14"/>
        <text x="300" y="55" text-anchor="middle" font-family="Comic Sans MS" font-size="16" font-weight="bold" fill="#B7950B">QUANTITATIVE</text>
        <text x="300" y="95" text-anchor="middle" font-size="38">📏</text>
        <text x="300" y="130" text-anchor="middle" font-size="13" fill="#333">Numbers &amp; measurements</text>
        <text x="300" y="155" text-anchor="middle" font-size="12" font-style="italic" fill="#666">"25 grams, 8 cm, 30°C"</text>
      </svg>
      <div class="diagram-caption">If it uses a number or a tool, it's quantitative.</div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do we need BOTH? Because "the rock is heavy" tells you one thing, and "the rock weighs 25 kg" tells you something much more specific!</div>
    </div>

    <h3>Examples in a Real Experiment</h3>
    <ul>
      <li><strong>Qualitative:</strong> "The plant looks healthy, its leaves are bright green, and the soil feels damp."</li>
      <li><strong>Quantitative:</strong> "The plant is 14 cm tall, has 6 leaves, and was given 50 mL of water."</li>
    </ul>
  `,

  miniCheck: [
    { question: "Which one is QUANTITATIVE?",
      options: ["The rock is rough.", "The rock weighs 25 grams.", "The rock is gray.", "The rock is shiny."],
      correct: 1,
      explanation: "Quantitative observations use numbers. '25 grams' is a measurement." },

    { question: "Which is a QUALITATIVE observation?",
      options: ["The pencil is 15 cm long.", "The pencil weighs 8 grams.", "The pencil is yellow and smooth.", "The pencil has 3 erasers."],
      correct: 2,
      explanation: "Qualitative observations describe qualities with words — color and texture here." },

    { question: "Which observation is qualitative?",
      options: ["The turtle is 20 cm long.", "The turtle weighs 2 kg.", "The turtle has four legs.", "The turtle has a hard, green shell."],
      correct: 3,
      explanation: "'Hard, green shell' describes qualities — texture and color, not numbers." },

    { question: "Which is QUANTITATIVE?",
      options: ["The flower is red.", "The flower smells sweet.", "The flower has 10 petals.", "The flower has soft leaves."],
      correct: 2,
      explanation: "'10 petals' uses a number. That's quantitative." },

    { question: "If your observation uses a ruler or a balance, it is probably:",
      options: ["Qualitative", "Quantitative", "An inference", "An opinion"],
      correct: 1,
      explanation: "Tools give you numbers (measurements), which means the observation is quantitative." },
  ],

  chapterQuiz: [
    { question: "Which is a QUALITATIVE observation?",
      options: ["The pencil is 15 cm long.", "The pencil weighs 8 grams.", "The pencil is yellow and smooth.", "The pencil has 3 erasers."],
      correct: 2,
      explanation: "Qualitative observations describe qualities with words — color and texture." },

    { question: "Which observation is QUANTITATIVE?",
      options: ["The rock is rough.", "The rock is gray.", "The rock is shiny.", "The rock weighs 25 grams."],
      correct: 3,
      explanation: "Quantitative observations use numbers or measurements." },

    { question: "Which observation is qualitative?",
      options: ["The turtle is 20 cm long.", "The turtle weighs 2 kg.", "The turtle has four legs.", "The turtle has a hard, green shell."],
      correct: 3,
      explanation: "'Hard, green shell' describes qualities — texture and color." },

    { question: "Which observation is quantitative?",
      options: ["The flower is red.", "The flower smells sweet.", "The flower has 10 petals.", "The flower has soft leaves."],
      correct: 2,
      explanation: "'10 petals' uses a number." },

    { question: "Which data is qualitative?",
      options: ["3 hours", "6 pets", "Blue pen", "35°C"],
      correct: 2,
      explanation: "'Blue pen' uses a word (color). The others are all numbers with units." },

    { question: "Which data is quantitative?",
      options: ["Soft shirt", "Shiny rock", "5 meters", "Rough stone"],
      correct: 2,
      explanation: "'5 meters' is a measurement." },

    { question: "If you can COUNT it, it's probably:",
      options: ["Qualitative", "Quantitative", "An inference", "An opinion"],
      correct: 1,
      explanation: "Counting gives a number, which makes the observation quantitative." },

    { question: "Which is NOT a qualitative observation?",
      options: ["The flower is pink.", "The cloth is soft.", "The rock is heavy.", "The box weighs 4 kg."],
      correct: 3,
      explanation: "'4 kg' is a measurement — that's quantitative." },

    { question: "The grass is 8 cm tall. This is:",
      options: ["Qualitative", "Quantitative", "An inference", "An opinion"],
      correct: 1,
      explanation: "It uses a number and a unit (cm) — quantitative." },

    { question: "Which is a qualitative observation of a fruit?",
      options: ["The apple is red and round.", "The apple weighs 150 grams.", "The apple is 8 cm wide.", "The apple has 3 seeds."],
      correct: 0,
      explanation: "'Red and round' describes qualities — color and shape." },

    { question: "Which is a quantitative observation of a book?",
      options: ["The book is heavy.", "The book has a red cover.", "The book is 300 pages long.", "The book feels smooth."],
      correct: 2,
      explanation: "'300 pages' is a count — a number. Quantitative." },

    { question: "Which one describes TEXTURE (qualitative)?",
      options: ["12 centimeters", "Rough and bumpy", "5 grams", "22°C"],
      correct: 1,
      explanation: "Texture is described with words — that's qualitative." },

    { question: "Which one describes TEMPERATURE (quantitative)?",
      options: ["Warm", "Hot", "22°C", "Cool"],
      correct: 2,
      explanation: "A temperature with a number and unit (22°C) is quantitative. 'Warm' and 'hot' are qualitative." },

    { question: "A scientist writes: 'The liquid smells like vinegar.' This is:",
      options: ["Quantitative", "Qualitative", "An inference", "An error"],
      correct: 1,
      explanation: "A smell description uses words — that's qualitative." },

    { question: "A scientist writes: 'The liquid has a volume of 50 mL.' This is:",
      options: ["Quantitative", "Qualitative", "An inference", "An error"],
      correct: 0,
      explanation: "It uses a number and unit (50 mL) — quantitative." },

    { question: "Which is a MIX of qualitative and quantitative?",
      options: [
        "The rock is gray.",
        "The rock weighs 20 grams.",
        "The rock is gray and weighs 20 grams.",
        "The rock is heavy."
      ],
      correct: 2,
      explanation: "'Gray' is qualitative (a word). '20 grams' is quantitative (a number)." },

    { question: "Which would make a better graph?",
      options: ["Qualitative data", "Quantitative data", "Neither", "Both are the same"],
      correct: 1,
      explanation: "Quantitative data (numbers) can be plotted on graphs. Qualitative data cannot be graphed in the same way." },

    { question: "If you want to describe how TALL something is, you would use:",
      options: ["A qualitative observation", "A quantitative observation with cm or m", "An opinion", "An inference"],
      correct: 1,
      explanation: "Height is a measurement — quantitative (cm or m)." },

    { question: "Which best describes why scientists use quantitative data?",
      options: [
        "Because it sounds more professional",
        "Because numbers are more precise and can be compared",
        "Because it's faster",
        "Because it's easier to write"
      ],
      correct: 1,
      explanation: "Numbers are more precise — 25 grams is exact, while 'heavy' is vague." },

    { question: "Which is a QUALITATIVE description of a dog?",
      options: ["The dog weighs 30 pounds.", "The dog is 40 cm tall.", "The dog has soft fur and a wet nose.", "The dog is 5 years old."],
      correct: 2,
      explanation: "Soft fur and a wet nose describe qualities — texture and feel — with words." },
  ],
};