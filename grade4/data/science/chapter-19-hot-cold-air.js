/* ==========================================================
   Science Chapter 19 — Hot & Cold Air: Convection Currents
   Earth's Systems unit, Atmosphere day 4 (11/5).
   Built from: Do Now, Einstein Wonders ("What does air do as it
   gets warmer or colder? How does that work?"), the Hot / Cold Air
   Lab sheet (question, materials, procedure, analysis, conclusion,
   variables), the hot air balloon videos, and Notes page 2
   (warm air rises / less dense, cool air sinks / more dense,
   convection currents are caused by uneven heating).
   The lab results (balloon grows in warm water, shrinks in cool
   water) are not written on the slides; they follow from the
   notes and are flagged in the review notes.
   Atmosphere packet due Monday 11/9.
   Extended with Atmosphere day 5 (11/6, "Convection"): Do Now (draw
   and explain hot vs. cold air molecules using expand, contract,
   more dense, less dense), Einstein Wonders ("What is convection?"),
   and the 3-step convection diagram (Sun warms ground → air warms
   and rises → air cools and sinks).
   ========================================================== */

export const chapter = {
  id: "chapter-19-hot-cold-air",
  name: "Hot & Cold Air: Convection Currents",
  shortName: "Hot & Cold Air",

  studyGuideHtml: `
    <h2>🌡️ Hot & Cold Air: Convection Currents</h2>
    <p><strong>Einstein Wonders:</strong> what does air do as it gets <strong>warmer</strong> or <strong>colder</strong>? How does that work? Today we found out with the <strong>Hot / Cold Air Lab</strong>, and learned how warm and cool air make <strong>convection currents</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Hot / Cold Air Lab 🎈</span>
        <div class="sg-def">
          <strong>Question:</strong> What happens when you heat or cool air?<br>
          <strong>Hypothesis / Prediction:</strong> "I think warm air will ___. I think cool air will ___." Write it <strong>after</strong> reading both sides of the lab sheet, in <strong>complete sentences</strong>.<br>
          <strong>Materials:</strong> a balloon, a water bottle with air inside, warm water, cool water.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Procedure 📝</span>
        <div class="sg-def">
          1. Fit a balloon over the <strong>opening (mouth)</strong> of the water bottle.<br>
          2. Place the bottle in the <strong>warm water</strong> and wait patiently.<br>
          3. <strong>Observe and record</strong>: draw a sketch and write a few sentences.<br>
          4. Once everyone has recorded, place the bottle in the <strong>cold water</strong>.<br>
          5. Observe and record again: sketch and sentences.<br><br>
          Then finish the <strong>Analysis</strong> (what did you notice?) and the <strong>Conclusion</strong> (WHY did the balloons look so different? What was going on with the molecules inside?).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Variables in the lab 🔬</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          • <strong>Independent variable</strong> (the variable we are changing): the <strong>temperature</strong> of the water around the bottle (warm or cool).<br>
          • <strong>Dependent variable</strong> (measured data): <strong>balloon size</strong>.<br>
          • <strong>Controlled variables</strong> (things kept the same): for example, the same bottle, the same balloon, and the same air inside.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Warm air ⬆️</span>
        <div class="sg-def" style="background:#FFEBEE;">
          • Warm air is <strong>less dense</strong>: its molecules are spread farther apart.<br>
          • Warm air (and warm water) <strong>rises</strong>.<br>
          • In the lab, the air in the bottle warms up and spreads out, so it pushes into the balloon and the balloon gets <strong>bigger</strong>.<br>
          • That's how a <strong>hot air balloon</strong> works: the hot air inside is less dense than the air around it, so the balloon rises.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Cool air ⬇️</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          • Cool air is <strong>more dense</strong>: its molecules are packed closer together.<br>
          • Cool air (and cool water) <strong>sinks</strong>.<br>
          • In the lab, the air in the bottle cools and takes up less space, so the balloon gets <strong>smaller</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Convection currents 🔄</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Warm air rises. Cool air sinks. Round and round it goes in a loop called a <strong>convection current</strong>.<br><br>
          <strong>Convection currents are caused by uneven heating.</strong> When some air (or water) is warmer than the air around it, the warm part rises and the cool part sinks to take its place.<br>
          This works for <strong>air and water</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Hot & cold molecules: science words 🗣️</span>
        <div class="sg-def" style="background:#E8F5E9;">
          Use these words to explain what air molecules do:<br>
          • <strong>Hot</strong> air molecules move <strong>faster</strong> and spread apart. The air <strong>expands</strong> (takes up more space) and becomes <strong>less dense</strong>.<br>
          • <strong>Cold</strong> air molecules move <strong>slower</strong> and get closer together. The air <strong>contracts</strong> (takes up less space) and becomes <strong>more dense</strong>.<br>
          That's exactly what the balloon showed: it grew when the air <strong>expanded</strong> and shrank when the air <strong>contracted</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">What is convection? ☀️</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>Convection:</strong> warm air rises, then cools off and sinks back down.<br>
          <strong>1.</strong> Energy from the <strong>Sun warms the ground</strong>.<br>
          <strong>2.</strong> The air near the ground <strong>warms and rises</strong>.<br>
          <strong>3.</strong> Up high, the air <strong>cools and sinks</strong>.<br>
          Then it gets warmed again, and the loop keeps going.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Mixing up which one rises. Remember: <strong>warm = rises = less dense</strong> 🔺 and <strong>cool = sinks = more dense</strong> 🔻. A hot air balloon goes <strong>up</strong> because the air inside is <strong>hot</strong>.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> You can't see air, but a balloon on a bottle lets you watch it change! Warm it and the balloon grows; cool it and the balloon shrinks. The air didn't go anywhere. It just spread out or squeezed together.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What question did the Hot / Cold Air Lab try to answer?",
      options: ["What happens when you heat or cool air?", "Does air have mass?", "How salty is ocean water?", "How fast does a balloon fall?"],
      correct: 0,
      explanation: "The lab question was: What happens when you heat or cool air?"
    },
    {
      question: "Warm air is ___ and it ___.",
      options: ["less dense; rises", "more dense; sinks", "less dense; sinks", "more dense; rises"],
      correct: 0,
      explanation: "Warm air is less dense, so it rises."
    },
    {
      question: "Cool air is ___ and it ___.",
      options: ["more dense; sinks", "less dense; rises", "more dense; rises", "less dense; sinks"],
      correct: 0,
      explanation: "Cool air is more dense, so it sinks."
    },
    {
      question: "Convection currents are caused by…",
      options: ["Uneven heating", "Air having no mass", "Salt in the water", "Mountains blocking the wind"],
      correct: 0,
      explanation: "Convection currents are caused by uneven heating: warm air rises and cool air sinks."
    },
    {
      question: "In the lab, what was the dependent variable (the measured data)?",
      options: ["Balloon size", "The temperature of the water", "The type of bottle", "The color of the balloon"],
      correct: 0,
      explanation: "The lab sheet says the dependent variable (measured data) is balloon size."
    }
  ],

  chapterQuiz: [
    // --- The lab: setup ---
    {
      question: "In the Do Now, when should you write your prediction in the hypothesis section?",
      options: ["After you have read both sides of the lab sheet", "Before you read the lab sheet", "After the lab is over", "You don't need to write one"],
      correct: 0,
      explanation: "Write the prediction AFTER you have read both sides of the lab sheet."
    },
    {
      question: "How should you write your hypothesis?",
      options: ["In complete sentences", "As one word", "As a drawing only", "As a number"],
      correct: 0,
      explanation: "The Do Now reminds you to use complete sentences."
    },
    {
      question: "The hypothesis section of the lab sheet starts with…",
      options: ["\"I think warm air will…\" and \"I think cool air will…\"", "\"The answer is…\"", "\"I measured…\"", "\"In conclusion…\""],
      correct: 0,
      explanation: "The prediction lines are \"I think warm air will ___\" and \"I think cool air will ___.\""
    },
    {
      question: "Which item is NOT on the lab's materials list?",
      options: ["A thermometer", "A balloon", "A water bottle with air inside", "Warm water"],
      correct: 0,
      explanation: "The materials are a balloon, a water bottle with air inside, warm water and cool water."
    },
    {
      question: "What is inside the water bottle in the lab?",
      options: ["Air", "Warm water", "Salt", "Sand"],
      correct: 0,
      explanation: "The materials list says a water bottle with air inside. The air is what we're testing."
    },

    // --- The lab: procedure ---
    {
      question: "What is step 1 of the procedure?",
      options: ["Fit a balloon over the opening (mouth) of the water bottle", "Put the bottle in cold water", "Draw a sketch", "Pop the balloon"],
      correct: 0,
      explanation: "Step 1: Be sure a balloon is fitted over the opening (mouth) of your water bottle."
    },
    {
      question: "Where does the bottle go FIRST?",
      options: ["Into the warm water", "Into the cold water", "Into the freezer", "In the sunlight"],
      correct: 0,
      explanation: "Step 2: Place your water bottle inside the warm water and wait patiently."
    },
    {
      question: "When does the bottle go into the cold water?",
      options: ["Once everyone has recorded what happened in the warm water", "Before it goes in the warm water", "At the same time as the warm water", "Never"],
      correct: 0,
      explanation: "Step 4: Once everyone has recorded, place the water bottle into the cold water."
    },
    {
      question: "How do you record your observations in the lab?",
      options: ["Draw a sketch and write a few sentences", "Only take a photo", "Only write a number", "You don't record anything"],
      correct: 0,
      explanation: "Steps 3 and 5: Observe and record what is happening. Draw a sketch and write a few sentences."
    },
    {
      question: "The Conclusion asks you to explain…",
      options: ["Why the balloons looked so different, and what was going on with the molecules inside", "What color the balloon was", "How much the bottle cost", "How long the class took"],
      correct: 0,
      explanation: "Conclusion: Explain what happened. WHY did the balloons look so different? What was going on with the molecules inside?"
    },
    {
      question: "The \"What did you notice?\" part of the lab sheet is the…",
      options: ["Analysis", "Materials", "Hypothesis", "Question"],
      correct: 0,
      explanation: "The Analysis section asks: What did you notice?"
    },

    // --- Variables ---
    {
      question: "The independent variable is the variable we are…",
      options: ["Changing", "Measuring", "Keeping the same", "Ignoring"],
      correct: 0,
      explanation: "The lab sheet says the independent variable is the variable we are changing."
    },
    {
      question: "In the Hot / Cold Air Lab, what is the independent variable?",
      options: ["The temperature of the water (warm or cool)", "Balloon size", "The bottle", "The balloon color"],
      correct: 0,
      explanation: "We change whether the bottle sits in warm or cool water, so temperature is the independent variable."
    },
    {
      question: "In the lab, the dependent variable (measured data) is…",
      options: ["Balloon size", "Water temperature", "The kind of bottle", "The time of day"],
      correct: 0,
      explanation: "The lab sheet says: Dependent Variable (measured data) = balloon size."
    },
    {
      question: "Controlled variables are…",
      options: ["Things kept the same", "Things we change on purpose", "The data we measure", "The question we ask"],
      correct: 0,
      explanation: "The lab sheet says controlled variables are things kept the same."
    },
    {
      question: "Which would be a CONTROLLED variable in this lab?",
      options: ["Using the same balloon and bottle for warm and cool water", "Changing from warm water to cool water", "How big the balloon gets", "Whether the balloon grows or shrinks"],
      correct: 0,
      explanation: "Keeping the same balloon and bottle the whole time is a thing kept the same, so it's a controlled variable."
    },

    // --- Warm air ---
    {
      question: "What happens to the balloon when the bottle is in WARM water?",
      options: ["It gets bigger", "It gets smaller", "It pops right away", "Nothing happens"],
      correct: 0,
      explanation: "The air in the bottle warms and spreads out. It pushes into the balloon, so the balloon gets bigger."
    },
    {
      question: "According to the notes, warm air…",
      options: ["Rises", "Sinks", "Stays still", "Turns into water"],
      correct: 0,
      explanation: "Notes page 2: warm air, air/water rises, less dense."
    },
    {
      question: "Compared with cool air, warm air is…",
      options: ["Less dense", "More dense", "Exactly as dense", "Heavier"],
      correct: 0,
      explanation: "Warm air is less dense than cool air."
    },
    {
      question: "In warm, less dense air, the molecules are…",
      options: ["Spread farther apart", "Packed closer together", "Gone", "Frozen"],
      correct: 0,
      explanation: "Less dense means fewer molecules in the same space, so the molecules are spread farther apart."
    },
    {
      question: "Why does a hot air balloon rise?",
      options: ["The hot air inside is less dense than the air around it", "The hot air inside is more dense", "The basket is very light", "Cold air pushes it from above"],
      correct: 0,
      explanation: "Warm air is less dense and rises, so a balloon full of hot air goes up."
    },
    {
      question: "Warm WATER, like warm air, tends to…",
      options: ["Rise", "Sink", "Freeze", "Disappear"],
      correct: 0,
      explanation: "The notes say warm air / water rises."
    },

    // --- Cool air ---
    {
      question: "What happens to the balloon when the bottle is moved into COLD water?",
      options: ["It gets smaller", "It gets bigger", "It floats away", "It changes color"],
      correct: 0,
      explanation: "The air in the bottle cools and takes up less space, so the balloon gets smaller."
    },
    {
      question: "According to the notes, cool air…",
      options: ["Sinks", "Rises", "Spreads out", "Turns into a gas"],
      correct: 0,
      explanation: "Notes page 2: cool air, air/water sinks, more dense."
    },
    {
      question: "Compared with warm air, cool air is…",
      options: ["More dense", "Less dense", "Exactly as dense", "Empty"],
      correct: 0,
      explanation: "Cool air is more dense than warm air."
    },
    {
      question: "In cool, more dense air, the molecules are…",
      options: ["Packed closer together", "Spread farther apart", "Not there at all", "Bigger"],
      correct: 0,
      explanation: "More dense means more molecules in the same space, so they are closer together."
    },
    {
      question: "In the lab, did any air leave or enter the bottle when it changed size?",
      options: ["No, the same air just spread out or squeezed together", "Yes, air leaked out through the plastic", "Yes, water went into the balloon", "Yes, new air came from the water"],
      correct: 0,
      explanation: "The balloon sealed the bottle. The same air spread out when warm and squeezed together when cool."
    },

    // --- Convection currents ---
    {
      question: "What causes convection currents?",
      options: ["Uneven heating", "Even heating everywhere", "Salt", "Gravity alone"],
      correct: 0,
      explanation: "Convection currents are caused by uneven heating."
    },
    {
      question: "In a convection current, warm air ___ and cool air ___.",
      options: ["rises; sinks", "sinks; rises", "rises; rises", "sinks; sinks"],
      correct: 0,
      explanation: "Warm air rises and cool air sinks, making a loop."
    },
    {
      question: "Convection currents can happen in…",
      options: ["Air and water", "Only air", "Only water", "Only solid rock"],
      correct: 0,
      explanation: "The notes say air / water rises and air / water sinks, so convection happens in both air and water."
    },
    {
      question: "On the convection diagram, the red arrow going UP stands for…",
      options: ["Warm air rising", "Cool air sinking", "Rain falling", "Wind blowing sideways"],
      correct: 0,
      explanation: "Red = warm. The warm side shows air/water rising."
    },
    {
      question: "On the convection diagram, the blue arrow going DOWN stands for…",
      options: ["Cool air sinking", "Warm air rising", "The sun's rays", "Snow melting"],
      correct: 0,
      explanation: "Blue = cool. The cool side shows air/water sinking."
    },
    {
      question: "Which matches the notes?",
      options: [
        "Warm: rises, less dense. Cool: sinks, more dense.",
        "Warm: sinks, more dense. Cool: rises, less dense.",
        "Warm: rises, more dense. Cool: sinks, less dense.",
        "Warm and cool air behave the same."
      ],
      correct: 0,
      explanation: "Notes page 2: warm air rises and is less dense; cool air sinks and is more dense."
    },

    // --- Day 5: science words and convection steps ---
    {
      question: "When air gets hot, it…",
      options: ["Expands and becomes less dense", "Contracts and becomes more dense", "Expands and becomes more dense", "Contracts and becomes less dense"],
      correct: 0,
      explanation: "Hot air molecules move faster and spread apart, so the air expands and becomes less dense."
    },
    {
      question: "When air gets cold, it…",
      options: ["Contracts and becomes more dense", "Expands and becomes less dense", "Contracts and becomes less dense", "Expands and becomes more dense"],
      correct: 0,
      explanation: "Cold air molecules move slower and get closer together, so the air contracts and becomes more dense."
    },
    {
      question: "\"Contract\" means the air…",
      options: ["Takes up less space", "Takes up more space", "Gets hotter", "Rises"],
      correct: 0,
      explanation: "When air contracts, its molecules get closer together and it takes up less space."
    },
    {
      question: "Which best describes convection?",
      options: ["Warm air rises, then cools off and sinks back down", "Cool air rises, then warms up and sinks", "Air stays in one place", "Water turns into ice"],
      correct: 0,
      explanation: "The class definition: convection is when warm air rises, then cools off and sinks back down."
    },
    {
      question: "In the convection diagram, what is step 1?",
      options: ["Energy from the Sun warms the ground", "Air cools and sinks", "Air warms and rises", "Rain falls on the ground"],
      correct: 0,
      explanation: "Step 1: energy from the Sun warms the ground. Step 2: air warms and rises. Step 3: air cools and sinks."
    },
    {
      question: "In the convection diagram, what happens right AFTER the air warms and rises?",
      options: ["The air cools and sinks", "The Sun warms the ground", "The air stops moving", "The air turns into water"],
      correct: 0,
      explanation: "After air warms and rises (step 2), it cools and sinks (step 3)."
    }
  ],

  skills: [
    {
      key: "hot-cold-air-lab",
      label: "The Hot / Cold Air Lab",
      remember: "Question: What happens when you heat or cool air? A balloon goes over the mouth of a bottle of air. Warm water first, then cold water; sketch and write sentences each time. Independent variable = water temperature (what we change). Dependent variable = balloon size (measured data). Controlled variables = things kept the same.",
      workedExample: "Bottle in warm water → balloon grows\nBottle in cold water → balloon shrinks\nDependent variable → balloon size"
    },
    {
      key: "warm-cool-air-density",
      label: "Warm air vs. cool air",
      remember: "Warm air is less dense (molecules spread apart) and rises, like a hot air balloon. Cool air is more dense (molecules closer together) and sinks. The same goes for warm and cool water.",
      workedExample: "Warm → rises, less dense 🔺\nCool → sinks, more dense 🔻\nHot air balloon → goes up"
    },
    {
      key: "convection-currents",
      label: "Convection currents",
      remember: "Convection currents are caused by uneven heating. Warm air (or water) rises, cool air (or water) sinks, and the loop keeps going.",
      workedExample: "Uneven heating → warm part rises\nCool part sinks to take its place\n→ a convection current loop"
    },
    {
      key: "expand-contract-convection-steps",
      label: "Expand, contract & the steps of convection",
      remember: "Hot air molecules move faster and spread apart: the air expands and is less dense. Cold air molecules move slower and get closer: the air contracts and is more dense. Convection: (1) the Sun warms the ground, (2) air warms and rises, (3) air cools and sinks.",
      workedExample: "Hot → expand → less dense → rises\nCold → contract → more dense → sinks\nSun warms ground → air rises → air cools and sinks"
    }
  ]
};
