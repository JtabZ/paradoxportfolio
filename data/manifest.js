// data/manifest.js
//
// The single source of truth for the whole site. The homepage, every wing
// page, and the shared exhibit renderer all read from this file — nothing
// about the collection is ever hand-listed twice.
//
// To publish a finished exhibit, flip its `status` below from "coming-soon"
// to "built". That one edit is all that's needed anywhere in the site.
//
// One-liners here are original teasers for gallery cards, not quotes from
// the book. Fuller retellings ("The Case") live per-exhibit in each
// exhibits/<slug>/exhibit.js.

export const siteName = "Cabinet of Minds";

export const book = {
  title: "Philosophy of Mind: 50 Puzzles, Paradoxes, and Thought Experiments",
  authors: "Torin Alter, Robert J. Howell, and Amy Kind",
  series: "Puzzles, Paradoxes, and Thought Experiments in Philosophy",
  publisher: "Routledge",
  year: 2024,
  isbn: "978-1-032-01584-2",
  doi: "10.4324/9781003179191",
  url: "https://doi.org/10.4324/9781003179191",
};

export const wings = [
  {
    slug: "consciousness",
    name: "The Hall of Consciousness",
    part: "Part I — Consciousness and Dualism",
    blurb:
      "Where the lights first come on inside a mind: dualism, qualia, and the " +
      "plain strange fact that anything feels like anything at all.",
  },
  {
    slug: "machine",
    name: "The Machine Wing",
    part: "Part II — Physicalist Theories and the Metaphysics of Mind",
    blurb:
      "Gears, rule books, and neurons standing in for a mind. If a thought " +
      "is just physical process, where in the process is the thinking?",
  },
  {
    slug: "meaning",
    name: "The Archive of Meaning",
    part: "Part III — Content, Intentionality, and Representation",
    blurb:
      "Words, beliefs, and brains in vats. What makes a thought about " +
      "anything at all, and how could you ever be sure yours are?",
  },
  {
    slug: "perception",
    name: "The Gallery of Perception",
    part: "Part IV — Perception, Imagination, and Attention",
    blurb:
      "Colors never seen, shapes too complex to picture, changes too quick " +
      "to catch: the gap between what's out there and what registers in here.",
  },
  {
    slug: "self",
    name: "The Rooms of the Self",
    part: "Part V — Persons, Personal Identity, and the Self",
    blurb:
      "Split brains, swapped bodies, choices that change who's choosing: " +
      "the rooms where the self itself comes under question.",
  },
];

export const exhibits = [
  // ---- Part I — The Hall of Consciousness ------------------------------
  {
    number: 1,
    slug: "floating-man",
    title: "The Floating Man",
    wing: "consciousness",
    oneLiner:
      "Strip away every sense and every limb — would a self still be certain it existed?",
    status: "coming-soon",
  },
  {
    number: 2,
    slug: "leibnizs-mill",
    title: "Leibniz's Mill",
    wing: "consciousness",
    oneLiner:
      "Shrink down and walk through a brain like a mill full of gears — where, among the moving parts, is the thought?",
    status: "coming-soon",
  },
  {
    number: 3,
    slug: "disembodied-pain",
    title: "The Disembodied Pain",
    wing: "consciousness",
    oneLiner: "Can a pain exist without anyone in particular feeling it?",
    status: "coming-soon",
  },
  {
    number: 4,
    slug: "hard-problem-of-consciousness",
    title: "The Hard Problem of Consciousness",
    wing: "consciousness",
    oneLiner:
      "Explain every wire and signal in a brain and you still haven't explained why any of it feels like something.",
    status: "coming-soon",
  },
  {
    number: 5,
    slug: "what-its-like-to-be-a-bat",
    title: "What It's Like to Be a Bat",
    wing: "consciousness",
    oneLiner:
      "However well you map a bat's sonar, you still can't climb inside what its world feels like from the inside.",
    status: "built",
  },
  {
    number: 6,
    slug: "marys-room",
    title: "Mary and the Black-and-White Room",
    wing: "consciousness",
    oneLiner:
      "A scientist knows everything physical about color without ever having seen one — until the day she walks outside.",
    status: "built",
  },
  {
    number: 7,
    slug: "zombies",
    title: "Zombies",
    wing: "consciousness",
    oneLiner:
      "Picture someone physically identical to you, acting exactly as you act — except nothing is happening inside.",
    status: "built",
  },
  {
    number: 8,
    slug: "yogis",
    title: "Yogis",
    wing: "consciousness",
    oneLiner:
      "Some meditators report a state of pure awareness with no object in it at all — awareness of nothing but itself.",
    status: "coming-soon",
  },
  {
    number: 9,
    slug: "coffee-tasters",
    title: "The Coffee Tasters",
    wing: "consciousness",
    oneLiner:
      "Two tasters call the same coffee bitter, sort it the same way, act on it the same way — could it still taste completely different to each of them?",
    status: "coming-soon",
  },
  {
    number: 10,
    slug: "hornswoggle-problem",
    title: "The Hornswoggle Problem",
    wing: "consciousness",
    oneLiner:
      "What if the 'hard problem' of consciousness isn't hard at all — just a trick of language we've fallen for?",
    status: "coming-soon",
  },
  {
    number: 11,
    slug: "slugs-and-tiles",
    title: "The Slugs and the Tiles",
    wing: "consciousness",
    oneLiner:
      "A creature can be trained to sort tiles correctly without ever grasping what a tile is — so how much understanding does sorting prove?",
    status: "coming-soon",
  },

  // ---- Part II — The Machine Wing ---------------------------------------
  {
    number: 12,
    slug: "exclusion-problem",
    title: "The Exclusion Problem",
    wing: "machine",
    oneLiner:
      "If a thought is nothing but neurons firing, has the neuron-level story already done all the causal work?",
    status: "coming-soon",
  },
  {
    number: 13,
    slug: "special-sciences",
    title: "The Puzzle of the Special Sciences",
    wing: "machine",
    oneLiner:
      "Psychology, economics, biology: sciences built on patterns that never mention atoms. How do their laws relate to the physics underneath?",
    status: "coming-soon",
  },
  {
    number: 14,
    slug: "super-spartans",
    title: "The Super-Spartans",
    wing: "machine",
    oneLiner:
      "Imagine a people trained to feel pain but never show it, not even a flinch — would we still say they're in pain?",
    status: "coming-soon",
  },
  {
    number: 15,
    slug: "mad-pain-and-martian-pain",
    title: "Mad Pain and Martian Pain",
    wing: "machine",
    oneLiner:
      "One person's pain leaves them calm instead of distressed; a Martian's 'pain' inflates a bladder instead of firing neurons. Is either of them really in pain?",
    status: "coming-soon",
  },
  {
    number: 16,
    slug: "blockhead",
    title: "The Blockhead",
    wing: "machine",
    oneLiner:
      "A machine with a gigantic lookup table can hold a perfect conversation without a single thought passing through it.",
    status: "coming-soon",
  },
  {
    number: 17,
    slug: "imitation-game",
    title: "The Imitation Game",
    wing: "machine",
    oneLiner:
      "If you can't tell whether you're chatting with a person or a program, does the difference still matter?",
    status: "coming-soon",
  },
  {
    number: 18,
    slug: "chinese-room",
    title: "The Chinese Room",
    wing: "machine",
    oneLiner:
      "A man alone in a room shuffles symbols by rulebook and produces perfect answers in a language he doesn't understand a word of.",
    status: "coming-soon",
  },
  {
    number: 19,
    slug: "eloise-and-the-tree",
    title: "Eloise and the Tree",
    wing: "machine",
    oneLiner:
      "Two people can share every belief about the tree in front of them and still, in some deeper sense, mean different things by it.",
    status: "coming-soon",
  },
  {
    number: 20,
    slug: "inverted-qualia",
    title: "Inverted Qualia",
    wing: "machine",
    oneLiner:
      "What if someone's entire color palette were swapped, red for green, blue for yellow, and nothing about their behavior gave it away?",
    status: "coming-soon",
  },
  {
    number: 21,
    slug: "hempels-dilemma",
    title: "Hempel's Dilemma",
    wing: "machine",
    oneLiner:
      "Define the mind in terms of 'the physical,' and you have to ask: today's physics, or whatever physics turns out to be tomorrow?",
    status: "coming-soon",
  },
  {
    number: 22,
    slug: "brains-within-brains",
    title: "Brains within Brains",
    wing: "machine",
    oneLiner:
      "Replace one neuron at a time with a tiny brain doing the same job — at what point, if any, does something new start thinking?",
    status: "coming-soon",
  },

  // ---- Part III — The Archive of Meaning --------------------------------
  {
    number: 23,
    slug: "rabbits-and-rabbit-stages",
    title: "Rabbits and Rabbit Stages",
    wing: "meaning",
    oneLiner:
      "Point at a running rabbit and say 'rabbit' — how could anyone watching be sure you didn't mean 'a momentary rabbit-shaped slice of time'?",
    status: "coming-soon",
  },
  {
    number: 24,
    slug: "swampman",
    title: "Swampman",
    wing: "meaning",
    oneLiner:
      "Lightning strikes a swamp and by pure chance assembles an exact copy of a man just killed nearby. He talks, walks, remembers a life he never lived — does any of it mean anything?",
    status: "coming-soon",
  },
  {
    number: 25,
    slug: "twin-earth-and-arthritis-man",
    title: "Twin Earth and Arthritis Man",
    wing: "meaning",
    oneLiner:
      "On a distant planet, the clear drinkable liquid everyone calls 'water' is a completely different substance. Same word, same beliefs — but are they thinking about the same thing?",
    status: "coming-soon",
  },
  {
    number: 26,
    slug: "ottos-notebook",
    title: "Otto's Notebook",
    wing: "meaning",
    oneLiner:
      "A man with memory loss consults a notebook the way the rest of us consult memory — is the notebook part of his mind?",
    status: "coming-soon",
  },
  {
    number: 27,
    slug: "brain-in-a-vat",
    title: "The Brain in a Vat",
    wing: "meaning",
    oneLiner:
      "Every signal your brain has ever received could, in principle, be fed to it by a machine instead of a body in a world.",
    status: "coming-soon",
  },
  {
    number: 28,
    slug: "puzzling-pierre",
    title: "Puzzling Pierre",
    wing: "meaning",
    oneLiner:
      "A man finds a city lovely under one name and dreary under another, unaware they're the same place. One contradictory belief, or two perfectly sensible ones?",
    status: "coming-soon",
  },
  {
    number: 29,
    slug: "shopping-list",
    title: "The Shopping List",
    wing: "meaning",
    oneLiner:
      "A list you follow at the store and a list a detective compiles by watching you shop could be word-for-word identical — and still point in opposite directions.",
    status: "coming-soon",
  },

  // ---- Part IV — The Gallery of Perception ------------------------------
  {
    number: 30,
    slug: "molyneuxs-problem",
    title: "Molyneux's Problem",
    wing: "perception",
    oneLiner:
      "Someone blind from birth learns to tell a cube from a sphere by touch. The moment they can see, would they recognize either one by sight alone?",
    status: "coming-soon",
  },
  {
    number: 31,
    slug: "missing-shade-of-blue",
    title: "The Missing Shade of Blue",
    wing: "perception",
    oneLiner:
      "Show someone every shade of blue but one, arranged in order, and ask them to picture the gap — can imagination fill in a color it has never seen?",
    status: "coming-soon",
  },
  {
    number: 32,
    slug: "imagining-chiliagons",
    title: "Imagining Chiliagons",
    wing: "perception",
    oneLiner:
      "Try to picture a thousand-sided shape clearly enough to count the sides in your mind's eye.",
    status: "coming-soon",
  },
  {
    number: 33,
    slug: "color-swatches-and-speckled-hens",
    title: "Color Swatches and Speckled Hens",
    wing: "perception",
    oneLiner:
      "Glance at a speckled hen and you can't count the speckles — does your fleeting visual experience have a precise number of them in it, or not?",
    status: "coming-soon",
  },
  {
    number: 34,
    slug: "skywalk",
    title: "The Skywalk",
    wing: "perception",
    oneLiner:
      "Standing on a glass floor a thousand feet up, you know perfectly well it will hold — and your body refuses to believe you anyway.",
    status: "coming-soon",
  },
  {
    number: 35,
    slug: "pine-trees-and-cyrillic-text",
    title: "Pine Trees and Cyrillic Text",
    wing: "perception",
    oneLiner:
      "A forester sees distinct species where you see 'trees'; a Russian reader sees words where you see shapes. Does knowledge change what you perceive, or only what you notice?",
    status: "coming-soon",
  },
  {
    number: 36,
    slug: "synesthesia",
    title: "Synesthesia",
    wing: "perception",
    oneLiner:
      "For some people a sound arrives already tinted with a color, or a number always wears the same hue — one sense bleeding into another.",
    status: "coming-soon",
  },
  {
    number: 37,
    slug: "change-blindness",
    title: "Change Blindness",
    wing: "perception",
    oneLiner:
      "A whole object in a scene can change color, move, or vanish between two flickers, right in front of you, and you may never notice it happened.",
    status: "coming-soon",
  },
  {
    number: 38,
    slug: "blindsight-distracted-driving-and-pneumatic-drills",
    title: "Blindsight, Distracted Driving, and Pneumatic Drills",
    wing: "perception",
    oneLiner:
      "Some people can catch a ball thrown into a part of their vision they insist they cannot see at all — as if part of them is looking without the rest of them knowing it.",
    status: "coming-soon",
  },

  // ---- Part V — The Rooms of the Self ------------------------------------
  {
    number: 39,
    slug: "prince-and-cobbler",
    title: "The Prince and the Cobbler",
    wing: "self",
    oneLiner:
      "Wake up tomorrow with a cobbler's body but every memory and habit of a prince — which one did you become?",
    status: "coming-soon",
  },
  {
    number: 40,
    slug: "chariot-and-candle",
    title: "The Chariot and the Candle",
    wing: "self",
    oneLiner:
      "Take a chariot apart piece by piece and at no point do you find 'the chariot' among the wheels and boards. Is a self anything more than its parts, arranged a certain way?",
    status: "coming-soon",
  },
  {
    number: 41,
    slug: "body-swap-puzzle",
    title: "The Body-Swap Puzzle",
    wing: "self",
    oneLiner:
      "If your mind could be moved into an entirely different body tomorrow, would you have survived the trip, or would someone else be wearing your memories?",
    status: "coming-soon",
  },
  {
    number: 42,
    slug: "mind-uploading",
    title: "Mind Uploading",
    wing: "self",
    oneLiner:
      "Scan a brain in perfect detail and run the pattern on a machine instead of on neurons — is whatever wakes up on the other side still you?",
    status: "coming-soon",
  },
  {
    number: 43,
    slug: "too-many-minds",
    title: "The Puzzle of Too Many Minds",
    wing: "self",
    oneLiner:
      "If a person is really a brain sitting inside a body full of brain, then wherever you point, there may be more than one thinker to count.",
    status: "coming-soon",
  },
  {
    number: 44,
    slug: "split-brains-and-the-unity-puzzle",
    title: "Split Brains and the Unity Puzzle",
    wing: "self",
    oneLiner:
      "Sever the bridge between the two halves of a brain, and each half can be shown to know, want, and choose things the other half never learns about.",
    status: "coming-soon",
  },
  {
    number: 45,
    slug: "sharing-feelings-combining-minds",
    title: "Sharing Feelings, Combining Minds",
    wing: "self",
    oneLiner:
      "Could two separate minds be wired closely enough to feel a single sensation together, rather than just comparing notes about it afterward?",
    status: "coming-soon",
  },
  {
    number: 46,
    slug: "elusive-self",
    title: "The Elusive Self",
    wing: "self",
    oneLiner:
      "Look inward as carefully as you like and try to catch the 'self' doing the looking, rather than one more thing being looked at.",
    status: "coming-soon",
  },
  {
    number: 47,
    slug: "essential-indexical",
    title: "The Essential Indexical",
    wing: "self",
    oneLiner:
      "Knowing every fact in the world about a person named you isn't the same as knowing that you are that person.",
    status: "coming-soon",
  },
  {
    number: 48,
    slug: "queen-and-the-gametes",
    title: "The Queen and the Gametes",
    wing: "self",
    oneLiner:
      "If you'd come from a different sperm and egg entirely, would that still have been you, only different — or simply someone else who never got to be you?",
    status: "coming-soon",
  },
  {
    number: 49,
    slug: "trekkie-mr-oreo-and-narrative-conceptions-of-the-self",
    title: "The Trekkie, Mr. Oreo, and Narrative Conceptions of the Self",
    wing: "self",
    oneLiner:
      "A transporter takes you apart atom by atom and reassembles an exact copy elsewhere. Did you step through, or did you die and get replaced by someone who thinks they're you?",
    status: "coming-soon",
  },
  {
    number: 50,
    slug: "transformative-choice",
    title: "The Puzzle of Transformative Choice",
    wing: "self",
    oneLiner:
      "Some choices change you so deeply that the person who'd have to weigh the decision doesn't exist yet. How can anyone make them rationally in advance?",
    status: "coming-soon",
  },
];

// ---- Convenience helpers, shared by every render-*.js -----------------

export function exhibitsForWing(wingSlug) {
  return exhibits
    .filter((e) => e.wing === wingSlug)
    .sort((a, b) => a.number - b.number);
}

export function wingBySlug(slug) {
  return wings.find((w) => w.slug === slug) || null;
}

export function exhibitBySlug(slug) {
  return exhibits.find((e) => e.slug === slug) || null;
}

export function builtCount() {
  return exhibits.filter((e) => e.status === "built").length;
}

// Previous/next built-or-not exhibit in overall number order, for the
// exhibit page's footer navigation.
export function neighbors(slug) {
  const ordered = exhibits.slice().sort((a, b) => a.number - b.number);
  const i = ordered.findIndex((e) => e.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: ordered[i - 1] || null,
    next: ordered[i + 1] || null,
  };
}
