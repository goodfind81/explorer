/* ==========================================================
   Chapter 8 — The Bouncy Ball Lab
   Covers: variables in a real experiment, hypothesis,
           procedure, data table, conclusion, comparing
           results with peers, and reasoning behind findings.
   ========================================================== */

export const chapter = {
  id: "chapter-08-bouncy-ball-lab",
  name: "The Bouncy Ball Lab",
  shortName: "Bouncy Ball Lab",

  studyGuideHtml: `
    <h2>🏀 The Bouncy Ball Lab</h2>
    <p>In this lab, you test how the <strong>drop height</strong> of a bouncy ball affects the <strong>bounce height</strong>. You work with a partner and use the same scientific method steps we've been learning all year.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The Big Question</span>
        <div class="sg-def">How does the drop height affect the bounce height of a bouncy ball?</div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Hypothesis / Prediction</span>
        <div class="sg-def">
          "If I drop a bouncy ball from a <strong>higher</strong> height, then it will rebound <strong>higher</strong> than if the ball is dropped from a lower height."
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Materials</span>
        <div class="sg-def">
          • Bouncy ball<br>
          • Measuring tape taped to the wall<br>
          • Lower drop height: 100 cm<br>
          • Higher drop height: 150 cm<br>
          • A partner
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The 3 Variables</span>
        <div class="sg-def">
          <strong>Independent Variable (you change):</strong> The drop height (100 cm vs. 150 cm)<br>
          <strong>Dependent Variable (you measure):</strong> The bounce height (in cm)<br>
          <strong>Controlled Variables (keep the same):</strong> Same ball, same surface, same measuring tape, same person dropping, same technique (drop, don't throw)
        </div>
      </div>
    </div>

    <div class="diagram-box medium">
  <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Wall / backdrop -->
    <rect x="20" y="10" width="320" height="230" fill="#FAFBFF" stroke="#D6E4FF" stroke-width="1.5" rx="8"/>

    <!-- Measuring tape on left -->
    <rect x="40" y="20" width="16" height="210" fill="#FFF9C4" stroke="#B7950B" stroke-width="1.5"/>
    <line x1="40" y1="45" x2="56" y2="45" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="70" x2="56" y2="70" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="95" x2="56" y2="95" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="120" x2="56" y2="120" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="145" x2="56" y2="145" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="170" x2="56" y2="170" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="195" x2="56" y2="195" stroke="#B7950B" stroke-width="1"/>
    <line x1="40" y1="220" x2="56" y2="220" stroke="#B7950B" stroke-width="1"/>
    <text x="62" y="30" font-size="9" fill="#666">150 cm</text>
    <text x="62" y="125" font-size="9" fill="#666">100 cm</text>
    <text x="62" y="230" font-size="9" fill="#666">0 (floor)</text>

    <!-- Floor line -->
    <line x1="20" y1="232" x2="340" y2="232" stroke="#333" stroke-width="2"/>

    <!-- Drop ball (red) at 100 cm line -->
    <circle cx="160" cy="120" r="16" fill="#E74C3C"/>
    <text x="185" y="118" font-size="11" fill="#333" font-weight="bold">Drop ball</text>
    <text x="185" y="132" font-size="9" fill="#888">(100 cm height)</text>

    <!-- Bounce arc -->
    <path d="M160,120 Q200,50 260,95" fill="none" stroke="#4A90E2" stroke-width="2" stroke-dasharray="5,3"/>

    <!-- Bounce ball (blue) -->
    <circle cx="260" cy="95" r="16" fill="#4A90E2" opacity="0.85"/>
    <text x="285" y="90" font-size="11" fill="#333" font-weight="bold">Bounces up</text>
    <text x="285" y="104" font-size="9" fill="#888">(bounce height)</text>

    <!-- Legend at bottom -->
    <text x="180" y="250" text-anchor="middle" font-size="10" fill="#555" font-style="italic">
      Drop height = Independent Variable • Bounce height = Dependent Variable
    </text>
  </svg>
</div>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Procedure (step by step)</span>
        <div class="sg-def">
          1. Work with your shoulder partner.<br>
          2. Find and record the two drop heights on the wall.<br>
          3. Decide who will drop and who will count/measure.<br>
          4. Get ready with the measuring tape.<br>
          5. Release the ball from the <strong>lower height</strong>. Do NOT throw it — just drop it.<br>
          6. Measure the height to which the <strong>bottom</strong> of the ball bounces. Record it.<br>
          7. Repeat from the same height for all your trials.<br>
          8. Trade jobs with your partner.<br>
          9. Release the ball from the <strong>higher height</strong>.<br>
          10. Repeat steps 4–7.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Conclusion / Analysis</span>
        <div class="sg-def">
          <strong>The higher the drop height → the higher the rebound bounce.</strong><br>
          <strong>The shorter the drop height → the lower the rebound bounce.</strong>
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Make an inference — WHY does this happen?</span>
        <div class="sg-def">
          When the ball is dropped from higher up, it falls faster and hits the floor with <strong>more energy</strong>. That extra energy has to go somewhere — some of it bounces the ball back up. So the ball bounces higher.
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do we use the SAME ball for both drop heights? Because a heavier or bouncier ball would change the result. We only want to test the drop height — so everything else must stay the same.</div>
    </div>

    <div class="highlight">
      <strong>Reminder:</strong> A good procedure is written step-by-step so that <em>anyone</em> could repeat the experiment the exact same way. If the procedure isn't clear, you'll get different results — and that's a problem.
    </div>

    <h3>📊 Recording Your Data</h3>
    <p>You record the bounce height for each trial in a data table:</p>
    <table>
      <thead>
        <tr>
          <th>Drop Height</th>
          <th>Trial 1</th>
          <th>Trial 2</th>
          <th>Trial 3</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>100 cm (lower)</td><td>48 cm</td><td>51 cm</td><td>49 cm</td><td>49.3 cm</td></tr>
        <tr><td>150 cm (higher)</td><td>72 cm</td><td>75 cm</td><td>73 cm</td><td>73.3 cm</td></tr>
      </tbody>
    </table>
    <p>Doing multiple trials and averaging them makes the result more reliable — a one-time fluke won't fool you.</p>

    <h3>🧠 Compare Results with Others</h3>
    <p>Scientists compare results with peers. If your group got 48 cm and another group got 47 cm, your results are similar — good sign! If their result is very different, you compare procedures to figure out why. Maybe they used a different ball, or a different measuring technique.</p>

    <div class="highlight">
      <strong>Why compare?</strong> Comparing helps scientists confirm findings, spot mistakes, and think of new questions to test.
    </div>
  `,

  miniCheck: [
    { question: "What is the Independent Variable in the Bouncy Ball Lab?",
      options: ["The bounce height", "The drop height", "The type of ball", "The measuring tape"],
      correct: 1,
      explanation: "You change the drop height — that's the Independent Variable." },

    { question: "What is the Dependent Variable in the Bouncy Ball Lab?",
      options: ["The bounce height", "The drop height", "The type of ball", "The temperature"],
      correct: 0,
      explanation: "You measure the bounce height — that's the Dependent Variable." },

    { question: "Which of these is a CONTROLLED variable in the Bouncy Ball Lab?",
      options: ["Drop height", "Bounce height", "Type of ball (same for all trials)", "The question"],
      correct: 2,
      explanation: "The same ball must be used in every trial so the test is fair." },

    { question: "Why do scientists repeat the experiment multiple times?",
      options: ["To waste time", "To make sure results are reliable", "Because they forgot what happened", "To use up the materials"],
      correct: 1,
      explanation: "Repeating gives you multiple trials, and averaging them makes the results more reliable." },

    { question: "The ball was dropped from a HIGHER height. What happened to the bounce height?",
      options: ["It bounced higher", "It bounced lower", "It bounced the same", "It stopped bouncing"],
      correct: 0,
      explanation: "Higher drop → more energy on impact → higher bounce." },
  ],

  chapterQuiz: [
    // --- Concept: energy and bounce height ---
    {
      question: "A ball is dropped from 100 cm and bounces to 60 cm. The same ball is dropped from 200 cm and bounces to 130 cm. Which best explains why the second bounce was higher?",
      options: [
        "The ball was warmer the second time",
        "The ball hit the floor with more energy from the higher drop",
        "The ball weighed more the second time",
        "The measuring tape was different"
      ],
      correct: 1,
      explanation: "When the ball falls from higher, it reaches the floor with more speed and energy. That extra energy bounces it back up higher."
    },
    {
      question: "Why does a ball never bounce back to the exact height it was dropped from?",
      options: [
        "Because gravity is weaker when the ball comes up",
        "Because some energy is lost to the floor, the air, and as sound and heat when the ball hits",
        "Because the ball is too heavy",
        "Because the drop height was measured wrong"
      ],
      correct: 1,
      explanation: "Every impact loses some energy — to the floor, to the air, and as sound and heat. So the bounce is always lower than the drop."
    },
    {
      question: "If a ball is dropped from 50 cm and then from 500 cm, what pattern would you expect to see?",
      options: [
        "Both bounces would be about the same",
        "The 50 cm drop would bounce higher",
        "The 500 cm drop would bounce higher",
        "Neither would bounce"
      ],
      correct: 2,
      explanation: "Higher drop → more energy on impact → higher bounce. This is the pattern Galileo-style experiments always show."
    },

    // --- Concept: variables ---
    {
      question: "In the Bouncy Ball Lab, the drop height is the:",
      options: [
        "Independent variable (what you change)",
        "Dependent variable (what you measure)",
        "Controlled variable (kept the same)",
        "Conclusion"
      ],
      correct: 0,
      explanation: "You choose the drop height — you change it. So it's the Independent Variable."
    },
    {
      question: "In the Bouncy Ball Lab, the bounce height is the:",
      options: [
        "Independent variable (what you change)",
        "Dependent variable (what you measure)",
        "Controlled variable (kept the same)",
        "Question"
      ],
      correct: 1,
      explanation: "You measure how high the ball bounces. That's the Dependent Variable — it depends on the drop height."
    },
    {
      question: "Which of these must be kept the SAME across all trials?",
      options: [
        "The drop height",
        "The bounce height",
        "The type of ball and the surface",
        "The result of the experiment"
      ],
      correct: 2,
      explanation: "Controlled variables (constants) — like using the same ball and the same surface — keep the test fair. Only the drop height changes."
    },
    {
      question: "A student wants to test whether the SURFACE affects how high a ball bounces. What should they change?",
      options: [
        "The type of ball",
        "The surface (carpet, wood, rubber)",
        "The drop height",
        "The measuring tape"
      ],
      correct: 1,
      explanation: "If the question is about surface, then surface is the Independent Variable. Everything else — including the drop height — stays the same."
    },

    // --- Concept: measurement and data ---
    {
      question: "You measure the bounce height by looking at the bottom of the ball at its highest point. Why measure the BOTTOM of the ball, not the top?",
      options: [
        "Because the top is too high to see",
        "Because bounce height is measured from the floor to the bottom of the ball — that's what 'height above the floor' means",
        "Because the bottom is heavier",
        "Because the top has no height"
      ],
      correct: 1,
      explanation: "Height is measured from the floor up. The bottom of the ball is what touches the floor at rest, so that's the reference point."
    },
    {
      question: "A student does 3 trials at 100 cm and gets 48 cm, 51 cm, and 49 cm. Why do the trials give slightly different results?",
      options: [
        "Because the ball changed weight each time",
        "Because small differences in release and measuring happen between trials",
        "Because gravity changed",
        "Because the ruler was wrong"
      ],
      correct: 1,
      explanation: "Real experiments have small variations. That's why scientists repeat trials and average them — to get a more reliable result."
    },
    {
      question: "A student's three trials at 150 cm give 72, 75, and 73 cm. What is the average bounce height?",
      options: ["72 cm", "73 cm", "73.3 cm", "75 cm"],
      correct: 2,
      explanation: "(72 + 75 + 73) ÷ 3 = 220 ÷ 3 = 73.3 cm. Averaging reduces the effect of any single trial's small error."
    },

    // --- Concept: procedure and reliability ---
    {
      question: "Why is it important to write a procedure step-by-step?",
      options: [
        "Because teachers grade on neatness",
        "So anyone can repeat the experiment the same way and get comparable results",
        "Because the procedure must be long",
        "Because it's required by law"
      ],
      correct: 1,
      explanation: "A clear procedure lets other scientists repeat the experiment exactly. That's how results get confirmed or questioned."
    },
    {
      question: "If a student throws the ball down instead of dropping it, what's the problem with the experiment?",
      options: [
        "Nothing — throwing is the same as dropping",
        "The extra force from the throw changes the energy, so you're not just testing drop height anymore",
        "The ball will break",
        "Throwing is not allowed in class"
      ],
      correct: 1,
      explanation: "The whole test assumes gravity alone controls the fall. Throwing adds extra energy and breaks that assumption."
    },
    {
      question: "A scientist repeats an experiment five times. What is the main reason?",
      options: [
        "To use up the materials",
        "Because one trial could be a mistake; repeating gives more reliable results",
        "To take longer",
        "Because the first four didn't count"
      ],
      correct: 1,
      explanation: "Repeating protects against one-off errors. A result that shows up every time is more trustworthy than a single trial."
    },

    // --- Concept: inference from data ---
    {
      question: "A ball is dropped from 150 cm and bounces to 90 cm. What can you INFER about the drop from 300 cm?",
      options: [
        "The ball will bounce to less than 90 cm",
        "The ball will bounce to about 90 cm again",
        "The ball will bounce to more than 90 cm",
        "The ball will not bounce at all"
      ],
      correct: 2,
      explanation: "Higher drop height always produces a higher bounce (with the same ball and surface). So 300 cm should bounce higher than 90 cm."
    },
    {
      question: "A ball bounces to 60 cm when dropped from 100 cm. From 200 cm it bounces to 115 cm. What pattern do you notice?",
      options: [
        "The bounce is always about half the drop height",
        "The bounce gets higher as the drop gets higher",
        "The bounce stays the same",
        "The bounce gets lower as the drop gets higher"
      ],
      correct: 1,
      explanation: "As the drop height increases, the bounce height increases too. This is the main pattern of the Bouncy Ball Lab."
    },
    {
      question: "If a student's data shows 100 cm → 30 cm, 200 cm → 25 cm, 300 cm → 20 cm, what should you conclude?",
      options: [
        "The pattern matches the expected result",
        "Something is wrong — the bounce should get HIGHER with higher drops, not lower",
        "The ball is broken",
        "The data proves gravity works backwards"
      ],
      correct: 1,
      explanation: "Real data may vary slightly, but a consistent downward trend where bounce decreases as drop increases suggests a measurement error or procedure issue."
    },

    // --- Concept: critique reasoning ---
    {
      question: "A student says, 'The ball bounced higher on the second trial, so the ball got bouncier.' What's wrong with this reasoning?",
      options: [
        "Nothing — that's a good explanation",
        "It confuses a small trial difference with a real change in the ball; balls don't get bouncier on their own",
        "The ball is definitely broken",
        "Physics doesn't work that way"
      ],
      correct: 1,
      explanation: "A small difference between trials is normal. It doesn't mean the ball changed. Good scientific reasoning separates normal variation from real effects."
    },
    {
      question: "A group says: 'We dropped from 100 cm and 150 cm and got bounce heights of 60 cm and 60 cm. So drop height doesn't matter.' What's the best response?",
      options: [
        "They're right — drop height doesn't matter",
        "One trial each is not enough; they should repeat the trials and average before drawing a conclusion",
        "They should have used a different ball",
        "The data proves gravity is fake"
      ],
      correct: 1,
      explanation: "Two single trials can both be affected by error. Repeat each condition 3 times, average, then compare."
    },
    {
      question: "A student concludes: 'The ball bounces higher from higher drops because it's more scared of heights.' What's wrong with this?",
      options: [
        "Nothing — that's a good explanation",
        "It's not a scientific explanation — fear isn't something we can measure or test with a ball",
        "Balls can't feel fear, but the bounce is still caused by fear",
        "It's a good guess but needs more trials"
      ],
      correct: 1,
      explanation: "Scientific explanations have to be based on measurable things like energy, force, and speed — not on unmeasurable ideas like fear."
    },

    // --- Concept: applying to new situations ---
    {
      question: "You want to find out if a heavier ball bounces higher than a lighter ball when dropped from the same height. What would you change?",
      options: [
        "The drop height",
        "The weight of the ball",
        "The measuring tape",
        "The floor"
      ],
      correct: 1,
      explanation: "If the question is about weight, then weight is the Independent Variable. Drop height and surface stay the same."
    },
    {
      question: "You want to know if a ball bounces higher on a wood floor or a carpet. What stays the same?",
      options: [
        "The surface",
        "The type of ball, the drop height, and the measuring method",
        "The bounce height",
        "Nothing needs to stay the same"
      ],
      correct: 1,
      explanation: "The surface is the thing you change. Everything else — same ball, same drop height, same measuring — stays the same."
    },
    {
      question: "In the table-tennis ball experiment (from your class), the results were: carpet 10 cm, wood 68 cm, rubber 18 cm. Which conclusion is best?",
      options: [
        "Carpet is the best surface for bouncing",
        "Wood lets the ball bounce highest; carpet absorbs the most energy",
        "The ball was broken",
        "The data doesn't show any pattern"
      ],
      correct: 1,
      explanation: "Wood: 68 cm is the highest. Carpet: 10 cm is the lowest — meaning carpet absorbed the most energy from the bounce."
    }
  ],
};
