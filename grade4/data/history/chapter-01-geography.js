/* ==========================================================
   History Chapter 01 — Geography
   Covers: compass rose, cardinal/intermediate directions,
   map key and symbols, scale and distance, latitude and
   longitude, physical vs. human features, and map types.
   ========================================================== */

export const chapter = {
  id: "chapter-01-geography",
  name: "Geography",
  shortName: "Geography",

  studyGuideHtml: `
    <h2>🗺️ Geography</h2>
    <p>Geography is the study of Earth's features and the people and places on it. Maps and globes are the tools we use to understand the world.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Maps vs. Globes</span>
        <div class="sg-def">
          <strong>Map</strong> — flat, easy to carry, can show a small area in detail.<br>
          <strong>Globe</strong> — 3-dimensional, shows the whole Earth, shows Earth's shape more accurately (but larger and harder to carry).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Compass Rose — Cardinal Directions</span>
        <div class="sg-def">
          <strong>N</strong> = North<br>
          <strong>E</strong> = East<br>
          <strong>S</strong> = South<br>
          <strong>W</strong> = West<br><br>
          <strong>Memory trick:</strong> "Never Eat Soggy Waffles" (N → E → S → W)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Intermediate Directions</span>
        <div class="sg-def">
          Directions that fall <em>between</em> the cardinal directions:<br><br>
          <strong>NE</strong> = Northeast (between N and E)<br>
          <strong>SE</strong> = Southeast (between S and E)<br>
          <strong>SW</strong> = Southwest (between S and W)<br>
          <strong>NW</strong> = Northwest (between N and W)
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Map Key / Legend and Symbols</span>
        <div class="sg-def">
          A <strong>legend</strong> (also called a key) explains what the symbols on a map mean. A <strong>symbol</strong> is a picture, line, color, or shape used to represent something on a map.<br><br>
          Example: ⛺ = campground, ⛽ = gas station, ▲ = mountains
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Map Scale — Calculating Real-World Distance</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          A <strong>map scale</strong> shows the relationship between map distance and real-world distance.<br><br>
          <strong>Example scale:</strong> 1 inch = 100 miles<br>
          • Measure the distance between two cities on the map: 3 inches<br>
          • Multiply: 3 × 100 = <strong>300 miles</strong><br><br>
          <strong>Another example scale:</strong> 1 cm = 10 km<br>
          • Measure on the map: 6 cm<br>
          • Multiply: 6 × 10 = <strong>60 km</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Latitude & Longitude</span>
        <div class="sg-def">
          <strong>Latitude</strong> — imaginary lines running <em>east-west</em> across Earth. Measures how far <strong>north or south</strong> of the Equator a place is.<br><br>
          <strong>Longitude</strong> — imaginary lines running <em>north-south</em> across Earth. Measures how far <strong>east or west</strong> of the Prime Meridian a place is.<br><br>
          Together, latitude and longitude give the <strong>exact location</strong> of any place on Earth.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Equator & Prime Meridian</span>
        <div class="sg-def">
          <strong>Equator</strong> — the imaginary line at <strong>0° latitude</strong>. Divides the Northern Hemisphere from the Southern Hemisphere.<br><br>
          <strong>Prime Meridian</strong> — the imaginary line at <strong>0° longitude</strong>. Divides the Eastern Hemisphere from the Western Hemisphere.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Physical vs. Human Features</span>
        <div class="sg-def">
          <strong>Physical feature</strong> — something that occurs <em>naturally</em>. Examples: river, mountain, canyon, lake, plateau, peninsula, strait.<br><br>
          <strong>Human feature</strong> — something <em>created by people</em>. Examples: city, highway, airport, country, railroad, dam.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Types of Maps</span>
        <div class="sg-def">
          <strong>Political map</strong> — shows borders between countries, states, and cities.<br>
          <strong>Physical map</strong> — shows natural features like mountains, rivers, and lakes.<br>
          <strong>Cultural map</strong> — shows information about people and their activities (like what people eat or what languages they speak).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Special Physical Features</span>
        <div class="sg-def">
          <strong>Peninsula</strong> — land surrounded by water on most, but not all, sides.<br>
          <strong>Strait</strong> — a narrow body of water connecting two larger bodies of water.<br>
          <strong>Canyon</strong> — a deep valley with very steep sides, often carved by a river.<br>
          <strong>Plateau</strong> — a large, flat area of land that is higher than the land around it.
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Latitude lines are called "parallels" because they never touch — they stay parallel to the Equator. Longitude lines are called "meridians" and they all meet at the North and South Poles.</div>
    </div>

    <div class="highlight">
      <strong>Quick reminder:</strong> Latitude sounds like "ladder" → it measures how high up or down you are (north/south). Longitude is long → it measures how far around the globe you are (east/west).
    </div>
  `,

  miniCheck: [
    {
      question: "What does a map key (or legend) do?",
      options: [
        "Tells you which direction is north",
        "Explains what the symbols on a map mean",
        "Tells you how far apart two places are",
        "Shows the title of the map"
      ],
      correct: 1,
      explanation: "The key or legend explains what each symbol, color, or line on the map represents."
    },
    {
      question: "A map has a scale of 1 inch = 50 miles. Two cities are 4 inches apart on the map. How far apart are they in real life?",
      options: ["4 miles", "54 miles", "200 miles", "400 miles"],
      correct: 2,
      explanation: "Multiply the map distance by the scale: 4 × 50 = 200 miles."
    },
    {
      question: "Which direction is between North and East?",
      options: ["Northeast (NE)", "Northwest (NW)", "Southeast (SE)", "Southwest (SW)"],
      correct: 0,
      explanation: "Northeast is the intermediate direction between North and East."
    },
    {
      question: "What is the imaginary line at 0° latitude?",
      options: ["Prime Meridian", "Equator", "Compass Rose", "Legend"],
      correct: 1,
      explanation: "The Equator is at 0° latitude and divides the Northern and Southern Hemispheres."
    },
    {
      question: "Which line measures how far east or west a place is?",
      options: ["Latitude", "Longitude", "Scale", "Legend"],
      correct: 1,
      explanation: "Longitude measures distance east or west of the Prime Meridian."
    }
  ],

  chapterQuiz: [
    {
      question: "What is the difference between a map and a globe?",
      options: [
        "A map is 3D, a globe is flat",
        "A map is flat and easier to carry; a globe shows Earth's shape more accurately",
        "A globe can only show one country at a time",
        "There is no difference"
      ],
      correct: 1,
      explanation: "Maps are flat, portable, and detailed. Globes are 3-dimensional and show Earth's true shape."
    },
    {
      question: "Which would be the better choice: you want to see the streets in your neighborhood.",
      options: ["Map", "Globe", "Either works the same", "Neither works"],
      correct: 0,
      explanation: "A map is better for detailed, small-area views like a neighborhood."
    },
    {
      question: "Which would be the better choice: you want to study the shape of Earth.",
      options: ["Map", "Globe", "Either works the same", "Neither works"],
      correct: 1,
      explanation: "A globe shows Earth's 3-dimensional shape accurately."
    },
    {
      question: "What does a map key (legend) do?",
      options: [
        "Tells you which direction is north",
        "Explains what the symbols on a map mean",
        "Tells you how far apart two places are",
        "Shows the title of the map"
      ],
      correct: 1,
      explanation: "The key explains the symbols on the map."
    },
    {
      question: "What does map scale tell us?",
      options: [
        "What the colors mean",
        "How the distance on the map relates to the distance in real life",
        "How many countries are shown",
        "Where the compass rose is"
      ],
      correct: 1,
      explanation: "Scale shows the relationship between a distance on the map and the actual distance in real life."
    },
    {
      question: "A map has a scale of 1 inch = 50 miles. Two cities are 4 inches apart on the map. How far apart are they in real life?",
      options: ["4 miles", "54 miles", "200 miles", "400 miles"],
      correct: 2,
      explanation: "4 × 50 = 200 miles."
    },
    {
      question: "A map has a scale of 1 centimeter = 10 kilometers. A road measures 6 centimeters on the map. How long is the road in real life?",
      options: ["6 km", "16 km", "60 km", "600 km"],
      correct: 2,
      explanation: "6 × 10 = 60 km."
    },
    {
      question: "Which direction is directly opposite of East?",
      options: ["North", "South", "West", "Northeast"],
      correct: 2,
      explanation: "West is directly opposite of East on a compass rose."
    },
    {
      question: "Which intermediate direction is between South and West?",
      options: ["Southeast (SE)", "Southwest (SW)", "Northeast (NE)", "Northwest (NW)"],
      correct: 1,
      explanation: "Southwest is between South and West."
    },
    {
      question: "Which line measures distance north or south of the Equator?",
      options: ["Latitude", "Longitude", "Scale", "Legend"],
      correct: 0,
      explanation: "Latitude measures north/south distance from the Equator."
    },
    {
      question: "Which line measures distance east or west of the Prime Meridian?",
      options: ["Latitude", "Longitude", "Scale", "Legend"],
      correct: 1,
      explanation: "Longitude measures east/west distance from the Prime Meridian."
    },
    {
      question: "What is the imaginary line at 0° latitude?",
      options: ["Prime Meridian", "Equator", "Compass Rose", "Legend"],
      correct: 1,
      explanation: "The Equator is at 0° latitude."
    },
    {
      question: "What is the imaginary line at 0° longitude?",
      options: ["Prime Meridian", "Equator", "Compass Rose", "Legend"],
      correct: 0,
      explanation: "The Prime Meridian is at 0° longitude."
    },
    {
      question: "What do latitude and longitude help us find?",
      options: [
        "The type of map being used",
        "An exact location on Earth",
        "The distance between two cities",
        "The direction of north"
      ],
      correct: 1,
      explanation: "Latitude and longitude together pinpoint any location on Earth."
    },
    {
      question: "Which coordinate would be in the Northern Hemisphere?",
      options: [
        "20°S, 40°W",
        "15°S, 80°E",
        "45°N, 30°W",
        "10°S, 20°E"
      ],
      correct: 2,
      explanation: "The N in 45°N tells us it's in the Northern Hemisphere."
    },
    {
      question: "Which of these is a PHYSICAL feature?",
      options: ["City", "Highway", "River", "Airport"],
      correct: 2,
      explanation: "Rivers occur naturally. Cities, highways, and airports are created by people (human features)."
    },
    {
      question: "Which of these is a HUMAN feature?",
      options: ["Mountain", "Lake", "Canyon", "Highway"],
      correct: 3,
      explanation: "Highways are built by people. Mountains, lakes, and canyons are natural (physical)."
    },
    {
      question: "Land surrounded by water on most, but not all, sides is called a:",
      options: ["Peninsula", "Strait", "Canyon", "Plateau"],
      correct: 0,
      explanation: "A peninsula is surrounded by water on most sides but still connected to land on at least one side."
    },
    {
      question: "A narrow body of water connecting two larger bodies of water is a:",
      options: ["Peninsula", "Strait", "Canyon", "Plateau"],
      correct: 1,
      explanation: "A strait is a narrow waterway connecting two larger bodies of water."
    },
    {
      question: "A deep valley with very steep sides, often carved by a river, is a:",
      options: ["Peninsula", "Strait", "Canyon", "Plateau"],
      correct: 2,
      explanation: "A canyon is a deep, steep-sided valley, often carved by a river over a long time."
    },
    {
      question: "A large, flat area of land that is higher than the land around it is a:",
      options: ["Peninsula", "Strait", "Canyon", "Plateau"],
      correct: 3,
      explanation: "A plateau is a raised, flat area of land."
    },
    {
      question: "You want to find the borders between countries. Which type of map should you use?",
      options: ["Political", "Physical", "Cultural", "None of these"],
      correct: 0,
      explanation: "Political maps show borders between countries and states."
    },
    {
      question: "You want to find mountains, rivers, and other natural features. Which type of map?",
      options: ["Political", "Physical", "Cultural", "None of these"],
      correct: 1,
      explanation: "Physical maps show natural features."
    },
    {
      question: "You want to see information about what people eat in different parts of the world. Which type of map?",
      options: ["Political", "Physical", "Cultural", "None of these"],
      correct: 2,
      explanation: "Cultural maps show information about people and their activities."
    },
    {
      question: "A map symbol shows a small tree. What does it probably represent?",
      options: ["A city", "A forest or park", "A river", "A highway"],
      correct: 1,
      explanation: "A tree symbol usually represents a forest, park, or wooded area. You'd confirm this by checking the map's legend."
    }
  ],

  skills: [
    {
      key: "compass-directions",
      label: "Cardinal and intermediate directions",
      remember: "Cardinal: N, E, S, W. Intermediate: NE, SE, SW, NW. Mnemonic: Never Eat Soggy Waffles.",
      workedExample: "Between North and East is Northeast (NE)."
    },
    {
      key: "map-legend-symbols",
      label: "Reading a map key and symbols",
      remember: "The legend (or key) explains what each symbol, color, or line on a map means.",
      workedExample: "⛺ = campground; ⛽ = gas station; ▲ = mountains"
    },
    {
      key: "map-scale",
      label: "Using map scale to calculate real-world distance",
      remember: "Multiply the measured map distance by the scale.",
      workedExample: "Scale: 1 inch = 100 miles. Measured: 3 inches. 3 × 100 = 300 miles."
    },
    {
      key: "latitude-longitude",
      label: "Latitude and longitude",
      remember: "Latitude = north/south of Equator (0°). Longitude = east/west of Prime Meridian (0°).",
      workedExample: "45°N, 30°W is in the Northern and Western Hemispheres."
    },
    {
      key: "physical-human-features",
      label: "Physical vs. human features",
      remember: "Physical = natural (river, mountain). Human = created by people (city, highway).",
      workedExample: "River (physical) vs. Highway (human)"
    },
    {
      key: "map-types",
      label: "Types of maps (political, physical, cultural)",
      remember: "Political = borders. Physical = natural features. Cultural = people and their activities.",
      workedExample: "To find countries' borders, use a political map."
    }
  ]
};