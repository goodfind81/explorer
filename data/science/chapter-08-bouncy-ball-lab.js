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

    <div class="pendulum-container">
      <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
        <!-- Wall -->
        <rect x="20" y="10" width="260" height="200" fill="#F8F9FA" stroke="#CCC" stroke-width="1" rx="6"/>
        <!-- Measuring tape -->
        <rect x="40" y="15" width="18" height="190" fill="#FFF9C4" stroke="#B7950B" stroke-width="1.5"/>
        <line x1="40" y1="40" x2="50" y2="40" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="60" x2="50" y2="60" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="80" x2="50" y2="80" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="100" x2="50" y2="100" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="120" x2="50" y2="120" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="140" x2="50" y2="140" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="160" x2="50" y2="160" stroke="#B7950B" stroke-width="1"/>
        <line x1="40" y1="180" x2="50" y2="180" stroke="#B7950B" stroke-width="1"/>
        <text x="60" y="35" font-size="10" fill="#666">150 cm</text>
        <text x="60" y="105" font-size="10" fill="#666">100 cm</text>
        <text x="60" y="185" font-size="10" fill="#666">0 cm (floor)</text>

        <!-- Ball at 100 cm -->
        <circle cx="140" cy="105" r="14" fill="#E74C3C"/>
        <text x="160" y="108" font-size="10" fill="#333">drop height</text>

        <!-- Ball bounce arc -->
        <path d="M140,105 Q140,60 190,90" fill="none" stroke="#4A90E2" stroke-width="2" stroke-dasharray="4,3"/>
        <circle cx="190" cy="90" r="14" fill="#4A90E2" opacity="0.7"/>
        <text x="210" y="93" font-size="10" fill="#333">bounce height</text>
        <line x1="190" y1="90" x2="190" y2="190" stroke="#4A90E2" stroke-width="1" stroke-dasharray="2,2"/>
      </svg>
      <div class="diagram-caption">Drop height (Independent) and bounce height (Dependent).</div>
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
    { question: "What is the BIG question being tested in the Bouncy Ball Lab?",
      options: [
        "How does the color of the ball affect how high it bounces?",
        "How does the drop height affect the bounce height?",
        "How does the type of floor affect how high a ball bounces?",
        "How does the size of the ball affect how far it rolls?"
      ],
      correct: 1,
      explanation: "The lab tests how drop height affects bounce height." },

    { question: "What was the hypothesis in the Bouncy Ball Lab?",
      options: [
        "If I drop the ball from higher, it will bounce lower.",
        "If I drop the ball from higher, it will bounce higher.",
        "The ball won't bounce at all.",
        "The ball will bounce the same height no matter what."
      ],
      correct: 1,
      explanation: "The hypothesis was: higher drop = higher bounce." },

    { question: "What is the Independent Variable in this lab?",
      options: ["The bounce height", "The drop height", "The type of ball", "The measuring tape"],
      correct: 1,
      explanation: "You changed the drop height — that's the Independent Variable." },

    { question: "What is the Dependent Variable in this lab?",
      options: ["The bounce height", "The drop height", "The type of ball", "The temperature of the room"],
      correct: 0,
      explanation: "You measure the bounce height — that's the Dependent Variable." },

    { question: "Which of these was a CONTROLLED variable in the Bouncy Ball Lab?",
      options: [
        "The same ball used every trial",
        "The bounce height",
        "The drop height",
        "The result of the experiment"
      ],
      correct: 0,
      explanation: "Using the same ball keeps the test fair — everything except drop height stays the same." },

    { question: "Why do you drop the ball instead of throwing it?",
      options: [
        "Throwing is unsafe",
        "Throwing adds extra force, so you wouldn't be testing just the drop height",
        "The ball is too heavy to throw",
        "Throwing is not allowed in class"
      ],
      correct: 1,
      explanation: "Throwing adds extra force, which would change the result. You only want to test gravity — so just drop it." },

    { question: "How many trials did the procedure recommend for each drop height?",
      options: ["1", "3", "5", "10"],
      correct: 1,
      explanation: "The procedure called for 3 trials at each drop height, so you can average them for reliability." },

    { question: "Why is it important to record your data carefully?",
      options: [
        "So you can remember what happened",
        "So other scientists can compare their results with yours",
        "Because teachers grade on neatness",
        "Both A and B"
      ],
      correct: 3,
      explanation: "Careful records help you remember and let other scientists compare and repeat your work." },

    { question: "What was the conclusion of the Bouncy Ball Lab?",
      options: [
        "The higher the drop, the lower the bounce",
        "The higher the drop, the higher the bounce",
        "Drop height doesn't matter",
        "The bounce is always the same"
      ],
      correct: 1,
      explanation: "The conclusion was: higher drop → higher bounce." },

    { question: "Why did the ball bounce higher when dropped from higher up?",
      options: [
        "Because it was a different ball",
        "Because it fell faster and hit the floor with more energy",
        "Because the room got warmer",
        "Because the measuring tape was longer"
      ],
      correct: 1,
      explanation: "The ball fell faster and hit the floor with more energy, which bounced it back up higher." },

    { question: "If another group got a very different result from yours, what should you do?",
      options: [
        "Ignore their result",
        "Say they did it wrong",
        "Compare your procedures and figure out why the results differ",
        "Report them to the teacher"
      ],
      correct: 2,
      explanation: "Scientists compare procedures to figure out why results differ. This often leads to new questions." },

    { question: "What does it mean if your results are similar to another group's results?",
      options: [
        "You copied each other",
        "The results are reliable and repeatable",
        "Someone made a mistake",
        "It's a coincidence"
      ],
      correct: 1,
      explanation: "Similar results across different groups make the finding more reliable." },

    { question: "Which of the following is NOT a controlled variable in the Bouncy Ball Lab?",
      options: [
        "Same ball for all trials",
        "Same drop surface (floor)",
        "Same measuring tape",
        "The bounce height"
      ],
      correct: 3,
      explanation: "Bounce height is the Dependent Variable — it's what you measure, not what you keep the same." },

    { question: "Why should a procedure be written step-by-step?",
      options: [
        "To make it longer",
        "So anyone can repeat the experiment the same way",
        "Because teachers require it",
        "To make it look professional"
      ],
      correct: 1,
      explanation: "A clear step-by-step procedure lets anyone repeat the experiment identically, so results can be compared." },

    { question: "What was measured using the measuring tape on the wall?",
      options: [
        "The temperature",
        "Both the drop height and the bounce height",
        "The weight of the ball",
        "The speed of the ball"
      ],
      correct: 1,
      explanation: "The tape was used to find both the drop heights and where the ball bounced to." },

    { question: "Which measurement would be considered the bounce height?",
      options: [
        "The height the ball was dropped from",
        "The height from the floor to the BOTTOM of the ball after it bounced",
        "The height of the measuring tape",
        "The height of the person dropping the ball"
      ],
      correct: 1,
      explanation: "Bounce height is measured from the floor to the bottom of the ball at its highest point after bouncing." },

    { question: "Why might a group's result differ from yours even with the same ball?",
      options: [
        "Because the ball was different",
        "Because they measured differently, or released the ball at a different angle",
        "Because their drop height was different",
        "Both B and C could cause differences"
      ],
      correct: 3,
      explanation: "Small differences in measuring or releasing the ball can change the result, which is why procedures must be followed carefully." },

    { question: "If the ball bounced to 75 cm after being dropped from 150 cm, was the bounce height LOWER or HIGHER than the drop height?",
      options: ["Higher", "Lower", "Exactly the same", "Can't tell"],
      correct: 1,
      explanation: "75 cm is lower than 150 cm. A ball never bounces higher than its drop height (that would break the laws of physics!)." },

    { question: "Why does the ball not bounce back up to the exact same height it was dropped from?",
      options: [
        "Because gravity is different",
        "Because some energy is lost to the floor and the air when it hits",
        "Because the ball is too old",
        "Because the measuring tape is not accurate"
      ],
      correct: 1,
      explanation: "Some energy is transferred to the floor and lost as sound/heat, so the ball doesn't bounce back to full height." },

    { question: "Which of these would be a good NEW question based on this lab?",
      options: [
        "What is the best color for a bouncy ball?",
        "How does the type of surface (carpet, wood, rubber) affect the bounce height?",
        "What is a bouncy ball made of?",
        "Who invented the bouncy ball?"
      ],
      correct: 1,
      explanation: "A new testable question that builds on this lab is: how does the surface affect bounce height? (We saw a hint of this in the table-tennis ball experiment!)" },
  ],
};