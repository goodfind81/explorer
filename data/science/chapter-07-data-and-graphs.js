/* ==========================================================
   Chapter 7 — Data & Graphs
   Covers: bar graphs, line graphs, line plots, tables,
           x/y axes, scale, title, keys, and how to read
           and interpret graphs.
   ========================================================== */

export const chapter = {
  id: "chapter-07-data-and-graphs",
  name: "Data & Graphs",
  shortName: "Data & Graphs",

  studyGuideHtml: `
    <h2>📊 Data & Graphs</h2>
    <p>Scientists collect data during experiments and organize it so they can see patterns. Three common ways to display data are <strong>tables</strong>, <strong>bar graphs</strong>, <strong>line graphs</strong>, and <strong>line plots</strong>.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Definition — Data Table</span>
        <div class="sg-def">A chart that shows data in rows and columns. It usually has a title and labels for what each column represents.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Definition — Bar Graph</span>
        <div class="sg-def">A graph that uses rectangular bars to compare amounts. The bar height shows the value. Bars can be vertical or horizontal.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Definition — Line Graph</span>
        <div class="sg-def">A graph that connects points with lines. Best for showing how something changes <strong>over time</strong>.</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Definition — Line Plot</span>
        <div class="sg-def">A graph that shows each data point as an <strong>X</strong> stacked above a number line. Best for showing how often each value appears (frequency).</div>
      </div>
    </div>

    <h3>📊 Bar Graph Example (from class)</h3>
    <p>Your class graphed the deer population each month:</p>
    <table>
      <thead><tr><th>Month</th><th># of Deer</th></tr></thead>
      <tbody>
        <tr><td>September</td><td>38</td></tr>
        <tr><td>October</td><td>32</td></tr>
        <tr><td>November</td><td>26</td></tr>
        <tr><td>December</td><td>20</td></tr>
        <tr><td>January</td><td>15</td></tr>
        <tr><td>February</td><td>12</td></tr>
      </tbody>
    </table>

    <div class="diagram-box medium">
      <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
        <text x="240" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#333">Deer Population by Month</text>

        <!-- y axis -->
        <line x1="60" y1="40" x2="60" y2="210" stroke="#333" stroke-width="2"/>
        <line x1="60" y1="210" x2="440" y2="210" stroke="#333" stroke-width="2"/>
        <text x="20" y="130" font-size="11" fill="#333" transform="rotate(-90 20,130)"># of Deer</text>
        <text x="250" y="235" text-anchor="middle" font-size="11" fill="#333">Month</text>

        <!-- y gridlines -->
        <line x1="60" y1="58" x2="440" y2="58" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="60" y1="96" x2="440" y2="96" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="60" y1="134" x2="440" y2="134" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="60" y1="172" x2="440" y2="172" stroke="#DDD" stroke-dasharray="3,3"/>
        <text x="40" y="62" font-size="9" fill="#666">40</text>
        <text x="40" y="100" font-size="9" fill="#666">30</text>
        <text x="40" y="138" font-size="9" fill="#666">20</text>
        <text x="40" y="176" font-size="9" fill="#666">10</text>
        <text x="45" y="214" font-size="9" fill="#666">0</text>

        <!-- bars: Sep=38, Oct=32, Nov=26, Dec=20, Jan=15, Feb=12 -->
        <!-- Height scale: 40 → 172px -->
        <rect x="75" y="67" width="45" height="143" fill="#E74C3C"/>
        <rect x="135" y="89" width="45" height="121" fill="#E74C3C"/>
        <rect x="195" y="111" width="45" height="99" fill="#E74C3C"/>
        <rect x="255" y="133" width="45" height="77" fill="#E74C3C"/>
        <rect x="315" y="153" width="45" height="57" fill="#E74C3C"/>
        <rect x="375" y="164" width="45" height="46" fill="#E74C3C"/>

        <text x="97" y="225" text-anchor="middle" font-size="9" fill="#333">Sep</text>
        <text x="157" y="225" text-anchor="middle" font-size="9" fill="#333">Oct</text>
        <text x="217" y="225" text-anchor="middle" font-size="9" fill="#333">Nov</text>
        <text x="277" y="225" text-anchor="middle" font-size="9" fill="#333">Dec</text>
        <text x="337" y="225" text-anchor="middle" font-size="9" fill="#333">Jan</text>
        <text x="397" y="225" text-anchor="middle" font-size="9" fill="#333">Feb</text>
      </svg>
      <div class="diagram-caption">Bar graph: taller bar = bigger value. September had the most deer.</div>
    </div>

    <h3>📈 Line Plot Example (from class)</h3>
    <p>Your class made a line plot of the bounce heights from the Bouncy Ball Lab. Each <strong>X</strong> represents one trial. A line plot shows how often each value appears.</p>

    <div class="diagram-box medium">
      <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
        <text x="240" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="13" font-weight="bold" fill="#333">Bouncy Ball — Height of Bounce (cm)</text>

        <!-- number line -->
        <line x1="40" y1="180" x2="440" y2="180" stroke="#333" stroke-width="2"/>

        <!-- ticks and numbers -->
        <line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="60" y="200" text-anchor="middle" font-size="9" fill="#333">60</text>
        <line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="120" y="200" text-anchor="middle" font-size="9" fill="#333">70</text>
        <line x1="180" y1="175" x2="180" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="180" y="200" text-anchor="middle" font-size="9" fill="#333">80</text>
        <line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="240" y="200" text-anchor="middle" font-size="9" fill="#333">90</text>
        <line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="300" y="200" text-anchor="middle" font-size="9" fill="#333">100</text>
        <line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="360" y="200" text-anchor="middle" font-size="9" fill="#333">110</text>
        <line x1="420" y1="175" x2="420" y2="185" stroke="#333" stroke-width="1.5"/>
        <text x="420" y="200" text-anchor="middle" font-size="9" fill="#333">120</text>

        <!-- 100 cm drop results (blue X's) -->
        <!-- Values near 75, 78, 80, 82 -->
        <text x="118" y="170" text-anchor="middle" font-size="16" fill="#4A90E2" font-weight="bold">X</text>
        <text x="130" y="170" text-anchor="middle" font-size="16" fill="#4A90E2" font-weight="bold">X</text>
        <text x="142" y="170" text-anchor="middle" font-size="16" fill="#4A90E2" font-weight="bold">X</text>
        <text x="118" y="152" text-anchor="middle" font-size="16" fill="#4A90E2" font-weight="bold">X</text>

        <!-- 150 cm drop results (purple X's) -->
        <!-- Values near 105, 107, 110, 112, 115, 118 -->
        <text x="312" y="170" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>
        <text x="325" y="170" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>
        <text x="335" y="170" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>
        <text x="348" y="170" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>
        <text x="360" y="170" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>
        <text x="325" y="152" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>
        <text x="348" y="152" text-anchor="middle" font-size="16" fill="#8E44AD" font-weight="bold">X</text>

        <!-- Key -->
        <rect x="20" y="20" width="140" height="45" fill="#FAFBFF" stroke="#CCC" rx="6"/>
        <text x="30" y="38" font-size="10" fill="#333" font-weight="bold">Key:</text>
        <text x="30" y="55" font-size="12" fill="#4A90E2" font-weight="bold">X</text>
        <text x="45" y="55" font-size="10" fill="#333">= 100 cm drop</text>
        <text x="110" y="55" font-size="12" fill="#8E44AD" font-weight="bold">X</text>
        <text x="125" y="55" font-size="10" fill="#333">= 150 cm drop</text>
      </svg>
      <div class="diagram-caption">Line plot: each X = one trial. Blue = 100 cm drop; Purple = 150 cm drop. The 150 cm drop consistently bounced higher.</div>
    </div>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The 5 Parts of a Good Graph</span>
        <div class="sg-def">
          <strong>1. Title</strong> — What is the graph about? (Usually at the top.)<br>
          <strong>2. X-axis</strong> — The horizontal line. Label with the Independent Variable.<br>
          <strong>3. Y-axis</strong> — The vertical line. Label with the Dependent Variable.<br>
          <strong>4. Scale</strong> — The number pattern on each axis (e.g., by 2s, by 5s, by 10s).<br>
          <strong>5. Key</strong> — A small legend that shows what each color or symbol means (when needed).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Which graph should you use?</span>
        <div class="sg-examples">
          <div class="sg-ex"><strong>📊 Bar graph</strong>Compare AMOUNTS across different categories.<br>Example: Deer population each month.</div>
          <div class="sg-ex"><strong>📈 Line graph</strong>Show CHANGE over TIME.<br>Example: Daily rainfall over a month.</div>
          <div class="sg-ex"><strong>📉 Line plot</strong>Show FREQUENCY of values.<br>Example: How many times each bounce height appeared in a lab.</div>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Non-examples ❌</span>
        <div class="sg-examples">
          <div class="sg-nonex"><strong>❌ Not a good graph</strong>No title — the reader doesn't know what it shows.</div>
          <div class="sg-nonex"><strong>❌ Not a good graph</strong>No axis labels — the reader can't tell what the numbers mean.</div>
          <div class="sg-nonex"><strong>❌ Not a good graph</strong>Uneven scale — e.g., 0, 5, 30, 31, 100. The pattern must be consistent.</div>
          <div class="sg-nonex"><strong>❌ Not a good graph</strong>Bar graph used for change over time. Line graph is the right choice there.</div>
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Line plots are great when you have MANY trials and want to see the pattern. If most X's are piled up at one value, that value came up often.</div>
    </div>

    <div class="highlight">
      <strong>Reminder:</strong> The <strong>Independent Variable</strong> goes on the X-axis (horizontal). The <strong>Dependent Variable</strong> goes on the Y-axis (vertical).
    </div>
  `,

  miniCheck: [
    {
      question: "In your class's deer graph, which month had the MOST deer?",
      options: ["February", "September", "December", "October"],
      correct: 1,
      explanation: "September had 38 deer — the highest value in the table."
    },
    {
      question: "In the class's deer data, what happened to the deer population from September to February?",
      options: [
        "It went up each month",
        "It stayed the same",
        "It went down each month (38 → 32 → 26 → 20 → 15 → 12)",
        "It went up and down randomly"
      ],
      correct: 2,
      explanation: "The numbers decrease every month: 38, 32, 26, 20, 15, 12. The population was declining."
    },
    {
      question: "In the Bouncy Ball line plot, what does each X represent?",
      options: [
        "One bounce height value from one trial",
        "One drop height value",
        "The total height of the ball",
        "The number of trials"
      ],
      correct: 0,
      explanation: "Each X in a line plot is one data point — one bounce height measured in one trial."
    },
    {
      question: "Why did the class's Bouncy Ball line plot use two different colors for the X's?",
      options: [
        "Because the teacher likes colors",
        "To show which bounces came from the 100 cm drop and which came from the 150 cm drop",
        "To make the graph look nice",
        "Because one color is boring"
      ],
      correct: 1,
      explanation: "The colors are a KEY. They let the reader see the two drop heights side by side and compare the bounce heights."
    },
    {
      question: "Which graph type shows FREQUENCY (how often a value appears)?",
      options: ["Bar graph", "Line graph", "Line plot", "Data table"],
      correct: 2,
      explanation: "A line plot uses stacked X's above a number line to show how often each value appears."
    }
  ],

  chapterQuiz: [
    // --- Bar vs Line vs Line Plot: choosing the right one ---
    {
      question: "A scientist wants to show how much rain fell each day over a month. Which type of graph should they use?",
      options: ["Bar graph", "Line graph", "Line plot", "Either works the same"],
      correct: 1,
      explanation: "Rainfall changing over time is best shown with a line graph — the connected points make the daily ups and downs easy to see."
    },
    {
      question: "A scientist wants to compare the bounce heights of a ball on three different surfaces (carpet, wood, rubber). Which graph is best?",
      options: ["Bar graph", "Line graph", "Line plot", "Either works the same"],
      correct: 0,
      explanation: "Comparing amounts across different categories is best with a bar graph."
    },
    {
      question: "A student measured the lengths of 25 leaves. They want to see which length came up most often. Which graph should they use?",
      options: ["Bar graph", "Line graph", "Line plot", "Pie chart"],
      correct: 2,
      explanation: "Frequency — how often each value appears — is best shown with a line plot."
    },
    {
      question: "Your data shows the population of a city in 1990, 2000, 2010, and 2020. Which graph should you use?",
      options: ["Bar graph", "Line graph", "Line plot", "None of these"],
      correct: 1,
      explanation: "Decade-by-decade change is a time series, so a line graph shows the trend best."
    },
    {
      question: "What is the main difference between a line graph and a line plot?",
      options: [
        "Line graphs use colors; line plots don't",
        "Line graphs connect points to show change over time; line plots stack X's to show how often values appear",
        "Line graphs are for science; line plots are for math",
        "There is no difference"
      ],
      correct: 1,
      explanation: "A line graph connects dots with a line to show a trend over time. A line plot stacks X's above a number line to show frequency."
    },

    // --- The 5 parts of a graph ---
    {
      question: "Which of these is NOT one of the required parts of a good graph?",
      options: ["Title", "X-axis label", "The author's name", "Y-axis label"],
      correct: 2,
      explanation: "The 5 parts are: Title, X-axis label, Y-axis label, Scale, and Key (if needed)."
    },
    {
      question: "A graph has bars but no numbers on the Y-axis and no Y-axis label. What's the biggest problem?",
      options: [
        "The bars are the wrong color",
        "The reader can't tell what the bar heights mean",
        "The graph is upside down",
        "There aren't enough bars"
      ],
      correct: 1,
      explanation: "Without numbers and a label on the Y-axis, the heights communicate nothing."
    },
    {
      question: "Where should the title of a graph go?",
      options: ["At the top", "At the bottom", "On the Y-axis", "Anywhere"],
      correct: 0,
      explanation: "The title belongs at the top so the reader sees it first."
    },
    {
      question: "Why is it important to have a CONSISTENT scale on a graph's axis?",
      options: [
        "It looks nicer",
        "It makes it easier to read and compare values correctly",
        "It saves paper",
        "It's required by law"
      ],
      correct: 1,
      explanation: "An uneven scale (like 0, 5, 30, 100) misleads the reader about the values."
    },
    {
      question: "When does a graph need a KEY?",
      options: [
        "Always",
        "Never",
        "When the graph shows more than one data series (like different colors for different groups)",
        "Only for line graphs"
      ],
      correct: 2,
      explanation: "A key explains what each color or symbol means. It's needed when there's more than one series."
    },

    // --- X and Y axes ---
    {
      question: "What goes on the X-axis of a graph?",
      options: ["Dependent Variable", "Independent Variable", "The title", "The key"],
      correct: 1,
      explanation: "The Independent Variable (what you changed) goes on the X-axis."
    },
    {
      question: "What goes on the Y-axis of a graph?",
      options: ["Dependent Variable", "Independent Variable", "The title", "The scale"],
      correct: 0,
      explanation: "The Dependent Variable (what you measured) goes on the Y-axis."
    },
    {
      question: "In a line plot showing leaf lengths, what goes on the X-axis?",
      options: [
        "The number of leaves",
        "The leaf lengths (measured values)",
        "The color of the leaves",
        "The name of each leaf"
      ],
      correct: 1,
      explanation: "In a line plot, the X-axis is the number line of measured values."
    },

    // --- Reading and interpreting bar graphs ---
    {
      question: "A bar graph shows bounce heights: Carpet = 10 cm, Wood = 70 cm, Rubber = 18 cm. Which surface caused the highest bounce?",
      options: ["Carpet", "Wood", "Rubber", "All the same"],
      correct: 1,
      explanation: "Wood has the tallest bar (70 cm), so it caused the highest bounce."
    },
    {
      question: "In that same graph, why did the ball bounce LOWEST on carpet?",
      options: [
        "Carpet is heavier",
        "Carpet absorbed the most energy from the impact, leaving less to push the ball back up",
        "Carpet was farther away",
        "The ball was different"
      ],
      correct: 1,
      explanation: "Soft surfaces absorb energy. Less energy goes back into the bounce, so the ball bounces lower."
    },

    // --- Reading and interpreting line graphs ---
    {
      question: "A line graph shows temperature every hour from 6 AM to 6 PM. A flat line between 11 AM and 1 PM tells you:",
      options: [
        "The thermometer broke",
        "The temperature stayed about the same during those hours",
        "The temperature dropped",
        "There was no data"
      ],
      correct: 1,
      explanation: "A flat line means the value didn't change much during that time."
    },
    {
      question: "A line graph of rainfall over 10 days shows a sharp rise between Day 5 and Day 6. What does that mean?",
      options: [
        "It didn't rain on Day 6",
        "There was a lot more rain on Day 6 than Day 5",
        "Day 6 was colder",
        "The graph is wrong"
      ],
      correct: 1,
      explanation: "A line going up means the value increased. Day 6 had more rain."
    },

    // --- Reading and interpreting line plots ---
    {
      question: "A line plot shows 15 X's above the value 8, and 3 X's above the value 12. What does this tell you?",
      options: [
        "The value 12 appeared most often",
        "The value 8 appeared most often (15 times vs. 3 times)",
        "Neither value appeared",
        "The graph is wrong"
      ],
      correct: 1,
      explanation: "The taller stack of X's (15 above 8) shows that the value 8 appeared most often."
    },
    {
      question: "In a line plot of pet lizard lengths, most X's are between 13 and 16 cm, with one X at 20 cm. What is the outlier?",
      options: [
        "The lizard measuring 13 cm",
        "The lizard measuring 20 cm",
        "The average length",
        "There is no outlier"
      ],
      correct: 1,
      explanation: "An outlier is a value far from the cluster. The 20 cm lizard doesn't fit the pattern of most lizards (13–16 cm), so it stands out."
    },
    {
      question: "A line plot uses a KEY to show different colors. Why would a scientist use a key in a line plot?",
      options: [
        "To make the graph prettier",
        "To compare two or more groups (like two different drop heights or two different materials)",
        "Because all line plots need keys",
        "To confuse the reader"
      ],
      correct: 1,
      explanation: "A key lets you compare multiple data series on the same number line, like the class's Bouncy Ball Lab where each color was a different drop height."
    },

    // --- Data tables ---
    {
      question: "A table shows: Trial 1 = 48 cm, Trial 2 = 51 cm, Trial 3 = 49 cm. What is the average?",
      options: ["48 cm", "49 cm", "49.3 cm", "51 cm"],
      correct: 2,
      explanation: "(48 + 51 + 49) ÷ 3 = 148 ÷ 3 = 49.3 cm."
    },
    {
      question: "Why is it useful to include an AVERAGE column in a data table?",
      options: [
        "It makes the table longer",
        "It summarizes the trials into one number, making it easier to compare conditions",
        "It replaces individual trials",
        "Averages are required by law"
      ],
      correct: 1,
      explanation: "Averages smooth out small variations and give one representative number per condition."
    },
    {
      question: "A student's table shows the same experiment done 3 times with very different results (10 cm, 45 cm, 8 cm). What should you conclude?",
      options: [
        "The average is 21 cm, so that's the answer",
        "The results are inconsistent — the procedure probably needs to be tightened or retested",
        "The experiment worked perfectly",
        "The tool is broken"
      ],
      correct: 1,
      explanation: "Wide variation between trials means the experiment isn't reliable yet. The average of scattered data isn't trustworthy."
    },

    // --- Choosing a good scale ---
    {
      question: "The x-axis of a graph goes 0, 2, 4, 6, 8, 10. What is the scale?",
      options: ["By 1s", "By 2s", "By 5s", "By 10s"],
      correct: 1,
      explanation: "The numbers increase by 2 each time."
    },
    {
      question: "You look at a bar graph and can't tell which bar is tallest because they're all similar heights. What should the graph creator have done differently?",
      options: [
        "Used a line graph instead",
        "Used a more precise scale on the Y-axis (smaller increments) so small differences show clearly",
        "Added more colors",
        "Used a bigger title"
      ],
      correct: 1,
      explanation: "If bars look nearly equal, the Y-axis scale is too coarse. A finer scale makes small differences visible."
    }
  ],

  skills: [
    {
      key: "graph-types",
      label: "Choose the right graph type (bar, line, or line plot)",
      remember: "Bar = compare categories. Line = change over time. Line plot = frequency of values.",
      workedExample: "Deer population each month → bar graph\nDaily rainfall over a month → line graph\nBounce heights from 25 trials → line plot"
    },
    {
      key: "graph-parts",
      label: "Label a graph correctly (title, axes, scale, key)",
      remember: "Title at the top. X-axis = Independent Variable. Y-axis = Dependent Variable. Scale = consistent pattern. Key = when you have more than one series.",
      workedExample: "Bouncy Ball line plot: Title = 'Height of Bounce'. X-axis = bounce heights in cm. Key = blue X for 100 cm drop, purple X for 150 cm drop."
    },
    {
      key: "read-graphs",
      label: "Read and interpret bar graphs, line graphs, and line plots",
      remember: "Taller bar = bigger value. Line going up = increase over time. Stacked X's = frequency.",
      workedExample: "September had the most deer (38). The 150 cm drop bounces clustered higher than the 100 cm drop bounces."
    },
    {
      key: "data-tables",
      label: "Read data tables and find averages",
      remember: "Read the title and column headers first. Average = sum of values ÷ number of values.",
      workedExample: "(48 + 51 + 49) ÷ 3 = 49.3"
    }
  ]
};