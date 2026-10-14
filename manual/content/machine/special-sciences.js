// manual/content/machine/special-sciences.js
//
// Original retelling of The Puzzle of the Special Sciences — a paraphrase
// of the book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Most physicalists hold two beliefs that seem to pull in opposite
    directions. First, physics is complete: fix every fact physics
    describes and you've fixed the whole world, with nothing left over.
    Second, sciences with narrower domains — psychology, biology,
    economics — discover real, important truths about the world that
    physics itself never states. Can both be true at once, or does the
    second belief collapse into mere convenience, a shorthand way of
    talking about facts physics already covers?</p>
    <p>Jerry Fodor argued the second belief is no mere convenience.
    Consider an economic law: all else equal, more money in an economy
    means higher prices. That law doesn't hold because of what currency is
    physically made of — paper, metal coins, digits in a ledger are
    wildly different physical stuff, yet the law holds across all of them.
    No law of physics is ever violated when prices rise, but the economic
    law isn't itself a law of physics; someone who could see only physical
    particles colliding would never notice there was an economy at all,
    let alone predict when prices would spike.</p>
    <p>The same point holds for psychology, Fodor argued. Beliefs and
    desires can be realized in wildly different physical materials — maybe
    carbon-based neurons in us, silicon-based circuits in some future
    android — with no guarantee that two creatures sharing a belief share
    any physical state at all. Yet it's true, as a matter of robust
    generalization, that a creature who believes it's in danger and wants
    to escape will try to escape. Someone who tracked only the subatomic
    motion underlying that behavior would miss the behavior itself. For
    Fodor, this shows psychology is autonomous: physical through and
    through, never breaking a law of physics, yet governed by its own
    distinct laws that cannot be reduced to physics. Many who agree draw a
    further moral about the mind — that mental states are physical, yet not
    identical to, or reducible to, the physical states that realize them.</p>
  `,

  stakes: `
    <p>At stake is whether non-reductive physicalism — the view that mental
    properties are physically grounded but not identical to any physical
    kind — can be sustained, or whether it secretly undermines the very
    scientific status it claims for psychology and the other special
    sciences. If Fodor's picture of science is right, the mind can be fully
    physical while still answering to its own autonomous laws. If it's
    wrong, the special sciences — and the mental kinds that supposedly
    populate them — may turn out not to be unified kinds capable of
    supporting real scientific generalizations at all.</p>
  `,

  argument: {
    steps: [
      "Fodor's case for autonomy depends on there being no physical law corresponding to the special-science law — no physical kind unifying all the different realizers of 'money' or 'belief.'",
      "Kim asks why we couldn't simply construct a disjunctive physical kind out of all those realizers — 'P1 or P2 or P3 or ...' — framed purely in physical vocabulary.",
      "Fodor's answer is that disjunctive kinds like that can't be genuine kinds, because their members share no causal similarity, so they can't support reliable generalizations.",
      "But Kim points out that this reasoning doesn't depend on which vocabulary you use. If 'P1 or P2 or P3' is too causally scattered to be a kind, so is the special-science term that groups the very same scattered realizers — whether you call it 'money' or 'belief.'",
      "So special-science kinds face a dilemma: either their physical realizers are unified enough to support generalizations (in which case there's no obstacle to a corresponding physical kind, and the autonomy claim fails), or they're too causally heterogeneous to be a real kind at all (in which case the special science built on them isn't scientific in the first place).",
    ],
    conclusion: "The very feature Fodor needs to make the special sciences autonomous from physics — the causal diversity of their realizers — is the same feature that threatens to disqualify those sciences from being unified, law-governed sciences at all.",
  },

  tension: [
    {
      targets: "Illustrates the dilemma",
      label: "The jade analogy",
      text: "Kim illustrates the worry with jade, which turns out not to be a single mineral but a disjunction of two chemically unrelated minerals, nephrite and jadeite. If you examined a thousand green samples of jade and all of them happened to be jadeite, you would have learned something about jadeite, but nothing about jade as such — you'd have no idea whether nephrite is ever green, because jade lacks the causal unity that would let observations of one sub-kind license conclusions about the whole. That lack of unity, not the label used, is what disqualifies jade from entering into genuine scientific laws.",
    },
    {
      targets: "Applies the worry to belief",
      label: "Is belief like jade?",
      text: "Fodor's own argument for autonomy rests on beliefs being realized by radically different physical states across different kinds of believers — carbon-based in us, perhaps silicon-based in a robot. But nearly all psychological evidence about belief has been gathered from carbon-based believers alone. If belief is scattered the way jade is scattered between nephrite and jadeite, then generalizations drawn from human belief may tell us nothing reliable about belief in general — the very heterogeneity that was supposed to secure psychology's autonomy from physics turns out to threaten its standing as a science of a unified kind at all.",
    },
  ],

  furtherReading: [],
};
