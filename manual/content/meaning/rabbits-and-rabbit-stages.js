// manual/content/meaning/rabbits-and-rabbit-stages.js
//
// Original retelling of Rabbits and Rabbit Stages — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome; this
// file holds only the paraphrased content.

export const entry = {
  case: `
    <p>You're an explorer dropped into a tribe whose language you've never
    heard. A rabbit darts past, and your hosts shout "Gavagai!" You start
    sketching a translation manual, and the first guess seems obvious:
    "There goes a rabbit!" That's what you'd say in their position, so
    surely that's what they mean.</p>
    <p>But obvious isn't the same as forced. "There goes an undetached
    rabbit-part!" fits the scene just as well. So does "There goes a
    momentary stage in a rabbit's existence!" You might protest that an
    actual whole rabbit went by, not a part or a passing stage of one — but
    the manual isn't supposed to describe this one sighting, it's supposed
    to capture what "Gavagai!" means whenever it's used, including on
    occasions prompted by a convincing fake rabbit rather than a real one.
    And once you restrict yourself to what can actually be observed —
    patterns of light hitting the eye, sounds coming out of the mouth — that
    evidence fits all three translations equally well. Nothing you can
    watch or measure favors "rabbit" over "rabbit-stage."</p>
    <p>Maybe more data would settle it. Suppose you work out that their word
    "Bleeg" means "is the same as," and you confirm that they say "Bleeg
    Gavagai!" each time the rabbit reappears. That looks promising — the
    rabbit-stage you see this time isn't the one from before, so maybe this
    rules out "rabbit-stage" as a reading of "Gavagai." But the same
    indeterminacy just resurfaces one level up: "Bleeg" could equally well
    mean "belongs with" rather than "is the same as," and nothing in the
    observable evidence tells you which. Pile on as much observation as you
    like — the gap never closes.</p>
  `,

  stakes: `
    <p>W.V.O. Quine built this case to defend a startling claim about
    meaning in general, not just about translating unfamiliar languages.
    He held that understanding meaning scientifically requires setting
    aside our hunches about what we intend and sticking strictly to
    objective facts — and for language, the only objective facts available
    are dispositions to produce verbal behavior given certain sensory
    stimulation. If that is all meaning ever amounts to, then whenever
    words are used meaningfully, there will typically be several
    incompatible things they could be taken to mean, with nothing that
    makes one of them the right answer. And crucially, Quine insists this
    indeterminacy isn't a quirk of translating a strange tribe's speech —
    run the same argument on English, from the tribe's point of view
    looking at us, and ordinary sentences like "Smith is tall" come out just
    as indeterminate as "Gavagai."</p>
  `,

  argument: {
    steps: [
      "Meaning, understood objectively and scientifically, consists in nothing beyond dispositions to produce verbal behavior in response to sensory stimulation.",
      "The sensory stimulation that prompts \"Gavagai!\" (the pattern of light reaching the eye) is equally compatible with several incompatible translations: \"rabbit,\" \"undetached rabbit-part,\" and \"rabbit-stage.\"",
      "No amount of further behavioral observation can break the tie, since any new observation faces the identical problem one level up (as with \"Bleeg\").",
      "Therefore there is no fact of the matter about which translation is correct — all the candidates are equally correct.",
    ],
    conclusion: "Meaning is indeterminate: for any sentence in any language, including our own, there are multiple, mutually inconsistent things it could mean, with nothing that fixes one of them as the real one.",
  },

  tension: [
    {
      targets: "Rejects the inference",
      label: "Underdetermination isn't indeterminacy",
      text: "Noam Chomsky grants Quine's starting point — that the observable evidence doesn't settle which hypothesis about \"Gavagai\" is correct — but denies that this establishes indeterminacy. Scientific hypotheses in general outrun the evidence for them; physicists face the same gap between data and theory all the time, yet nobody concludes there's no truth about which physical theory is correct.",
      reply: "Quine can respond that Chomsky's parallel smuggles back in exactly what Quine denies: that there's some fact about meaning over and above the observable, physical dispositions to respond to stimuli. If you reject that extra fact from the outset, as Quine does, the physics analogy doesn't get a grip.",
    },
    {
      targets: "Commonsense appeal",
      label: "I just know what I mean",
      text: "A natural reaction is simply to insist: I know what my own words mean, at least some of the time. Several philosophers, including John Searle, defend versions of this response.",
      reply: "Quineans reply that this move assumes meaning is at least partly a psychological fact, privately available to the speaker — which is precisely the behaviorist assumption Quine's argument sets out to reject. Your sense of knowing what you mean doesn't itself count as evidence, on his view, since psychological states only matter insofar as they produce responses to stimuli.",
    },
    {
      targets: "Reductio of the premises",
      label: "The absurd conclusion indicts the starting assumption",
      text: "Searle treats Quine's argument as a reductio: if a seemingly reasonable premise generates an absurd result, that's reason to reject the premise rather than accept the result. Quine starts from the assumption that meaning is nothing but objective facts about dispositions to respond to external stimuli. We independently know that meaning rabbit differs from meaning rabbit-stage, and that difference seems to rest on the psychological states of the speaker — something Quine's assumption rules out by fiat. Better to drop the assumption than the distinction.",
    },
    {
      targets: "Accepts the conclusion, tries to soften it",
      label: "Relativize meaning like position and velocity",
      text: "Quine answers the charge of absurdity by comparing meaning to position and velocity in physics: a particle has these only relative to a coordinate system, and likewise words have meaning only relative to a language taken as the frame of reference.",
      reply: "The analogy strains under its own weight: a particle's position and velocity consist entirely in its relations to the coordinate system, full stop. Meaning doesn't seem to work that way. Which particular meaning a word has is relative to a language — \"gift\" means present in English and poison in German — but meaning itself, the thing we're asking whether a translation preserves, doesn't look like it's purely a relation internal to one language.",
    },
    {
      targets: "Accepts the conclusion from a different direction",
      label: "Even non-behaviorists land here",
      text: "Donald Davidson rejects behaviorism about the mind but still arrives at a near-identical conclusion about meaning, holding that all semantic facts are public facts, with no privileged room for a speaker's private access to what she means. Since public evidence underdetermines reference the same way Quine describes, Davidson accepts that reference is inscrutable even for one's own words.",
    },
  ],

  note: `
    <p>Quine and Davidson don't treat indeterminacy as a dead end. Both
    propose constraints for assigning meaning despite the lack of a single
    correct answer — Quine's principle of charity (translate so as to
    maximize agreement) and David Lewis's rationalization principle (treat
    speakers as rational agents) among them. The thought is that even if no
    translation is uniquely correct, some are still more useful or more
    defensible than others.</p>
  `,

  furtherReading: [
    { label: "Quine, W.V.O. — Word and Object (1960)", note: "the canonical source for the indeterminacy of translation" },
    { label: "Internet Encyclopedia of Philosophy — The Indeterminacy of Translation and Radical Interpretation", url: "https://iep.utm.edu/indeterm/", note: "overview of Quine's argument and the surrounding debate" },
  ],
};
