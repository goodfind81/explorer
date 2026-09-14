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
    { question: "The variable you PURPOSELY CHANGE is called the:",
      options: ["Dependent Variable", "Controlled Variable", "Independent Variable", "Constant"],
      correct: 2,
      explanation: "The Independent Variable is what you change on purpose." },

    { question: "'How does water affect plant growth?' What is the DEPENDENT variable?",
      options: ["Amount of water", "Plant growth", "Type of soil", "Amount of sunlight"],
      correct: 1,
      explanation: "The Dependent Variable is what you measure — plant growth." },

    { question: "'How does water affect plant growth?' Which is a CONTROLLED variable?",
      options: ["Amount of water", "Plant growth", "Same type of soil for all", "The question"],
      correct: 2,
      explanation: "Controlled variables stay the same so the test is fair." },

    { question: "Why only change ONE thing at a time?",
      options: ["To be faster", "So you know what caused the result", "To use fewer materials", "Because it's a rule"],
      correct: 1,
      explanation: "Changing only one thing means you know what caused the result." },

    { question: "In the Pendulum Lab, the thing you changed was:",
      options: ["The washer weight", "The string length", "The timer", "The table"],
      correct: 1,
      explanation: "You changed the string length — the Independent Variable." },

    { question: "In the Pendulum Lab, what did you measure?",
      options: ["String length", "Washer weight", "Number of swings", "Room temperature"],
      correct: 2,
      explanation: "You counted the number of swings — the Dependent Variable." },

    { question: "The Dependent Variable goes on which axis of a graph?",
      options: ["X-axis (horizontal)", "Y-axis (vertical)", "Either one", "Neither"],
      correct: 1,
      explanation: "The Dependent Variable goes on the Y-axis. The Independent Variable goes on the X-axis." },

    { question: "Which is another name for controlled variables?",
      options: ["Constants", "Conclusions", "Predictions", "Hypotheses"],
      correct: 0,
      explanation: "Controlled variables are also called constants because they stay the same." },

    { question: "Which of these is NOT a variable in an experiment?",
      options: ["The thing you change", "The thing you measure", "The thing you keep the same", "The color of your pencil"],
      correct: 3,
      explanation: "The color of your pencil doesn't affect the experiment — it's not a variable in the test." },

    { question: "Good experiments have how many independent variables at a time?",
      options: ["As many as possible", "One", "Two or three", "Zero"],
      correct: 1,
      explanation: "Only ONE independent variable at a time, so you know what caused the result." },

    { question: "'How does sunlight affect plant growth?' What is the Independent Variable?",
      options: ["Plant growth", "Amount of sunlight", "Type of soil", "Type of plant"],
      correct: 1,
      explanation: "You're changing the amount of sunlight — that's the Independent Variable." },

    { question: "'How does sunlight affect plant growth?' What is the Dependent Variable?",
      options: ["Plant growth", "Amount of sunlight", "Type of soil", "Size of pot"],
      correct: 0,
      explanation: "You measure the plant growth — that's the Dependent Variable." },

    { question: "'How does the material of a ball affect bounce height?' What is the Independent Variable?",
      options: ["Bounce height", "Material of the ball", "Drop height", "Type of floor"],
      correct: 1,
      explanation: "You change the material of the ball — that's the IV." },

    { question: "In the same ball experiment, what is a CONTROLLED variable?",
      options: ["Bounce height", "Material of the ball", "Same drop height for all balls", "The question"],
      correct: 2,
      explanation: "Controlled variables stay the same — like dropping from the same height each time." },

    { question: "In the same ball experiment, what is the DEPENDENT variable?",
      options: ["Bounce height", "Material of the ball", "Drop height", "Room temperature"],
      correct: 0,
      explanation: "You measure how high the ball bounces — that's the DV." },

    { question: "Why do scientists repeat experiments with the same setup?",
      options: ["To waste time", "To be sure results are reliable", "Because they forgot", "To use up materials"],
      correct: 1,
      explanation: "Repeating helps confirm the results are reliable and not a one-time fluke." },

    { question: "You want to test which paper towel absorbs the most water. What is the Independent Variable?",
      options: ["Brand of paper towel", "Amount of water absorbed", "Amount of water poured", "Time"],
      correct: 0,
      explanation: "You change the brand of paper towel — that's the IV." },

    { question: "In the paper towel test, what is the Dependent Variable?",
      options: ["Brand of paper towel", "Amount of water absorbed", "Size of towel", "Room temperature"],
      correct: 1,
      explanation: "You measure how much water each towel absorbs — that's the DV." },

    { question: "In the paper towel test, which is a CONTROLLED variable?",
      options: ["Brand of paper towel", "Amount of water absorbed", "Amount of water poured (same for each)", "The question"],
      correct: 2,
      explanation: "Controlled variables stay the same — the same amount of water is poured for each test." },

    { question: "A student writes: 'The plant with more sunlight grew taller.' Which is the CAUSE in this sentence?",
      options: ["The height of the plant", "The amount of sunlight", "The type of soil", "The color of the plant"],
      correct: 1,
      explanation: "The cause is what you changed — the amount of sunlight (the IV). The effect is the height (the DV)." },
  ],
};