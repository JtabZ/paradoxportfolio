// manual/content/meaning/ottos-notebook.js
//
// Original retelling of Otto's Notebook — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Inga hears about a new exhibit at the Museum of Modern Art and
    decides to go. She pauses for a second, recalls that the museum is on
    53rd Street, and heads there. Otto, who has early-stage Alzheimer's,
    hears about the same exhibit and wants to go too. He pauses, flips open
    the notebook he carries everywhere and relies on constantly, reads
    "MoMA is on 53rd Street," and heads there. Both of them wanted to see
    the exhibit, both believed the museum was on 53rd Street, and that
    belief, paired with the desire, is why each of them walked the same
    direction.</p>
    <p>So when did each of them come to believe the museum was on 53rd
    Street? For Inga the natural answer is: before she consulted anything.
    Her belief wasn't occurrent — she wasn't actively thinking about it a
    moment earlier — but almost none of our beliefs are occurrent at any
    given moment; they sit in memory as standing beliefs until something
    calls them up. That's exactly the kind of belief Inga has.</p>
    <p>Otto's process looks structurally identical, except that what he
    consults is a notebook rather than biological memory. Andy Clark and
    David Chalmers press the question: if we're willing to say Inga
    already believed the location before consulting her memory, what
    principled reason is there to deny that Otto already believed it
    before consulting his notebook? His belief wasn't occurrent either, any
    more than Inga's was. The only apparent difference is where the
    information sits — inside the skull for Inga, outside it for Otto — and
    Clark and Chalmers argue that location shouldn't matter if the
    notebook plays the same causal-explanatory role in guiding Otto's
    behavior that ordinary stored memory plays in guiding Inga's. If so,
    Otto's standing belief that the museum is on 53rd Street literally
    includes, as part of his mind, an external object: his notebook.</p>
  `,

  stakes: `
    <p>This case is the centerpiece of the extended mind thesis: the claim
    that cognitive states themselves, not just the contents of thoughts,
    can be partly made up of things outside the head. It goes further than
    the "passive" externalism of Twin Earth and Arthritis-man cases
    (Chapter 25), where the environment merely helps determine what a
    thought is about while the thought itself stays safely inside the
    skull. Clark and Chalmers call their view "active" externalism:
    worldly features don't just fix content from the outside, they can
    constitute the cognitive process itself. The idea has only gained
    plausibility since 1998, when Clark and Chalmers first proposed it,
    given how completely many people now outsource memory to smartphones
    rather than biological recall.</p>
  `,

  argument: {
    steps: [
      "What makes a state a standing belief is the causal-explanatory role it plays in producing a subject's behavior, not where that state is physically located (the parity principle).",
      "The information in Otto's notebook plays exactly the role that an ordinary stored memory plays for Inga: consistently available, easily accessed, automatically relied upon, and consulted because he endorsed it in the past.",
      "Treating Otto's case differently from Inga's, solely because his storage sits outside his skull, would be an arbitrary distinction with no causal-explanatory basis.",
      "Therefore, Otto's belief that the museum is on 53rd Street already existed, as a standing belief, before he opened the notebook — and the notebook counts as part of his cognitive system.",
    ],
    conclusion: "Cognitive states, including standing beliefs, can be partly constituted by objects outside the body; the mind can literally extend into the world.",
  },

  tension: [
    {
      targets: "Worry about over-generalizing",
      label: "Does every fact on your phone count as a belief?",
      text: "If reliance on an external device is enough to make its contents part of the mind, does that mean anything you could look up on your phone — the population of Fresno, a recipe you've never tried — already counts as something you believe? That seems far too permissive.",
      reply: "Clark and Chalmers answer by setting four conditions a device must meet to count as part of the mind: it must be constantly available and habitually used; its information must be easily accessible when needed; the subject must automatically accept what it says without critical scrutiny; and the information must be there because the subject consciously endorsed it in the past. That last condition rules out a fact you've simply never looked up — it was never endorsed, so it was never absorbed into the belief system.",
    },
    {
      targets: "Points to access differences",
      label: "Perception versus introspection",
      text: "Critics note a seemingly deep difference between Otto's case and Inga's: Otto reaches his notebook by perception (he looks at the page), whereas Inga reaches her memories by introspection. The notebook is also far easier to tamper with than a brain, and it can be read or shared by someone else, neither of which seems true of beliefs stored in the head.",
      reply: "Clark and Chalmers concede these are real differences but argue they are only \"shallow\" ones — differences that exist, but that don't actually affect the causal-explanatory role the stored information plays, which is the only thing that should matter for counting it as a belief.",
    },
    {
      targets: "Points to belief revision",
      label: "The notebook doesn't update itself",
      text: "When we learn something new, our other beliefs usually adjust automatically and immediately. Otto's notebook does nothing of the kind: updating it to stay consistent with new information is a slow, deliberate, error-prone process, unlike the way internal beliefs are, as some put it, informationally integrated with one another.",
    },
    {
      targets: "Denies that standing beliefs are mental at all",
      label: "Maybe the mind is only ever occurrent",
      text: "Brie Gertler takes a different route to the same practical conclusion: she grants that Otto's notebook could play the same role as a standing belief, but denies that standing beliefs — stored, non-occurrent, non-introspectable as such — are part of the mind in the first place. On her view the mind consists only of occurrent, introspectable states and processes, so neither Inga's dormant memory nor Otto's notebook entry belongs to the mind until it becomes active.",
    },
  ],

  furtherReading: [
    { label: "Clark, Andy, and Chalmers, David — \"The Extended Mind\" (1998)", note: "the canonical paper this chapter retells" },
  ],
};
