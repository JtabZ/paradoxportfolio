// manual/content/perception/molyneuxs-problem.js
//
// Original retelling of Molyneux's Problem — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Imagine someone who has been blind from birth. Over the years they've
    learned, entirely through touch, to tell a cube from a sphere — the sharp
    corners and flat faces of one, the uninterrupted curve of the other.
    Suppose their sight is suddenly switched on, and the two objects are set
    in front of them, unlabeled. Could they tell, by sight alone and before
    touching anything, which object is the cube and which is the sphere?</p>
    <p>William Molyneux posed this question to John Locke in a 1688 letter,
    and philosophers have been refining it ever since. Diderot suggested
    swapping in a flat circle and square to strip out complications from
    depth perception. Leibniz suggested telling the subject in advance which
    object is which, then giving them time to reason it out — turning the
    question from "can they tell immediately" into "can they work it out."
    Later philosophers split the problem further: is the question really
    about shape specifically, or about how space itself is represented across
    the senses, or about whether touch and vision are even tracking the same
    property when they each register "cube-shaped"?</p>
  `,

  stakes: `
    <p>Behind the puzzle sits an old distinction about where our concepts
    come from. Locke held that some properties, like color, are tied to a
    single sense, while others — shape, size, number, motion, what Aristotle
    called the "common sensibles" — seem available through more than one
    sense at once. Molyneux's question asks what that shared availability
    actually amounts to. If touch and vision each deliver their own
    separate, modality-bound representation of "cube," there's no reason the
    newly sighted person should be able to connect them without training. If
    instead there's some common representation of shape underneath both
    senses, sight ought to click into place right away. The thought
    experiment turns a question about concept-formation into a question with
    a definite, if hard to obtain, answer.</p>
  `,

  tension: [
    {
      targets: "Empiricist answer",
      label: "No — the senses don't share their goods",
      text: "Empiricists including Molyneux himself, Locke, and Berkeley answered no. Visual experience of shape and tactile experience of shape are, on this view, simply distinct kinds of ideas. Having learned to sort cube from sphere by touch gives the newly sighted person no automatic bridge to doing the same by sight, because nothing has ever associated the one experience with the other.",
    },
    {
      targets: "Rationalist answer",
      label: "Yes — reason can bridge the senses",
      text: "Leibniz took the opposite view: given the capacity to reason about what's in front of them, the newly sighted person could work out which object was which, even without a trained visual-tactile association already in place.",
    },
    {
      targets: "Splits the difference",
      label: "The sensations differ, but the ideas converge",
      text: "Thomas Reid offered a middle path. The raw sensations themselves — what seeing a cube is like, what touching a cube is like — don't resemble each other, or the object, at all. But Reid thought the ideas those sensations give rise to can still be seen to correspond to one another, allowing for a kind of answer in between flat yes and flat no.",
    },
    {
      targets: "Contemporary affirmative answers",
      label: "A shared spatial framework, or shared worldly properties",
      text: "More recent philosophers have defended yes-answers on different grounds. Gareth Evans argued that visual and tactile representations of space are both organized egocentrically — around the subject's own body — which should let a subject carry the one framework over to the other. John Campbell argued instead that experiences are individuated by the real-world properties they track; if touch and vision are genuinely tracking the very same shape property, the two experiences ought to share some common way of presenting it.",
    },
    {
      targets: "Empirical evidence",
      label: "Real cases of restored sight tend to say no",
      text: "The question needn't stay purely philosophical — it can be tested. An early 18th-century account by William Cheselden described a cataract patient whose restored sight left them unable to identify shapes visually. Centuries later, Project Prakash restored sight to congenitally blind children and found they could not visually pick out Lego shapes they already knew by touch, again pointing to a negative answer.",
      reply: "Critics note that a freshly operated-on visual system isn't yet working normally, so these failures might just reflect temporary visual impairment rather than any deep gap between the senses' representations of shape — the empirical evidence doesn't settle the philosophical question as cleanly as it first appears to.",
    },
  ],

  note: `
    <p>The problem has quietly split into several related but distinct
    questions: whether sight and touch share a common way of representing
    space generally, whether they represent shape in particular the same
    way, and whether the property each sense calls "cube-shaped" is really
    one and the same property at all. Different answers to Molyneux's
    original question can rest on different answers to these finer-grained
    questions.</p>
  `,

  furtherReading: [
    { label: "Degenaar, Marjolein, and Lokhorst, Gert-Jan — \"Molyneux's Problem\" (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/molyneux-problem/", note: "a thorough overview of the historical debate and the empirical evidence" },
  ],
};
