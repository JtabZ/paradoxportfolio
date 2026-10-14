// manual/content/consciousness/disembodied-pain.js
//
// Original retelling of The Disembodied Pain — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>This thought experiment asks something of you before it even
    starts: pinch the underside of your left arm, hard enough that you
    can clearly feel it. Once that sting is in focus, hold onto it and
    try the following. Imagine feeling that exact same pain while having
    no body whatsoever — no left arm, no right arm, no arms, no body
    parts at all. The pain would still seem, to you, to be located on the
    underside of a left arm you no longer have. You are imagining the
    very same sensation, occurring in a being that is entirely
    disembodied.</p>
    <p>If you can genuinely carry out that act of imagination — and
    Brie Gertler, who devised the case, thinks you can — then you have
    conceived of a coherent scenario in which this particular pain occurs
    with no brain and no physical substrate behind it at all. A long
    philosophical tradition holds that whatever can be coherently
    conceived is thereby possible, at least in the demanding sense
    philosophers call logical or metaphysical possibility (a much
    stronger standard than mere physical possibility — a floating,
    unsupported tennis ball is physically impossible but still logically
    conceivable, whereas a shape that is simultaneously perfectly round
    and perfectly square is not conceivable at all, no matter how hard
    you try). If disembodied pain is possible in that strong sense, then
    this particular pain cannot be a physical state, since it can occur
    without any physical state whatsoever. It would have to be something
    irreducibly mental — not just difficult to reduce to brain states as a
    matter of current science, but not reducible to them even in
    principle, unlike water, which really is nothing more than a
    particular arrangement of hydrogen and oxygen.</p>
  `,

  stakes: `
    <p>Gertler's case descends from Descartes' Sixth Meditation, where
    he argued that because he could conceive of his mind existing apart
    from his body, and because God could actualize anything conceivable,
    mind and body must be separable, and therefore distinct substances.
    Gertler keeps the structure of that argument — conceivability
    licensing a conclusion about possibility, and possibility licensing a
    conclusion about the mind's non-physical nature — while dropping any
    reliance on God's power to actualize whatever we can conceive. Her
    version is meant to stand on purely secular ground.</p>
  `,

  argument: {
    steps: [
      "You can coherently conceive of this very pain occurring in a being with no body and no physical states at all.",
      "What is conceivable (in the demanding, logical/metaphysical sense) is possible.",
      "So it is possible for this pain to occur without any physical state whatsoever.",
      "If a state can occur without any physical state, that state cannot itself be a physical state.",
    ],
    conclusion: "This pain is an irreducibly mental state — not identical to, or fully explainable in terms of, any physical state — so physicalism about the mind is false.",
  },

  tension: [
    {
      targets: "Offers a parallel case for visualizing disembodiment",
      label: "Watching your own body disappear in the mirror",
      text: "W. D. Hart proposes a related but distinct route to the same conclusion: imagine walking to a mirror, opening your eyes to find empty sockets, peeling back your skull to find no brain inside, then watching the rest of your body dissolve away entirely while you go on seeing yourself (or what's left) in the mirror. If this gradual slide into disembodiment is coherently imaginable, it likewise supports the conclusion that a wholly disembodied mind is possible.",
    },
    {
      targets: "Challenges the conceivability-to-possibility inference",
      label: "People misfire on conceivability all the time",
      text: "Antoine Arnauld's old objection to Descartes still carries weight: someone with a shaky grasp of geometry might think they're conceiving of a right triangle that violates the Pythagorean theorem, yet the theorem holds for every right triangle without exception, so no such triangle is possible. If conceivability can mislead us there, why trust it here?",
    },
    {
      targets: "Restricts the inference to sufficiently complete concepts",
      label: "Only a complete concept licenses the jump",
      text: "Both Descartes and Gertler try to block that worry by restricting the inference: conceivability guarantees possibility only when the concepts involved are clear, distinct, and sufficiently comprehensive — complete enough that nothing relevant is missing from the picture. The confused geometry student's concept of 'right triangle' falls short of that standard, since they don't yet grasp everything a right angle brings with it; a concept like 'bachelor,' by contrast, is simple and complete the moment you know its definition.",
    },
    {
      targets: "Defends pain's concept as complete enough",
      label: "Pain wears its nature on its sleeve",
      text: "Gertler argues that our concept of pain clears that bar, unlike our concept of water. Water has a hidden essence — you can know its taste and feel while being ignorant that it's H2O, and only scientific investigation uncovers what water really is underneath. Pain, Gertler contends, has no such hidden essence: we grasp what pain is simply by feeling it, so our phenomenal concept of pain is already complete, with nothing further for science to discover about its basic nature.",
    },
  ],

  note: `
    <p>The disembodied pain case runs in the opposite direction from the
    zombie thought experiment discussed elsewhere in this collection:
    where zombies try to show that the physical could occur without the
    phenomenal, disembodied pain tries to show that the phenomenal could
    occur without the physical. Both are conceivability arguments, and
    both inherit the same basic vulnerability to the Arnauld-style
    objection.</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Dualism", url: "https://plato.stanford.edu/entries/dualism/", note: "surveys conceivability arguments for dualism, including Gertler's case" },
  ],
};
