// exhibit.js — Mary and the Black-and-White Room
//
// Content model consumed by render-exhibit.js. All prose below is original —
// a retelling of Frank Jackson's knowledge argument (1982), not a quotation
// from the book. The argument structure follows the book's chapter closely;
// the wording is ours.

export const exhibit = {
  // hero defaults to "piece" — Mary's toggle piece sits beside the title.
  heroLine: "She knows every physical fact about color — except <em>what red looks like</em>.",
  titleEffect: "color-flood",

  pieceHint: "The room is grayscale. Step outside, then step back in.",

  stakes: `
    <p>If physicalism is true, every fact about the world is a physical
    fact. Physical facts, most agree, are the kind of thing science reveals
    — and what science reveals is objective: understanding it takes
    intelligence, not any particular sense organ. A colorblind physicist can
    understand everything physics says about wavelengths of light just as
    well as someone who can see color. If that's right, a complete physical
    description of the world should leave nothing out. Mary is built to test
    whether it really does.</p>
  `,

  case: `
    <p>Picture a brilliant scientist named Mary, living in a future where
    physics, chemistry, and neuroscience have been completed — every
    physical fact about the world has been discovered. Mary has spent her
    entire life inside a room with no color in it at all: black, white, and
    every shade of gray between. She isn't colorblind; there simply were
    never any colors in her world to see. She learns everything there is to
    know about color vision from black-and-white books and a black-and-white
    monitor — the exact wavelength of every hue, precisely how a healthy eye
    and brain respond to each one. She is not merely brilliant but a perfect
    reasoner, with all the time she needs. By any reasonable measure, she
    comes to know the complete physical truth about color.</p>

    <p>One day she is finally released, and sees color for the first time —
    a red apple in the sunlight, say. Does she learn something new in that
    moment? It certainly seems like she does. She already knew every
    physical fact about how color vision works; she doesn't learn more
    science. But she does seem to learn something she didn't have before —
    something color-sighted people outside the room already knew. She learns
    what it's like to see in color.</p>
  `,

  argument: {
    steps: [
      "If physicalism is true, all information is physical information.",
      "Before leaving the room, Mary already knows the complete physical truth about color vision.",
      "So if physicalism is true, Mary should already know everything there is to know about seeing in color — before she ever leaves.",
      "But she doesn't: on seeing red for the first time, she learns something she didn't know in the room.",
      "Whatever she learns, then, cannot be physical information, since she already had all of that.",
    ],
    conclusion:
      "If there is non-physical information — information Mary gains only by seeing color, which no amount of physical knowledge supplied — then not all information is physical, and physicalism is false.",
  },

  tension: [
    {
      targets: "Accepts the argument",
      label: "Something is missing from the physical story",
      text: "Jackson himself first took this as a refutation of physicalism, defending a view called epiphenomenalist property dualism: the qualities of experience — qualia — are real, non-physical properties with physical causes but no physical effects of their own.",
    },
    {
      targets: "Rejects the setup",
      label: "She never knew ALL the physical facts",
      text: "Some deny Mary really learns every physical fact in the room. She may learn everything expressible in objective, scientific language — but if some physical information can't be put into that language, she was missing it all along, and the setup never delivers what it promises.",
      reply:
        "Proponents of the argument reply that this kind of non-objective, subjective information can't be squared with a core physicalist commitment: that all information ultimately traces back to what fundamental physics reveals.",
    },
    {
      targets: "Denies she learns anything",
      label: "She might not be fooled at all",
      text: "Daniel Dennett imagines playing a trick on Mary: handing her a banana painted blue as she leaves. Would she be fooled into thinking 'that's what yellow looks like'? Probably not — she's a perfect reasoner, and she could work out from the banana's physical properties what color it actually reflects. If she can out-reason the trick, maybe nothing about leaving the room really teaches her anything new after all.",
      reply:
        "Others reply that this misses the point: seeing the banana still gives Mary new phenomenal information, whether or not she correctly links it to the word 'yellow.' That's all the knowledge argument needs.",
    },
    {
      targets: "Rejects 'new fact'",
      label: "She gains an ability, not a fact",
      text: "A third response leans on the gap between knowing-that (facts) and knowing-how (abilities) — knowing that riding a bike requires pedaling versus actually knowing how to ride one. On this view, Mary doesn't gain a new fact when she leaves; she gains new abilities, like the ability to recognize or imagine red. Physicalism says nothing about what a person can or can't imagine, so no fact is left unaccounted for.",
      reply:
        "Opponents argue knowing what something is like can't be reduced to possessing abilities — or if it can, those abilities themselves can't be had without possessing some new information.",
    },
    {
      targets: "Rejects 'new fact'",
      label: "Same fact, new concept",
      text: "A fourth response — the phenomenal concept strategy — holds that seeing color doesn't give Mary new information, only new conceptual resources for thinking about facts she already had. Nothing about the nature of experience is left out; only our concepts for it change.",
      reply:
        "Critics argue this just relocates the puzzle rather than solving it: even once Mary has her new concepts, she still can't tell, from a complete physical description of a bat or a Martian, whether their experience is what she'd call red or green.",
    },
  ],

  note: `
    <p>In a notable twist, Jackson himself later changed his mind and came to
    accept physicalism. He now traces the pull of the original argument to a
    simple oversight: seeing color is itself a way of representing the
    world, and representing the world — in his later view — can be fully
    explained in physical terms.</p>
  `,

  furtherReading: [
    {
      label: "Jackson, Frank — \"Epiphenomenal Qualia\" (1982)",
      url: "https://en.wikipedia.org/wiki/Epiphenomenal_Qualia",
      note: "the canonical presentation this exhibit retells",
    },
    {
      label: "Stanford Encyclopedia of Philosophy — Qualia: The Knowledge Argument",
      url: "https://plato.stanford.edu/entries/qualia-knowledge/",
      note: "a fuller map of the responses sketched above",
    },
  ],
};
