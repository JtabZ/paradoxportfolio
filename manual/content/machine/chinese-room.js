// manual/content/machine/chinese-room.js
//
// Original retelling of The Chinese Room — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Imagine you're sealed in a room with a rulebook and stacks of paper
    covered in characters you cannot read — to you, they're just shapes.
    The rulebook consists entirely of instructions like "if you see this
    shape, output that shape." Someone slides a sheet of symbols through a
    slot in the door. You find the matching rule, locate the sheet it
    tells you to produce, and slide it back out. Another sheet arrives;
    you repeat the process. Over time you get remarkably fast at this,
    without ever learning what a single character means.</p>
    <p>Now suppose the characters are Mandarin, and the person outside is
    a fluent Mandarin speaker having what feels, from their side, like a
    wide-ranging, coherent conversation. You have, in effect, passed the
    Turing Test for Mandarin — convincingly enough to fool a native
    speaker. But you still don't understand a word of what either of you
    "said." John Searle built this scenario to argue that no amount of
    rule-following, however sophisticated, adds up to genuine
    understanding: in his phrase, syntax is not sufficient for semantics.
    Since a digital computer running a program does exactly what you did
    in the room — manipulate symbols according to syntactic rules, with no
    access to what they mean — Searle concludes a computer could never
    achieve real understanding purely by running the right program, no
    matter how good the program is.</p>
  `,

  stakes: `
    <p>The target is "strong AI": the view that a computer running the
    right program doesn't just simulate a mind but genuinely has one,
    complete with real understanding. The case also threatens
    functionalism more broadly. Functionalists often describe the
    mind-brain relationship as being like software to hardware, but in the
    Chinese Room, you are running the correct "software" for understanding
    Mandarin — the program is, by hypothesis, as good as any such program
    could be — yet you clearly aren't in a state of understanding Mandarin.
    If the right functional organization can be present without
    understanding, functionalism looks unable to explain intentionality,
    the "aboutness" that makes a mental state about something rather than
    an empty shuffling of symbols.</p>
  `,

  argument: {
    steps: [
      "If strong AI is true, then the person in the Chinese Room — who is doing exactly what a computer running the ideal Mandarin-understanding program would do — understands Mandarin.",
      "The person in the Chinese Room does not understand Mandarin; they are only matching shapes to shapes.",
    ],
    conclusion: "Strong AI is false: running the right program, however sophisticated, is not sufficient for genuine understanding.",
  },

  tension: [
    {
      targets: "Systems Reply — rejects premise 1",
      label: "The understanding belongs to the whole system",
      text: "This reply holds that Searle is looking in the wrong place: strong AI attributes understanding to the entire system — person plus rulebook plus paper — not to the person alone, so the person's lack of understanding doesn't show the system as a whole lacks it.",
      reply: "Searle counters by having the person memorize the entire rulebook, so that they now constitute the whole system by themselves. Even so, memorizing a rulebook of syntactic rules doesn't seem to produce any understanding of Mandarin in that person — the intuition that something is missing survives the merger.",
    },
    {
      targets: "Robot Reply — rejects premise 1",
      label: "The problem is the lack of sensory grounding",
      text: "This reply locates the missing ingredient in the system's isolation from the world: without sensory organs and real-world interaction, the symbols being manipulated can never get hooked up to the objects and states of affairs they're supposed to represent.",
      reply: "Searle imagines embedding the whole room inside a robot body equipped with cameras and sensors, so that some symbols now arrive via perception of the world. He argues this changes nothing: the person inside is still just manipulating symbols without understanding them, regardless of the symbols' origin — and he adds that conceding sensory grounding is necessary tacitly concedes his own conclusion, that syntax alone never gets you to understanding.",
    },
    {
      targets: "Churchlands' Luminous Room parallel",
      label: "The argument's structure proves too much",
      text: "Paul and Patricia Churchland construct a parallel case: wave a magnet by hand as fast as you like, and you'll never produce visible light, which might seem to show electromagnetic forces can't produce light at all — except we know from Maxwell's physics that they do. Since the reasoning pattern that would 'prove' electromagnetism can't cause light is clearly flawed, the structurally identical reasoning in the Chinese Room case should be viewed with the same suspicion. The Churchlands suggest the room's single rulebook also reflects an outdated, overly serial model of computation, when the brain actually relies on parallel, connectionist-style processing — a better model, in their view, than the kind of symbol manipulation Searle has in mind.",
      reply: "Searle responds by scaling the thought experiment up to a 'Chinese gym' of many people working in parallel rather than one person in one room, maintaining that understanding still wouldn't emerge — though the chapter notes that moving from a single individual to a group blunts some of the argument's original first-person force, since no single participant can any longer assess the matter from inside their own perspective.",
    },
  ],

  furtherReading: [
    { label: "Chinese room", url: "https://en.wikipedia.org/wiki/Chinese_room", note: "overview of the thought experiment and the major replies" },
    { label: "Stanford Encyclopedia of Philosophy — The Chinese Room Argument", url: "https://plato.stanford.edu/entries/chinese-room/", note: "detailed philosophical treatment of Searle's argument and its critics" },
  ],
};
