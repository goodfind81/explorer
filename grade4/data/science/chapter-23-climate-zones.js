/* ==========================================================
   Science Chapter 23 — Climate Zones
   Earth's Systems unit, Atmosphere days 13–14 (11/23 and 11/24).
   Built from: the day-13 "Weather or Climate?" sort (with the
   teacher's answer key: specific, short-term data vs. average,
   general, long-term data), and the day-14 slides (Einstein Wonders
   "What makes different climate zones?", weather vs. climate,
   tropical / temperate / polar zones, the three factors that
   determine climate, "Our climate is ARID", the weather/climate
   Venn diagram, and the Brain Check question).
   Day 13's Atmosphere CFU slide (air pressure vs. altitude) is
   already covered in chapter 18.
   ========================================================== */

export const chapter = {
  id: "chapter-23-climate-zones",
  name: "Climate Zones & What Makes Climate",
  shortName: "Climate Zones",

  studyGuideHtml: `
    <h2>🌍 Climate Zones &amp; What Makes Climate</h2>
    <p><strong>Einstein Wonders:</strong> what makes different <strong>climate zones</strong>? Earth is split into zones with similar <strong>average temperatures</strong> and <strong>precipitation</strong>. You'll learn the <strong>tropical</strong>, <strong>temperate</strong> and <strong>polar</strong> zones, the <strong>three factors</strong> that decide a place's climate, and why <strong>our climate is arid</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Weather or climate? 🤔</span>
        <div class="sg-def">
          <strong>Weather</strong> = <strong>specific, short-term</strong> data. It can change <strong>day to day</strong> and even <strong>hour by hour</strong>: rainy one hour, bright and sunny the next. Weather means short-term conditions such as <strong>humidity</strong>, <strong>cloud coverage</strong> and <strong>storms</strong>.<br>
          <strong>Climate</strong> = <strong>average, general, long-term</strong> data. Climate looks at <strong>long-term weather patterns</strong>. To predict the climate of a region, scientists <strong>average</strong> weather patterns and conditions over a long period of time.<br><br>
          <strong>Clue words:</strong> <em>today</em>, <em>tomorrow</em>, <em>this week</em> → weather. <em>Averages</em>, <em>average</em>, "the month of July is…" → climate.<br>
          <em>Example:</em> a desert may get rain <strong>one day</strong> (weather), but overall deserts have a very <strong>dry climate</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The class sort 🗂️</span>
        <div class="sg-def" style="background:#E8F5E9;">
          <strong>Weather:</strong> the high temp in Phoenix, AZ <em>today</em> is 101 °F • the low temp in Yuma, AZ <em>today</em> is 65 °F • a chance of thunderstorms <em>tomorrow</em> • we had 2 inches of rain <em>this week</em>.<br>
          <strong>Climate:</strong> the Antarctic region is drier than the Arctic region • Flagstaff, AZ <em>averages</em> 100 inches of snow in the winter • the month of July in Tucson, AZ is hot and sunny • the <em>average</em> rainfall in Valdivia, Chile is 2,593 mm.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How they're alike 🔁</span>
        <div class="sg-def">
          Weather and climate both <strong>measure</strong> the same things: <strong>temperature</strong>, <strong>precipitation</strong>, <strong>wind</strong> and <strong>humidity</strong>.<br>
          The difference is <strong>time</strong>: weather changes day to day, even hour by hour; climate is <strong>long-term weather trends</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Climate zones 🗺️</span>
        <div class="sg-def" style="background:#E3F2FD;">
          Earth is split into <strong>climate zones</strong> according to similar <strong>average temperatures</strong> and <strong>precipitation rates</strong>.<br>
          The climate zones around the Earth include <strong>Polar, Tundra, Mediterranean, Temperate, Arid</strong> and <strong>Tropical</strong>. There are many more types!<br>
          Three big ones, going from the <strong>equator</strong> toward the poles: <strong>tropical → temperate → polar</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Tropical 🌴</span>
        <div class="sg-def">
          Tropical climates are <strong>warm</strong> and found <strong>near the equator</strong>.<br>
          They are: • <strong>hot</strong> • <strong>humid and rainy</strong> • home to very <strong>diverse plants</strong> and animals.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Temperate 🍂</span>
        <div class="sg-def">
          Temperate climates are found <strong>in between</strong> tropical and polar climates.<br>
          They: • have <strong>seasons</strong> (get very cold and very hot) • receive <strong>average</strong> amounts of precipitation • have many <strong>forests</strong> and animal species.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Polar 🧊</span>
        <div class="sg-def">
          Polar climates are the <strong>farthest</strong> from the equator.<br>
          They have: • year-round <strong>cold</strong> temperatures with <strong>little precipitation</strong> • <strong>few</strong> plants • mostly <strong>carnivorous</strong> (meat-eating) animals.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">3 factors that decide climate 🧭</span>
        <div class="sg-def" style="background:#FFF9C4;">
          <strong>1. Distance to the equator:</strong> places close to the equator normally get more <strong>direct sunlight</strong>, so they tend to be <strong>warmer</strong>.<br>
          <strong>2. Large bodies of water:</strong> oceans and large lakes take <strong>longer to change temperature</strong>. Places near them stay <strong>cooler in the summer</strong> and <strong>warmer in the winter</strong> than places farther inland.<br>
          <strong>3. Elevation:</strong> places with <strong>high elevation</strong> have a <strong>cooler</strong> climate and a <strong>thinner atmosphere</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Our climate is ARID 🌵</span>
        <div class="sg-def">
          An <strong>arid</strong> climate is a <strong>dry</strong> climate where the possible <strong>evaporation</strong> and <strong>transpiration</strong> are <strong>more than</strong> the precipitation.<br>
          Arid regions generally get <strong>less than 250 mm (10 inches)</strong> of rain per year, and they cover roughly <strong>one-third</strong> of Earth's land surface.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Thinking a hot fact is always weather. "The month of July in Tucson is hot and sunny" is <strong>climate</strong>, because it describes what July is <strong>usually</strong> like. "The high in Phoenix <em>today</em> is 101 °F" is <strong>weather</strong>. Look for the time clue: <em>today / tomorrow / this week</em> = weather; <em>average / usually / every July</em> = climate.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why does a big lake keep a town cooler in summer and warmer in winter? Water takes <strong>longer to change temperature</strong> than land, so the lake acts like a slow thermostat for the places next to it!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "How are weather and climate similar?",
      options: [
        "They both include temperature, precipitation, humidity and wind",
        "They both study long-term weather patterns",
        "They both focus only on precipitation",
        "They are too different to compare"
      ],
      correct: 0,
      explanation: "Weather and climate both measure temperature, precipitation, wind and humidity. Only climate looks at long-term patterns."
    },
    {
      question: "Where are tropical climates found?",
      options: ["Near the equator", "Farthest from the equator", "Only on mountaintops", "In between polar and temperate zones"],
      correct: 0,
      explanation: "Tropical climates are warm and found near the equator."
    },
    {
      question: "Which climate zone has year-round cold temperatures, few plants and mostly carnivorous animals?",
      options: ["Polar", "Tropical", "Temperate", "Arid"],
      correct: 0,
      explanation: "Polar climates are the farthest from the equator, with year-round cold, little precipitation, few plants and mostly carnivorous animals."
    },
    {
      question: "\"We had 2 inches of rain this week.\" Is this weather or climate?",
      options: ["Weather", "Climate"],
      correct: 0,
      explanation: "\"This week\" is specific, short-term data, so it's weather."
    },
    {
      question: "Arid regions generally receive less than how much rain per year?",
      options: ["250 mm (10 inches)", "2,593 mm (about 100 inches)", "25 mm (1 inch)", "1,000 mm (40 inches)"],
      correct: 0,
      explanation: "Arid regions generally get less than 250 mm (10 inches) of rain per year."
    }
  ],

  chapterQuiz: [
    // --- Weather or climate sort ---
    {
      question: "\"The high temperature in Phoenix, AZ today is 101 °F.\" Weather or climate?",
      options: ["Weather", "Climate"],
      correct: 0,
      explanation: "\"Today\" makes this specific, short-term data: weather."
    },
    {
      question: "\"Flagstaff, AZ averages 100 inches of snow in the winter.\" Weather or climate?",
      options: ["Climate", "Weather"],
      correct: 0,
      explanation: "\"Averages\" is a long-term pattern, so this is climate."
    },
    {
      question: "\"There is a chance of thunderstorms tomorrow.\" Weather or climate?",
      options: ["Weather", "Climate"],
      correct: 0,
      explanation: "\"Tomorrow\" is a short-term forecast: weather."
    },
    {
      question: "\"The month of July in Tucson, AZ is hot and sunny.\" Weather or climate?",
      options: ["Climate", "Weather"],
      correct: 0,
      explanation: "This describes what July is usually like every year, a general long-term pattern, so it's climate."
    },
    {
      question: "\"The Antarctic region is drier than the Arctic region.\" Weather or climate?",
      options: ["Climate", "Weather"],
      correct: 0,
      explanation: "This compares what two regions are generally like over a long time: climate."
    },
    {
      question: "\"The low temperature in Yuma, AZ today is 65 °F.\" Weather or climate?",
      options: ["Weather", "Climate"],
      correct: 0,
      explanation: "\"Today\" means specific, short-term data: weather."
    },
    {
      question: "Which statement is about CLIMATE?",
      options: [
        "The average rainfall in Valdivia, Chile is 2,593 mm.",
        "We had 2 inches of rain this week.",
        "The low temperature in Yuma today is 65 °F.",
        "There is a chance of thunderstorms tomorrow."
      ],
      correct: 0,
      explanation: "An average rainfall is long-term data, so it's climate. The others are today, tomorrow or this week: weather."
    },
    {
      question: "Weather is _____ data, and climate is _____ data.",
      options: [
        "specific, short-term; average, long-term",
        "average, long-term; specific, short-term",
        "only temperature; only rainfall",
        "made up; measured"
      ],
      correct: 0,
      explanation: "Weather is specific, short-term data. Climate is average, general, long-term data."
    },
    {
      question: "Which word is the BEST clue that a statement is about climate?",
      options: ["Average", "Today", "Tomorrow", "This week"],
      correct: 0,
      explanation: "\"Average\" points to long-term data, which is climate. Today, tomorrow and this week are short-term: weather."
    },

    // --- Weather vs climate ideas ---
    {
      question: "How quickly can weather change?",
      options: ["Day to day, and even hour by hour", "Only once every 30 years", "Only between seasons", "It never changes"],
      correct: 0,
      explanation: "Weather can be rainy one hour and bright and sunny the next."
    },
    {
      question: "To predict the climate of a region, what do scientists do?",
      options: [
        "Average weather patterns and conditions over a long period of time",
        "Look at the weather for one afternoon",
        "Check only tomorrow's forecast",
        "Count the clouds on one day"
      ],
      correct: 0,
      explanation: "Scientists average weather patterns and conditions over a long period of time to predict climate."
    },
    {
      question: "A desert gets rain one day. Does that mean the desert has a wet climate?",
      options: [
        "No. One rainy day is weather; overall, deserts have a very dry climate.",
        "Yes. One rainy day changes the climate.",
        "Yes. Deserts always have a wet climate.",
        "No. Deserts have no weather at all."
      ],
      correct: 0,
      explanation: "A desert may receive rain one day, but overall deserts have a very dry climate."
    },
    {
      question: "Which list shows short-term WEATHER conditions from the class notes?",
      options: [
        "Humidity, cloud coverage and storms",
        "Average temperatures for a region",
        "Polar, temperate and tropical",
        "Elevation, oceans and the equator"
      ],
      correct: 0,
      explanation: "Weather means short-term conditions such as humidity, cloud coverage and storms."
    },
    {
      question: "In the weather/climate Venn diagram, what goes in the middle (things BOTH measure)?",
      options: [
        "Temperature, precipitation, wind and humidity",
        "Changes hour by hour",
        "Long-term weather trends",
        "Only the number of storms"
      ],
      correct: 0,
      explanation: "Both weather and climate measure temperature, precipitation, wind and humidity."
    },
    {
      question: "Climate looks at _____ weather patterns.",
      options: ["long-term", "hour-by-hour", "tomorrow's", "one-day"],
      correct: 0,
      explanation: "Climate looks at long-term weather patterns."
    },

    // --- Climate zones ---
    {
      question: "Earth is split into climate zones according to similar…",
      options: [
        "average temperatures and precipitation rates",
        "numbers of people and cities",
        "mountain heights only",
        "time zones"
      ],
      correct: 0,
      explanation: "Climate zones are based on similar average temperatures and precipitation rates."
    },
    {
      question: "Which is NOT one of the climate zones named in class?",
      options: ["Volcanic", "Mediterranean", "Tundra", "Arid"],
      correct: 0,
      explanation: "The class list was Polar, Tundra, Mediterranean, Temperate, Arid and Tropical. \"Volcanic\" isn't a climate zone."
    },
    {
      question: "Which describes a TROPICAL climate?",
      options: ["Hot, humid and rainy, with very diverse plants and animals", "Year-round cold with few plants", "Has seasons with average precipitation", "Very dry, under 10 inches of rain a year"],
      correct: 0,
      explanation: "Tropical climates are hot, humid and rainy, with very diverse plants and animals."
    },
    {
      question: "Where are temperate climates found?",
      options: ["In between tropical and polar climates", "Right on the equator", "Farthest from the equator", "Only in deserts"],
      correct: 0,
      explanation: "Temperate climates are found in between tropical and polar climates."
    },
    {
      question: "Which climate zone has seasons, average amounts of precipitation, and many forests?",
      options: ["Temperate", "Polar", "Tropical", "Arid"],
      correct: 0,
      explanation: "Temperate zones have seasons (very cold and very hot), average precipitation, and many forests and animal species."
    },
    {
      question: "Polar climates are found where?",
      options: ["Farthest from the equator", "Nearest the equator", "In between tropical and temperate", "Only near oceans"],
      correct: 0,
      explanation: "Polar climates are the farthest from the equator."
    },
    {
      question: "What kind of animals live mostly in polar climates?",
      options: ["Carnivorous (meat-eating) animals", "Plant-eating animals only", "No animals at all", "Only tropical birds"],
      correct: 0,
      explanation: "Polar climates have few plants and mostly carnivorous animals."
    },
    {
      question: "Going from the equator toward a pole, which order of climate zones is correct?",
      options: ["Tropical → temperate → polar", "Polar → temperate → tropical", "Temperate → tropical → polar", "Tropical → polar → temperate"],
      correct: 0,
      explanation: "Tropical is near the equator, temperate is in between, and polar is farthest from the equator."
    },
    {
      question: "Which zone has year-round cold with LITTLE precipitation?",
      options: ["Polar", "Tropical", "Temperate", "Mediterranean"],
      correct: 0,
      explanation: "Polar climates have year-round cold temperatures with little precipitation."
    },
    {
      question: "Which climate zone has the MOST diverse plants and animals?",
      options: ["Tropical", "Polar", "Arid", "Tundra"],
      correct: 0,
      explanation: "Tropical climates have very diverse plants and animals."
    },

    // --- Factors ---
    {
      question: "Which are the three factors that determine climate from the class notes?",
      options: [
        "Distance to the equator, large bodies of water, and elevation",
        "Time of day, cloud color, and wind sound",
        "Number of trees, cities, and roads",
        "Moon phase, tides, and stars"
      ],
      correct: 0,
      explanation: "Climate is determined by distance to the equator, large bodies of water, and elevation."
    },
    {
      question: "Why do places close to the equator tend to be warmer?",
      options: [
        "They normally receive more direct sunlight",
        "They are closer to the Sun's core",
        "They have more mountains",
        "They have thinner oceans"
      ],
      correct: 0,
      explanation: "Locations close to the equator normally receive more direct sunlight, so they tend to be warmer."
    },
    {
      question: "A town is next to a large lake. Compared with a town far inland, its summers are _____ and its winters are _____.",
      options: ["cooler, warmer", "hotter, colder", "hotter, warmer", "cooler, colder"],
      correct: 0,
      explanation: "Places near oceans and large lakes stay cooler in the summer and warmer in the winter than places farther inland."
    },
    {
      question: "Why do oceans and large lakes affect the climate near them?",
      options: [
        "They take longer to change temperature",
        "They make the air thinner",
        "They block all sunlight",
        "They change temperature faster than land"
      ],
      correct: 0,
      explanation: "Oceans and large lakes take longer to change temperature, so nearby places don't get as hot or as cold."
    },
    {
      question: "A place has HIGH elevation. What is its climate likely to be like?",
      options: [
        "Cooler, with a thinner atmosphere",
        "Hotter, with a thicker atmosphere",
        "Exactly the same as at sea level",
        "Always rainy"
      ],
      correct: 0,
      explanation: "Places with high elevation have a cooler climate and a thinner atmosphere."
    },
    {
      question: "Two towns are the same distance from the equator. One is on a tall mountain, the other at sea level. Which is likely cooler?",
      options: ["The town on the tall mountain", "The town at sea level", "They will be exactly the same", "There's no way to guess"],
      correct: 0,
      explanation: "Higher elevation means a cooler climate."
    },

    // --- Arid ---
    {
      question: "What kind of climate do we live in, according to the class notes?",
      options: ["Arid", "Tropical", "Polar", "Tundra"],
      correct: 0,
      explanation: "The class slide says: our climate is ARID."
    },
    {
      question: "What is an arid climate?",
      options: [
        "A dry climate where possible evaporation and transpiration are more than the precipitation",
        "A wet climate with rain every day",
        "A cold climate with ice all year",
        "A climate with lots of forests"
      ],
      correct: 0,
      explanation: "An arid climate is a dry climate where potential evaporation and transpiration exceed precipitation."
    },
    {
      question: "About how much of Earth's land surface do arid regions cover?",
      options: ["Roughly one-third", "Almost all of it", "About one-tenth", "None of it"],
      correct: 0,
      explanation: "Arid regions cover roughly one-third of Earth's land surface."
    },
    {
      question: "A region gets 2,593 mm of rain a year on average. Is it arid?",
      options: [
        "No. Arid regions get less than 250 mm a year.",
        "Yes. Any place with rain is arid.",
        "Yes. 2,593 mm is less than 250 mm.",
        "No. Arid regions get more than 5,000 mm a year."
      ],
      correct: 0,
      explanation: "Arid regions generally get less than 250 mm (10 inches) of rain per year. 2,593 mm is far more than that."
    }
  ],

  skills: [
    {
      key: "weather-or-climate-sort",
      label: "Sorting weather vs. climate",
      remember: "Weather = specific, short-term data (today, tomorrow, this week); it can change hour by hour. Climate = average, general, long-term data (averages, what a month is usually like). Both measure temperature, precipitation, wind and humidity.",
      workedExample: "\"The low in Yuma today is 65 °F\" → weather\n\"Flagstaff averages 100 inches of snow in winter\" → climate"
    },
    {
      key: "climate-zones",
      label: "Tropical, temperate & polar zones",
      remember: "Climate zones group places with similar average temperatures and precipitation. Tropical: near the equator; hot, humid, rainy, very diverse plants and animals. Temperate: in between; seasons, average precipitation, many forests. Polar: farthest from the equator; year-round cold, little precipitation, few plants, mostly carnivorous animals.",
      workedExample: "Equator → tropical → temperate → polar → pole"
    },
    {
      key: "climate-factors",
      label: "Factors that determine climate",
      remember: "1. Distance to the equator: closer gets more direct sunlight, so warmer. 2. Large bodies of water: take longer to change temperature, so nearby places are cooler in summer and warmer in winter than inland. 3. Elevation: higher means a cooler climate and thinner atmosphere.",
      workedExample: "Lakeside town vs. inland town → lakeside has cooler summers, warmer winters\nMountain town vs. sea-level town → mountain is cooler"
    },
    {
      key: "arid-climate",
      label: "Arid climate",
      remember: "Our climate is arid: a dry climate where possible evaporation and transpiration are more than precipitation. Arid regions usually get less than 250 mm (10 inches) of rain a year and cover roughly one-third of Earth's land.",
      workedExample: "Under 250 mm of rain a year → arid\nOne rainy day in the desert is weather; the dry desert is its climate"
    }
  ]
};
