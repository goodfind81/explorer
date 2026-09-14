/* ==========================================================
   Chapter 3 — Making Inferences
   ========================================================== */

export const chapter = {
  id: "chapter-03-inferences",
  name: "Making Inferences",
  shortName: "Inferences",

  studyGuideHtml: `
    <h2>🧠 Making Inferences</h2>
    <p>An inference is a "wise guess" that explains what you observed. You use your <strong>background knowledge</strong> plus your <strong>observations</strong> to figure out what's going on.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Definition</span>
        <div class="sg-def">An idea or explanation based on observations. Inferences are ALWAYS based on something you observed.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Formula</span>
        <div class="sg-def" style="background:#F3E5F5; border-left-color: var(--primary-purple);">
          <strong>Observation + Background Knowledge = Inference</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Examples ✅</span>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Observation:</strong> "The sidewalk is wet."<br><strong>→ Inference:</strong> "It probably rained."</div>
          <div class="sg-ex"><strong>✅ Observation:</strong> "The jacket is on the floor."<br><strong>→ Inference:</strong> "Someone forgot to pick it up."</div>
          <div class="sg-ex"><strong>✅ Observation:</strong> "The dog is wagging its tail."<br><strong>→ Inference:</strong> "The dog is happy."</div>
          <div class="sg-ex"><strong>✅ Observation:</strong> "The candle is burnt down."<br><strong>→ Inference:</strong> "It burned for a long time."</div>
          <div class="sg-ex"><strong>✅ Observation:</strong> "The puddle has dried a little."<br><strong>→ Inference:</strong> "The sun has been out for a while."</div>
          <div class="sg-ex"><strong>✅ Observation:</strong> "The tree's leaves are brown."<br><strong>→ Inference:</strong> "It's autumn or the tree is sick."</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Non-examples ❌ (These are just observations)</span>
        <div class="sg-examples">
          <div class="sg-nonex"><strong>❌ Just an observation</strong>"The puddle is 1 meter wide."</div>
          <div class="sg-nonex"><strong>❌ Just an observation</strong>"The water is clear."</div>
          <div class="sg-nonex"><strong>❌ Just an observation</strong>"The dog has brown fur."</div>
          <div class="sg-nonex"><strong>❌ Just an observation</strong>"The candle is 5 cm tall."</div>
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why can't you infer without an observation? Because then it's just a wild guess! A good inference needs facts to build on.</div>
    </div>

    <h3>📝 How to Write an Inference</h3>
    <ul>
      <li>Start with <strong>"I infer..."</strong></li>
      <li>Add <strong>"because"</strong> to explain your reasoning.</li>
      <li>Example: "I infer the sidewalk is wet from rain because it's cloudy and water is everywhere."</li>
    </ul>

    <div class="highlight">
      <strong>Remember:</strong> Observation = what you see. Inference = what you think it means.
    </div>

    <h3>🎬 Real-Life Inference Examples</h3>
    <ul>
      <li><strong>You see:</strong> muddy paw prints on the floor.<br><strong>You infer:</strong> A dog went outside and came back in.</li>
      <li><strong>You see:</strong> your friend yawning in class.<br><strong>You infer:</strong> Your friend is tired.</li>
      <li><strong>You hear:</strong> thunder in the distance.<br><strong>You infer:</strong> A storm is coming.</li>
      <li><strong>You smell:</strong> cookies baking.<br><strong>You infer:</strong> Someone is making cookies in the kitchen.</li>
    </ul>
  `,

  miniCheck: [
    { question: "Which statement is an INFERENCE?",
      options: ["The jacket is blue.", "The jacket has two sleeves.", "Someone probably forgot to pick up the jacket.", "The jacket is next to a desk."],
      correct: 2,
      explanation: "The first, second, and fourth are facts. 'Someone forgot it' is a guess based on those facts — that's an inference." },

    { question: "You see a puddle on the ground. Which is an inference?",
      options: ["The puddle is 1 meter wide.", "The water is clear.", "It probably rained recently.", "The puddle is near the swings."],
      correct: 2,
      explanation: "You didn't see it rain — you used background knowledge to infer it." },

    { question: "Which one is NOT an inference?",
      options: ["The dog is happy because its tail is wagging.", "It's going to rain because the sky is dark.", "The tree is tall and green.", "Someone is baking because I smell cookies."],
      correct: 2,
      explanation: "'Tall and green' is a direct observation — no explanation or guess." },

    { question: "What is the formula for making an inference?",
      options: ["Observation + Opinion = Inference", "Observation + Background Knowledge = Inference", "Question + Answer = Inference", "Data + Graph = Inference"],
      correct: 1,
      explanation: "An inference combines what you observe with what you already know about the world." },

    { question: "A student says, 'The candle is burnt down.' What is a good inference?",
      options: ["The candle is short.", "The candle is white.", "It burned for a long time.", "The candle is on the table."],
      correct: 2,
      explanation: "The observation is 'the candle is burnt down.' The inference is the explanation — 'it burned for a long time.'" },
  ],

  chapterQuiz: [
    { question: "A student sees a puddle. Which is an INFERENCE?",
      options: ["The puddle is 1 meter wide.", "The water is clear.", "The puddle is near the swings.", "It probably rained recently."],
      correct: 3,
      explanation: "You didn't see it rain — you used background knowledge to infer it." },

    { question: "A student sees a jacket on the floor. Which is an INFERENCE?",
      options: ["The jacket is blue.", "The jacket has two sleeves.", "Someone probably forgot to pick it up.", "The jacket is next to a desk."],
      correct: 2,
      explanation: "'Someone forgot it' is a guess based on facts — that's an inference." },

    { question: "Inferences are ALWAYS based on:",
      options: ["Opinions", "Observations", "Feelings", "Other inferences"],
      correct: 1,
      explanation: "An inference explains an observation. Without an observation, it's just a wild guess." },

    { question: "Observation + Background Knowledge = ?",
      options: ["Hypothesis", "Inference", "Question", "Tool"],
      correct: 1,
      explanation: "Observations combined with what you already know create an inference." },

    { question: "A dog is wagging its tail. What is a reasonable inference?",
      options: ["The dog is sad.", "The dog is happy or excited.", "The dog is hungry.", "The dog is sick."],
      correct: 1,
      explanation: "A wagging tail often means a happy or excited dog — that's a common inference." },

    { question: "Which statement is an inference?",
      options: ["The turtle has a hard shell.", "The turtle is 20 cm long.", "The turtle is probably cold.", "The turtle has four legs."],
      correct: 2,
      explanation: "You can't directly measure a turtle's feelings — 'probably cold' is a guess, an inference." },

    { question: "You see wet grass in the morning. A good inference is:",
      options: ["The grass is green.", "The grass is 3 cm long.", "There was dew or rain overnight.", "The grass is healthy."],
      correct: 2,
      explanation: "Wet grass is a clue (observation). Dew or rain is a reasonable explanation (inference)." },

    { question: "Which one is NOT an inference?",
      options: ["The candle burned for a long time.", "The candle is short.", "The dog is hungry.", "It rained last night."],
      correct: 1,
      explanation: "'The candle is short' is a fact — an observation. The others are explanations or guesses." },

    { question: "Inference helps scientists because it lets them:",
      options: ["Skip experiments", "Explain what they observed", "Avoid data", "Guess randomly"],
      correct: 1,
      explanation: "Inferences let scientists offer explanations for their observations and guide new questions." },

    { question: "A good inference starts with the words:",
      options: ["I see...", "I infer...", "I measure...", "I count..."],
      correct: 1,
      explanation: "Starting with 'I infer...' makes it clear that you're offering an explanation, not an observation." },

    { question: "You see a bird flying south in October. What's a good inference?",
      options: ["The bird is blue.", "The bird has a wingspan of 30 cm.", "The bird is migrating for the winter.", "The bird is above the trees."],
      correct: 2,
      explanation: "Birds flying south in autumn is a clue that they're migrating — that's an inference." },

    { question: "Which pair correctly shows Observation → Inference?",
      options: [
        "The cake is gone → The cake was probably eaten",
        "The cake was eaten → The cake is gone",
        "The cake looks good → The cake is 20 cm wide",
        "The cake has candles → The cake has 5 candles"
      ],
      correct: 0,
      explanation: "Observation: the cake is gone. Inference: someone probably ate it." },

    { question: "You hear a loud crash in the kitchen. What's a reasonable inference?",
      options: ["The kitchen is quiet.", "It's 3 PM.", "Something probably fell or broke.", "The kitchen is yellow."],
      correct: 2,
      explanation: "A loud crash suggests something fell — that's an inference." },

    { question: "Your friend is carrying an umbrella. What's a good inference?",
      options: ["Your friend is 12 years old.", "Your friend has brown hair.", "Your friend thinks it might rain.", "Your friend is wearing a backpack."],
      correct: 2,
      explanation: "Carrying an umbrella suggests expecting rain — that's an inference." },

    { question: "Which is an OBSERVATION, not an inference?",
      options: ["The soup is too salty.", "The soup is probably cold.", "The soup has carrots and potatoes.", "The soup needs more pepper."],
      correct: 2,
      explanation: "Seeing and naming the vegetables is a fact. The others are opinions or inferences." },

    { question: "Your pencil is missing from your desk. What's a good inference?",
      options: ["My pencil is yellow.", "My pencil is 15 cm long.", "Someone probably borrowed it.", "My pencil is sharp."],
      correct: 2,
      explanation: "The pencil being missing is an observation. Someone probably borrowing it is a reasonable inference." },

    { question: "Which best explains why inferences must be based on observations?",
      options: [
        "Because inferences without observations are just wild guesses",
        "Because observations are more fun",
        "Because inferences need graphs",
        "Because teachers said so"
      ],
      correct: 0,
      explanation: "An inference is an explanation of what you observed. Without an observation, it's just a guess." },

    { question: "You see smoke coming from a chimney. What's a good inference?",
      options: ["The chimney is gray.", "Someone probably has a fire going inside.", "The chimney is tall.", "The chimney is on a house."],
      correct: 1,
      explanation: "Smoke from a chimney suggests a fire inside — that's an inference." },

    { question: "A car is pulled over with its hazard lights on. What's a good inference?",
      options: ["The car is red.", "The car has four wheels.", "The car probably has a problem.", "The car has a license plate."],
      correct: 2,
      explanation: "Hazard lights usually mean the car has trouble — that's an inference." },

    { question: "Why do scientists need BOTH observations and inferences?",
      options: [
        "Only observations matter",
        "Only inferences matter",
        "Observations give facts, inferences give explanations — both help us understand",
        "Neither is important"
      ],
      correct: 2,
      explanation: "Observations give us facts, and inferences give us explanations. Together they help us understand the world." },
  ],
};