// manual/content/meaning/twin-earth-and-arthritis-man.js
//
// Original retelling of Twin Earth and Arthritis Man — a paraphrase of
// the book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Picture a duplicate Earth, identical to ours in every way except
    one: the clear liquid that fills its oceans and comes out of its
    faucets isn't H2O. It's a different compound entirely, made of
    elements unknown on our Earth, abbreviated XYZ. It looks, tastes, and
    behaves exactly like water, and the local English-speakers call it
    "water" too — but chemists agree it isn't water, just a convincing
    double of it, sometimes called "twater." Now take Amari, an ordinary
    person on our Earth who has no idea water is H2O, and her molecule-for
    -molecule duplicate on Twin Earth, Amari-TE. Inside their skin, the two
    are indistinguishable — same brain states, same behavior, same
    conscious experience. Only their surroundings differ: one swims in
    H2O, the other in XYZ.</p>
    <p>Both say, "I believe water is refreshing." Tyler Burge's question
    is whether they believe the very same thing. Internalism says yes:
    since nothing about them, considered from the skin inward, differs,
    their belief contents must be identical too, just aimed at different
    stuff out in the world. Burge says no. Amari's belief is about water —
    H2O — and nothing else could make it true. Amari-TE's belief is about
    twater and nothing else. Different concepts, different propositions,
    even though the thinkers themselves are perfect internal duplicates.
    If Burge is right, what you believe isn't fixed purely by what's
    going on inside your head; your physical surroundings help constitute
    it.</p>
    <p>Burge's second case shows the same thing can happen through social
    surroundings alone, with no chemistry involved. Meet Arthritis-man: he
    has ordinary beliefs about arthritis in his wrists and ankles, but he
    also believes, mistakenly, that he's developed arthritis in his thigh
    — not realizing arthritis is strictly a joint disease and thighs don't
    have joints. Now imagine a counterfactual community exactly like ours
    in every way Arthritis-man could introspect, except that in that
    community doctors and dictionaries alike use "arthritis" more broadly,
    to cover various non-joint ailments too, including the thigh
    condition. Arthritis-man's twin in that community is his internal
    duplicate, saying all the same sentences for all the same reasons. Yet
    Burge argues the twin's word, and thought, isn't arthritis at all —
    it's a different concept entirely, which Burge's commentators have
    nicknamed "tharthritis." Nothing changed inside either man's head; what
    changed is what the surrounding language community means by the
    relevant term, and that alone is enough to shift which concept each
    man's thought contains.</p>
  `,

  stakes: `
    <p>At stake is internalism (also called individualism): the view that
    your mental contents — what your beliefs and desires are about — are
    fixed entirely by features internal to you, so that two people who are
    exact internal duplicates must have exactly the same thoughts, no
    matter how different their environments are. Burge's externalism (he
    calls it "anti-individualism") denies this, holding that content can
    depend constitutively on the physical world (as with water) or on the
    surrounding linguistic community (as with arthritis). The stakes
    reach beyond semantics: if content depends partly on the world outside
    the head, this bears on mental causation, on how we could possibly
    know our own minds through introspection alone, and on physicalist
    theories like mind-brain identity theory that treat mental states as
    purely internal, intrinsic features of a person.</p>
  `,

  argument: {
    steps: [
      "Amari and Amari-TE are indistinguishable in every internal, individualistic respect — same functional states, same conscious experience, same behavior.",
      "Amari's belief, expressed as \"water is refreshing,\" is true only if H2O is refreshing; Amari-TE's parallel belief is true only if XYZ is refreshing.",
      "Different truth-conditions mean different propositions, built from different concepts (water versus twater).",
      "So Amari and Amari-TE have different belief contents despite being perfect internal duplicates.",
      "The arthritis case shows the same conclusion follows even without any physical difference at all — purely from a difference in the surrounding community's use of a term.",
    ],
    conclusion: "Mental content is not fixed solely by a thinker's internal, individualistic properties; it depends constitutively on features of the thinker's physical and social environment. Internalism is false.",
  },

  tension: [
    {
      targets: "Reinterprets Arthritis-man's belief",
      label: "He never had the concept to begin with",
      text: "Some critics argue Arthritis-man's actual beliefs never involved a concept of a disease confined to joints in the first place — his mistake is purely linguistic, a false assumption about what the public word \"arthritis\" expresses, rather than evidence that his own concept shifts across the counterfactual scenario.",
      reply: "Burge replies that Arthritis-man clearly shares some beliefs with his doctor — for instance that he has arthritis in his ankles — and denying he possesses the ordinary arthritis concept makes that shared belief hard to explain.",
    },
    {
      targets: "Distrusts the method",
      label: "Why should intuitions about a thought experiment settle this?",
      text: "Other critics, including Noam Chomsky, question whether our reactions to an exotic hypothetical like Arthritis-man's should carry the evidential weight Burge gives them.",
    },
    {
      targets: "Rejects the internal/external distinction itself",
      label: "There's no clean line between inside and outside",
      text: "Brie Gertler argues that every standard way of drawing the internal/external boundary breaks down. Take the most natural one, a spatial criterion: internal properties are inside the skull or skin. On that reading Descartes counts as an externalist, since he denies that mental content is specifiable in spatial terms at all — yet Descartes, famous for the Evil Demon scenario where all our beliefs could stay fixed even if the external world were an illusion, is the textbook internalist. Gertler concludes the whole internalism/externalism debate may rest on an incoherent distinction and recommends abandoning it.",
    },
    {
      targets: "Splits content into two kinds",
      label: "Narrow content alongside wide content",
      text: "A common middle path distinguishes narrow content, shared by all internal duplicates, from wide content, which depends on the environment the way Burge describes. Amari and Amari-TE would then share their narrow content while differing in wide content — preserving something internalists want without denying Burge's cases.",
      reply: "The distinction remains contested; some, including Yli-Vakkuri and Hawthorne, argue there is no coherent, non-trivial notion of narrow content to be had in the first place.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Externalism About the Mind", url: "https://plato.stanford.edu/entries/content-externalism/", note: "surveys Twin Earth, the arthritis case, and the narrow/wide content debate" },
  ],
};
