// manual/content/machine/brains-within-brains.js
//
// Original retelling of Brains within Brains — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Physicalists typically define "physical" by deference to physics:
    something is physical if fundamental physical theory posits it, or is
    built from what it posits. That assumes there's a fundamental level to
    defer to. But what if there isn't — what if quarks are made of smaller
    things, which are made of smaller things still, forever, with no
    bottom layer at all? Physicalism presumably shouldn't be automatically
    false just because reality has no floor. Barbara Gail Montero proposed
    a fix: physicalism requires not only no fundamental mentality (nothing
    irreducibly mental at the bottom), but also no infinite descent of
    mentality — no endless downward chain of levels that are themselves
    mental, with no floor at all.</p>
    <p>Christopher Devlin Brown constructs a case designed to break this
    fix. Take a world containing a single brain, Alex. On a natural
    "compositional" view of mentality that Brown argues any physicalist
    is committed to, Alex has mental properties simply because its
    parts are arranged in a way that produces mentality — no further
    ingredient required. But Alex's parts, call them Bretts, are
    themselves smaller brains, arranged in a way that produces mentality
    for them too. Each Brett is made of still smaller brains, Charlies,
    which are mental for the same reason; each Charlie is made of smaller
    brains still, Devins, and so on without end. Call this all-mental,
    all-physical world MPW. Physicalism seems like it could be true of
    MPW — the world contains nothing but brains, nothing non-physical
    anywhere — and yet MPW has mentality at every level, forever, with no
    bottom. That's exactly the infinite descent of mentality Montero's
    fix was supposed to rule out as incompatible with physicalism.</p>
  `,

  stakes: `
    <p>If Brown's MPW is a coherent, physicalism-compatible scenario, then
    Montero's No Low-Level Mentality constraint is too strong — it rules
    out a case that should actually be allowed. Since the underlying
    worry (what happens to physicalism if reality has no fundamental
    level) is a serious one, a correct replacement constraint is needed:
    some way of saying precisely what pattern of "mentality all the way
    down" would be incompatible with physicalism, since clearly not every
    such pattern is.</p>
  `,

  tension: [
    {
      targets: "Deflects the case as merely hypothetical",
      label: "Physicalism is only about the actual world",
      text: "One might try to dismiss MPW on the grounds that physicalism is a thesis about reality, not about every conceivable world.",
      reply: "The chapter notes this response is too quick: physicalism's content is standardly understood to carry implications for other possible worlds, not just the actual one, and some argue our actual world could itself turn out to have no fundamental level and be infinitely decomposable — exactly MPW's structure — which would need to be compatible with physicalism being true of it.",
    },
    {
      targets: "Alter's Only Compositional Mentality constraint",
      label: "Allow any mentality, as long as it's merely compositional",
      text: "One alternative fix identifies a different culprit: not the infinite descent itself, but a particular kind of mentality — mentality a thing has for some reason besides the arrangement of its parts. The proposed constraint says physicalism requires only that all mentality be compositional in this sense, however widely or deeply such compositional mentality is distributed; since every mental property in MPW arises purely from how parts are arranged, MPW satisfies the constraint and physicalism could be true there.",
      reply: "The chapter flags a weakness: it isn't actually clear that every version of physicalism is committed to this compositional account of mentality in the first place, which the fix depends on.",
    },
    {
      targets: "Alter, Coleman, and Howell's combined constraint",
      label: "No Low-Level Mental Constitution",
      text: "A third proposal combines both earlier ideas: physicalism requires no fundamental mentality and no infinite descent specifically of mentally constituted mentality — that is, no endless chain of levels whose mentality is itself produced by the mentality of their parts. MPW can satisfy this: Alex's mentality is constituted by the arrangement of the Bretts, but the fact that the Bretts happen to also be mental beings plays no role in constituting Alex's mentality, much as a big circle drawn from little circles would still be circular even if the little figures were squares instead — the shape of the parts is irrelevant to the shape they jointly form.",
      reply: "The chapter notes the relevant notion of 'constitution' doing the work here is itself philosophically contested, so some physicalists may be reluctant to lean on it.",
    },
    {
      targets: "Parallel problem for panpsychism",
      label: "MPW cuts the other way too",
      text: "Brown's example creates a mirror-image puzzle for panpsychism, the view that mentality is present everywhere, even at the microphysical level. MPW is mental everywhere, yet seems compatible with panpsychism being false of it, since it contains nothing but brains within brains rather than the sort of ubiquitous proto-mentality panpsychists usually have in mind — and panpsychism is widely thought to be incompatible with physicalism, so if MPW is a physicalist world, something needs to explain why panpsychism doesn't automatically apply to it despite the pervasive mentality.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Physicalism", url: "https://plato.stanford.edu/entries/physicalism/", note: "background on characterizing the physical, including the fundamentality assumption this puzzle challenges" },
    { label: "Stanford Encyclopedia of Philosophy — Panpsychism", url: "https://plato.stanford.edu/entries/panpsychism/", note: "covers the parallel problem Brown's case raises for panpsychism" },
  ],
};
