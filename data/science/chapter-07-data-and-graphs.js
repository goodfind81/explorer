/* ==========================================================
   Chapter 7 — Data & Graphs
   Covers: bar graphs, line graphs, tables, x/y axes, scale,
           title, keys, and how to read/interpret graphs.
   ========================================================== */

export const chapter = {
  id: "chapter-07-data-and-graphs",
  name: "Data & Graphs",
  shortName: "Data & Graphs",

  studyGuideHtml: `
    <h2>📊 Data & Graphs</h2>
    <p>Scientists collect data during experiments and organize it so they can see patterns. Two of the most common ways to display data are <strong>tables</strong>, <strong>bar graphs</strong>, and <strong>line graphs</strong>.</p>

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
    </div>

    <div class="diagram-box medium">
      <svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
        <text x="210" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="14" font-weight="bold" fill="#333">Bounce Heights of a Table-tennis Ball</text>

        <!-- y axis -->
        <line x1="50" y1="40" x2="50" y2="180" stroke="#333" stroke-width="2"/>
        <line x1="50" y1="180" x2="400" y2="180" stroke="#333" stroke-width="2"/>
        <text x="20" y="115" font-size="11" fill="#333" transform="rotate(-90 20,115)">Height (cm)</text>
        <text x="225" y="205" text-anchor="middle" font-size="11" fill="#333">Material</text>

        <!-- y gridlines -->
        <line x1="50" y1="60" x2="400" y2="60" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="50" y1="90" x2="400" y2="90" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="50" y1="120" x2="400" y2="120" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="50" y1="150" x2="400" y2="150" stroke="#DDD" stroke-dasharray="3,3"/>
        <text x="30" y="64" font-size="10" fill="#666">80</text>
        <text x="30" y="94" font-size="10" fill="#666">60</text>
        <text x="30" y="124" font-size="10" fill="#666">40</text>
        <text x="30" y="154" font-size="10" fill="#666">20</text>
        <text x="35" y="184" font-size="10" fill="#666">0</text>

        <!-- bars: Carpet=10, Wood=68, Rubber=18 -->
        <rect x="80" y="165" width="40" height="15" fill="#E74C3C"/>
        <rect x="180" y="78" width="40" height="102" fill="#3498DB"/>
        <rect x="280" y="153" width="40" height="27" fill="#2ECC71"/>
        <text x="100" y="196" text-anchor="middle" font-size="11" fill="#333">Carpet</text>
        <text x="200" y="196" text-anchor="middle" font-size="11" fill="#333">Wood</text>
        <text x="300" y="196" text-anchor="middle" font-size="11" fill="#333">Rubber</text>
      </svg>
      <div class="diagram-caption">Bar graph: taller bar = bigger value. Wood caused the highest bounce.</div>
    </div>

    <div class="diagram-box">
      <svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
        <text x="210" y="20" text-anchor="middle" font-family="Comic Sans MS" font-size="14" font-weight="bold" fill="#333">Daily Rainfall — October</text>
        <line x1="50" y1="40" x2="50" y2="180" stroke="#333" stroke-width="2"/>
        <line x1="50" y1="180" x2="400" y2="180" stroke="#333" stroke-width="2"/>
        <text x="20" y="115" font-size="11" fill="#333" transform="rotate(-90 20,115)">Rainfall (cm)</text>
        <text x="225" y="205" text-anchor="middle" font-size="11" fill="#333">Day</text>

        <!-- y gridlines -->
        <line x1="50" y1="60" x2="400" y2="60" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="50" y1="90" x2="400" y2="90" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="50" y1="120" x2="400" y2="120" stroke="#DDD" stroke-dasharray="3,3"/>
        <line x1="50" y1="150" x2="400" y2="150" stroke="#DDD" stroke-dasharray="3,3"/>
        <text x="30" y="64" font-size="10" fill="#666">2.0</text>
        <text x="30" y="94" font-size="10" fill="#666">1.5</text>
        <text x="30" y="124" font-size="10" fill="#666">1.0</text>
        <text x="30" y="154" font-size="10" fill="#666">0.5</text>
        <text x="35" y="184" font-size="10" fill="#666">0</text>

        <!-- points + line (rainfall by day) -->
        <polyline points="60,175 90,120 120,160 150,90 180,105 210,150 240,170 270,155 300,120 330,175"
                  fill="none" stroke="#8E44AD" stroke-width="2.5"/>
        <circle cx="60" cy="175" r="4" fill="#8E44AD"/>
        <circle cx="90" cy="120" r="4" fill="#8E44AD"/>
        <circle cx="120" cy="160" r="4" fill="#8E44AD"/>
        <circle cx="150" cy="90" r="4" fill="#8E44AD"/>
        <circle cx="180" cy="105" r="4" fill="#8E44AD"/>
        <circle cx="210" cy="150" r="4" fill="#8E44AD"/>
        <circle cx="240" cy="170" r="4" fill="#8E44AD"/>
        <circle cx="270" cy="155" r="4" fill="#8E44AD"/>
        <circle cx="300" cy="120" r="4" fill="#8E44AD"/>
        <circle cx="330" cy="175" r="4" fill="#8E44AD"/>
      </svg>
      <div class="diagram-caption">Line graph: shows changes over time. The line rises and falls with the data.</div>
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
          <div class="sg-ex"><strong>📊 Bar graph</strong>Compare AMOUNTS across different categories.<br>Example: Which surface made the ball bounce highest?</div>
          <div class="sg-ex"><strong>📈 Line graph</strong>Show CHANGE over TIME.<br>Example: How much rain fell each day this month?</div>
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
      <div><strong>Einstein Wonders:</strong> Why do scientists make their graphs "look neat"? Because a graph is a way to communicate your results to other scientists. If it's messy or unclear, no one can understand your discovery!</div>
    </div>

    <div class="highlight">
      <strong>Reminder:</strong> The <strong>Independent Variable</strong> goes on the X-axis (horizontal). The <strong>Dependent Variable</strong> goes on the Y-axis (vertical).
    </div>

    <h3>Reading a Table</h3>
    <p>A data table shows results in rows and columns. When you read one:</p>
    <ul>
      <li>Read the <strong>title</strong> to know what was tested.</li>
      <li>Read the <strong>column headers</strong> to know what each number means.</li>
      <li>Compare across rows and columns to look for patterns.</li>
    </ul>
    <p><strong>Example table:</strong></p>
    <table>
      <thead><tr><th>Material</th><th>Trial 1</th><th>Trial 2</th><th>Trial 3</th></tr></thead>
      <tbody>
        <tr><td>Carpet</td><td>10</td><td>12</td><td>9</td></tr>
        <tr><td>Wood</td><td>70</td><td>68</td><td>65</td></tr>
        <tr><td>Rubber</td><td>15</td><td>20</td><td>17</td></tr>
      </tbody>
    </table>
    <p>Wood had the highest bounce across all three trials.</p>
  `,

  miniCheck: [
    { question: "What goes on the X-axis of a graph?",
      options: ["The Dependent Variable", "The Independent Variable", "The title", "The key"],
      correct: 1,
      explanation: "The Independent Variable goes on the X-axis (horizontal)." },

    { question: "What goes on the Y-axis of a graph?",
      options: ["The Dependent Variable", "The Independent Variable", "The title", "The scale"],
      correct: 0,
      explanation: "The Dependent Variable (the data you measure) goes on the Y-axis (vertical)." },

    { question: "Which type of graph is BEST for showing how something changes over time?",
      options: ["Bar graph", "Line graph", "Pie chart", "Data table"],
      correct: 1,
      explanation: "Line graphs connect points with lines and are perfect for showing changes over time." },

    { question: "Which type of graph is BEST for comparing amounts across categories?",
      options: ["Bar graph", "Line graph", "None of these", "Data table"],
      correct: 0,
      explanation: "Bar graphs use rectangular bars of different heights to compare amounts across categories." },

    { question: "Which of these is NOT one of the 5 parts of a good graph?",
      options: ["Title", "X-axis label", "Y-axis label", "The author's name"],
      correct: 3,
      explanation: "The 5 parts are: Title, X-axis label, Y-axis label, Scale, and Key (if needed)." },
  ],

  chapterQuiz: [
    { question: "What is a bar graph?",
      options: [
        "A graph that uses rectangular bars to compare amounts",
        "A graph that connects points with lines",
        "A graph with only one point",
        "A type of data table"
      ],
      correct: 0,
      explanation: "Bar graphs use bars of different heights to compare amounts across categories." },

    { question: "What is a line graph best used for?",
      options: [
        "Comparing categories",
        "Showing change over time",
        "Showing a single number",
        "Reading a thermometer"
      ],
      correct: 1,
      explanation: "Line graphs are best for showing how something changes over time." },

    { question: "What goes on the X-axis of a graph?",
      options: ["Dependent Variable", "Independent Variable", "The title", "The scale"],
      correct: 1,
      explanation: "The Independent Variable goes on the X-axis (horizontal)." },

    { question: "What goes on the Y-axis of a graph?",
      options: ["Dependent Variable", "Independent Variable", "The key", "The title"],
      correct: 0,
      explanation: "The Dependent Variable goes on the Y-axis (vertical)." },

    { question: "Why does a graph need a title?",
      options: [
        "To make it pretty",
        "So the reader knows what the graph is about",
        "Because teachers say so",
        "To fill space"
      ],
      correct: 1,
      explanation: "The title tells the reader what the graph is showing." },

    { question: "Which of these is NOT one of the 5 parts of a good graph?",
      options: ["Title", "Scale", "Key (if needed)", "Your favorite color"],
      correct: 3,
      explanation: "The 5 parts are: Title, X-axis, Y-axis, Scale, and Key (if needed)." },

    { question: "What does 'scale' mean on a graph?",
      options: [
        "The size of the paper",
        "The number pattern on each axis (e.g., by 2s, by 5s)",
        "The color of the bars",
        "The title of the graph"
      ],
      correct: 1,
      explanation: "The scale is the number pattern — like counting by 2s, 5s, or 10s." },

    { question: "A scientist wants to show how much rain fell each day for 2 weeks. Which graph should they use?",
      options: ["Bar graph", "Line graph", "Either", "Neither"],
      correct: 1,
      explanation: "Rainfall over time is best shown with a line graph." },

    { question: "A scientist wants to compare the bounce height of a ball on carpet, wood, and rubber. Which graph?",
      options: ["Bar graph", "Line graph", "Either one", "Neither"],
      correct: 0,
      explanation: "Comparing categories (carpet, wood, rubber) is best shown with a bar graph." },

    { question: "Why do scientists compare their results with others?",
      options: [
        "To see who is better",
        "To check if results are similar or different, and figure out why",
        "To copy other people's work",
        "To finish faster"
      ],
      correct: 1,
      explanation: "Comparing results with peers helps scientists confirm findings and ask new questions." },

    { question: "What should you do FIRST when you look at a graph?",
      options: ["Count all the bars", "Read the title", "Look at the key", "Find the numbers"],
      correct: 1,
      explanation: "Reading the title tells you what the graph is about before you look at anything else." },

    { question: "Which of these is a reason to include a key on a graph?",
      options: [
        "To fill empty space",
        "To explain what each color or symbol means when you have more than one data series",
        "Because all graphs need keys",
        "To make the graph look nice"
      ],
      correct: 1,
      explanation: "Keys are used when a graph has more than one data series, so the reader knows which color represents what." },

    { question: "If a graph has no Y-axis label, what problem does that cause?",
      options: [
        "The graph won't print",
        "The reader won't know what the numbers on the Y-axis mean",
        "The colors won't work",
        "The bars will be the wrong size"
      ],
      correct: 1,
      explanation: "Without a Y-axis label, the reader can't tell what is being measured." },

    { question: "In a bar graph showing bounce heights, the bars are: Carpet=10, Wood=70, Rubber=18. Which bar is tallest?",
      options: ["Carpet", "Wood", "Rubber", "All the same"],
      correct: 1,
      explanation: "Wood has the highest value (70), so its bar is tallest." },

    { question: "Where should the title of a graph go?",
      options: ["At the top", "At the bottom", "On the Y-axis", "It doesn't matter"],
      correct: 0,
      explanation: "The title always goes at the top of the graph so it's easy to read first." },

    { question: "Why is a consistent scale important on a graph?",
      options: [
        "It looks better",
        "It makes it easier to read and compare the data correctly",
        "It saves paper",
        "Because teachers require it"
      ],
      correct: 1,
      explanation: "If the scale jumps around (0, 5, 30, 100), the graph misleads the reader about the actual values." },

    { question: "What is the FIRST step in creating a graph?",
      options: ["Draw the bars", "Choose a title", "Plot the data points", "Ask a friend"],
      correct: 1,
      explanation: "Step 1 of making a graph is choosing a title that describes what the graph shows." },

    { question: "Why is graphing data helpful?",
      options: [
        "It makes the data look pretty",
        "It helps people see patterns and compare results at a glance",
        "It uses less paper",
        "It's required by law"
      ],
      correct: 1,
      explanation: "Graphs help us see patterns, trends, and comparisons quickly — much faster than reading a table of numbers." },

    { question: "Which step comes AFTER plotting data points on a graph?",
      options: [
        "Choosing a title",
        "Labeling the axes",
        "Interpreting the graph and drawing conclusions",
        "Erasing your work"
      ],
      correct: 2,
      explanation: "Once the graph is done, scientists look at it to interpret patterns and draw conclusions." },

    { question: "A student's graph has bars but no numbers on the Y-axis and no label. What is the biggest problem?",
      options: [
        "The bars are the wrong color",
        "The reader can't tell what the bar heights actually mean",
        "The graph is upside down",
        "There aren't enough bars"
      ],
      correct: 1,
      explanation: "Without numbers on the Y-axis and a label, the graph doesn't communicate the actual data values." },
  ],
};
