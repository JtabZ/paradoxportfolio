// exhibit.js — What It's Like to Be a Bat
//
// Content model consumed by render-exhibit.js. All prose below is original —
// a retelling of Thomas Nagel's argument (1974), not a quotation from the
// book. The argument structure follows the book's chapter closely; the
// wording is ours.

export const exhibit = {
  // hero defaults to "piece" — the sonar piece sits beside the title.
  heroLine:
    "However well you map a bat's sonar, you still can't climb inside what its world feels like <em>from the inside</em>.",
  titleEffect: "echo",

  pieceHint: "Send a pulse and listen for what comes back.",

  stakes: `
    <p>Physicalism holds that consciousness is, at bottom, a physical thing —
    which is widely taken to mean a creature's experience can in principle be
    explained in fully objective, scientific terms. But experience is
    subjective: there's something it is like to have it, from the inside.
    Can those two claims really sit together? The question gets sharper the
    further a creature's experience is from our own — which is why Nagel
    reaches for a bat.</p>
  `,

  case: `
    <p>A bat spends its night in a kind of hearing that doubles as sight. It
    sends out clicks and reconstructs the room from their echoes: a moth's
    flutter, a wall's distance, the empty air where nothing answered back.
    If echolocation is a form of conscious perception — and it seems
    reasonable to think it is — then there's something it's like for a bat to
    echolocate, the same way there's something it's like for us to see red
    or smell a rose.</p>

    <p>So what is that like? Try to picture it. You can imagine growing
    wings, flying, even hunting insects at night — but that's still a human
    experience with some details changed, not the bat's own. Bat sonar is
    unlike any sense we have, so there's no obvious way to get there by
    modifying something we already know from the inside.</p>

    <p>On its own, that's not yet a problem for physicalism — not being able
    to imagine something doesn't tell us what that something actually is.
    The real pressure comes from a further step: physicalism seems to imply
    that the nature of the bat's experience should be explicable in
    objective terms, without anyone having to adopt the bat's own point of
    view. But a human chiropterologist could know every neuron, every
    circuit, every frequency the bat's brain processes, and still be no
    closer to knowing what it feels like to be that bat. If a complete
    objective description leaves that question exactly as open as it started,
    something strange is going on.</p>
  `,

  argument: {
    steps: [
      "Bat echolocation is a form of conscious experience — there's something it's like to have it.",
      "We can't experience it ourselves, and we can't imagine it either; modifying our own senses doesn't get us there.",
      "That alone doesn't threaten physicalism — physicalism is a claim about what experience is, not about what we're able to picture.",
      "But physicalism also implies the experience should be explicable in objective terms, without taking the bat's own point of view.",
      "A scientist who knew everything about the bat's neurophysiology would still not know what echolocating feels like — complete objective knowledge doesn't close the gap.",
    ],
    conclusion:
      "So we currently have no idea how a subjective experience like this could be fully captured by an objective description — even if physicalism is true. That's a gap in our understanding, not yet a proof that physicalism is false.",
  },

  tension: [
    {
      targets: "Nagel's own view",
      label: "We don't yet have the concepts to see how",
      text: "Nagel compares our position to a philosopher in ancient Greece being told 'matter is energy' centuries before relativity existed. The philosopher could believe it on good authority without understanding how it could be true. We may be in the same spot with physicalism: it might be true, we just lack the theoretical concepts to see how a brain event could be an experience. Nagel is hopeful new concepts could eventually close that gap.",
    },
    {
      targets: "A pessimistic reply to Nagel",
      label: "The gap may never close",
      text: "Others think the mystery is permanent, not temporary: our concept-forming abilities may simply be incapable of grasping how a physical event could be a conscious experience, now or ever. That conclusion is still consistent with physicalism being true — it just says the 'how' will stay forever out of reach for minds like ours.",
    },
    {
      targets: "Rejects physicalism",
      label: "Maybe the gap reveals something real",
      text: "Some philosophers take the puzzlement itself as evidence: not a limit on what we can understand, but a sign that consciousness genuinely isn't a physical phenomenon. That reading motivates non-physicalist theories such as property dualism, where experience is a further kind of fact alongside the physical ones.",
    },
    {
      targets: "Defends physicalism",
      label: "Knowing what it's like may just be an ability",
      text: "Another response holds that 'knowing what it's like to echolocate' just means possessing an ability — to imagine it, recognize it, picture it — rather than possessing a further fact. On this view, Nagel is wrong to conclude anything about the bat's experience from our inability to imagine it; we're simply missing a skill, not a fact.",
    },
    {
      targets: "Defends physicalism",
      label: "Detach the metaphysics from the explanation",
      text: "A third response concedes that we can't currently give an objective account of what bat experience is like, but denies that physicalism ever required one. Physicalism, on this view, is a claim about what experiences are, not about whether their nature can be objectively explained — the two can come apart. Whether that detachment really works is itself a live, contested question.",
    },
  ],

  note: `
    <p>A further objection questions whether introspection — the process by
    which we examine our own experience — is as reliable a guide as Nagel's
    argument assumes it to be. And some question the example itself: people
    who are blind from birth can learn a form of echolocation themselves,
    and nearly everyone uses a faint version of it without noticing, so bat
    sonar may be less alien than it first appears. Even if this particular
    example isn't perfect, the underlying
    challenge — could some experience be too unlike ours for an objective
    description to capture — doesn't depend on bats in particular.</p>
  `,

  furtherReading: [
    {
      label: "Nagel, Thomas — \"What Is It Like to Be a Bat?\" (1974)",
      url: "https://en.wikipedia.org/wiki/What_Is_It_Like_to_Be_a_Bat%3F",
      note: "the canonical presentation this exhibit retells",
    },
    {
      label: "Stanford Encyclopedia of Philosophy — Consciousness",
      url: "https://plato.stanford.edu/entries/consciousness/",
      note: "a broader survey of the subjective-character-of-experience problem this exhibit stages",
    },
  ],
};
