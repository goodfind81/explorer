/* ==========================================================
   Science Chapter 18 — Air Has Mass: Atmospheric Pressure
   Earth's Systems unit, Atmosphere day 3 (11/4), topic "Gases".
   Do Now / Einstein Wonders: "Does air have mass?" (demo), the
   pressure-vs-altitude graph, and the reading "The Pressure Is On!"
   (Investigation 4, pp. 208–210): air has mass, atmospheric
   pressure, the watermelon stack, density and the mountain vials.
   Not built from: the hot air balloon demo ("What does air do as it
   gets warmer or colder?") and "What happens when the sun's rays hit
   the earth?". The slides ask these but don't answer them.
   Atmosphere packet due Monday 11/9.
   ========================================================== */

export const chapter = {
  id: "chapter-18-air-pressure",
  name: "Air Has Mass: Atmospheric Pressure",
  shortName: "Air Pressure",

  studyGuideHtml: `
    <h2>🎈 Air Has Mass: Atmospheric Pressure</h2>
    <p><strong>Einstein Wonders:</strong> does air have mass? You can't see it, but <strong>yes, it does!</strong> Today we found out what all that air above us does to us, and why the air gets thinner as you go up a mountain. The reading is called <strong>"The Pressure Is On!"</strong></p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">The atmosphere 🌍</span>
        <div class="sg-def">
          Earth is <strong>surrounded by air</strong>. The air reaches up about <strong>500 kilometers (300 miles)</strong> above Earth's surface.<br>
          The <strong>whole layer of air</strong> covering the Earth is the <strong>atmosphere</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Air has mass ⚖️</span>
        <div class="sg-def">
          • Air is made of <strong>molecules</strong>, and <strong>molecules have mass</strong>.<br>
          • If you pile a lot of molecules on top of each other, the load gets <strong>heavier and heavier</strong>.<br>
          • The atmosphere is a <strong>huge pile of air molecules</strong>.<br><br>
          Imagine a <strong>1-cm square</strong> of paper on the ground. The column of air above it, all the way to the top of the atmosphere, has a mass of about <strong>1.2 kilograms (2.6 pounds)</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Atmospheric pressure 👇</span>
        <div class="sg-def" style="background:#E3F2FD; border-left-color: var(--primary-blue);">
          The <strong>force caused by the mass of the air above you</strong> is called <strong>atmospheric pressure</strong>.<br><br>
          • The top of your head is about <strong>150 square centimeters</strong>.<br>
          • So when you stand under the open sky, about <strong>180 kilograms (400 pounds)</strong> of air is pushing down on your head. That's like wearing a hat with a <strong>refrigerator</strong> on it! 🧊<br>
          • <strong>Don't worry, it's safe.</strong> Your body pushes back with a force <strong>equal</strong> to the atmospheric pressure.<br>
          • You usually <strong>don't notice</strong> the pressure at all. But sometimes you do, like when your <strong>ears "pop"</strong> while riding down a long hill in a car.<br>
          • At any point, the atmosphere pushes <strong>equally in all directions</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The watermelon stack 🍉</span>
        <div class="sg-def">
          Pretend each air molecule is as big as a watermelon. One melon has a mass of <strong>10 kg</strong>, so a scale under it reads <strong>10 kg</strong>.<br><br>
          Stack <strong>10 melons</strong> on the scale:<br>
          • Scale at the <strong>bottom</strong> → <strong>100 kg</strong> (all 10 melons)<br>
          • Scale between melon 1 and melon 2 → <strong>90 kg</strong><br>
          • Scale between melon 5 and melon 6 → <strong>50 kg</strong><br><br>
          The pressure is <strong>not the same</strong> on all the melons. It's <strong>greatest at the bottom</strong> of the stack.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Pressure is greatest at Earth's surface 📉</span>
        <div class="sg-def" style="background:#FFF9C4;">
          Air molecules are tiny, but they stack up the same way. A pressure gauge at Earth's surface shows the pressure from a stack of molecules <strong>500 kilometers deep</strong>.<br><br>
          • Pressure is <strong>greatest at Earth's surface</strong>, just like the bottom melon.<br>
          • The atmosphere's pressure <strong>decreases</strong> as you go <strong>higher above Earth's surface</strong>.<br>
          • On the class graph, the pressure line drops fast as altitude goes up, and <strong>50% of the air lies below about 5½ km</strong>, lower than the top of Mt. Everest.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Density: how packed the molecules are 🧪</span>
        <div class="sg-def">
          Near Earth's surface the molecules are <strong>compressed</strong> (squeezed close together), so air is <strong>densest near Earth's surface</strong>.<br>
          <strong>Denser air has more molecules</strong> in the same amount of space.<br><br>
          Imagine a small <strong>vial</strong>:<br>
          • At Earth's surface it holds <strong>100 air molecules</strong>.<br>
          • Higher in the atmosphere, the same vial might hold only <strong>50 molecules</strong>, because the molecules are <strong>farther apart</strong>. The air is <strong>less compressed</strong> and <strong>less dense</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Climbing a mountain ⛰️</span>
        <div class="sg-def">
          • At <strong>sea level</strong>, the air is <strong>dense</strong> and the pressure is <strong>high</strong>.<br>
          • Going to the top of a tall mountain, like <strong>Mt. Whitney</strong> in the Sierra Nevada, is like climbing a ladder <strong>4.4 km (2.75 miles)</strong> into the air.<br>
          • Up there, 4.4 km of air is <strong>below</strong> you and isn't pushing on you. The <strong>smaller mass of air above you</strong> pushes with <strong>less pressure</strong>, so the air is <strong>less dense</strong> and there are <strong>fewer molecules in the vial</strong>.<br><br>
          <strong>Big idea:</strong> the atmosphere is <strong>densest at sea level</strong> and gets <strong>less dense</strong> as you rise. <strong>As the density of air goes down, so does the atmospheric pressure.</strong>
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Thinking the pressure is the <strong>same everywhere</strong> in the atmosphere. It isn't! Just like the bottom watermelon holds up the most weight, the air at <strong>Earth's surface</strong> has the <strong>most air above it</strong>, so the pressure there is the <strong>greatest</strong>. Higher up means <strong>less air above</strong>, <strong>less pressure</strong>, and <strong>less dense</strong> air.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Right now, about 180 kilograms of air (as much as a refrigerator!) is pressing on the top of your head, and you can't even feel it. That's because your body pushes back with an equal force. Air may be invisible, but it definitely has mass!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "Does air have mass?",
      options: ["Yes, because air is made of molecules, and molecules have mass", "No, because you can't see air", "No, air is empty space", "Only when it is wet"],
      correct: 0,
      explanation: "Air is made of molecules. Molecules have mass, so air has mass."
    },
    {
      question: "What is atmospheric pressure?",
      options: ["The force caused by the mass of the air above you", "The temperature of the air", "How fast the wind blows", "The amount of water in a cloud"],
      correct: 0,
      explanation: "The force caused by the mass of the air above you is called atmospheric pressure."
    },
    {
      question: "Where is atmospheric pressure the GREATEST?",
      options: ["At the top of a tall mountain", "At Earth's surface (sea level)", "At the very top of the atmosphere", "It is the same everywhere"],
      correct: 1,
      explanation: "Pressure is greatest at Earth's surface, where there is the most air stacked above, just like the bottom melon in the stack."
    },
    {
      question: "Why don't we get squished by the air pressing on us?",
      options: ["Our body pushes back with a force equal to the atmospheric pressure", "Air has no mass", "The air only pushes on buildings", "Clouds hold the air up"],
      correct: 0,
      explanation: "Your body can easily push back with a force equal to the atmospheric pressure, so it's safe."
    },
    {
      question: "As you climb higher up a mountain, the air becomes…",
      options: ["Less dense, with lower pressure", "More dense, with higher pressure", "More dense, with lower pressure", "Exactly the same"],
      correct: 0,
      explanation: "The atmosphere gets less dense as you rise above sea level. As the density goes down, so does the atmospheric pressure."
    }
  ],

  chapterQuiz: [
    // --- The atmosphere and mass ---
    {
      question: "What is the whole layer of air covering the Earth called?",
      options: ["The atmosphere", "The hydrosphere", "The ozone layer", "The ocean"],
      correct: 0,
      explanation: "The whole layer of air covering the Earth is the atmosphere."
    },
    {
      question: "According to the reading, about how far above Earth's surface does the air reach?",
      options: ["About 5 kilometers", "About 50 kilometers", "About 500 kilometers", "About 5,000 kilometers"],
      correct: 2,
      explanation: "The air reaches up about 500 kilometers (300 miles) above Earth's surface."
    },
    {
      question: "What is air made of?",
      options: ["Molecules", "Water drops only", "Nothing at all", "Tiny rocks"],
      correct: 0,
      explanation: "Air is made of molecules, and molecules have mass."
    },
    {
      question: "What happens when you pile a lot of molecules on top of each other?",
      options: ["The load gets heavier and heavier", "The load gets lighter", "The molecules disappear", "Nothing changes"],
      correct: 0,
      explanation: "Molecules have mass. If you pile a lot of them on top of each other, the load gets heavier and heavier."
    },
    {
      question: "The reading describes the atmosphere as…",
      options: ["A huge pile of air molecules", "An empty space", "A layer of solid ice", "A thin sheet of water"],
      correct: 0,
      explanation: "That's what the atmosphere is: a huge pile of air molecules."
    },
    {
      question: "Imagine a 1-cm square of paper on the ground. About how much mass does the column of air above it have?",
      options: ["About 1.2 kilograms (2.6 pounds)", "About 180 kilograms (400 pounds)", "About 10 kilograms", "Almost nothing"],
      correct: 0,
      explanation: "The mass of the air resting on a 1-cm square would be about 1.2 kilograms (2.6 pounds)."
    },
    {
      question: "The top of your head has a surface area of about…",
      options: ["15 square centimeters", "150 square centimeters", "1,500 square centimeters", "1 square centimeter"],
      correct: 1,
      explanation: "The top of your head has a surface area of about 150 square centimeters."
    },
    {
      question: "About how much air is pushing down on the top of your head when you stand under the open sky?",
      options: ["About 1.2 kilograms", "About 10 kilograms", "About 180 kilograms (400 pounds)", "About 1,000 kilograms"],
      correct: 2,
      explanation: "About 150 square centimeters × about 1.2 kg each = about 180 kilograms (400 pounds) of air pushing down."
    },
    {
      question: "The reading says the air pushing on your head is like wearing a hat with what on it?",
      options: ["A refrigerator", "A feather", "A watermelon", "A balloon"],
      correct: 0,
      explanation: "180 kilograms of air on your head is like wearing a hat with a refrigerator on it!"
    },

    // --- Atmospheric pressure ---
    {
      question: "The force caused by the mass of the air above you is called…",
      options: ["Atmospheric pressure", "Gravity of the sun", "Evaporation", "Density"],
      correct: 0,
      explanation: "The force caused by the mass of the air above you is called atmospheric pressure."
    },
    {
      question: "Is it safe to go outside with all that air pressing on you?",
      options: ["Yes, your body pushes back with an equal force", "No, you should stay indoors", "Only at night", "Only if you wear a hat"],
      correct: 0,
      explanation: "Don't worry, it's safe. Your body can easily push back with a force equal to the atmospheric pressure."
    },
    {
      question: "When might you NOTICE atmospheric pressure?",
      options: ["When your ears \"pop\" riding down a long hill in a car", "When you eat lunch", "When you read a book", "When you turn on a light"],
      correct: 0,
      explanation: "You are usually not aware of the pressure, but sometimes you are, like when your ears \"pop\" riding down a long hill in a car."
    },
    {
      question: "At any point, in which directions does the atmosphere push?",
      options: ["Equally in all directions", "Only straight down", "Only sideways", "Only straight up"],
      correct: 0,
      explanation: "At any point, the atmosphere exerts its pressure equally in all directions."
    },
    {
      question: "What happens to atmospheric pressure as you go higher above Earth's surface?",
      options: ["It decreases", "It increases", "It stays the same", "It disappears at 1 meter"],
      correct: 0,
      explanation: "The atmosphere exerts a pressure that decreases with distance above Earth's surface."
    },

    // --- Watermelon stack ---
    {
      question: "In the watermelon model, one big melon has a mass of 10 kg. What does the scale read under ONE melon?",
      options: ["1 kg", "10 kg", "50 kg", "100 kg"],
      correct: 1,
      explanation: "A big melon might have a mass of 10 kilograms. Place it on a scale and the scale reads 10 kg."
    },
    {
      question: "A stack of 10 watermelons (10 kg each) sits on a scale. What does the scale read?",
      options: ["10 kg", "50 kg", "90 kg", "100 kg"],
      correct: 3,
      explanation: "The mass on the scale is equal to the sum of the 10 melons: 10 × 10 kg = 100 kg."
    },
    {
      question: "In the stack of 10 melons, the scale is moved between melon 1 and melon 2. What does it read now?",
      options: ["100 kg", "90 kg", "50 kg", "10 kg"],
      correct: 1,
      explanation: "Now the bottom melon isn't on the scale, so it holds 9 melons: 90 kg."
    },
    {
      question: "In the stack of 10 melons, the scale is moved between melon 5 and melon 6. What does it read?",
      options: ["90 kg", "60 kg", "50 kg", "10 kg"],
      correct: 2,
      explanation: "Between melons 5 and 6, the scale reads 50 kg: only 5 melons are above it."
    },
    {
      question: "What does the watermelon stack show about pressure?",
      options: ["The pressure is greatest at the bottom of the stack", "The pressure is greatest at the top of the stack", "The pressure is the same on all the melons", "Melons have no mass"],
      correct: 0,
      explanation: "The pressure is not the same on all the melons. It is greatest on the bottom melon, which holds up all the others."
    },
    {
      question: "In the watermelon model, what does each watermelon stand for?",
      options: ["An air molecule", "A cloud", "A mountain", "A raindrop"],
      correct: 0,
      explanation: "The reading asks you to imagine air molecules as big as watermelons."
    },
    {
      question: "A pressure gauge at Earth's surface shows the pressure from a stack of air molecules about how deep?",
      options: ["500 kilometers", "5 kilometers", "1 kilometer", "50 meters"],
      correct: 0,
      explanation: "A gauge at Earth's surface shows the pressure from a stack of molecules 500 kilometers deep."
    },
    {
      question: "Why is atmospheric pressure greatest at Earth's surface?",
      options: ["It has the most air stacked above it, like the bottom melon", "It is closest to the sun", "It has the fewest molecules", "Air only exists near the ground"],
      correct: 0,
      explanation: "Pressure is greatest at Earth's surface, just like the pressure on the watermelon at the bottom of the stack is greatest."
    },

    // --- Density ---
    {
      question: "Where is air the DENSEST?",
      options: ["Near Earth's surface (sea level)", "At the top of Mt. Whitney", "At the top of the atmosphere", "It is equally dense everywhere"],
      correct: 0,
      explanation: "The molecules are compressed near Earth's surface, so air is densest there."
    },
    {
      question: "Denser air has…",
      options: ["More molecules in the same amount of space", "Fewer molecules in the same amount of space", "No molecules", "Bigger molecules"],
      correct: 0,
      explanation: "Denser air has more molecules per unit volume (in the same amount of space)."
    },
    {
      question: "Near Earth's surface, the air molecules are…",
      options: ["Compressed (close together)", "Very far apart", "Not moving at all", "Missing"],
      correct: 0,
      explanation: "Air molecules are compressed near Earth's surface. Because they are close together, the air is densest there."
    },
    {
      question: "A small vial holds 100 air molecules at Earth's surface. Higher in the atmosphere, about how many might the same vial hold?",
      options: ["200", "100", "50", "1,000"],
      correct: 2,
      explanation: "Higher up the molecules are farther apart, so the same vial might hold only 50 molecules."
    },
    {
      question: "Why does a vial hold FEWER air molecules high in the atmosphere?",
      options: ["The molecules are farther apart because the air is less compressed", "The vial shrinks", "Air molecules get bigger higher up", "There is more pressure higher up"],
      correct: 0,
      explanation: "Higher in the atmosphere the air isn't compressed as much. The molecules are farther apart, so the air is less dense."
    },

    // --- Mountain ---
    {
      question: "At sea level, the air is ___ and the pressure is ___.",
      options: ["dense; high", "thin; low", "dense; low", "thin; high"],
      correct: 0,
      explanation: "At sea level, the air is dense and the pressure is high."
    },
    {
      question: "Going up to the top of Mt. Whitney is like climbing a ladder about how far into the air?",
      options: ["4.4 km (2.75 miles)", "44 km", "0.4 km", "500 km"],
      correct: 0,
      explanation: "Going to the top of Mt. Whitney in the Sierra Nevada is like climbing a ladder 4.4 km (2.75 miles) into the air."
    },
    {
      question: "On top of a tall mountain, why is the pressure lower than at sea level?",
      options: ["There is a smaller mass of air above you pushing down", "The mountain pushes the air away", "The sun is closer", "There is more air above you"],
      correct: 0,
      explanation: "Up on the mountain, 4.4 km of air is below you and isn't pushing on you. The smaller mass of air above you pushes with less pressure."
    },
    {
      question: "Which sentence matches the big idea of the reading?",
      options: [
        "As the density of air goes down, so does the atmospheric pressure",
        "As the density of air goes down, the atmospheric pressure goes up",
        "Density and pressure are always the same everywhere",
        "Air pressure is greatest at the top of a mountain"
      ],
      correct: 0,
      explanation: "The atmosphere is densest at sea level and gets less dense as you rise. As the density of air goes down, so does the atmospheric pressure."
    },
    {
      question: "Mt. Whitney is in which mountain range?",
      options: ["The Sierra Nevada", "The Rocky Mountains", "The Appalachian Mountains", "The Himalayas"],
      correct: 0,
      explanation: "The reading names Mt. Whitney in the Sierra Nevada."
    },

    // --- Graph ---
    {
      question: "On the class graph of pressure and altitude, what happens to the pressure as altitude goes UP?",
      options: ["It goes down", "It goes up", "It stays the same", "It goes up, then down"],
      correct: 0,
      explanation: "The pressure line drops as altitude increases: the higher you go, the lower the pressure."
    },
    {
      question: "The class graph shows that 50% of the air lies below about what altitude?",
      options: ["About 5½ km, lower than the top of Mt. Everest", "About 36 km", "About 500 km", "About 1 meter"],
      correct: 0,
      explanation: "The dashed line on the graph shows half of the air lies below about 5½ km, which is lower than the top of Mt. Everest."
    },
    {
      question: "A hiker carries a vial up a mountain. Compared with sea level, the air at the top is…",
      options: ["Less dense, so fewer molecules fit in the vial", "More dense, so more molecules fit in the vial", "The same", "Made of water instead of air"],
      correct: 0,
      explanation: "Higher up the air is less dense, so there are fewer molecules in the vial."
    }
  ],

  skills: [
    {
      key: "air-has-mass",
      label: "Air has mass",
      remember: "Air is made of molecules, and molecules have mass. The atmosphere is a huge pile of air molecules reaching about 500 km (300 miles) up. The air above a 1-cm square has a mass of about 1.2 kg (2.6 pounds). The top of your head (about 150 square cm) has about 180 kg (400 pounds) of air pushing on it, like a refrigerator on a hat!",
      workedExample: "Does air have mass? → Yes, it's made of molecules\n1-cm square → about 1.2 kg of air above it\nTop of your head → about 180 kg (400 lb)"
    },
    {
      key: "atmospheric-pressure",
      label: "Atmospheric pressure",
      remember: "Atmospheric pressure is the force caused by the mass of the air above you. Your body pushes back with an equal force, so it's safe. You usually don't notice it, but your ears may \"pop\" riding down a long hill. It pushes equally in all directions, and it is greatest at Earth's surface, like the bottom melon in a stack (100 kg at the bottom, 90 kg between melons 1 and 2, 50 kg between melons 5 and 6).",
      workedExample: "10 melons × 10 kg → 100 kg at the bottom\nScale between melons 5 and 6 → 50 kg\nGreatest pressure → Earth's surface"
    },
    {
      key: "air-density-altitude",
      label: "Air density and altitude",
      remember: "Air is densest at sea level, where molecules are compressed (close together). Denser air has more molecules in the same space. Higher up, molecules are farther apart: a vial with 100 molecules at the surface might hold only 50. On a mountain like Mt. Whitney (4.4 km), less air is above you, so the pressure is lower. As density goes down, so does pressure.",
      workedExample: "Sea level → dense air, high pressure\nMountain top → less dense air, lower pressure\nVial: 100 molecules → 50 molecules higher up"
    }
  ]
};
