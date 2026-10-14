// manual/content/perception/pine-trees-and-cyrillic-text.js
//
// Original retelling of Pine Trees and Cyrillic Text — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome; this
// file holds only the paraphrased content.

export const entry = {
  case: `
    <p>You're hired to clear pine trees from a mixed grove, but you have no
    idea what a pine looks like. Someone points out a few examples, and over
    the following weeks your eye for them sharpens, until eventually you can
    spot a pine almost on sight. Separately: you look at a page of Cyrillic
    text without knowing Russian, and it reads as pure visual noise —
    meaningless squiggles. You study the language, and eventually, looking
    at that same unaltered page, something has changed: the symbols now
    present themselves as words and sentences, and it actually takes effort
    to see them as mere shapes again.</p>
    <p>Both cases involve a genuine shift in what it's like to look at the
    very same thing — what Susanna Siegel calls a phenomenal contrast.
    Nothing about the trees or the page changed; something about your
    perceptual experience of them did. Siegel argues the best explanation is
    that the content of your visual experience itself changed: before
    training, the property "being a pine tree" (or "being meaningful
    Russian text") simply wasn't part of what your visual experience
    represented, and after training, it is. She calls this the Rich Content
    View — the claim that perceptual experience can represent high-level
    properties like being a pine tree or a horse, not merely low-level
    properties like color, shape, depth, and illumination.</p>
  `,

  stakes: `
    <p>Most agree that vision represents low-level properties such as color
    and shape. Whether it also represents high-level, category-like
    properties is contested — many hold that categorization happens only
    after perceptual processing hands off to a separate cognitive system,
    with perceptual content itself limited to the low-level stuff. Siegel's
    phenomenal-contrast cases are offered as direct evidence against that
    restriction: if nothing changed except your conceptual knowledge, and
    yet your perceptual experience itself changed, the most natural
    explanation is that the newly acquired high-level property got folded
    directly into what you perceive, not bolted on afterward by a separate
    system.</p>
  `,

  argument: {
    steps: [
      "Looking at the same pine tree, or the same page of Cyrillic text, before and after learning to recognize it produces a marked experiential difference — a phenomenal contrast.",
      "Nothing about the external stimulus changed between the two occasions, so the contrast must be explained by some change in the subject.",
      "The most natural explanation of a change specifically in what the experience is like is a change in what the experience represents.",
      "Before training, high-level properties like being a pine tree or being meaningful Russian text were not represented in visual experience; after training, they are.",
    ],
    conclusion: "Visual experience can and often does represent high-level properties, not just low-level ones like color and shape — the Rich Content View.",
  },

  tension: [
    {
      targets: "Offers an alternative explanation",
      label: "Maybe it's a lower-level property that changed, not a high-level one",
      text: "Casey O'Callaghan challenges the parallel case of learning a foreign language by ear. He denies that what changes is your auditory experience coming to represent the meaning of what's said. A better explanation, he argues, is that training lets you hear the phonological features specific to that language — low-level structural features of the sound itself, not high-level semantic content — which would explain the contrast without granting that experience represents meaning.",
    },
    {
      targets: "Reframes the debate for relationalists",
      label: "Even without representational content, the question just gets recast",
      text: "Both sides of this debate assume perceptual experiences have representational content in the first place — a claim relationalists (naive realists) deny, holding instead that veridical perception is partly constituted by the perceived object and its properties, not by any representation of them. Siegel notes that her argument doesn't actually depend on the representational framework; translated into relationalist terms, the dispute simply becomes a question about whether the properties genuinely present in experience include high-level ones, leaving the substance of the disagreement intact either way.",
    },
  ],

  note: `
    <p>If the Rich Content View is correct, it has knock-on effects elsewhere.
    It complicates attempts to draw a clean line between observation and
    theory in philosophy of science, since what counts as "mere observation"
    would already be shaped by learned expertise. It also puts pressure on
    Hume's claim that we can perceive a succession of events but never the
    causal relation between them — if causation counts as a high-level
    property, the Rich Content View suggests we might, after all, be able to
    perceive it directly, at least once we've learned to.</p>
  `,

  furtherReading: [
    { label: "Siegel, Susanna — \"The Contents of Perception\" (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/perception-contents/", note: "Siegel's own overview of the Rich Content View and the phenomenal contrast argument, written by its original proponent" },
  ],
};
