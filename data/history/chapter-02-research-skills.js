/* ==========================================================
   History Chapter 02 — Research Skills
   Unit 1 material. Covers thinking like a historian:
   asking questions, conducting research, primary vs.
   secondary sources, credibility, bias, fact vs. opinion,
   archaeology and artifacts, timelines (BC/AD/BCE/CE),
   and reading strategies.
   ========================================================== */

export const chapter = {
  id: "chapter-02-research-skills",
  name: "Research Skills",
  shortName: "Research",

  studyGuideHtml: `
    <h2>🔎 Research Skills</h2>
    <p>Historians are detectives of the past. They ask questions, find sources, weigh evidence, and draw conclusions. Here's how they think.</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">What is History?</span>
        <div class="sg-def">
          History is the study of the <strong>people and events of the past</strong>. It tells the story of how cultures have changed over time. History helps us understand the present.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Who studies history?</span>
        <div class="sg-def">
          <strong>Historians</strong> study and write about history. Anyone can be a historian — you are one in this class!<br><br>
          <strong>Archaeologists</strong> study the past through <em>material remains</em> — the things people left behind.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Observation vs. Inference</span>
        <div class="sg-def">
          <strong>Observation:</strong> What you notice using your five senses.<br>
          <strong>Inference:</strong> An educated guess based on your observations + what you already know.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Primary Sources</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          A <strong>primary source</strong> is information created at the <em>same time</em> as an event, OR by a person <em>directly involved</em> in the event. It's an original account.<br><br>
          <strong>Examples:</strong> diaries, letters, interviews, speeches, photographs, audio/video recordings, autobiographies, artifacts, the Constitution.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Secondary Sources</span>
        <div class="sg-def" style="background:#FFF9C4;">
          A <strong>secondary source</strong> is one step removed from the original event. It gets its information from somewhere else or from a person not directly involved.<br><br>
          <strong>Examples:</strong> textbooks, encyclopedias, biographies, books/articles that <em>interpret</em> an event, a classmate's report, documentaries.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Reliable vs. Unreliable Sources</span>
        <div class="sg-def">
          <strong>Reliable</strong> — sources you can trust: books, newspapers, scholarly articles, government (.gov) and university (.edu) websites.<br><br>
          <strong>Unreliable</strong> — sources you cannot trust: personal websites, blogs, social media, ads, AI (which can "hallucinate" — make up false info).
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Fact vs. Opinion</span>
        <div class="sg-def">
          <strong>Fact</strong> — something that can be <em>proven true</em> with evidence. <br>Example: "Oranges are a fruit."<br><br>
          <strong>Opinion</strong> — someone's beliefs or feelings. Cannot be proven. <br>Example: "Oranges are delicious."<br><br>
          <strong>Signal words:</strong><br>
          Facts → "The report confirms...", "Scientists discovered...", "The investigation demonstrated..."<br>
          Opinions → "The report argues...", "Many scientists suspect...", "It is the investigator's view..."
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Bias in the News</span>
        <div class="sg-def">
          <strong>Bias</strong> means favoring one thing, idea, or group over another. Biased news reports a story in a partial or unfair manner — the journalist favors one side.<br><br>
          <strong>3 types of bias:</strong><br>
          • <strong>Omission</strong> — leaving out important information. Ask: "What's missing?"<br>
          • <strong>Placement</strong> — where info is placed makes it seem more or less important. Ask: "Where is it?"<br>
          • <strong>Labeling</strong> — using a certain word or label to influence how we think. Ask: "What words are being used?"
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Analyzing Artifacts</span>
        <div class="sg-def">
          An <strong>artifact</strong> is anything <em>made, modified, or altered by humans</em>.<br><br>
          Examples: arrowheads, knives, pens, pottery, jewelry, toys.<br><br>
          <strong>Attributes</strong> — characteristics of an artifact (shape, size, color) that give clues about how it was used.<br><br>
          <strong>Association</strong> — the physical relationship between two or more objects found together.<br><br>
          <strong>Context</strong> — where an artifact was found AND what it was found with. This is where the clues come from.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Timelines & Chronological Order</span>
        <div class="sg-def">
          <strong>Chronological order</strong> = events arranged in the order they happened (oldest to newest).<br><br>
          A <strong>timeline</strong> is a visual representation of chronological events.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">BC / AD / BCE / CE — Dates</span>
        <div class="sg-def" style="background:#E8F8F5; border-left-color: var(--accent-green);">
          <strong>BC</strong> = "Before Christ"<br>
          <strong>BCE</strong> = "Before Common Era"<br>
          <strong>AD</strong> = "Anno Domini" (Latin for "in the year of our Lord")<br>
          <strong>CE</strong> = "Common Era"<br><br>
          <strong>BC and BCE</strong> = same time period (before year 1) — count DOWN. (Example: 3000 BCE is older than 300 BCE.)<br>
          <strong>AD and CE</strong> = same time period (starting from year 1) — count UP.<br><br>
          <strong>Why do some people use BCE/CE?</strong> Because it's not tied to any one religion — it's a neutral way to describe time.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Cause and Effect</span>
        <div class="sg-def">
          <strong>Cause</strong> = the reason something happened.<br>
          <strong>Effect</strong> = the thing that happened as a result.<br><br>
          <strong>Cause keywords:</strong> Because, The reason for, On account of, Due to, Since, Led to<br>
          <strong>Effect keywords:</strong> As a result, Resulting in, Outcome, Therefore, Consequently, So, Finally
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Reading Tools for Passages</span>
        <div class="sg-def">
          When reading a passage with questions:<br>
          1. Read the <strong>questions first</strong> — underline key words.<br>
          2. Read the <strong>title</strong> — it tells you the big topic.<br>
          ️3. Read the <strong>introduction and headings</strong> — they give clues to main ideas.<br>
          4. Look at <strong>photos and diagrams</strong> — they add information.<br>
          5. Make a <strong>prediction</strong> about what the passage is about.<br>
          6. Read the passage <strong>in order</strong>, circling words you don't understand.<br>
          7. When answering questions, <strong>highlight</strong> the sentence in the passage where you found the answer.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Determining Credibility — 5 Questions to Ask</span>
        <div class="sg-def">
          1. Is the author an expert?<br>
          2. Is the information up to date?<br>
          3. Is the purpose to inform (not to sell)?<br>
          4. Are there many facts and details (not just opinions)?<br>
          5. Does the domain end in .edu, .gov, or .org?
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Geography → History connection</span>
        <div class="sg-def">
          <strong>Where</strong> something happens matters. Geography affects how people live — what they eat, how they build homes, what jobs they do. For example, Plains Native Americans used teepees (easy to move for following buffalo), while Southwest nations built adobe homes from clay (hot, dry climate).
        </div>
      </div>
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why do historians care so much about primary sources? Because they're the closest thing we have to being there. A diary from a soldier tells you what the war was like in his own words — a textbook written 100 years later can only summarize.</div>
    </div>
  `,

  miniCheck: [
    {
      question: "Which of these is a PRIMARY source?",
      options: [
        "A textbook chapter about the Vietnam War",
        "A diary written by Abraham Lincoln during the Civil War",
        "A biography about Benjamin Franklin",
        "A history book describing Lewis and Clark"
      ],
      correct: 1,
      explanation: "Primary sources are created at the time of the event or by someone directly involved. A diary written by Lincoln himself is primary."
    },
    {
      question: "Which of these is a SECONDARY source?",
      options: [
        "The Declaration of Independence",
        "A letter written by a soldier describing WWII",
        "A history book describing WWII",
        "A photograph of soldiers landing on the beaches of Normandy"
      ],
      correct: 2,
      explanation: "A history book interprets events after they happened. It's one step removed."
    },
    {
      question: "Which statement is a FACT?",
      options: [
        "The Statue of Liberty is the prettiest statue in the world.",
        "The Statue of Liberty is in New York Harbor.",
        "The Tigers are the best team ever.",
        "Chocolate ice cream is delicious."
      ],
      correct: 1,
      explanation: "Facts can be proven true. 'New York Harbor' is a verifiable location."
    },
    {
      question: "What does B.C.E. stand for?",
      options: [
        "Before Common Era",
        "British Columbia Era",
        "By Common Evidence",
        "Before Christ's Era"
      ],
      correct: 0,
      explanation: "BCE stands for Before Common Era — a neutral way to describe the time before year 1."
    },
    {
      question: "Which is a more reliable source for a school report about World War II?",
      options: [
        "A personal blog post by an anonymous writer",
        "A social media post about WWII",
        "A book published by a university press",
        "An ad for a WWII movie"
      ],
      correct: 2,
      explanation: "University-published books are vetted by experts. Personal blogs and ads are unreliable."
    }
  ],

  chapterQuiz: [
    // --- Primary vs secondary sources ---
    {
      question: "What is the main difference between a primary and a secondary source?",
      options: [
        "Primary sources are shorter",
        "Primary sources are original accounts from the time of the event; secondary sources are created later and interpret it",
        "Primary sources are only photographs",
        "There is no difference"
      ],
      correct: 1,
      explanation: "Primary sources come from the time of the event or someone involved. Secondary sources are created later."
    },
    {
      question: "Which of these is a PRIMARY source?",
      options: [
        "A textbook about ancient Egypt",
        "An encyclopedia article about the Titanic",
        "A clay pot from Ancient Egypt",
        "A biography of Barack Obama"
      ],
      correct: 2,
      explanation: "The clay pot is an original artifact from the time period — that makes it a primary source."
    },
    {
      question: "Which of these is a SECONDARY source?",
      options: [
        "A speech by Martin Luther King, Jr.",
        "An interview with the current president",
        "A book about the Stone Age",
        "The Declaration of Independence"
      ],
      correct: 2,
      explanation: "A book about the Stone Age interprets events from long ago — it's a secondary source."
    },
    {
      question: "A student writes a report about the Vietnam War for class. The report is a:",
      options: ["Primary source", "Secondary source", "Artifact", "Diary"],
      correct: 1,
      explanation: "The student wasn't there — they researched from other sources. That makes it a secondary source."
    },
    {
      question: "A photo taken in 1944 of soldiers landing on the beaches of Normandy is a:",
      options: ["Primary source", "Secondary source", "Replica", "Documentary"],
      correct: 0,
      explanation: "A photograph taken at the time is a primary source."
    },
    {
      question: "A movie about the life of Thomas Jefferson made in 2020 is a:",
      options: ["Primary source", "Secondary source", "Artifact", "Autobiography"],
      correct: 1,
      explanation: "The movie was created long after Jefferson's time and interprets his life — a secondary source."
    },

    // --- Credibility ---
    {
      question: "Which website would be most reliable for research?",
      options: [
        "A .com shopping site",
        "A personal blog",
        "A .gov website",
        "A political party website"
      ],
      correct: 2,
      explanation: "Government (.gov) and university (.edu) websites are usually reliable."
    },
    {
      question: "Why can AI chatbots sometimes be unreliable?",
      options: [
        "They are always right",
        "They can 'hallucinate' — making up false information in a confident tone",
        "They only work in English",
        "They can't write complete sentences"
      ],
      correct: 1,
      explanation: "AI doesn't know facts — it predicts the next likely word. It can invent fake information while sounding sure."
    },
    {
      question: "Which of these is a sign a source might NOT be reliable?",
      options: [
        "It has correct spelling",
        "It uses a calm, neutral tone",
        "It uses all capital letters and lots of exclamation marks",
        "It cites many experts"
      ],
      correct: 2,
      explanation: "All-caps and excessive exclamation points often signal unreliable content."
    },

    // --- Fact vs opinion ---
    {
      question: "Which statement is a FACT?",
      options: [
        "The Statue of Liberty is the prettiest statue in the world.",
        "The Statue of Liberty is in New York Harbor.",
        "The Tigers are the best team ever.",
        "Chocolate ice cream is delicious."
      ],
      correct: 1,
      explanation: "Facts can be proven true. 'New York Harbor' is verifiable."
    },
    {
      question: "Which statement is an OPINION?",
      options: [
        "George Washington was the first President of the United States.",
        "The fastest land animal is the cheetah.",
        "Michael Jordan is the greatest basketball player of all time.",
        "Oranges contain vitamin C."
      ],
      correct: 2,
      explanation: "'Greatest' is a subjective judgment — cannot be proven."
    },
    {
      question: "Which signal phrase often comes before an opinion?",
      options: [
        "The report confirms...",
        "Scientists discovered...",
        "The report argues that...",
        "The investigation demonstrated..."
      ],
      correct: 2,
      explanation: "'Argues' suggests the report is making a case, not stating a fact."
    },

    // --- Bias ---
    {
      question: "What does bias mean in the news?",
      options: [
        "Reporting every side equally",
        "Favoring one thing, idea, or group over another — reporting partially or unfairly",
        "Using short sentences",
        "Writing in all caps"
      ],
      correct: 1,
      explanation: "Bias means favoring one side. Biased news is partial or unfair."
    },
    {
      question: "A school newspaper puts a science-competition story on the front page but puts a food-drive story on the last page in tiny print. What type of bias is this?",
      options: ["Omission", "Placement", "Labeling", "None"],
      correct: 1,
      explanation: "Placement bias = where information is placed affects how important it seems."
    },
    {
      question: "A reporter says, 'Jordan is a troublemaker who is always interrupting,' instead of 'Jordan asked a lot of questions.' What type of bias is this?",
      options: ["Omission", "Placement", "Labeling", "None"],
      correct: 2,
      explanation: "Labeling bias = using a specific word or label to influence how we think."
    },
    {
      question: "A student says 'Our class had the best field trip ever!' but doesn't mention that the bus broke down. What type of bias is this?",
      options: ["Omission", "Placement", "Labeling", "None"],
      correct: 0,
      explanation: "Omission bias = leaving out important information that would change the story."
    },

    // --- Artifacts & archaeology ---
    {
      question: "What is an artifact?",
      options: [
        "Any rock found in nature",
        "Anything made, modified, or altered by humans",
        "Only items from ancient Rome",
        "A type of map"
      ],
      correct: 1,
      explanation: "An artifact is anything made or changed by humans. A naturally shaped rock is NOT an artifact."
    },
    {
      question: "A seashell found on the beach is:",
      options: ["An artifact", "A natural object", "A primary source", "A secondary source"],
      correct: 1,
      explanation: "Seashells are made by nature, not humans — so they're natural objects, not artifacts."
    },
    {
      question: "What do we call the characteristics of an artifact, like its shape, size, or color?",
      options: ["Context", "Attributes", "Association", "Bias"],
      correct: 1,
      explanation: "Attributes are characteristics that give clues about an artifact's function."
    },
    {
      question: "What does 'context' mean when studying an artifact?",
      options: [
        "The size of the artifact",
        "The color of the artifact",
        "Where the artifact was found and what it was found with",
        "The price of the artifact"
      ],
      correct: 2,
      explanation: "Context = the location, soil type, and what other objects were found alongside the artifact."
    },
    {
      question: "The physical relationship between two or more objects found together is called:",
      options: ["Context", "Attributes", "Association", "Sequence"],
      correct: 2,
      explanation: "Association = when objects are found together, which helps us understand their use."
    },
    {
      question: "Which is an example of an artifact?",
      options: [
        "A rock shaped by wind",
        "A clay pot made by ancient people",
        "A seashell on the beach",
        "A mountain"
      ],
      correct: 1,
      explanation: "A clay pot was made by humans — that makes it an artifact."
    },

    // --- Timelines & BC/AD ---
    {
      question: "What does B.C.E. stand for?",
      options: ["Before Common Era", "British Columbia Era", "By Common Evidence", "Before Christ's Era"],
      correct: 0,
      explanation: "BCE = Before Common Era — a neutral way to describe the time before year 1."
    },
    {
      question: "What does C.E. stand for?",
      options: ["Common Era", "Central Era", "Christian Era", "Century Era"],
      correct: 0,
      explanation: "CE = Common Era — the same period as AD."
    },
    {
      question: "Which is the OLDEST date?",
      options: ["300 BCE", "3000 BCE", "300 CE", "1776 CE"],
      correct: 1,
      explanation: "BCE counts DOWN to year 1. The larger the number, the older the date. So 3000 BCE is older than 300 BCE."
    },
    {
      question: "Put these in order from oldest to newest: 3000 BCE, 300 BCE, 300 CE, 1776 CE.",
      options: [
        "3000 BCE, 300 BCE, 300 CE, 1776 CE",
        "1776 CE, 300 CE, 300 BCE, 3000 BCE",
        "300 BCE, 3000 BCE, 300 CE, 1776 CE",
        "300 CE, 300 BCE, 1776 CE, 3000 BCE"
      ],
      correct: 0,
      explanation: "BCE dates get smaller as we approach year 1, then CE dates get larger. So the order is 3000 BCE → 300 BCE → 300 CE → 1776 CE."
    },
    {
      question: "Why do many people use B.C.E. and C.E. instead of B.C. and A.D.?",
      options: [
        "They are shorter",
        "Because BCE/CE are not tied to any one religion — they are neutral",
        "Because they are more accurate",
        "Because B.C./A.D. are too old"
      ],
      correct: 1,
      explanation: "BCE/CE are used because they're not religious — they describe time neutrally."
    },
    {
      question: "In what year did year 1 come?",
      options: [
        "After the year 1000",
        "Before all BCE dates",
        "After all BCE dates and before all CE dates",
        "During the Middle Ages"
      ],
      correct: 2,
      explanation: "Year 1 is the dividing line. BCE dates count down to it; CE dates count up from it."
    },

    // --- Cause/Effect ---
    {
      question: "In the sentence 'The streets were flooded after it rained all night,' which part is the CAUSE?",
      options: [
        "The streets were flooded",
        "It rained all night",
        "Both are causes",
        "Neither is a cause"
      ],
      correct: 1,
      explanation: "The rain caused the flooding. So 'it rained all night' is the cause."
    },
    {
      question: "Which word signals a CAUSE?",
      options: ["Therefore", "As a result", "Because", "Finally"],
      correct: 2,
      explanation: "'Because' introduces the cause. 'As a result' and 'therefore' signal the effect."
    },
    {
      question: "Which word signals an EFFECT?",
      options: ["Because", "Since", "Due to", "As a result"],
      correct: 3,
      explanation: "'As a result' introduces the effect — the thing that happened."
    },

    // --- Geography connection ---
    {
      question: "Why did Plains Native American nations use teepees?",
      options: [
        "Because teepees were the easiest to build",
        "Because they were easy to move while following buffalo",
        "Because they were made from clay",
        "Because they were the most decorative"
      ],
      correct: 1,
      explanation: "Geography affects how people live. On the Plains, following buffalo meant needing homes that could move."
    },
    {
      question: "Why did Southwest Native American nations build adobe homes from clay?",
      options: [
        "Because clay was their main export",
        "Because adobe was easy to carry",
        "Because the Southwest climate was hot and dry — clay kept the homes cool",
        "Because it was the only material available"
      ],
      correct: 2,
      explanation: "Geography affects how people live. In a hot, dry climate, adobe homes stay cooler."
    },

    // --- Reading tools ---
    {
      question: "When reading a passage and answering questions, what should you do FIRST?",
      options: [
        "Read the passage",
        "Read the questions first",
        "Answer the questions",
        "Draw pictures in the margins"
      ],
      correct: 1,
      explanation: "Reading the questions first tells you what to look for while reading."
    },
    {
      question: "When you find the answer to a question in a passage, what should you do?",
      options: [
        "Highlight the sentence",
        "Mark the correct answer",
        "Write a complete sentence (or fill in the bubble)",
        "All of these"
      ],
      correct: 3,
      explanation: "Highlight → mark → answer. All three steps."
    }
  ],

  skills: [
    {
      key: "primary-secondary-sources",
      label: "Primary vs. secondary sources",
      remember: "Primary = from the time of the event or by someone involved. Secondary = created later and interprets events.",
      workedExample: "Diary from WWII (primary) vs. textbook about WWII (secondary)"
    },
    {
      key: "fact-opinion",
      label: "Fact vs. opinion",
      remember: "Fact = can be proven true. Opinion = beliefs or feelings that can't be proven.",
      workedExample: "Fact: 'Oranges are a fruit.' Opinion: 'Oranges are delicious.'"
    },
    {
      key: "bias-in-news",
      label: "Bias in the news (omission, placement, labeling)",
      remember: "Omission = what's missing. Placement = where it is. Labeling = what words are used.",
      workedExample: "Calling someone 'troublemaker' vs. 'curious' is labeling bias."
    },
    {
      key: "credibility",
      label: "Determining credibility of a source",
      remember: "Check: is the author an expert? Is it up to date? Is the purpose to inform? Are there facts (not just opinions)? Is it a .edu, .gov, or .org domain?",
      workedExample: "A .gov site is more reliable than a personal blog."
    },
    {
      key: "artifacts-archaeology",
      label: "Artifacts, attributes, association, context",
      remember: "Artifact = made by humans. Attributes = shape/size/color. Association = found together. Context = where and with what.",
      workedExample: "A clay pot is an artifact; a seashell is not."
    },
    {
      key: "timelines-bc-ad",
      label: "Timelines, chronological order, BCE/CE",
      remember: "BCE counts down to year 1; CE counts up from year 1. Larger BCE number = older.",
      workedExample: "3000 BCE is older than 300 BCE."
    },
    {
      key: "cause-effect",
      label: "Cause and effect",
      remember: "Cause = reason something happened. Effect = what happened as a result.",
      workedExample: "'It rained all night' (cause) → 'streets flooded' (effect)"
    }
  ]
};