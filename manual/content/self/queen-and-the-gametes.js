// manual/content/self/queen-and-the-gametes.js
//
// Original retelling of The Queen and the Gametes — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome; this
// file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Take Queen Elizabeth. Did she have to be born of royal blood? That
    seems doubtful — her family's rise to power was itself a contingent
    turn of history, one that easily might not have happened. But what
    about her biological origins specifically — the particular sperm and
    egg, call them g, that produced her? Could she have existed while
    originating from an entirely different pair of gametes, say ones
    belonging to Harry and Bess Truman?</p>
    <p>At first this sounds easy to imagine: picture a tabloid headline
    revealing a secret swap at birth. But that's not quite the question.
    The question isn't whether we can be certain she didn't originate
    from different gametes — it's whether, granting that she did
    originate from g, there's some other possible way history could have
    gone in which she still exists but comes from different gametes
    instead. And it doesn't help to point out that someone qualitatively
    just like Elizabeth — same looks, same reign, same demeanor — could
    have come from different gametes; that would be a different woman,
    not an answer about Elizabeth herself.</p>
    <p>Saul Kripke's answer is that there is no such possible world:
    anything originating from different gametes simply would not be this
    object — would not be Elizabeth.</p>
  `,

  stakes: `
    <p>Kripke raised this case to defend a once-startling claim: that
    there are necessary truths we can only discover empirically, not by
    pure reflection. His paradigm cases — water is necessarily H2O,
    heat is necessarily molecular kinetic energy — concern types of
    stuff. The Queen case is stranger, because it claims a necessary
    connection between two apparently distinct individual things: a
    person and a particular pair of gametes. If Kripke is right, this
    seems to threaten the broadly Humean principle that there are no
    necessary connections between distinct existences, and it sits
    uneasily with any view on which your identity is purely a
    psychological or spiritual matter, entirely independent of which
    physical material you happened to originate from (compare Chapters
    39, 41, and 42).</p>
  `,

  tension: [
    {
      targets: "Supports the necessity of origin",
      label: "The parallel case of the wooden table",
      text: "Kripke extends the same reasoning to a table t made from a particular block of wood b, asking whether t could instead have been made from a totally different block, or even from cleverly hardened ice. His answer is again no, and for the same reason: that we can imagine a qualitatively similar table made from different material doesn't show that this very table could have had different origins. From cases like this he draws a general essentiality-of-origins principle — a material object can't have originated from different matter than it actually did.",
    },
    {
      targets: "Challenges the inference from inconceivability",
      label: "Hard to imagine isn't the same as impossible",
      text: "Even if we grant that we can't picture Elizabeth herself failing to originate from g, that may just reflect limits on our imagination rather than a genuine metaphysical barrier. The move from \"I can't imagine X\" to \"X is impossible\" needs independent support that merely failing to conjure a scenario doesn't supply.",
    },
    {
      targets: "Supplies independent arguments",
      label: "Sufficiency conditions and branching time",
      text: "Several philosophers have tried to supply what Kripke's intuition alone doesn't: an argument. Some, like Nathan Salmon and Graham Forbes, develop sufficiency conditions spelling out exactly what it would take for something in another possible world to count as this very table or this very Queen. Others, like J. L. Mackie, model possibility as branching timelines that only fork off after the object in question is actually produced — so no branch exists in which the Queen originates differently, because the branches only start to diverge from the moment g actually produces her.",
    },
    {
      targets: "Local-factors argument",
      label: "What could have stopped it?",
      text: "Guy Rohrbaugh and Louis deRosset argue for the same conclusion from a different angle: whatever could have prevented a particular object from being produced out of a particular hunk of material must be a local factor — something affecting the material itself, the tools, or the artisan involved in that specific production process. A scenario where the Queen simply originates from different gametes altogether doesn't trace back to any such local factor, which is reason to think it isn't a genuine possibility at all.",
    },
  ],

  note: `
    <p>None of these arguments has gone unchallenged, and the book is
    careful to leave the question open: whether the Queen could have
    existed without originating from g — and so whether our own
    biological origins are essential to who we are — remains unresolved
    in the literature.</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Essential vs. Accidental Properties", url: "https://plato.stanford.edu/entries/essential-accidental/", note: "background on the necessary/contingent distinction underlying Kripke's argument" },
  ],
};
