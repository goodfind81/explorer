/* ==========================================================
   Chapter 2 — Making Observations
   ========================================================== */

export const chapter = {
  id: "chapter-02-observations",
  name: "Making Observations",
  shortName: "Observations",

  studyGuideHtml: `
    <h2>👀 Making Observations</h2>
    <p>An observation is what you notice with your senses — what you <em>see</em>, <em>hear</em>, <em>smell</em>, <em>touch</em>, or <em>measure</em>. Stick to the facts!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Definition</span>
        <div class="sg-def">Something you can see, hear, smell, touch, or measure. No guessing — just facts.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Examples ✅</span>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Example</strong>"The rock is gray and weighs 20 grams."</div>
          <div class="sg-ex"><strong>✅ Example</strong>"The dog has brown fur and four legs."</div>
          <div class="sg-ex"><strong>✅ Example</strong>"The flower has 10 pink petals."</div>
          <div class="sg-ex"><strong>✅ Example</strong>"The liquid is clear and 75 mL."</div>
          <div class="sg-ex"><strong>✅ Example</strong>"The metal is smooth and shiny."</div>
          <div class="sg-ex"><strong>✅ Example</strong>"The leaf feels rough and has jagged edges."</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Non-examples ❌ (These are inferences, not observations)</span>
        <div class="sg-examples">
          <div class="sg-nonex"><strong>❌ Not an observation</strong>"The dog is hungry." (You can't see hungry.)</div>
          <div class="sg-nonex"><strong>❌ Not an observation</strong>"It probably rained last night." (Guess about the past.)</div>
          <div class="sg-nonex"><strong>❌ Not an observation</strong>"The rock came from a volcano." (Guess about history.)</div>
          <div class="sg-nonex"><strong>❌ Not an observation</strong>"The flower is pretty." (Opinion.)</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Characteristics of a GOOD observation</span>
        <ul style="margin-left: 20px;">
          <li><strong>Fact-based</strong> — no opinions or guesses.</li>
          <li>Uses <strong>precise measurements</strong> when possible.</li>
          <li>Describes <strong>size, shape, color, and texture</strong>.</li>
          <li>Uses your senses — but <strong>NEVER taste</strong> in a science lab.</li>
        </ul>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do we avoid tasting in a lab? Because you don't know what the substance is — it might be poisonous, dirty, or harmful.</div>
    </div>

    <h3>🔍 Observation Practice</h3>
    <p>When you observe a mystery object, describe it using these categories:</p>
    <ul>
      <li><strong>Size:</strong> How big is it? Use a ruler if you can.</li>
      <li><strong>Shape:</strong> Round, square, oval, cylinder, irregular?</li>
      <li><strong>Color:</strong> What colors do you see?</li>
      <li><strong>Texture:</strong> Smooth, rough, bumpy, soft, hard?</li>
      <li><strong>Other:</strong> Does it make a sound when shaken? Does it have a smell?</li>
    </ul>

    <div class="highlight">
      <strong>Remember:</strong> An observation is a description of a fact. If you're explaining WHY something is the way it is, that's an inference, not an observation.
    </div>
  `,

  miniCheck: [
    { question: "Which one is an OBSERVATION?",
      options: ["The plant needs more water.", "The plant has six green leaves.", "The plant is probably healthy.", "The plant will grow taller tomorrow."],
      correct: 1,
      explanation: "'Six green leaves' is a fact you can see and count. The others are inferences or predictions." },

    { question: "Which sentence is an observation?",
      options: ["The dog is hungry.", "The dog wants to go outside.", "The dog has brown fur and four legs.", "The dog is probably tired."],
      correct: 2,
      explanation: "You can SEE the fur color and count the legs. That's an observation." },

    { question: "Why should you NEVER taste something in a science lab?",
      options: ["It wastes time", "It's not safe — you don't know what it is", "It's not allowed at lunch", "It makes the experiment messy"],
      correct: 1,
      explanation: "Tasting unknown substances is dangerous. Scientists use sight, hearing, touch, and smell — never taste." },

    { question: "What should a GOOD observation include?",
      options: ["Your opinion about it", "Size, shape, color, and texture", "Only one detail", "What you think will happen next"],
      correct: 1,
      explanation: "Detailed observations describe size, shape, color, and texture — all facts." },

    { question: "Which is the MOST detailed observation?",
      options: ["The rock is cool.", "The rock is smooth, gray, and the size of my fist.", "The rock came from a volcano.", "The rock is probably old."],
      correct: 1,
      explanation: "The second option describes texture (smooth), color (gray), and size (fist-sized) — all facts." },
  ],

  chapterQuiz: [
    { question: "Which statement is an OBSERVATION?",
      options: ["The dog is hungry.", "The dog wants to go outside.", "The dog has brown fur and four legs.", "The dog is probably tired."],
      correct: 2,
      explanation: "Fur color and leg count are facts you can see with your eyes." },

    { question: "A student sees a puddle on the playground. Which is an OBSERVATION?",
      options: ["It probably rained.", "The puddle is about 1 meter wide.", "Someone spilled a bucket.", "It will dry by noon."],
      correct: 1,
      explanation: "Measuring the puddle's width is an observation. The others are inferences or predictions." },

    { question: "Which sentence is NOT an observation?",
      options: ["The flower has five petals.", "The flower is red.", "The flower needs more water.", "The flower is 10 cm tall."],
      correct: 2,
      explanation: "'Needs more water' is an inference — you can't directly observe a need." },

    { question: "A good observation uses which senses?",
      options: ["Only sight", "Sight, hearing, touch, and smell (never taste)", "Only taste", "Only hearing"],
      correct: 1,
      explanation: "Scientists use sight, hearing, touch, and smell. Never taste — it's not safe." },

    { question: "Which is a detailed observation of a rock?",
      options: ["The rock is old.", "The rock is smooth, gray, and about the size of my fist.", "The rock came from a river.", "The rock is important."],
      correct: 1,
      explanation: "Detailed observations include texture, color, and size — all facts." },

    { question: "Observations should include which of the following?",
      options: ["Opinions", "Guesses about the future", "Size, shape, color, texture", "Only color"],
      correct: 2,
      explanation: "Good observations describe size, shape, color, and texture — all facts, no opinions." },

    { question: "'The pencil is yellow.' This is:",
      options: ["An inference", "An observation", "A conclusion", "A hypothesis"],
      correct: 1,
      explanation: "It's a fact you can see directly with your eyes — an observation." },

    { question: "'The pencil must be new because it's so sharp.' This is:",
      options: ["An observation", "An inference", "A prediction", "A measurement"],
      correct: 1,
      explanation: "You observed the pencil is sharp. The explanation ('must be new') is an inference." },

    { question: "Which one is a FACT-BASED observation?",
      options: ["The soup smells amazing.", "The soup is hot.", "The soup has 12 noodles.", "The soup tastes perfect."],
      correct: 2,
      explanation: "'12 noodles' is a fact you can count. The others involve opinions or senses you can't safely use." },

    { question: "Why do observations need to be factual?",
      options: ["So they look nice", "So other scientists can understand and repeat them", "So they're longer", "Because teachers like facts"],
      correct: 1,
      explanation: "Factual observations can be shared and repeated by other scientists — that's how science works." },

    { question: "Which is a quantitative observation of an apple?",
      options: ["The apple is red.", "The apple is round.", "The apple weighs 150 grams.", "The apple looks tasty."],
      correct: 2,
      explanation: "'150 grams' is a measurement — that's quantitative." },

    { question: "A student writes: 'The liquid is clear, and the volume reads 75 mL.' This is:",
      options: ["All inference", "A mix of observation (fact) and measurement", "A conclusion", "A hypothesis"],
      correct: 1,
      explanation: "'Clear' is a fact; '75 mL' is a measurement. Both are observations." },

    { question: "Which of these describes the TEXTURE of an object?",
      options: ["It is red.", "It weighs 10 grams.", "It feels rough and bumpy.", "It is 5 cm long."],
      correct: 2,
      explanation: "Texture is how something feels — rough, smooth, bumpy, soft, etc." },

    { question: "Which of these describes the SHAPE of an object?",
      options: ["It is green.", "It is 12 cm wide.", "It is round like a ball.", "It smells like mint."],
      correct: 2,
      explanation: "Shape describes the form of an object — round, square, oval, cylinder, etc." },

    { question: "You're observing a mystery object. Which is the BEST observation?",
      options: ["It's cool.", "It feels smooth, is silver-colored, and is about 3 cm wide.", "It came from a factory.", "It's probably expensive."],
      correct: 1,
      explanation: "Describing texture, color, and size with facts is the best observation." },

    { question: "Which is an observation a scientist could write down?",
      options: ["The feather feels soft and is 8 cm long.", "The feather is beautiful.", "The feather came from an eagle.", "The feather is important."],
      correct: 0,
      explanation: "Texture and measurement are facts — the others are opinions or inferences." },

    { question: "Which one is NOT a safe sense to use in a science lab?",
      options: ["Sight", "Hearing", "Taste", "Touch"],
      correct: 2,
      explanation: "Never taste in a lab. You don't know what substances are — they could be dangerous." },

    { question: "Why is it important to be specific with details like size and color?",
      options: ["So the observation is longer", "So other scientists can picture exactly what you observed", "To make yourself sound smart", "To fill the page"],
      correct: 1,
      explanation: "Specific details let other scientists understand and repeat your observation." },

    { question: "An observation of a glass of water might include:",
      options: ["The water came from a tap.", "The water is clear and fills the glass about halfway.", "The water tastes cold.", "The water was poured this morning."],
      correct: 1,
      explanation: "Clarity and amount are facts you can observe. The others are inferences or unsafe senses." },

    { question: "Which statement uses a scientific TOOL to make an observation?",
      options: ["The rock looks old.", "The rock is probably heavy.", "The rock has a mass of 45 grams.", "The rock is beautiful."],
      correct: 2,
      explanation: "Using a balance to measure mass is a tool-based observation." },
  ],
};