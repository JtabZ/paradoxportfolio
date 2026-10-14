// manual/content/machine/hempels-dilemma.js
//
// Original retelling of Hempel's Dilemma — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Physicalists say everything is physical, and dualists deny it. But
    what does "physical" even mean? Descartes had a tidy answer — to be
    physical is to be extended in space — but that definition hasn't aged
    well: modern physics is full of things, like gravitational force,
    that don't obviously fit his mold. The natural fix is to defer to
    science itself: something counts as physical if physical theory posits
    it (or if it's built from things physical theory posits).</p>
    <p>But which physical theory? Not our current theory — it's surely
    incomplete and probably wrong in places, so defining "physical" by its
    lights would make physicalism hostage to whatever gaps and errors
    current physics happens to have. The obvious fix is to defer instead
    to a completed, ideal physical theory. But now a different problem
    appears: nobody knows what a completed physics would say. For all we
    currently know, finished physics might turn out to posit something
    fundamentally mental. If it did, then even the sort of
    irreducible, free-floating mentality dualists believe in would
    technically count as "physical" by this definition — collapsing the
    very distinction between physicalism and dualism the definition was
    supposed to preserve.</p>
    <p>This is Hempel's dilemma, raised by Carl Hempel and developed
    further by Barbara Gail Montero: define "physical" by current physics
    and the definition is almost certainly inaccurate; define it by ideal
    physics and the definition may turn out to be empty of contrast with
    dualism.</p>
  `,

  stakes: `
    <p>If no one can say exactly what "physical" means, the entire
    physicalism/dualism debate — one of the organizing debates in
    philosophy of mind — risks becoming unclear about what, precisely, is
    even being disputed. Some conclude from this that the debate should
    simply be abandoned. Most philosophers resist that conclusion and
    instead try to find a way between the dilemma's two horns.</p>
  `,

  tension: [
    {
      targets: "Accepts horn one",
      label: "Defer to current physics anyway",
      text: "Andrew Melnyk argues we can define the physical by reference to current theory even knowing it's imperfect, pointing out that scientists routinely favor a hypothesis as the best available option without believing it's actually true.",
      reply: "Barbara Gail Montero responds that favoring a theory as the best available isn't the same as being committed to its truth, whereas physicalism is normally understood as committing to the truth that everything is physical. She adds that restricting the comparison to historical and contemporary rival theories is hard to justify, since future theories are likely to be more accurate still.",
    },
    {
      targets: "Accepts horn two, with a patch",
      label: "Defer to ideal physics, but rule out fundamental mentality",
      text: "Jessica Wilson embraces deference to ideal physical theory but adds a No Fundamental Mentality constraint: whatever ideal physics posits counts as physical only if none of it is fundamentally mental. This blocks the troubling scenario where ideal physics vindicates dualism-style mentality while still calling it 'physical.'",
      reply: "A residual worry remains that this still leaves the content of physicalism oddly open-ended, since we still don't know what ideal physics will say, beyond the one thing it's been stipulated not to include.",
    },
    {
      targets: "Rejects deference to physical theory altogether",
      label: "Characterize the physical by resemblance to paradigm cases",
      text: "Rather than deferring to any physical theory, some propose characterizing the physical as whatever resembles paradigm physical things like rocks and trees in the relevant respects — sidestepping both horns since no theory is being deferred to at all.",
      reply: "This runs into the problem that it's unclear what counts as a 'paradigm' physical object or what the 'relevant respects' of resemblance are supposed to be — and an idealist would simply deny that rocks and trees are paradigmatically non-mental in the first place.",
    },
    {
      targets: "Negative characterization",
      label: "Define the physical as 'not fundamentally mental'",
      text: "The via negativa approach sidesteps deference to any physical theory by characterizing the physical purely negatively — to be physical is just to not be fundamentally mental.",
      reply: "The trouble is that 'not fundamentally mental' is itself an open-ended description. It leaves unclear which of many possible features would or wouldn't satisfy it, which threatens to make central debates in philosophy of mind, such as whether a zombie world is conceivable, just as hard to evaluate as before.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Physicalism", url: "https://plato.stanford.edu/entries/physicalism/", note: "surveys the problem of defining 'physical' and the main responses to Hempel's dilemma" },
  ],
};
