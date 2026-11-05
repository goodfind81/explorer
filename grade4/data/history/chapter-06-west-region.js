/* ==========================================================
   History Chapter 06 — The West Region
   Unit 3 (Regions of the United States) material. Covers the
   eleven states of the West, its mountains, valleys, deserts,
   Great Salt Lake, Alaska and Hawaii, climate, products and
   natural resources, landmarks, and culture. Based on the West
   Region Passage and its homework questions.
   ========================================================== */

export const chapter = {
  id: "chapter-06-west-region",
  name: "The West Region",
  shortName: "West",

  studyGuideHtml: `
    <h2>🏔️ The West Region</h2>
    <p>Our country's <strong>largest region</strong> goes from the cold, frozen <strong>tundra of Alaska</strong> to the warm, sunny beaches of <strong>Hawaii and California</strong>. In between you'll find mountains, valleys, deserts, volcanoes, and even a <strong>rain forest</strong>!</p>

    <div class="study-guide">
      <div class="sg-row">
        <span class="sg-label">Where is the West?</span>
        <div class="sg-def">
          The West is the <strong>largest region</strong> in the United States and has <strong>eleven states</strong>:<br><br>
          WA (Washington) · OR (Oregon) · CA (California) · NV (Nevada) · ID (Idaho) · MT (Montana) · WY (Wyoming) · UT (Utah) · CO (Colorado) · AK (Alaska) · HI (Hawaii)<br><br>
          <strong>Alaska and Hawaii</strong> are separated from the other states by land and water. <strong>Alaska is the largest state</strong> in the US.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Four mountain ranges ⛰️</span>
        <div class="sg-def">
          • <strong>Rocky Mountains:</strong> the <strong>largest</strong> range. They form the <strong>eastern edge</strong> of the region and stretch from <strong>Canada</strong> south to <strong>Mexico</strong>, across Montana, Idaho, Wyoming, and Colorado. Nearly <strong>3,000 miles long</strong>.<br>
          • <strong>Coast Ranges:</strong> a long line on the <strong>western edge</strong> of the US. They seem to rise right out of the <strong>Pacific Ocean</strong> and form cliffs along the coast all the way up to Alaska.<br>
          • <strong>Sierra Nevada Mountains:</strong> formed when pieces of the Earth's crust <strong>collided and broke apart</strong>, and some pieces were <strong>pushed upward</strong>.<br>
          • <strong>Cascade Mountains:</strong> their rocks are the remains of ancient <strong>magma chambers that fed volcanoes</strong> and then eroded away.<br><br>
          The highest mountain in the US is <strong>Mount Denali</strong> in Alaska: <strong>20,320 feet</strong> high.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Volcanoes 🌋</span>
        <div class="sg-def">
          There are still some <strong>active volcanoes</strong> in the West. Eruptions don't happen often. In <strong>1980</strong>, <strong>Mount Saint Helens</strong> erupted explosively. It destroyed miles of forest, melted the ice and snow on the mountain, and caused <strong>landslides and floods</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Valleys, basins, and deserts 🏜️</span>
        <div class="sg-def">
          • <strong>Central Valley</strong> and <strong>Willamette Valley</strong> lie between the mountain ranges. They are covered with <strong>deep, rich soil</strong>, and many rivers run through them.<br>
          • A <strong>basin</strong> is a <strong>low, bowl-shaped landform</strong> that is lower than the land around it. The <strong>Great Basin</strong> lies in the middle of the West.<br>
          • The Great Basin is mostly covered by the <strong>Great Basin Desert</strong> (the <strong>largest desert</strong> in the US) and the <strong>Mojave Desert</strong>.<br>
          • <strong>Death Valley</strong> (part of the Mojave) is the <strong>hottest, driest, and lowest</strong> place in the US: <strong>282 feet below sea level</strong>. Its highest temperature ever was <strong>134 degrees</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">A rain forest in the West 🌲</span>
        <div class="sg-def">
          The rain forest along the Pacific Coast from <strong>California to Alaska</strong> is the <strong>largest temperate rainforest in the world</strong>.<br>
          • <strong>Temperate rain forests</strong> are very wet, ancient forests that <strong>rarely freeze or get very hot</strong>, and they are close to the ocean.<br>
          • <strong>Giant redwoods</strong>, Sitka spruce, and western hemlock can grow over <strong>300 feet tall</strong> and live over <strong>500 years</strong>.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">The Great Salt Lake 🧂</span>
        <div class="sg-def">
          One of the largest lakes in the US: about 75 miles long and 35 miles wide, but <strong>very shallow</strong> (mostly only <strong>3 feet deep</strong>).<br><br>
          <strong>How is it different from most lakes?</strong> It is full of very salty water, <strong>even saltier than the ocean</strong>, because several rivers flow <strong>into</strong> the lake but <strong>no water flows out</strong>. When the water evaporates, the <strong>salt is left behind</strong>.<br>
          • It is too salty for fish. The only animals living in it are tiny <strong>brine shrimp</strong>, an important food for millions of birds.<br>
          • Dry, flat <strong>salt flats</strong> surround the lake. They were left behind when <strong>Lake Bonneville</strong>, a big prehistoric lake, dried up.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Alaska and Hawaii 🏝️</span>
        <div class="sg-def">
          Alaska and Hawaii are <strong>apart from the other states</strong>, so they are very different from the rest of the region:<br>
          • The northern part of <strong>Alaska</strong> is <strong>tundra</strong>: a <strong>cold, flat, treeless land</strong>.<br>
          • <strong>Hawaii</strong> is made up of <strong>eight main islands</strong>. They were made long ago by <strong>volcanoes</strong> that grew up out of the Pacific Ocean. Two of them are still active.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Climate 🌦️</span>
        <div class="sg-def">
          The West has many different climates, from cold and rainy to extremely hot and dry.<br>
          • <strong>Pacific Coast:</strong> lots of rain. Mild, wet winters and cool, foggy, or cloudy summers.<br>
          • <strong>Moving east across the Great Basin:</strong> less rain and warmer temperatures.<br>
          • <strong>Rocky Mountains:</strong> heavy snow in winter that stays for months. When it melts, the water goes into the <strong>Colorado</strong>, <strong>Rio Grande</strong>, and other rivers.<br>
          • <strong>Alaska:</strong> cold and wet much of the year; some places get up to <strong>100 inches</strong> of precipitation. It is the <strong>coldest state</strong> because it is <strong>farther from the equator than any other state</strong>. Short summers, long winters, so cold that <strong>houseflies can't survive</strong>. Lakes and rivers are frozen most of the year.<br>
          • <strong>Hawaii:</strong> <strong>closer to the equator</strong> than any other state. Sunny and warm all year, but <strong>not too hot because of cool ocean winds</strong>. Lots of rain helps palm trees and tropical plants grow. The island of <strong>Kauai</strong> has one of the wettest places on Earth (almost 40 feet of rain a year).<br>
          • <strong>Earthquakes:</strong> the Pacific Coast lies over many <strong>fault lines</strong>. The most famous is California's <strong>San Andreas Fault</strong>, more than 600 miles long.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Products and natural resources 🚢</span>
        <div class="sg-def">
          • <strong>Pacific Ocean</strong> = the <strong>most important natural resource</strong>. Fishing is a big industry, and <strong>ports</strong> (places for receiving ships and transferring cargo) trade goods with <strong>Japan and Asia</strong>.<br>
          • <strong>Columbia River:</strong> <strong>dams</strong> make lots of <strong>electricity</strong> for businesses, farmers use its water to <strong>irrigate crops</strong>, and farmers and businesspeople use it for <strong>transportation</strong> of goods to Pacific ports.<br>
          • <strong>Soil:</strong> the <strong>Central Valley</strong> is called <strong>"America's Fruit and Salad Bowl."</strong> More than 150 fruits and vegetables grow there (apricots, almonds, strawberries, lettuce, tomatoes, grapes, avocados, oranges, and more). <strong>Washington</strong> produces <strong>more apples</strong> than any other state.<br>
          • <strong>Wood products</strong> (lumber, plywood, cardboard, paper): much of the wood used in the US comes from the West.<br>
          • <strong>Idaho potatoes:</strong> about three-fourths are processed into frozen french fries, instant mashed potatoes, and similar products.<br>
          • <strong>Hawaii:</strong> famous for <strong>pineapples</strong>; also <strong>sugarcane</strong> (sent to sugar mills to make table sugar), bananas, rice, coffee, and macadamia nuts.<br>
          • <strong>Salt from the Great Salt Lake:</strong> people <strong>pump water into giant, shallow ponds</strong>. When the water <strong>evaporates</strong>, the <strong>salt is left behind</strong>. It can take up to three years.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Oil, minerals, and industry ⛏️</span>
        <div class="sg-def">
          • <strong>Oil</strong> was found in Alaska in the <strong>1960s</strong> at <strong>Prudhoe Bay</strong> on the <strong>North Slope</strong> (near the Arctic Ocean). The <strong>Trans-Alaska Pipeline</strong> carries it to <strong>Valdez</strong>, where it is pumped into <strong>supertankers</strong>. <strong>Refineries</strong> in San Francisco prepare the oil for homes and businesses.<br>
          • The <strong>Rocky Mountains</strong> have <strong>copper, gold, and silver</strong>. Gold was found in <strong>California in 1848</strong>. In <strong>Leadville, Colorado</strong>, miners found their sand was full of <strong>silver and lead</strong>, so instead of a Gold Rush there was a <strong>Silver Boom</strong>. Later they found <strong>molybdenum</strong>, used to make high-strength steel.<br>
          • <strong>Aircraft</strong> are made in <strong>southern California</strong> (its warm climate is perfect for testing airplanes) and <strong>Seattle, Washington</strong>. Ships are built in Washington and Hawaii.<br>
          • <strong>Silicon Valley:</strong> a center of <strong>technology</strong>. Silicon is used to make computer parts. Government research centers test missiles and aircraft, using open space in the Great Basin.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Landmarks 🏛️</span>
        <div class="sg-def">
          • <strong>Yellowstone National Park:</strong> set up by Congress in <strong>1872</strong> as the <strong>world's first national park</strong>. It has an active volcano, about 2,000 earthquakes a year, and more than <strong>300 geysers</strong>. A <strong>geyser</strong> is a hot spring that shoots boiling water and steam into the air.<br>
          • <strong>Old Faithful:</strong> a famous geyser, named that because it is <strong>predictable</strong>. It erupts about <strong>every 91 minutes</strong>.<br>
          • <strong>Devils Tower</strong> (Wyoming): America's <strong>first national monument</strong> (1906), sacred to the <strong>Lakota</strong> and other tribes. It is the core of a volcano exposed by erosion.<br>
          • <strong>Golden Gate Bridge</strong> (San Francisco): when finished in <strong>1937</strong>, it was the longest suspension bridge in the world. It is painted <strong>International Orange</strong> to blend in with the red-orange rocks and hills.<br>
          • <strong>Ghost towns:</strong> mining <strong>boom towns</strong> grew fast when gold or silver was found, but when it <strong>ran out</strong>, everyone left. Only deserted buildings remain.<br>
          • <strong>Disneyland</strong> (southern California): moviemakers moved from the cloudy Northeast to sunny southern California. <strong>Los Angeles</strong> (the second largest city in the nation) is home of <strong>Hollywood</strong>. Walt Disney arrived in 1923; Disneyland opened in <strong>1955</strong>.<br>
          • Tourists take <strong>cruise ships</strong> to see Alaska's <strong>glaciers</strong> and visit Hawaii for its tropical weather, beaches, and volcanoes.
        </div>
      </div>

      <div class="sg-row">
        <span class="sg-label">Culture: food and fun 🏄</span>
        <div class="sg-def">
          <strong>Food:</strong> the Pacific gives lots of <strong>seafood</strong>: salmon baked on a <strong>cedar board</strong>, oysters, and <strong>cioppino</strong> (a stew of fish and shellfish). Because of many <strong>Chinese and Japanese immigrants</strong>, Asian foods are popular. The <strong>California Roll</strong> (sushi with avocado, rice, and seaweed) was invented in <strong>Los Angeles</strong>. In Hawaii, the favorite local food is <strong>saimin</strong>, a ramen noodle soup, and at <strong>luaus</strong> people eat <strong>Kalua pig</strong> cooked in a pit in the sand.<br><br>
          <strong>Eskimo (Inuit) ice cream, called akutaq:</strong> made from <strong>reindeer fat, seal oil, freshly fallen snow, fresh berries</strong>, and sometimes ground fish. Today it is usually made with Crisco shortening instead of reindeer fat.<br><br>
          <strong>Fun:</strong> <strong>surfing</strong> on the Pacific Coast and in Hawaii; in the <strong>1970s</strong>, California teenagers combined surfing with skateboards to create modern <strong>skateboarding</strong>. People hike, climb, kayak, and watch <strong>gray whales</strong> migrate in spring. Winter brings snowboarding, skiing, and snowshoeing. <strong>Dogsled racing</strong> is a favorite in Alaska: the <strong>Iditarod</strong> runs <strong>1,150 miles</strong> from <strong>Anchorage to Nome</strong>, the "Last Great Race on Earth." The drivers are called <strong>mushers</strong>.<br><br>
          <strong>Hula:</strong> a Hawaiian dance often performed at <strong>luaus</strong>, with a chant called a <strong>mele</strong>, the ukulele, and the ipu (gourd drum). Dancers wear <strong>leis</strong> (flower or leaf wreaths). It was first performed to honor ancient Hawaiian gods or a powerful chief.
        </div>
      </div>
    </div>

    <div class="highlight">
      <strong>Common mistake:</strong> Don't mix up why Alaska and Hawaii have their climates! <strong>Alaska</strong> is the coldest state because it is <strong>farther from the equator</strong> than any other state. <strong>Hawaii</strong> is <strong>closest to the equator</strong>, but it isn't too hot because of <strong>cool ocean winds</strong>.
    </div>

    <div class="fun-fact">
      <span>💡</span>
      <div><strong>Einstein Wonders:</strong> Why is the Great Salt Lake saltier than the ocean? Rivers carry water <em>in</em>, but no water flows <em>out</em>. The sun evaporates the water and the salt stays behind, year after year. People copy the same trick in giant shallow ponds to collect salt!</div>
    </div>
  `,

  miniCheck: [
    {
      question: "How many states are in the West region?",
      options: ["Nine", "Eleven", "Twelve", "Thirteen"],
      correct: 1,
      explanation: "The West is the largest region in the United States and has eleven states."
    },
    {
      question: "Why is the Great Salt Lake saltier than the ocean?",
      options: ["Rivers flow into it but no water flows out, so salt is left behind when the water evaporates", "Salt is poured into it every year", "It is connected to the Pacific Ocean", "Brine shrimp make the salt"],
      correct: 0,
      explanation: "Several rivers flow into the lake, but no water flows out. When the water evaporates, the salt stays."
    },
    {
      question: "Why is Alaska the coldest state?",
      options: ["It has the most mountains", "It is farther from the equator than any other state", "It is surrounded by lakes", "It has no sunlight"],
      correct: 1,
      explanation: "Alaska is farther from the equator than any other state, so it is the coldest."
    },
    {
      question: "What is Old Faithful?",
      options: ["A volcano in Hawaii", "A geyser in Yellowstone named that because it is predictable", "The oldest redwood tree", "A ghost town in Colorado"],
      correct: 1,
      explanation: "Old Faithful is a geyser in Yellowstone National Park. It is named that because it erupts predictably, about every 91 minutes."
    },
    {
      question: "What is a ghost town?",
      options: ["A town that people say is haunted", "A mining town that was abandoned when the gold or silver ran out", "A town built inside a volcano", "A town covered by fog"],
      correct: 1,
      explanation: "Boom towns grew quickly where gold or silver was found. When it ran out, people left, and only deserted buildings remained."
    }
  ],

  chapterQuiz: [
    {
      question: "Which state is part of the West region?",
      options: ["Kansas", "Nevada", "Texas", "Ohio"],
      correct: 1,
      explanation: "Nevada is one of the eleven West states."
    },
    {
      question: "Which two West states are separated from the other states by land and water?",
      options: ["California and Oregon", "Alaska and Hawaii", "Idaho and Montana", "Utah and Colorado"],
      correct: 1,
      explanation: "Alaska and Hawaii are apart from the other states."
    },
    {
      question: "Which is the largest state in the US?",
      options: ["California", "Montana", "Alaska", "Hawaii"],
      correct: 2,
      explanation: "Alaska is the largest state in the US."
    },
    {
      question: "What are the four mountain ranges in the West region?",
      options: ["The Rocky Mountains, Coast Ranges, Sierra Nevada, and Cascade Mountains", "The Appalachians, Rockies, Black Hills, and Ozarks", "The Rockies, Andes, Alps, and Himalayas", "The Coast Ranges, Appalachians, Badlands, and Cascades"],
      correct: 0,
      explanation: "The Coast Ranges, the Sierra Nevadas, the Cascade Range, and the Rocky Mountains are all in the West."
    },
    {
      question: "Which is the largest mountain range in the West?",
      options: ["The Coast Ranges", "The Cascade Mountains", "The Rocky Mountains", "The Sierra Nevada Mountains"],
      correct: 2,
      explanation: "The Rocky Mountains are the largest range. They form the eastern edge of the West and are nearly 3,000 miles long."
    },
    {
      question: "The Rocky Mountains stretch from which country in the north to which country in the south?",
      options: ["From Canada to Mexico", "From Alaska to Hawaii", "From Mexico to Canada through the Pacific", "From Russia to Canada"],
      correct: 0,
      explanation: "The Rockies begin far to the north in Canada and stretch south all the way to Mexico."
    },
    {
      question: "Which mountains seem to rise right out of the Pacific Ocean and form cliffs along the coast?",
      options: ["The Rocky Mountains", "The Coast Ranges", "The Black Hills", "The Appalachian Mountains"],
      correct: 1,
      explanation: "The Coast Ranges form a long line on the western edge of the US and form cliffs along the coast."
    },
    {
      question: "How were the Sierra Nevada Mountains formed?",
      options: ["Pieces of the Earth's crust collided and broke apart, and some were pushed upward", "Glaciers piled up rocks", "Wind blew sand into big hills", "People built them"],
      correct: 0,
      explanation: "The Sierra Nevadas formed when pieces of the Earth's crust collided and broke apart, pushing some pieces upward."
    },
    {
      question: "The rocks of the Cascade Mountains are the remains of what?",
      options: ["Ancient coral reefs", "Ancient magma chambers that fed volcanoes", "Old glaciers", "Dried-up lakes"],
      correct: 1,
      explanation: "The Cascades' rocks are the remains of ancient magma chambers that fed volcanoes and then eroded away."
    },
    {
      question: "What is the highest mountain in the United States?",
      options: ["Mount Saint Helens", "Mount Rushmore", "Mount Denali", "Devils Tower"],
      correct: 2,
      explanation: "Mount Denali in Alaska is 20,320 feet high, the highest mountain in the US."
    },
    {
      question: "What happened when Mount Saint Helens erupted in 1980?",
      options: ["It destroyed forest, melted ice and snow, and caused landslides and floods", "It made a new Hawaiian island", "Nothing; it was a quiet eruption", "It created the Great Salt Lake"],
      correct: 0,
      explanation: "The explosive eruption destroyed forest, melted the ice and snow on the mountain, and caused landslides and floods."
    },
    {
      question: "Which two valleys are covered with deep, rich soil?",
      options: ["Death Valley and the Great Basin", "Central Valley and Willamette Valley", "Silicon Valley and Death Valley", "The Badlands and the Black Hills"],
      correct: 1,
      explanation: "Central Valley and Willamette Valley are covered with deep, rich soil, and many rivers run through them."
    },
    {
      question: "What is a basin?",
      options: ["A tall, pointed mountain", "A low, bowl-shaped landform that is lower than the land around it", "A river that flows into the ocean", "A flat area of ice"],
      correct: 1,
      explanation: "A basin is a low, bowl-shaped landform that is lower than the land around it."
    },
    {
      question: "Which is the largest desert in the United States?",
      options: ["The Mojave Desert", "The Great Basin Desert", "Death Valley", "The Sonoran Desert"],
      correct: 1,
      explanation: "The Great Basin Desert is the largest desert in the US."
    },
    {
      question: "Death Valley is the hottest, driest, and ____ place in the United States.",
      options: ["Highest", "Wettest", "Lowest", "Coldest"],
      correct: 2,
      explanation: "Death Valley is 282 feet below sea level, making it the lowest place in the US."
    },
    {
      question: "What is a temperate rain forest like?",
      options: ["Very wet and ancient, rarely freezing or getting very hot, close to the ocean", "Hot and dry all year", "Frozen and treeless", "Covered in sand dunes"],
      correct: 0,
      explanation: "Temperate rain forests are very wet, ancient forests that rarely freeze or get very hot, and they are close to the ocean."
    },
    {
      question: "Which trees in the West's rain forest can grow over 300 feet tall and live over 500 years?",
      options: ["Palm trees", "Giant redwoods, Sitka spruce, and western hemlock", "Apple trees", "Cactus"],
      correct: 1,
      explanation: "Giant redwoods, Sitka spruce, and western hemlock reach over 300 feet tall and live over 500 years."
    },
    {
      question: "How deep is most of the Great Salt Lake?",
      options: ["About 3 feet", "About 300 feet", "About 3,000 feet", "About 30 miles"],
      correct: 0,
      explanation: "The Great Salt Lake is very shallow. Most of it is only three feet deep."
    },
    {
      question: "How were the salt flats around the Great Salt Lake formed?",
      options: ["A volcano melted the sand", "They were left behind when Lake Bonneville, a big prehistoric lake, dried up", "People poured salt on the ground", "Ocean waves carried salt there"],
      correct: 1,
      explanation: "The salt flats were left behind when Lake Bonneville dried up thousands of years ago."
    },
    {
      question: "How are Alaska and Hawaii different from the other states in the West?",
      options: ["They are apart from the other states; northern Alaska is tundra and Hawaii is volcanic islands", "They are both deserts", "They are both in the Rocky Mountains", "They have the same climate"],
      correct: 0,
      explanation: "Being apart from the other states, they are very different: northern Alaska is cold, flat, treeless tundra, and Hawaii's islands were made by volcanoes."
    },
    {
      question: "What is tundra?",
      options: ["A warm, sandy beach", "A cold, flat, treeless land", "A rain forest", "A tall volcano"],
      correct: 1,
      explanation: "Tundra is a cold, flat, treeless land, like the northern part of Alaska."
    },
    {
      question: "How were the Hawaiian islands made?",
      options: ["By glaciers", "By volcanoes that grew up out of the Pacific Ocean", "By earthquakes on the San Andreas Fault", "By coral and sand only"],
      correct: 1,
      explanation: "Hawaii's eight main islands were made long ago by volcanoes that grew up out of the Pacific Ocean."
    },
    {
      question: "What is the climate like along the Pacific Coast?",
      options: ["Lots of rain, mild wet winters, and cool, foggy, or cloudy summers", "Extremely hot and dry all year", "Frozen most of the year", "Tornadoes every spring"],
      correct: 0,
      explanation: "The coast receives a lot of rain, with mild, wet winters and cool, foggy, or cloudy summers."
    },
    {
      question: "As you travel east across the Great Basin from the coast, what happens?",
      options: ["Rainfall decreases and it gets warmer", "Rainfall increases and it gets colder", "It snows all year", "Nothing changes"],
      correct: 0,
      explanation: "Moving east through the Great Basin, the rainfall amounts decrease and the temperature gets warmer."
    },
    {
      question: "Where does the water go when snow in the Rocky Mountains melts?",
      options: ["Into the Colorado, Rio Grande, and other rivers", "Into the Great Salt Lake only", "Straight into the Pacific Ocean", "It stays frozen forever"],
      correct: 0,
      explanation: "Once the snow melts, the water goes into the Colorado, Rio Grande, and other rivers."
    },
    {
      question: "Why is Hawaii not too hot, even though it is close to the equator?",
      options: ["It has cool ocean winds", "It is covered in snow", "It is very high in the mountains", "The sun doesn't shine there"],
      correct: 0,
      explanation: "Hawaii is sunny and warm all year, but cool ocean winds keep it from getting too hot."
    },
    {
      question: "Which is true about winters in Alaska?",
      options: ["They are so cold that houseflies can't survive", "They are short and warm", "They have no snow", "They are the same as Hawaii's"],
      correct: 0,
      explanation: "Alaska has short summers and long winters so cold that houseflies can't survive. Lakes and rivers are frozen most of the year."
    },
    {
      question: "Why is the Pacific Coast in danger of earthquakes?",
      options: ["It lies over many fault lines", "It has too many rivers", "It is close to the equator", "It has tall redwood trees"],
      correct: 0,
      explanation: "The Pacific Coast lies over many fault lines. The most famous is California's San Andreas Fault."
    },
    {
      question: "What is the most important natural resource in the West?",
      options: ["The Pacific Ocean", "Gold", "Corn", "Coal"],
      correct: 0,
      explanation: "The Pacific Ocean is the most important resource: fishing, and ports that trade with Japan and Asia."
    },
    {
      question: "What is a port?",
      options: ["A place for receiving ships and transferring cargo", "A kind of fishing boat", "A mountain pass", "A dam on a river"],
      correct: 0,
      explanation: "A port is a place for receiving ships and transferring cargo."
    },
    {
      question: "Why is the Columbia River important to the West region?",
      options: ["Its dams make electricity, farmers use it to irrigate crops, and people use it for transportation", "It is the saltiest river", "It flows into the Great Salt Lake", "It is the only river in the West"],
      correct: 0,
      explanation: "Dams on the Columbia make electricity, its water irrigates crops, and farmers and businesspeople use it to ship goods to Pacific ports."
    },
    {
      question: "Which valley is called \"America's Fruit and Salad Bowl\"?",
      options: ["Death Valley", "Silicon Valley", "Central Valley", "Willamette Valley"],
      correct: 2,
      explanation: "More than 150 fruits and vegetables are grown in the Central Valley."
    },
    {
      question: "Which state produces more apples than any other state?",
      options: ["Washington", "Hawaii", "Idaho", "Utah"],
      correct: 0,
      explanation: "Washington is known for its apples and produces more than any other state."
    },
    {
      question: "What happens to about three-fourths of Idaho's potato crop?",
      options: ["It is processed into frozen french fries, instant mashed potatoes, and similar products", "It is fed to cattle", "It is sent to Hawaii", "It is thrown away"],
      correct: 0,
      explanation: "About three-fourths of Idaho's potatoes are processed. The rest are sold as baking potatoes."
    },
    {
      question: "What products come from Hawaii?",
      options: ["Pineapples, sugarcane, bananas, rice, coffee, and macadamia nuts", "Apples and potatoes", "Oil and lumber", "Cheese and corn"],
      correct: 0,
      explanation: "Hawaii is famous for pineapples. Sugarcane, bananas, rice, coffee, and macadamia nuts also grow there."
    },
    {
      question: "How do people get salt from the Great Salt Lake?",
      options: ["They pump water into giant, shallow ponds and let it evaporate, leaving the salt", "They dig it out of mountains", "They catch brine shrimp", "They boil the whole lake"],
      correct: 0,
      explanation: "Water is pumped into giant, shallow ponds. When the water evaporates, the salt is left behind. It can take up to three years."
    },
    {
      question: "How does oil from Alaska's North Slope reach supertankers?",
      options: ["Through the Trans-Alaska Pipeline to Valdez", "By dogsled", "On the Columbia River", "By airplane"],
      correct: 0,
      explanation: "The Trans-Alaska Pipeline carries oil from the North Slope to Valdez, where it is pumped into supertankers."
    },
    {
      question: "What happened in Leadville, Colorado?",
      options: ["Miners looking for gold found silver and lead, causing a Silver Boom", "Disneyland was built", "The first national park was created", "Oil was discovered"],
      correct: 0,
      explanation: "The heavy brown sand was full of silver and lead, so instead of a Gold Rush there was a Silver Boom."
    },
    {
      question: "Why is southern California a good place to make aircraft?",
      options: ["Its warm climate is perfect for testing airplanes", "It has the most snow", "It has the most oil", "It is closest to Alaska"],
      correct: 0,
      explanation: "The state's warm climate makes it perfect for testing airplanes."
    },
    {
      question: "Silicon Valley is known for which kind of industry?",
      options: ["Technology", "Farming", "Fishing", "Mining gold"],
      correct: 0,
      explanation: "Silicon Valley has thousands of software companies and other technology businesses. Silicon is used to make computer parts."
    },
    {
      question: "What was special about Yellowstone National Park when Congress set it up in 1872?",
      options: ["It was the world's first national park", "It was the largest city", "It was the first state", "It was the only volcano in the US"],
      correct: 0,
      explanation: "Yellowstone was established in 1872 as the world's first national park."
    },
    {
      question: "What is a geyser?",
      options: ["A hot spring that shoots boiling water and steam into the air", "A deep lake", "A tall tree", "A kind of earthquake"],
      correct: 0,
      explanation: "A geyser is a type of hot spring that shoots boiling hot water and steam into the air."
    },
    {
      question: "Which landmark was America's first national monument?",
      options: ["The Golden Gate Bridge", "Devils Tower", "Old Faithful", "Disneyland"],
      correct: 1,
      explanation: "Devils Tower was named America's first national monument in 1906. It is sacred to the Lakota and other tribes."
    },
    {
      question: "Why is the Golden Gate Bridge painted International Orange?",
      options: ["To blend in with the red-orange rocks and hills around San Francisco Bay", "Because orange paint was the cheapest", "So ships can't see it", "To match the sunset only"],
      correct: 0,
      explanation: "Most bridges are steel gray, but the Golden Gate is orange to blend in with the red-orange rocks and hills."
    },
    {
      question: "Why did moviemakers move from the Northeast to southern California?",
      options: ["They needed sunny days to film outdoors", "They wanted snow", "It was closer to Alaska", "There were more ghost towns"],
      correct: 0,
      explanation: "The Northeast is often cloudy and rainy. Moviemakers found the sunshine they needed in southern California."
    },
    {
      question: "What are some of the ingredients in Eskimo (Inuit) ice cream?",
      options: ["Reindeer fat, seal oil, freshly fallen snow, and fresh berries", "Milk, sugar, and vanilla", "Pineapple and coconut", "Rice and seaweed"],
      correct: 0,
      explanation: "Akutaq is made from reindeer fat, seal oil, freshly fallen snow, fresh berries, and sometimes ground fish."
    },
    {
      question: "Where was the California Roll invented?",
      options: ["Los Angeles", "Hawaii", "Seattle", "Alaska"],
      correct: 0,
      explanation: "The California Roll, a sushi made with avocado, rice, and seaweed, was invented in Los Angeles."
    },
    {
      question: "Which sport did California teenagers create in the 1970s by combining surfing with skateboards?",
      options: ["Modern skateboarding with tricks, jumps, and ramps", "Snowboarding", "Water skiing", "Dogsled racing"],
      correct: 0,
      explanation: "In the 1970s, California teens combined their surfing skills with skateboards to create the skateboarding we know today."
    },
    {
      question: "The Iditarod dogsled race goes from where to where?",
      options: ["Anchorage to Nome", "Seattle to Portland", "Los Angeles to San Francisco", "Honolulu to Kauai"],
      correct: 0,
      explanation: "The Iditarod begins in Anchorage and ends 1,150 miles later in Nome. It is called the \"Last Great Race on Earth.\""
    },
    {
      question: "What is the hula?",
      options: ["A Hawaiian dance often performed at luaus with a chant called a mele", "A kind of noodle soup", "An Alaskan sled", "A California sport"],
      correct: 0,
      explanation: "The hula is a dance developed by the native people of Hawaii. It is often performed at luaus with a mele chant, the ukulele, and the ipu."
    }
  ],

  skills: [
    {
      key: "west-land-water",
      label: "West land and water features",
      remember: "Largest region, 11 states (WA, OR, CA, NV, ID, MT, WY, UT, CO, AK, HI). Four ranges: Rockies (largest, eastern edge, Canada → Mexico), Coast Ranges (rise out of the Pacific), Sierra Nevada (crust collided and pushed up), Cascades (old magma chambers). Denali (AK) = highest US mountain, 20,320 ft. Mount Saint Helens erupted 1980. Central and Willamette Valleys: rich soil. Basin = low, bowl-shaped land. Great Basin Desert = largest US desert. Death Valley = hottest, driest, lowest (282 ft below sea level). Largest temperate rainforest (CA → AK): redwoods 300+ ft. Great Salt Lake: shallow, saltier than ocean (rivers in, none out), brine shrimp, salt flats from Lake Bonneville. Northern Alaska = tundra; Hawaii = 8 volcanic islands.",
      workedExample: "Great Salt Lake: rivers flow in → no water flows out → water evaporates → salt left behind\nBasin = low bowl → Great Basin → deserts"
    },
    {
      key: "west-climate",
      label: "West climate",
      remember: "Pacific Coast: lots of rain, mild wet winters, cool foggy summers. East across the Great Basin: less rain, warmer. Rockies: heavy snow → melts into the Colorado and Rio Grande. Alaska: coldest state because it is farthest from the equator; up to 100 in. of precipitation; houseflies can't survive. Hawaii: closest to the equator, warm all year but not too hot because of cool ocean winds; lots of rain. Fault lines → earthquakes; San Andreas Fault (600+ miles).",
      workedExample: "Far from the equator → Alaska is coldest\nClose to the equator + cool ocean winds → Hawaii warm, not too hot"
    },
    {
      key: "west-products",
      label: "West products and resources",
      remember: "Pacific Ocean = most important resource (fishing, ports trading with Japan and Asia). Columbia River: dams → electricity, irrigation, transportation. Central Valley = \"America's Fruit and Salad Bowl\" (150+ crops). Washington = most apples. Wood products. Idaho potatoes (3/4 processed). Hawaii: pineapples, sugarcane, bananas, rice, coffee, macadamia nuts. Salt: pump lake water into shallow ponds → evaporates → salt. Alaska oil (Prudhoe Bay, North Slope) → Trans-Alaska Pipeline → Valdez → supertankers. Rockies: copper, gold, silver; Leadville Silver Boom; molybdenum → strong steel. Aircraft (southern CA, Seattle). Silicon Valley = technology.",
      workedExample: "Columbia River → dams → electricity + irrigation + shipping\nNorth Slope oil → pipeline → Valdez → supertanker → refinery"
    },
    {
      key: "west-landmarks",
      label: "West landmarks",
      remember: "Yellowstone (1872): world's first national park, active volcano, 300+ geysers. Geyser = hot spring shooting boiling water and steam. Old Faithful: named for being predictable, erupts about every 91 minutes. Devils Tower: first national monument (1906), sacred to the Lakota. Golden Gate Bridge (1937): International Orange to blend with the hills. Ghost towns: boom towns abandoned when gold or silver ran out. Disneyland (opened 1955): movies moved to sunny southern California; Los Angeles = Hollywood. Alaska glaciers by cruise ship.",
      workedExample: "Old Faithful → predictable → erupts about every 91 minutes\nGold runs out → miners leave → ghost town"
    },
    {
      key: "west-culture",
      label: "West culture: food and fun",
      remember: "Food: seafood (salmon on a cedar board, oysters, cioppino stew). Chinese and Japanese immigrants → Asian foods; California Roll invented in Los Angeles. Hawaii: saimin (ramen noodle soup), Kalua pig at luaus. Eskimo ice cream (akutaq): reindeer fat, seal oil, fresh snow, berries. Fun: surfing; 1970s California teens → skateboarding; gray whale watching; snow sports; Iditarod (Anchorage → Nome, 1,150 miles, mushers). Hula: Hawaiian dance at luaus with a mele chant, ukulele, ipu, and leis.",
      workedExample: "Surfing + skateboard → modern skateboarding (1970s)\nAkutaq → reindeer fat + seal oil + snow + berries"
    }
  ]
};
