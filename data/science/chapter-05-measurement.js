/* ==========================================================
   Chapter 5 — Measurement
   ========================================================== */

export const chapter = {
  id: "chapter-05-measurement",
  name: "Measurement",
  shortName: "Measurement",

  studyGuideHtml: `
    <h2>📏 Measurement Tools</h2>
    <p>Scientists use special tools to get exact numbers (quantitative data). Each tool has a specific job.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Tool → What it measures → Unit</span>
        <table>
          <thead><tr><th>Tool</th><th>Measures</th><th>Unit</th></tr></thead>
          <tbody>
            <tr><td>📏 Ruler</td><td>Length</td><td>cm, m</td></tr>
            <tr><td>⚖️ Balance</td><td>Mass</td><td>g, kg</td></tr>
            <tr><td>🌡️ Thermometer</td><td>Temperature</td><td>°C</td></tr>
            <tr><td>🧪 Graduated Cylinder</td><td>Liquid Volume</td><td>mL, L</td></tr>
          </tbody>
        </table>
      </div>

      <div class="sg-row">
        <span class="sg-label">Examples in real life</span>
        <div class="sg-examples">
          <div class="sg-ex"><strong>✅ Mass</strong>"The pencil has a mass of 5 grams."</div>
          <div class="sg-ex"><strong>✅ Volume</strong>"The beaker holds 500 mL of water."</div>
          <div class="sg-ex"><strong>✅ Temperature</strong>"The water is 22°C."</div>
          <div class="sg-ex"><strong>✅ Length</strong>"The book is 25 cm long."</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Non-examples ❌ (wrong tool for the job)</span>
        <div class="sg-examples">
          <div class="sg-nonex"><strong>❌ Not for temperature</strong>Using a balance to measure heat.</div>
          <div class="sg-nonex"><strong>❌ Not for length</strong>Using a thermometer to measure how tall.</div>
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💧</span>
      <div><strong>Did you know?</strong> Water freezes at 0°C and boils at 100°C. That's a fact scientists rely on!</div>
    </div>

    <h3>📖 How to Read a Graduated Cylinder</h3>
    <p>The <strong>meniscus</strong> is the curved line at the top of the liquid. Always read the number at the <strong>bottom of the curve</strong> with your eye level with the liquid.</p>

    <div class="diagram-box narrow">
      <svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="30" width="80" height="200" fill="#EAF4FF" stroke="#4A90E2" stroke-width="3" rx="6"/>
        <rect x="73" y="130" width="74" height="97" fill="#7FB3D5" opacity="0.85"/>
        <path d="M73,130 Q110,145 147,130" fill="none" stroke="#2C3E50" stroke-width="2"/>
        <line x1="70" y1="60" x2="90" y2="60" stroke="#333" stroke-width="1.5"/>
        <line x1="70" y1="90" x2="90" y2="90" stroke="#333" stroke-width="1.5"/>
        <line x1="70" y1="120" x2="90" y2="120" stroke="#333" stroke-width="1.5"/>
        <line x1="70" y1="150" x2="90" y2="150" stroke="#333" stroke-width="1.5"/>
        <line x1="70" y1="180" x2="90" y2="180" stroke="#333" stroke-width="1.5"/>
        <text x="55" y="64" font-size="11" fill="#333">100</text>
        <text x="55" y="94" font-size="11" fill="#333">75</text>
        <text x="55" y="124" font-size="11" fill="#333">50</text>
        <text x="55" y="154" font-size="11" fill="#333">25</text>
        <text x="55" y="184" font-size="11" fill="#333">0</text>
        <path d="M180,140 L155,138" stroke="#E74C3C" stroke-width="2"/>
        <text x="182" y="145" font-size="11" fill="#E74C3C">eye level</text>
        <text x="110" y="270" text-anchor="middle" font-size="12" font-style="italic" fill="#444">Read at the bottom of the meniscus</text>
      </svg>
      <div class="diagram-caption">Eyes level, read from the bottom of the curve.</div>
    </div>

    <h3>🌡️ How to Read a Thermometer</h3>
    <ul>
      <li>Look at the numbers on the scale to see what each line means.</li>
      <li>Wait for the liquid inside to stop moving.</li>
      <li>Read at the point where the liquid stops.</li>
      <li>Always include the unit: <strong>°C</strong> (degrees Celsius).</li>
    </ul>

    <h3>⚖️ How to Read a Balance</h3>
    <ul>
      <li>Turn the balance on and wait for it to read <strong>0</strong>.</li>
      <li>Press the Z/T (zero/tare) button to reset.</li>
      <li>Place the object gently on the platform.</li>
      <li>Wait for the number to settle, then read in <strong>grams</strong>.</li>
    </ul>

    <div class="highlight">
      <strong>Metric System Reminder:</strong> Science uses the metric system. Length is in meters, mass in grams, volume in liters, and temperature in Celsius.
    </div>
  `,

  miniCheck: [
    { question: "Which tool measures MASS?",
      options: ["Ruler", "Balance", "Thermometer", "Graduated cylinder"],
      correct: 1,
      explanation: "A balance (or scale) measures mass in grams or kilograms." },

    { question: "Which tool measures LENGTH?",
      options: ["Ruler", "Thermometer", "Balance", "Beaker"],
      correct: 0,
      explanation: "A ruler measures length in centimeters or meters." },

    { question: "Which measurement shows TEMPERATURE?",
      options: ["15 grams", "12 centimeters", "30°C", "8 milliliters"],
      correct: 2,
      explanation: "Temperature is measured in degrees Celsius (°C) with a thermometer." },

    { question: "A scientist measures 500 milliliters of water. What is being measured?",
      options: ["Mass", "Length", "Temperature", "Liquid volume"],
      correct: 3,
      explanation: "Milliliters (mL) are the unit for liquid volume, measured with a graduated cylinder." },

    { question: "Where do you read the measurement on a graduated cylinder?",
      options: ["At the very top of the liquid", "At the bottom of the meniscus", "At the middle of the liquid", "Anywhere in the liquid"],
      correct: 1,
      explanation: "The meniscus is the curved surface. Always read at the bottom of the curve with your eye level with the liquid." },
  ],

  chapterQuiz: [
    { question: "Which tool measures the LENGTH of a book?",
      options: ["Balance", "Ruler", "Thermometer", "Graduated cylinder"],
      correct: 1,
      explanation: "A ruler measures length." },

    { question: "Which tool measures MASS?",
      options: ["Ruler", "Thermometer", "Balance", "Measuring cup"],
      correct: 2,
      explanation: "A balance (or scale) measures mass." },

    { question: "Which measurement shows TEMPERATURE?",
      options: ["15 grams", "12 centimeters", "30°C", "8 milliliters"],
      correct: 2,
      explanation: "Temperature is measured in °C." },

    { question: "A scientist measures 500 mL of water. What is being measured?",
      options: ["Mass", "Length", "Temperature", "Volume"],
      correct: 3,
      explanation: "mL measures liquid volume." },

    { question: "What is the metric unit for mass?",
      options: ["Liter", "Gram", "Meter", "Celsius"],
      correct: 1,
      explanation: "Mass is measured in grams (g) or kilograms (kg)." },

    { question: "Which unit is used for length in the metric system?",
      options: ["Gram", "Liter", "Meter", "Celsius"],
      correct: 2,
      explanation: "Length uses meters (m) or centimeters (cm)." },

    { question: "Water freezes at what temperature?",
      options: ["0°C", "100°C", "50°C", "32°C"],
      correct: 0,
      explanation: "Water freezes at 0°C, boils at 100°C." },

    { question: "Where do you read a graduated cylinder?",
      options: ["Top of liquid", "Bottom of the meniscus", "Middle of the liquid", "Anywhere"],
      correct: 1,
      explanation: "Read at the bottom of the meniscus, eyes level with the liquid." },

    { question: "Which tool would you use to measure the temperature of water?",
      options: ["Ruler", "Balance", "Thermometer", "Beaker"],
      correct: 2,
      explanation: "A thermometer measures temperature." },

    { question: "Which unit is used for liquid volume?",
      options: ["Gram", "Milliliter", "Meter", "Celsius"],
      correct: 1,
      explanation: "Liquid volume uses milliliters (mL) or liters (L)." },

    { question: "What does the Z/T button do on a balance?",
      options: ["Turns the balance off", "Resets the balance to read zero", "Shows the temperature", "Tells you the time"],
      correct: 1,
      explanation: "The Z/T (zero/tare) button resets the balance to 0 before you weigh something." },

    { question: "Which tool has a MENISCUS?",
      options: ["Ruler", "Balance", "Graduated cylinder", "Thermometer"],
      correct: 2,
      explanation: "Liquids in a graduated cylinder form a meniscus — the curved surface at the top." },

    { question: "If you want to measure a pencil's length, which unit is best?",
      options: ["Kilograms", "Milliliters", "Centimeters", "Celsius"],
      correct: 2,
      explanation: "Length is measured in centimeters (cm) or meters (m)." },

    { question: "Which unit is a metric unit?",
      options: ["Inches", "Pounds", "Grams", "Miles"],
      correct: 2,
      explanation: "Grams are metric. Inches, pounds, and miles are in the US customary system." },

    { question: "You want to find the mass of a paper clip. Which tool?",
      options: ["Ruler", "Balance", "Thermometer", "Graduated cylinder"],
      correct: 1,
      explanation: "A balance measures mass." },

    { question: "A student reads a graduated cylinder and sees the liquid at 45 mL. Where did she read the number?",
      options: ["At the top of the meniscus", "At the bottom of the meniscus", "At the glass rim", "At the base of the cylinder"],
      correct: 1,
      explanation: "Always read from the bottom of the meniscus, with eyes level with the liquid." },

    { question: "What does a thermometer measure?",
      options: ["Mass", "Volume", "Temperature", "Length"],
      correct: 2,
      explanation: "A thermometer measures temperature, usually in degrees Celsius (°C)." },

    { question: "Which metric unit would measure the mass of an elephant?",
      options: ["Grams", "Kilograms", "Milliliters", "Centimeters"],
      correct: 1,
      explanation: "Kilograms (kg) are used for larger masses like elephants. Grams would give a huge number." },

    { question: "If a thermometer reads 30°C, is the water hot or cold?",
      options: ["Freezing cold", "Room temperature", "Warm", "Boiling"],
      correct: 2,
      explanation: "30°C is warmer than room temperature (about 20°C) but below boiling (100°C)." },

    { question: "Why do scientists use the metric system instead of inches and pounds?",
      options: [
        "Because it's easier to write",
        "Because it's the same all around the world",
        "Because it uses bigger numbers",
        "Because teachers like it"
      ],
      correct: 1,
      explanation: "The metric system is used worldwide, so scientists everywhere can share and compare measurements." },
  ],
};
