// manual/content/consciousness/floating-man.js
//
// Original retelling of The Floating Man — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Suppose God brought you into existence all at once, fully formed,
    hanging in midair. Your limbs float free of one another, never
    touching. You have no eyes to see with, no skin registering the brush
    of wind, no sense of a surface beneath you or a world around you. Not
    a single sensation reaches you from any part of a body. And yet, in
    this condition of total sensory blankness, you would still know,
    without any doubt, that you exist.</p>
    <p>Notice what that momentary certainty would and would not include.
    You would grasp your own existence completely, Avicenna argues,
    without it ever occurring to you that you take up space, have size,
    or possess arms, legs, or any other bodily feature at all. Your sense
    of yourself would be whole and entire even though it contained
    nothing bodily. From this, Avicenna concludes that whatever you
    essentially are — your soul — must be something distinct from the
    body, since you can fully conceive of it while leaving the body out
    entirely.</p>
  `,

  stakes: `
    <p>The floating man enters a debate that was already old by the
    11th century, when Avicenna (Ibn Sina) proposed it. Plato had argued
    that the soul can be pried apart from the body; Aristotle's account of
    the soul as the body's "form" made the two look harder to separate,
    since on his picture a soul might be unable to exist without the body
    whose form it is. Avicenna's thought experiment was meant to settle
    the question in Plato's favor without relying on Aristotelian
    machinery, and it anticipates — by some six centuries — Descartes'
    own argument that he can conceive of his mind existing without his
    body, and therefore that mind and body are separate substances.</p>
  `,

  argument: {
    steps: [
      "In the floating-man scenario, you are aware of your own existence even though you are aware of no bodily features whatsoever.",
      "Your grasp of your own essence in that scenario is complete — nothing about it is left incomplete or merely partial.",
      "If you can completely grasp your essence without thinking of yourself as embodied, then being embodied is not part of your essence.",
    ],
    conclusion: "Your essence — your soul — does not include the body; the soul is therefore immaterial and distinct from the body.",
  },

  tension: [
    {
      targets: "Rejects the inference from knowledge to essence",
      label: "Knowing less isn't knowing you're less",
      text: "The most common objection says Avicenna slides from a claim about what the floating man is aware of to a claim about what he actually is. Not noticing your body isn't the same as your body being inessential to you — compare someone who knows they have a cold without knowing it's caused by a virus; they could easily imagine having that same cold in a world with no viruses, but that imagining wouldn't show that their cold really could exist without a virus. It would just show that their picture of the cold leaves out facts they don't have.",
      reply: "Avicenna's comeback is that the two cases aren't parallel: the floating man isn't missing some hidden fact the way the confused cold-sufferer is. His grasp of his own essence is total, not partial, so there's no gap left for embodiment to be hiding in.",
    },
    {
      targets: "Questions whether the self-grasp is really total",
      label: "Maybe the glimpse is only skin-deep",
      text: "But why accept that the floating man's self-understanding is actually complete? His situation is bizarre and artificial; it may just be feeding him a thin, surface-level sense of himself rather than the full truth about his nature, in which case a fuller grasp might well reveal that embodiment was part of the picture all along.",
    },
    {
      targets: "Narrows the conclusion to an epistemic one",
      label: "Maybe it only shows something about self-awareness",
      text: "A number of 13th-century thinkers backed away from Avicenna's metaphysical conclusion about the soul's immateriality while still thinking the thought experiment proved something real: that a person can be aware of themselves without any sensory awareness of their body at all, whether or not the soul turns out to be physical.",
      reply: "Even this weaker claim can be pushed back on — one could say the floating man is aware of his body after all, just not aware of it as a body (if the soul is itself material, awareness of the soul already is awareness of a material thing). Even so, the basic point that self-awareness doesn't require sensing one's own body seems to survive, since the scenario is at least coherent.",
    },
    {
      targets: "Reframes the case as being about immediacy of self-awareness",
      label: "Awareness of self needs no middleman",
      text: "Some read Avicenna as making a point less about the soul's substance and more about how self-awareness works: every experience, on this view, carries awareness of oneself bundled directly into it, with no need to perceive anything else first — unlike learning there's a dog outside by hearing it bark, where awareness of the dog depends on awareness of a sound.",
      reply: "It's unclear this follows strictly from the scenario, since the floating man is still presumably thinking and aware of his own thoughts; strip away all mental activity and it stops being obvious he remains self-aware at all.",
    },
  ],

  note: `
    <p>The question the floating man raises — whether a mind could exist
    with no body attached — resurfaces throughout later chapters, from
    disembodied pain to philosophical zombies, and the related question of
    whether bodily awareness is required for self-awareness remains a live
    dispute among philosophers of mind today.</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Ibn Sina [Avicenna]", url: "https://plato.stanford.edu/entries/ibn-sina/", note: "background on Avicenna's broader philosophy of mind and soul" },
  ],
};
