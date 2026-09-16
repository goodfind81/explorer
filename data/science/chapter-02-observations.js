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
    // --- Core definition ---
    {
      question: "What is an OBSERVATION?",
      options: [
        "A guess about what will happen next",
        "Something you notice using your senses or a scientific tool",
        "An explanation of why something happens",
        "An opinion about something"
      ],
      correct: 1,
      explanation: "An observation is what you detect with your senses (sight, hearing, smell, touch) or measure with a tool. No guessing."
    },
    {
      question: "Which senses do scientists use to make observations in a lab?",
      options: [
        "Only sight",
        "Sight, hearing, touch, and smell (never taste)",
        "Only taste",
        "Only hearing and sight"
      ],
      correct: 1,
      explanation: "Scientists use sight, hearing, touch, and smell — but never taste in a lab, because you don't know what substances are safe."
    },
    {
      question: "Why is tasting NOT allowed in a science lab?",
      options: [
        "It wastes time",
        "Because you don't know what substances are — they could be dangerous",
        "Because it's not allowed at lunch",
        "Because it makes a mess"
      ],
      correct: 1,
      explanation: "Tasting unknown substances is dangerous. Never taste in a lab, no matter what."
    },

    // --- Identifying observations vs inferences ---
    {
      question: "Which statement is an OBSERVATION?",
      options: [
        "The dog is hungry.",
        "The dog wants to go outside.",
        "The dog has brown fur and four legs.",
        "The dog is probably tired."
      ],
      correct: 2,
      explanation: "Fur color and leg count are facts you can see directly. The others are guesses about the dog's feelings."
    },
    {
      question: "A student sees a puddle on the playground. Which is an OBSERVATION?",
      options: [
        "It probably rained.",
        "The puddle is about 1 meter wide.",
        "Someone spilled a bucket.",
        "It will dry by noon."
      ],
      correct: 1,
      explanation: "Measuring the puddle's width is an observation. The others are inferences or predictions."
    },
    {
      question: "Which sentence is NOT an observation?",
      options: [
        "The flower has five petals.",
        "The flower is red.",
        "The flower needs more water.",
        "The flower is 10 cm tall."
      ],
      correct: 2,
      explanation: "'Needs more water' is an inference — you can't directly observe a need. The others are facts you can see or measure."
    },
    {
      question: "'The pencil is yellow.' This is:",
      options: [
        "An inference",
        "An observation",
        "A conclusion",
        "A hypothesis"
      ],
      correct: 1,
      explanation: "It's a fact you can see directly with your eyes — an observation."
    },
    {
      question: "'The pencil must be new because it's so sharp.' This is:",
      options: [
        "An observation",
        "An inference",
        "A prediction",
        "A measurement"
      ],
      correct: 1,
      explanation: "You observed the pencil is sharp. The explanation ('must be new') is an inference about why."
    },

    // --- What makes a good observation ---
    {
      question: "What should a GOOD observation include?",
      options: [
        "Your opinion about it",
        "Size, shape, color, and texture",
        "Only one detail",
        "What you think will happen next"
      ],
      correct: 1,
      explanation: "Detailed observations describe size, shape, color, and texture — all facts, no opinions or guesses."
    },
    {
      question: "Which is the MOST detailed observation?",
      options: [
        "The rock is cool.",
        "The rock is smooth, gray, and about the size of my fist.",
        "The rock came from a volcano.",
        "The rock is probably old."
      ],
      correct: 1,
      explanation: "The second option describes texture (smooth), color (gray), and size (fist-sized) — all observable facts."
    },
    {
      question: "Which is a fact-based observation?",
      options: [
        "The soup smells amazing.",
        "The soup is hot.",
        "The soup has 12 noodles.",
        "The soup tastes perfect."
      ],
      correct: 2,
      explanation: "'12 noodles' is a fact you can count. 'Amazing' and 'perfect' are opinions. 'Hot' is sensory but requires judgment of temperature."
    },
    {
      question: "Why do observations need to be factual?",
      options: [
        "So they look nice",
        "So other scientists can understand and repeat them",
        "So they're longer",
        "Because teachers like facts"
      ],
      correct: 1,
      explanation: "Factual observations can be shared and repeated by other scientists — that's how science is verified."
    },

    // --- Observing specific properties ---
    {
      question: "Which describes the TEXTURE of an object?",
      options: [
        "It is red.",
        "It weighs 10 grams.",
        "It feels rough and bumpy.",
        "It is 5 cm long."
      ],
      correct: 2,
      explanation: "Texture is how something feels — rough, smooth, bumpy, soft, etc."
    },
    {
      question: "Which describes the SHAPE of an object?",
      options: [
        "It is green.",
        "It is 12 cm wide.",
        "It is round like a ball.",
        "It smells like mint."
      ],
      correct: 2,
      explanation: "Shape describes the form — round, square, oval, cylinder, irregular."
    },
    {
      question: "You're observing a mystery object. Which is the BEST observation?",
      options: [
        "It's cool.",
        "It feels smooth, is silver-colored, and is about 3 cm wide.",
        "It came from a factory.",
        "It's probably expensive."
      ],
      correct: 1,
      explanation: "Describing texture, color, and size with facts is the best observation."
    },
    {
      question: "An observation of a glass of water might include:",
      options: [
        "The water came from a tap.",
        "The water is clear and fills the glass about halfway.",
        "The water tastes cold.",
        "The water was poured this morning."
      ],
      correct: 1,
      explanation: "Clarity and amount are facts you can observe safely. The others are inferences or unsafe senses."
    },

    // --- Using tools to observe ---
    {
      question: "Which statement uses a scientific TOOL to make an observation?",
      options: [
        "The rock looks old.",
        "The rock is probably heavy.",
        "The rock has a mass of 45 grams.",
        "The rock is beautiful."
      ],
      correct: 2,
      explanation: "Using a balance to measure mass is a tool-based observation. Tools make observations more precise."
    },
    {
      question: "Why do scientists use tools like magnifying glasses, rulers, and balances?",
      options: [
        "Because tools look professional",
        "Because tools make observations more precise and less dependent on opinion",
        "Because tools are required by law",
        "Because tools are fun"
      ],
      correct: 1,
      explanation: "Tools give exact measurements — 'smooth' becomes 'flat within 0.1 mm', and 'heavy' becomes '45 grams.' That precision is what makes science reliable."
    },

    // --- Reasoning about the practice ---
    {
      question: "Two students observe the same apple. Student A says 'it's red.' Student B says 'it's bright red, about 8 cm wide, with a small brown spot on the left side.' Whose observation is better?",
      options: [
        "Student A's — it's shorter",
        "Student B's — it has more specific, observable details",
        "They're equal",
        "Neither is useful"
      ],
      correct: 1,
      explanation: "Student B's observation gives precise details — color, size, and location of a feature. That's a much more useful record."
    },
    {
      question: "You describe an object as 'kind of blue.' How could you make this observation more useful?",
      options: [
        "Add an opinion about whether you like it",
        "Add specifics — what shade of blue, its size, what it feels like",
        "Delete the color observation",
        "Wait until tomorrow"
      ],
      correct: 1,
      explanation: "Specifics make observations repeatable. 'Kind of blue' becomes 'medium blue, matte finish, cool to the touch.'"
    }
  ],
};