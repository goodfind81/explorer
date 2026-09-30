/* ==========================================================
   Science Chapter 11 — Water Distribution on Earth
   Earth's Systems unit. Follows Chapter 10 (Hydrosphere &
   Water Cycle). Covers WHERE Earth's water is found, salt
   vs. fresh water, how little is actually usable, and how
   pie charts show parts of a whole.
   ========================================================== */

export const chapter = {
  id: "chapter-11-water-distribution",
  name: "Water Distribution on Earth",
  shortName: "Water Distribution",

  studyGuideHtml: `
    <h2>🌍 Water Distribution on Earth</h2>
    <p>Earth is called the "Blue Planet" because water covers most of its surface. But here's the surprise: <strong>almost all of that water is salt water in the oceans</strong> — and we can't drink it or use it to water plants. So how much is actually usable?</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Einstein Wonders…</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>How much of the world's water is usable to humans and other plants and animals?</strong><br><br>
          The answer is surprising — and much smaller than you'd think!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Where Earth's water is found</span>
        <div class="sg-def">
          Water on Earth is stored in <strong>five main places</strong>:<br><br>
          🌊 <strong>Oceans</strong> — the biggest place by far. (Salt water)<br>
          ❄️ <strong>Ice caps & glaciers</strong> — frozen water at the poles and on mountains. (Fresh water, but frozen)<br>
          ☁️ <strong>Clouds & the atmosphere</strong> — tiny droplets and water vapor floating in the air.<br>
          🏞️ <strong>Lakes & rivers</strong> — fresh surface water on land.<br>
          💧 <strong>Groundwater</strong> — water stored underground in soil and rock.
        </div>
      </div>

      <div class="diagram-box medium">
        <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
          <text x="240" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#333">Where Earth's Water Is Found</text>

          <!-- Earth on the left -->
          <circle cx="90" cy="130" r="60" fill="#4A90E2" stroke="#2C3E50" stroke-width="2"/>
          <path d="M50,110 Q80,95 110,110 Q120,130 100,145 Q70,155 55,140 Q45,125 50,110 Z" fill="#8BC34A"/>
          <path d="M100,90 Q120,85 135,100 Q130,115 110,110 Z" fill="#8BC34A"/>
          <text x="90" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#1565C0">OCEANS</text>
          <text x="90" y="230" text-anchor="middle" font-size="9" fill="#666">(biggest — but salty!)</text>

          <!-- Ice caps top -->
          <ellipse cx="200" cy="60" rx="40" ry="20" fill="#E3F2FD" stroke="#4A90E2" stroke-width="1.5"/>
          <text x="200" y="64" text-anchor="middle" font-size="16">❄️</text>
          <text x="200" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#1565C0">ICE CAPS</text>

          <!-- Cloud -->
          <ellipse cx="330" cy="60" rx="45" ry="18" fill="#CFD8DC"/>
          <ellipse cx="305" cy="65" rx="20" ry="12" fill="#CFD8DC"/>
          <ellipse cx="355" cy="65" rx="20" ry="12" fill="#CFD8DC"/>
          <text x="330" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#455A64">CLOUDS</text>

          <!-- Lake -->
          <path d="M180,180 Q220,165 260,180 Q250,200 215,200 Q185,200 180,180 Z" fill="#4A90E2" opacity="0.7"/>
          <text x="220" y="220" text-anchor="middle" font-size="10" font-weight="bold" fill="#1565C0">LAKES &amp; RIVERS</text>

          <!-- Groundwater -->
          <rect x="300" y="160" width="140" height="40" fill="#A1887F"/>
          <rect x="300" y="200" width="140" height="30" fill="#4A90E2" opacity="0.6"/>
          <text x="370" y="222" text-anchor="middle" font-size="10" font-weight="bold" fill="#1565C0">GROUNDWATER</text>

          <!-- Raindrops -->
          <text x="410" y="120" font-size="14" fill="#4A90E2">💧</text>
          <text x="430" y="140" font-size="14" fill="#4A90E2">💧</text>
        </svg>
        <div class="diagram-caption">Water is everywhere on Earth — but not all of it is usable.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How much of Earth's surface is water?</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          🌍 <strong>71% of Earth's surface is covered in water.</strong><br>
          🏞️ <strong>The other 29% is land.</strong><br><br>
          That's why Earth looks like a big blue marble from space!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Salt water vs. Fresh water</span>
        <div class="sg-def">
          <strong>Salt water</strong> — has salt dissolved in it. Found in oceans and seas. <strong>NOT</strong> safe to drink, water plants with, or use for most things.<br><br>
          <strong>Fresh water</strong> — has very little salt. Found in lakes, rivers, groundwater, ice caps, and clouds. This is the water plants, animals, and people need.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Big Numbers — how water is split up</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          Out of <strong>all the water on Earth</strong>:<br><br>
          🌊 <strong>About 97% is salt water</strong> (in the oceans)<br>
          💧 <strong>Only about 3% is fresh water</strong><br><br>
          And of that 3% of fresh water:<br>
          ❄️ <strong>About 2% is frozen</strong> in ice caps and glaciers<br>
          🌱 <strong>Only about 1% is usable</strong> — lakes, rivers, groundwater, and the atmosphere<br><br>
          <strong>That's it. Only about 1% of Earth's water is easy for us to use!</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Why this matters</span>
        <div class="sg-def">
          • We share that tiny bit of usable water with <strong>every plant, animal, and person on Earth</strong>.<br>
          • Fresh water isn't spread evenly — some places have a lot, some have almost none.<br>
          • That's why <strong>saving water matters</strong> — there's far less of it than you'd think.
        </div>
      </div>
    </div>

    <h3>📊 How Do We Show Water Distribution? Pie Charts</h3>
    <p>Numbers like 97% and 3% are hard to picture. A <strong>pie chart</strong> is a graph that shows <strong>parts of a whole</strong> — like slices of a pie.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">What is a pie chart?</span>
        <div class="sg-def">
          A <strong>pie chart</strong> is a circle split into slices. Each slice shows a fraction of the whole.<br><br>
          • The <strong>whole circle = 100%</strong><br>
          • Each <strong>slice = a part</strong> of the whole<br>
          • All slices must <strong>add up to 100%</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">When to use a pie chart</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Use a pie chart when the question is about <strong>"parts of a whole."</strong><br><br>
          ✅ <strong>Good for:</strong> "What % of Earth's water is salt water vs. fresh?"<br>
          ✅ <strong>Good for:</strong> "What % of Earth's surface is water vs. land?"<br>
          ❌ <strong>Not for:</strong> showing change over time (use a line graph)<br>
          ❌ <strong>Not for:</strong> comparing categories (use a bar graph)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How to make a good pie chart</span>
        <div class="sg-def">
          <strong>1. Title</strong> — What is the chart about? (Example: "Earth's Surface")<br>
          <strong>2. Label each slice with a %</strong> — Write the percentage inside or next to each slice.<br>
          <strong>3. Optional: color-code</strong> — Use colors that make sense (blue for water, brown for land).<br>
          <strong>4. Check your work</strong> — Do all the slices add up to 100%?
        </div>
      </div>
    </div>

    <h3>🥧 Two Pie Charts for Earth</h3>

    <div class="diagram-box medium">
      <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
        <text x="250" y="18" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#333">Two Ways to Look at Earth's Water</text>

        <!-- LEFT PIE: Earth's Surface -->
        <text x="130" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Earth's Surface</text>

        <!-- 71% blue arc, 29% orange arc — using circles + rotation -->
        <!-- Simplest approach: full blue circle, then orange "pac-man" wedge -->
        <circle cx="130" cy="140" r="70" fill="#4A90E2" stroke="#2C3E50" stroke-width="1.5"/>
        <!-- 29% orange wedge: about 104 degrees. Draw a wedge from 12 o'clock going clockwise -->
        <path d="M130,140 L130,70 A70,70 0 0,1 191,110 Z" fill="#E67E22" stroke="#2C3E50" stroke-width="1.5"/>
        <text x="105" y="105" font-size="11" font-weight="bold" fill="#7A3D00">Land</text>
        <text x="105" y="120" font-size="11" font-weight="bold" fill="#7A3D00">29%</text>
        <text x="150" y="175" font-size="12" font-weight="bold" fill="#FFFFFF">Water</text>
        <text x="150" y="190" font-size="12" font-weight="bold" fill="#FFFFFF">71%</text>

        <!-- RIGHT PIE: Salt vs Fresh -->
        <text x="370" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Earth's Water</text>

        <!-- 97% blue, 3% green wedge (small — about 11 degrees) -->
        <circle cx="370" cy="140" r="70" fill="#4A90E2" stroke="#2C3E50" stroke-width="1.5"/>
        <!-- 3% wedge: about 11 degrees -->
        <path d="M370,140 L370,70 A70,70 0 0,1 383,71 Z" fill="#2ECC71" stroke="#2C3E50" stroke-width="1.5"/>
        <text x="345" y="150" font-size="12" font-weight="bold" fill="#FFFFFF">Saltwater</text>
        <text x="352" y="165" font-size="12" font-weight="bold" fill="#FFFFFF">97%</text>
        <text x="392" y="80" font-size="9" font-weight="bold" fill="#155724">Fresh</text>
        <text x="392" y="92" font-size="9" font-weight="bold" fill="#155724">3%</text>
      </svg>
      <div class="diagram-caption">Left: land vs. water on Earth's surface. Right: salt vs. fresh water on Earth.</div>
    </div>

    <div class="highlight">
      <strong>Key idea:</strong> Earth looks like a water planet, but only about <strong>1% of its water is fresh water we can actually use</strong>. Pie charts help us <em>see</em> how the pieces compare.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Imagine filling a bathtub with all the water on Earth. Only about one cup of it would be usable fresh water!</div>
    </div>

    <h3>🌊 Where Fresh Water Comes From</h3>
    <ul>
      <li><strong>Rivers</strong> — moving fresh water that flows to lakes or the ocean.</li>
      <li><strong>Lakes</strong> — large pools of fresh water surrounded by land.</li>
      <li><strong>Groundwater</strong> — water stored underground in soil and rock. Wells tap into this.</li>
      <li><strong>Ice caps & glaciers</strong> — frozen fresh water. Not easy to use, but part of Earth's supply.</li>
      <li><strong>Rain & snow</strong> — precipitation that refills lakes, rivers, and groundwater.</li>
    </ul>

    <div class="highlight">
      <strong>Think about it:</strong> When you drink a glass of water, you're using a tiny piece of that 1%. Every living thing on Earth is sharing it. That's why we don't waste it!
    </div>
  `,

  miniCheck: [
    {
      question: "Where is MOST of Earth's water found?",
      options: ["In lakes and rivers", "In oceans", "In ice caps", "In clouds"],
      correct: 1,
      explanation: "About 97% of Earth's water is salt water in the oceans — by far the biggest amount."
    },
    {
      question: "What percentage of Earth's water is fresh water (not salty)?",
      options: ["About 1%", "About 10%", "About 50%", "About 3%"],
      correct: 3,
      explanation: "About 3% of Earth's water is fresh. The rest (97%) is salt water in the oceans."
    },
    {
      question: "Which of these is SALT water?",
      options: ["A lake", "A river", "The ocean", "A cloud"],
      correct: 2,
      explanation: "The ocean is salt water. Lakes, rivers, and clouds hold fresh water."
    },
    {
      question: "What percentage of Earth's SURFACE is covered in water?",
      options: ["About 29%", "About 50%", "About 71%", "About 97%"],
      correct: 2,
      explanation: "About 71% of Earth's surface is water; the other 29% is land."
    },
    {
      question: "Which type of graph shows parts of a whole?",
      options: ["Line graph", "Bar graph", "Pie chart", "Number line"],
      correct: 2,
      explanation: "A pie chart splits a circle (the whole = 100%) into slices, each showing a part."
    }
  ],

  chapterQuiz: [
    // --- Where water is found ---
    {
      question: "Where is MOST of Earth's water found?",
      options: ["In lakes and rivers", "In oceans", "In ice caps and glaciers", "In the atmosphere"],
      correct: 1,
      explanation: "About 97% of Earth's water is salt water in the oceans — by far the biggest amount."
    },
    {
      question: "Which is NOT one of the places water is found on Earth?",
      options: ["Oceans", "Groundwater", "Clouds", "Volcanoes"],
      correct: 3,
      explanation: "Water is found in oceans, ice caps, clouds, lakes/rivers, and groundwater. Volcanoes aren't a main water store."
    },
    {
      question: "What is groundwater?",
      options: [
        "Water in the ocean",
        "Water stored underground in soil and rock",
        "Water in clouds",
        "Water in ice caps"
      ],
      correct: 1,
      explanation: "Groundwater is water that has soaked into the ground and is stored in soil and rock."
    },
    {
      question: "Where is fresh water FROZEN on Earth?",
      options: ["In clouds", "In oceans", "In ice caps and glaciers", "In rivers"],
      correct: 2,
      explanation: "Ice caps and glaciers hold frozen fresh water at the poles and on mountains."
    },
    {
      question: "Clouds are made of:",
      options: [
        "Salt water from the ocean",
        "Tiny droplets of fresh water and water vapor",
        "Frozen ice only",
        "Smoke"
      ],
      correct: 1,
      explanation: "Clouds are made of tiny water droplets and water vapor — fresh water, not salt."
    },

    // --- Salt vs fresh ---
    {
      question: "Which type of water is safe to drink?",
      options: ["Salt water", "Fresh water", "Ocean water", "Water from a salty sea"],
      correct: 1,
      explanation: "Fresh water (from lakes, rivers, and groundwater) is safe for people and most animals to drink. Salt water is not."
    },
    {
      question: "Which of these holds SALT water?",
      options: ["A river", "A lake", "The ocean", "A cloud"],
      correct: 2,
      explanation: "The ocean holds salt water. Rivers, lakes, and clouds hold fresh water."
    },
    {
      question: "Why is ocean water NOT good for watering plants?",
      options: [
        "It's too cold",
        "It's too far from the plants",
        "The salt in it harms plants",
        "It disappears too fast"
      ],
      correct: 2,
      explanation: "Most plants can't handle salt water — it dehydrates and harms them. They need fresh water."
    },

    // --- The numbers ---
    {
      question: "About what percentage of Earth's water is salt water?",
      options: ["About 3%", "About 50%", "About 75%", "About 97%"],
      correct: 3,
      explanation: "About 97% of Earth's water is salt water in the oceans. Only about 3% is fresh."
    },
    {
      question: "About what percentage of Earth's water is FRESH water?",
      options: ["About 1%", "About 3%", "About 50%", "About 97%"],
      correct: 1,
      explanation: "About 3% of Earth's water is fresh water. The rest is salt water in the oceans."
    },
    {
      question: "Of Earth's fresh water, most is:",
      options: ["In lakes", "Frozen in ice caps and glaciers", "In rivers", "In clouds"],
      correct: 1,
      explanation: "About 2 of the 3 percent of Earth's fresh water is frozen in ice caps and glaciers."
    },
    {
      question: "About how much of Earth's water is USABLE fresh water (lakes, rivers, groundwater)?",
      options: ["About 1%", "About 10%", "About 25%", "About 50%"],
      correct: 0,
      explanation: "Only about 1% of Earth's water is easy to use — lakes, rivers, groundwater, and the atmosphere."
    },
    {
      question: "Why is it surprising that only about 1% of Earth's water is usable?",
      options: [
        "Because Earth looks like a water planet — it seems like there should be more",
        "Because 1% is a very large number",
        "Because we don't need much water",
        "Because water is invisible"
      ],
      correct: 0,
      explanation: "Earth looks mostly blue from space, so it's a surprise that so little of that water is fresh and usable."
    },

    // --- Surface coverage (71 / 29) ---
    {
      question: "About what percentage of Earth's SURFACE is covered in water?",
      options: ["About 29%", "About 50%", "About 71%", "About 97%"],
      correct: 2,
      explanation: "About 71% of Earth's surface is water. The other 29% is land."
    },
    {
      question: "About what percentage of Earth's SURFACE is land?",
      options: ["About 3%", "About 29%", "About 50%", "About 71%"],
      correct: 1,
      explanation: "If water covers 71%, then land covers the rest: 100% − 71% = 29%."
    },
    {
      question: "Why is Earth called the \"Blue Planet\"?",
      options: [
        "Because the sky is always blue",
        "Because most of its surface is covered in water, which looks blue from space",
        "Because the Moon is blue",
        "Because blue is the color of the ocean floor"
      ],
      correct: 1,
      explanation: "From space, Earth looks blue because about 71% of its surface is water."
    },

    // --- Pie charts ---
    {
      question: "What type of graph shows PARTS OF A WHOLE?",
      options: ["Line graph", "Bar graph", "Pie chart", "Number line"],
      correct: 2,
      explanation: "A pie chart shows parts of a whole — the whole circle represents 100%, and each slice is a piece."
    },
    {
      question: "In a pie chart, all the slices together must add up to:",
      options: ["50%", "71%", "97%", "100%"],
      correct: 3,
      explanation: "A pie chart represents one whole, so the slices always add up to 100%."
    },
    {
      question: "You want to show what percent of Earth's water is salt water vs. fresh water. What type of graph should you use?",
      options: ["Line graph", "Bar graph", "Pie chart", "Number line"],
      correct: 2,
      explanation: "Salt water and fresh water are two parts of one whole (all of Earth's water). That's a pie chart's job."
    },
    {
      question: "A pie chart about Earth's surface has a slice labeled \"Land 29%.\" What should the other slice be labeled?",
      options: ["Water 29%", "Water 71%", "Water 97%", "Land 71%"],
      correct: 1,
      explanation: "The slices must add up to 100%. So the other slice is 100% − 29% = 71%, labeled \"Water 71%.\""
    },
    {
      question: "You're making a pie chart of Earth's water. Salt water is 97% and fresh water is 3%. Which slice should be BIGGER?",
      options: ["The fresh water slice", "The salt water slice", "They should be equal", "Neither should be shown"],
      correct: 1,
      explanation: "97% is much larger than 3%, so the salt water slice should be much bigger."
    },
    {
      question: "Which is a GOOD title for a pie chart showing salt water vs. fresh water on Earth?",
      options: [
        "Earth's Water",
        "My Favorite Colors",
        "How to Save Water",
        "Today's Weather"
      ],
      correct: 0,
      explanation: "A good title tells you what the chart is about. \"Earth's Water\" fits a chart about salt vs. fresh water."
    },
    {
      question: "Which pie chart part tells you what each slice represents?",
      options: [
        "The title",
        "The labels (and sometimes a key/colors)",
        "The size of the whole circle",
        "The background color"
      ],
      correct: 1,
      explanation: "The title says what the chart is about, but the labels (percentages, categories, and any key) tell you what each slice is."
    },

    // --- Water cycle connection ---
    {
      question: "Where does the fresh water in lakes and rivers originally come from?",
      options: [
        "It's made by plants",
        "It falls as rain or snow (precipitation)",
        "It comes from the ocean directly",
        "It's created underground"
      ],
      correct: 1,
      explanation: "Rain and snow refill lakes, rivers, and groundwater. That's part of the water cycle."
    },
    {
      question: "When ocean water evaporates, what happens to the salt?",
      options: [
        "It evaporates too",
        "It stays behind in the ocean",
        "It floats away",
        "It turns into clouds"
      ],
      correct: 1,
      explanation: "Salt doesn't evaporate with water. It stays in the ocean, which is why ocean water stays salty."
    },

    // --- Why it matters ---
    {
      question: "Why is it important that we don't waste fresh water?",
      options: [
        "Because water is expensive",
        "Because only about 1% of Earth's water is usable, and we share it with all living things",
        "Because it's hard to carry",
        "Because it's not recyclable"
      ],
      correct: 1,
      explanation: "There's very little usable fresh water on Earth, and everything alive depends on it. Wasting it hurts everyone."
    },
    {
      question: "Which is a way to help save fresh water?",
      options: [
        "Leave the faucet running while brushing teeth",
        "Take very long showers",
        "Turn off the faucet when not using it",
        "Water the lawn at noon every day"
      ],
      correct: 2,
      explanation: "Turning off the faucet when you're not using it is a simple way to save fresh water."
    },
    {
      question: "Why isn't fresh water spread evenly around the world?",
      options: [
        "Because some places get much more rain than others",
        "Because fresh water is only in one country",
        "Because clouds don't move",
        "Because rivers all flow to the same place"
      ],
      correct: 0,
      explanation: "Some regions get lots of rain and have many rivers and lakes, while others (like deserts) get very little. Fresh water is not distributed evenly."
    },
    {
      question: "Which statement is TRUE about Earth's water?",
      options: [
        "Most of Earth's water is fresh and easy to drink",
        "Most of Earth's water is salt water in the oceans",
        "All of Earth's water is usable",
        "Earth has very little water"
      ],
      correct: 1,
      explanation: "About 97% of Earth's water is salt water in the oceans. Only about 3% is fresh — and only about 1% is easy to use."
    },

    // --- Real-world application ---
    {
      question: "A community has only one small lake and a well for drinking water. Why must they be careful with it?",
      options: [
        "Because fresh water is limited and they rely on that supply",
        "Because the lake will freeze",
        "Because lakes refill instantly",
        "Because they don't need water"
      ],
      correct: 0,
      explanation: "Usable fresh water is limited. If a community's only source runs low, they have no easy backup."
    },
    {
      question: "If you live near the ocean, why can't you just drink the seawater?",
      options: [
        "It's too heavy",
        "There's too much salt in it",
        "It's too deep",
        "It's the wrong color"
      ],
      correct: 1,
      explanation: "Seawater has too much salt. Drinking it dehydrates you — it doesn't satisfy thirst the way fresh water does."
    },
    {
      question: "A student says, \"Earth has plenty of water, so we don't need to worry.\" What's wrong with this reasoning?",
      options: [
        "Nothing — it's true",
        "Most of Earth's water is salty or frozen; only about 1% is easy to use",
        "Earth actually has no water",
        "Water isn't important"
      ],
      correct: 1,
      explanation: "Earth has lots of water, but almost all of it is salt water or frozen. Only about 1% is usable fresh water."
    }
  ],

  skills: [
    {
      key: "water-distribution-basics",
      label: "Where Earth's water is found and how much is usable",
      remember: "About 71% of Earth's surface is water. About 97% of Earth's water is salt water in oceans, and only about 3% is fresh — most of that is frozen. Only about 1% is usable.",
      workedExample: "🌊 97% salt water (oceans) → 💧 3% fresh water → ❄️ 2% frozen → 🌱 1% usable"
    },
    {
      key: "salt-vs-fresh",
      label: "Salt water vs. fresh water",
      remember: "Salt water = oceans and seas (not safe to drink). Fresh water = lakes, rivers, groundwater, ice caps, and clouds (safe for people and animals).",
      workedExample: "Ocean = salt water ❌  |  Lake = fresh water ✅"
    },
    {
      key: "pie-charts",
      label: "Reading and making pie charts for parts of a whole",
      remember: "Pie chart = circle split into slices. Whole circle = 100%. All slices must add up to 100%. Use when the question is about parts of a whole.",
      workedExample: "Earth's Surface: Water 71% + Land 29% = 100%"
    }
  ]
};