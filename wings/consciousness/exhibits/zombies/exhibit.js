// exhibit.js — Zombies
//
// Content model consumed by render-exhibit.js. All prose below is original —
// a retelling of the philosophical-zombie / conceivability argument (Kirk
// 1974; popularized by Chalmers 1996), not a quotation from the book. The
// argument structure follows the book's chapter closely; the wording is
// ours.

export const exhibit = {
  // hero defaults to "piece" — the two figures sit beside the title.
  heroLine:
    "Picture someone physically identical to you, acting exactly as you act — except <em>nothing</em> is happening <em>inside</em>.",
  titleEffect: "hollow",

  pieceHint: "Two figures. Move your cursor across them.",

  stakes: `
    <p>Physicalism says consciousness is, in reality, nothing more than a
    physical phenomenon. Taken seriously, that has a strong consequence:
    consciousness should supervene on the physical — any world that is an
    exact physical duplicate of ours should automatically be an exact
    duplicate with respect to consciousness too, with nothing extra needed.
    The zombie thought experiment puts that consequence under pressure.</p>
  `,

  case: `
    <p>Not a movie zombie, hungry and undead — imagine instead someone
    physically identical to you, matching you down to the smallest particle,
    an exact counterpart who behaves exactly as you do: right now, their eyes
    track these words the way yours do. They
    are physically and functionally indistinguishable from you in every
    respect. There's only one difference: you have conscious experience, and
    they have none at all. They register these words — in the sense that
    their brain processes them — but there is nothing it is like for them to
    see them. There is nothing it is like for them, ever, about anything.
    Not that anyone could tell: asked what they're seeing, your zombie twin
    answers exactly as you would, and insists, just as sincerely as you
    would, that they are not a zombie. You'd be right. They'd be wrong.</p>

    <p>Your zombie twin probably doesn't exist. But their existence doesn't
    seem impossible — and if a single zombie is possible, so, it seems, is an
    entire zombie world: one physically and functionally identical to ours in
    every respect, but with no consciousness in it at all. Compare this to
    rocks. Could there be a world physically identical to ours that simply
    doesn't contain rocks? That seems impossible, precisely because there's
    nothing more to a rock than its complete physical description. But a
    zombie world — a world physically identical to ours, lacking only
    consciousness — doesn't strike most people as impossible in that same
    way. That asymmetry is the whole puzzle.</p>
  `,

  argument: {
    steps: [
      "A zombie world is ideally conceivable — conceivable even on the fullest, most careful reflection we can give it.",
      "If a zombie world is ideally conceivable, then it is metaphysically possible — possible in the broadest sense, not just consistent with the laws of nature as they happen to be.",
      "If a zombie world is metaphysically possible, then physicalism is false — because physicalism requires that duplicating all physical facts must duplicate consciousness too, with nothing left over.",
    ],
    conclusion:
      "Physicalism is false: a world could be physically identical to ours and still lack consciousness entirely.",
  },

  tension: [
    {
      targets: "Accepts the argument",
      label: "Something more than physics is going on",
      text: "Some accept all three premises and conclude physicalism is false, turning instead to non-physicalist views such as dualism, where consciousness is a further ingredient beyond the physical.",
    },
    {
      targets: "Rejects premise 1",
      label: "It only seems conceivable",
      text: "Sometimes something feels conceivable until we think it through properly — like imagining a right triangle that breaks the Pythagorean theorem; enough reflection shows that idea makes no sense. Some argue the zombie scenario is the same: it feels coherent only because we haven't fully grasped what 'physically identical in every respect' really entails. Future discoveries in physics, on this view, might reveal the zombie world was never truly conceivable to begin with.",
      reply:
        "Defenders of the argument respond that any future physics could only add more facts of the same basic kind physics already deals in — facts about causal and spacetime structure — and no amount of that kind of fact seems able to settle the question of whether something it's like to be the duplicate exists. If so, no future discovery should be expected to undermine the intuition that zombies are conceivable.",
    },
    {
      targets: "Rejects premise 2",
      label: "Conceivable isn't automatically possible",
      text: "Compare water: for centuries people understood the everyday concept of water perfectly well without knowing it was H2O. Someone in that position could conceive of 'water without hydrogen' without any error in reasoning — yet most agree hydrogen-free water is metaphysically impossible, since water simply is H2O. Maybe zombies are similar: conceivable to us, yet metaphysically impossible once the full nature of consciousness is understood.",
      reply:
        "The analogy has a gap: hydrogen-free water seems conceivable only because we're leaving out one physical detail — water's chemical makeup. The zombie world, by contrast, is stipulated to duplicate every physical fact there is. So this move needs more to make it work than the water case alone provides.",
    },
    {
      targets: "Rejects premise 2 (deeper version)",
      label: "It's built into our concepts, not into the mind",
      text: "A further-developed version of the previous reply holds that zombies seem conceivable not because of anything distinctive about consciousness itself, but because of how our phenomenal concepts — our concepts for thinking about experience — happen to be built, independently of physical and functional facts. If so, the conceivability of zombies could be explained away as a quirk of concept design, leaving physicalism about the mind itself untouched.",
      reply:
        "Opponents argue this doesn't dissolve the problem, only relocates it: if our phenomenal concepts are distinctive enough to explain away the conceivability of zombies, those concepts themselves start looking like non-physical things that need explaining — reopening the very question this move was meant to close.",
    },
  ],

  furtherReading: [
    {
      label: "Chalmers, David J. — The Conscious Mind (1996)",
      url: "https://en.wikipedia.org/wiki/The_Conscious_Mind",
      note: "popularized the zombie argument; canonical presentation",
    },
    {
      label: "Stanford Encyclopedia of Philosophy — Zombies",
      url: "https://plato.stanford.edu/entries/zombies/",
      note: "a full survey of the conceivability argument this exhibit stages",
    },
  ],
};
