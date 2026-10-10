/* ==========================================================
   Chapter 6 — Variables
   ========================================================== */

export const chapter = {
  id: "chapter-06-variables",
  name: "Variables in Experiments",
  shortName: "Variables",

  studyGuideHtml: `
    <h2>⚙️ What are Variables?</h2>
    <p>A variable is anything that can change in an experiment. A good experiment only changes ONE thing at a time so the test is fair.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Independent Variable (IV) — you CHANGE it</span>
        <div class="sg-def">The one thing you <strong>purposely change</strong>. Only ONE per experiment.</div>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Example</strong>String length on a pendulum.</div>
          <div class="sg-ex"><strong>✅ Example</strong>Amount of water given to plants.</div>
          <div class="sg-ex"><strong>✅ Example</strong>Type of soil used for seeds.</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Dependent Variable (DV) — you MEASURE it</span>
        <div class="sg-def">The thing you <strong>observe or measure</strong>. It "depends" on the independent variable.</div>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Example</strong>Pendulum: number of swings.</div>
          <div class="sg-ex"><strong>✅ Example</strong>Plants: plant height.</div>
          <div class="sg-ex"><strong>✅ Example</strong>Seeds: number of sprouts.</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Controlled Variables (CV) — you KEEP THEM THE SAME</span>
        <div class="sg-def">Everything else that must stay constant so the test is fair. Also called "constants."</div>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Example</strong>Same washer weight, timer, release position.</div>
          <div class="sg-ex"><strong>✅ Example</strong>Same pot size, same sunlight, same soil type.</div>
        </div>
      </div>
    </div>

    <div class="diagram-box">
      <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="30" width="120" height="140" fill="#E3F2FD" stroke="#4A90E2" stroke-width="3" rx="14"/>
        <text x="70" y="60" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#4A90E2">INDEPENDENT</text>
        <text x="70" y="95" text-anchor="middle" font-size="34">🔄</text>
        <text x="70" y="125" text-anchor="middle" font-size="12" fill="#333">You CHANGE</text>
        <text x="70" y="148" text-anchor="middle" font-size="11" font-style="italic" fill="#666">string length</text>

        <rect x="150" y="30" width="120" height="140" fill="#E8F8F5" stroke="#2ECC71" stroke-width="3" rx="14"/>
        <text x="210" y="60" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#2ECC71">DEPENDENT</text>
        <text x="210" y="95" text-anchor="middle" font-size="34">📏</text>
        <text x="210" y="125" text-anchor="middle" font-size="12" fill="#333">You MEASURE</text>
        <text x="210" y="148" text-anchor="middle" font-size="11" font-style="italic" fill="#666">number of swings</text>

        <rect x="290" y="30" width="120" height="140" fill="#F3E5F5" stroke="#8E44AD" stroke-width="3" rx="14"/>
        <text x="350" y="60" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#8E44AD">CONTROLLED</text>
        <text x="350" y="95" text-anchor="middle" font-size="34">🔒</text>
        <text x="350" y="125" text-anchor="middle" font-size="12" fill="#333">Keep SAME</text>
        <text x="350" y="148" text-anchor="middle" font-size="11" font-style="italic" fill="#666">weight, timer</text>
      </svg>
      <div class="diagram-caption">Every good experiment has one IV, one DV, and many CVs.</div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why only change ONE thing? Because if you change many things at once, you won't know which change caused the result!</div>
    </div>

    <h3>🎯 Practice Scenario</h3>
    <p><strong>Experiment:</strong> "How does the amount of water affect plant growth?"</p>
    <ul>
      <li><strong>Independent Variable:</strong> Amount of water (you change it)</li>
      <li><strong>Dependent Variable:</strong> Plant height (you measure it)</li>
      <li><strong>Controlled Variables:</strong> Same soil, same pot, same sunlight, same type of seed</li>
    </ul>

    <div class="highlight">
      <strong>Trick to remember:</strong> <br>
      <strong>I</strong>ndependent = <strong>I</strong> change it<br>
      <strong>D</strong>ependent = <strong>D</strong>ata you measure<br>
      <strong>C</strong>ontrolled = <strong>C</strong>onstant (stays the same)
    </div>
  `,

  miniCheck: [
    { question: "'How does water affect plant growth?' What is the INDEPENDENT variable?",
      options: ["Amount of water", "Plant growth", "Type of soil", "Amount of sunlight"],
      correct: 0,
      explanation: "The Independent Variable is what you change — the amount of water." },

    { question: "In the same experiment, what is the DEPENDENT variable?",
      options: ["Amount of water", "Plant growth", "Type of soil", "Size of pot"],
      correct: 1,
      explanation: "The Dependent Variable is what you measure — plant growth." },

    { question: "In the same experiment, which is a CONTROLLED variable?",
      options: ["Amount of water", "Plant growth", "Type of soil (same for all)", "The question"],
      correct: 2,
      explanation: "Controlled variables stay the same — same soil for every plant keeps the test fair." },

    { question: "Why should an experiment only change ONE thing at a time?",
      options: ["To make it faster", "So you know what caused the result", "Because teachers say so", "To use fewer materials"],
      correct: 1,
      explanation: "If you change many things at once, you won't know which change caused the result." },

    { question: "The variable that you PURPOSELY CHANGE is called the:",
      options: ["Dependent Variable", "Controlled Variable", "Independent Variable", "Constant"],
      correct: 2,
      explanation: "The Independent Variable is the one you change on purpose." },
  ],

  chapterQuiz: [
    // --- Core definitions ---
    {
      question: "The variable you PURPOSELY CHANGE in an experiment is called the:",
      options: [
        "Dependent Variable",
        "Controlled Variable",
        "Independent Variable",
        "Constant"
      ],
      correct: 2,
      explanation: "The Independent Variable is what you change on purpose. 'Independent' means you control it."
    },
    {
      question: "The variable you MEASURE or OBSERVE in an experiment is called the:",
      options: [
        "Independent Variable",
        "Dependent Variable",
        "Controlled Variable",
        "Constant"
      ],
      correct: 1,
      explanation: "The Dependent Variable is the data you collect. It 'depends' on what you changed."
    },
    {
      question: "Variables that must stay the SAME across all trials are called:",
      options: [
        "Independent Variables",
        "Dependent Variables",
        "Controlled Variables (constants)",
        "Hypotheses"
      ],
      correct: 2,
      explanation: "Controlled Variables (also called constants) are kept the same so the test is fair."
    },
    {
      question: "Why is it important to keep controlled variables the same?",
      options: [
        "So the experiment finishes faster",
        "So you know exactly what caused the result — the one thing you changed",
        "Because teachers require it",
        "So you use fewer materials"
      ],
      correct: 1,
      explanation: "If many things change at once, you can't tell what caused the result. Keeping everything else constant isolates the effect of your Independent Variable."
    },

    // --- Identifying variables in scenarios ---
    {
      question: "Experiment: 'How does the amount of water affect plant growth?' What is the Independent Variable?",
      options: ["Amount of water", "Plant growth", "Type of soil", "Amount of sunlight"],
      correct: 0,
      explanation: "You change the amount of water, so that's the Independent Variable."
    },
    {
      question: "In that same experiment, what is the Dependent Variable?",
      options: ["Amount of water", "Plant growth", "Type of soil", "Size of pot"],
      correct: 1,
      explanation: "You measure how much the plant grows, so growth is the Dependent Variable."
    },
    {
      question: "In that same experiment, which is a Controlled Variable?",
      options: ["Amount of water", "Plant growth", "Same type of soil for all plants", "The question"],
      correct: 2,
      explanation: "Same soil for every plant keeps the test fair. Soil is a controlled variable."
    },
    {
      question: "Experiment: 'How does the material of a ball affect bounce height?' What is the Independent Variable?",
      options: ["Bounce height", "Material of the ball", "Drop height", "Type of floor"],
      correct: 1,
      explanation: "You change the material of the ball, so it's the Independent Variable."
    },
    {
      question: "In that same ball experiment, what is the Dependent Variable?",
      options: ["Bounce height", "Material of the ball", "Drop height", "Room temperature"],
      correct: 0,
      explanation: "You measure how high the ball bounces, so that's the Dependent Variable."
    },
    {
      question: "In that same ball experiment, which is a Controlled Variable?",
      options: ["Bounce height", "Material of the ball", "Same drop height for all balls", "The question"],
      correct: 2,
      explanation: "Dropping from the same height keeps the test fair. Drop height is controlled."
    },
    {
      question: "Experiment: 'Does the surface type affect how fast an ice cube melts?' What is the Independent Variable?",
      options: [
        "The time it takes to melt",
        "The size of the ice cube",
        "The surface type",
        "The room temperature"
      ],
      correct: 2,
      explanation: "You change the surface (carpet, wood, metal, etc.), so surface type is the Independent Variable."
    },
    {
      question: "In that same ice cube experiment, what is the Dependent Variable?",
      options: [
        "The time it takes to melt",
        "The surface type",
        "The size of the ice cube",
        "The room temperature"
      ],
      correct: 0,
      explanation: "You measure how long the ice takes to melt, so melting time is the Dependent Variable."
    },
    {
      question: "Experiment: 'How does the temperature of water affect how fast sugar dissolves?' What is the Independent Variable?",
      options: [
        "Amount of sugar",
        "Type of sugar",
        "Temperature of the water",
        "How fast the sugar dissolves"
      ],
      correct: 2,
      explanation: "You change the water temperature, so that's what's being tested."
    },

    // --- Comparing to the Pendulum Lab ---
    {
      question: "In the Pendulum Lab, what was the Independent Variable?",
      options: ["Number of swings", "String length", "Washer weight", "The timer"],
      correct: 1,
      explanation: "You changed the string length, so it's the Independent Variable."
    },
    {
      question: "In the Pendulum Lab, what was the Dependent Variable?",
      options: ["Number of swings", "String length", "Washer weight", "Release position"],
      correct: 0,
      explanation: "You measured the number of swings in a set time, so swings are the Dependent Variable."
    },
    {
      question: "In the Pendulum Lab, which of these was a Controlled Variable?",
      options: [
        "String length",
        "Number of swings",
        "Same washer weight for all trials",
        "The question"
      ],
      correct: 2,
      explanation: "Using the same washer keeps the test fair — washer weight doesn't affect the outcome, so it stays the same."
    },
    {
      question: "Galileo discovered something surprising about pendulums. What did he find?",
      options: [
        "Heavier washers make pendulums swing faster",
        "The weight of the bob doesn't change the period; only the string length does",
        "Pendulums always stop after 10 swings",
        "You can't measure a pendulum accurately"
      ],
      correct: 1,
      explanation: "Galileo tested many variables and found that the string length controls the period — not the weight of the bob."
    },

    // --- Applying to new scenarios ---
    {
      question: "You want to test: 'How does the size of a magnet affect how many paper clips it can pick up?' What would you change between trials?",
      options: [
        "The number of paper clips",
        "The size of the magnet",
        "The type of paper clips",
        "The surface"
      ],
      correct: 1,
      explanation: "The question is about magnet size, so that's what you change. Everything else stays the same."
    },
    {
      question: "In that magnet experiment, what do you measure?",
      options: [
        "The size of the magnet",
        "The number of paper clips picked up",
        "The weight of the paper clips",
        "The temperature"
      ],
      correct: 1,
      explanation: "You count how many paper clips the magnet picks up — that's the Dependent Variable."
    },
    {
      question: "You want to test whether the color of a cup affects how fast water cools. Which of these must be the SAME across all trials?",
      options: [
        "The color of the cup",
        "The starting temperature of the water, the amount of water, and the room temperature",
        "How fast the water cools",
        "The color of the water"
      ],
      correct: 1,
      explanation: "Only the color changes. Everything else — water temperature, amount, room conditions — must stay the same."
    },
    {
      question: "A student wants to test: 'How does the type of soil affect how tall a sunflower grows?' Which of these should NOT be changed?",
      options: [
        "Type of soil",
        "Amount of water, sunlight, and size of pot",
        "The height of the plant",
        "The question being tested"
      ],
      correct: 1,
      explanation: "Only soil type should change. Water, sunlight, and pot size all stay the same."
    },

    // --- Reasoning and critique ---
    {
      question: "A student says: 'I'll change the amount of water AND the amount of sunlight and see how the plant grows.' What's the problem?",
      options: [
        "Nothing — more changes gives better data",
        "Changing two things at once means you won't know which one caused the result",
        "You can't grow plants with sunlight",
        "Water doesn't affect plants"
      ],
      correct: 1,
      explanation: "A good experiment changes only ONE thing at a time. Changing two makes the results ambiguous."
    },
    {
      question: "A student tests: 'How does the shape of a paper airplane affect how far it flies?' They use a DIFFERENT type of paper for each plane. What's the problem?",
      options: [
        "Nothing — paper type doesn't matter",
        "They changed two variables (shape AND paper type), so they can't tell which caused the flight difference",
        "Paper airplanes don't fly",
        "They should have used lighter paper"
      ],
      correct: 1,
      explanation: "If paper type also changes, you can't isolate the effect of shape. Paper type should have been a controlled variable."
    },
    {
      question: "Two students do the same experiment but get different results. The first changed the drop height. The second changed the drop height AND the ball. Whose results are more reliable?",
      options: [
        "The first student's — they only changed one variable",
        "The second student's — they changed more",
        "Both are equally reliable",
        "Neither is reliable"
      ],
      correct: 0,
      explanation: "The first student followed the rule of one Independent Variable. Their result is cleaner because only one thing could have caused the difference."
    }
  ],
};