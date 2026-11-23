/* ==========================================================
   Science Chapter 21 — Clouds: How They Form & What They Tell Us
   Earth's Systems unit, Atmosphere days 9–10 (11/16 and 11/18).
   Built from: Einstein Wonders ("How can we predict weather using
   clouds?" / "Can we use clouds to predict the weather?"), the cloud
   notes (what is a cloud, cloud formation, cloud types by height,
   word-part meanings, the "Clouds: type, meaning, indicates" table),
   the day-10 Do Now (where Earth's weather occurs), and the cloud
   descriptions from the weather homework packet shown on day 12.
   ========================================================== */

export const chapter = {
  id: "chapter-21-clouds",
  name: "Clouds: How They Form & What They Tell Us",
  shortName: "Clouds",

  studyGuideHtml: `
    <h2>☁️ Clouds: How They Form &amp; What They Tell Us</h2>
    <p><strong>Einstein Wonders:</strong> can we use clouds to <strong>predict the weather</strong>? Yes! First learn what a cloud is and how it forms, then learn the cloud names. Each name is built from word parts that tell you what the cloud looks like and how high it is.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">What is a cloud? ☁️</span>
        <div class="sg-def">
          A <strong>cloud</strong> is a mass of <strong>water droplets</strong> or <strong>ice crystals</strong> suspended (floating) in the atmosphere.<br>
          Clouds form when <strong>water condenses</strong> in the sky.<br>
          All of Earth's <strong>weather</strong>, clouds included, happens in the <strong>troposphere</strong>, the lowest layer of the atmosphere.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How a cloud forms 🔄</span>
        <div class="sg-def" style="background:#E3F2FD;">
          1. Heat energy from the <strong>Sun evaporates</strong> water molecules.<br>
          2. <strong>Warm, moist, less dense</strong> air <strong>rises</strong>.<br>
          3. The air temperature <strong>drops</strong> as it rises, and the water vapor <strong>condenses</strong> back to liquid onto tiny <strong>solid particles</strong>.<br>
          • More and more droplets gather, forming <strong>larger clouds</strong>.<br>
          • Eventually some droplets get large enough to fall as <strong>precipitation</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How clouds are classified 🗂️</span>
        <div class="sg-def">
          Clouds are sorted by <strong>3 things</strong>:<br>
          1. <strong>Appearance</strong> (what they look like)<br>
          2. <strong>Altitude</strong> (how high they are)<br>
          3. <strong>Ability to make precipitation</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Cloud word parts 🔤</span>
        <div class="sg-def" style="background:#FFF9C4;">
          • <strong>Cirrus / Cirro-</strong> = "curl of hair" → high, icy clouds<br>
          • <strong>Alto-</strong> = middle clouds<br>
          • <strong>Cumulus / Cumulo-</strong> = "heap" → puffy clouds<br>
          • <strong>Stratus / Strato-</strong> = "layer" → a layered sheet of clouds<br>
          • <strong>Nimbo- / -nimbus</strong> = "dark cloud" → rain clouds<br><br>
          Put them together: <strong>nimbo + stratus</strong> = a dark, layered rain cloud. <strong>Cumulo + nimbus</strong> = a puffy, heaped-up rain cloud.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Cloud types by height 📏</span>
        <div class="sg-def">
          • <strong>High clouds: 7–12 km</strong> (23,000–40,000 ft): cirrus, cirrocumulus, cirrostratus<br>
          • <strong>Middle clouds: 2–7 km</strong> (6,500–23,000 ft): altocumulus, altostratus<br>
          • <strong>Low clouds: surface–2 km</strong> (surface–6,500 ft): stratus, stratocumulus, nimbostratus<br>
          • <strong>Clouds with vertical growth: surface–12 km</strong> (surface–40,000 ft): cumulus, cumulonimbus. They <strong>grow up</strong> instead of spreading out across the sky.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">What clouds tell us 🔮</span>
        <div class="sg-def" style="background:#E8F5E9;">
          • <strong>Cirrus:</strong> ice crystals, often seen with <strong>fair weather</strong>, may signal <strong>warm fronts</strong>.<br>
          • <strong>Cumulus:</strong> little to no precipitation, but can <strong>grow by convection</strong>.<br>
          • <strong>Stratus:</strong> wide, flat, gray, possible <strong>light precipitation</strong>.<br>
          • <strong>Nimbus:</strong> <strong>precipitation</strong>, upward-moving moist air.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Meet the clouds (homework packet) 📋</span>
        <div class="sg-def">
          <strong>High:</strong> <strong>Cirrus</strong>: thin and wispy, blown by high winds, usually mean fair weather. <strong>Cirrostratus</strong>: very thin sheets covering large parts of the sky. <strong>Cirrocumulus</strong>: small round puffs, called "mackerel clouds" because they look like fish scales.<br><br>
          <strong>Middle:</strong> <strong>Altostratus</strong>: ice crystals and water droplets, can cover the whole sky, form <strong>before rain storms</strong>. <strong>Altocumulus</strong>: gray and puffy, seen on warm, humid summer mornings, usually a sign <strong>thunderstorms</strong> will follow later in the day.<br><br>
          <strong>Low:</strong> <strong>Nimbostratus</strong>: dark gray, produce falling <strong>rain or snow</strong>. <strong>Stratus</strong>: gray, cover the entire sky, can come from thick <strong>fog lifting</strong> in the morning. <strong>Stratocumulus</strong>: low, lumpy and gray, the <strong>most common</strong> clouds, often no precipitation (when they do, it's light rain or snow).<br><br>
          <strong>Vertical:</strong> <strong>Cumulonimbus</strong>: can reach 39,000 ft or higher from very strong <strong>updrafts</strong>; bring <strong>lightning, thunder, violent tornadoes</strong> and other intense weather. <strong>Cumulus</strong>: "fair weather clouds" that look like <strong>floating cotton</strong>, with very flat bases.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Mixing up <strong>cumulus</strong> and <strong>cumulonimbus</strong>. Both are puffy clouds that grow up. Add <strong>-nimbus</strong> ("dark cloud") and you get the storm cloud with lightning and thunder. Plain cumulus clouds are fair-weather clouds.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> You can read the sky like a weather report. Thin, wispy cirrus clouds usually mean a nice day. Gray, puffy altocumulus clouds on a warm summer morning? Thunderstorms may be on the way later!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is a cloud?",
      options: [
        "A mass of water droplets or ice crystals suspended in the atmosphere",
        "A mass of smoke floating in the atmosphere",
        "A layer of dry, hot air",
        "A gas that has no water in it"
      ],
      correct: 0,
      explanation: "A cloud is a mass of water droplets or ice crystals suspended in the atmosphere. Clouds form when water condenses in the sky."
    },
    {
      question: "Where does all of Earth's weather occur?",
      options: ["The troposphere", "In the ocean", "At the Kármán line", "Throughout the entire atmosphere"],
      correct: 0,
      explanation: "All of Earth's weather happens in the troposphere, the lowest layer of the atmosphere."
    },
    {
      question: "What does the word part \"cumulus\" or \"cumulo-\" mean?",
      options: ["Heap (puffy clouds)", "Layer", "Curl of hair", "Dark cloud"],
      correct: 0,
      explanation: "\"Cumulus\" means heap. Cumulus clouds are puffy."
    },
    {
      question: "Which clouds are HIGH clouds (7–12 km)?",
      options: ["Cirrus, cirrocumulus and cirrostratus", "Stratus, stratocumulus and nimbostratus", "Altocumulus and altostratus", "Cumulus and cumulonimbus"],
      correct: 0,
      explanation: "The high clouds are the cirro- clouds: cirrus, cirrocumulus and cirrostratus."
    },
    {
      question: "Which cloud brings lightning, thunder and violent tornadoes?",
      options: ["Cumulonimbus", "Cirrus", "Cumulus", "Cirrocumulus"],
      correct: 0,
      explanation: "Cumulonimbus clouds grow very tall from strong updrafts and bring lightning, thunder, violent tornadoes and other intense weather."
    }
  ],

  chapterQuiz: [
    // --- What clouds are and how they form ---
    {
      question: "A cloud is a mass of water droplets or _____ suspended in the atmosphere.",
      options: ["ice crystals", "dust storms", "salt grains", "oxygen bubbles"],
      correct: 0,
      explanation: "A cloud is a mass of water droplets or ice crystals suspended in the atmosphere."
    },
    {
      question: "Clouds form when water _____ in the sky.",
      options: ["condenses", "evaporates", "freezes into hail", "boils"],
      correct: 0,
      explanation: "Clouds form when water vapor condenses (changes from a gas back to a liquid) in the sky."
    },
    {
      question: "What is the FIRST step in cloud formation?",
      options: [
        "Heat energy from the Sun evaporates water molecules",
        "Water vapor condenses onto tiny particles",
        "Droplets fall as precipitation",
        "Cold air sinks to the ground"
      ],
      correct: 0,
      explanation: "Step 1: heat energy from the Sun evaporates water molecules. Then the warm, moist air rises and cools, and the water vapor condenses."
    },
    {
      question: "In cloud formation, what kind of air rises?",
      options: ["Warm, moist, less dense air", "Cold, dry, dense air", "Cold, moist, dense air", "Air with no water vapor"],
      correct: 0,
      explanation: "Warm, moist, less dense air rises."
    },
    {
      question: "What happens to the air temperature as air rises?",
      options: ["It drops", "It rises", "It stays the same", "It turns into a liquid"],
      correct: 0,
      explanation: "The air temperature drops as it rises, so the water vapor condenses back to liquid."
    },
    {
      question: "As air rises and cools, water vapor condenses back to liquid onto what?",
      options: ["Tiny solid particles", "The tops of mountains", "Other gases like oxygen", "Raindrops that are already falling"],
      correct: 0,
      explanation: "The water vapor condenses back to liquid onto tiny solid particles. More and more droplets gather to form larger clouds."
    },
    {
      question: "What happens when cloud droplets get large enough?",
      options: ["They may fall as precipitation", "They turn into gas", "They float higher into space", "They become dust"],
      correct: 0,
      explanation: "Eventually some droplets may get large enough to fall as precipitation."
    },
    {
      question: "Where does all of Earth's weather occur?",
      options: ["The troposphere", "In the ocean", "At the Kármán line", "Throughout the entire atmospheric column"],
      correct: 0,
      explanation: "All of Earth's weather occurs in the troposphere."
    },

    // --- Classifying clouds and word parts ---
    {
      question: "Clouds are classified by appearance, altitude and _____.",
      options: ["ability to make precipitation", "color of the sky", "the time of day", "how salty they are"],
      correct: 0,
      explanation: "Clouds are classified by appearance, altitude (height) and ability to make precipitation."
    },
    {
      question: "What does \"altitude\" mean?",
      options: ["Height", "Color", "Temperature", "Speed"],
      correct: 0,
      explanation: "Altitude means height. Clouds are grouped by how high they are."
    },
    {
      question: "What does \"cirrus\" or \"cirro-\" mean?",
      options: ["Curl of hair", "Heap", "Layer", "Dark cloud"],
      correct: 0,
      explanation: "\"Cirrus\" means curl of hair. Cirrus clouds are high, icy clouds."
    },
    {
      question: "What does \"stratus\" or \"strato-\" mean?",
      options: ["Layer", "Heap", "Curl of hair", "Middle"],
      correct: 0,
      explanation: "\"Stratus\" means layer. Stratus clouds form a layered sheet across the sky."
    },
    {
      question: "What does \"nimbo-\" or \"-nimbus\" mean?",
      options: ["Dark cloud (rain cloud)", "Heap", "Curl of hair", "High cloud"],
      correct: 0,
      explanation: "\"Nimbus\" means dark cloud. Nimbus clouds are rain clouds."
    },
    {
      question: "What does \"alto-\" mean in a cloud name?",
      options: ["Middle clouds", "High, icy clouds", "Low, layered clouds", "Rain clouds"],
      correct: 0,
      explanation: "\"Alto-\" means middle clouds, like altocumulus and altostratus."
    },
    {
      question: "Using the word parts, what kind of cloud is a NIMBOSTRATUS?",
      options: ["A dark, layered rain cloud", "A high, puffy ice cloud", "A middle cloud shaped like hair", "A tall, heaped-up fair-weather cloud"],
      correct: 0,
      explanation: "Nimbo- = dark (rain) cloud and stratus = layer. Nimbostratus clouds are dark gray and produce falling rain or snow."
    },

    // --- Heights ---
    {
      question: "How high are HIGH clouds?",
      options: ["7–12 km (23,000–40,000 ft)", "2–7 km (6,500–23,000 ft)", "Surface–2 km (surface–6,500 ft)", "Above 100 km"],
      correct: 0,
      explanation: "High clouds are 7–12 km up (23,000–40,000 ft)."
    },
    {
      question: "How high are MIDDLE clouds?",
      options: ["2–7 km (6,500–23,000 ft)", "7–12 km (23,000–40,000 ft)", "Surface–2 km (surface–6,500 ft)", "Surface–12 km"],
      correct: 0,
      explanation: "Middle clouds are 2–7 km up (6,500–23,000 ft)."
    },
    {
      question: "Which group has LOW clouds (surface–2 km)?",
      options: ["Stratus, stratocumulus and nimbostratus", "Cirrus, cirrocumulus and cirrostratus", "Altocumulus and altostratus", "Cirrus and cumulus"],
      correct: 0,
      explanation: "Low clouds are stratus, stratocumulus and nimbostratus."
    },
    {
      question: "Which two clouds are clouds with VERTICAL growth?",
      options: ["Cumulus and cumulonimbus", "Cirrus and cirrostratus", "Altocumulus and altostratus", "Stratus and stratocumulus"],
      correct: 0,
      explanation: "Cumulus and cumulonimbus grow up instead of spreading out across the sky. They can stretch from the surface to 12 km."
    },
    {
      question: "What makes clouds with vertical growth different?",
      options: [
        "They grow up instead of spreading out across the sky",
        "They are always the highest clouds",
        "They never make precipitation",
        "They are made only of ice"
      ],
      correct: 0,
      explanation: "Clouds with vertical growth grow up instead of spreading out across the sky (surface to 12 km)."
    },

    // --- What clouds indicate ---
    {
      question: "Cirrus clouds are made of ice crystals and are often seen with what kind of weather?",
      options: ["Fair weather", "Thunderstorms", "Heavy snow", "Tornadoes"],
      correct: 0,
      explanation: "Cirrus clouds are often seen with fair weather and may signal a warm front."
    },
    {
      question: "What may cirrus clouds signal?",
      options: ["A warm front", "An earthquake", "A cold, dry week", "Heavy hail"],
      correct: 0,
      explanation: "Cirrus clouds may signal warm fronts."
    },
    {
      question: "Cumulus clouds bring little to no precipitation, but they can grow by _____.",
      options: ["convection", "evaporation of the ocean", "freezing", "sinking air"],
      correct: 0,
      explanation: "Cumulus clouds can grow by convection: warm, moist air rising."
    },
    {
      question: "Wide, flat, gray clouds with possible light precipitation are _____ clouds.",
      options: ["stratus", "cirrus", "cumulus", "cirrocumulus"],
      correct: 0,
      explanation: "Stratus clouds are wide, flat and gray, with possible light precipitation."
    },
    {
      question: "Nimbus clouds indicate precipitation and what kind of air movement?",
      options: ["Upward-moving moist air", "Downward-moving dry air", "No air movement", "Air moving only sideways"],
      correct: 0,
      explanation: "Nimbus clouds indicate precipitation and upward-moving moist air."
    },

    // --- Homework packet cloud descriptions ---
    {
      question: "Which clouds are called \"mackerel clouds\" because they look like fish scales?",
      options: ["Cirrocumulus", "Nimbostratus", "Stratus", "Cumulonimbus"],
      correct: 0,
      explanation: "Cirrocumulus clouds look like small round puffs. They're called mackerel clouds because they look like fish scales."
    },
    {
      question: "Which clouds are thin and wispy, blown by high winds, and usually mean the day will have fair weather?",
      options: ["Cirrus", "Nimbostratus", "Altocumulus", "Cumulonimbus"],
      correct: 0,
      explanation: "Cirrus clouds are thin and wispy and usually mean fair or pleasant weather."
    },
    {
      question: "Gray, puffy clouds seen on a warm, humid summer morning are usually a sign that thunderstorms will follow later in the day. Which clouds are they?",
      options: ["Altocumulus", "Cirrus", "Cirrostratus", "Stratus"],
      correct: 0,
      explanation: "Altocumulus clouds are gray and puffy, seen on warm, humid summer mornings, and usually signal thunderstorms later in the day."
    },
    {
      question: "Which middle clouds can cover the entire sky and form before rain storms?",
      options: ["Altostratus", "Cirrocumulus", "Cumulus", "Stratocumulus"],
      correct: 0,
      explanation: "Altostratus clouds are made of ice crystals and water droplets. They can cover the entire sky and form before rain storms."
    },
    {
      question: "Which are the MOST common clouds?",
      options: ["Stratocumulus", "Cumulonimbus", "Cirrocumulus", "Altostratus"],
      correct: 0,
      explanation: "Stratocumulus clouds are low, lumpy and gray. They are the most common clouds."
    },
    {
      question: "Which gray clouds cover the entire sky and can be the result of very thick fog lifting in the morning?",
      options: ["Stratus", "Cirrus", "Cumulus", "Altocumulus"],
      correct: 0,
      explanation: "Stratus clouds are gray, cover the entire sky, and can be the result of thick fog lifting in the morning."
    },
    {
      question: "Which clouds are called \"fair weather clouds\" and look like floating cotton?",
      options: ["Cumulus", "Cumulonimbus", "Nimbostratus", "Altostratus"],
      correct: 0,
      explanation: "Cumulus clouds are fair weather clouds. They look like floating cotton and have very flat bases."
    },
    {
      question: "Why can cumulonimbus clouds reach 39,000 feet or higher?",
      options: ["Very strong updrafts in the atmosphere", "They are blown by high winds", "They are made of fog", "They sink from space"],
      correct: 0,
      explanation: "Cumulonimbus clouds reach elevations of 39,000 feet or higher because of very strong updrafts in the atmosphere."
    },
    {
      question: "Dark gray clouds that produce falling rain or snow are _____ clouds.",
      options: ["nimbostratus", "cirrus", "cirrocumulus", "cumulus"],
      correct: 0,
      explanation: "Nimbostratus clouds are dark gray clouds that produce falling rain or snow."
    },
    {
      question: "You see thin, wispy cirrus clouds in the morning. What weather would you predict?",
      options: ["A fair, pleasant day", "A thunderstorm right away", "Heavy snow all day", "A tornado"],
      correct: 0,
      explanation: "Cirrus clouds usually mean the day will have fair or pleasant weather. That's how clouds help predict the weather!"
    }
  ],

  skills: [
    {
      key: "cloud-formation",
      label: "What a cloud is and how it forms",
      remember: "A cloud is a mass of water droplets or ice crystals suspended in the atmosphere. 1) The Sun's heat evaporates water. 2) Warm, moist, less dense air rises. 3) The air cools as it rises, and water vapor condenses onto tiny solid particles. Big droplets fall as precipitation. Weather happens in the troposphere.",
      workedExample: "Sun evaporates water\n→ warm, moist air rises\n→ cools and condenses on particles\n→ cloud → precipitation"
    },
    {
      key: "cloud-word-parts",
      label: "Cloud word parts",
      remember: "Cirro- = curl of hair (high, icy). Alto- = middle. Cumulo- = heap (puffy). Strato- = layer (sheet). Nimbo-/-nimbus = dark cloud (rain).",
      workedExample: "Nimbostratus = dark + layer → rain cloud\nCumulonimbus = heap + dark → storm cloud\nCirrocumulus = high + puffy"
    },
    {
      key: "cloud-heights",
      label: "Cloud types by height",
      remember: "High (7–12 km): cirrus, cirrocumulus, cirrostratus. Middle (2–7 km): altocumulus, altostratus. Low (surface–2 km): stratus, stratocumulus, nimbostratus. Vertical (surface–12 km): cumulus, cumulonimbus.",
      workedExample: "Cirro- → high\nAlto- → middle\nStrato-/Nimbostratus → low\nCumulus/Cumulonimbus → grow up"
    },
    {
      key: "clouds-predict-weather",
      label: "Using clouds to predict weather",
      remember: "Cirrus: fair weather, may signal a warm front. Cumulus: fair weather, can grow by convection. Stratus: gray, light precipitation. Nimbus: precipitation. Altocumulus on a summer morning: thunderstorms later. Cumulonimbus: lightning, thunder, tornadoes.",
      workedExample: "Wispy cirrus → nice day\nAltocumulus in the morning → storms later\nCumulonimbus → thunder & lightning"
    }
  ]
};
