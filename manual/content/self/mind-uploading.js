// manual/content/self/mind-uploading.js
//
// Original retelling of Mind Uploading — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Bhavith, middle-aged, learns from his cardiologist that he has an
    incurable heart condition and only months to live. But there's an
    option: a research institute can scan his brain and body, build an
    android replica of his current body, and upload his mind pattern into
    the computer running it. His old biological body would then be
    disposed of, and he'd continue on indefinitely in a sturdier,
    replaceable shell. After talking it over with his family, Bhavith
    agrees. He's sedated for the procedure, and when he wakes, he finds
    himself in a revitalized version of his own body, feeling entirely
    like himself. "It works just as they promised," he thinks, relieved.</p>
    <p>Now the twist. Moments later there's a knock at the door — and it's
    Bhavith. The facility's disposal unit malfunctioned, so the original
    biological body was never destroyed; since it only had days left
    anyway, the team simply let it live out its natural death while the
    android body carried on in parallel. Two Bhaviths now stare at each
    other, each equally convinced he is the real one.</p>
  `,

  stakes: `
    <p>If uploading can preserve personal identity, that looks like strong
    support for a psychological theory of identity, since there's no
    bodily or physical continuity at all between the pre-upload and
    post-upload person — the physical theory would have to call uploading
    a failure. Before the twist, nearly everyone's judgment matches the
    psychological theory: the android waking up in the revitalized body
    just is Bhavith. But the twist reproduces the reduplication problem
    seen with teleportation (Chapter 39): once a second claimant with
    equally good psychological credentials appears, identity — which can
    only ever be one-to-one — has nothing left to hang onto.</p>
  `,

  argument: {
    steps: [
      "Before bio-Bhavith reappears, android-Bhavith seems identical to old-Bhavith: he has all of old-Bhavith's memories and continues his psychology seamlessly.",
      "But bio-Bhavith also has every memory old-Bhavith had up to the moment of the scan, and continues living and thinking in his own right.",
      "Bio-Bhavith and android-Bhavith are clearly not identical to each other — from the moment of the scan onward they have separate, diverging experiences.",
      "Identity is transitive: if old-Bhavith were identical to both of them, they would have to be identical to each other.",
      "So old-Bhavith cannot be identical to both — yet nothing about the case explains why he'd be identical to one of them rather than the other.",
    ],
    conclusion: "Either neither upload-candidate is really old-Bhavith, or personal identity is simply not well-defined in cases like this — even though, intuitively, both candidates seem to have survived just fine.",
  },

  tension: [
    {
      targets: "Optimist about uploading",
      label: "Gradual replacement, one neuron at a time",
      text: "David Chalmers argues for optimism by imagining uploading done gradually: replace one neuron with a functionally identical nanobot, and surely the resulting person is still you. Repeat with 1% of your neurons, then 2%, and so on up to 100% — at each step the result seems identical to the step before, so by transitivity the fully uploaded person is identical to the original. And since speeding a process up shouldn't change what it accomplishes metaphysically, this optimism about gradual uploading seems to carry over to instant uploading too.",
    },
    {
      targets: "Pessimist about uploading",
      label: "A gap in existence",
      text: "Even a fast upload takes some time to process and reassemble information in the new host, so there would be a brief interval in which, strictly speaking, no one exists — the old body's thread has ended but the new one hasn't started. Many philosophers hold that things, including persons, cannot have this kind of \"gappy\" existence, popping out of being and back in. If that's right, whatever wakes up on the other side of the gap is a new person, not a continuation of the old one.",
    },
    {
      targets: "Pessimist about uploading",
      label: "The Betelgeuse scanners",
      text: "Nicholas Agar imagines alien scientists on Betelgeuse secretly scanning humans from afar and building exact copies on their home planet. Almost everyone's gut reaction is that the copy wouldn't be you — just a duplicate. Agar argues mind uploading is structurally the same kind of copying, so the same verdict should apply: the android isn't you either, however convincing the resemblance.",
    },
    {
      targets: "Pessimist about uploading",
      label: "Maybe uploads aren't conscious at all",
      text: "A more radical pessimism denies the upload is even a conscious being, let alone you. The scenario quietly assumes functionalism — that having the right functional organization is enough for mentality — but if functional duplicates can lack genuine qualia (as the zombie and inverted-qualia worries suggest), there's reason to doubt an upload has any inner life to be identical with yours in the first place.",
    },
    {
      targets: "Dissolves the puzzle",
      label: "Identity isn't what matters anyway",
      text: "Derek Parfit takes a different tack entirely: stop asking whether some future being is identical to you, and ask instead whether it's related to you in the ways that actually matter — by memory, personality, and other psychological connections. On Parfit's view the upload scenario (even the double-survival twist) isn't really a crisis, because strict identity was never the thing worth caring about in survival. Both Bhaviths having \"just about everything that matters\" is, on this view, a success story dressed up as a paradox.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Personal Identity", url: "https://plato.stanford.edu/entries/identity-personal/", note: "background on the psychological theory the case tests" },
  ],
};
