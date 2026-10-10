/* ==========================================================
   Chapter 1 — The Scientific Method
   ========================================================== */

export const chapter = {
  id: "chapter-01-scientific-method",
  name: "The Scientific Method",
  shortName: "Sci. Method",

  studyGuideHtml: `
    <h2>🧪 What is the Scientific Method?</h2>
    <p>The Scientific Method is a step-by-step way scientists answer questions about the natural world. It's like a recipe for figuring things out!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Definition</span>
        <div class="sg-def">The process or steps taken to produce reliable results and answer a scientific question.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The 6 Steps (in order)</span>
        <ul style="margin-left: 20px;">
          <li><strong>1. Ask a Question</strong> — What do you want to know? (Must be testable.)</li>
          <li><strong>2. Make a Hypothesis / Prediction</strong> — A smart guess. Start with "I predict..."</li>
          <li><strong>3. Test / Experiment</strong> — Do the experiment to find out.</li>
          <li><strong>4. Collect Data</strong> — Write down what you see and measure.</li>
          <li><strong>5. Analyze Results</strong> — Look at your data to see what it means.</li>
          <li><strong>6. Draw a Conclusion</strong> — Was your hypothesis correct?</li>
        </ul>
      </div>

      <div class="sg-row">
        <span class="sg-label">Examples — Testable Questions ✅</span>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Testable</strong>"Which type of soil helps a plant grow the tallest?"</div>
          <div class="sg-ex"><strong>✅ Testable</strong>"How does the length of a string affect how many times a pendulum swings?"</div>
          <div class="sg-ex"><strong>✅ Testable</strong>"Does adding salt to water change how fast it boils?"</div>
          <div class="sg-ex"><strong>✅ Testable</strong>"How does the temperature of air affect how fast bees fly?"</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Non-examples — NOT Testable ❌</span>
        <div class="sg-examples">
          <div class="sg-nonex"><strong>❌ Not testable</strong>"Which animal is the cutest?" (Opinion)</div>
          <div class="sg-nonex"><strong>❌ Not testable</strong>"What is the best color?" (Opinion)</div>
          <div class="sg-nonex"><strong>❌ Not testable</strong>"Which food tastes the best?" (Opinion)</div>
          <div class="sg-nonex"><strong>❌ Not testable</strong>"Is chocolate better than vanilla?" (Opinion)</div>
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do scientists have to ask testable questions? Because untestable questions (like "which is prettiest?") have no right answer — they're just opinions!</div>
    </div>

    <div class="highlight">
      <strong>Key tip:</strong> If you can't measure it or count it, it's probably NOT a scientific question.
    </div>

    <h3>⏱️ The Pendulum Lab (Revisited)</h3>
    <p>In class you tested how the <strong>length of a string</strong> affects the <strong>number of swings</strong> a pendulum makes in 20 seconds.</p>

    <div class="pendulum-container">
      <div class="pendulum"><div class="pendulum-ball"></div></div>
    </div>

    <h3>The 3 Variables in the Pendulum Lab</h3>
    <ul>
      <li><span class="badge badge-blue">Independent Variable</span> The thing you <strong>change</strong> — the string length.</li>
      <li><span class="badge badge-green">Dependent Variable</span> The thing you <strong>measure</strong> — the number of swings.</li>
      <li><span class="badge badge-purple">Controlled Variables</span> Things you <strong>keep the same</strong> — washer weight, timer, release position.</li>
    </ul>

    <div class="highlight">
      <strong>Remember Galileo!</strong> He discovered that a pendulum's period depends on the string length, not the weight of the bob.
    </div>
  `,

  miniCheck: [
    { question: "Which of these is a TESTABLE scientific question?",
      options: ["What is the tastiest ice cream?", "How does sunlight affect plant height?", "Which superhero is the best?", "What is the prettiest color?"],
      correct: 1,
      explanation: "A testable question can be answered with an experiment. 'How does sunlight affect plant height?' can be measured — the others are opinions." },

    { question: "What is usually the FIRST step of the Scientific Method?",
      options: ["Draw a conclusion", "Ask a question", "Make a graph", "Test the hypothesis"],
      correct: 1,
      explanation: "Scientists always start by asking a testable question. Without a question, there's nothing to test." },

    { question: "A student says, 'I think the plant in the sun will grow taller than the plant in the shade.' This is a:",
      options: ["Conclusion", "Hypothesis", "Observation", "Measurement"],
      correct: 1,
      explanation: "A hypothesis is a smart guess made BEFORE the experiment. It's a prediction about what will happen." },

    { question: "After collecting data, what does a scientist do next?",
      options: ["Start a brand new experiment", "Analyze the results and draw a conclusion", "Ask an unrelated question", "Throw the data away"],
      correct: 1,
      explanation: "After data is collected, scientists analyze it to see whether it supports the hypothesis and then draw a conclusion." },

    { question: "Which of these is NOT part of the Scientific Method?",
      options: ["Ask a question", "Make a prediction", "Guess randomly without testing", "Collect data"],
      correct: 2,
      explanation: "The Scientific Method is based on testing and evidence. Random guessing without testing is not part of it." },
  ],

  chapterQuiz: [
    // --- What the Scientific Method is ---
    {
      question: "What is the Scientific Method?",
      options: [
        "A creative process for making art",
        "A step-by-step process scientists use to answer questions about the natural world",
        "A way of reading science books",
        "A training program for scientists"
      ],
      correct: 1,
      explanation: "The Scientific Method is a systematic process for investigating questions using evidence."
    },
    {
      question: "Which question can be tested using the Scientific Method?",
      options: [
        "Which animal is the cutest?",
        "Which type of soil helps a plant grow the tallest?",
        "What is the best color?",
        "Which food tastes best?"
      ],
      correct: 1,
      explanation: "Scientific questions must be testable and measurable. 'Which soil helps a plant grow tallest?' can be measured — the others are opinions."
    },
    {
      question: "Which of these is NOT testable by an experiment?",
      options: [
        "How sunlight affects plant growth",
        "How water affects seed sprouting",
        "Which song is the best",
        "How temperature affects how fast ice melts"
      ],
      correct: 2,
      explanation: "'Which song is best' is an opinion — it can't be measured or tested. The others all involve measurable changes."
    },
    {
      question: "Scientists look for answers to questions about which of the following?",
      options: [
        "Magic",
        "The natural world",
        "The supernatural",
        "Opinions"
      ],
      correct: 1,
      explanation: "Science studies the natural world — things we can observe, measure, and test."
    },

    // --- The 6 steps in order ---
    {
      question: "What is the correct ORDER of the Scientific Method?",
      options: [
        "Hypothesis → Question → Test → Data → Conclusion",
        "Question → Hypothesis → Test → Data → Conclusion",
        "Test → Question → Hypothesis → Data → Conclusion",
        "Question → Test → Hypothesis → Conclusion → Data"
      ],
      correct: 1,
      explanation: "The correct order is: Ask a Question, Make a Hypothesis, Test, Collect Data, Draw a Conclusion."
    },
    {
      question: "What is usually the FIRST step of the Scientific Method?",
      options: [
        "Write a conclusion",
        "Ask a question",
        "Make a graph",
        "Test the hypothesis"
      ],
      correct: 1,
      explanation: "Scientists always start by asking a testable question. Without a question, there's nothing to test."
    },
    {
      question: "What do scientists do immediately after asking a question?",
      options: [
        "Skip straight to a conclusion",
        "Make a hypothesis or prediction",
        "Throw out their data",
        "Give up"
      ],
      correct: 1,
      explanation: "After a question, the next step is a hypothesis — a smart guess about what will happen."
    },
    {
      question: "Which step comes AFTER you collect data?",
      options: [
        "Ask a question",
        "Make a hypothesis",
        "Analyze the results",
        "Design the experiment"
      ],
      correct: 2,
      explanation: "After collecting data, scientists analyze it to see what it means and then draw a conclusion."
    },

    // --- Hypothesis and prediction ---
    {
      question: "A student thinks ice will melt faster in a warm room than in a cold room. This is the student's:",
      options: [
        "Observation",
        "Hypothesis",
        "Conclusion",
        "Measurement"
      ],
      correct: 1,
      explanation: "A hypothesis is a smart guess or prediction made BEFORE testing."
    },
    {
      question: "A hypothesis is best described as:",
      options: [
        "A fact you already know is true",
        "A smart guess about what will happen, based on what you know",
        "The final answer",
        "A type of measurement tool"
      ],
      correct: 1,
      explanation: "A hypothesis uses background knowledge to make a prediction. It hasn't been tested yet."
    },
    {
      question: "A prediction should start with the words:",
      options: [
        "I see...",
        "I predict...",
        "I measure...",
        "I count..."
      ],
      correct: 1,
      explanation: "'I predict...' makes it clear you're making a hypothesis about the future result."
    },

    // --- Data and conclusions ---
    {
      question: "What is data in a science experiment?",
      options: [
        "A scientist's opinion",
        "Information (measurements and observations) collected during an experiment",
        "A type of tool",
        "A question"
      ],
      correct: 1,
      explanation: "Data is the information collected during an experiment — measurements, observations, counts."
    },
    {
      question: "After an experiment, a scientist looks at the data and decides what the results mean. This is called:",
      options: [
        "Drawing a conclusion",
        "Asking a question",
        "Making a prediction",
        "Making an observation"
      ],
      correct: 0,
      explanation: "Looking at results and deciding what they mean is drawing a conclusion."
    },

    // --- Why we repeat and why we care ---
    {
      question: "Why do scientists repeat experiments?",
      options: [
        "To waste time",
        "To make sure results are reliable and consistent, not just a one-time fluke",
        "Because they forget what happened",
        "To use more materials"
      ],
      correct: 1,
      explanation: "Repeating helps confirm that results are reliable. A result that shows up every time is much more trustworthy than a single trial."
    },
    {
      question: "A student does an experiment once and gets a result. Should they trust it?",
      options: [
        "Yes — one trial is enough",
        "No — one trial could be a mistake; repeating gives more reliable results",
        "Only if they used expensive tools",
        "Only if the teacher watched"
      ],
      correct: 1,
      explanation: "One trial can be affected by small errors. Repeating protects against mistakes and makes the result more reliable."
    },

    // --- Applying the method ---
    {
      question: "A student wants to know which paper towel absorbs the most water. What should they do FIRST?",
      options: [
        "Write a conclusion",
        "Develop a question they can investigate",
        "Decide which brand is the winner",
        "Draw a graph of the results"
      ],
      correct: 1,
      explanation: "The first step is always to ask a testable question. Everything else follows from that."
    },
    {
      question: "A student is investigating: 'Which type of soil helps a plant grow tallest?' What is the independent variable?",
      options: [
        "The plant's height",
        "The type of soil",
        "The amount of water",
        "The size of the pot"
      ],
      correct: 1,
      explanation: "The Independent Variable is what you change — the type of soil."
    },
    {
      question: "In that same plant experiment, what is the dependent variable?",
      options: [
        "The plant's height",
        "The type of soil",
        "The amount of water",
        "The size of the pot"
      ],
      correct: 0,
      explanation: "The Dependent Variable is what you measure — the plant's height."
    },
    {
      question: "A good experiment should change only ONE thing at a time. Why?",
      options: [
        "To keep it fair and know what caused the result",
        "To save money",
        "To make it faster",
        "Because it's the rule"
      ],
      correct: 0,
      explanation: "Changing one thing at a time keeps the test fair — you know exactly what caused the result."
    },

    // --- Pendulum Lab application ---
    {
      question: "In the Pendulum Lab, what was the Independent Variable?",
      options: [
        "Number of swings",
        "String length",
        "Washer weight",
        "The timer"
      ],
      correct: 1,
      explanation: "You changed the string length — that's the Independent Variable."
    },
    {
      question: "In the Pendulum Lab, what was the Dependent Variable?",
      options: [
        "Number of swings",
        "String length",
        "Washer weight",
        "Release position"
      ],
      correct: 0,
      explanation: "You measured the number of swings in a set time — that's the Dependent Variable."
    },
    {
      question: "Galileo discovered that a pendulum's period (time per swing) depends on:",
      options: [
        "The weight of the bob",
        "The string length",
        "The color of the string",
        "The time of day"
      ],
      correct: 1,
      explanation: "Galileo found the string length controls the period — not the weight of the bob, and not the release position."
    }
  ],
};