import type { Game } from "@/src/types/content";

export const games: Game[] = [
  {
    slug: "steal-a-brainrot-unblocked",
    name: "Steal A Brainrot Unblocked",
    tagline:
      "Raid rival bases, carry brainrots home, and grow your 3D collection online.",
    description:
      "Play Steal A Brainrot Unblocked, a free 3D browser game about raiding bases, carrying brainrots home, guarding your collection, and upgrading each run.",
    instructions: [
      "Use WASD or the arrow keys to move through the 3D arena.",
      "Enter a rival base, grab a valuable brainrot, and carry it back to your own base.",
      "Watch for rivals, traps, and blocked paths while you protect your collection.",
      "Spend earned cash on stronger brainrots and upgrades whenever the game offers them.",
    ],
    content: [
      {
        heading: "Play the 3D browser game",
        paragraphs: [
          "This game drops you into a colorful 3D arena where collecting is only half the job. You need to find a target, take a brainrot, and get back to your base before another player cuts off the route.",
          "This browser version uses the live Unity WebGL build from 8Games.net, so there is no download and no local game package stored in this project. Open the player on this page, press the play button, and keep the guide nearby while the game loads in the same screen.",
          "The page is designed as the play page rather than a doorway to another site. You can start the game above, read the controls below, then return to the same frame to test a safer route without opening a separate tab.",
        ],
      },
      {
        heading: "How the raid loop works",
        paragraphs: [
          "Each run is about balancing risk and reward. A valuable brainrot is worth chasing, but carrying it makes the return trip more dangerous because rivals can react before you reach safety.",
          "Move through open lanes, watch base entrances, and decide when to retreat. The best runs usually come from stealing at the right moment instead of rushing straight into the busiest area.",
          "If you are using this as a quick browser play page, focus on learning one reliable route first. A familiar path gives you more time to react when another player moves toward your base or when a safer target appears.",
          "Try to separate scouting from carrying. Look at the lane, choose a target, and only commit when you already know where you will turn on the way back. That habit keeps the run calmer and makes sudden blocks easier to handle.",
        ],
        bullets: [
          "Scout the path before grabbing a target.",
          "Return to your base quickly after a successful steal.",
          "Keep an eye on your own collection while you look for the next raid.",
        ],
      },
      {
        heading: "Tips for free online play",
        paragraphs: [
          "Players searching for this kind of online brainrot game usually want quick access and clear controls. Start with safer targets, learn where rivals tend to gather, and save upgrades for the brainrots that help your base earn faster.",
          "The free online version works best when you treat each attempt as practice. Do not chase every expensive brainrot immediately. Watch how the arena opens, wait for a clean gap, and return home before the route becomes crowded.",
          "Short sessions are useful because each run teaches one practical detail: where players gather, which corner slows you down, or when a rival is likely to guard the entrance. Use those small lessons before spending everything on a riskier target.",
        ],
        bullets: [
          "Use the camera angle to read paths before committing.",
          "Avoid carrying a stolen brainrot through crowded lanes.",
          "Upgrade steadily instead of spending everything on one risky run.",
        ],
      },
      {
        heading: "Controls and device notes",
        paragraphs: [
          "The game runs as a Unity WebGL browser build, so performance can depend on the device and network. Desktop browsers usually give the smoothest control, especially when you need quick movement during a steal.",
          "Mobile and tablet play may still work, but loading can take longer and touch controls may feel different from keyboard movement. If the game frame does not respond right away, tap inside the player once and give the WebGL build a moment to finish loading.",
          "On a keyboard, make small corrections instead of holding one direction for too long. The return trip often fails because a player oversteers while carrying a target, clips a corner, and gives rivals enough time to catch up.",
        ],
      },
      {
        heading: "Strategy for safer steals",
        paragraphs: [
          "A strong run starts before you grab anything. Look at the rival base, check the lane back to your own area, and decide whether the target is worth the risk. A small successful steal is usually better than losing a rare brainrot in the open.",
          "When you are carrying something valuable, avoid the busiest route. Use side paths when they are clear, keep moving, and do not stop near rival entrances. The goal is to turn each steal into steady progress instead of one risky highlight.",
          "Defense matters as much as raiding. Glance back at your own base between attempts, because another player can punish you while you are focused on the next prize. If your collection is exposed, pause the attack and protect what is already earning.",
        ],
        bullets: [
          "Take easy targets while learning the arena.",
          "Retreat when too many rivals gather near the same base.",
          "Use upgrades to make later steals easier to protect.",
        ],
      },
      {
        heading: "Why the player is built into this page",
        paragraphs: [
          "The game frame, basic controls, and strategy notes live together so the page can answer the search intent immediately. You do not need to use the related-game cards or navigation to reach the main experience; those links are secondary options after you finish playing.",
          "Keeping everything on one page also helps when the WebGL build needs time to load. While the player prepares the 3D scene, you can read the first-run notes, then press play and test the route advice in the same browser tab.",
          "If a network blocks the embedded game host, the surrounding page still gives enough context to understand the controls and retry steps. Refresh once, click inside the player, and use a modern desktop browser for the most reliable start.",
        ],
      },
      {
        heading: "Common mistakes on early runs",
        paragraphs: [
          "The most common beginner mistake is chasing the biggest reward before learning how the map flows. Expensive targets attract attention, and a crowded return lane can turn a good steal into a quick loss. Build confidence with lower-risk routes first.",
          "Another mistake is ignoring timing. Wait until rivals move away from an entrance, then enter quickly and leave with a direct plan. If the path changes while you are carrying a brainrot, choose open space over the shortest route.",
          "Finally, do not spend every run only attacking. Watch how your base is positioned, protect your current collection, and upgrade steadily. Safer progress usually beats a single dramatic raid that leaves your own side open.",
        ],
      },
    ],
    category: "action",
    tags: ["3d", "action", "strategy", "mobile"],
    accent: "#ffb02e",
    icon: "B",
    developer: "8Games.net",
    technology: "Unity WebGL",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    featured: true,
    trending: true,
    plays: 0,
    image: "/images/games/steal-a-brainrot-unblocked-cover.webp",
    embedUrl: "https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/",
  },
  {
    slug: "rocket-goal",
    name: "Rocket Goal",
    tagline:
      "Drive rocket cars, chase clean angles, and score arena goals in browser car soccer.",
    description:
      "Play Rocket Goal online for free, a browser car soccer game with rocket-powered vehicles, fast arena goals, and competitive multiplayer-style action.",
    instructions: [
      "Click play, wait for the Unity WebGL frame to finish loading, and focus the game by clicking inside the player.",
      "On desktop, use the keyboard controls shown by the game to steer, accelerate, brake, and recover after contact.",
      "Chase the ball with your car, aim your touches toward open space, and push shots into the rival goal.",
      "Use boost, jumps, or aerial moves when they are available, then rotate back quickly so your own goal stays covered.",
    ],
    content: [
      {
        heading: "Play Rocket Goal online",
        paragraphs: [
          "Rocket Goal turns car soccer into a fast browser match where your vehicle is both the striker and the defender. You drive a rocket-powered car across a bright arena, attack a heavy ball, and try to send it through the glowing goal before the other side clears it away.",
          "This Rocket Goal page is built for players who want direct access without a download. The playable frame uses the live RocketGoal.io Unity WebGL build, so the game opens inside the browser while this page keeps the guide, controls, and related games close by.",
        ],
      },
      {
        heading: "What makes Rocket Goal different",
        paragraphs: [
          "A normal soccer game asks you to pass and shoot with players. Rocket Goal changes that rhythm by making every touch depend on vehicle speed, angle, and recovery. A clean hit from the side can be stronger than a full-speed crash straight into the ball, especially when the bounce sends the ball away from your net.",
          "The best moments come from reading the arena before you boost. You can pressure the ball, pull back to guard the goal, or use the wall to set up a better shot. That mix of sports positioning and racing-style control gives Rocket Goal a quick loop that still rewards practice.",
        ],
        bullets: [
          "Attack the ball from an angle instead of chasing it in a straight line.",
          "Recover after each touch so you are ready for the next bounce.",
          "Balance scoring pressure with simple defense near your own goal.",
        ],
      },
      {
        heading: "Rocket Goal controls and device notes",
        paragraphs: [
          "Start by pressing the play button and giving the Unity WebGL frame a moment to load. Desktop play is usually the smoothest option for Rocket Goal because keyboard driving makes it easier to steer, brake, and line up a shot while the ball is moving quickly.",
          "Phones and tablets may load the browser version, but car soccer needs precise timing. If you play on a small screen, rotate to landscape, tap inside the game frame, and wait for all assets to finish loading before judging performance. Older devices or restricted networks can take longer to start a WebGL game.",
        ],
      },
      {
        heading: "Tips for scoring more goals",
        paragraphs: [
          "Do not hit every ball at maximum speed. Look at the open side of the arena, turn the nose of your car toward the next bounce, and then make contact. When the ball is near a wall, a softer angled hit can center it for a better follow-up instead of sending it into a corner.",
          "Watch the other car as much as the ball. If an opponent commits to a jump or boost, you can often wait for the miss and take a cleaner shot. When you lose control, recover first, then rejoin the play. A quick defensive turn often prevents an easy goal and gives you another chance to counterattack.",
          "For cleaner attacks, think one touch ahead. A controlled first hit can move the ball into open space, while the second touch becomes the shot. That simple setup is often more reliable than forcing a difficult angle from the corner.",
        ],
        bullets: [
          "Clear danger first when the ball is rolling toward your net.",
          "Use short bursts of speed to adjust your line before impact.",
          "Aim for open goal space, not only for the center of the ball.",
        ],
      },
      {
        heading: "Why players search for Rocket Goal unblocked",
        paragraphs: [
          "Many players search for Rocket Goal, RocketGoal, rocket goal io, or rocket goal unblocked because they want a car soccer game that runs in the browser. This page matches that intent by keeping the game easy to open and by explaining how the arena, vehicle control, and scoring loop work before you start.",
          "Rocket Goal also fits short sessions. You can play one quick match, practice cleaner driving lines, or keep trying for better shots without installing a large client. It is not the official Rocket League game, but it gives browser players a separate rocket soccer experience focused on fast goals, quick recoveries, and repeatable WebGL play.",
        ],
      },
    ],
    category: "sports",
    tags: ["3d", "sports", "soccer", "car", "multiplayer", "action"],
    accent: "#27c4ff",
    icon: "R",
    developer: "Gameflare",
    technology: "Unity WebGL iframe",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    featured: true,
    trending: true,
    plays: 28600,
    image: "/images/games/rocket-goal-cover.webp",
    embedUrl: "https://rocketgoal.io/",
  },
  {
    slug: "core-ball",
    name: "Core Ball",
    tagline:
      "Launch balls into a spinning core and master each one-button timing puzzle.",
    description:
      "Play Core Ball online for free. This Coreball timing game challenges you to launch every ball into the rotating core without colliding.",
    instructions: [
      "Click or tap inside the game frame to launch the next numbered ball.",
      "Aim for open gaps around the spinning core.",
      "Avoid every ball already attached to the core or the level restarts.",
      "Clear the full queue of balls to move into the next stage.",
      "Wait for the rotation rhythm instead of firing every shot immediately.",
    ],
    content: [
      {
        heading: "Play Core Ball online",
        paragraphs: [
          "Core Ball is a one-button skill game about timing, patience, and reading rotation. The rule is simple: send every numbered ball into the spinning core without touching any ball that is already attached. Each successful shot changes the next opening, which gives the Core Ball game its sharp arcade feel.",
          "This Core Ball online version runs from a local HTML5 build hosted inside this site. The game loads in the browser from the same domain, so there is no external game portal to wait on and no download to install. Open the player, click or tap to shoot, and focus on placing each ball into a clean gap.",
        ],
      },
      {
        heading: "How the Core Ball game works",
        paragraphs: [
          "Each stage begins with a rotating center and a stack of balls waiting below it. When you click, the next ball travels upward and locks onto the edge of the core if the space is open. If that shot touches another ball, the level fails and restarts. The goal is not to shoot quickly; the goal is to shoot when the rotation gives you enough room.",
          "As the levels continue, the queue grows and the safe spaces become harder to judge. A wide opening can turn into a narrow lane after only a few shots. That is why Core Ball feels easy to understand but difficult to master: every small timing decision changes the next one.",
        ],
        bullets: [
          "Watch one full turn before taking a risky shot.",
          "Use the largest gaps early while the core is less crowded.",
          "Slow down near the final balls, because one collision resets the stage.",
        ],
      },
      {
        heading: "Core Ball strategy and timing tips",
        paragraphs: [
          "Good Core Ball strategy starts with rhythm. The core turns at a steady speed, so a missed shot usually comes from clicking too early or too late for the gap you were tracking. Pick one opening, follow it for a moment, and fire when it lines up with the launch path.",
          "The safest approach is to place early balls where they create balanced spacing. Do not crowd one side of the core unless the level gives you no other option. Balanced spacing keeps more usable lanes available for the final shots, where most players lose a strong run.",
        ],
        bullets: [
          "Track a single gap instead of watching every ball at once.",
          "Avoid double-clicking when the remaining queue is short.",
          "Treat the last two or three shots as precision moves, not quick taps.",
        ],
      },
      {
        heading: "Why Core Ball unblocked works for quick sessions",
        paragraphs: [
          "Players searching for Core Ball unblocked usually want a fast browser game that opens directly and makes sense within seconds. Coreball fits that intent because there are no long tutorials, menus, or complicated upgrades. The challenge is visible immediately: a core, a stack of balls, and one input that decides whether the level continues.",
          "That makes Core Ball a strong pick for short breaks, classroom-style browser play, or a quick skill test. Each attempt is brief, but the game still creates the feeling that the next run will be cleaner. You can practice one level for better timing, push for a higher stage, or play a few rounds when you want a focused arcade challenge.",
        ],
      },
      {
        heading: "Controls and device support",
        paragraphs: [
          "Core Ball is built for desktop, mobile, and tablet browsers. On desktop, use a mouse click or trackpad click inside the player. On phones and tablets, tap the screen to launch the next ball. Because the game only needs one input, it is easy to start on touch screens, but keep your finger away from the center so you can see the gaps.",
          "The local HTML5 build is lightweight compared with large 3D WebGL games, so it should load quickly on modern browsers. If the game does not respond after the page opens, click or tap once inside the iframe to focus it, then wait a moment for the script and styles to finish loading.",
        ],
      },
      {
        heading: "What makes Core Ball replayable",
        paragraphs: [
          "Core Ball keeps its replay value by making failure readable. When a shot collides, you can usually tell whether you rushed, hesitated, or aimed at the wrong opening. That immediate feedback makes the next attempt more useful because you are improving the same timing skill one shot at a time.",
          "The best way to improve is to stay calm when the core becomes crowded. Many players clear the early queue easily, then lose focus when only a few balls remain. Pause for the rotation, choose the cleanest lane, and make the final launch with the same patience you used at the start. That steady rhythm is the heart of the Core Ball game.",
        ],
      },
    ],
    category: "skill",
    tags: ["one-button", "high-score", "mobile", "strategy"],
    accent: "#f4c95d",
    icon: "C",
    developer: "Own Project",
    technology: "HTML5 CSS JavaScript",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-06-25",
    updatedAt: "2026-06-25",
    featured: true,
    trending: true,
    plays: 34200,
    image: "/images/games/core-ball-cover.webp",
    embedUrl: "/embed/core-ball/index.html",
  },
  {
    slug: "acceleration-city",
    name: "Acceleration City",
    tagline:
      "Explore a neon city, tune futuristic rides, and use CoBot tools to solve open-world driving challenges.",
    description:
      "Play Acceleration City online for free. Drive through a 3D city map, use CoBot tools, test ramps, and practice STEM-style route challenges.",
    instructions: [
      "Click inside the player and press Play now if the external embed shows its loading screen.",
      "Use WASD or the arrow keys to steer, accelerate, and control your vehicle through the city.",
      "Press Spacebar for handbrake, drift, action, or jump moments when the game calls for it.",
      "Use Left Shift for nitro boost, and press R if you need to reset your position.",
      "Experiment with CoBot triggers and vehicle upgrades to reach new routes, platforms, and collectibles.",
    ],
    content: [
      {
        heading: "Play the 3D city driving game",
        paragraphs: [
          "Acceleration City is a browser-based 3D driving adventure set inside a bright futuristic map. Instead of locking you to one racing lane, it gives you room to explore roads, ramps, rooftops, desert paths, and neon districts while you learn how speed and control change each route.",
          "This page uses the external FreeWebGames embed, so there is no local HTML game package stored in this project. Open the player, let the iframe finish loading, and play from the browser. If you are looking for a download, this page is built for browser play instead of APK or EXE files.",
          "The route checker above gives the page a practical on-page task before you start driving. Pick a goal, choose the kind of route you want to try, and use the suggestion to decide whether to scout slowly or commit with boost.",
        ],
      },
      {
        heading: "Open-world driving and vehicle upgrades",
        paragraphs: [
          "Gameplay mixes open-world exploration with acceleration timing. Cruise through the city to learn the layout, then push harder when a straight road or clean ramp gives you space to build speed. The fun comes from deciding when to drive carefully and when to use the full power of your ride.",
          "The game also lets you change the way your vehicle feels. Cars, bikes, trucks, and hovercraft-style rides all support the fantasy of building a better machine for the map in front of you. Upgrades make each run feel more personal, especially when you choose routes based on handling, drift control, and boost timing.",
        ],
        bullets: [
          "Explore wide city roads before chasing difficult jumps.",
          "Use boost on straight sections where you can recover safely.",
          "Try different vehicles when a route feels too tight or too heavy.",
        ],
      },
      {
        heading: "CoBot, STEM, and Hour of Code appeal",
        paragraphs: [
          "One reason players search for Hour of Code, CS2N, CS-STEM Network, or coding-related versions of this title is the CoBot system. CoBot acts like a programmable helper that can support movement, build platforms, or trigger a boost when the setup is right.",
          "You do not need advanced programming experience to enjoy the driving game. The STEM layer works best when you treat it as experimentation: test a trigger, watch how the result changes your path, and adjust the next attempt. That makes the game approachable for classroom play, coding clubs, robotics fans, and players who like smart driving challenges.",
        ],
      },
      {
        heading: "Controls and device support",
        paragraphs: [
          "Controls are built around keyboard driving. Use WASD or the arrow keys to accelerate and steer, press Spacebar for handbrake, drift, action, or jump behavior, tap Left Shift for nitro boost, and use R to reset after a bad landing. If the frame does not respond, click inside the game once so the browser focuses the iframe.",
          "Desktop Chrome or another modern desktop browser is the safest choice because the game uses a full 3D web app inside an external iframe. Can you play Acceleration City on iPad? Tablet browsers may load it, but touch controls and network filters can change the experience. Rotate to landscape and wait for the embedded game to finish loading before judging performance.",
        ],
        bullets: [
          "Desktop keyboard play gives the cleanest steering and boost control.",
          "Tablet and iPad play may work better in landscape orientation.",
          "Restricted school or public networks can block the external iframe even when this page loads.",
        ],
      },
      {
        heading: "Walkthrough tips",
        paragraphs: [
          "Start your first walkthrough like a map tour rather than a speedrun. Follow visible roads, learn where ramps and rooftops connect, and use reset when an experimental jump sends you into a bad position. Once you know a few reliable routes, begin adding boost and drift to cut time without losing control.",
          "If you are hunting Minanimals or trying to reach a difficult platform, slow down before the final approach. Full speed feels exciting, but a clean angle usually matters more than raw acceleration. Use CoBot tools near obstacles, keep the camera pointed toward the next landing, and repeat short sections until the route feels predictable.",
        ],
        bullets: [
          "Practice one district before jumping across the whole map.",
          "Save nitro for exits, ramps, and long roads instead of crowded turns.",
          "Use CoBot experiments to solve routes that normal driving cannot reach.",
        ],
      },
      {
        heading: "Browser access and classroom notes",
        paragraphs: [
          "Many players search for Acceleration City because they want the full browser version on a classroom device, Chromebook-style setup, or shared computer. This page keeps the game frame close to the guide, explains the controls clearly, and avoids sending players through unrelated downloads.",
          "Access can still depend on the network. The playable frame comes from FreeWebGames and then loads the activity from CS2N, so a firewall or browser policy can block one part of the chain. If that happens, try refreshing once, use a modern browser, or return from a less restricted connection.",
          "For school or shared-device sessions, keep the first goal simple. Load the player, check that steering works, drive around the nearest open roads, and only then try ramps, rooftops, or CoBot experiments. This keeps the session useful even when the network is slower than expected.",
        ],
      },
      {
        heading: "Driving goals to try first",
        paragraphs: [
          "A good opening session should prove that the player, controls, and route planning all work on your device. Start by driving a clean loop around the central streets, then use one ramp, one rooftop path, and one reset so you understand how the frame reacts.",
          "After that, set a small challenge: reach a higher platform, cross a district without crashing, or use boost only after the car is already straight. These goals make the browser version feel more like a skill test than a simple driving sandbox.",
          "If you are using CoBot tools, change only one thing at a time. Testing one trigger, one platform, or one boost point makes it easier to understand what helped and what broke the route.",
        ],
      },
    ],
    category: "racing",
    tags: ["3d", "car", "racing", "adventure", "educational", "coding", "mobile"],
    accent: "#20c7d8",
    icon: "A",
    developer: "FreeWebGames",
    technology: "HTML5 iframe",
    platforms: ["Desktop", "Tablet", "Mobile"],
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    featured: true,
    trending: true,
    plays: 38600,
    image: "/images/games/acceleration-city-cover.webp",
    embedUrl: "https://freewebgames.io/acceleration-city.embed",
  },
  {
    slug: "bear-clicker",
    name: "Bear Clicker",
    tagline:
      "Tap the bear, collect honey, buy upgrades, and grow a relaxed idle clicker run.",
    description:
      "Play Bear Clicker online for free. Tap the bear for honey, unlock click and idle upgrades, level up your bear, and build a faster HTML5 clicker run.",
    instructions: [
      "Click inside the game frame after it loads so the canvas can receive input.",
      "Click or tap the bear to earn honey with each active click.",
      "Spend honey on click upgrades and idle upgrades in the Honey Store.",
      "Watch your honey per second and level progress to decide which upgrade helps most.",
      "Use prestige later in the run when the game offers a permanent multiplier boost.",
    ],
    content: [
      {
        heading: "Play Bear Clicker online",
        paragraphs: [
          "Bear Clicker is a browser idle clicker game about turning simple taps into a growing honey economy. You start by clicking the bear for small honey rewards, then use that honey to unlock upgrades that make each future click or second of idle play more valuable.",
          "This Bear Clicker page is built for players who want to open Bear Clicker online without a download. The game runs through an external HTML5 iframe from OzoGames, so it can load inside the site player while the guide, controls, and related games stay close on the same page.",
          "The Bear Clicker game keeps the loop easy to read: click the bear, check the Honey Store, buy the most useful upgrade, and watch the bear level move forward. As production improves, the game adds larger numbers, stronger upgrades, achievements, and a prestige option for longer runs.",
        ],
      },
      {
        heading: "How Bear Clicker gameplay works",
        paragraphs: [
          "The main Bear Clicker gameplay loop has two parts. Active clicking gives instant honey, while idle upgrades add honey per second in the background. Early upgrades improve direct click power, and later store items add steady automatic income so progress continues even when you are not tapping constantly.",
          "The level bar tracks lifetime honey and changes the bear title as your run grows. That gives Bear Clicker a clear sense of progress without complicated missions. You can play for a short burst, buy a few upgrades, then come back later to continue building the same honey engine.",
          "A good first run is simple: load the Bear Clicker game, click inside the frame to focus it, tap the bear until the first upgrade is affordable, then compare click upgrades with idle upgrades. Buying the option with the best immediate return usually makes the next minute smoother.",
        ],
        bullets: [
          "Click actively at the start to reach the first Honey Store upgrades.",
          "Balance click power with honey-per-second upgrades.",
          "Prestige only after the reward is large enough to justify restarting the run.",
        ],
      },
      {
        heading: "Bear Clicker tips for faster honey",
        paragraphs: [
          "Players searching for Bear Clicker tips or a Bear Clicker walkthrough usually want to move past the slow opening. The safest approach is to buy affordable click upgrades early, then add idle income once honey per second starts to matter. This keeps active play rewarding while building a base for passive progress.",
          "If a click does not seem to do anything, click once inside the frame first, wait for the canvas to finish loading, and then try again. Bear Clicker stores progress in the browser, so avoid clearing site data if you want to keep your run.",
          "Watch upgrade costs instead of buying only the newest item. Sometimes a cheaper older upgrade gives better value than saving for a large purchase. When progress slows, compare the next click upgrade, the next idle upgrade, and the possible prestige reward before spending honey.",
        ],
        bullets: [
          "Use desktop play for the fastest repeated clicks.",
          "Let idle income build while you compare store options.",
          "Refresh once if the preloader stays on screen too long.",
        ],
      },
      {
        heading: "Bear Clicker controls and device support",
        paragraphs: [
          "Bear Clicker controls are simple mouse and touch inputs. On desktop, click inside the game frame and use the mouse or trackpad to tap the bear and press upgrade cards. On phones and tablets, tapping works too, though landscape orientation gives more room for the bear and Honey Store.",
          "The Bear Clicker online embed is an HTML5 game rather than a large 3D Unity build, so it should be lighter than many WebGL games. Performance can still depend on the browser, network, and whether a school or work filter blocks third-party game resources.",
          "If the Bear Clicker player is blank or stuck on loading, refresh once and give the external frame time to load its scripts and images. If the frame loads but does not respond, click inside the game first so the browser sends input to the iframe instead of the page.",
        ],
      },
      {
        heading: "Why Bear Clicker fits short sessions",
        paragraphs: [
          "Bear Clicker works as a quick online game because the objective is visible immediately: click, earn honey, upgrade, and repeat. You do not need a long tutorial before the first reward appears, and the store gives clear next steps whenever enough honey is available.",
          "It also matches players who search for Bear Clicker unblocked, Bear Clicker browser game, and Bear Clicker HTML5 because the page gives direct access to the playable frame and avoids download-focused wording for users who simply want the online version.",
          "For SEO and for players, this page describes Bear Clicker as it actually plays: a lightweight HTML5 idle clicker with honey, upgrades, level progress, achievements, prestige, and quick browser access.",
        ],
      },
    ],
    category: "arcade",
    tags: ["clicker", "idle", "incremental", "mobile"],
    accent: "#f2a72d",
    icon: "B",
    developer: "OzoGames",
    technology: "HTML5 Canvas iframe",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-06-30",
    updatedAt: "2026-06-30",
    featured: true,
    trending: true,
    plays: 46800,
    image: "/images/games/bear-clicker-cover.webp",
    embedUrl: "https://ozogames.com/uploads/games/html5/B/bear%20clicker/index.html",
  },
  {
    slug: "football-bros",
    name: "Football Bros",
    tagline:
      "Break tackles, throw quick passes, and score arcade touchdowns in a fast pixel football game.",
    description:
      "Play Football Bros game online for free. Run, pass, tackle, and score touchdowns in a fast pixel American football game with simple keyboard controls.",
    instructions: [
      "Click inside the game frame and press Play Now if the OzGames embed shows its loader.",
      "Use WASD or the arrow keys to move your player around the field.",
      "Press Spacebar to throw when you have the ball or tackle when you are on defense.",
      "Keep moving to find open lanes, pass to teammates, and chase down the ball carrier.",
      "Try local two-player mode from the game menu when you want to compete on the same keyboard.",
    ],
    content: [
      {
        heading: "Play Football Bros game online",
        paragraphs: [
          "Football Bros is a fast American football arcade game built around simple movement, quick throws, hard tackles, and short matches that get to the point quickly. The look is bright and retro, but the field decisions still matter: you need to read space, protect the ball, and turn one open lane into a touchdown before the defense closes in.",
          "This Football Bros free online page uses the public OzGames embed, so there is no local game package stored here and this site is not the Football Bros official site. Open the player, wait for the iframe loader, and play the Football Bros game directly in the browser without downloading a file.",
        ],
      },
      {
        heading: "What kind of football game is Football Bros?",
        paragraphs: [
          "Football Bros is not a full simulation with playbooks, substitutions, and long quarters. It is closer to a compact sports brawler where each snap asks for one clear decision: run, pass, dodge, or tackle. That makes it easy for new players to understand while still leaving room for better timing and smarter field position.",
          "The source page lists Football Bros as a pixel-style sports game from Blue Wizard Digital, which also answers common 'who made Football Bros game' searches. Players searching for football bros io, football bros game online, football bros gameplay, or football bros free usually want the same browser version: arcade football, readable controls, and a match that starts quickly.",
        ],
        bullets: [
          "Pixel-style American football with bright arcade presentation.",
          "Simple keyboard controls for movement, passing, and tackling.",
          "Fast matches that fit short browser play sessions.",
        ],
      },
      {
        heading: "Football Bros controls and first match tips",
        paragraphs: [
          "The main Football Bros controls are intentionally direct. Use WASD or the arrow keys to move your player, then use Spacebar as the action button. On offense, Spacebar lets you throw the ball when a teammate has space. On defense, the same button becomes your tackle input when the ball carrier is in range.",
          "Your first match should be about learning rhythm instead of forcing every play. Keep your player moving, look for a teammate crossing into open space, and pass before the defender reaches you. When you are defending, do not chase randomly. Cut off the likely route, then tackle when the carrier has fewer directions to escape.",
        ],
        bullets: [
          "Move before the pass so you are not waiting in a covered lane.",
          "Use short passes when the defense is close.",
          "On defense, aim your tackle at the runner's path, not where the runner used to be.",
        ],
      },
      {
        heading: "Football Bros unblocked and embed notes",
        paragraphs: [
          "Many players search for Football Bros unblocked because they want a football game that can open quickly from a school Chromebook, shared desktop, or casual browser session. This page is built for that intent, but access can still depend on the network. The game itself loads from OzGames, and a firewall can block the external iframe even when this site loads normally.",
          "Technically, the embed is suitable because the provided Football Bros iframe returns 200, has no redirect, and does not send frame-blocking headers such as X-Frame-Options or restrictive frame-ancestors. There is no Football Bros GitHub package in this project; the actual game loads through the OzGames embed wrapper, which is safer than hotlinking the internal game path.",
        ],
      },
      {
        heading: "How to score more touchdowns",
        paragraphs: [
          "Good Football Bros offense starts with spacing. If you run straight into the nearest defender, the play ends quickly. Move diagonally, force the defender to turn, and use a pass when a teammate has a cleaner route. A safe five-yard gain is often better than a rushed throw into traffic.",
          "When you are close to the end zone, patience becomes more valuable. Let the defense commit, then cut into the open lane or throw to the teammate who has the best angle. The best team in Football Bros is usually the one you control well, so practice timing before worrying too much about menu choices or team names.",
        ],
        bullets: [
          "Pass before pressure reaches the ball carrier.",
          "Use diagonal movement to make tackles harder to line up.",
          "Choose the safest open lane near the goal line instead of forcing a highlight play.",
        ],
      },
      {
        heading: "Devices, two-player play, and browser performance",
        paragraphs: [
          "Football Bros works best on desktop because keyboard movement and the Spacebar action are central to the game. The embed includes mobile-friendly page settings, so phones and tablets may load the player, but a physical keyboard or laptop-style setup gives cleaner control for running routes, throwing passes, and tackling on time.",
          "The game also includes local two-player appeal for players who want to compete with a friend on the same computer. If the player appears blank, click inside the frame, wait for the OzGames loader, and refresh once if a public or school network interrupts the third-party game assets.",
        ],
      },
    ],
    category: "sports",
    tags: ["sports", "football", "action", "multiplayer", "mobile"],
    accent: "#2fc46d",
    icon: "F",
    developer: "Blue Wizard Digital",
    technology: "HTML5 WebGL iframe",
    platforms: ["Desktop", "Tablet", "Mobile"],
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    featured: true,
    trending: true,
    plays: 52400,
    image: "/images/games/football-bros-cover.webp",
    embedUrl: "https://ozgames.io/football-bros.embed",
  },
  {
    slug: "bit-planes",
    name: "Bit Planes",
    tagline:
      "Fly tiny planes, dodge incoming fire, and win fast browser dogfights across multiple modes.",
    description:
      "Play Bit Planes online for free. Fly retro planes, fire guns and missiles, eject when needed, and battle in deathmatch, teams, duel, survival, and split-screen modes.",
    instructions: [
      "Click inside the game frame, enter a nickname if you want, choose a mode, and press Start.",
      "Use the Up and Down arrow keys to adjust thrust level.",
      "Use the Left and Right arrow keys to control the elevator and steer your plane through the sky.",
      "Press Spacebar to fire the gun, X to launch a missile, and C to catapult or parachute.",
      "For split-screen duel, use the on-page Player 1 and Player 2 key layouts shown by the game.",
    ],
    content: [
      {
        heading: "Play Bit Planes online",
        paragraphs: [
          "Bit Planes is a fast HTML5 air combat game from medv.io where small planes turn simple keyboard inputs into tense dogfights. You manage thrust, angle the elevator, fire the gun, launch missiles, and try to stay in the air long enough to outplay the other pilots.",
          "This Bit Planes page uses the public medv.io browser version in an iframe, so there is no download, APK, or local game package stored in this project. Open the player, let the canvas load, click inside the frame, and start a Bit Planes game online from the browser.",
        ],
      },
      {
        heading: "What kind of game is Bit Planes?",
        paragraphs: [
          "Bit Planes feels like a retro arcade dogfight game with modern browser convenience. The planes are small, the rules are readable, and the challenge comes from momentum, timing, and quick reactions rather than complicated menus. A clean turn can save you from a missile, while a rushed climb can leave your plane exposed.",
          "The source page includes several game modes: Death match, Teams, Duel, Survival, Swarm, Domination, Revenge, and a split-screen Duel option. That variety makes Bit Planes useful for quick solo practice, online multiplayer-style fights, and local versus play when two players want to share one keyboard.",
        ],
        bullets: [
          "Death match and Duel focus on direct air combat.",
          "Teams, Swarm, and Domination add larger fight objectives.",
          "Survival rewards steady control while pressure builds.",
        ],
      },
      {
        heading: "Bit Planes controls and first-flight tips",
        paragraphs: [
          "The most important Bit Planes control is not the fire button; it is thrust management. Use the Up and Down arrows to control speed, then use Left and Right to shape your climb, dive, or turn. If you keep full thrust all the time, your plane can overshoot targets or drift into danger before you can line up a shot.",
          "Spacebar fires the gun, X deploys a missile, and C lets you catapult or parachute when the situation calls for it. New players should practice smooth turns before chasing every enemy. Stay level long enough to understand how your plane responds, then add short bursts of attack when a rival crosses your path.",
        ],
        bullets: [
          "Make small elevator adjustments instead of holding a turn too long.",
          "Fire when your nose is lined up, not when the target is already passing behind you.",
          "Save missiles for moments when the opponent has fewer escape angles.",
        ],
      },
      {
        heading: "How to win more Bit Planes dogfights",
        paragraphs: [
          "Good Bit Planes gameplay is about positioning before shooting. Try to enter a fight with enough speed to climb or escape, but not so much speed that you cannot correct your line. When another plane turns below you, a controlled dive can create a better attack angle than chasing from behind at the same height.",
          "Do not ignore survival tools. The catapult and parachute control can matter when a plane is damaged or when a risky attack leaves you without a clean recovery path. Treat each crash as feedback: if you lost control during a climb, reduce thrust earlier; if you missed every shot, start the next pass from a wider angle.",
        ],
      },
      {
        heading: "Split screen, multiplayer, and device support",
        paragraphs: [
          "Bit Planes supports a split-screen duel mode with separate keyboard layouts. Player 1 uses the arrow keys plus M for catapult and comma or period for fire. Player 2 uses WASD for flight, C for catapult, and V or B for fire. Because both players need reliable keyboard access, desktop and Chromebook-style setups are the best fit.",
          "The game page uses responsive HTML and canvas elements, but Bit Planes is primarily a keyboard flying game. Tablets may load the page if a keyboard is available, while phones are less ideal because the listed controls depend on physical keys. For the smoothest Bit Planes online experience, use a modern desktop browser and click inside the iframe before playing.",
        ],
      },
      {
        heading: "Unblocked access and official source notes",
        paragraphs: [
          "Players often search for Bit Planes unblocked, Bit Planes game online, Bit Planes controls, or medv io Bit Planes because they want the original browser game to open without extra installers. This page links the playable frame to the official medv.io address and keeps the guide focused on real controls, real modes, and practical tips.",
          "Access can still depend on the network. The medv.io page currently returns a normal 200 response and does not send common iframe-blocking headers, which makes it suitable for this site player. If a school, work, or public network blocks the frame later, use the official source link from a less restricted connection rather than looking for hacked or modified copies.",
        ],
      },
    ],
    category: "action",
    tags: ["action", "flying", "shooter", "multiplayer", "retro", "physics"],
    accent: "#4aa7ff",
    icon: "P",
    developer: "medv.io",
    technology: "HTML5 Canvas iframe",
    platforms: ["Desktop", "Tablet with keyboard", "Chromebook"],
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    featured: true,
    trending: true,
    plays: 58600,
    image: "/images/games/bit-planes-cover.webp",
    embedUrl: "https://medv.io/bit-planes/",
  },
  {
    slug: "planet-clicker",
    name: "Planet Clicker",
    tagline:
      "Click planets, build energy income, buy upgrades, and unlock new worlds in a space idle game.",
    description:
      "Play Planet Clicker online for free. Build energy by clicking planets, buy upgrades, unlock Mars and Venus, and grow an idle space economy in your browser.",
    instructions: [
      "Click Play, then press Play Now inside the ZapGames frame and wait for the TurboWarp player to load.",
      "Click or tap the planet to generate energy and keep the first upgrades moving.",
      "Spend energy on upgrades that improve click power, automatic income, and overall production speed.",
      "Unlock new planets such as Mars and Venus when they become affordable, then invest in their upgrades.",
      "Keep the frame focused while playing, and avoid clearing browser data if the game stores progress locally.",
    ],
    content: [
      {
        heading: "Play Planet Clicker online",
        paragraphs: [
          "Planet Clicker is a space idle clicker game about turning simple taps into a growing energy economy. You start by clicking a planet for energy, then use that energy to buy upgrades that make every click stronger or add automatic production while the game keeps running.",
          "This Planet Clicker online page uses the public ZapGames embed rather than a local game package. The wrapper opens a TurboWarp-packaged HTML5 version of the game, so you can play in the browser without downloading an APK, EXE, or separate app.",
        ],
      },
      {
        heading: "How Planet Clicker gameplay works",
        paragraphs: [
          "The main loop is easy to understand: click the planet, watch the energy total rise, buy an upgrade, and repeat with better production. Early progress depends on active clicking, but the game becomes more interesting once upgrades begin producing energy automatically in the background.",
          "Planet Clicker is not about fast reflexes or complicated combat. It is an incremental game where each purchase changes the next decision. A small click upgrade can help right now, while an idle generator may pay off better if you plan to keep the game open for a longer session.",
        ],
        bullets: [
          "Use active clicks to push through the slow opening.",
          "Compare upgrade costs before spending all of your energy.",
          "Let idle production build while you decide what to unlock next.",
        ],
      },
      {
        heading: "Energy guide and best upgrade habits",
        paragraphs: [
          "A good Planet Clicker strategy starts with balanced energy growth. If you only buy click power, you may need to keep tapping constantly. If you only buy idle upgrades too early, the opening can feel slower than necessary. The best first runs usually mix both so each click feels useful while passive income keeps rising.",
          "When several upgrades are available, look for the option that changes your next minute the most. A cheaper upgrade can be better than saving too long for a larger one, especially when it helps you reach the next planet or production tier sooner. Planet Clicker rewards steady compounding more than random spending.",
        ],
        bullets: [
          "Buy low-cost upgrades early to speed up the first energy milestones.",
          "Shift toward idle income once each click already feels productive.",
          "Avoid spending only on the newest upgrade if older options give faster value.",
        ],
      },
      {
        heading: "Unlocking planets and planning longer runs",
        paragraphs: [
          "Many players search for how to unlock Mars, Venus, or all planets in Planet Clicker because the game opens up as new worlds become available. Each planet acts like a new stage of production, giving you another place to invest energy and another reason to keep improving your income rate.",
          "Do not rush every unlock the second it appears. If your current energy income is still low, a few more upgrades on the active planet can make the next unlock easier to afford and easier to develop. The stronger your base production becomes, the faster each new world starts paying back its cost.",
        ],
      },
      {
        heading: "Controls, devices, and unblocked play notes",
        paragraphs: [
          "Planet Clicker controls are built around mouse clicks and touch taps, so the game fits desktop, Chromebook, tablet, and mobile browser play. Desktop is usually the most comfortable option for repeated clicking, while phones and tablets can work well when the frame finishes loading and the screen has enough room for the upgrade buttons.",
          "The current embed returns a normal response and does not send common frame-blocking headers, which makes it suitable for this site player. Access can still depend on a school, work, or public network because the playable frame loads from ZapGames and then opens the actual game from a separate Planet Clicker game host.",
        ],
        bullets: [
          "Click inside the player first if the game does not respond immediately.",
          "Refresh once if the preloader stalls on a restricted network.",
          "Use the full-screen button when available for easier upgrade management.",
        ],
      },
    ],
    category: "arcade",
    tags: ["clicker", "idle", "incremental", "strategy", "mobile"],
    accent: "#35d6ff",
    icon: "P",
    developer: "ZapGames.io",
    technology: "HTML5 Scratch/TurboWarp iframe",
    platforms: ["Desktop", "Mobile", "Tablet", "Chromebook"],
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    featured: true,
    trending: true,
    plays: 64200,
    image: "/images/games/planet-clicker-cover.webp",
    embedUrl: "https://zapgames.io/planet-clicker.embed",
  },
  {
    slug: "slope-unblocked",
    name: "Slope Unblocked",
    tagline:
      "Steer a neon ball down a fast 3D slope, dodge red blocks, and chase a cleaner high-score run.",
    description:
      "Play Slope Unblocked online for free. Steer a neon ball down a fast 3D slope, dodge red obstacles, survive sharp turns, and chase a higher score.",
    instructions: [
      "Click inside the game frame, press Play Now if the OzGames loader appears, and wait for the 3D track to start.",
      "Use the Left and Right arrow keys, or A and D, to steer the rolling ball across the slope.",
      "Keep the ball centered on the track so sudden turns, gaps, and tilted platforms are easier to handle.",
      "Avoid red blocks and track edges because one collision or fall ends the run immediately.",
      "Use short taps instead of holding a key when the speed climbs and the path becomes narrow.",
    ],
    content: [
      {
        heading: "Play Slope Unblocked online",
        paragraphs: [
          "Slope Unblocked is a fast 3D arcade runner built around one clear challenge: keep a neon ball alive while it rolls down an endless slope. The track drops forward automatically, speed keeps building, and every second asks for a small steering correction before the next turn, gap, or red obstacle arrives.",
          "This Slope Unblocked page uses the public OzGames embed, so there is no download and no local game package stored in this project. Open the player, let the iframe finish loading, and play Slope Unblocked online from the browser with the guide, controls, and related games available on the same page.",
        ],
      },
      {
        heading: "What kind of game is Slope?",
        paragraphs: [
          "Slope is best described as an endless high-score game with racing pressure. You are not racing another car or clearing fixed levels; you are racing the track itself. The ball accelerates, the camera pushes forward, and the road keeps changing shape until a bad angle sends you off the side or into an obstacle.",
          "That simple loop is why many players search for Slope Unblocked, Slope game, Slope online, or a Slope Unblocked game that opens quickly. The rules are easy to understand in the first few seconds, but the run becomes demanding because the track punishes oversteering, late reactions, and panic movements.",
        ],
        bullets: [
          "Endless 3D slope running with no fixed finish line.",
          "Keyboard steering focused on small left and right corrections.",
          "High-score replay value based on distance, control, and consistency.",
        ],
      },
      {
        heading: "Controls and first-run tips",
        paragraphs: [
          "The main Slope Unblocked controls are intentionally simple. Use the Left and Right arrow keys, or A and D, to guide the ball. You do not press a separate gas button, brake button, or jump button. Gravity and the slope create the speed, while your job is to keep the ball lined up with the safest part of the next platform.",
          "Your first few runs should be about learning restraint. Holding a direction too long can be worse than reacting late because the ball slides quickly at higher speed. Tap lightly, return toward the center after each turn, and look ahead of the ball instead of staring directly at it. The earlier you read a bend, the less dramatic your correction needs to be.",
        ],
        bullets: [
          "Use short taps once the ball starts moving quickly.",
          "Stay near the center whenever the next obstacle is not clear.",
          "Watch the road ahead so gaps and red blocks do not surprise you.",
        ],
      },
      {
        heading: "How to survive longer runs",
        paragraphs: [
          "Good Slope Unblocked strategy starts with clean positioning. The center of the track gives you more time to react in either direction, especially when the road tilts or narrows. If you drift too far left or right, the next bend can force a desperate correction that sends the ball into a wall or off the platform.",
          "As speed increases, treat every input as a small adjustment instead of a hard turn. Red blocks are dangerous because they often appear right after a curve or drop, so avoid entering a new platform at a sharp angle. A calmer line may feel slower, but it usually keeps the run alive longer than chasing every open lane at the last moment.",
        ],
        bullets: [
          "Recover to the center after clearing a dangerous section.",
          "Enter gaps straight when possible so the landing is easier to control.",
          "Avoid wide zigzags because they leave less room for the next obstacle.",
        ],
      },
      {
        heading: "Unblocked access, fullscreen, and devices",
        paragraphs: [
          "Players often look for Slope Unblocked fullscreen, Slope Unblocked 3D, or play Slope Unblocked from a school Chromebook because the game works best when the track is large and easy to read. Use the full-screen option in the player if it is available, and click inside the frame before steering so the browser sends keyboard input to the game.",
          "Access can still depend on the network because the playable frame loads from OzGames. The current embed URL returns normally and does not send common frame-blocking headers, which makes it suitable for this game page, but a school, work, or public connection can still block third-party game assets. Desktop and Chromebook browsers are the safest choice; tablets may work with a keyboard, while phones are less ideal for this keyboard-first runner.",
        ],
      },
    ],
    category: "arcade",
    tags: ["3d", "racing", "endless", "high-score", "physics", "action"],
    accent: "#27f57a",
    icon: "S",
    developer: "Y8 Studio / OzGames.io",
    technology: "HTML5 WebGL iframe",
    platforms: ["Desktop", "Chromebook", "Tablet with keyboard"],
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    featured: true,
    trending: true,
    plays: 73500,
    image: "/images/games/slope-unblocked-cover.webp",
    embedUrl: "https://ozgames.io/slope.embed",
  },
  {
    slug: "snow-rider-3d-unblocked",
    name: "Snow Rider 3D Unblocked",
    tagline:
      "Ride down snowy 3D slopes, dodge obstacles, use clean lines, and chase a longer winter run.",
    description:
      "Play Snow Rider 3D Unblocked online for free. Steer down a snowy 3D slope, avoid obstacles, line up ramps, and push for a better downhill score.",
    instructions: [
      "Click inside the player and wait for the Unity WebGL game to finish loading.",
      "Use the keyboard movement controls shown by the game to steer across the snowy track.",
      "Make small left and right corrections instead of holding one direction too long.",
      "Line up before ramps, narrow lanes, and obstacle clusters so the rider stays balanced.",
      "Restart quickly after a crash and use each run to learn the next safe route.",
    ],
    content: [
      {
        heading: "Play Snow Rider 3D Unblocked online",
        paragraphs: [
          "Snow Rider 3D Unblocked is a winter downhill game built around speed, steering, and clean reactions. The run sends your rider down a bright snowy mountain path where the track bends, obstacles appear ahead, and every correction needs to happen before the slope narrows.",
          "The playable version loads as a Unity WebGL game from the Snow Rider Unblocked GitHub Pages source. Open the frame, let the 3D scene finish loading, and focus on keeping a smooth line through the snow instead of making late emergency turns.",
        ],
      },
      {
        heading: "How Snow Rider 3D works",
        paragraphs: [
          "The core loop is simple: stay on the downhill route for as long as possible. The slope gives you forward speed, while your job is to read the next stretch of snow, avoid solid hazards, and guide the rider through open lanes before the camera catches up with a dangerous turn.",
          "Ramps and uneven sections make positioning more important than raw speed. If you enter a ramp at a bad angle, the landing can leave you pointed toward a barrier or tree. A safer approach is to straighten the rider before takeoff, then make a small adjustment after landing.",
        ],
        bullets: [
          "Watch the path ahead instead of staring only at the rider.",
          "Choose the widest safe lane when several obstacles are close together.",
          "Recover to the center of the track after every risky section.",
        ],
      },
      {
        heading: "Controls and first-run tips",
        paragraphs: [
          "Start by clicking inside the Snow Rider 3D Unblocked player so the browser sends keyboard input to the game. Use the movement controls shown by the game to steer left and right, then practice short taps. Small corrections are easier to recover from than wide turns at high speed.",
          "During the first few runs, do not chase every risky opening. Learn how quickly the rider slides, how much space each obstacle needs, and how early you need to line up for ramps. Once the timing feels familiar, longer runs become more about rhythm than panic.",
        ],
        bullets: [
          "Tap lightly when the slope becomes narrow.",
          "Set your line before a ramp rather than turning on it.",
          "Avoid overcorrecting immediately after a landing.",
        ],
      },
      {
        heading: "Strategy for longer downhill runs",
        paragraphs: [
          "A strong Snow Rider 3D run usually starts with patient steering. Staying near the middle gives you more options when the next obstacle appears. Moving too far to one side can work for a single dodge, but it often makes the following turn harder because there is less room to correct.",
          "Look for sequences, not single hazards. A clean first dodge should also leave you ready for the next ramp, barrier, or tree. If two routes look possible, choose the one that keeps the rider straight after the obstacle, because a stable exit is what keeps the run alive.",
        ],
      },
    ],
    category: "racing",
    tags: ["3d", "racing", "endless", "high-score", "physics", "mobile"],
    accent: "#4fc3ff",
    icon: "S",
    developer: "snowrider-unblocked.github.io",
    technology: "Unity WebGL iframe",
    platforms: ["Desktop", "Chromebook", "Tablet", "Mobile"],
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    featured: true,
    trending: true,
    plays: 81200,
    image: "/images/games/snow-rider-3d-unblocked-cover.webp",
    embedUrl: "https://snowrider-unblocked.github.io/game/",
  },
  {
    slug: "fnf-unblocked",
    name: "FNF Unblocked",
    tagline:
      "Match arrow notes to the beat, protect the health bar, and win rhythm battles online.",
    description:
      "Play FNF Unblocked online. Match arrow notes to the beat, protect the health bar, and practice Friday Night Funkin' timing in a playable HTML5 rhythm build.",
    instructions: [
      "Click inside the player and wait for the HTML5 rhythm game to finish loading.",
      "Use the Arrow keys or WASD to hit the matching note directions.",
      "Press each key when the scrolling note reaches the target marker.",
      "Keep your timing steady because missed notes drain the health bar.",
      "Restart a song and practice the same patterns when faster sections start causing mistakes.",
    ],
    content: [
      {
        heading: "Play FNF Unblocked online",
        paragraphs: [
          "FNF Unblocked is a rhythm battle game built around reading arrow patterns and pressing the matching directions on the beat. Each song sends notes toward a target area, and your job is to hit the correct key at the moment the note lines up. Clean timing raises your advantage, while late, early, or wrong inputs make the battle harder to recover.",
          "The fun comes from keeping your hands calm while the music speeds up. Early sections teach the rhythm and key positions, then later patterns ask you to react faster without mashing. Treat the first run of a song as a read-through: watch how the arrows move, learn where the dense clusters appear, and use the next attempt to clean up the parts that broke your combo.",
        ],
      },
      {
        heading: "How FNF rhythm battles work",
        paragraphs: [
          "Every battle is a call-and-response test. The game shows direction notes, then asks you to mirror them with the keyboard. Accurate hits help you hold the health bar, build score, and stay in control of the track. Missing too many notes is the main failure condition, because the health bar can fall until the song ends your run.",
          "Do not look at the whole screen at once. The most useful place to watch is the target line where notes must be hit. Peripheral vision can track the next few arrows, but your timing should lock onto the point where each note overlaps the marker. That habit makes fast streams easier because you are reacting to rhythm and alignment instead of chasing every arrow from the bottom of the screen.",
        ],
        bullets: [
          "Use the target markers as your timing point.",
          "Recover after a mistake instead of pressing extra keys in panic.",
          "Listen to the beat, but confirm each input visually before hitting it.",
        ],
      },
      {
        heading: "Controls and first-run tips",
        paragraphs: [
          "FNF Unblocked works best with a physical keyboard. Use the Arrow keys or WASD, whichever layout keeps your hands more relaxed. If one hand feels cramped, split the directions across both hands and practice slowly until each key position feels automatic. A comfortable hand position matters more than trying to hit every note with maximum force.",
          "For your first few songs, aim for consistency rather than perfect accuracy. Short missed sections are recoverable if you return to the beat quickly. The worst habit is double-pressing after a mistake, because that can turn one miss into several. Let the bad note pass, find the next clear arrow, and rebuild your timing from there.",
        ],
        bullets: [
          "Click the frame once before playing so keyboard input reaches the game.",
          "Keep your fingers resting near the four direction keys.",
          "Practice repeated left-right or up-down pairs until they feel even.",
        ],
      },
      {
        heading: "Strategy for harder note patterns",
        paragraphs: [
          "Harder FNF patterns usually fail players for two reasons: rushing before the note reaches the marker, or freezing when several arrows arrive close together. When a dense section starts, read it as small groups instead of one long wall of notes. Two-note and three-note chunks are easier to remember, and they help your hands stay in rhythm through a fast passage.",
          "If a song keeps ending in the same place, use that section as the practice target. Watch the order of the arrows, say the directions quietly if it helps, and focus on surviving the pattern before chasing a cleaner score. The health bar gives you room to recover, so a rough pass through a difficult sequence can be better than restarting after every imperfect moment.",
        ],
      },
    ],
    category: "arcade",
    tags: ["rhythm", "high-score", "retro", "action"],
    accent: "#ff4eb8",
    icon: "F",
    developer: "ninjamuffin99, PhantomArcade, The Funkin' Crew",
    technology: "Haxe OpenFL HTML5 iframe",
    platforms: ["Desktop", "Chromebook", "Tablet with keyboard"],
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-08",
    featured: true,
    trending: true,
    plays: 92800,
    image: "/images/games/fnf-unblocked-cover.webp",
    embedUrl: "https://jasongamesdev.github.io/friday-night-funkin/",
  },
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: string) {
  return games.filter((game) => game.category === category);
}

export function getGamesByTag(tag: string) {
  return games.filter((game) => game.tags.includes(tag));
}

export function getFeaturedGames() {
  return games.filter((game) => game.featured);
}

export function getTrendingGames() {
  return [...games]
    .filter((game) => game.trending)
    .sort((a, b) => b.plays - a.plays);
}

export function getPopularGames() {
  return [...games].sort((a, b) => b.plays - a.plays);
}

export function getNewGames() {
  return [...games].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getRelatedGames(game: Game, limit = 4) {
  return games
    .filter((candidate) => candidate.slug !== game.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) =>
        game.tags.includes(tag),
      ).length;
      const categoryScore = candidate.category === game.category ? 3 : 0;
      return { game: candidate, score: sharedTags + categoryScore };
    })
    .sort((a, b) => b.score - a.score || b.game.plays - a.game.plays)
    .slice(0, limit)
    .map(({ game: relatedGame }) => relatedGame);
}
