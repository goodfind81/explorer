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
    // --- Core definitions ---
    {
      question: "What is a QUALITATIVE observation?",
      options: [
        "One that uses numbers and measurements",
        "One that describes qualities using words (like color, texture, smell)",
        "One that is always wrong",
        "One that uses a tool"
      ],
      correct: 1,
      explanation: "Qualitative observations describe qualities — how something looks, feels, smells, or sounds — using words, not numbers."
    },
    {
      question: "What is a QUANTITATIVE observation?",
      options: [
        "One that describes qualities with words",
        "One that uses numbers and measurements",
        "One that is always more accurate",
        "One that uses only sight"
      ],
      correct: 1,
      explanation: "Quantitative observations use numbers — counts or measurements with units."
    },

    // --- Classifying observations ---
    {
      question: "Which is a QUALITATIVE observation?",
      options: [
        "The pencil is 15 cm long.",
        "The pencil weighs 8 grams.",
        "The pencil is yellow and smooth.",
        "The pencil has 3 erasers."
      ],
      correct: 2,
      explanation: "'Yellow and smooth' describes qualities (color and texture) with words — no numbers."
    },
    {
      question: "Which observation is QUANTITATIVE?",
      options: [
        "The rock is rough.",
        "The rock is gray.",
        "The rock is shiny.",
        "The rock weighs 25 grams."
      ],
      correct: 3,
      explanation: "'25 grams' uses a number with a unit — that's quantitative."
    },
    {
      question: "Which is a QUANTITATIVE observation?",
      options: [
        "The flower is red.",
        "The flower smells sweet.",
        "The flower has 10 petals.",
        "The flower has soft leaves."
      ],
      correct: 2,
      explanation: "'10 petals' uses a count — that's quantitative."
    },
    {
      question: "Which is a QUALITATIVE observation?",
      options: [
        "The turtle is 20 cm long.",
        "The turtle weighs 2 kg.",
        "The turtle has four legs.",
        "The turtle has a hard, green shell."
      ],
      correct: 3,
      explanation: "'Hard, green shell' describes qualities — texture and color — using words."
    },
    {
      question: "Which data is QUALITATIVE?",
      options: ["3 hours", "6 pets", "Blue pen", "35°C"],
      correct: 2,
      explanation: "'Blue pen' uses a word (color). The others are all numbers with units."
    },
    {
      question: "Which data is QUANTITATIVE?",
      options: ["Soft shirt", "Shiny rock", "5 meters", "Rough stone"],
      correct: 2,
      explanation: "'5 meters' is a measurement with a number and unit."
    },

    // --- Reasoning about the categories ---
    {
      question: "If you can COUNT it, it's probably:",
      options: [
        "Qualitative",
        "Quantitative",
        "An inference",
        "An opinion"
      ],
      correct: 1,
      explanation: "Counting gives a number, which makes the observation quantitative."
    },
    {
      question: "If your observation uses a ruler or a balance, it's probably:",
      options: [
        "Qualitative",
        "Quantitative",
        "An inference",
        "An opinion"
      ],
      correct: 1,
      explanation: "Tools give you numbers (measurements), which means the observation is quantitative."
    },
    {
      question: "What's a helpful trick to remember which is which?",
      options: [
        "Qualitative ends in -e",
        "Qualitative = Quality (words); Quantitative = Quantity (numbers)",
        "Quantitative has more letters",
        "They're the same thing"
      ],
      correct: 1,
      explanation: "Qualitative describes quality with words. Quantitative describes quantity with numbers. The words even start the same way."
    },

    // --- Mixed observations ---
    {
      question: "A scientist writes: 'The liquid smells like vinegar.' This is:",
      options: ["Quantitative", "Qualitative", "An inference", "An error"],
      correct: 1,
      explanation: "A smell description uses words — that's qualitative."
    },
    {
      question: "A scientist writes: 'The liquid has a volume of 50 mL.' This is:",
      options: ["Quantitative", "Qualitative", "An inference", "An error"],
      correct: 0,
      explanation: "It uses a number and unit (50 mL) — quantitative."
    },
    {
      question: "Which is a MIX of qualitative and quantitative?",
      options: [
        "The rock is gray.",
        "The rock weighs 20 grams.",
        "The rock is gray and weighs 20 grams.",
        "The rock is heavy."
      ],
      correct: 2,
      explanation: "'Gray' is qualitative (a word). '20 grams' is quantitative (a number with a unit)."
    },
    {
      question: "Which choice gives a QUALITATIVE description?",
      options: [
        "The shell is 10 centimeters wide.",
        "The shell has a smooth, shiny surface.",
        "The shell weighs 50 grams.",
        "The shell has 8 stripes."
      ],
      correct: 1,
      explanation: "'Smooth, shiny surface' describes qualities using words — no numbers."
    },
    {
      question: "Which piece of information is QUANTITATIVE?",
      options: [
        "The leaf feels soft.",
        "The leaf is bright green.",
        "The leaf has a rough edge.",
        "The leaf is 14 centimeters long."
      ],
      correct: 3,
      explanation: "'14 centimeters' is a measurement with a number and unit."
    },

    // --- Applying to experiments ---
    {
      question: "During a science investigation, Luci notices that one plant has 12 leaves while another has 7 leaves. What kind of observation is this?",
      options: [
        "Qualitative observation",
        "Quantitative observation",
        "Inference",
        "Hypothesis"
      ],
      correct: 1,
      explanation: "She counted leaves — 12 and 7 are numbers. That's a quantitative observation."
    },
    {
      question: "You describe a bug as 'about 3 cm long, brown, with 6 legs.' Which part is quantitative?",
      options: [
        "'brown'",
        "'about 3 cm long' and '6 legs'",
        "None of it",
        "All of it"
      ],
      correct: 1,
      explanation: "'3 cm' is a measurement and '6' is a count — both numbers. 'Brown' is qualitative."
    },
    {
      question: "A student records: 'The apple is red, round, and has 5 seeds.' What could they add to make this a purely quantitative observation?",
      options: [
        "More colors",
        "The mass in grams and the diameter in centimeters",
        "A drawing of the apple",
        "Their opinion about how it tastes"
      ],
      correct: 1,
      explanation: "To make it fully quantitative, replace descriptive words with measurements: mass (grams) and diameter (cm)."
    },

    // --- Why it matters ---
    {
      question: "Why do scientists often prefer quantitative observations?",
      options: [
        "Because they sound smarter",
        "Because numbers are precise and can be compared, graphed, and repeated",
        "Because they're easier to write",
        "Because qualitative observations are wrong"
      ],
      correct: 1,
      explanation: "Numbers are precise. '5.3 cm' can be compared, graphed, and repeated — while 'long' is vague."
    },
    {
      question: "Which would make a better graph — qualitative or quantitative data?",
      options: [
        "Qualitative, because it's more descriptive",
        "Quantitative, because numbers can be plotted",
        "Neither can be graphed",
        "Both graph equally well"
      ],
      correct: 1,
      explanation: "Graphs plot numbers. Quantitative data (measurements and counts) can be plotted; qualitative descriptions cannot."
    },
    {
      question: "Why do scientists need BOTH qualitative and quantitative observations?",
      options: [
        "Only quantitative matters",
        "Only qualitative matters",
        "Quantitative gives precise numbers; qualitative gives context and detail that numbers can't capture",
        "Neither is important"
      ],
      correct: 2,
      explanation: "'The rock weighs 25 g' is precise, but 'the rock is smooth and gray with flecks of mica' captures details a number can't."
    }
  ],
};
