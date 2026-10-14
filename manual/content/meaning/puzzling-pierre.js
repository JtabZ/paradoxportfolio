// manual/content/meaning/puzzling-pierre.js
//
// Original retelling of Puzzling Pierre — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Pierre grows up in rural France speaking only French. From pretty
    postcards, he forms a favorable impression of a certain city and
    happily agrees with the sentence "Londres est jolie" — London is
    pretty. Later in life he moves to London itself, settling by
    circumstance in one of its least attractive neighborhoods. He picks up
    English by immersion, living among English speakers rather than by
    translating from French, and comes to sincerely agree with the English
    sentence "London is not pretty." Nothing is wrong with Pierre's
    reasoning at any single step — in each language, he says exactly what
    a fluent, sincere speaker would say about the city he currently has in
    mind. The twist is that he never realizes the drab city he now lives in
    is the very city shown on those postcards years ago. He still agrees
    with "Londres est jolie" without hesitation, exactly as before.</p>
    <p>So: does Pierre believe London is pretty, or that it isn't? Two
    ordinary, hard-to-deny principles push toward an uncomfortable answer.
    First, "London is not pretty" is simply the correct translation of
    "Londres n'est pas jolie" — translation preserves the proposition
    expressed. Second, when a sincere, competent speaker assents to a
    sentence and understands it, we ordinarily credit them with believing
    what that sentence says — this is exactly how we'd describe any
    ordinary French or English speaker in isolation. Apply both principles
    to Pierre and the conclusion is that he believes London is pretty and
    believes London is not pretty, at the very same time, without being
    irrational, confused, or inconsistent in any way we can point to.
    Saul Kripke designed the case to show this problem doesn't need the
    machinery usually blamed for similar puzzles elsewhere.</p>
  `,

  stakes: `
    <p>A related puzzle motivated Gottlob Frege to argue that the names
    "Hesperus" (the evening star) and "Phosphorus" (the morning star) —
    which both, as a matter of fact, name the planet Venus — differ in
    "sense" even though they share a reference, since someone unaware
    they're the same object can sincerely assent to "Hesperus is not
    Phosphorus" without thereby believing the contradiction "Venus is not
    Venus." Frege used this to reject the Millian view that co-referring
    names are always interchangeable in a sentence without changing what
    is said. Kripke's achievement with Pierre is to generate essentially
    the same kind of puzzle — a rational person apparently holding
    contradictory beliefs — using only translation between two languages
    and an uncontroversial principle about sincere assent, without
    relying on the Millian principle at all. If a puzzle this disruptive
    can be built without disputing Mill, then the original Hesperus/
    Phosphorus puzzle may not actually show what Frege thought it showed.</p>
  `,

  argument: {
    steps: [
      "\"London is not pretty\" is a correct translation of \"Londres n'est pas jolie\"; the two sentences express the same proposition.",
      "When a sincere, competent speaker assents to a sentence S and understands what S means, that speaker believes what S says.",
      "Pierre sincerely assents to \"Londres est jolie\" and understands it, so he believes London is pretty.",
      "Pierre also sincerely assents to \"London is not pretty\" and understands it, so he believes London is not pretty.",
      "Pierre is, by all ordinary measures, perfectly rational throughout.",
    ],
    conclusion: "A perfectly rational person can be correctly described as believing a proposition and believing its negation at the same time — which suggests something is wrong with how we ordinarily ascribe beliefs via assent to sentences, not with Pierre's rationality.",
  },

  tension: [
    {
      targets: "Accepts the contradiction, relocates rationality",
      label: "Contradictory beliefs, rational guises",
      text: "One camp, including Nathan Salmon, David Braun, and Scott Soames, accepts straightforwardly that Pierre believes both propositions and denies that belief ascriptions need to track what an agent can rationally believe at all. On this view Pierre's rationality is preserved not in which propositions he believes but in how he believes them — under different guises or ways of grasping the same content — so holding both beliefs doesn't convict him of irrationality, since he never grasps them together as contradictory. Philosophers in this camp often also accept the Millian principle that sank the original Hesperus/Phosphorus argument, since they're already comfortable with belief ascriptions that outrun an agent's own sense of consistency.",
    },
    {
      targets: "Denies the contradiction via richer content",
      label: "Two cities, two ways of thinking",
      text: "A second camp, including David Sosa and Kent Bach, denies we need to ascribe Pierre two contradictory beliefs at all. Though \"London is not pretty\" does translate \"Londres n'est pas jolie,\" they argue Pierre's two beliefs actually differ in content: the belief behind \"Londres est jolie\" might really be about the city in the postcards, while the belief behind \"London is not pretty\" is about the city he lives in — two distinct, non-contradictory contents, not one proposition believed and disbelieved at once.",
    },
    {
      targets: "Splits belief into two dimensions of content",
      label: "A referential layer and a sense-like layer",
      text: "A further refinement, drawing on Robert Stalnaker, Mark Crimmins, John Perry, and David Chalmers, holds that belief ascription operates on two levels simultaneously: a purely referential level, on which Pierre does believe both that London is pretty and that it is not, and a finer-grained level resembling Frege's senses, which captures the different ways Pierre thinks about the city and explains why he isn't thereby irrational. Which level we foreground in ordinary speech — saying flatly \"Pierre believes London is pretty and not pretty\" versus describing his two distinct ways of thinking about the city — depends on conversational context.",
    },
  ],

  note: `
    <p>Kripke designed the Pierre case partly as a response to Frege: if a
    structurally similar puzzle about rational-seeming contradictory
    belief can be generated purely through translation, without ever
    invoking the Millian principle that two co-referring names are always
    interchangeable, then the original Hesperus/Phosphorus puzzle may not
    actually establish what Frege took it to establish about sense and
    reference.</p>
  `,

  furtherReading: [
    { label: "Kripke, Saul — \"A Puzzle about Belief\" (1979)", note: "the canonical presentation this chapter retells" },
    { label: "Stanford Encyclopedia of Philosophy — Fregean Sense and Reference", url: "https://plato.stanford.edu/entries/frege/", note: "background on Frege's sense/reference distinction that motivates the puzzle" },
  ],
};
