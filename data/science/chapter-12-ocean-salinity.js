/* ==========================================================
   Science Chapter 12 — Ocean Salinity
   Earth's Systems unit. Follows Chapter 11 (Water
   Distribution). Covers what salt is, where ocean salt comes
   from, how salty the ocean is, why rivers aren't salty, and
   why salty water behaves differently from fresh water.
   ========================================================== */

export const chapter = {
  id: "chapter-12-ocean-salinity",
  name: "Ocean Salinity",
  shortName: "Ocean Salt",

  studyGuideHtml: `
    <h2>🧂 Ocean Salinity</h2>
    <p>Have you ever accidentally swallowed ocean water? It tastes VERY salty — way saltier than anything you'd put on food. But why? And how much salt is actually in there?</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Einstein Wonders…</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>How much salt is in the ocean?</strong><br><br>
          The answer might surprise you — there's enough salt in the ocean to cover every continent in a layer several feet deep!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">What is salt?</span>
        <div class="sg-def">
          <strong>Salt</strong> (also called <em>sodium chloride</em>) is a mineral — a natural solid found in rocks and soil. It's the same salt we use on food, but there's much more of it in the ocean.<br><br>
          Ocean water isn't just water — it's water with <strong>many dissolved minerals</strong>, and salt is the main one.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Where does ocean salt come from?</span>
        <div class="sg-def">
          Ocean salt comes from <strong>rocks on land</strong> — slowly, over millions of years.<br><br>
          <strong>1.</strong> Rain falls on rocks and soil.<br>
          <strong>2.</strong> The water dissolves tiny bits of salt and minerals from the rocks.<br>
          <strong>3.</strong> Rivers carry that slightly salty water to the ocean.<br>
          <strong>4.</strong> The water evaporates from the ocean, but <strong>the salt stays behind</strong>.<br>
          <strong>5.</strong> Over millions of years, the salt builds up and the ocean gets saltier.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Why are rivers fresh but oceans salty?</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          Rivers <strong>do</strong> carry a little salt — but it's so little you can't taste it.<br><br>
          The ocean gets saltier over time because <strong>water leaves by evaporation, but salt doesn't</strong>. The salt has nowhere to go, so it stays and builds up.<br><br>
          💡 Rivers are like a slow drip of salt into a bucket that never empties.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How salty is the ocean?</span>
        <div class="sg-def">
          Ocean water is about <strong>3.5% salt</strong>.<br><br>
          That means: in every <strong>1 liter</strong> of seawater, there are about <strong>35 grams of salt</strong>.<br><br>
          Picture it this way: if you had a big cup (about 1 cup) of ocean water and let all the water evaporate, you'd be left with about <strong>a teaspoon of salt</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Does salt water freeze or boil differently?</span>
        <div class="sg-def">
          Yes! Salt water behaves differently from fresh water:<br><br>
          🧊 <strong>Freezing:</strong> Salt water freezes at a <strong>lower temperature</strong> than fresh water. That's why we put salt on icy roads in winter — it stops the ice from forming.<br><br>
          🔥 <strong>Boiling:</strong> Salt water boils at a <strong>slightly higher temperature</strong> than fresh water.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Is all ocean water equally salty?</span>
        <div class="sg-def">
          No — it varies!<br><br>
          🌡️ <strong>Warmer places</strong> (like near the equator) have saltier water because more evaporation happens.<br>
          🌧️ <strong>Rainy places</strong> have less salty water because rain adds fresh water.<br>
          🏞️ <strong>Near a river mouth</strong>, ocean water is less salty because a river is dumping fresh water into it.<br>
          🧊 <strong>Near melting ice</strong>, ocean water is less salty for the same reason.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Extra salty places — the Dead Sea</span>
        <div class="sg-def">
          The <strong>Dead Sea</strong> (between Israel and Jordan) is <strong>much saltier than the ocean</strong> — about <strong>10 times saltier</strong>!<br><br>
          Why? It's a lake with <strong>no outlet</strong> — water flows in but only leaves by evaporation. So the salt keeps piling up with nowhere to go.<br><br>
          Because the water is so salty, it's very <strong>dense</strong> — people can float on it easily, like a cork in water!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Density — why things float more easily in salt water</span>
        <div class="sg-def">
          <strong>Density</strong> means how much stuff is packed into a space.<br><br>
          Salt water is <strong>denser</strong> than fresh water because it has dissolved salt in it. Denser water pushes up more, so things float more easily.<br><br>
          <strong>Try this at home (with an adult):</strong><br>
          • Put an egg in a glass of fresh water → it sinks.<br>
          • Add several spoonfuls of salt and stir → the egg floats!<br><br>
          The salt made the water denser, so it could hold the egg up.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Why can't we drink ocean water?</span>
        <div class="sg-def">
          Ocean water is too salty for our bodies to use. Drinking it actually makes you <strong>more thirsty</strong> — your body has to use its own fresh water to get rid of the extra salt.<br><br>
          That's why we need <strong>fresh water</strong> — the 3% of Earth's water that isn't salty (plus the frozen part we can't easily use).<br><br>
          💡 Some places remove the salt from seawater to make it drinkable. This is called <strong>desalination</strong>, and it's expensive.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Ocean animals and salt</span>
        <div class="sg-def">
          Ocean animals are <strong>adapted</strong> to living in salt water. They have special bodies that handle the salt:<br><br>
          🐟 <strong>Fish</strong> drink seawater and get rid of the extra salt through their gills.<br>
          🦈 <strong>Sharks</strong> keep salt in their bodies on purpose.<br>
          🐋 <strong>Whales</strong> don't drink seawater at all — they get water from the food they eat.<br><br>
          Freshwater fish would <strong>die</strong> in salt water, and ocean fish would die in fresh water. They're built for their home.
        </div>
      </div>
    </div>

    <h3>🌊 The Salt Cycle</h3>
    <div class="diagram-box medium">
      <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg">
        <text x="240" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#333">How Salt Gets Into the Ocean</text>

        <!-- Mountains / rocks on the left -->
        <path d="M20,140 L60,80 L100,120 L140,70 L180,140 Z" fill="#8D6E63" stroke="#5D4037" stroke-width="1.5"/>
        <text x="100" y="160" text-anchor="middle" font-size="10" fill="#5D4037">Rocks &amp; soil</text>
        <text x="100" y="175" text-anchor="middle" font-size="9" fill="#5D4037">(contain salt)</text>

        <!-- Rain drops -->
        <text x="70" y="55" font-size="14" fill="#4A90E2">💧</text>
        <text x="105" y="45" font-size="14" fill="#4A90E2">💧</text>
        <text x="140" y="55" font-size="14" fill="#4A90E2">💧</text>

        <!-- River arrow flowing right -->
        <path d="M180,140 Q280,150 380,140" stroke="#4A90E2" stroke-width="3" fill="none" marker-end="url(#riverArrow)"/>
        <defs>
          <marker id="riverArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L6,4 L0,8 Z" fill="#4A90E2"/>
          </marker>
        </defs>
        <text x="270" y="170" text-anchor="middle" font-size="10" fill="#1565C0" font-weight="bold">Rivers carry salt to the ocean</text>

        <!-- Ocean on the right -->
        <rect x="360" y="120" width="110" height="100" fill="#4A90E2" opacity="0.7" rx="6"/>
        <text x="415" y="175" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">OCEAN</text>

        <!-- Evaporation arrow going up from ocean -->
        <path d="M415,120 L415,70" stroke="#F1C40F" stroke-width="2.5" fill="none" marker-end="url(#evapArrow)"/>
        <defs>
          <marker id="evapArrow" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
            <path d="M0,8 L4,0 L8,8 Z" fill="#F1C40F"/>
          </marker>
        </defs>
        <text x="445" y="95" font-size="9" fill="#B7950B" font-weight="bold">Evaporation</text>

        <!-- Salt stays note -->
        <text x="415" y="215" text-anchor="middle" font-size="9" fill="#333" font-style="italic">Salt stays behind — builds up over millions of years</text>
      </svg>
      <div class="diagram-caption">Rivers carry a tiny bit of salt to the ocean. Evaporation takes the water away, but the salt stays — so the ocean gets saltier over time.</div>
    </div>

    <div class="highlight">
      <strong>Key idea:</strong> The ocean is salty because <strong>rivers slowly carry salt from rocks into it</strong>, and <strong>evaporation removes water but leaves the salt behind</strong>. Over millions of years, the salt builds up to about <strong>3.5%</strong>.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> If you could take ALL the salt out of the ocean and spread it evenly over all the land on Earth, it would form a layer about <strong>500 feet thick</strong> — taller than most buildings!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "Where does the salt in the ocean originally come from?",
      options: [
        "It's made by ocean animals",
        "It comes from rocks and soil on land, carried by rivers",
        "It falls out of the sky with rain",
        "It's made by underwater volcanoes only"
      ],
      correct: 1,
      explanation: "Rain dissolves salt from rocks on land. Rivers then carry the salty water to the ocean, where it builds up."
    },
    {
      question: "Why does the ocean get saltier over time, but rivers stay fresh?",
      options: [
        "Rivers filter the salt out of water",
        "Water evaporates from the ocean but leaves the salt behind; rivers only carry a tiny bit at a time",
        "Ocean water has more salt because it's deeper",
        "The moon adds salt to the ocean"
      ],
      correct: 1,
      explanation: "Rivers carry a very small amount of salt. Over millions of years, evaporation removes water from the ocean but leaves the salt, so it builds up."
    },
    {
      question: "About how salty is the ocean?",
      options: ["About 0.1% salt", "About 3.5% salt", "About 35% salt", "About 100% salt"],
      correct: 1,
      explanation: "Ocean water is about 3.5% salt. That's about 35 grams of salt in every liter of seawater."
    },
    {
      question: "Which is MORE dense?",
      options: ["Fresh water", "Salt water", "They're the same", "It depends on the day"],
      correct: 1,
      explanation: "Salt water is denser than fresh water because it has dissolved salt in it. That's why things float more easily in salty water."
    },
    {
      question: "What is the Dead Sea known for?",
      options: [
        "Being the deepest ocean",
        "Being much saltier than the ocean — and having no outlet",
        "Being the coldest ocean in the world",
        "Being a freshwater lake"
      ],
      correct: 1,
      explanation: "The Dead Sea is a lake with no outlet. Water only leaves by evaporation, so salt keeps building up — making it about 10 times saltier than the ocean."
    }
  ],

  chapterQuiz: [
    // --- What is salt / where it comes from ---
    {
      question: "Where does the salt in the ocean originally come from?",
      options: [
        "It's made by ocean animals",
        "It comes from rocks and soil on land, carried by rivers",
        "It falls out of the sky with rain",
        "It's made by underwater volcanoes only"
      ],
      correct: 1,
      explanation: "Rain dissolves tiny bits of salt from rocks on land. Rivers carry those minerals to the ocean, where they build up over millions of years."
    },
    {
      question: "What is salt made of?",
      options: [
        "Water and air",
        "Sodium and chloride (a mineral found in rocks)",
        "Only calcium",
        "Sugar crystals"
      ],
      correct: 1,
      explanation: "The salt we know is sodium chloride — a mineral that comes from rocks and soil."
    },
    {
      question: "Which statement is TRUE about how salt gets into the ocean?",
      options: [
        "Salt falls from the sky during storms",
        "Rivers slowly carry salt from rocks to the ocean",
        "Salt is created by fish",
        "Salt magically appears in the ocean"
      ],
      correct: 1,
      explanation: "Rivers carry a tiny amount of dissolved salt from rocks to the ocean, where it builds up because evaporation leaves it behind."
    },
    {
      question: "Why are rivers fresh-tasting even though they carry salt?",
      options: [
        "Rivers have no salt at all",
        "Rivers carry so little salt it can't be tasted",
        "Rivers filter salt using rocks",
        "Rivers freeze out the salt"
      ],
      correct: 1,
      explanation: "Rivers carry a very tiny amount of salt — much too little to taste. The ocean has much more salt because it builds up over time."
    },
    {
      question: "When ocean water evaporates, what happens to the salt?",
      options: [
        "It evaporates too",
        "It floats into the air",
        "It stays behind in the ocean",
        "It turns into clouds"
      ],
      correct: 2,
      explanation: "Salt doesn't evaporate with water. It stays in the ocean — which is why the ocean gets saltier over time."
    },

    // --- How salty ---
    {
      question: "About how salty is ocean water?",
      options: ["About 0.1% salt", "About 3.5% salt", "About 35% salt", "About 100% salt"],
      correct: 1,
      explanation: "Ocean water is about 3.5% salt. That's about 35 grams of salt in every liter of seawater."
    },
    {
      question: "If you had 1 liter of ocean water, about how much salt would be in it?",
      options: ["About 3.5 grams", "About 35 grams", "About 350 grams", "About 3.5 kilograms"],
      correct: 1,
      explanation: "Ocean water is about 3.5% salt, which means about 35 grams of salt per liter."
    },
    {
      question: "If you let a cup of ocean water evaporate completely, what would be left?",
      options: [
        "Nothing",
        "A few grains of salt",
        "About a teaspoon of salt",
        "A cup of water"
      ],
      correct: 2,
      explanation: "The water evaporates, but the salt stays. A cup of ocean water leaves behind about a teaspoon of salt."
    },

    // --- Why rivers are fresh, oceans are salty ---
    {
      question: "Why does the ocean get saltier over time, but rivers stay fresh?",
      options: [
        "Rivers filter the salt out of water",
        "Water evaporates from the ocean but leaves the salt behind; rivers only carry a tiny bit at a time",
        "Ocean water has more salt because it's deeper",
        "The moon adds salt to the ocean"
      ],
      correct: 1,
      explanation: "Rivers carry a very small amount of salt. Over millions of years, evaporation removes water from the ocean but leaves the salt, so it builds up."
    },
    {
      question: "Which process REMOVES water from the ocean but leaves salt behind?",
      options: ["Precipitation", "Condensation", "Evaporation", "Freezing"],
      correct: 2,
      explanation: "Evaporation turns liquid water into water vapor, which rises into the atmosphere. Salt does not evaporate, so it stays in the ocean."
    },

    // --- Salinity varies ---
    {
      question: "Which place would have the SALTIEST ocean water?",
      options: [
        "Near the equator where it's hot and sunny",
        "Near a river mouth",
        "Near melting glaciers",
        "Where it rains a lot"
      ],
      correct: 0,
      explanation: "Warmer places have more evaporation, which leaves more salt behind — so ocean water near the equator is saltier."
    },
    {
      question: "Which place would have the LEAST salty ocean water?",
      options: [
        "Near the equator",
        "In a hot, sunny sea",
        "Near a river mouth",
        "In the middle of the ocean"
      ],
      correct: 2,
      explanation: "Rivers dump fresh water into the ocean, so ocean water near a river mouth is less salty."
    },
    {
      question: "Why is ocean water near melting glaciers less salty?",
      options: [
        "The cold kills the salt",
        "The melting ice adds fresh water to the ocean",
        "Salt freezes and sinks",
        "There's no salt in that part of the ocean"
      ],
      correct: 1,
      explanation: "Melting glaciers add fresh water to the ocean, which dilutes the salt and makes the water less salty."
    },

    // --- Dead Sea ---
    {
      question: "What is the Dead Sea known for?",
      options: [
        "Being the deepest ocean",
        "Being much saltier than the ocean — and having no outlet",
        "Being the coldest ocean in the world",
        "Being a freshwater lake"
      ],
      correct: 1,
      explanation: "The Dead Sea is a lake with no outlet. Water only leaves by evaporation, so salt keeps building up — making it about 10 times saltier than the ocean."
    },
    {
      question: "Why is the Dead Sea so salty?",
      options: [
        "Fish keep adding salt to it",
        "It has no outlet, so water only leaves by evaporation — salt has nowhere to go",
        "It's near the equator",
        "Someone poured salt into it"
      ],
      correct: 1,
      explanation: "The Dead Sea is a closed lake — water flows in but only leaves by evaporation. Salt stays behind and builds up."
    },
    {
      question: "Why can people float easily in the Dead Sea?",
      options: [
        "The water is very cold",
        "The water is very deep",
        "Salt makes the water dense, so it pushes up more",
        "There are no waves"
      ],
      correct: 2,
      explanation: "Salt water is denser than fresh water. Very salty water pushes up strongly, so people float easily."
    },

    // --- Density ---
    {
      question: "Which is MORE dense?",
      options: ["Fresh water", "Salt water", "They're the same", "It depends on the day"],
      correct: 1,
      explanation: "Salt water is denser than fresh water because it has dissolved salt in it."
    },
    {
      question: "You put an egg in a glass of fresh water, and it sinks. Then you add salt and stir. What happens?",
      options: [
        "The egg sinks faster",
        "The egg floats",
        "The egg dissolves",
        "Nothing changes"
      ],
      correct: 1,
      explanation: "Adding salt makes the water denser, which pushes the egg up. That's why the egg floats in salt water."
    },
    {
      question: "Why does salt water freeze at a LOWER temperature than fresh water?",
      options: [
        "Because salt makes water warmer",
        "Because the salt gets in the way of ice crystals forming",
        "Because salt water is heavier",
        "Because salt makes water disappear"
      ],
      correct: 1,
      explanation: "Salt particles get in the way of water molecules forming ice crystals, so salt water has to get colder before it freezes. That's why we salt icy roads."
    },
    {
      question: "Why do we put salt on icy roads in winter?",
      options: [
        "To make the road taste better",
        "To make the ice freeze faster",
        "Because salt water freezes at a lower temperature, so it stops ice from forming",
        "Because salt melts the road"
      ],
      correct: 2,
      explanation: "Salt lowers the freezing point of water, so the ice stops forming even when it's cold. That makes the roads safer."
    },

    // --- Drinking and desalination ---
    {
      question: "Why can't humans drink ocean water?",
      options: [
        "It's too cold",
        "It's too salty — drinking it makes you MORE thirsty",
        "It has too many fish in it",
        "It's dirty"
      ],
      correct: 1,
      explanation: "The salt in ocean water is too much for our bodies. Drinking it actually makes you thirstier because your body uses its own fresh water to get rid of the extra salt."
    },
    {
      question: "What is desalination?",
      options: [
        "Freezing ocean water",
        "Removing the salt from seawater to make it drinkable",
        "Adding salt to fresh water",
        "Boiling ocean water for fun"
      ],
      correct: 1,
      explanation: "Desalination means taking the salt out of seawater so it can be used for drinking or farming. It's expensive and uses a lot of energy."
    },
    {
      question: "Why do we need fresh water instead of salt water?",
      options: [
        "Fresh water tastes better",
        "Our bodies and plants can't use salt water — it's harmful to them",
        "Salt water is a different color",
        "Fresh water is colder"
      ],
      correct: 1,
      explanation: "Our bodies and most plants and animals need fresh water. Salt water dehydrates us and harms plants."
    },

    // --- Ocean life ---
    {
      question: "How do ocean fish survive in salt water?",
      options: [
        "They drink fresh water from rivers",
        "They have special bodies that get rid of extra salt",
        "They don't drink anything",
        "They only drink when it rains"
      ],
      correct: 1,
      explanation: "Ocean fish drink seawater and get rid of the extra salt through their gills or kidneys."
    },
    {
      question: "What would happen if you put a freshwater fish in the ocean?",
      options: [
        "It would swim faster",
        "It would probably die because its body can't handle the salt",
        "It would turn into a saltwater fish",
        "Nothing would happen"
      ],
      correct: 1,
      explanation: "Freshwater fish have bodies built for freshwater. The salt in the ocean would be harmful to them."
    },
    {
      question: "Which of these ocean animals does NOT drink seawater?",
      options: ["Fish", "Sharks", "Whales", "Sea snails"],
      correct: 2,
      explanation: "Whales don't drink seawater at all. They get water from the food they eat (like fish and krill)."
    },

    // --- Reasoning / application ---
    {
      question: "A student says, 'The ocean has salt because fish release salt into the water.' What's wrong with this idea?",
      options: [
        "Nothing — it's correct",
        "The salt comes from rocks on land, not from fish. Fish have to get rid of extra salt, not add it",
        "Fish don't live in the ocean",
        "Fish don't release salt"
      ],
      correct: 1,
      explanation: "The ocean's salt comes from rocks on land, carried by rivers over millions of years. Fish actually remove salt from their bodies, not add it to the ocean."
    },
    {
      question: "You swim in a lake (fresh water) and then in the ocean (salt water). Where do you float more easily?",
      options: [
        "In the lake, because fresh water is lighter",
        "In the ocean, because salt water is denser",
        "You float the same in both",
        "You don't float in either"
      ],
      correct: 1,
      explanation: "Salt water is denser, which means it pushes you up more. That's why it's easier to float in the ocean than in a lake."
    },
    {
      question: "Which statement about ocean salt is TRUE?",
      options: [
        "The ocean has always been exactly as salty as it is now",
        "The ocean gets LESS salty over time",
        "The ocean has gotten saltier over millions of years, and it's still building up",
        "The ocean will become fresh water in 100 years"
      ],
      correct: 2,
      explanation: "The ocean has been building up salt for millions of years because evaporation leaves salt behind. It's still getting saltier, very slowly."
    },
    {
      question: "Why is the ocean salty but MOST lakes are not?",
      options: [
        "Lakes have fewer fish",
        "Most lakes have an outlet, so salt flows out instead of building up",
        "Lakes are too small to hold salt",
        "Lakes are always frozen"
      ],
      correct: 1,
      explanation: "Most lakes have rivers flowing out of them, so salt washes through and out. Lakes without outlets (like the Dead Sea) get saltier and saltier."
    },
    {
      question: "A scientist measures the saltiness of ocean water at two spots. Spot A is near the equator. Spot B is near a melting glacier. Which will be saltier?",
      options: [
        "Spot A — warm water evaporates more, leaving more salt behind",
        "Spot B — cold water holds more salt",
        "They will be the same",
        "Neither will have any salt"
      ],
      correct: 0,
      explanation: "Near the equator, more evaporation happens, which leaves more salt behind. Near a melting glacier, fresh water dilutes the salt."
    }
  ],

  skills: [
    {
      key: "salinity-basics",
      label: "What salt is, where it comes from, and how salty the ocean is",
      remember: "Ocean salt comes from rocks on land, carried by rivers. Water evaporates, salt stays behind, and the ocean builds up to about 3.5% salt over millions of years.",
      workedExample: "Rocks + rain → salt dissolves → river carries it to ocean → water evaporates → salt stays → ocean gets saltier"
    },
    {
      key: "salt-vs-fresh-behavior",
      label: "How salt water behaves differently from fresh water",
      remember: "Salt water is denser (things float more easily). Salt water freezes at a lower temperature and boils at a slightly higher temperature. You can't drink it.",
      workedExample: "Egg sinks in fresh water, floats in salt water. Icy roads get salted so ice doesn't form."
    }
  ]
};