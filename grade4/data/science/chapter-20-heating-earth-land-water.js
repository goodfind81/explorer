/* ==========================================================
   Science Chapter 20 — Heating Earth: Land, Water & Wind
   Earth's Systems unit, Atmosphere day 6 (11/9).
   Built from: Do Now, Einstein Wonders ("Which heats faster, land
   or water?"), the Indoor/Winter Land and Water Lab sheet
   (question, materials, procedure, variables, results table,
   conclusion), and the "Summary: Heating Earth" reading assigned
   as homework due 11/16 (uneven heating, energy transfer, molecule
   energy and gas density, convection currents and wind,
   atmospheric pressure, meteorologists, summary questions 1–4).
   The lab sheet's variable blanks and results are not filled in
   on the slides. The answers here follow from the reading (land
   heats quickly, water heats slowly) and are flagged in the
   review notes.
   Extended 2026-11-22 from Atmosphere days 7–9 (11/10–11/16):
   "What causes wind?" and the textbook Wind reading (The Wind Starts,
   The Wind Changes Direction), plus the day-9 Do Now (gases spread
   out from high density to low density).
   ========================================================== */

export const chapter = {
  id: "chapter-20-heating-earth-land-water",
  name: "Heating Earth: Land, Water & Wind",
  shortName: "Land, Water & Wind",

  studyGuideHtml: `
    <h2>🏖️ Heating Earth: Land, Water & Wind</h2>
    <p><strong>Einstein Wonders:</strong> which heats faster, <strong>land</strong> or <strong>water</strong>? We tested it in the <strong>Land and Water Lab</strong>, then read <strong>"Summary: Heating Earth"</strong> to learn how <strong>uneven heating</strong> makes <strong>convection currents</strong> and <strong>wind</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Land and Water Lab 🧪</span>
        <div class="sg-def">
          <strong>Question:</strong> Does land or water warm faster?<br>
          <strong>Hypothesis / Prediction:</strong> "I predict…" Write it <strong>after</strong> reading both sides of the lab sheet, in <strong>complete sentences</strong>.<br>
          <strong>Materials:</strong> 2 containers (one with water, one with soil), thermometers, a timer, and a light source (<strong>not an LED bulb</strong>).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Procedure 📝</span>
        <div class="sg-def">
          1. Fill one container with a cup of <strong>soil</strong> and a second container with a cup of <strong>water</strong>.<br>
          2. Place both containers near a light source that <strong>creates heat</strong>. An LED bulb will <strong>not</strong> work!<br>
          3. Put a thermometer in the soil and one in the water. Wait one minute, then take your <strong>starting temperature</strong>. Record.<br>
          4. Set the timer for 5 minutes and take another reading. Record.<br>
          The results table has spaces for <strong>start, 5, 10, 15, 20 and 25 minutes</strong> for both soil and water. The <strong>Conclusion</strong> asks: which heated faster, and <strong>why</strong>?
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Variables in the lab 🔬</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          • <strong>Independent variable</strong> (the variable I am changing): what is in the container, <strong>soil (land) or water</strong>.<br>
          • <strong>Dependent variable</strong> (the measured data): the <strong>temperature</strong>.<br>
          • <strong>Controlled variables</strong> (things kept the same): for example, the same amount (a cup), the same light source, and the same times.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Uneven heating ☀️</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Energy from the Sun, in the form of <strong>heat and light</strong>, falls on Earth during the day. Materials on Earth's surface <strong>absorb</strong> the <strong>solar energy</strong> and get warm.<br>
          • <strong>Rock and soil</strong> heat up <strong>quickly</strong>.<br>
          • <strong>Water</strong> heats up <strong>slowly</strong>.<br>
          The result is <strong>uneven heating</strong> of Earth's surface. The <strong>land</strong> changes temperature <strong>quickly</strong>. The <strong>oceans</strong> change temperature <strong>slowly</strong>.<br>
          So the answer to Einstein's question: <strong>land heats faster</strong> than water.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Energy transfer ⚡</span>
        <div class="sg-def">
          Air is a <strong>mixture of gas molecules</strong>, mostly <strong>nitrogen and oxygen</strong>. Air molecules are flying around all the time.<br>
          When air molecules bang into Earth's surface, they can <strong>gain or lose energy</strong>. Gaining or losing energy is called <strong>energy transfer</strong>.<br>
          • On a sunny day the <strong>land gets hot</strong>. Molecules that bang into it <strong>gain</strong> energy and move <strong>faster</strong>.<br>
          • Molecules that bang into a <strong>cold</strong> surface, like the ocean, <strong>lose</strong> energy and move <strong>slower</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Molecule energy and gas density 🫧</span>
        <div class="sg-def" style="background:#FFEBEE;">
          • <strong>Fast-moving</strong> molecules bang into each other <strong>harder</strong> and push each other <strong>farther apart</strong>. The air is <strong>less dense</strong>.<br>
          • <strong>Slow-moving</strong> molecules hit each other with <strong>less force</strong> and move <strong>closer together</strong>. The air is <strong>denser</strong>.<br>
          As a result of energy transfer, <strong>warm air is less dense than cold air</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Convection currents and wind 🌬️</span>
        <div class="sg-def" style="background:#E8F5E9;">
          Uneven heating makes masses of air with different temperatures.<br>
          1. Warm air over the <strong>land</strong> is <strong>less dense</strong> than cold air over the <strong>ocean</strong>.<br>
          2. The cool, dense air <strong>pushes the warm, less-dense air upward</strong>.<br>
          3. As the cold air flows <strong>onshore</strong>, the land <strong>warms</strong> it, and it is pushed up by more cold air from the sea.<br>
          4. As the warm air rises, it <strong>cools</strong>, becomes dense, and <strong>falls back</strong> to Earth's surface. Then it flows onshore again.<br><br>
          This circular flow of air is a <strong>convection current</strong>. The part where <strong>cool air from the sea flows onshore</strong> creates <strong>wind</strong>. That's how convection currents produce wind all over Earth.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Wind Starts 🌊➡️🏝️</span>
        <div class="sg-def">
          A <strong>cork floats</strong> on water because it is <strong>less dense</strong> than water. Warm air does the same thing: it <strong>floats upward</strong> because it is less dense than the cool air around it.<br>
          • A cubic meter of hot air has <strong>fewer molecules</strong> than a cubic meter of cool air.<br>
          • In the daytime, the denser, cool air over the <strong>sea</strong> flows toward the <strong>warm land</strong> and pushes the warm air up.<br><br>
          <strong>Wind</strong> is the movement of <strong>denser air</strong> to an area where the air is <strong>less dense</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Wind Changes Direction at Night 🌙</span>
        <div class="sg-def" style="background:#E3F2FD;">
          When the Sun goes down, the <strong>land cools quickly</strong>, but the sea stays about the same temperature.<br>
          • If land and sea are the <strong>same temperature</strong>, the convection current stops and the <strong>wind stops blowing</strong>.<br>
          • On a <strong>really cold night</strong>, the air over the land becomes <strong>denser</strong> than the air over the sea. The convection current flows in the <strong>opposite direction</strong>, and the wind blows from the <strong>land to the sea</strong>.<br><br>
          ☀️ Day: wind blows <strong>sea → land</strong>. 🌙 Cold night: wind blows <strong>land → sea</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Gases spread out 🫧</span>
        <div class="sg-def">
          Gases do <strong>NOT</strong> have a fixed <strong>shape</strong> or <strong>volume</strong>. Gases <strong>expand</strong> to fill all available space, moving from areas of <strong>HIGH</strong> density to <strong>LOW</strong> density.<br>
          If you remove the divider in a box that has gas on one side, the gas particles <strong>spread out to fill all the space</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Atmospheric pressure & meteorologists 🌦️</span>
        <div class="sg-def">
          Air molecules have <strong>mass</strong>. All the molecules stacked up from Earth's surface to the top of the atmosphere push on the surface: that's <strong>atmospheric pressure</strong>. It pushes <strong>in all directions</strong>, equally on every side of every object in the air.<br>
          Higher up, like on a tall mountain, there is less air above you, so there is <strong>less pressure</strong>. Less air above = less pressure.<br><br>
          <strong>Meteorologists</strong> are scientists who study <strong>weather</strong>. Differences in atmospheric pressure cause changes in the weather. By measuring the pressure at different places on Earth, meteorologists can make better <strong>weather forecasts</strong>.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Thinking water heats faster because it feels warm at the beach in the afternoon. The reading says <strong>land (rock and soil) heats up quickly</strong> and <strong>water heats up slowly</strong>. That difference is what causes <strong>uneven heating</strong>, convection currents, and wind.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> The breeze you feel at the beach starts with the Sun! The sand heats up fast, the air over it rises, and cool air from over the ocean rushes in to take its place. That onshore flow of cool air is wind.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What question does the Land and Water Lab try to answer?",
      options: ["Does land or water warm faster?", "Does air have mass?", "What happens to a balloon in cold water?", "How salty is the ocean?"],
      correct: 0,
      explanation: "The lab question is: Does land or water warm faster?"
    },
    {
      question: "According to the reading, which heats up more quickly?",
      options: ["Rock and soil", "Water", "They heat up at the same speed", "Neither one heats up"],
      correct: 0,
      explanation: "Rock and soil heat up quickly. Water heats up slowly."
    },
    {
      question: "What causes uneven heating of Earth's surface?",
      options: [
        "Some materials, like rock and soil, heat up quickly, and others, like water, heat up slowly",
        "The Sun only shines on the ocean",
        "Air has no mass",
        "The wind blows the heat away from land"
      ],
      correct: 0,
      explanation: "Different materials absorb solar energy and heat up at different speeds. Land heats quickly and water heats slowly, so Earth heats unevenly."
    },
    {
      question: "The circular flow of air caused by uneven heating is called a…",
      options: ["Convection current", "Water cycle", "Watershed", "Thermometer"],
      correct: 0,
      explanation: "The circular flow of air is a convection current."
    },
    {
      question: "Scientists who study weather are called…",
      options: ["Meteorologists", "Geologists", "Astronauts", "Botanists"],
      correct: 0,
      explanation: "Meteorologists are scientists who study weather."
    }
  ],

  chapterQuiz: [
    // --- The lab ---
    {
      question: "When should you write your prediction on the Land and Water Lab sheet?",
      options: ["After you have read both sides of the lab sheet", "Before you look at the lab sheet", "After the lab is over", "Only if you have time"],
      correct: 0,
      explanation: "The Do Now says to write your prediction AFTER you have read both sides, in complete sentences."
    },
    {
      question: "Which is NOT on the Land and Water Lab materials list?",
      options: ["A balloon", "Thermometers", "A timer", "A light source"],
      correct: 0,
      explanation: "The materials are 2 containers (water and soil), thermometers, a timer, and a light source. The balloon was in the Hot / Cold Air Lab."
    },
    {
      question: "What goes in the two containers?",
      options: ["Soil in one and water in the other", "Water in both", "Soil in both", "Air in one and ice in the other"],
      correct: 0,
      explanation: "Step 1: fill one container with a cup of soil and a second container with a cup of water."
    },
    {
      question: "Why won't an LED bulb work for this lab?",
      options: ["The light source has to create heat", "LED bulbs are too bright", "LED bulbs are too big", "LED bulbs only work underwater"],
      correct: 0,
      explanation: "Step 2 says to place both containers near a light source that creates heat. An LED bulb will not work."
    },
    {
      question: "How do you take the starting temperature?",
      options: [
        "Put the thermometers in, wait one minute, then read and record",
        "Read the thermometers before putting them in",
        "Wait 25 minutes, then read",
        "Guess the temperature"
      ],
      correct: 0,
      explanation: "Step 3: place both thermometers into the soil and water, time one minute, then take your starting temperature and record it."
    },
    {
      question: "The results table has readings at start, 5, 10, 15, 20 and 25 minutes. How far apart are the readings?",
      options: ["5 minutes", "1 minute", "10 minutes", "25 minutes"],
      correct: 0,
      explanation: "The readings go start, 5, 10, 15, 20, 25 minutes, so one every 5 minutes."
    },
    {
      question: "In the Land and Water Lab, what is the independent variable (the variable I am changing)?",
      options: ["Soil or water in the container", "The temperature", "The timer", "The thermometer"],
      correct: 0,
      explanation: "We change what is in the container, soil (land) or water, so that is the independent variable."
    },
    {
      question: "In the Land and Water Lab, what is the dependent variable (the measured data)?",
      options: ["The temperature", "The kind of container", "The light source", "The amount of soil"],
      correct: 0,
      explanation: "We measure the temperature with the thermometers, so temperature is the dependent variable."
    },
    {
      question: "Which would be a CONTROLLED variable in this lab?",
      options: [
        "Using a cup of soil and a cup of water, near the same light",
        "Using soil in one container and water in the other",
        "The temperature readings",
        "Which one heated faster"
      ],
      correct: 0,
      explanation: "Controlled variables are things kept the same, like the same amount and the same light source."
    },
    {
      question: "The Conclusion on the lab sheet asks you to explain…",
      options: ["Which heated faster, and why", "What color the soil was", "How many thermometers you used", "What time the class ended"],
      correct: 0,
      explanation: "Conclusion: which heated faster, and why?"
    },

    // --- Uneven heating ---
    {
      question: "Energy from the Sun reaches Earth in the form of…",
      options: ["Heat and light", "Wind and rain", "Sound", "Water vapor"],
      correct: 0,
      explanation: "Energy from the Sun in the form of heat and light falls on Earth during the day."
    },
    {
      question: "Materials on Earth's surface ___ solar energy and get warm.",
      options: ["Absorb", "Reflect all of", "Create", "Freeze"],
      correct: 0,
      explanation: "Materials on Earth's surface absorb the solar energy and get warm."
    },
    {
      question: "Which heats up SLOWLY when it absorbs energy?",
      options: ["Water", "Rock", "Soil", "Sand and rock"],
      correct: 0,
      explanation: "Rock and soil heat up quickly. Water heats up slowly."
    },
    {
      question: "Which changes temperature quickly?",
      options: ["The land", "The oceans", "Both change at the same speed", "Neither changes"],
      correct: 0,
      explanation: "The land changes temperature quickly. The oceans change temperature slowly."
    },
    {
      question: "Land heats quickly and water heats slowly. This difference is called…",
      options: ["Uneven heating", "Atmospheric pressure", "Evaporation", "Condensation"],
      correct: 0,
      explanation: "Because materials heat at different speeds, Earth's surface heats unevenly: uneven heating."
    },
    {
      question: "Based on the reading, which heats faster in the Land and Water Lab?",
      options: ["The soil", "The water", "They stay the same", "Neither warms up"],
      correct: 0,
      explanation: "Soil (land) heats up quickly and water heats up slowly, so the soil should warm faster."
    },

    // --- Energy transfer ---
    {
      question: "Air is a mixture of gas molecules. Most of them are…",
      options: ["Nitrogen and oxygen", "Water and salt", "Carbon and iron", "Helium and hydrogen"],
      correct: 0,
      explanation: "Most of the molecules in air are nitrogen and oxygen."
    },
    {
      question: "Air molecules gain or lose energy when they bang into Earth's surface. This is called…",
      options: ["Energy transfer", "Evaporation", "Convection pressure", "Absorption of water"],
      correct: 0,
      explanation: "Gain or loss of energy is energy transfer."
    },
    {
      question: "On a sunny day, air molecules that bang into the hot land…",
      options: ["Gain energy and move faster", "Lose energy and move slower", "Stop moving", "Turn into water"],
      correct: 0,
      explanation: "The land gets hot. Molecules that bang into it gain energy and move faster."
    },
    {
      question: "Air molecules that bang into a cold surface, like the ocean…",
      options: ["Lose energy and move slower", "Gain energy and move faster", "Become heavier than water", "Disappear"],
      correct: 0,
      explanation: "When air molecules bang into a cold surface, they lose energy and move slower."
    },

    // --- Molecule energy and gas density ---
    {
      question: "Fast-moving molecules bang into each other hard and push each other…",
      options: ["Farther apart", "Closer together", "Into the ground", "Into the ocean"],
      correct: 0,
      explanation: "Fast-moving molecules hit hard and push each other farther apart, so the air is less dense."
    },
    {
      question: "When molecules move closer together, the air becomes…",
      options: ["Denser", "Less dense", "Warmer", "Lighter than nothing"],
      correct: 0,
      explanation: "Slow-moving molecules move closer together, and the air becomes denser."
    },
    {
      question: "As a result of energy transfer, warm air is ___ cold air.",
      options: ["Less dense than", "More dense than", "Exactly as dense as", "Heavier than"],
      correct: 0,
      explanation: "The reading says: as a result of energy transfer, warm air is less dense than cold air."
    },

    // --- Convection currents and wind ---
    {
      question: "Compared with the cold air over the ocean, the warm air over the land is…",
      options: ["Less dense", "More dense", "Exactly the same", "Wetter"],
      correct: 0,
      explanation: "A mass of warm air over the land is less dense than a mass of cold air over the ocean."
    },
    {
      question: "What does the cool, dense air from the ocean do to the warm air over the land?",
      options: ["Pushes it upward", "Pushes it into the ground", "Makes it colder and heavier", "Nothing"],
      correct: 0,
      explanation: "The cool, dense air pushes the warm, less-dense air upward."
    },
    {
      question: "What happens to the cold air as it flows onshore?",
      options: ["It is warmed by the land", "It turns into rain", "It gets colder", "It stops moving"],
      correct: 0,
      explanation: "As the cold air flows onshore, it is warmed by the land, and then it gets pushed up by more cold air from the sea."
    },
    {
      question: "What happens to the warm air as it rises?",
      options: ["It cools, becomes dense, and falls back to Earth's surface", "It keeps getting warmer forever", "It leaves the atmosphere", "It turns into ocean water"],
      correct: 0,
      explanation: "As warm air rises, it cools. When it cools it becomes dense and falls back to Earth's surface."
    },
    {
      question: "Which part of the convection current creates wind?",
      options: ["Cool air from the sea flowing onshore", "Warm air rising over the land", "Air cooling high up", "Sunlight hitting the water"],
      correct: 0,
      explanation: "The part of the convection current where cool air from the sea flows onshore creates wind."
    },
    {
      question: "How does uneven heating of Earth's surface result in convection currents?",
      options: [
        "Warm, less-dense air over land is pushed up by cool, dense air; it cools, sinks, and the loop repeats",
        "The ocean heats faster, so warm water rises out of the sea",
        "Air molecules stop moving over the land",
        "Atmospheric pressure is the same everywhere, so air moves in a circle"
      ],
      correct: 0,
      explanation: "Uneven heating makes warm air over land and cool air over the sea. Cool, dense air pushes the warm air up; the warm air cools, sinks and flows back. That circular flow is a convection current."
    },
    {
      question: "Convection currents produce…",
      options: ["Wind all over Earth", "Earthquakes", "Ocean salt", "Sunlight"],
      correct: 0,
      explanation: "This is how convection currents produce wind all over Earth."
    },

    // --- Atmospheric pressure & meteorologists ---
    {
      question: "What causes atmospheric pressure?",
      options: ["The mass of the air above pushing down", "The heat of the Sun", "The salt in the ocean", "The spinning of the Moon"],
      correct: 0,
      explanation: "Air molecules have mass. The air above you pushes on you. Atmospheric pressure is produced by the mass of air above you."
    },
    {
      question: "In what direction does atmospheric pressure push?",
      options: ["In all directions", "Only down", "Only up", "Only sideways"],
      correct: 0,
      explanation: "Air pressure pushes in all directions, equally on every side of every object in the air."
    },
    {
      question: "At the top of a tall mountain, atmospheric pressure is…",
      options: ["Less, because there is less air above you", "More, because you are closer to the Sun", "The same as at the bottom", "Zero"],
      correct: 0,
      explanation: "Higher up there is less air above you. Less air above results in less pressure."
    },
    {
      question: "Differences in atmospheric pressure cause…",
      options: ["Changes in the weather", "Earthquakes", "Tides to stop", "The Sun to set"],
      correct: 0,
      explanation: "Differences in atmospheric pressure cause changes in the weather."
    },
    {
      question: "How do meteorologists make better weather forecasts?",
      options: [
        "By measuring the pressure at different places on Earth",
        "By counting the clouds once a year",
        "By measuring how salty the ocean is",
        "By measuring the height of mountains"
      ],
      correct: 0,
      explanation: "By measuring the pressure at different places on Earth, meteorologists can make better weather forecasts."
    },
    // --- Wind reading and day-9 Do Now (added 2026-11-22) ---
    {
      question: "Why does a cork float to the top of the water?",
      options: ["It is less dense than water", "It is denser than water", "It is colder than water", "The wind pushes it up"],
      correct: 0,
      explanation: "A cork is less dense than water, so it floats up. Warm air floats up through cool air the same way."
    },
    {
      question: "How is warm air like a cork in water?",
      options: [
        "Warm air floats upward because it is less dense than cool air",
        "Warm air sinks because it is denser than cool air",
        "Warm air stays still because it has no mass",
        "Warm air turns into water when it rises"
      ],
      correct: 0,
      explanation: "Warm air over the land floats upward because it is less dense than the cool air around it, just like a cork floats up in water."
    },
    {
      question: "A cubic meter of hot air has _____ molecules than a cubic meter of cool air.",
      options: ["fewer", "more", "the same number of", "heavier"],
      correct: 0,
      explanation: "A cubic meter of hot air has fewer molecules than a cubic meter of cool air, so hot air is less dense."
    },
    {
      question: "According to the Wind reading, what is wind?",
      options: [
        "The movement of denser air to an area where the air is less dense",
        "The movement of less-dense air down to the ground",
        "Air that stays in one place over the sea",
        "Water vapor rising from the ocean"
      ],
      correct: 0,
      explanation: "Wind is the movement of denser air to an area where the air is less dense."
    },
    {
      question: "On a sunny afternoon at the beach, which way does the wind blow?",
      options: ["From the sea to the land", "From the land to the sea", "Straight up from the sand", "It doesn't blow at all"],
      correct: 0,
      explanation: "In the day the land is hot and the sea is cool. The dense, cool air over the sea flows to the warm land. That flow is the wind."
    },
    {
      question: "What happens to the land and the sea when the Sun goes down?",
      options: [
        "The land cools quickly, but the sea stays about the same temperature",
        "The sea cools quickly, but the land stays warm",
        "Both get hotter",
        "The land and sea both freeze right away"
      ],
      correct: 0,
      explanation: "When the Sun goes down, the land cools rapidly, but the sea stays at about the same temperature."
    },
    {
      question: "If the land and the sea are the same temperature, what happens to the wind?",
      options: ["The wind stops blowing", "The wind gets stronger", "The wind blows straight down", "The wind blows in circles over the land"],
      correct: 0,
      explanation: "When land and sea are the same temperature, the air over them has the same density. The convection current stops flowing, and the wind stops."
    },
    {
      question: "On a really cold night, which way does the wind blow?",
      options: ["From the land to the sea", "From the sea to the land", "Straight up from the land", "It always blows from the sea"],
      correct: 0,
      explanation: "The cold air over the land becomes denser than the air over the sea, so the convection current flows the opposite way and the wind blows from the land to the sea."
    },
    {
      question: "What would happen to gas particles in a box if the divider between the full side and the empty side was removed?",
      options: [
        "They would spread out to fill all the available space",
        "They would stay on their side of the box",
        "They would condense into a liquid",
        "They would escape from the box"
      ],
      correct: 0,
      explanation: "Gases don't have a fixed shape or volume. They expand to fill all available space."
    },
    {
      question: "Gases move from areas of _____ density to areas of _____ density.",
      options: ["high, low", "low, high", "low, low", "high, high"],
      correct: 0,
      explanation: "Gases expand to fill all available space, moving from areas of HIGH density to LOW density."
    }
  ],

  skills: [
    {
      key: "wind-day-and-night",
      label: "What causes wind? Day and night",
      remember: "Wind is the movement of denser air to where the air is less dense. Day: land is hot, cool sea air flows onto the land (sea → land). Night: land cools fast; same temperature → wind stops; really cold night → wind blows land → sea. Gases spread from high density to low density.",
      workedExample: "☀️ Hot land, cool sea → wind sea → land\n🌙 Cold land, warmer sea → wind land → sea\nSame temperature → no wind"
    },
    {
      key: "land-water-lab",
      label: "The Land and Water Lab",
      remember: "Question: Does land or water warm faster? A cup of soil and a cup of water sit near a light that makes heat (not LED). Thermometers in each; wait 1 minute for the start temperature, then read every 5 minutes. Independent variable = soil or water. Dependent variable = temperature. Controlled = things kept the same (same amount, same light).",
      workedExample: "Change → soil or water\nMeasure → temperature\nKeep the same → amount, light, times\nResult → land (soil) heats faster"
    },
    {
      key: "uneven-heating-energy-transfer",
      label: "Uneven heating & energy transfer",
      remember: "The Sun's heat and light are absorbed by Earth's surface. Rock and soil heat quickly; water heats slowly. That's uneven heating. Air (mostly nitrogen and oxygen) gains energy from hot land (molecules move faster, spread apart, less dense) and loses energy to cold ocean (slower, closer, denser). Gain or loss of energy = energy transfer.",
      workedExample: "Hot land → molecules gain energy → faster → less dense\nCold ocean → molecules lose energy → slower → denser"
    },
    {
      key: "convection-wind",
      label: "Convection currents & wind",
      remember: "Warm air over land is less dense than cold air over the ocean. Cool, dense air pushes the warm air up. The warm air cools, gets dense, and falls back. The circular flow is a convection current. Cool sea air flowing onshore is wind.",
      workedExample: "Hot land → warm air pushed up\nRises → cools → sinks\nCool sea air flows onshore → wind"
    },
    {
      key: "pressure-meteorologists",
      label: "Atmospheric pressure & meteorologists",
      remember: "Atmospheric pressure is caused by the mass of the air above you and pushes in all directions. Less air above (like on a mountain) means less pressure. Meteorologists study weather; pressure differences change the weather, so measuring pressure helps them forecast.",
      workedExample: "Mountain top → less air above → less pressure\nPressure differences → weather changes\nMeteorologist measures pressure → forecast"
    }
  ]
};
