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
    // --- Core definitions ---
    {
      question: "What is an INFERENCE?",
      options: [
        "Something you can see, hear, smell, touch, or measure",
        "An idea or explanation based on observations",
        "A measurement with a number and unit",
        "An opinion without any basis"
      ],
      correct: 1,
      explanation: "An inference is an explanation — you use what you observed plus what you already know to reach a conclusion."
    },
    {
      question: "What is the formula for making an inference?",
      options: [
        "Observation + Opinion = Inference",
        "Observation + Background Knowledge = Inference",
        "Question + Answer = Inference",
        "Data + Graph = Inference"
      ],
      correct: 1,
      explanation: "You combine what you observed with what you already know about the world to reach an inference."
    },
    {
      question: "Inferences are ALWAYS based on:",
      options: [
        "Opinions",
        "Observations",
        "Feelings",
        "Other inferences"
      ],
      correct: 1,
      explanation: "An inference explains an observation. Without an observation, it's just a wild guess."
    },

    // --- Identifying inferences vs observations ---
    {
      question: "A student sees a puddle on the playground. Which is an INFERENCE?",
      options: [
        "The puddle is 1 meter wide.",
        "The water is clear.",
        "The puddle is near the swings.",
        "It probably rained recently."
      ],
      correct: 3,
      explanation: "You didn't see it rain — you used background knowledge (wet ground often means rain) to infer it."
    },
    {
      question: "A student sees a jacket on the floor. Which is an INFERENCE?",
      options: [
        "The jacket is blue.",
        "The jacket has two sleeves.",
        "Someone probably forgot to pick it up.",
        "The jacket is next to a desk."
      ],
      correct: 2,
      explanation: "'Someone forgot it' is a guess based on facts. The others are direct observations."
    },
    {
      question: "Which statement is an inference?",
      options: [
        "The turtle has a hard shell.",
        "The turtle is 20 cm long.",
        "The turtle is probably cold.",
        "The turtle has four legs."
      ],
      correct: 2,
      explanation: "You can't directly measure a turtle's feelings. 'Probably cold' is a guess based on context — an inference."
    },
    {
      question: "Which one is NOT an inference?",
      options: [
        "The candle burned for a long time.",
        "The candle is short.",
        "The dog is hungry.",
        "It rained last night."
      ],
      correct: 1,
      explanation: "'The candle is short' is a fact — an observation. The others are explanations."
    },

    // --- Real-world scenarios ---
    {
      question: "A dog is wagging its tail. What is a reasonable inference?",
      options: [
        "The dog is sad.",
        "The dog is happy or excited.",
        "The dog is hungry.",
        "The dog is sick."
      ],
      correct: 1,
      explanation: "A wagging tail often means happy or excited — that's a common inference people make from experience."
    },
    {
      question: "You see wet grass in the morning. A good inference is:",
      options: [
        "The grass is green.",
        "The grass is 3 cm long.",
        "There was dew or rain overnight.",
        "The grass is healthy."
      ],
      correct: 2,
      explanation: "Wet grass → dew or rain is a reasonable inference (you didn't actually see the rain happen)."
    },
    {
      question: "You hear a loud crash in the kitchen. What's a reasonable inference?",
      options: [
        "The kitchen is quiet.",
        "It's 3 PM.",
        "Something probably fell or broke.",
        "The kitchen is yellow."
      ],
      correct: 2,
      explanation: "A loud crash suggests something fell — that's an inference from experience."
    },
    {
      question: "Your friend is carrying an umbrella. What's a good inference?",
      options: [
        "Your friend is 12 years old.",
        "Your friend has brown hair.",
        "Your friend thinks it might rain.",
        "Your friend is wearing a backpack."
      ],
      correct: 2,
      explanation: "Carrying an umbrella suggests expecting rain — that's the inference."
    },
    {
      question: "You see smoke coming from a chimney. What's a good inference?",
      options: [
        "The chimney is gray.",
        "Someone probably has a fire going inside.",
        "The chimney is tall.",
        "The chimney is on a house."
      ],
      correct: 1,
      explanation: "Smoke from a chimney suggests a fire inside — that's an inference."
    },
    {
      question: "A car is pulled over with its hazard lights on. What's a good inference?",
      options: [
        "The car is red.",
        "The car has four wheels.",
        "The car probably has a problem.",
        "The car has a license plate."
      ],
      correct: 2,
      explanation: "Hazard lights usually mean the car has trouble — that's an inference."
    },
    {
      question: "A bird is flying south in October. What's a good inference?",
      options: [
        "The bird is blue.",
        "The bird has a wingspan of 30 cm.",
        "The bird is migrating for the winter.",
        "The bird is above the trees."
      ],
      correct: 2,
      explanation: "Birds flying south in autumn is a clue that they're migrating — that's an inference."
    },
    {
      question: "Your pencil is missing from your desk. What's a good inference?",
      options: [
        "My pencil is yellow.",
        "My pencil is 15 cm long.",
        "Someone probably borrowed it.",
        "My pencil is sharp."
      ],
      correct: 2,
      explanation: "The pencil being missing is an observation. The explanation ('someone borrowed it') is an inference."
    },

    // --- Reasoning and critique ---
    {
      question: "Two students look at the same puddle. One says 'it must have rained.' The other says 'someone probably spilled water.' Both are:",
      options: [
        "Observations",
        "Inferences from the same observation",
        "Wrong",
        "Opinions"
      ],
      correct: 1,
      explanation: "One observation can lead to different inferences. That's why new evidence is useful to test which inference is correct."
    },
    {
      question: "Why can't you make an inference without an observation?",
      options: [
        "Because it's against the rules",
        "Because without evidence, it's just a wild guess, not an inference",
        "Because inferences require a tool",
        "Because inferences are always wrong"
      ],
      correct: 1,
      explanation: "An inference is an explanation OF something. Without an observation to explain, there's nothing to infer from."
    },
    {
      question: "A student says, 'I infer it rained last night because the sidewalk is wet.' What's the observation in this statement?",
      options: [
        "That it rained last night",
        "That the sidewalk is wet",
        "That the student made an inference",
        "That it's morning"
      ],
      correct: 1,
      explanation: "'The sidewalk is wet' is what was observed. The inference is 'it rained last night.'"
    },
    {
      question: "You infer that your friend is tired because they're yawning. Later you learn they stayed up late watching a movie. Your inference was:",
      options: [
        "Wrong because you didn't have proof",
        "Supported by new evidence — it matches what you learned",
        "Irrelevant",
        "A new inference"
      ],
      correct: 1,
      explanation: "New evidence can support or challenge an inference. Here the evidence (staying up late) supports the tired inference."
    },

    // --- Comparing to observations ---
    {
      question: "Which sentence describes something that can be directly SEEN or MEASURED (an observation, not an inference)?",
      options: [
        "The bird is probably looking for food.",
        "The bird has a red chest and blue wings.",
        "The bird must be cold.",
        "The bird wants to fly home."
      ],
      correct: 1,
      explanation: "You can directly see the bird's colors. The others are inferences about what the bird is thinking or feeling."
    },
    {
      question: "Ava notices the sidewalk is wet and says, 'It must have rained during the night.' What did Ava make?",
      options: [
        "An observation",
        "A measurement",
        "An inference",
        "A prediction"
      ],
      correct: 2,
      explanation: "Wet sidewalk = observation. 'It must have rained' = inference (the explanation for what she observed)."
    },
    {
      question: "Which of these is an OBSERVATION?",
      options: [
        "The rock is probably volcanic.",
        "The rock is rough and gray.",
        "The rock came from a volcano.",
        "The rock is very old."
      ],
      correct: 1,
      explanation: "'Rough and gray' is what you can directly see and feel. The others are inferences about the rock's history."
    }
  ],
};