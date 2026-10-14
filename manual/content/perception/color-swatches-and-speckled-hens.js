// manual/content/perception/color-swatches-and-speckled-hens.js
//
// Original retelling of Color Swatches and Speckled Hens — a paraphrase of
// the book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Lay out a hundred color swatches, S1 through S100, forming a gradual
    ramp from blue to green. The steps are so fine that any two neighbors
    look identical side by side — S1 and S2 are indistinguishable, S2 and S3
    are indistinguishable. But S1 and S3, viewed together, look clearly
    different. Now suppose each swatch produces an internal "seeming" in
    you — a mental state that simply is how that swatch looks. If S1 and S2
    seem identical, their seemings must be qualitatively identical; the same
    goes for S2 and S3. By the transitivity of identity, S1's seeming and
    S3's seeming must then also be identical. But S1 and S3 look different
    to you, so their seemings can't be identical after all. The two
    conclusions contradict each other, and something in the setup has to
    go.</p>
    <p>A second case sharpens the same worry from a different angle. Picture
    a speckled hen with exactly 40 speckles. You could easily misjudge the
    count at a glance — maybe you'd guess 39, or 41. The idea that we have
    an internal mental image that perfectly mirrors how things seem to us,
    and that we can't be wrong about, suggests you should at least be
    infallible about your own image: however many speckles it has, that's
    settled fact for you. But try to say how many speckles are in your
    mental image of the hen, and you're just as liable to get it wrong as
    you were about the actual hen. If there's no mental item you can
    reliably interrogate for its exact speckle-count, it's unclear there's
    any determinate inner "seeming" to point to at all.</p>
  `,

  stakes: `
    <p>Both cases target what the chapter calls the theory of seemings: the
    idea that whenever something seems a certain way to you, there's a
    corresponding mental image or seeming that really is that way, and that
    you can't be mistaken about how that seeming itself is. This theory is
    attractive because it seems to explain why even wild misperception —
    hallucinating a hedgehog, say — still leaves something you can't be
    wrong about: how things seemed to you internally, even if nothing in the
    world matched it. Philosophers have used this common factor between
    perceiving and misperceiving to argue that perception and
    misperception share a mental ingredient that explains them both. The
    swatches and the speckled hen are both built to show that this
    seemingly modest, common-sense idea quietly generates contradictions and
    false certainties.</p>
  `,

  argument: {
    steps: [
      "By the theory of seemings, viewing swatch S1 produces a seeming S*1, viewing S2 produces S*2, and viewing S3 produces S*3, each seeming simply being how that swatch looks to you.",
      "S1 and S2 are visually indistinguishable, so S*1 and S*2 must be qualitatively identical; the same reasoning makes S*2 and S*3 qualitatively identical.",
      "By the transitivity of identity, S*1 must then be qualitatively identical to S*3.",
      "But S1 and S3 are visually distinguishable, so S*1 and S*3 cannot be qualitatively identical.",
    ],
    conclusion: "The theory of seemings generates a direct contradiction, so there cannot be internal seeming-states of the kind the theory posits — and with them goes the idea of a common mental factor shared by perception and misperception.",
  },

  tension: [
    {
      targets: "Denies a premise (context-dependence)",
      label: "A swatch doesn't seem the same way in every comparison",
      text: "Defenders of seemings can deny that a given swatch produces one fixed seeming regardless of context. Perhaps S2 generates a different seeming when paired with S1 than when paired with S3 — so there's no single S*2 that has to be identical to both S*1 and S*3, and the contradiction never gets off the ground.",
      reply: "This blocks the argument, but at a cost: swatches don't actually feel like they shift in appearance depending on what they're next to. If the seeming really is changing from comparison to comparison without our noticing, then we're already fallible about our own seemings — which gives up the very infallibility the theory was built to secure.",
    },
    {
      targets: "Drops the infallibility claim",
      label: "Keep the seemings, but admit we can be wrong about them",
      text: "A different response keeps the metaphysical half of the theory — there really are internal images or seemings — but drops the claim that we have infallible access to them. The speckled-hen case supports this directly: you can have a determinate mental image of the hen and still misjudge how many speckles it contains, just as you can misjudge how many are on the actual hen.",
    },
    {
      targets: "Rejects a premise (determinacy)",
      label: "Perceptual representation can be indeterminate",
      text: "Jessie Munton argues the real culprit is an unexamined assumption that perception works like a photograph, representing every detail with full precision. Representation doesn't have to work that way — you can hope your team wins without hoping for any particular score, or remember catching a fish without remembering its size. Seeing the speckled hen may be representation of this coarser, non-pictorial kind, with no determinate speckle-count built in at all, which dissolves the puzzle about how many speckles your image has.",
      reply: "It can seem odd to say a mental image has speckles but no determinate number of them — surely you could in principle count them if you tried, which suggests there is a determinate number, even if you don't know what it is.",
    },
    {
      targets: "Distinguishes two senses of \"seems\"",
      label: "Phenomenal seeming versus the judgments we make about it",
      text: "A further move distinguishes a phenomenal sense of \"seems\" — the raw qualitative character of an experience, which may differ ever so slightly between a 39-speckled and a 40-speckled hen even if you can't tell them apart — from a cognitive sense of \"seems,\" meaning the judgment you're inclined to form. On this view we do have determinate phenomenal seemings, but our judgments about them, which are a separate matter, can simply be mistaken.",
    },
  ],

  furtherReading: [
    { label: "Silins, Nicholas — \"Perceptual Experience and Perceptual Justification\" (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/perception-justification/", note: "covers the role seemings and the speckled hen case play in debates about perceptual justification" },
  ],
};
