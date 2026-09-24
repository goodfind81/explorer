/* ==========================================================
   Science Chapter 9 — The Metric System
   Covers units of length, mass, capacity/volume, and
   conversions between them.
   ========================================================== */

export const chapter = {
  id: "chapter-09-metric-system",
  name: "The Metric System",
  shortName: "Metric",

  studyGuideHtml: `
    <h2>📏 The Metric System</h2>
    <p>The metric system is used by scientists around the world. Every unit is based on <strong>powers of 10</strong>, which makes conversion easy — just multiply or divide by 10, 100, or 1,000.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Length — measuring distance</span>
        <div class="sg-def">
          <strong>Millimeter (mm)</strong> — about the thickness of a fingernail.<br>
          <strong>Centimeter (cm)</strong> — about the width of an adult fingernail. 10 mm = 1 cm.<br>
          <strong>Meter (m)</strong> — about the height of a door knob. 100 cm = 1 m.<br>
          <strong>Kilometer (km)</strong> — about 3 cruise ships lined up. 1,000 m = 1 km.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Capacity / Liquid Volume — how much a container holds</span>
        <div class="sg-def">
          <strong>Milliliter (mL)</strong> — about 20 drops of water.<br>
          <strong>Liter (L)</strong> — about 2 plastic water bottles. 1,000 mL = 1 L.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Mass — how much matter is in an object</span>
        <div class="sg-def">
          <strong>Gram (g)</strong> — about the mass of a paper clip.<br>
          <strong>Kilogram (kg)</strong> — about the mass of a textbook. 1,000 g = 1 kg.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Key Conversions to Remember</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          1 cm = <strong>10</strong> mm<br>
          1 m = <strong>100</strong> cm<br>
          1 m = <strong>1,000</strong> mm<br>
          1 km = <strong>1,000</strong> m<br>
          1 L = <strong>1,000</strong> mL<br>
          1 kg = <strong>1,000</strong> g
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">How to Convert</span>
        <div class="sg-def">
          <strong>Larger unit → smaller unit: multiply</strong><br>
          Example: 7 cm = ? mm. 7 × 10 = <strong>70 mm</strong><br><br>
          <strong>Smaller unit → larger unit: divide</strong><br>
          Example: 2,000 mm = ? m. 2,000 ÷ 1,000 = <strong>2 m</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Choosing the Right Unit</span>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Pencil length</strong>Use cm (a pencil is too small for m, too big for mm).</div>
          <div class="sg-ex"><strong>✅ Distance between cities</strong>Use km (m and cm are too small).</div>
          <div class="sg-ex"><strong>✅ Water in a glass</strong>Use mL (a glass holds less than a liter).</div>
          <div class="sg-ex"><strong>✅ Weight of a book</strong>Use g or kg depending on size.</div>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Why "mil", "cent", and "kilo" matter:</strong> The prefixes tell you the size. "Milli" = thousandth. "Centi" = hundredth. "Kilo" = thousand. Once you know the prefix, you know the size.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do scientists love the metric system? Because every unit is 10, 100, or 1,000 times another. Converting is just moving the decimal point — no fractions to multiply.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "Which unit would be most appropriate for measuring the length of a pencil?",
      options: ["Liters", "Grams", "Centimeters", "Kilograms"],
      correct: 2,
      explanation: "A pencil is a few centimeters long. Liters measure liquid volume, grams and kilograms measure mass."
    },
    {
      question: "A ribbon is 7 centimeters long. How many millimeters long is it?",
      options: ["0.7 mm", "70 mm", "700 mm", "7 mm"],
      correct: 1,
      explanation: "1 cm = 10 mm. So 7 cm = 7 × 10 = 70 mm."
    },
    {
      question: "A table is 2 meters long. How many centimeters is that?",
      options: ["20 cm", "200 cm", "2,000 cm", "0.02 cm"],
      correct: 1,
      explanation: "1 m = 100 cm. So 2 m = 2 × 100 = 200 cm."
    },
    {
      question: "Which is an example of QUALITATIVE data?",
      options: ["The rock weighs 35 g.", "The rock is 6 cm long.", "The rock is dark gray and rough.", "The rock has a volume of 12 mL."],
      correct: 2,
      explanation: "Qualitative data describes qualities with words. 'Dark gray and rough' describes the rock without numbers."
    },
    {
      question: "Which is QUANTITATIVE data?",
      options: ["The solution is yellow.", "The surface feels smooth.", "The plant is 18.5 cm tall.", "The flower smells sweet."],
      correct: 2,
      explanation: "Quantitative data uses numbers and measurements. '18.5 cm tall' is a measurement."
    }
  ],

  chapterQuiz: [
    {
      question: "Which unit would be most appropriate for measuring the length of a pencil?",
      options: ["Liters", "Grams", "Centimeters", "Kilograms"],
      correct: 2,
      explanation: "A pencil is a few centimeters long."
    },
    {
      question: "A ribbon is 7 centimeters long. How many millimeters long is it?",
      options: ["0.7 mm", "70 mm", "700 mm", "7 mm"],
      correct: 1,
      explanation: "1 cm = 10 mm. So 7 cm = 70 mm."
    },
    {
      question: "A table is 2 meters long. How many centimeters is that?",
      options: ["20 cm", "200 cm", "2,000 cm", "0.02 cm"],
      correct: 1,
      explanation: "1 m = 100 cm. So 2 m = 200 cm."
    },
    {
      question: "Which is an example of QUALITATIVE data?",
      options: ["The rock weighs 35 g.", "The rock is 6 cm long.", "The rock is dark gray and rough.", "The rock has a volume of 12 mL."],
      correct: 2,
      explanation: "Qualitative data describes qualities using words, not numbers."
    },
    {
      question: "Which is QUANTITATIVE data?",
      options: ["The solution is yellow.", "The surface feels smooth.", "The plant is 18.5 cm tall.", "The flower smells sweet."],
      correct: 2,
      explanation: "Quantitative data uses numbers and measurements."
    },
    {
      question: "Which statement is an INFERENCE?",
      options: ["The liquid is green.", "The thermometer reads 28°C.", "The plant has five leaves.", "The plant grew faster because it received more sunlight."],
      correct: 3,
      explanation: "An inference is an explanation based on observations. 'Because it received more sunlight' is an explanation, not a direct observation."
    },
    {
      question: "A ruler shows that a pencil extends from 2.0 cm to 15.5 cm. What is the pencil's length?",
      options: ["13.5 cm", "17.5 cm", "15.5 cm", "2.0 cm"],
      correct: 0,
      explanation: "Length = 15.5 - 2.0 = 13.5 cm."
    },
    {
      question: "A graduated cylinder contains water with the bottom of the meniscus at 42 mL. What is the volume?",
      options: ["24 mL", "40 mL", "42 mL", "45 mL"],
      correct: 2,
      explanation: "Read at the BOTTOM of the meniscus (the curve). So the volume is 42 mL."
    },
    {
      question: "A thermometer reads between 21°C and 22°C, with the liquid level closest to 22°C. What should you record?",
      options: ["12°C", "20°C", "22°C", "32°C"],
      correct: 2,
      explanation: "Read to the nearest whole degree. The level is closest to 22°C."
    },
    {
      question: "A student creates a graph showing how different amounts of fertilizer affect plant height. The graph has a title, labeled axes, and bars, but the numbers along the vertical axis are missing. What is missing?",
      options: ["Title", "Scale", "X-axis", "Data"],
      correct: 1,
      explanation: "The numbers along an axis are the scale. Without them, the reader can't tell what the bar heights actually mean."
    },
    {
      question: "A scientist tests how different temperatures affect the time it takes ice to melt. What should go on the X-axis?",
      options: ["The temperature", "The time it takes to melt", "The type of ice", "The size of the container"],
      correct: 0,
      explanation: "The X-axis is for the Independent Variable (what you change). Temperature is what's being changed."
    },
    {
      question: "In that same experiment, what should go on the Y-axis?",
      options: ["The temperature", "The time it takes to melt", "The type of ice", "The size of the container"],
      correct: 1,
      explanation: "The Y-axis is for the Dependent Variable (what you measure). You measure how long the ice takes to melt."
    },
    {
      question: "A student investigates how much sunlight affects plant growth. Which is the best conclusion?",
      options: ["Plants are cool.", "The plants that received more sunlight generally grew taller.", "I liked the plants that received 8 hours of sunlight.", "Plants should always receive exactly 8 hours of sunlight."],
      correct: 1,
      explanation: "A good conclusion answers the question using data. It describes what was observed."
    },
    {
      question: "A student tests the bounce of a ball three times instead of just once. Why is this useful?",
      options: ["It makes the experiment more entertaining.", "It guarantees that every result will be identical.", "It provides more data and makes the results more reliable.", "It eliminates the need to measure carefully."],
      correct: 2,
      explanation: "Repeating trials reduces the effect of unusual results and makes findings more reliable."
    },
    {
      question: "1 kilometer equals how many meters?",
      options: ["10 m", "100 m", "1,000 m", "10,000 m"],
      correct: 2,
      explanation: "'Kilo' means thousand. So 1 km = 1,000 m."
    },
    {
      question: "1 kilogram equals how many grams?",
      options: ["10 g", "100 g", "1,000 g", "10,000 g"],
      correct: 2,
      explanation: "'Kilo' means thousand. So 1 kg = 1,000 g."
    },
    {
      question: "1 liter equals how many milliliters?",
      options: ["10 mL", "100 mL", "1,000 mL", "10,000 mL"],
      correct: 2,
      explanation: "1 L = 1,000 mL."
    },
    {
      question: "3,000 mL equals how many liters?",
      options: ["0.3 L", "3 L", "30 L", "300 L"],
      correct: 1,
      explanation: "3,000 ÷ 1,000 = 3 L."
    },
    {
      question: "5 meters equals how many centimeters?",
      options: ["50 cm", "500 cm", "5,000 cm", "50,000 cm"],
      correct: 1,
      explanation: "5 × 100 = 500 cm."
    },
    {
      question: "Which unit would you use to measure the mass of a paper clip?",
      options: ["Milliliters", "Grams", "Kilometers", "Liters"],
      correct: 1,
      explanation: "Mass is measured in grams or kilograms. A paper clip is light, so grams is appropriate."
    },
    {
      question: "Which metric unit is used for temperature?",
      options: ["Grams", "Liters", "Meters", "Degrees Celsius"],
      correct: 3,
      explanation: "Temperature is measured in degrees Celsius (°C) in the metric system."
    },
    {
      question: "Which is an appropriate unit for measuring the width of a room?",
      options: ["Millimeters", "Meters", "Kilometers", "Milliliters"],
      correct: 1,
      explanation: "A room is a few meters wide. Millimeters would be too small, kilometers too large."
    },
    {
      question: "A ribbon is 45 millimeters long. How many centimeters is that?",
      options: ["0.45 cm", "4.5 cm", "45 cm", "450 cm"],
      correct: 1,
      explanation: "45 ÷ 10 = 4.5 cm."
    },
    {
      question: "A jug contains 2,500 mL of water. How many liters is that?",
      options: ["0.25 L", "2.5 L", "25 L", "250 L"],
      correct: 1,
      explanation: "2,500 ÷ 1,000 = 2.5 L."
    }
  ],

  skills: [
    {
      key: "length-units",
      label: "Metric units of length (mm, cm, m, km) and conversions",
      remember: "1 cm = 10 mm. 1 m = 100 cm. 1 m = 1,000 mm. 1 km = 1,000 m.",
      workedExample: "7 cm = 70 mm\n2 m = 200 cm\n3 km = 3,000 m"
    },
    {
      key: "volume-units",
      label: "Metric units of liquid volume (mL, L) and conversions",
      remember: "1 L = 1,000 mL. Read a graduated cylinder at the bottom of the meniscus.",
      workedExample: "3,000 mL = 3 L\n0.5 L = 500 mL"
    },
    {
      key: "mass-units",
      label: "Metric units of mass (g, kg) and conversions",
      remember: "1 kg = 1,000 g.",
      workedExample: "2,500 g = 2.5 kg\n0.5 kg = 500 g"
    }
  ]
};