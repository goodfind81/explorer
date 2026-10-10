/* ==========================================================
   Science Chapter 10 — Hydrosphere & Water Cycle
   Earth's Systems unit. Covers the hydrosphere (all water on
   and around Earth) and the continuous water cycle.
   ========================================================== */

export const chapter = {
  id: "chapter-10-hydrosphere-water-cycle",
  name: "Hydrosphere & Water Cycle",
  shortName: "Hydrosphere",

  studyGuideHtml: `
    <h2>💧 The Hydrosphere & Water Cycle</h2>
    <p>Water is everywhere on Earth — underground, in the oceans, and in the air. All this water together is called the <strong>hydrosphere</strong>, and it's always moving in a continuous loop called the <strong>water cycle</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Hydrosphere — what it is</span>
        <div class="sg-def">The <strong>hydrosphere</strong> is all the water on and surrounding Earth — oceans, seas, lakes, rivers, underground water, and water vapor in the atmosphere. It's one of Earth's major systems.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Water Cycle — a continuous loop</span>
        <div class="sg-def">
          The <strong>water cycle</strong> is the never-ending movement of water between the ocean, air, and land.<br><br>
          Water doesn't get "used up" — it just keeps moving. The sun's energy drives the entire cycle.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Three Stages</span>
        <div class="sg-def">
          <strong>1. Evaporation</strong> — Liquid water changes into a gas called <strong>water vapor</strong>. The sun's heat causes this. Most evaporation happens in oceans near the <strong>equator</strong>, because the sun's heat is strongest there.<br><br>
          <strong>2. Condensation</strong> — Water vapor cools high in the atmosphere and changes back into liquid droplets. We see this as clouds, fog, or dew. <br><br>
          <strong>3. Precipitation</strong> — Water falls back to Earth as rain, snow, hail, or sleet.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Where water goes on land</span>
        <div class="sg-def">
          After precipitation, some water:<br>
          • <strong>soaks into the ground</strong> (groundwater)<br>
          • <strong>collects in streams, rivers, lakes</strong><br>
          • <strong>freezes</strong> on the ground if it's cold enough<br>
          • <strong>evaporates</strong> back into the air<br><br>
          Most of it eventually reaches the ocean, and the cycle starts again.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Wind's Role</span>
        <div class="sg-def">Wind blows the humid air from the equator long distances. It can end up anywhere in the world!</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Fun ocean fact — why seawater doesn't get saltier</span>
        <div class="sg-def" style="background:#FFF9C4;">
          When seawater evaporates, the salt stays behind. So you'd think the ocean would get saltier over time. But it doesn't — because rivers constantly carry fresh water (and a little salt) back into the ocean, keeping the balance.
        </div>
      </div>
    </div>

    <h3>🔁 The Water Cycle at a Glance</h3>
    <div class="diagram-box medium">
      <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
        <text x="240" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="14" font-weight="bold" fill="#333">The Water Cycle</text>

        <!-- Sun -->
        <circle cx="70" cy="60" r="22" fill="#F1C40F" stroke="#D35400" stroke-width="2"/>
        <text x="70" y="65" text-anchor="middle" font-size="18">☀️</text>

        <!-- Ocean -->
        <rect x="20" y="200" width="440" height="40" fill="#4A90E2" opacity="0.5" rx="4"/>
        <text x="240" y="225" text-anchor="middle" font-size="11" fill="#1565C0" font-weight="bold">OCEAN</text>

        <!-- Land / mountains -->
        <path d="M240,200 L280,150 L320,180 L360,140 L400,200 Z" fill="#8BC34A" stroke="#558B2F" stroke-width="1.5"/>
        <text x="330" y="195" text-anchor="middle" font-size="10" fill="#33691E">Land</text>

        <!-- Evaporation arrows (up from ocean) -->
        <path d="M140,195 Q140,140 160,100" stroke="#2196F3" stroke-width="2" fill="none" marker-end="url(#arrowUp)"/>
        <path d="M180,195 Q180,150 200,110" stroke="#2196F3" stroke-width="2" fill="none" marker-end="url(#arrowUp)"/>
        <text x="155" y="180" font-size="9" fill="#1565C0" font-weight="bold">EVAPORATION</text>

        <!-- Cloud -->
        <ellipse cx="290" cy="75" rx="60" ry="20" fill="#B0BEC5"/>
        <ellipse cx="260" cy="80" rx="25" ry="15" fill="#B0BEC5"/>
        <ellipse cx="320" cy="80" rx="25" ry="15" fill="#B0BEC5"/>
        <text x="290" y="80" text-anchor="middle" font-size="10" fill="#263238" font-weight="bold">CONDENSATION</text>

        <!-- Arrow from ocean up to cloud -->
        <path d="M230,110 Q260,90 270,85" stroke="#2196F3" stroke-width="2" fill="none" marker-end="url(#arrowUp)"/>

        <!-- Precipitation arrows (down from cloud) -->
        <path d="M300,95 L300,140" stroke="#2196F3" stroke-width="2" fill="none" marker-end="url(#arrowDown)"/>
        <path d="M320,95 L330,140" stroke="#2196F3" stroke-width="2" fill="none" marker-end="url(#arrowDown)"/>
        <path d="M280,95 L275,140" stroke="#2196F3" stroke-width="2" fill="none" marker-end="url(#arrowDown)"/>
        <text x="310" y="120" font-size="9" fill="#1565C0" font-weight="bold">PRECIPITATION</text>

        <!-- Arrows -->
        <defs>
          <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
            <path d="M0,8 L4,0 L8,8 Z" fill="#2196F3"/>
          </marker>
          <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,8 L8,0 Z" fill="#2196F3"/>
          </marker>
        </defs>

        <!-- Labels on right -->
        <text x="430" y="50" text-anchor="end" font-size="9" fill="#666">Evaporation → Condensation</text>
        <text x="430" y="65" text-anchor="end" font-size="9" fill="#666">→ Precipitation → Repeat!</text>
      </svg>
      <div class="diagram-caption">Water keeps cycling: ocean → air → land → back to the ocean.</div>
    </div>

    <div class="highlight">
      <strong>Key idea:</strong> The same water has been cycling on Earth for billions of years. Every living thing is made mostly of water — and we're all part of the water cycle.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> If water never disappears and just keeps cycling, then the water you drink today could be the same water a dinosaur drank millions of years ago!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is the hydrosphere?",
      options: [
        "All the land on Earth",
        "All the air on Earth",
        "All the water on and surrounding Earth",
        "Only the water in oceans"
      ],
      correct: 2,
      explanation: "The hydrosphere includes all water — oceans, lakes, rivers, groundwater, and water vapor in the atmosphere."
    },
    {
      question: "When liquid water ______ it enters the atmosphere as a gas.",
      options: ["condenses", "precipitates", "evaporates", "freezes"],
      correct: 2,
      explanation: "Evaporation changes liquid water into water vapor (gas), which enters the atmosphere."
    },
    {
      question: "The movement of water between the ocean, air, and land is called the ______.",
      options: ["hydrosphere", "water cycle", "atmosphere", "condensation"],
      correct: 1,
      explanation: "The water cycle is the continuous movement of water through Earth's systems."
    },
    {
      question: "Which process happens when water vapor cools and changes back into liquid droplets?",
      options: ["Evaporation", "Condensation", "Precipitation", "Melting"],
      correct: 1,
      explanation: "Condensation is the change from gas (water vapor) to liquid. This is what forms clouds and fog."
    },
    {
      question: "Where does MOST of Earth's evaporation happen?",
      options: [
        "Near the North Pole",
        "In oceans near the equator",
        "In mountain lakes",
        "Underground"
      ],
      correct: 1,
      explanation: "The sun's heat is strongest near the equator, so most evaporation happens in oceans there."
    }
  ],

  chapterQuiz: [
    {
      question: "What is the hydrosphere?",
      options: [
        "All the land on Earth",
        "All the air on Earth",
        "All the water on and surrounding Earth",
        "Only the water in oceans"
      ],
      correct: 2,
      explanation: "The hydrosphere is all water on Earth — oceans, lakes, rivers, groundwater, and atmospheric water vapor."
    },
    {
      question: "When liquid water evaporates, it enters the atmosphere as a ______.",
      options: ["solid", "liquid", "gas called water vapor", "cloud"],
      correct: 2,
      explanation: "Evaporation turns liquid water into water vapor, which is a gas."
    },
    {
      question: "The movement of water between the ocean, air, and land is called the ______.",
      options: ["hydrosphere", "water cycle", "atmosphere", "geosphere"],
      correct: 1,
      explanation: "The water cycle is the continuous movement of water between Earth's systems."
    },
    {
      question: "Which stage of the water cycle turns liquid water into water vapor?",
      options: ["Condensation", "Evaporation", "Precipitation", "Runoff"],
      correct: 1,
      explanation: "Evaporation changes liquid water into water vapor (gas)."
    },
    {
      question: "Which stage of the water cycle turns water vapor back into liquid?",
      options: ["Condensation", "Evaporation", "Precipitation", "Filtration"],
      correct: 0,
      explanation: "Condensation is the change from gas to liquid. It forms clouds, fog, and dew."
    },
    {
      question: "What is precipitation?",
      options: [
        "Water turning into vapor",
        "Water falling to Earth as rain, snow, hail, or sleet",
        "Water soaking into the ground",
        "Water freezing on a lake"
      ],
      correct: 1,
      explanation: "Precipitation is water falling from clouds back to Earth's surface."
    },
    {
      question: "Which of these is an example of condensation?",
      options: [
        "Snowflakes falling to the ground",
        "A puddle drying up in the sun",
        "Fog forming in a valley",
        "Water boiling in a pot"
      ],
      correct: 2,
      explanation: "Fog is water vapor that has cooled and condensed into tiny droplets."
    },
    {
      question: "Which of these is an example of precipitation?",
      options: [
        "Morning dew on the grass",
        "Water boiling in a pot",
        "Rain falling from clouds",
        "Water vapor rising from a lake"
      ],
      correct: 2,
      explanation: "Precipitation is water falling from the atmosphere — rain, snow, hail, or sleet."
    },
    {
      question: "Why does most of Earth's evaporation happen near the equator?",
      options: [
        "Because there's more water near the equator",
        "Because the sun's heat is strongest near the equator",
        "Because the wind is stronger near the equator",
        "Because the ocean is deeper near the equator"
      ],
      correct: 1,
      explanation: "The equator gets more direct sunlight, so the water there heats up and evaporates faster."
    },
    {
      question: "What happens to water after it falls to Earth as precipitation?",
      options: [
        "It disappears",
        "It always freezes immediately",
        "It can soak into the ground, collect in rivers and lakes, or evaporate again",
        "It turns into a solid permanently"
      ],
      correct: 2,
      explanation: "After precipitation, water can take many paths — into the ground, into lakes and rivers, or back into the air."
    },
    {
      question: "When seawater evaporates, the salt is left behind. So why doesn't the ocean get saltier over time?",
      options: [
        "Salt is destroyed by the sun",
        "Rivers carry fresh water (and a little salt) back into the ocean, keeping the balance",
        "Salt evaporates too",
        "Salt is washed away by waves"
      ],
      correct: 1,
      explanation: "Rivers constantly bring fresh water back into the ocean, balancing out the salt left behind by evaporation."
    },
    {
      question: "Which of these is NOT part of the water cycle?",
      options: ["Evaporation", "Condensation", "Precipitation", "Photosynthesis"],
      correct: 3,
      explanation: "Photosynthesis is how plants make food. The water cycle has three main stages: evaporation, condensation, and precipitation."
    },
    {
      question: "The sun's energy is important to the water cycle because:",
      options: [
        "It creates the wind",
        "It heats liquid water and causes evaporation",
        "It makes clouds form without water",
        "It turns water into salt"
      ],
      correct: 1,
      explanation: "The sun's energy heats liquid water, causing it to evaporate into water vapor."
    },
    {
      question: "Which of these best describes the water cycle?",
      options: [
        "Water is used up and replaced over time",
        "Water continuously moves between the ocean, air, and land",
        "Water only moves when it rains",
        "Water stays in one place forever"
      ],
      correct: 1,
      explanation: "The water cycle is continuous — water never gets used up, it just keeps moving."
    },
    {
      question: "The hydrosphere includes all of these EXCEPT:",
      options: [
        "Water vapor in the atmosphere",
        "Underground water",
        "Ocean water",
        "The air we breathe (mostly nitrogen and oxygen)"
      ],
      correct: 3,
      explanation: "The air itself (nitrogen, oxygen) is part of the atmosphere, not the hydrosphere. Water vapor in the air IS part of the hydrosphere."
    },
    {
      question: "A student sees clouds forming on a cool morning. Which stage of the water cycle is happening?",
      options: ["Evaporation", "Condensation", "Precipitation", "Freezing"],
      correct: 1,
      explanation: "Clouds form when water vapor cools and condenses into tiny droplets."
    },
    {
      question: "A student sees water droplets on the outside of a cold glass of water on a warm day. Where did the water come from?",
      options: [
        "The glass leaked",
        "The water inside the glass soaked through",
        "Water vapor in the air condensed on the cold glass",
        "The table was wet"
      ],
      correct: 2,
      explanation: "Water vapor in the warm air hits the cold glass and condenses into droplets. This is condensation."
    },
    {
      question: "Which of these would increase the rate of evaporation?",
      options: [
        "Cooler air",
        "More heat and wind",
        "Less water exposed to air",
        "More humidity in the air"
      ],
      correct: 1,
      explanation: "More heat makes water evaporate faster, and wind helps move the water vapor away."
    },
    {
      question: "Which statement about the water cycle is TRUE?",
      options: [
        "Water is destroyed when it evaporates",
        "New water is created every time it rains",
        "The same water keeps cycling through Earth's systems",
        "Water only moves during the day"
      ],
      correct: 2,
      explanation: "The water cycle has been recycling the same water for billions of years."
    },
    {
      question: "Why is the water cycle important for living things?",
      options: [
        "It creates new water for us to drink",
        "It moves water around so all living things have access to it",
        "It only helps ocean animals",
        "It only happens during storms"
      ],
      correct: 1,
      explanation: "The water cycle distributes water around the planet so plants, animals, and humans everywhere have access to it."
    }
  ],

  skills: [
    {
      key: "hydrosphere-basics",
      label: "Understanding the hydrosphere",
      remember: "The hydrosphere is ALL water on and around Earth — oceans, lakes, rivers, groundwater, and water vapor in the air.",
      workedExample: "Oceans are the largest part of the hydrosphere."
    },
    {
      key: "water-cycle-stages",
      label: "The 3 stages of the water cycle",
      remember: "Evaporation (liquid → gas) → Condensation (gas → liquid) → Precipitation (falls back to Earth).",
      workedExample: "A puddle dries up (evaporation) → clouds form (condensation) → rain falls (precipitation)."
    }
  ]
};