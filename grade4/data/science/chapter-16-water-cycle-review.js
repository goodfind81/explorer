/* ==========================================================
   Science Chapter 16 — Water Cycle Words & Hydrosphere Review
   Earth's Systems unit. Follows Chapter 15.
   Hydrosphere day 15 and the Hydrosphere Study Guide: the
   water-cycle vocabulary (evaporation, condensation,
   precipitation, transpiration, runoff), direct vs. indirect
   water use, Arizona's water supply (canals and dams), and a
   review of the whole unit for the Hydrosphere Test.
   Day 17 adds the home (direct) water use pie chart and
   conserving Arizona's water.
   Study guide answers (10/28 review) add the teacher's aquifer
   definition, why groundwater matters, where people's water
   comes from, and Arizona vs. average American water use.
   ========================================================== */

export const chapter = {
  id: "chapter-16-water-cycle-review",
  name: "Water Cycle Words & Hydrosphere Review",
  shortName: "Hydro Review",

  studyGuideHtml: `
    <h2>🔁 Water Cycle Words & Hydrosphere Review</h2>
    <p>The <strong>Hydrosphere Test</strong> is coming! In this lesson you drew and labeled the water cycle and learned a definition for each part. This chapter also reviews the big ideas from the whole unit, the same ones on your <strong>Hydrosphere Study Guide</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Water Cycle 🌍</span>
        <div class="sg-def">
          The <strong>water cycle</strong> is the <strong>process</strong> by which water <strong>moves</strong> through the <strong>Earth</strong> and <strong>atmosphere</strong>.<br><br>
          • The <strong>sun's rays heat the ocean</strong>. That heat gets the cycle going.<br>
          • The <strong>ocean</strong> is the <strong>largest</strong> body of water on Earth. Water covers <strong>71%</strong> of Earth's surface.<br>
          • <strong>Wind</strong> moves the clouds through the sky.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Evaporation ☀️</span>
        <div class="sg-def">
          Water <strong>changes from a liquid to a gas</strong> (water vapor). It is <strong>caused by heat</strong>.<br><br>
          The sun heats the ocean, and <strong>hot water vapor</strong> rises into the air.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Condensation ☁️</span>
        <div class="sg-def">
          The <strong>cooling of water in the atmosphere</strong>, changing <strong>gas → liquid</strong>.<br><br>
          When water vapor meets <strong>cool air</strong>, it turns into tiny <strong>water droplets</strong>. That's how clouds form.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Precipitation 🌧️</span>
        <div class="sg-def">
          <strong>Water droplets fall from the atmosphere</strong> in the form of:<br><br>
          🌧️ <strong>Rain</strong> · ❄️ <strong>Snow</strong> · 🧊 <strong>Sleet</strong> (ice) · ⚪ <strong>Hail</strong> (ice balls)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Transpiration 🌱</span>
        <div class="sg-def">
          The <strong>passage of water vapor from a plant to the atmosphere</strong>.<br><br>
          A fun way to remember it: transpiration is <strong>"plant sweat"</strong>!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Runoff ⛰️</span>
        <div class="sg-def">
          <strong>Rainfall that is not absorbed by the soil</strong> and <strong>travels to the ocean</strong>.<br><br>
          Runoff water <strong>flows</strong> down the mountains and back to the ocean. <strong>Gravity</strong> pulls water downhill, which is why rivers flow from the mountains toward the ocean.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">More labels on a water-cycle drawing</span>
        <div class="sg-def">
          • <strong>Snowmelt:</strong> snow on a mountain melts and flows downhill.<br>
          • <strong>Collection:</strong> water gathers in lakes, rivers, and the ocean.<br>
          • <strong>Groundwater:</strong> water that soaks into the ground and is stored underground.<br><br>
          <strong>Word bank to know:</strong> evaporation, condensation, precipitation, groundwater, gravity, transpiration, runoff.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Direct vs. indirect water use 🍔</span>
        <div class="sg-def" style="background:#FFF9C4;">
          • <strong>Direct water use</strong> = water you use <strong>yourself</strong>: drinking, showering, cooking, and so on.<br>
          • <strong>Indirect water use</strong> = water used to <strong>make the things we buy</strong>: food, clothes, and products. Water used to <strong>grow crops</strong> or <strong>make products</strong> is indirect water use.<br><br>
          <strong>Example:</strong> buying a hamburger uses water even though you don't see it, because water was used to <strong>make</strong> the hamburger: hamburger comes from cow's meat, <strong>cows drink water</strong>, and the <strong>bun</strong> is made with water too.<br><br>
          <strong>Class notes wording:</strong> <strong>Direct</strong> = water I turn on and use myself. <strong>Indirect</strong> = water used to make or grow something I use.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How much water do we use at home? (Direct) 🚽</span>
        <div class="sg-def">
          This pie chart from class shows how a home's <strong>direct</strong> water use is split up:<br><br>
          🚽 <strong>Toilet: 24%</strong> (the biggest slice)<br>
          🚿 <strong>Shower: 20%</strong><br>
          🚰 <strong>Faucet: 19%</strong><br>
          👕 <strong>Clothes washer: 17%</strong><br>
          💧 <strong>Leak: 12%</strong><br>
          ➕ <strong>Other: 8%</strong><br><br>
          All the slices add up to <strong>100%</strong>. Even <strong>leaks</strong> use 12% of the water, which is water nobody gets to use!<br><br>
          <strong>Conserve Arizona's water:</strong> in your notes you wrote something <em>you</em> can do. Ideas from this unit: turn off the faucet when you're not using it, take a shower instead of a bath, and fix leaks.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Arizona's water supply 🏜️</span>
        <div class="sg-def">
          <strong>Key sources:</strong><br>
          • <strong>Groundwater: 41%</strong> (the biggest source)<br>
          • <strong>Colorado River: 36%</strong> (the river that supplies a large portion of Arizona's water)<br>
          • <strong>Some in-state rivers: 18%</strong><br>
          • <strong>Reclaimed water: 5%</strong><br><br>
          <strong>Infrastructure:</strong> Arizona built <strong>canals and dams</strong> to <strong>move and store</strong> water, to <strong>supply fresh water to the people who live here</strong>.<br><br>
          • <strong>Most water used by people</strong> (around the world) comes from <strong>lakes and rivers</strong>. But <strong>here in Arizona</strong>, we mostly use <strong>groundwater</strong>.<br>
          • Do Arizonans use more or less water than the average American? <strong>More!</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Unit review: where water is stored 📊</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          • From space, <strong>water</strong> covers most of the planet: <strong>71%</strong> of Earth's surface.<br>
          • Most of Earth's water is <strong>liquid</strong>: the oceans alone hold about 97% of it.<br>
          • About <strong>97% is salt water</strong> and only about <strong>3% is fresh water</strong>.<br>
          • The <strong>oceans</strong> store the most salt water.<br>
          • Most <strong>fresh</strong> water is frozen in <strong>glaciers and ice caps</strong> (68.5% of fresh water). <strong>Groundwater</strong> is second (30%).<br>
          • Lakes, rivers, and wetlands are only about <strong>1.4%</strong> of fresh water. The study guide says <strong>lakes and rivers</strong> are <strong>less than 1%</strong> of fresh water!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Unit review: aquifers and groundwater 🕳️</span>
        <div class="sg-def">
          • An <strong>aquifer</strong> is an <strong>underground layer of porous rock, sand, or gravel</strong> that is <strong>saturated</strong> (filled) with <strong>groundwater</strong>. It is like an underground reservoir: rain soaks into the soil and fills it.<br>
          • <strong>Groundwater is important</strong> because it is a <strong>vast, hidden fresh water source for drinking</strong>: it supplies <strong>half the world's population</strong>. Here in <strong>Phoenix</strong>, most of our water comes from groundwater (Arizona's biggest source, 41%).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Condensation on a cold cup 🥤</span>
        <div class="sg-def">
          Two cups sit on a table. The <strong>cup of ice water</strong> gets water drops on the <strong>outside</strong>; the other cup doesn't. Water vapor in the warm air <strong>cools</strong> when it touches the cold cup and <strong>condenses</strong> (gas → liquid) into droplets. The water came from the <strong>air</strong>, not from inside the cup!
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Don't flip evaporation and condensation! <strong>Evaporation</strong> = liquid → gas, caused by <strong>heat</strong>. <strong>Condensation</strong> = gas → liquid, caused by <strong>cooling</strong>. And water vapor leaving a <strong>plant</strong> has its own name: <strong>transpiration</strong>.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> How well do you understand the water cycle? Try following one drop: the sun heats the ocean and it <strong>evaporates</strong>, cools into a cloud by <strong>condensation</strong>, falls on a mountain as snow (<strong>precipitation</strong>), melts and flows downhill as <strong>runoff</strong>, and reaches the ocean again. Then draw it and label every step!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is evaporation?",
      options: ["Water changing from a liquid to a gas, caused by heat", "Water changing from a gas to a liquid", "Water falling from the sky", "Water soaking into the soil"],
      correct: 0,
      explanation: "Evaporation is when water changes from a liquid to a gas. It is caused by heat."
    },
    {
      question: "What is condensation?",
      options: ["Water vapor leaving a plant", "Rain that runs to the ocean", "The cooling of water in the atmosphere, changing gas to liquid", "Ice melting on a mountain"],
      correct: 2,
      explanation: "Condensation is the cooling of water in the atmosphere. The gas changes into liquid water droplets."
    },
    {
      question: "Which word means the passage of water vapor from a plant to the atmosphere?",
      options: ["Precipitation", "Transpiration", "Runoff", "Condensation"],
      correct: 1,
      explanation: "Transpiration is water vapor passing from a plant to the atmosphere, like \"plant sweat.\""
    },
    {
      question: "Water used to grow crops or make products is called...",
      options: ["Direct water use", "Reclaimed water", "Runoff", "Indirect water use"],
      correct: 3,
      explanation: "Indirect water use is water used to make the things we buy, like food, clothes, and products."
    },
    {
      question: "Why did Arizona build canals and dams?",
      options: ["To supply fresh water to the people who live here", "To make it rain more", "To turn salt water into fresh water", "To stop the water cycle"],
      correct: 0,
      explanation: "Arizona built canals and dams to move and store water, supplying fresh water to the people who live here."
    }
  ],

  chapterQuiz: [
    {
      question: "The water cycle is the process by which water moves through...",
      options: ["Only the oceans", "The Earth and the atmosphere", "Only underground pipes", "Only the clouds"],
      correct: 1,
      explanation: "The water cycle is the process by which water moves through the Earth and atmosphere."
    },
    {
      question: "In the water cycle, what do the sun's rays do to the ocean?",
      options: ["Cool it", "Freeze it", "Heat it", "Make it saltier"],
      correct: 2,
      explanation: "The sun's rays heat the ocean, which causes evaporation."
    },
    {
      question: "What is the largest body of water on Earth?",
      options: ["A lake", "A river", "A glacier", "The ocean"],
      correct: 3,
      explanation: "The ocean is the largest body of water on Earth."
    },
    {
      question: "When astronauts look at Earth from space, what covers most of the planet?",
      options: ["Water", "Deserts", "Forests", "Ice"],
      correct: 0,
      explanation: "Water covers 71% of Earth's surface, so Earth looks blue from space."
    },
    {
      question: "About what percent of Earth's surface is covered by water?",
      options: ["29%", "50%", "71%", "97%"],
      correct: 2,
      explanation: "71% of Earth's surface is water. The other 29% is land."
    },
    {
      question: "Most of Earth's water is found in what form?",
      options: ["Solid", "Liquid", "Gas", "Hail"],
      correct: 1,
      explanation: "Most of Earth's water is liquid, because the oceans hold about 97% of it."
    },
    {
      question: "About what percent of Earth's water is fresh water?",
      options: ["3%", "29%", "71%", "97%"],
      correct: 0,
      explanation: "Only about 3% of Earth's water is fresh. About 97% is salt water."
    },
    {
      question: "About what percent of Earth's water is salt water?",
      options: ["3%", "50%", "71%", "97%"],
      correct: 3,
      explanation: "About 97% of Earth's water is salt water in the oceans."
    },
    {
      question: "Which location stores the greatest amount of salt water on Earth?",
      options: ["Glaciers", "The oceans", "Aquifers", "Rivers"],
      correct: 1,
      explanation: "The oceans hold almost all of Earth's salt water."
    },
    {
      question: "Where is most of Earth's fresh water stored?",
      options: ["In lakes and rivers", "In the clouds", "In glaciers and ice caps", "In the oceans"],
      correct: 2,
      explanation: "Most fresh water (68.5%) is frozen in glaciers and ice caps."
    },
    {
      question: "Lakes, rivers, and wetlands make up about what percent of Earth's fresh water?",
      options: ["1.4%", "30%", "68.5%", "97%"],
      correct: 0,
      explanation: "Only about 1.4% of fresh water is in lakes, rivers, and wetlands."
    },
    {
      question: "Which is the second-biggest store of fresh water?",
      options: ["Lakes", "Rivers", "Clouds", "Groundwater"],
      correct: 3,
      explanation: "Groundwater holds about 30% of fresh water. Only glaciers and ice caps hold more."
    },
    {
      question: "Evaporation is caused by...",
      options: ["Cooling", "Heat", "Gravity", "Plants"],
      correct: 1,
      explanation: "Evaporation is caused by heat. The sun heats the water and it changes into a gas."
    },
    {
      question: "During evaporation, water changes from...",
      options: ["Gas to liquid", "Solid to liquid", "Liquid to gas", "Liquid to solid"],
      correct: 2,
      explanation: "Evaporation changes liquid water into a gas called water vapor."
    },
    {
      question: "During condensation, water changes from...",
      options: ["Gas to liquid", "Liquid to gas", "Solid to gas", "Liquid to solid"],
      correct: 0,
      explanation: "Condensation is the cooling of water in the atmosphere, changing gas into liquid."
    },
    {
      question: "What makes water vapor condense into water droplets?",
      options: ["Hot sunlight", "Gravity", "Plants", "Cool air"],
      correct: 3,
      explanation: "Condensation is cooling. When water vapor meets cool air, it turns into water droplets."
    },
    {
      question: "Clouds form when water vapor turns into tiny water droplets. Which part of the water cycle is this?",
      options: ["Evaporation", "Condensation", "Runoff", "Transpiration"],
      correct: 1,
      explanation: "Condensation turns water vapor (gas) into water droplets (liquid), forming clouds."
    },
    {
      question: "What is precipitation?",
      options: ["Water soaking into an aquifer", "Water vapor leaving a plant", "Water droplets falling from the atmosphere", "Water changing into a gas"],
      correct: 2,
      explanation: "Precipitation is water droplets falling from the atmosphere as rain, snow, sleet, or hail."
    },
    {
      question: "Which of these is NOT a form of precipitation?",
      options: ["Rain", "Sleet", "Hail", "Water vapor"],
      correct: 3,
      explanation: "Rain, snow, sleet, and hail are precipitation. Water vapor is a gas that rises during evaporation."
    },
    {
      question: "Which form of precipitation falls as balls of ice?",
      options: ["Hail", "Rain", "Snow", "Fog"],
      correct: 0,
      explanation: "Hail falls as ice balls."
    },
    {
      question: "What is transpiration?",
      options: ["Rain that runs into the ocean", "The passage of water vapor from a plant to the atmosphere", "Snow melting on a mountain", "Water falling as sleet"],
      correct: 1,
      explanation: "Transpiration is water vapor passing from a plant into the atmosphere."
    },
    {
      question: "Which part of the water cycle is nicknamed \"plant sweat\"?",
      options: ["Condensation", "Runoff", "Transpiration", "Precipitation"],
      correct: 2,
      explanation: "Plants give off water vapor through transpiration, so it's called \"plant sweat.\""
    },
    {
      question: "What is runoff?",
      options: ["Rainfall that is not absorbed by the soil and travels to the ocean", "Water vapor rising from the ocean", "Water stored in a glacier", "Water droplets forming a cloud"],
      correct: 0,
      explanation: "Runoff is rainfall that isn't absorbed by the soil. It flows over the land back to the ocean."
    },
    {
      question: "It rains hard on a mountain and the soil can't soak up any more. The extra water flows downhill into a river. This is...",
      options: ["Transpiration", "Evaporation", "Condensation", "Runoff"],
      correct: 3,
      explanation: "Rain that isn't absorbed by the soil and travels toward the ocean is runoff."
    },
    {
      question: "What force causes rivers to flow from the mountains toward the oceans?",
      options: ["Wind", "Gravity", "Heat", "Transpiration"],
      correct: 1,
      explanation: "Gravity pulls water downhill, from high mountains down toward the ocean."
    },
    {
      question: "On a water-cycle drawing, the label \"snowmelt\" shows...",
      options: ["Water vapor leaving a plant", "Clouds forming", "Snow on a mountain melting and flowing downhill", "Salt staying in the ocean"],
      correct: 2,
      explanation: "Snowmelt is snow on a mountain melting into water that flows downhill."
    },
    {
      question: "Which list shows the three main stages of the water cycle in order?",
      options: ["Evaporation → condensation → precipitation", "Precipitation → transpiration → runoff", "Condensation → evaporation → runoff", "Runoff → precipitation → condensation"],
      correct: 0,
      explanation: "Water evaporates, condenses into clouds, then falls as precipitation."
    },
    {
      question: "How does water keep moving between the land, air, and oceans?",
      options: ["It is pumped by machines", "Through the water cycle", "It only moves when it rains", "It doesn't move at all"],
      correct: 1,
      explanation: "The water cycle keeps water moving between land, air, and oceans, over and over."
    },
    {
      question: "What is an aquifer?",
      options: ["A cloud full of rain", "A river that flows into the ocean", "A dam on a river", "An underground layer of porous rock, sand, or gravel saturated with groundwater"],
      correct: 3,
      explanation: "An aquifer is an underground layer of porous rock, sand, or gravel that is saturated with groundwater."
    },
    {
      question: "Why is groundwater important?",
      options: ["It is the saltiest water on Earth", "It is only used for swimming", "It is a vast, hidden source of fresh drinking water for half the world's population", "It never moves"],
      correct: 2,
      explanation: "Groundwater is a vast, hidden fresh water source for drinking. It supplies half the world's population, and most of Phoenix's water."
    },
    {
      question: "Most water used by people around the world comes from lakes and rivers. Where does MOST of the water here in Arizona come from?",
      options: ["The ocean", "Glaciers", "Groundwater", "Rain barrels"],
      correct: 2,
      explanation: "Most people's water comes from lakes and rivers, but here in Arizona (and Phoenix) we mostly use groundwater."
    },
    {
      question: "Lakes and rivers are what percentage of Earth's fresh water?",
      options: ["Less than 1%", "About 30%", "About 68.5%", "About 97%"],
      correct: 0,
      explanation: "Lakes and rivers are less than 1% of fresh water! Most fresh water is frozen in glaciers and ice caps."
    },
    {
      question: "Do Arizonans use more or less water than the average American?",
      options: ["Less", "More", "Exactly the same", "Arizonans don't use water"],
      correct: 1,
      explanation: "Arizonans use more water than the average American, which is why conserving water here matters."
    },
    {
      question: "What is direct water use?",
      options: ["Water you use yourself, like drinking, showering, and cooking", "Water used to make clothes", "Water used to grow crops", "Water stored in glaciers"],
      correct: 0,
      explanation: "Direct water use is water used directly, like drinking, showering, and cooking."
    },
    {
      question: "What is indirect water use?",
      options: ["Water you drink from a fountain", "Water used to make the things we buy, like food, clothes, and products", "Water that evaporates from a lake", "Water you shower with"],
      correct: 1,
      explanation: "Indirect water use is water used to make things we buy."
    },
    {
      question: "Which is an example of DIRECT water use?",
      options: ["Water used to make a T-shirt", "Water used to grow wheat", "Water used to make a hamburger", "Taking a shower"],
      correct: 3,
      explanation: "Showering uses water directly. The others are water used to make things we buy."
    },
    {
      question: "Which is an example of INDIRECT water use?",
      options: ["Drinking a glass of water", "Cooking pasta", "Water used to make a new pair of jeans", "Brushing your teeth"],
      correct: 2,
      explanation: "Making clothes uses water you never see. That's indirect water use."
    },
    {
      question: "Buying a hamburger uses water even if you don't see it. Why?",
      options: ["Water was used to make the hamburger", "Hamburgers are made of water", "You must drink water with it", "The bun is wet"],
      correct: 0,
      explanation: "Water was used to make the hamburger: the cows drank water and the bun was made with water. That's indirect water use."
    },
    {
      question: "Which river supplies a large portion of Arizona's water?",
      options: ["The Mississippi River", "The Colorado River", "The Ohio River", "The Rio Grande"],
      correct: 1,
      explanation: "The Colorado River supplies 36% of Arizona's water."
    },
    {
      question: "Where does Arizona get MOST of its water?",
      options: ["Reclaimed water", "In-state rivers", "Groundwater", "The ocean"],
      correct: 2,
      explanation: "Groundwater is Arizona's biggest source at 41%. The Colorado River is next at 36%."
    },
    {
      question: "Which is NOT one of Arizona's key water sources?",
      options: ["Groundwater", "Reclaimed water", "Some in-state rivers", "The ocean"],
      correct: 3,
      explanation: "Arizona's key sources are the Colorado River, groundwater, some in-state rivers, and reclaimed water."
    },
    {
      question: "What did Arizona build to move and store water?",
      options: ["Canals and dams", "Glaciers and ice caps", "Lighthouses", "Volcanoes"],
      correct: 0,
      explanation: "Arizona built canals to move water and dams to store it."
    },
    {
      question: "Reclaimed water and in-state rivers together give Arizona what percent of its water?",
      options: ["13%", "23%", "41%", "77%"],
      correct: 1,
      explanation: "Reclaimed water (5%) + in-state rivers (18%) = 23%."
    },

    // Hydrosphere day 17: home (direct) water use pie chart
    {
      question: "On the class pie chart of home (direct) water use, which uses the MOST water?",
      options: ["Shower", "Toilet", "Faucet", "Clothes washer"],
      correct: 1,
      explanation: "The toilet is the biggest slice at 24%. Shower is 20%, faucet 19%, clothes washer 17%."
    },
    {
      question: "What percent of a home's direct water use is lost to leaks?",
      options: ["8%", "12%", "20%", "24%"],
      correct: 1,
      explanation: "Leaks are 12% of home water use on the class pie chart."
    },
    {
      question: "On the home water use pie chart, which slice is bigger?",
      options: ["Faucet (19%) is bigger than shower", "Clothes washer (17%) is bigger than shower", "Shower (20%) is bigger than faucet (19%)", "Leak (12%) is bigger than toilet"],
      correct: 2,
      explanation: "Shower is 20% and faucet is 19%, so the shower slice is a little bigger."
    },
    {
      question: "Toilet (24%) and shower (20%) together make up what percent of home water use?",
      options: ["34%", "44%", "54%", "4%"],
      correct: 1,
      explanation: "24% + 20% = 44%."
    },
    {
      question: "All the slices of the home water use pie chart add up to...",
      options: ["50%", "76%", "100%", "120%"],
      correct: 2,
      explanation: "A pie chart shows parts of a whole, so the slices add up to 100%: 24 + 20 + 19 + 17 + 12 + 8 = 100."
    },
    {
      question: "Turning on the faucet to wash your hands is which kind of water use?",
      options: ["Indirect", "Runoff", "Direct", "Reclaimed"],
      correct: 2,
      explanation: "Direct water use is water you turn on and use yourself, like a faucet, shower, or toilet."
    },
    {
      question: "Leaks waste 12% of home water. Which action would help conserve Arizona's water?",
      options: ["Fixing leaks", "Running the faucet while brushing teeth", "Taking a bath instead of a shower", "Leaving the hose running in the yard"],
      correct: 0,
      explanation: "Fixing leaks stops water from being wasted. Turning off the faucet and taking a shower instead of a bath also save water."
    }
  ],

  skills: [
    {
      key: "water-cycle-vocabulary",
      label: "Water-cycle words",
      remember: "Evaporation = liquid → gas, caused by heat. Condensation = cooling of water in the atmosphere, gas → liquid (water droplets). Precipitation = water droplets fall from the atmosphere as rain, snow, sleet (ice), or hail (ice balls). Transpiration = water vapor passing from a plant to the atmosphere (\"plant sweat\"). Runoff = rainfall not absorbed by the soil that travels to the ocean. Gravity pulls water downhill.",
      workedExample: "Sun heats the ocean → evaporation\nVapor meets cool air → condensation (clouds)\nSnow falls on a mountain → precipitation\nExtra rain flows downhill to the ocean → runoff"
    },
    {
      key: "direct-indirect-water-use",
      label: "Direct vs. indirect water use",
      remember: "Direct water use = water you use yourself (drinking, showering, cooking). Indirect water use = water used to make the things we buy (food, clothes, products), like water used to grow crops or make products.",
      workedExample: "Taking a shower → direct\nBuying a hamburger → indirect (water was used to make it)"
    },
    {
      key: "home-water-use",
      label: "How we use water at home",
      remember: "Home (direct) water use pie chart: toilet 24% (most), shower 20%, faucet 19%, clothes washer 17%, leak 12%, other 8%. The slices add up to 100%. Save water: fix leaks, turn off the faucet, take a shower instead of a bath.",
      workedExample: "Biggest slice → toilet (24%)\nToilet + shower → 24% + 20% = 44%\nLeaks waste 12% → fix them!"
    },
    {
      key: "arizona-water-supply",
      label: "Arizona's water supply",
      remember: "Key sources: groundwater 41% (biggest), Colorado River 36% (the river that supplies a large portion), some in-state rivers 18%, reclaimed water 5%. Arizona built canals and dams to move and store water and supply fresh water to the people who live here. Most people's water comes from lakes and rivers, but Arizona mostly uses groundwater. Arizonans use MORE water than the average American.",
      workedExample: "Most water → groundwater (41%)\nThe big river → Colorado River (36%)\nCanals move water, dams store it"
    },
    {
      key: "hydrosphere-unit-review",
      label: "Hydrosphere unit review",
      remember: "Water covers 71% of Earth's surface. Most water is liquid. About 97% salt water (oceans), 3% fresh. Most fresh water: glaciers and ice caps (68.5%), then groundwater (30%); lakes, rivers, wetlands only about 1.4% (lakes and rivers alone: less than 1%). Aquifer = underground layer of porous rock, sand, or gravel saturated with groundwater. Groundwater supplies drinking water for half the world's population. Water on the outside of a cold cup = condensation. The water cycle moves water between land, air, and oceans.",
      workedExample: "Most salt water → oceans\nMost fresh water → glaciers and ice caps\nUnderground reservoir → aquifer"
    }
  ]
};
