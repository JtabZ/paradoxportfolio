// manual/content/machine/exclusion-problem.js
//
// Original retelling of The Exclusion Problem — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Your hand brushes a hot pan and you yank it back. Tell the story one
    way and it's complete already: neurons fire, signals travel, muscles
    contract — a fully physical chain with no gaps. Tell it another way and
    pain seems to be doing real work: the burning sensation is what made you
    pull away. Both stories feel true at once, and that's the trouble. If
    physics already has a complete account of why your hand moved, what is
    left for the pain to do?</p>
    <p>The problem bites hardest for anyone who thinks mental properties are
    distinct from physical properties — not identical to any neural firing,
    even if they depend on it. If every physical effect already has a
    sufficient physical cause, a distinct mental property seems to have
    nothing left to contribute: subtract it from the universe and, by
    hypothesis, the physical events unfold exactly the same way. The only way
    to rescue mental causation would be to say the pain caused the retraction
    too, redundantly, alongside the physical cause already doing the job —
    but a hand movement caused twice over, once physically and once
    mentally, strikes most people as an absurd way for the world to work.</p>
    <p>Jaegwon Kim pressed this difficulty into its sharpest form. Unlike
    Princess Elisabeth's old worry about how an unextended soul could push
    around an extended body, Kim's version doesn't depend on dualism's
    specific metaphysics of souls and extension. It turns on a much more
    modest-sounding premise: physics is causally complete, meaning every
    physical event already has a full physical explanation. Grant that, plus
    the claim that mental properties are genuinely distinct from physical
    ones, and the mental seems to get squeezed out of the causal picture
    entirely.</p>
  `,

  stakes: `
    <p>The exclusion problem doesn't only threaten old-fashioned substance
    dualism. It threatens non-reductive physicalism too — the popular
    middle position holding that mental properties are nothing over and
    above the physical, in that they're necessitated by physical properties,
    while still denying that mental properties are literally identical to
    any physical property. A non-reductive functionalist, for instance,
    might say a belief is whatever plays a certain information-storing role
    in a system, a role brains happen to play but silicon could play too.
    That still leaves "being a belief" distinct from any particular physical
    state. And wherever mental properties are distinct from the physical
    properties that do all the causal work, the same exclusion worry
    resurfaces: the mental looks causally idle, a bystander riding along on
    top of a world that was already fully determined without it.</p>
  `,

  tension: [
    {
      targets: "Non-reductive physicalist response",
      label: "Realized, not redundant",
      text: "The non-reductive physicalist can point out that mental properties aren't free-floating; they're realized or constituted by physical properties, the way a plastic queen and a marble queen are both still queens in chess without sharing physical features. Moving the chess piece still requires moving the material it's made of, and moving that material moves the queen — there's no competition between the two descriptions. Likewise, explaining that Jimmy grabbed his umbrella because he believed it was raining doesn't compete with the neural story; it's a different-altitude description of the same events, true regardless of which particular neurons were involved, and underwritten by the physical the whole way through.",
    },
    {
      targets: "Dualist response, option one",
      label: "Deny that physics is complete",
      text: "Some property dualists bite the bullet and reject the completeness of physics outright, holding that certain physical events require non-physical, mental explanations — perhaps finding room for this in the indeterminacy of quantum mechanics.",
      reply: "This runs into an empirical problem: quantum indeterminacy, if it exists at all, seems to be everywhere in nature, not concentrated suspiciously around brains. If mental causation were doing the work of resolving quantum indeterminacy, we'd expect different quantum behavior near minds than elsewhere, and there isn't much evidence of that.",
    },
    {
      targets: "Dualist response, option two",
      label: "Accept harmless overdetermination",
      text: "Other dualists accept that mental causes and physical causes both produce the same effect, redundantly but harmlessly — your hand's withdrawal is fully caused by neural firing and, independently, by the pain. It's an inelegant picture of the world, with causation doing more work than seems needed, but perhaps that oddness is a price worth paying to keep mental causation real.",
    },
    {
      targets: "Russellian monist response",
      label: "Put the mental at the foundation instead",
      text: "A newer strategy, Russellian monism, avoids the problem by relocating mentality rather than defending its causal credentials where it currently sits. On this view, proto-mental properties — not themselves full-blown mental states, but containing the seeds of mentality — ground all physical properties from the bottom up, rather than mentality only showing up once you reach the level of brains. This denies the completeness of physics too, but Russellian monists argue they can do so without running afoul of actual physical evidence, since the proto-mental foundations are doing work beneath, rather than competing with, ordinary physical explanation.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Mental Causation", url: "https://plato.stanford.edu/entries/mental-causation/", note: "surveys the exclusion problem and the responses from both dualists and non-reductive physicalists" },
  ],
};
