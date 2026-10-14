// manual/content/self/too-many-minds.js
//
// Original retelling of The Puzzle of Too Many Minds — a paraphrase of
// the book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>How many thinking things are sitting in your chair right now? One,
    obviously. But consider the thinking-animal argument: there is a human
    animal sitting in your chair; that animal is thinking; you are the
    thinking being sitting in your chair; so the human animal sitting in
    the chair is you. Each step looks obviously true, and the conclusion
    — animalism, the view that you simply are a human animal — seems to
    follow directly.</p>
    <p>The trouble is that many people resist saying you're identical to
    an animal. Suppose instead you say: "There's a human animal here, but
    I'm a person, and being a person isn't the same as being an animal."
    That sounds reasonable — until you notice it commits you to two
    distinct thinking things occupying the very same chair at the very
    same time: the animal, thinking its thoughts, and you, the person,
    thinking yours. Either they're the same thing, as the animalist says,
    or there are uncomfortably many minds crammed into one chair.</p>
  `,

  stakes: `
    <p>The puzzle targets anyone who denies animalism without being a
    substance dualist — including the many philosophers who hold a
    psychological theory of personal identity (Chapters 39, 41, 42) while
    still accepting that persons are physical things. If you're not
    identical to the animal in your chair, what are you, and why doesn't
    your existence alongside the animal multiply the number of thinkers
    present? The problem gets sharper still: running a parallel argument
    about the brain in your skull shows the animalist's own reasoning can
    be turned back against animalism itself, since there's also a brain
    thinking in that chairspace, distinct from the animal that contains it.</p>
  `,

  argument: {
    steps: [
      "There is a brain occupying the same space as you in your chair, and that brain is thinking.",
      "The brain is not identical to the human animal (the animal has arms and legs; the brain alone does not).",
      "The human animal is also in that same space, also apparently thinking.",
      "There cannot really be two separate things thinking in the same chairspace — that would be too many minds.",
      "So, by the animalist's own standard for ruling out extra thinkers, we'd have to conclude the human animal isn't thinking at all — an absurd result for the animalist to accept.",
    ],
    conclusion: "The animalist's \"too many minds\" objection to rival theories boomerangs: the very reasoning used to rule out a separate person distinct from the animal would, applied to brain and animal, rule out the animal being a thinker at all.",
  },

  tension: [
    {
      targets: "Accepts animalism",
      label: "Bite the bullet: you are the animal",
      text: "The straightforward response is to accept the thinking-animal argument's conclusion outright: human persons are simply human animals, full stop. On this view (animalism), there's no further person-stuff needed, and no multiplication of minds to explain away.",
      reply: "Critics note this has an uncomfortable cost: if your brain alone were transplanted into another body, carrying all your memories and traits, the animalist must say you stayed behind with your old, now-brainless body (assuming it's kept alive) — a verdict many find it hard to accept.",
    },
    {
      targets: "Rejects animalism via constitution",
      label: "Constituted by, not identical to",
      text: "Lynne Rudder Baker borrows the classic statue-and-clay puzzle: a statue isn't identical to the lump of clay it's made from (the clay existed first, and could survive the statue's destruction), yet the statue is nothing without being constituted by some clay or other. Likewise, Baker argues, you are not identical to the human animal that is your body, but you are constituted by it. If your body ends up in a persistent vegetative state, the animal survives, but — like a smashed statue — it no longer constitutes a person.",
    },
    {
      targets: "Blocks the too-many-minds worry",
      label: "Constitution doesn't double-count",
      text: "Does the constitution view generate two minds after all — yours and the animal's? Baker says no, by analogy: a 10-pound statue made of 10 pounds of clay doesn't weigh 20 pounds, because the clay's weight just is the statue's weight once it constitutes the statue. Likewise, the animal's mind just is the person's mind, because the animal constitutes the person — one thinker, described two ways.",
    },
    {
      targets: "Embraces multiple thinkers",
      label: "Maybe minds just don't add up",
      text: "C. S. Sutton takes a different approach: accept that there are, in some sense, multiple thinkers sharing your chair, but deny this is troubling, because some properties of overlapping things are non-summative — they don't add together the way separate objects' properties would. Your 150-pound body and your 9-pound arm don't together weigh 159 pounds on a scale, because the arm's weight is already part of the body's. Luke Roelofs points out this view has to accept that two thinkers can, in this sense, share thoughts — which looks less alarming once you see the thinkers aren't fully separate to begin with.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Animalism", url: "https://plato.stanford.edu/entries/animalism/", note: "overview of animalism and the thinking-animal argument" },
  ],
};
