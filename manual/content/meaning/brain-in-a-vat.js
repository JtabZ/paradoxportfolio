// manual/content/meaning/brain-in-a-vat.js
//
// Original retelling of The Brain in a Vat — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Everything you know about the world outside your mind arrives
    through your senses, and your conscious awareness of a desk or a pen
    is really just the end result of signals arriving at your brain. That
    raises an old worry, sharpened by Descartes: if the same brain activity
    could in principle be produced some other way, how would you tell the
    difference from the inside? Suppose, instead of signals from eyes and
    hands, a vat-dwelling brain had its neurons stimulated directly by a
    sufficiently powerful computer. Everything would seem exactly as it
    does right now — the desk, the pen, the click of keys — with nothing
    inside the experience to reveal the trick. If that scenario is
    indistinguishable from the inside, how could you ever know you're not,
    right now, a brain in a vat (a "BIV")?</p>
    <p>Hilary Putnam offered an unusual response: not a way to rule out
    being a BIV through evidence, but an argument that the skeptical
    hypothesis defeats itself the moment you try to state it. Words get
    their meaning by standing in the right causal relationships to things
    in the world — a string of letters that happened to resemble "desk"
    spelled out by a random arrangement of stars wouldn't thereby refer to
    desks, because it bears no causal connection to desks. Now suppose you
    actually are a BIV. Your use of the word "desk" isn't caused by desks
    at all; it's caused by the outputs of a program. The same goes for your
    words "brain" and "vat" — they aren't caused by brains and vats, so
    they can't refer to brains and vats either. So the sentence "I am a
    brain in a vat," spoken by an actual BIV, doesn't manage to say that
    the speaker is a brain in a vat. If the same reasoning carries over
    from language to thought — if what a thought is about likewise depends
    on causal links to the world — then a real BIV couldn't even think the
    thought that it is a BIV. And if the skeptical hypothesis can't
    coherently be entertained by exactly the people it's supposed to
    worry, the worry collapses: either you can genuinely think "I might be
    a BIV," in which case you're probably not one, or you are one, in
    which case you can't be thinking that at all.</p>
  `,

  stakes: `
    <p>Descartes' version of this worry — his evil demon, systematically
    deceiving the senses — is usually read as a purely epistemological
    threat: since you can't rule out being deceived, you can't know much of
    anything about the external world. But there's a different way to take
    these scenarios, traceable to Berkeley's reply to Descartes: maybe
    being a BIV isn't a case of being tricked about the world at all, but a
    case of the world being built differently than you assumed. If
    reference depends on causal history the way Putnam argues, the BIV
    hypothesis isn't just an epistemic threat to be refuted — it's a case
    study in how deeply what our words and thoughts are about depends on
    the kind of environment that produced them.</p>
  `,

  argument: {
    steps: [
      "A term refers to something only by standing in the right causal relationship to that thing (the causal theory of reference).",
      "If you are a BIV, your use of the word \"brain\" is caused by a computer program, not by brains, and likewise for \"vat.\"",
      "So, if you are a BIV, your sentence \"I am a brain in a vat\" does not refer to brains and vats, and therefore does not express the proposition that you are a brain in a vat.",
      "If thought content depends on the same kind of causal link to the world that reference does, the same reasoning applies to the thought itself, not just the sentence.",
      "So a genuine BIV could not even think, truly or falsely, that it is a BIV.",
    ],
    conclusion: "The hypothesis \"I am a brain in a vat\" is self-defeating for anyone in a position to entertain it: if you can coherently think it, you're not in the scenario it describes, so the traditional skeptical worry can be set aside.",
  },

  tension: [
    {
      targets: "Limits the argument's reach",
      label: "Only some envatment scenarios are self-defeating",
      text: "Anthony Brueckner and others point out that Putnam's argument only works against BIV scenarios where the subject has never had any causal contact with brains and vats. If you were a normal, embodied person last night and got envatted while sleeping, your words \"brain\" and \"vat\" would retain whatever reference they acquired during your earlier, non-envatted life. That version of the hypothesis isn't self-defeating at all, so Putnam's argument doesn't touch it.",
    },
    {
      targets: "Reframes the scenario rather than refuting it",
      label: "Reality+ : the Matrix isn't an illusion, just a different metaphysics",
      text: "David Chalmers extends the Berkeley-style move to the Matrix, the modern descendant of the BIV scenario. When a person inside the Matrix sits down at a virtual desk, is their belief that they're sitting at a desk false? Chalmers argues no: the underlying physics of our own, non-simulated world is already far stranger than naive intuition suggests, involving things like quantum fields or vibrating strings rather than solid little desk-shaped particles. If we don't conclude that desks are unreal just because their foundations are strange, we shouldn't conclude that Matrix-desks are unreal either — they're just built from computational processes instead of atoms. Tables and chairs exist in the Matrix; they're simply made of different stuff than we assumed.",
    },
    {
      targets: "Raises a puzzle about whose concepts are correct",
      label: "Dave and Dan's desks",
      text: "Chalmers pushes the thought further with two people, Dave and Dan, raised outside the Matrix as maintenance workers who have genuine, non-simulated desks. Dan insists the people inside the Matrix don't really have desks, since nothing in the Matrix is \"solid, three-dimensional, heavy\" the way his desk is. Dave insists the Matrix-dwellers are perfectly right that they're sitting at desks. Chalmers suggests both are correct, because \"desk\" means something different in each case: Dan and Dave's concept of desk picks out ordinary, non-computational objects, while the Matrix-dwellers' concept of desk, formed entirely within the simulation, correctly picks out the computationally-grounded objects around them. What a thought or word is about, once again, turns out to depend on the kind of world that produced it.",
    },
  ],

  note: `
    <p>The scenario is the direct ancestor of the 1999 film The Matrix,
    where humans are kept in pods and fed a simulated reality indistinguishable
    from the real thing from the inside. The chapter uses Chalmers' reading
    of the Matrix to argue that, unlike Descartes' demon, the Matrix
    hypothesis need not be read as a skeptical nightmare at all — just a
    surprising story about what the world beneath our beliefs is made of.</p>
  `,

  furtherReading: [
    { label: "Putnam, Hilary — Reason, Truth and History (1981)", note: "the canonical source for the brain-in-a-vat argument" },
    { label: "Internet Encyclopedia of Philosophy — The Brain in a Vat Argument", url: "https://iep.utm.edu/brain-in-a-vat-argument/", note: "overview of Putnam's self-defeat argument and its critics" },
    { label: "Stanford Encyclopedia of Philosophy — Skepticism and Content Externalism", url: "https://plato.stanford.edu/entries/skepticism-content-externalism/", note: "fuller discussion of the causal theory of reference as a response to skepticism" },
  ],
};
