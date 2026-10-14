// manual/content/machine/inverted-qualia.js
//
// Original retelling of Inverted Qualia — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Picture two people, Non-vert and Invert. Non-vert is typical:
    blood, fire engines, and stop signs give her a visual experience with
    the quality we'd call phenomenal redness; grass and cucumbers give her
    phenomenal greenness. Invert is wired the other way around — seeing
    blood gives her the very quality Non-vert gets from grass, and seeing
    grass gives her the quality Non-vert gets from blood. Nothing about
    her outward behavior needs to give this away: she learned color words
    by the same examples everyone else did, so she calls blood "red" and
    grass "green," just like Non-vert — their functional profiles can
    match perfectly even though what each privately experiences is
    reversed.</p>
    <p>A related version imagines the switch happening to a single person
    overnight — inverting lenses secretly fitted while they slept. At
    first they'd protest that grass looks red and blood looks green, but
    suppose they adapt, relearn the color words, and eventually develop
    amnesia for the period before the switch. Afterward, nothing
    distinguishes them functionally from someone who was never inverted
    at all — except that, by hypothesis, their qualia really have
    flipped.</p>
    <p>These cases, discussed since Locke, are used to pressure three
    major theories at once. Suppose Invert is not functionally atypical
    at all — her inverted experiences relate to her other mental states
    exactly as everyone else's do. Then qualia seem to float free of
    function, threatening functionalism. Suppose instead she's not
    physically atypical — her brain goes into the very same physical state
    as Non-vert's when each looks at blood, yet their qualia still differ.
    Then qualia seem to float free of physical state, threatening
    physicalism generally. And suppose her representational properties —
    the causal history linking her experience to red and green things in
    the world — match Non-vert's exactly, while her qualia still differ.
    Then qualia seem to float free of representational content too,
    threatening representationalism.</p>
  `,

  stakes: `
    <p>Each of these theories tries to identify phenomenal qualities with
    something else — a functional role, a physical state, a
    representational property. If qualia can vary while any of these
    other things stays fixed, that theory cannot be a complete account of
    what qualia are. The force of the argument in each case depends only
    on the relevant kind of inversion being possible in the broadest,
    metaphysical sense — not on any such case having actually occurred.</p>
  `,

  tension: [
    {
      targets: "Empirical question about actual cases",
      label: "Does inversion really happen?",
      text: "Martine Nida-Rümelin argues there is genuine scientific evidence of red/green qualia inversion, rooted in rare genetic swaps between the photopigments normally found in R-cones and G-cones, and suggests the resulting inverts could be behaviorally indistinguishable from everyone else.",
      reply: "Others, including C. L. Hardin, argue the evidence points the other way: human color experience isn't symmetrical to begin with — red is experienced as 'warm' and green as 'cool,' for instance — so a behaviorally seamless inversion may be empirically impossible even if some asymmetries could in principle be inverted too.",
    },
    {
      targets: "Functionalist denial that inversion is possible",
      label: "Reject the thought experiment outright",
      text: "Some functionalists, including Gilbert Harman and William Lycan, simply deny that functionally indistinguishable inverted qualia are possible at all, blocking the argument at its first step.",
    },
    {
      targets: "Shoemaker's hybrid reconciliation",
      label: "Keep functionalism for the general property, go physicalist for the specific one",
      text: "Sydney Shoemaker proposes that the general property of having a conscious experience is functional, while any specific phenomenal quality — phenomenal redness, say — is a neurophysiological property realizing that function. This lets him accept inverted qualia as possible without giving up functionalism for consciousness generally.",
      reply: "The chapter notes this strategy doesn't fully escape the problem, since the same inversion reasoning that threatens functionalism threatens physicalism too, and Shoemaker's fallback to neurophysiology is itself a physicalist claim.",
    },
    {
      targets: "Block's Inverted Earth case against representationalism",
      label: "Flip the world's colors and the words for them, keep the qualia fixed",
      text: "Ned Block imagines being secretly transported, with color-inverting lenses fitted, to Inverted Earth, where every object has the complementary color of its counterpart on Earth and the language is correspondingly inverted too, so from behind the lenses everything looks normal on arrival. Over time, what triggers your 'phenomenally green' experience shifts from green things (on Earth) to red things (on Inverted Earth), while the qualia themselves, Block argues, stay constant throughout — showing that representational content can change while qualia don't, which is the reverse of ordinary inverted-qualia cases and is meant to show qualia aren't just representational properties.",
      reply: "Critics respond either by denying that the phenomenal character really stays fixed while the representational content drifts, or by adopting a version of representationalism where what's represented isn't purely a matter of causal history with the external environment, which blunts Block's argument.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Inverted Qualia", url: "https://plato.stanford.edu/entries/qualia-inverted/", note: "full survey of inverted-qualia arguments against functionalism, physicalism, and representationalism" },
  ],
};
