// manual/content/self/split-brains-and-the-unity-puzzle.js
//
// Original retelling of Split Brains and the Unity Puzzle — a paraphrase
// of the book's chapter, not a quotation. Credit lives in the page
// chrome; this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>The brain's two hemispheres are normally linked by a thick bundle
    of nerve fibers, the corpus callosum. Starting in the 1960s, surgeons
    cut this bundle in severe epilepsy patients to stop seizures from
    spreading between hemispheres — and the surgery worked remarkably
    well. Afterward, these "split-brain" patients function normally in
    daily life. But carefully designed experiments reveal something
    stranger underneath.</p>
    <p>Take a typical split-brain patient, call him Twain. Hide his left
    hand under a table and place a phone in it. Because the hemisphere
    that controls speech has no access to information from the left hand,
    when asked what he's holding, Twain says "I don't know." Yet if you
    show him a box of objects and ask him to pick out what he was just
    holding, his left hand reaches for the phone without hesitation; asked
    to draw it, that hand sketches a phone. In another test, flash the
    word "heart" so that "he" lands only in his left visual field and
    "art" only in his right. Asked aloud what he saw, Twain says "art."
    But asked to point with his left hand to a card showing the word he
    saw, he points to "he." Each hemisphere seems to know something the
    other doesn't.</p>
    <p>So is Twain one person with one mind, as his ordinary behavior
    suggests, or two people with two separate minds, as the lab
    experiments suggest? And if his brain was structurally no different
    from anyone else's before the surgery just severed an existing
    connection, what does that imply about the rest of us?</p>
  `,

  stakes: `
    <p>Elizabeth Schechter frames this as the unity puzzle: three claims
    that each sound right on their own but can't all be true together. (1)
    A split-brain subject has two minds. (2) A split-brain subject is a
    single person. (3) Each person has exactly one mind. Accept any two
    and you must reject the third, yet each has real support — from the
    disunity revealed in the lab, from the behavioral and self-reported
    unity of everyday life, and from how deeply the one-mind-per-person
    assumption is built into our ordinary concept of a person.</p>
  `,

  tension: [
    {
      targets: "Rejects claim 1 (serial switching)",
      label: "One stream, taking turns",
      text: "Tim Bayne argues the two hemispheres don't run two simultaneous minds but realize a single stream of consciousness serially — sometimes the left hemisphere is \"in charge,\" sometimes the right, switching back and forth quickly enough to create the appearance of two parallel minds when there's really just one, alternating.",
    },
    {
      targets: "Rejects claim 1 (resists the question)",
      label: "Don't force a whole number",
      text: "Thomas Nagel takes a different route to denying two separate minds: rather than insisting the answer must be \"one,\" he suggests the question \"how many minds does Twain have?\" simply has no good whole-number answer. We can describe his conscious activity without being forced to parcel it into one mind or two — an extraordinary case needn't fit the categories built for ordinary ones.",
    },
    {
      targets: "Radical skepticism about unity generally",
      label: "Maybe none of us is unified",
      text: "Kathleen Wilkes pushes further than Nagel, questioning whether \"a unified mind\" is even a coherent notion to begin with. On her view, even non-split brains might just be systems that happen to cooperate closely, with the feeling of unity more illusion than fact — split-brain patients would then differ from the rest of us only in degree.",
    },
    {
      targets: "Rejects claim 2",
      label: "Two people all along",
      text: "Roland Puccetti takes the opposite tack, defending the radical claim that split-brain patients really are two persons — and, more radically still, that all of us, intact corpus callosum or not, are secretly two persons sharing a skull. This dovetails with Derek Parfit's view that personal identity isn't what matters for survival: if there wasn't a single person after the surgery, the one person before it didn't become either post-surgery individual — but survived as both, with everything that matters in survival intact for each.",
    },
    {
      targets: "Rejects claim 3",
      label: "Bite the hardest bullet",
      text: "Schechter herself defends giving up the one-mind-per-person principle, arguing this is less revisionary than it sounds once we look closely at how self-consciousness actually operates in split-brain subjects — on her account, the structure that produces unified self-consciousness in ordinary people isn't so different from the structure producing two minds in split-brain patients, suggesting the ordinary case may harbor more multiplicity than we assume.",
    },
    {
      targets: "Supports claim 2",
      label: "Everyday coordination counts for something",
      text: "In favor of treating Twain as a single person: split-brain patients tie their shoes, play the piano, and swim — activities needing coordination across both sides of the body — and they describe themselves, introspectively, as one person, not as housing a hidden second self. Disunity shows up only under artificial lab conditions, much as temporary disunity under hypnosis or amnesia doesn't normally make us doubt someone has one mind.",
    },
  ],

  furtherReading: [
    { label: "Wikipedia — Split-brain", url: "https://en.wikipedia.org/wiki/Split-brain", note: "background on the commissurotomy surgery and the hemisphere-specialization findings behind the case" },
  ],
};
