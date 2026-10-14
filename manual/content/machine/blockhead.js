// manual/content/machine/blockhead.js
//
// Original retelling of The Blockhead — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Picture a giant robot — call it the Blockhead — that looks like an
    ordinary human from the outside. Open its skull and you'd find
    something very different from a brain: a bank of lights wired to its
    sensory organs, an array of buttons wired to its motors, a bulletin
    board of note cards tracking the system's current state, and an
    enormous crowd of miniature workers. Each worker has one trivial job.
    One of them, say, waits for the bulletin board to read "G" and input
    light 53 to flash on; when it does, that worker presses output button
    97 and flips the card to "M." Another waits for a different combination
    and presses a different button. Multiply this by billions of workers
    and you get a system that, from the outside, behaves exactly like a
    human being — mirroring, worker by worker, the same program your brain
    implements neuron by neuron.</p>
    <p>Now run the Blockhead for an hour alongside you, in lockstep. At the
    moment you step on a stray piece of Lego and feel a stab of pain in
    your foot, the Blockhead — functionally identical to you for that hour
    — is driven into the very same functional state. It cries out and grabs
    its foot exactly as you do. But is anything happening inside it? Is it
    actually feeling anything at all, or just performing the outward motions
    pain produces?</p>
  `,

  stakes: `
    <p>Functionalism holds that mental states are functional states,
    fully specifiable by their inputs, outputs, and relations to other
    states, with no further physical requirement — your brain, on this
    view, is like hardware running a particular program, and what matters
    for mentality is the program, not what it runs on. The Blockhead is
    built to be functionally identical to a human in pain while its inner
    workings — mini-individuals shuffling note cards rather than neurons
    firing — seem to leave no room for actual qualia, the felt, experiential
    character of what it's like to be in pain. If a system can share your
    functional state while plausibly lacking qualia entirely, functionalism
    looks unable to account for the very thing that makes a painful
    experience painful.</p>
  `,

  argument: {
    steps: [
      "You and the Blockhead are, for the hour in question, in the very same functional state.",
      "You have qualia (the felt quality of your pain); the Blockhead, it seems, has none.",
      "So the Blockhead is not in the same mental state you are in, despite sharing your functional state.",
      "Functionalism says two systems are in the same mental state if and only if they share a functional state.",
    ],
    conclusion: "Since you and the Blockhead share a functional state without sharing a mental state, functionalism must be false — this is Ned Block's absent qualia argument.",
  },

  tension: [
    {
      targets: "Objection about speed",
      label: "The system runs too slowly",
      text: "One worry Block himself raises is that the Blockhead, however fast each mini-individual works, would still operate far more slowly than real neurons.",
      reply: "Block argues timescale is irrelevant to the thought experiment: if your own mental processes were slowed down dramatically, they would, in his view, still count as the very same mental processes.",
    },
    {
      targets: "Shoemaker's epistemic challenge",
      label: "We couldn't detect absent qualia even in ourselves",
      text: "Sydney Shoemaker argues that the only evidence any of us has for our own qualia is behavioral and introspective — and the Blockhead has access to exactly the same kind of evidence about itself. If that evidence isn't adequate to settle the question for the Blockhead, nothing could be adequate to settle it for us either.",
      reply: "Taken seriously, Shoemaker's point cuts toward accepting that the Blockhead does have qualitative states, since denying it would seem to open the door to doubting whether we ourselves have them, which few are willing to do.",
    },
    {
      targets: "Putnam's anti-nesting objection",
      label: "Consciousness can't be built from consciousness",
      text: "Hilary Putnam observes that although each bee in a swarm might be conscious, we don't think the swarm as a whole is conscious — suggesting an anti-nesting principle: no conscious being decomposes into parts that are themselves conscious. Since each mini-individual inside the Blockhead is itself conscious, the Blockhead case violates this principle and so isn't really conceivable as described.",
      reply: "Block responds that the anti-nesting principle has implausible consequences of its own: if tiny chips that could replace or enhance neurons happened to have a low level of consciousness, the principle would force us to say that anyone who had one installed thereby became unconscious — which seems absurd.",
    },
    {
      targets: "Extension of the nesting debate",
      label: "If minds can nest, how far does it go?",
      text: "Eric Schwitzgebel runs with the possibility that consciousness can nest, using a shape-shifting supersquid and an alien species whose brains are themselves colonies of conscious ant-like insects to argue that, on materialist grounds, there's no principled reason to deny that a sufficiently complex, spatially distributed system — even something as large as the United States — could count as conscious.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Functionalism", url: "https://plato.stanford.edu/entries/functionalism/", note: "see the section on functionalism and the problem of qualia" },
  ],
};
