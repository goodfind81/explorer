/* ==========================================================
   Science Chapter 22 — Weather, Climate & Meteorologists
   Earth's Systems unit, Atmosphere days 11–12 (11/19 and 11/20).
   Built from: Einstein Wonders ("How do meteorologists predict the
   weather?"), the notes pages (weather, condensation, precipitation,
   humidity, high and low pressure, weather symbols, the four seasons,
   tornadoes and hurricanes, climate), and the day-12 slides
   (meteorology, what causes weather, air masses and fronts, weather
   vs. climate).
   Day 12's "find the BIG mistake" diagram swaps the class notes
   (it shows hot, dry air sinking at high pressure). This chapter
   teaches the class version: cool, dense air sinks at high
   pressure; warm, wet air rises at low pressure.
   ========================================================== */

export const chapter = {
  id: "chapter-22-weather-climate",
  name: "Weather, Climate & Meteorologists",
  shortName: "Weather & Climate",

  studyGuideHtml: `
    <h2>🌦️ Weather, Climate &amp; Meteorologists</h2>
    <p><strong>Einstein Wonders:</strong> how do <strong>meteorologists</strong> predict the weather? They watch <strong>air pressure</strong>, <strong>air masses</strong> and <strong>fronts</strong>, and they use <strong>weather symbols</strong> on maps. You'll also learn how <strong>weather</strong> is different from <strong>climate</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Weather 🌤️</span>
        <div class="sg-def">
          <strong>Weather</strong> describes the <strong>condition</strong> of the <strong>air</strong> outdoors, such as <strong>temperature</strong>, cloud cover, <strong>windspeed</strong> and <strong>rainfall</strong>.<br>
          Weather is the <strong>daily</strong> conditions of the atmosphere, and it is <strong>constantly changing</strong>.<br>
          <em>Examples:</em> the high temperature was 65 °F today; it rained 1 inch this morning; there might be a thunderstorm tomorrow; we had wind gusts of 60 mph today.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Climate 🗺️</span>
        <div class="sg-def" style="background:#E8F5E9;">
          <strong>Climate</strong> is the <strong>average</strong> or typical weather condition of a region <strong>year after year</strong> (about <strong>30 years</strong>!).<br>
          To determine climate over time, look at <strong>precipitation</strong> and <strong>temperature</strong>.<br>
          <em>Examples:</em> winters in the Northeast are cold and snowy; the average rainfall in Phoenix is 8 inches per year; summers are hot and dry in Death Valley, CA.<br><br>
          <strong>Basically:</strong> weather is individual observations. Climate is the <strong>average</strong> of lots of those observations over a long time. Weather and climate are <strong>NOT</strong> the same thing!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Water words 💧</span>
        <div class="sg-def">
          • <strong>Condensation:</strong> the <strong>cooling</strong> off of <strong>water</strong> in the <strong>atmosphere</strong>, changing a <strong>gas</strong> to a <strong>liquid</strong>.<br>
          • <strong>Precipitation:</strong> water droplets <strong>fall</strong> from the atmosphere in the form of <strong>rain, sleet, snow or hail</strong>.<br>
          • <strong>Humidity:</strong> the amount of <strong>water vapor</strong> in the air.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">High and low pressure 🔵🔴</span>
        <div class="sg-def" style="background:#E3F2FD;">
          🔵 <strong>H = High pressure:</strong> <strong>cool, dense air sinks</strong>. High pressure means <strong>cold, dry air</strong>. Color it <strong>blue</strong>.<br>
          🔴 <strong>L = Low pressure:</strong> <strong>hot, less dense air rises</strong>. Low pressure means <strong>warm, wet air</strong>, with clouds and rain. Color it <strong>red</strong>.<br><br>
          Watch out: a diagram that shows <strong>hot, dry air sinking</strong> at high pressure has it backwards!
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Weather symbols 🗺️</span>
        <div class="sg-def">
          • <strong>H</strong> (blue): high pressure, cold, dry air &nbsp; • <strong>L</strong> (red): low pressure, warm, wet air<br>
          • A line with <strong>triangles</strong>: <strong>cold front</strong> &nbsp; • A line with <strong>half circles</strong>: <strong>warm front</strong><br>
          • A cloud with a <strong>lightning bolt</strong>: thunderstorms<br>
          • Also: cloudy ☁️, sunny ☀️, partly cloudy ⛅, rain 🌧️ and snow ❄️
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">What causes weather? 🌬️</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Differences in <strong>temperature</strong>, <strong>wind patterns</strong> and <strong>moisture levels</strong> in the air cause weather.<br>
          • <strong>Air mass:</strong> a body of air with similar <strong>moisture, pressure and temperature</strong>.<br>
          • <strong>Front:</strong> the <strong>boundary</strong> between air masses (like where a cold air mass meets a warm air mass).<br>
          • The <strong>movement of air masses</strong> helps predict the weather.<br>
          • <strong>Mountain ranges</strong> and large <strong>bodies of water</strong> can <strong>slow</strong> the movement of fronts.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Seasons and big storms 🌪️</span>
        <div class="sg-def">
          The four seasons: <strong>winter, spring, summer, fall</strong>.<br>
          • <strong>Tornadoes</strong> form over <strong>land</strong>.<br>
          • <strong>Hurricanes</strong> form over <strong>water</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Meteorologists 👩‍🔬</span>
        <div class="sg-def">
          <strong>Meteorology</strong> is the study of the <strong>atmosphere</strong>, focusing on <strong>climate and weather</strong>. A scientist who studies the weather is a <strong>meteorologist</strong>. Meteorologists are often asked to make <strong>predictions</strong>.<br>
          <strong>Broadcast meteorologists</strong> (the weather reporters on TV) are <strong>NOT</strong> the only type of atmospheric scientists!
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Calling one hot day "climate". One day (or one week) is <strong>weather</strong>. <strong>Climate</strong> is the average over about <strong>30 years</strong>. "It snowed today" is weather. "Winters in the Northeast are cold and snowy" is climate.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Even a published diagram can have a mistake! One drawing showed <strong>hot, dry air</strong> sinking at a <strong>High</strong>. But hot air is less dense, so it <strong>rises</strong>. At a High it's <strong>cool, dense</strong> air that sinks. Scientists always check the facts.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "What is the difference between weather and climate?",
      options: [
        "Weather is daily conditions; climate is the average weather over a long time",
        "Weather is the average over 30 years; climate is today's conditions",
        "They are the same thing",
        "Weather is only about rain; climate is only about wind"
      ],
      correct: 0,
      explanation: "Weather is the daily, constantly changing conditions of the atmosphere. Climate is the average or typical weather of a region over about 30 years."
    },
    {
      question: "What is humidity?",
      options: ["The amount of water vapor in the air", "The temperature of the air", "How fast the wind blows", "The amount of rain in a year"],
      correct: 0,
      explanation: "Humidity is the amount of water vapor in the air."
    },
    {
      question: "At a HIGH pressure area, what happens to the air?",
      options: ["Cool, dense air sinks", "Hot, less dense air rises", "Warm, wet air rises", "The air disappears"],
      correct: 0,
      explanation: "At a High, cool, dense air sinks. High pressure means cold, dry air."
    },
    {
      question: "What is a front?",
      options: ["The boundary between air masses", "A body of air with the same temperature", "The front of a cloud", "A strong wind over the ocean"],
      correct: 0,
      explanation: "A front is the boundary between air masses."
    },
    {
      question: "What is the name of the type of scientist that studies the weather?",
      options: ["Meteorologist", "Geologist", "Biologist", "Astronomer"],
      correct: 0,
      explanation: "A meteorologist studies the atmosphere, focusing on weather and climate."
    }
  ],

  chapterQuiz: [
    // --- Weather ---
    {
      question: "Weather describes the condition of the _____ outdoors.",
      options: ["air", "soil", "ocean", "rocks"],
      correct: 0,
      explanation: "Weather describes the condition of the air outdoors, such as temperature, cloud cover, windspeed and rainfall."
    },
    {
      question: "Which list describes WEATHER?",
      options: [
        "Temperature, cloud cover, windspeed and rainfall",
        "Rocks, soil, sand and minerals",
        "Plants, animals, fungi and bacteria",
        "Mountains, valleys, rivers and lakes"
      ],
      correct: 0,
      explanation: "Weather is the condition of the air outdoors: temperature, cloud cover, windspeed and rainfall."
    },
    {
      question: "Which statement is about WEATHER?",
      options: [
        "We had wind gusts of 60 mph today.",
        "Winters in the Northeast are cold and snowy.",
        "The average rainfall in Phoenix is 8 inches per year.",
        "Summers are hot and dry in Death Valley, CA."
      ],
      correct: 0,
      explanation: "Wind gusts today is one day's conditions, so it's weather. The other three describe what usually happens over many years: climate."
    },
    {
      question: "Which of these is a WEATHER report, not a climate fact?",
      options: [
        "There might be a thunderstorm tomorrow.",
        "Summers are hot and dry in Death Valley, CA.",
        "Winters in the Northeast are cold and snowy.",
        "Phoenix averages 8 inches of rain a year."
      ],
      correct: 0,
      explanation: "A thunderstorm tomorrow is a daily condition, so it's weather."
    },
    {
      question: "Weather is the daily conditions of the atmosphere. How often does it change?",
      options: ["It is constantly changing", "Only once a year", "Only every 30 years", "It never changes"],
      correct: 0,
      explanation: "Weather is the daily conditions of the atmosphere that are constantly changing."
    },

    // --- Climate ---
    {
      question: "Climate is the _____ or typical weather condition of a region year after year.",
      options: ["average", "hottest", "first", "wettest"],
      correct: 0,
      explanation: "Climate is the average or typical weather condition of a region year after year."
    },
    {
      question: "About how many years of weather do scientists use to describe climate?",
      options: ["About 30 years", "About 1 week", "About 1 year", "About 3 days"],
      correct: 0,
      explanation: "Climate is what the weather is like over a long time, about 30 years."
    },
    {
      question: "To determine climate over time, which two things do you look at?",
      options: ["Precipitation and temperature", "Clouds and wind direction", "Mountains and rivers", "Sunrise and sunset times"],
      correct: 0,
      explanation: "To determine climate over time, look at precipitation and temperature."
    },
    {
      question: "Which statement is about CLIMATE?",
      options: [
        "The average rainfall in Phoenix is 8 inches per year.",
        "It rained 1 inch this morning.",
        "The high temperature was 65 °F today.",
        "There might be a thunderstorm tomorrow."
      ],
      correct: 0,
      explanation: "The average rainfall per year describes a long-term pattern, so it's climate."
    },
    {
      question: "A town's chart shows sunny weather in almost every month of the year. What is the town's typical weather?",
      options: ["Sunny", "Snowy", "Rainy", "Stormy"],
      correct: 0,
      explanation: "Climate is the average or typical weather. If almost every month is sunny, the typical weather is sunny."
    },
    {
      question: "Which sentence best explains weather vs. climate?",
      options: [
        "Weather is individual observations; climate is the average of lots of observations over a long time.",
        "Weather and climate mean exactly the same thing.",
        "Climate changes every hour; weather stays the same for 30 years.",
        "Weather is only measured in summer; climate only in winter."
      ],
      correct: 0,
      explanation: "Weather is individual observations, and climate is the average of lots of those observations over a long time."
    },

    // --- Water words ---
    {
      question: "Condensation is the cooling off of water in the atmosphere, changing a _____ to a _____.",
      options: ["gas, liquid", "liquid, gas", "solid, gas", "liquid, solid"],
      correct: 0,
      explanation: "Condensation is water in the atmosphere cooling off and changing from a gas to a liquid."
    },
    {
      question: "Which is NOT a form of precipitation?",
      options: ["Fog", "Rain", "Sleet", "Hail"],
      correct: 0,
      explanation: "Precipitation is water falling from the atmosphere as rain, sleet, snow or hail. Fog doesn't fall."
    },
    {
      question: "What is precipitation?",
      options: [
        "Water droplets falling from the atmosphere as rain, sleet, snow or hail",
        "Water vapor rising into the air",
        "The amount of water vapor in the air",
        "Water soaking into the ground"
      ],
      correct: 0,
      explanation: "Precipitation is water droplets that fall from the atmosphere in the form of rain, sleet, snow or hail."
    },
    {
      question: "The amount of water vapor in the air is called _____.",
      options: ["humidity", "precipitation", "condensation", "climate"],
      correct: 0,
      explanation: "Humidity is the amount of water vapor in the air."
    },

    // --- High and low pressure ---
    {
      question: "At a LOW pressure area, what happens to the air?",
      options: ["Hot, less dense air rises", "Cool, dense air sinks", "Cold, dry air sinks", "The air stops moving"],
      correct: 0,
      explanation: "At a Low, hot, less dense air rises. Low pressure means warm, wet air."
    },
    {
      question: "On a weather map, what kind of air does a blue H stand for?",
      options: ["High pressure, cold, dry air", "Low pressure, warm, wet air", "A hurricane", "Heavy rain"],
      correct: 0,
      explanation: "A blue H means high pressure: cold, dry air."
    },
    {
      question: "On a weather map, what kind of air does a red L stand for?",
      options: ["Low pressure, warm, wet air", "High pressure, cold, dry air", "Lightning", "Light snow"],
      correct: 0,
      explanation: "A red L means low pressure: warm, wet air."
    },
    {
      question: "Where are you more likely to see clouds and rain?",
      options: ["At a low pressure area", "At a high pressure area", "Only where the air is cold and dry", "Only where the air is sinking"],
      correct: 0,
      explanation: "Low pressure has warm, wet, rising air, so it's where clouds and rain form."
    },
    {
      question: "A diagram says HOT, DRY air sinks at a HIGH pressure area. What's the mistake?",
      options: [
        "At a High, it's cool, dense air that sinks. Hot air is less dense and rises.",
        "There's no mistake.",
        "Hot air sinks only at night.",
        "High pressure has no air at all."
      ],
      correct: 0,
      explanation: "Hot air is less dense, so it rises. At a High, cool, dense air sinks. That was the BIG mistake in the grown-up's published diagram!"
    },

    // --- Weather symbols ---
    {
      question: "On a weather map, a line with TRIANGLES shows a _____.",
      options: ["cold front", "warm front", "hurricane", "rainbow"],
      correct: 0,
      explanation: "A line with triangles is the symbol for a cold front."
    },
    {
      question: "On a weather map, a line with HALF CIRCLES shows a _____.",
      options: ["warm front", "cold front", "tornado", "snowstorm"],
      correct: 0,
      explanation: "A line with half circles is the symbol for a warm front."
    },
    {
      question: "Which weather symbol shows THUNDERSTORMS?",
      options: ["A cloud with a lightning bolt", "A sun peeking out from a cloud", "Snowflake stars", "A blue H"],
      correct: 0,
      explanation: "A cloud with a lightning bolt is the symbol for thunderstorms."
    },
    {
      question: "A weather symbol shows a sun partly behind a cloud. What does it mean?",
      options: ["Partly cloudy", "Snow", "Thunderstorms", "Cold front"],
      correct: 0,
      explanation: "A sun partly behind a cloud means partly cloudy."
    },

    // --- What causes weather ---
    {
      question: "Which THREE differences in the air cause weather?",
      options: [
        "Temperature, wind patterns and moisture levels",
        "Color, smell and sound",
        "Mountains, oceans and deserts",
        "Day, night and seasons"
      ],
      correct: 0,
      explanation: "Differences in temperature, wind patterns and moisture levels in the air cause weather."
    },
    {
      question: "What is an air mass?",
      options: [
        "A body of air with similar moisture, pressure and temperature",
        "The boundary between two kinds of air",
        "The weight of one cloud",
        "A strong wind over the ocean"
      ],
      correct: 0,
      explanation: "An air mass is a body of air with similar moisture, pressure and temperature."
    },
    {
      question: "The boundary where a cold air mass meets a warm air mass is called a _____.",
      options: ["front", "cloud", "current", "climate"],
      correct: 0,
      explanation: "A front is the boundary between air masses."
    },
    {
      question: "What helps meteorologists predict the weather?",
      options: ["The movement of air masses", "The phases of the Moon", "The color of the ocean", "The number of trees"],
      correct: 0,
      explanation: "The movement of air masses helps predict the weather."
    },
    {
      question: "What can slow the movement of fronts?",
      options: ["Mountain ranges and large bodies of water", "Small clouds", "Sunny days", "Tall buildings"],
      correct: 0,
      explanation: "Mountain ranges and large bodies of water can slow the movement of fronts."
    },

    // --- Seasons and storms ---
    {
      question: "Where do tornadoes form?",
      options: ["Over land", "Over water", "In space", "Only in the ocean"],
      correct: 0,
      explanation: "Tornadoes form over land. Hurricanes form over water."
    },
    {
      question: "Where do hurricanes form?",
      options: ["Over water", "Over land", "On mountaintops", "In deserts"],
      correct: 0,
      explanation: "Hurricanes form over water. Tornadoes form over land."
    },
    {
      question: "What are the four seasons?",
      options: ["Winter, spring, summer and fall", "Rain, snow, sleet and hail", "Morning, noon, evening and night", "Hot, cold, wet and dry"],
      correct: 0,
      explanation: "The four seasons are winter, spring, summer and fall."
    },

    // --- Meteorologists ---
    {
      question: "What is meteorology?",
      options: [
        "The study of the atmosphere, focusing on climate and weather",
        "The study of meteors and space rocks",
        "The study of rocks and minerals",
        "The study of ocean animals"
      ],
      correct: 0,
      explanation: "Meteorology is the study of the atmosphere, focusing on climate and weather."
    },
    {
      question: "Meteorologists are often asked to make what?",
      options: ["Predictions", "Maps of the ocean floor", "Rock collections", "Telescopes"],
      correct: 0,
      explanation: "Meteorologists are often asked to make predictions about the weather."
    },
    {
      question: "Which statement about meteorologists is TRUE?",
      options: [
        "Broadcast (TV) meteorologists are NOT the only type of atmospheric scientists.",
        "All meteorologists work on TV.",
        "Meteorologists study only earthquakes.",
        "Meteorologists study only the ocean."
      ],
      correct: 0,
      explanation: "Broadcast meteorologists are not the only type of atmospheric scientists. Many meteorologists never go on TV."
    }
  ],

  skills: [
    {
      key: "weather-vs-climate",
      label: "Weather vs. climate",
      remember: "Weather = the condition of the air outdoors (temperature, cloud cover, windspeed, rainfall) each day; it's constantly changing. Climate = the average or typical weather of a region year after year (about 30 years). Look at precipitation and temperature to find climate.",
      workedExample: "\"It rained 1 inch this morning\" → weather\n\"Phoenix averages 8 inches of rain a year\" → climate"
    },
    {
      key: "water-words-weather",
      label: "Condensation, precipitation & humidity",
      remember: "Condensation = water in the atmosphere cools off and changes from a gas to a liquid. Precipitation = water falls as rain, sleet, snow or hail. Humidity = the amount of water vapor in the air.",
      workedExample: "Gas → liquid = condensation\nRain, sleet, snow, hail = precipitation\nWater vapor in air = humidity"
    },
    {
      key: "high-low-pressure-symbols",
      label: "High & low pressure and weather symbols",
      remember: "H (blue) = high pressure: cool, dense air sinks; cold, dry air. L (red) = low pressure: hot, less dense air rises; warm, wet air with clouds and rain. Triangles = cold front. Half circles = warm front. Cloud + lightning = thunderstorms.",
      workedExample: "H → sinking cool air → dry\nL → rising warm air → clouds & rain\n▲▲▲ cold front, ◗◗◗ warm front"
    },
    {
      key: "air-masses-fronts-meteorologists",
      label: "Air masses, fronts & meteorologists",
      remember: "Weather is caused by differences in temperature, wind patterns and moisture. Air mass = body of air with similar moisture, pressure and temperature. Front = boundary between air masses. Mountains and big bodies of water slow fronts. Meteorologists study weather and climate and make predictions. Tornadoes form over land; hurricanes over water.",
      workedExample: "Cold air mass | front | warm air mass\nMovement of air masses → forecast\nTornado → land, Hurricane → water"
    }
  ]
};
