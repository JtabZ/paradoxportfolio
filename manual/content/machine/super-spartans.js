// manual/content/machine/super-spartans.js
//
// Original retelling of The Super-Spartans — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Picture a community of super-spartans: stoic adults who can suppress
    every involuntary sign of pain. They feel pain, plainly, but they never
    wince, cry out, or grit their teeth. Generations later, their
    descendants are born already disposed to suppress all pain behavior,
    raised on the belief that one should always do so. In this community,
    pain has come almost completely unglued from the behavior we usually
    treat as its signature.</p>
    <p>Push the thought experiment further. Imagine creatures whose pain
    isn't even triggered the way ours is — not by bodily damage, but by
    exposure to a certain harmless magnetic field. These creatures might
    also be super-spartans, so their pain shares neither the typical causes
    nor the typical effects we associate with human pain. Perhaps they
    still report feeling pain when it occurs — but Hilary Putnam pushes one
    step further still, to the super-super-spartans (he also calls them
    X-worlders), who don't even say anything about their pain. They might
    privately dislike it just as much as we do, but publicly, nothing gives
    it away — no wince, no cry, no mention.</p>
    <p>The super-super-spartans feel pain while lacking every disposition
    we normally treat as constitutive of pain. If such a case is even
    possible, Putnam argued, philosophical behaviorism — the view that
    being in a mental state simply consists in having certain behavioral
    dispositions — cannot be correct.</p>
  `,

  stakes: `
    <p>Philosophical behaviorism, prominent through the mid-twentieth
    century, held that mental states are nothing over and above
    dispositions to behave in certain ways given certain stimuli — however
    complex those dispositions might be. Putnam wasn't interested in the
    narrower linguistic question of whether statements about pain can be
    translated into statements about behavior; he targeted the thesis
    about pain itself. If a creature can experience genuine pain while
    utterly lacking the dispositions behaviorism says constitute it, the
    theory is simply false, not just imprecise.</p>
  `,

  argument: {
    steps: [
      "If behaviorism is true, experiencing pain consists in having the dispositional states normally associated with pain (wincing, crying out, and the like).",
      "If experiencing pain consists in having those dispositional states, then no creature could experience pain without also having those dispositions.",
      "The super-super-spartans are a genuine possibility: creatures who experience pain yet have none of the behavioral dispositions normally tied to it.",
    ],
    conclusion: "Behaviorism is false — pain can occur without any of the dispositions behaviorism claims are what pain is.",
  },

  tension: [
    {
      targets: "Verificationist objection",
      label: "The claim is unverifiable, hence meaningless",
      text: "One behaviorist-friendly response holds that the claim that super-super-spartans feel pain can't be empirically verified or falsified, and so, on a verificationist theory of meaning, is meaningless to begin with.",
      reply: "Putnam replied that we could in principle verify such pain empirically — for instance by detecting the relevant brain activity directly. He also noted that verificationism itself had fallen out of favor by the time he wrote, in part because the verificationist principle cannot itself be verified.",
    },
    {
      targets: "Retreat to a narrower behaviorism",
      label: "Behaviorism for beliefs, not sensations",
      text: "Rather than defend behaviorism as a general theory of mind, some theorists proposed restricting it to cognitive states like belief and desire, exempting sensations such as pain from the theory altogether — while others abandoned even that weakened version.",
    },
    {
      targets: "Successor theory",
      label: "Functionalism absorbs the lesson",
      text: "Many philosophers moved instead to functionalism, which keeps a role for external stimuli and behavioral responses but adds internal relations among mental states to the picture. Because the super-super-spartans' pain still relates to their beliefs and desires much as ours does, functionalism may be able to accommodate Putnam's case even where behaviorism cannot.",
    },
    {
      targets: "Extension of the same strategy",
      label: "Weather watchers push the point further",
      text: "Galen Strawson's weather watchers are rooted, immobile, sentient creatures with sensations, emotions, and thoughts but no capacity to behave at all. Strawson argues such creatures are possible and that their possibility refutes not just classical behaviorism but any 'neobehaviorist' view — including mainstream functionalism — on which behavioral dispositions are built into the very nature of mental states.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Behaviorism", url: "https://plato.stanford.edu/entries/behaviorism/", note: "overview of philosophical and methodological behaviorism, including Putnam's critique" },
    { label: "Stanford Encyclopedia of Philosophy — Functionalism", url: "https://plato.stanford.edu/entries/functionalism/", note: "covers the shift from behaviorism to functionalism that the super-spartans case helped motivate" },
  ],
};
