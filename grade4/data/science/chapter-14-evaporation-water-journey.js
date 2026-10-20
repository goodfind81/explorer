/* ==========================================================
   Science Chapter 14 — Surface Area, Water Use & the
   Incredible Journey
   Earth's Systems unit. Follows Chapter 13 (Fresh Water).
   Hydrosphere days 10–12: the Surface-Area Experiment
   (how surface area affects evaporation, with variables),
   the Wasting Water chart (how much water daily activities
   use), and the Incredible Journey game (water storage
   locations, % = number ÷ 30 × 100%, pie chart).
   ========================================================== */

export const chapter = {
  id: "chapter-14-evaporation-water-journey",
  name: "Surface Area, Water Use & the Incredible Journey",
  shortName: "Water Journey",

  studyGuideHtml: `
    <h2>🎲 Surface Area, Water Use & the Incredible Journey</h2>
    <p>Water is always on the move. When liquid water <strong>evaporates</strong>, it turns into <strong>water vapor</strong> in the air. It can come back as a <strong>liquid</strong> when it cools, or as a <strong>solid</strong> if it cools below the freezing point of water. In these lessons you tested what makes water evaporate faster, counted how much water you use, and followed one drop on its journey around Earth.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Surface-Area Experiment 🧪</span>
        <div class="sg-def">
          Julie and Art wanted to find out <strong>how surface area affects evaporation</strong>.<br><br>
          • <strong>Surface area</strong> of the water = how much of the water's top is open to the air.<br>
          • Julie <strong>traced around each box</strong> on graph paper. The lines were <strong>1 centimeter (cm)</strong> apart. A bigger tracing means a bigger surface area.<br>
          • They numbered the boxes. <strong>Box 1 had the smallest surface area.</strong><br>
          • They put <strong>50 milliliters (mL)</strong> of water into each box and placed all four boxes on the counter <strong>by a window</strong>.<br>
          • <strong>One week later</strong> they measured the water left in each box.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The results (T-table)</span>
        <div class="sg-def">
          <table style="border-collapse:collapse; margin:6px 0;">
            <tr><th style="padding:2px 10px; text-align:left;">Box</th><th style="padding:2px 10px;">Water at start</th><th style="padding:2px 10px;">Water left after 1 week</th><th style="padding:2px 10px;">Water that evaporated</th></tr>
            <tr><td style="padding:2px 10px;">1 (smallest surface area)</td><td style="padding:2px 10px; text-align:center;">50 mL</td><td style="padding:2px 10px; text-align:center;">46 mL</td><td style="padding:2px 10px; text-align:center;">4 mL</td></tr>
            <tr><td style="padding:2px 10px;">2</td><td style="padding:2px 10px; text-align:center;">50 mL</td><td style="padding:2px 10px; text-align:center;">42 mL</td><td style="padding:2px 10px; text-align:center;">8 mL</td></tr>
            <tr><td style="padding:2px 10px;">3</td><td style="padding:2px 10px; text-align:center;">50 mL</td><td style="padding:2px 10px; text-align:center;">34 mL</td><td style="padding:2px 10px; text-align:center;">16 mL</td></tr>
            <tr><td style="padding:2px 10px;">4</td><td style="padding:2px 10px; text-align:center;">50 mL</td><td style="padding:2px 10px; text-align:center;">18 mL</td><td style="padding:2px 10px; text-align:center;">32 mL</td></tr>
          </table>
          <strong>Water that evaporated = 50 mL − water left.</strong><br>
          To organize their results, they made a <strong>T-table</strong>, made a <strong>graph</strong>, and <strong>described what they learned</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">What the data show</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          The box with the <strong>smallest</strong> surface area (Box 1) lost the <strong>least</strong> water. As the surface area got <strong>bigger</strong>, <strong>more</strong> water evaporated.<br><br>
          <strong>More surface area → more evaporation.</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Variables in the experiment</span>
        <div class="sg-def">
          • <strong>Independent variable</strong> (what they changed): the <strong>surface area</strong> of the water (the size of the box).<br>
          • <strong>Dependent variable</strong> (what they measured): the <strong>amount of water that evaporated</strong> (found by measuring the water left).<br>
          • <strong>Controlled variables</strong> (kept the same): the <strong>amount of water</strong> (50 mL in each box), the <strong>place</strong> (the counter by the window), and the <strong>time</strong> (one week).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Wasting Water 🚿 — how much do we use?</span>
        <div class="sg-def">
          A big soda bottle holds <strong>2 liters</strong>. Here is how much water some activities normally use:<br><br>
          🚿 Showering — <strong>95 liters</strong><br>
          🛁 Bathing — <strong>150 liters</strong><br>
          🪥 Brushing teeth — <strong>18 liters</strong><br>
          🧼 Washing hands — <strong>8 liters</strong><br>
          🍽️ Dishwasher — <strong>60 liters</strong><br>
          👕 Washing clothes — <strong>220 liters</strong><br><br>
          To find the water you use in a day, <strong>add</strong> the amounts for each activity you do. Then <strong>compare</strong> the total with your hypothesis (your prediction).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Incredible Journey 🎲</span>
        <div class="sg-def">
          You played a water drop moving between <strong>water storage locations</strong>:<br><br>
          🌊 Oceans · ❄️ Glaciers · ☁️ Clouds · 🕳️ Groundwater · 🏞️ Lakes · 🏞️ Rivers · 🟫 Soil · 🌱 Plants · 🐾 Animals<br><br>
          • You <strong>rolled 30 times</strong>.<br>
          • You colored a square for <strong>EVERY roll</strong>, even when you <strong>stayed in the same location</strong>.<br>
          • <strong>Every journey is unique!</strong> No two drops travel exactly the same path.<br>
          • Water can move from <strong>animals to the soil</strong> by <strong>excretion</strong> (animals getting rid of waste).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Turning your journey into percents</span>
        <div class="sg-def" style="background:#FFF9C4;">
          1. <strong>Count</strong> the number of times you were in each location.<br>
          2. <strong>Calculate %:</strong> &nbsp; % = (Number ÷ 30) × 100%<br>
          3. <strong>Check your work:</strong> all your percents should <strong>add up to 100%</strong>.<br>
          4. <strong>Make a pie chart</strong> of your journey.<br><br>
          <strong>Example:</strong> You were in the Oceans 6 times.<br>
          6 ÷ 30 = 0.2 → 0.2 × 100% = <strong>20%</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> In the Surface-Area Experiment, Box 4 had the <strong>least water left</strong> (18 mL), but that means it had the <strong>most evaporation</strong> (32 mL). Water <em>left</em> and water <em>evaporated</em> are opposites: always subtract from 50 mL. And in the Incredible Journey, don't skip a square when you stay in the same place, or your numbers won't add up to 30!
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> In the Surface-Area Experiment, every box started with the same 50 mL, but Box 4 lost 8 times as much water as Box 1 (32 mL vs. 4 mL). Same water, same window, same week. The only thing that changed was how much of the water touched the air!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What did Julie and Art want to find out in their experiment?",
      options: [
        "How surface area affects evaporation",
        "How salt affects freezing",
        "How plants drink water",
        "How fast rivers flow"
      ],
      correct: 0,
      explanation: "Julie and Art wanted to find out how surface area affects evaporation."
    },
    {
      question: "Box 3 started with 50 mL and had 34 mL left after one week. How much water evaporated?",
      options: ["16 mL", "34 mL", "84 mL", "14 mL"],
      correct: 0,
      explanation: "50 mL − 34 mL = 16 mL evaporated."
    },
    {
      question: "Which activity on the Wasting Water chart uses the MOST water?",
      options: ["Washing clothes", "Bathing", "Showering", "Dishwasher"],
      correct: 0,
      explanation: "Washing clothes uses 220 liters, more than any other activity on the chart."
    },
    {
      question: "In the Incredible Journey, you were in the Clouds 3 times out of 30 rolls. What percent is that?",
      options: ["10%", "3%", "30%", "33%"],
      correct: 0,
      explanation: "3 ÷ 30 = 0.1, and 0.1 × 100% = 10%."
    },
    {
      question: "In the Incredible Journey, how does water move from animals to the soil?",
      options: ["Excretion", "Condensation", "Freezing", "Precipitation"],
      correct: 0,
      explanation: "Water moves from animals to the soil by excretion, when animals get rid of waste."
    }
  ],

  chapterQuiz: [
    // --- Evaporation ---
    {
      question: "When liquid water evaporates, what does it turn into?",
      options: ["Water vapor in the air", "Ice", "Salt", "Groundwater"],
      correct: 0,
      explanation: "When liquid water evaporates, it turns into water vapor in the air."
    },
    {
      question: "Water vapor can turn back into liquid water when it is…",
      options: ["Cooled", "Heated", "Stirred", "Salted"],
      correct: 0,
      explanation: "Water vapor can reappear as a liquid when it is cooled."
    },
    {
      question: "Water vapor becomes a solid if it is cooled below…",
      options: ["The freezing point of water", "Room temperature", "The boiling point of water", "The temperature of the ocean"],
      correct: 0,
      explanation: "Water vapor can reappear as a solid if it is cooled below the freezing point of water."
    },

    // --- Surface-Area Experiment setup ---
    {
      question: "How did Julie measure the surface area of each box?",
      options: [
        "She traced around each box on graph paper",
        "She weighed each box",
        "She filled each box with sand",
        "She guessed by looking"
      ],
      correct: 0,
      explanation: "Julie traced around each box on graph paper. The lines on the graph paper were 1 cm apart."
    },
    {
      question: "How far apart were the lines on Julie's graph paper?",
      options: ["1 centimeter", "1 meter", "1 inch", "10 centimeters"],
      correct: 0,
      explanation: "The lines on the graph paper were 1 centimeter (cm) apart."
    },
    {
      question: "How much water did Julie and Art put into EACH box?",
      options: ["50 mL", "46 mL", "100 mL", "18 mL"],
      correct: 0,
      explanation: "They put 50 milliliters (mL) of water into each box."
    },
    {
      question: "Which box had the SMALLEST surface area?",
      options: ["Box 1", "Box 2", "Box 3", "Box 4"],
      correct: 0,
      explanation: "The box with the smallest surface area was numbered Box 1."
    },
    {
      question: "Where did Julie and Art place the four boxes?",
      options: ["On the counter by a window", "In the freezer", "Outside in the rain", "In a dark closet"],
      correct: 0,
      explanation: "They placed all four boxes on the counter by a window."
    },
    {
      question: "How long did Julie and Art wait before measuring the water again?",
      options: ["One week", "One hour", "One day", "One month"],
      correct: 0,
      explanation: "One week later, Julie and Art measured the amount of water in each box."
    },

    // --- Results ---
    {
      question: "After one week, Box 1 had 46 mL left. How much water evaporated from Box 1?",
      options: ["4 mL", "46 mL", "96 mL", "6 mL"],
      correct: 0,
      explanation: "50 mL − 46 mL = 4 mL evaporated."
    },
    {
      question: "After one week, Box 2 had 42 mL left. How much water evaporated from Box 2?",
      options: ["8 mL", "42 mL", "12 mL", "92 mL"],
      correct: 0,
      explanation: "50 mL − 42 mL = 8 mL evaporated."
    },
    {
      question: "After one week, Box 4 had 18 mL left. How much water evaporated from Box 4?",
      options: ["32 mL", "18 mL", "68 mL", "28 mL"],
      correct: 0,
      explanation: "50 mL − 18 mL = 32 mL evaporated."
    },
    {
      question: "Which box had the MOST water evaporate?",
      options: ["Box 4", "Box 1", "Box 2", "Box 3"],
      correct: 0,
      explanation: "Box 4 had only 18 mL left, so 32 mL evaporated, more than any other box."
    },
    {
      question: "Which box had the LEAST water evaporate?",
      options: ["Box 1", "Box 2", "Box 3", "Box 4"],
      correct: 0,
      explanation: "Box 1 had 46 mL left, so only 4 mL evaporated, the least of all the boxes."
    },
    {
      question: "What do Julie and Art's results show?",
      options: [
        "The bigger the surface area, the more water evaporated",
        "The bigger the surface area, the less water evaporated",
        "Surface area made no difference",
        "No water evaporated at all"
      ],
      correct: 0,
      explanation: "Box 1 (smallest surface area) lost 4 mL and the boxes lost more as the surface area got bigger: 8, 16, then 32 mL."
    },
    {
      question: "Which THREE things did Julie and Art decide to do to organize their results?",
      options: [
        "Make a T-table, make a graph, and describe what they learned",
        "Draw a map, write a poem, and sing a song",
        "Add salt, freeze the boxes, and measure again",
        "Throw away the data and start over"
      ],
      correct: 0,
      explanation: "They decided to make a T-table to display their data, make a graph of their data, and describe what they learned."
    },

    // --- Variables ---
    {
      question: "What was the INDEPENDENT variable in Julie and Art's experiment?",
      options: [
        "The surface area of the water",
        "The amount of water that evaporated",
        "The amount of water at the start",
        "The place they put the boxes"
      ],
      correct: 0,
      explanation: "The independent variable is what they changed on purpose: the surface area (the size of the box)."
    },
    {
      question: "What was the DEPENDENT variable in Julie and Art's experiment?",
      options: [
        "The amount of water that evaporated",
        "The surface area of the water",
        "The graph paper",
        "The window"
      ],
      correct: 0,
      explanation: "The dependent variable is what they measured: how much water evaporated (found from the water left in each box)."
    },
    {
      question: "Which of these was a CONTROLLED variable in the Surface-Area Experiment?",
      options: [
        "Each box started with 50 mL of water",
        "The size of each box",
        "The amount of water left after a week",
        "The amount of water that evaporated"
      ],
      correct: 0,
      explanation: "Every box started with the same 50 mL of water. Keeping that the same makes it a fair test."
    },
    {
      question: "Why did Julie and Art put ALL the boxes in the same place by the window for the same week?",
      options: [
        "To keep the test fair, so only the surface area was different",
        "Because they ran out of room",
        "So the boxes would look nice",
        "To make the water salty"
      ],
      correct: 0,
      explanation: "The place and the time were controlled variables. Keeping them the same means only surface area changed, so it's a fair test."
    },

    // --- Wasting Water ---
    {
      question: "On the Wasting Water sheet, how much does a big soda bottle hold?",
      options: ["2 liters", "8 liters", "20 liters", "1 milliliter"],
      correct: 0,
      explanation: "A big soda bottle is 2 liters. It helps you picture how much water you use."
    },
    {
      question: "How much water does showering normally use?",
      options: ["95 liters", "150 liters", "18 liters", "220 liters"],
      correct: 0,
      explanation: "Showering normally uses 95 liters of water."
    },
    {
      question: "How much water does bathing normally use?",
      options: ["150 liters", "95 liters", "60 liters", "8 liters"],
      correct: 0,
      explanation: "Bathing normally uses 150 liters of water."
    },
    {
      question: "Which activity on the Wasting Water chart uses the LEAST water?",
      options: ["Washing hands", "Brushing teeth", "Dishwasher", "Showering"],
      correct: 0,
      explanation: "Washing hands uses 8 liters, the least of the activities on the chart."
    },
    {
      question: "How many MORE liters does a bath use than a shower?",
      options: ["55 liters", "45 liters", "245 liters", "65 liters"],
      correct: 0,
      explanation: "150 liters − 95 liters = 55 liters more for a bath."
    },
    {
      question: "Using the chart, which choice uses LESS water?",
      options: [
        "Taking a shower instead of a bath",
        "Taking a bath instead of a shower",
        "Washing clothes instead of washing hands",
        "Running the dishwasher instead of washing hands"
      ],
      correct: 0,
      explanation: "A shower uses 95 liters and a bath uses 150 liters, so a shower uses less water."
    },
    {
      question: "Brushing teeth uses 18 liters. How many big 2-liter soda bottles is that?",
      options: ["9 bottles", "18 bottles", "36 bottles", "16 bottles"],
      correct: 0,
      explanation: "18 ÷ 2 = 9 soda bottles of water."
    },
    {
      question: "One day you shower (95 liters), brush your teeth (18 liters), and wash your hands (8 liters). How much water did you use in all?",
      options: ["121 liters", "113 liters", "103 liters", "131 liters"],
      correct: 0,
      explanation: "95 + 18 + 8 = 121 liters."
    },
    {
      question: "On the Wasting Water sheet, your guess of how much water you use in a day is called your…",
      options: ["Hypothesis", "Conclusion", "Data table", "Pie chart"],
      correct: 0,
      explanation: "Step 1 was to form a hypothesis: a prediction of how much water you use in a day."
    },

    // --- Incredible Journey ---
    {
      question: "In the Incredible Journey, which of these is NOT one of the water storage locations?",
      options: ["Volcanoes", "Glaciers", "Groundwater", "Plants"],
      correct: 0,
      explanation: "The nine storage locations were oceans, glaciers, clouds, groundwater, lakes, rivers, soil, plants, and animals."
    },
    {
      question: "How many times did you roll in the Incredible Journey?",
      options: ["30 times", "10 times", "9 times", "100 times"],
      correct: 0,
      explanation: "You rolled 30 times and colored a square for every roll."
    },
    {
      question: "In the Incredible Journey, what should you do if a roll keeps you in the SAME location?",
      options: [
        "Still color a square for that location",
        "Skip that roll",
        "Roll again until you move",
        "Erase your last square"
      ],
      correct: 0,
      explanation: "Color a square for EVERY roll, even when you stay in the same location."
    },
    {
      question: "What is the formula for finding the percent of time you spent in a location?",
      options: [
        "% = (Number ÷ 30) × 100%",
        "% = Number × 30",
        "% = 30 ÷ Number",
        "% = Number + 100"
      ],
      correct: 0,
      explanation: "Divide the number of times you were there by 30 rolls, then multiply by 100%."
    },
    {
      question: "You were in the Oceans 15 times out of 30 rolls. What percent is that?",
      options: ["50%", "15%", "30%", "45%"],
      correct: 0,
      explanation: "15 ÷ 30 = 0.5, and 0.5 × 100% = 50%."
    },
    {
      question: "You were in Groundwater 6 times out of 30 rolls. What percent is that?",
      options: ["20%", "6%", "60%", "16%"],
      correct: 0,
      explanation: "6 ÷ 30 = 0.2, and 0.2 × 100% = 20%."
    },
    {
      question: "You were in Glaciers 9 times out of 30 rolls. What percent is that?",
      options: ["30%", "9%", "90%", "39%"],
      correct: 0,
      explanation: "9 ÷ 30 = 0.3, and 0.3 × 100% = 30%."
    },
    {
      question: "How can you check that your Incredible Journey percents are correct?",
      options: [
        "See if they add up to 100%",
        "See if they add up to 30%",
        "See if they are all the same",
        "See if they add up to 9%"
      ],
      correct: 0,
      explanation: "All your percents together should add up to 100%. If they do, you're ready to make your pie chart."
    },
    {
      question: "What kind of graph did you make to show your Incredible Journey?",
      options: ["A pie chart", "A line plot", "A map", "A bar graph"],
      correct: 0,
      explanation: "After calculating your percents, you made a pie chart of your journey."
    },
    {
      question: "Why does every student's Incredible Journey come out different?",
      options: [
        "Every journey is unique, because each roll can send the drop somewhere different",
        "Some students had more water",
        "Some students skipped the oceans on purpose",
        "The teacher gave everyone a different number of rolls"
      ],
      correct: 0,
      explanation: "Every journey is unique! Each roll decides where the drop goes next, so no two paths are exactly the same."
    },
    {
      question: "TRUE or FALSE: In the Incredible Journey, water can travel from animals to the soil by excretion.",
      options: ["True", "False"],
      correct: 0,
      explanation: "True. Animals return water to the soil through excretion (getting rid of waste)."
    }
  ],

  skills: [
    {
      key: "surface-area-evaporation",
      label: "How surface area affects evaporation",
      remember: "Julie and Art put 50 mL of water in four boxes by a window for one week. Water evaporated = 50 mL − water left. Box 1 (smallest surface area) lost 4 mL; Box 4 lost 32 mL. More surface area → more evaporation.",
      workedExample: "Box 2: 50 mL − 42 mL = 8 mL evaporated\nBox 4: 50 mL − 18 mL = 32 mL evaporated → bigger surface, more evaporation"
    },
    {
      key: "surface-area-variables",
      label: "Variables in the Surface-Area Experiment",
      remember: "Independent = surface area (what they changed). Dependent = amount of water that evaporated (what they measured). Controlled = 50 mL in each box, same spot by the window, same one week.",
      workedExample: "Changed → surface area (IV)\nMeasured → water evaporated (DV)\nKept the same → 50 mL, window, 1 week (CV)"
    },
    {
      key: "water-use-chart",
      label: "How much water daily activities use",
      remember: "Shower 95 L, bath 150 L, brushing teeth 18 L, washing hands 8 L, dishwasher 60 L, washing clothes 220 L. A big soda bottle is 2 L. Add up your activities to find your daily total.",
      workedExample: "Shower + brush teeth + wash hands → 95 + 18 + 8 = 121 liters"
    },
    {
      key: "incredible-journey-percent",
      label: "Incredible Journey: water storage locations and percents",
      remember: "9 storage locations: oceans, glaciers, clouds, groundwater, lakes, rivers, soil, plants, animals. Roll 30 times, color a square every roll. % = (Number ÷ 30) × 100%. Percents must add to 100%, then make a pie chart.",
      workedExample: "Lakes 3 times → 3 ÷ 30 = 0.1 → 0.1 × 100% = 10%"
    }
  ]
};
