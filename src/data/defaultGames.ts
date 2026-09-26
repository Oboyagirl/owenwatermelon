import { Game } from '../types/game';
import ubgGamesList from './ubgFilteredGames.json';

const CURATED_GAMES: Game[] = [
  {
    id: "granny",
    source: "unblocked",
    title: "Granny",
    description: "Welcome to Granny. Escape her creepy house alive within five days. Move silently, search cabinets for keys, and don't make any noise!",
    category: "Action",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Granny/Granny.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Granny/Granny.png",
    mirrors: ["https://freeonlinewebtools.github.io/gamelist4.github.io/Granny/", "https://ubghyper.github.io/GameList.github.io/Granny/"],
    
    tags: ["Horror", "Escape", "Survival", "3D", "Granny"],
    rating: 4.8,
    plays: 62400,
    author: "DVloper",
    featured: true,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist4.github.io/Granny/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist4.github.io/Granny/" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen=""></iframe>`,
    controls: [
      { key: "W / A / S / D", action: "Walk & Move" },
      { key: "Mouse", action: "Look & Turn" },
      { key: "E / Click", action: "Interact & Open Doors" },
      { key: "C", action: "Crouch & Hide" }
    ]
  },
  {
    id: "basket-random",
    source: "crazygames",
    title: "Basket Random",
    description: "Wacky ragdoll two-player basketball with physics-defying players, changing balls, and unpredictable courts.",
    category: "Sports",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Basket-Random/basketrandom.jpg",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Basket-Random/splash.jpeg",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/Basket-Random/", "https://freeonlinewebtools.github.io/gamelist4.github.io/Basket-Random/", "https://ubghyper.github.io/GameList.github.io/Basket-Random/"],
    
    tags: ["Basketball", "2 Player", "Ragdoll", "Sports", "Multiplayer"],
    rating: 4.9,
    plays: 53100,
    author: "RHM Interactive",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Basket-Random/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Basket-Random/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "W", action: "Player 1 Jump & Shoot" },
      { key: "Up Arrow", action: "Player 2 Jump & Shoot" }
    ]
  },
  {
    id: "fnaf-1",
    source: "unblocked",
    title: "Five Nights at Freddy's (FNAF 1)",
    description: "Survive the night shift as the security guard at Freddy Fazbear's Pizza. Monitor surveillance cameras and conserve power before animatronics enter the office!",
    category: "Action",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/FNAF-1/FNAF-1.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/FNAF-1/FNAF-1.png",
    mirrors: ["https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-1/", "https://ubghyper.github.io/GameList.github.io/FNAF-1/"],
    
    tags: ["Horror", "Survival", "FNAF", "Strategy", "Classic"],
    rating: 4.9,
    plays: 78500,
    author: "Scott Cawthon",
    featured: true,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-1/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-1/" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen=""></iframe>`,
    controls: [
      { key: "Mouse Move", action: "Pan Office Left & Right" },
      { key: "Mouse Hover Bottom", action: "Open Surveillance Monitor" },
      { key: "Door Buttons", action: "Toggle Red Doors & Hall Lights" }
    ]
  },
  {
    id: "retro-bowl",
    source: "unblocked",
    title: "Retro Bowl",
    description: "Manage your NFL team, call tactical audibles, pass bullet balls, and lead your franchise to victory in this beloved 8-bit retro football sim.",
    category: "Sports",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Retro-Bowl/retrobowl.jpg",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Retro-Bowl/html5game/splash.png",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/Retro-Bowl/", "https://freeonlinewebtools.github.io/gamelist8.github.io/Retro-Bowl/", "https://ubghyper.github.io/GameList.github.io/Retro-Bowl/"],
    
    tags: ["Football", "Sports", "Pixel", "NFL", "Retro Bowl"],
    rating: 4.9,
    plays: 48920,
    author: "New Star Games",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Retro-Bowl/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Retro-Bowl/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse Drag & Release", action: "Pass & Aim Football" },
      { key: "W / S or Up / Down", action: "Dodge Tackles & Stiff Arm" },
      { key: "Click / Tap", action: "Dive & Snap" }
    ]
  },
  {
    id: "drive-mad",
    source: "poki",
    title: "Drive Mad",
    description: "Navigate tricky obstacle courses in this physics-based driving game! Balance your truck carefully to reach the finish line without flipping.",
    category: "Racing",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Drive-Mad/logo.jpg",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Drive-Mad/webapp/cover.jpg",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/Drive-Mad/", "https://freeonlinewebtools.github.io/gamelist4.github.io/Drive-Mad/", "https://ubghyper.github.io/GameList.github.io/Drive-Mad/"],
    
    tags: ["Racing", "Physics", "Truck", "Driving", "Popular"],
    rating: 4.9,
    plays: 89400,
    author: "Martin Magni",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Drive-Mad/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Drive-Mad/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "W / D or Up / Right", action: "Drive Forward / Steer" },
      { key: "S / A or Down / Left", action: "Brake / Reverse" }
    ]
  },
  {
    id: "slope",
    source: "crazygames",
    title: "Slope",
    description: "Roll an ultra-fast ball down a futuristic 3D neon tunnel course. Dodge obstacles, adjust your speed, and test your lightning-quick reflexes!",
    category: "Action",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Slope/slope.jpg",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Slope/slope.jpg",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/Slope/", "https://ubghyper.github.io/g/Slope/", "https://freeonlinewebtools.github.io/gamelist4.github.io/Slope/"],
    
    tags: ["3D", "Runner", "Reflex", "Neon", "Arcade"],
    rating: 4.9,
    plays: 95200,
    author: "Rob Kay",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Slope/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Slope/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "A / D or ← / →", action: "Steer Ball Left & Right" }
    ]
  },
  {
    id: "subway-surfers",
    source: "poki",
    title: "Subway Surfers",
    description: "Dash along the subway tracks, dodge trains, leap over obstacles, and escape the grumpy inspector and his dog in the world's most famous endless runner!",
    category: "Action",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Subway-Surfers/Subway-Surfers.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Subway-Surfers/Subway-Surfers.png",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/Subway-Surfers/", "https://ubghyper.github.io/g/Subway-Surfers/"],
    
    tags: ["Endless Runner", "Action", "3D", "Classic"],
    rating: 4.9,
    plays: 124000,
    author: "SYBO Games",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Subway-Surfers/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Subway-Surfers/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "← / →", action: "Move Left / Right" },
      { key: "↑ / Space", action: "Jump Over Barriers" },
      { key: "↓", action: "Slide Under Obstacles" }
    ]
  },
  {
    id: "bitlife",
    source: "crazygames",
    title: "Bitlife Life Simulator",
    description: "How will you live your BitLife? Make choices from birth through old age: study hard, fall in love, commit crimes, or become a billionaire!",
    category: "Casual",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Bitlife/bitlife.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Bitlife/bitlife.png",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/Bitlife/", "https://ubghyper.github.io/g/Bitlife/"],
    
    tags: ["Simulation", "RPG", "Choice", "Story"],
    rating: 4.8,
    plays: 87100,
    author: "Candywriter",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Bitlife/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Bitlife/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse Click", action: "Make Life Decisions" }
    ]
  },
  {
    id: "1v1-lol",
    source: "crazygames",
    title: "1v1.LOL",
    description: "Competitive third-person building simulator and shooter. Practice fast box fights, edit stairs, and battle players in 1v1 arenas.",
    category: "Action",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/1v1-LOL/1v1-LOL.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/1v1-LOL/1v1-LOL.png",
    mirrors: ["https://ubghyper.github.io/GameList.github.io/1v1-LOL/", "https://freeonlinewebtools.github.io/gamelist7.github.io/1v1-LOL/"],
    
    tags: ["Shooter", "Building", "Multiplayer", "Battle Royale", "1v1"],
    rating: 4.9,
    plays: 110000,
    author: "JustPlay.LOL",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/1v1-LOL/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/1v1-LOL/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "WASD", action: "Move Character" },
      { key: "Left Click", action: "Shoot / Build" },
      { key: "Z / X / C / V", action: "Select Wall / Floor / Stairs" }
    ]
  },
  {
    id: "cuphead",
    source: "unblocked",
    title: "Cuphead",
    description: "The classic boss rush run-and-gun game inspired by 1930s rubber hose animation. Dodge projectiles, learn patterns, and defeat epic bosses.",
    category: "Action",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Cuphead/cuphead.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Cuphead/cuphead.png",
    mirrors: ["https://freeonlinewebtools.github.io/gamelist8.github.io/Cuphead/", "https://ubghyper.github.io/GameList.github.io/Cuphead/"],
    
    tags: ["Action", "Boss", "Retro", "Difficult"],
    rating: 4.9,
    plays: 68000,
    author: "Studio MDHR",
    featured: true,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist8.github.io/Cuphead/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist8.github.io/Cuphead/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Arrow Keys", action: "Move & Duck" },
      { key: "Z", action: "Jump" },
      { key: "X", action: "Shoot Finger Gun" }
    ]
  },
  {
    id: "minecraft-1-12",
    source: "unblocked",
    title: "Minecraft 1.12.2 (Eaglercraft)",
    description: "Full Minecraft running in your browser: mine diamonds, craft tools, build huge structures, and play survival or creative mode!",
    category: "Sandbox",
    thumbnail: "https://freeonlinewebtools.github.io/gamelist9.github.io/Minecraft/minecraft.png",
    
    tags: ["Sandbox", "Building", "Survival", "Crafting", "Minecraft"],
    rating: 5.0,
    plays: 145000,
    author: "lax1dude / Mojang",
    featured: true,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist9.github.io/Minecraft/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist9.github.io/Minecraft/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "WASD", action: "Walk & Strafe" },
      { key: "Space", action: "Jump" },
      { key: "Left Click", action: "Break Block / Attack" },
      { key: "Right Click", action: "Place Block / Use" },
      { key: "E", action: "Open Inventory" }
    ]
  },
  {
    id: "granny-2",
    source: "unblocked",
    title: "Granny: Chapter Two",
    description: "Granny and Grandpa keep you locked in their house this time. To survive, you have to try to get out of their house, but be careful and quiet!",
    category: "Action",
    thumbnail: "https://freeonlinewebtools.github.io/gamelist4.github.io/Granny-2/Granny-2.png",
    
    tags: ["Horror", "Escape", "Survival", "3D", "Granny"],
    rating: 4.9,
    plays: 58200,
    author: "DVloper",
    featured: false,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist4.github.io/Granny-2/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist4.github.io/Granny-2/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "WASD", action: "Walk" },
      { key: "Mouse", action: "Look Around" },
      { key: "E", action: "Interact" },
      { key: "C", action: "Crouch" }
    ]
  },
  {
    id: "fnaf-2",
    source: "unblocked",
    title: "Five Nights at Freddy's 2",
    description: "Welcome back to the new and improved Freddy Fazbear's Pizza! The old animatronics are joined by a new cast. Put on your Freddy Fazbear head to trick them!",
    category: "Action",
    thumbnail: "https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-2/FNAF-2.png",
    
    tags: ["Horror", "FNAF", "Survival", "Strategy"],
    rating: 4.9,
    plays: 72100,
    author: "Scott Cawthon",
    featured: false,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-2/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-2/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse Hover", action: "Pan Office" },
      { key: "Space / Ctrl", action: "Flashlight" },
      { key: "Bottom Hover", action: "Wear Mask / Monitor" }
    ]
  },
  {
    id: "fnaf-3",
    source: "unblocked",
    title: "Five Nights at Freddy's 3",
    description: "Thirty years after Freddy Fazbear's Pizza closed its doors, the events that took place there have become nothing more than a rumor. Survive Springtrap!",
    category: "Action",
    thumbnail: "https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-3/FNAF-3.png",
    
    tags: ["Horror", "FNAF", "Survival", "Strategy"],
    rating: 4.8,
    plays: 64900,
    author: "Scott Cawthon",
    featured: false,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-3/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist8.github.io/FNAF-3/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse Hover", action: "Pan Room" },
      { key: "Panel Click", action: "Reboot Systems / Audio" }
    ]
  },
  {
    id: "fnaf-4",
    source: "unblocked",
    title: "Five Nights at Freddy's 4",
    description: "The final chapter of the Five Nights at Freddy's original story. You must defend yourself against Nightmare Freddy, Chica, Bonnie, and Foxy lurking in your bedroom!",
    category: "Action",
    thumbnail: "https://freeonlinewebtools.github.io/gamelist6.github.io/FNAF-4/FNAF-4.png",
    
    tags: ["Horror", "FNAF", "Survival", "Darkness"],
    rating: 4.9,
    plays: 69100,
    author: "Scott Cawthon",
    featured: false,
    iframeSrc: "https://freeonlinewebtools.github.io/gamelist6.github.io/FNAF-4/",
    iframeCode: `<iframe src="https://freeonlinewebtools.github.io/gamelist6.github.io/FNAF-4/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse Click", action: "Run to Doors / Bed" },
      { key: "Ctrl", action: "Flashlight" },
      { key: "Shift", action: "Hold Door Shut" }
    ]
  },
  {
    id: "sprunki",
    source: "poki",
    title: "Sprunki Incredibox",
    description: "The viral musical rhythm game with quirky animated beatboxers and dark horror transformations!",
    category: "Arcade",
    thumbnail: "https://ubghyper.github.io/GameList.github.io/Sprunki/sprunki.png",
    
    tags: ["Music", "Rhythm", "Sprunki", "Beatbox"],
    rating: 4.9,
    plays: 93400,
    author: "So Far So Good / NyankoBfLol",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Sprunki/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Sprunki/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse Drag", action: "Drag Characters & Outfits" }
    ]
  },
  {
    id: "level-devil",
    source: "poki",
    title: "Level Devil",
    description: "A deceptively tricky platformer where floors collapse, spikes appear out of nowhere, and the portals move when you get close!",
    category: "Action",
    thumbnail: "https://ubghyper.github.io/GameList.github.io/Level-Devil/level-devil.png",
    
    tags: ["Platformer", "Troll", "Puzzle", "Reflex"],
    rating: 4.9,
    plays: 81200,
    author: "Unept",
    featured: true,
    iframeSrc: "https://ubghyper.github.io/GameList.github.io/Level-Devil/",
    iframeCode: `<iframe src="https://ubghyper.github.io/GameList.github.io/Level-Devil/" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; gamepad; pointer-lock" allowfullscreen></iframe>`,
    controls: [
      { key: "A / D or ← / →", action: "Move" },
      { key: "Space or W or ↑", action: "Jump" }
    ]
  },
  {
    id: "watermelon-merge",
    source: "original",
    title: "Watermelon Merge (Suika)",
    description: "Drop and merge delicious fruits to evolve from tiny cherries all the way to the Giant Watermelon!",
    category: "Puzzle",
    thumbnail: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/SuikaGame/suika.png",
    banner: "https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/SuikaGame/suika.png",
    
    tags: ["Physics", "Merge", "Watermelon", "Casual"],
    rating: 4.9,
    plays: 24890,
    author: "Owen Watermelon Studios",
    featured: true,
    iframeSrc: "games/watermelon-merge.html",
    iframeCode: `<iframe src="/games/watermelon-merge.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse / Touch", action: "Aim & Drop Fruit" }
    ]
  },
  {
    id: "cyber-snake",
    "title": "Cyber Snake 3000",
    description: "Navigate the neon grid, hunt glowing watermelon bites, and grow into an unstoppable cyber serpent.",
    category: "Arcade",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23092015'/><rect x='20' y='40' width='16' height='16' fill='%2310b981'/><rect x='40' y='40' width='16' height='16' fill='%2310b981'/><rect x='60' y='40' width='16' height='16' fill='%2334d399'/><text x='50' y='85' font-size='20' text-anchor='middle'>🐍</text></svg>",
    tags: ["Retro", "Classic", "Reflex", "Snake"],
    rating: 4.8,
    plays: 19430,
    author: "Retro Arcade Labs",
    featured: true,
    iframeSrc: "games/snake.html",
    iframeCode: `<iframe src="/games/snake.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Arrow Keys / WASD", action: "Change Direction" },
      { key: "Space", action: "Restart" }
    ]
  },
  {
    id: "tetrix-blocks",
    source: "original",
    title: "Tetrix Block Fall",
    description: "The quintessential falling tetromino blocks challenge with clean neon rendering, soft drop, and hard drop.",
    category: "Puzzle",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2308160f'/><rect x='30' y='30' width='18' height='18' fill='%2306b6d4'/><rect x='50' y='30' width='18' height='18' fill='%2306b6d4'/><rect x='50' y='50' width='18' height='18' fill='%23ff2d55'/><rect x='30' y='70' width='18' height='18' fill='%2310b981'/></svg>",
    tags: ["Tetris", "Blocks", "Logic", "Strategy"],
    rating: 4.9,
    plays: 31200,
    author: "Pixel Block Syndicate",
    featured: true,
    iframeSrc: "games/tetris.html",
    iframeCode: `<iframe src="/games/tetris.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "← / →", action: "Move Piece" },
      { key: "↑ / W", action: "Rotate" },
      { key: "↓ / S", action: "Soft Drop" },
      { key: "Space", action: "Hard Drop" }
    ]
  },
  {
    id: "neon-2048",
    source: "original",
    title: "2048 Neon Watermelon",
    description: "Slide the numbers, double your power, and combine tiles until you unlock the mythical 2048 block.",
    category: "Puzzle",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230c2016'/><rect x='15' y='15' width='70' height='70' rx='12' fill='%2310b981'/><text x='50' y='58' font-size='26' font-family='sans-serif' font-weight='bold' text-anchor='middle' fill='%23064e3b'>2048</text></svg>",
    tags: ["Numbers", "Brain", "Math", "Casual"],
    rating: 4.7,
    plays: 16800,
    author: "Gabriele Cirulli & Owen",
    featured: false,
    iframeSrc: "games/2048.html",
    iframeCode: `<iframe src="/games/2048.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Arrow Keys / WASD", action: "Slide Tiles" },
      { key: "Swipe", action: "Touch Screen Slide" }
    ]
  },
  {
    id: "brick-smasher",
    source: "original",
    title: "Watermelon Breakout",
    description: "Smash layers of juicy neon bricks, bounce the high-velocity orb, and test your paddle coordination.",
    category: "Arcade",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2308160f'/><rect x='15' y='20' width='30' height='12' fill='%23ff2d55'/><rect x='52' y='20' width='30' height='12' fill='%23fb923c'/><circle cx='50' cy='55' r='8' fill='%2310b981'/><rect x='30' y='80' width='40' height='10' fill='%23ff2d55'/></svg>",
    tags: ["Brick", "Breakout", "Paddle", "Action"],
    rating: 4.6,
    plays: 14320,
    author: "Atari Inspired",
    featured: false,
    iframeSrc: "games/breakout.html",
    iframeCode: `<iframe src="/games/breakout.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Mouse / Touch", action: "Move Paddle" }
    ]
  },
  {
    id: "flappy-melon",
    source: "original",
    title: "Flappy Melon Flight",
    description: "Flap your watermelon slice through dangerous bamboo vines and avoid crashing to claim the gold medal.",
    category: "Casual",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23092015'/><text x='50' y='60' font-size='48' text-anchor='middle'>🍉</text></svg>",
    tags: ["Flappy", "Skill", "Hard", "Casual"],
    rating: 4.5,
    plays: 22100,
    author: "Dong Nguyen Homage",
    featured: false,
    iframeSrc: "games/flappy.html",
    iframeCode: `<iframe src="/games/flappy.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "Space / Tap", action: "Flap Wings" }
    ]
  },
  {
    id: "space-defender",
    source: "original",
    title: "Space Defender 8-Bit",
    description: "Defend the sector against alien invaders and rogue asteroids in this classic top-down space blaster.",
    category: "Action",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2306110b'/><polygon points='50,20 30,70 70,70' fill='%2310b981'/><circle cx='50' cy='50' r='5' fill='%23ff2d55'/><text x='50' y='92' font-size='14' text-anchor='middle'>👾</text></svg>",
    tags: ["Space", "Shooter", "Retro", "Aliens"],
    rating: 4.8,
    plays: 18900,
    author: "Galactic Studios",
    featured: false,
    iframeSrc: "games/space.html",
    iframeCode: `<iframe src="/games/space.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "← / → / WASD", action: "Move Starship" },
      { key: "Space", action: "Fire Laser Blaster" }
    ]
  },
  {
    id: "cyber-pong",
    source: "original",
    title: "Cyber Pong (1P & 2P)",
    description: "The grandfather of electronic games revamped with neon watermelon aesthetics and 2-player local battle mode.",
    category: "Sports",
    thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2306110b'/><line x1='50' y1='10' x2='50' y2='90' stroke='%2316402a' stroke-dasharray='5,5'/><rect x='15' y='35' width='6' height='30' fill='%2310b981'/><rect x='80' y='45' width='6' height='30' fill='%23ff2d55'/><circle cx='40' cy='50' r='4' fill='%23fff'/></svg>",
    tags: ["2 Player", "Sports", "Arcade", "Multiplayer"],
    rating: 4.7,
    plays: 12400,
    author: "Owen Watermelon",
    featured: false,
    iframeSrc: "games/pong.html",
    iframeCode: `<iframe src="/games/pong.html" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    controls: [
      { key: "W / S or Mouse", action: "Player 1 Paddle" },
      { key: "↑ / ↓", action: "Player 2 Paddle" }
    ]
  }
];

export const DEFAULT_GAMES: Game[] = [
  ...CURATED_GAMES,
  ...(ubgGamesList as unknown as Game[])
];
