// manual/content/machine/imitation-game.js
//
// Original retelling of The Imitation Game — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Suppose you're handed a task: hold separate text conversations with
    two hidden interlocutors, one human, one a computer, and figure out
    which is which. You can steer the conversation anywhere — weather,
    mathematics, sports, poetry, gossip — and you get a full hour with
    each. At the end, you have to guess. Say you guess that "Alpha" is the
    human. You're wrong: Alpha was the machine, and it fooled you, a
    neutral judge, into calling it human. We already agree that humans
    think. Given that Alpha passed for one well enough to deceive you,
    should we say that it thinks too?</p>
    <p>This is Alan Turing's imitation game, now usually called the Turing
    Test. Turing's reasoning was that the question "Can a machine think?"
    is too loaded to tackle head-on — we're biased by how a machine looks,
    how its voice sounds, and by simply knowing in advance that it isn't
    biological. Approaching the question indirectly, through behavior
    alone, sidesteps those biases. If a computer can produce conversation
    indistinguishable from a human's, well enough to fool a neutral
    interrogator, Turing argued we have no principled grounds left to deny
    that it thinks.</p>
  `,

  stakes: `
    <p>Turing wasn't trying to define thinking in general, and he wasn't
    claiming that passing the test is necessary for a machine to think —
    only that it would be sufficient. He predicted computers would pass
    within fifty years of his 1950 proposal; narrow AI systems have since
    beaten human experts at chess, Go, and Jeopardy!, composed music and
    poetry, and produced auction-worthy art, yet (at the time of writing,
    and despite thirty years of a dedicated competition offering a
    six-figure prize) no system has decisively passed the full test —
    though some judge today's large language model chatbots to be close.</p>
  `,

  tension: [
    {
      targets: "Humancentric-bias objection",
      label: "Why should imitating humans be the standard?",
      text: "Critics ask why fooling a human judge into mistaking a machine for a person should be the appropriate bar for thought in general, rather than an arbitrarily anthropocentric one.",
      reply: "The book notes this criticism loses force once we recall that Turing offered the test only as a sufficient condition for attributing thought, never as a definition of thought itself or a necessary condition for it.",
    },
    {
      targets: "French's seagull-test objection",
      label: "Right idea, useless standard",
      text: "Robert French presses harder with an analogy: suppose we tested whether a machine 'flies' by seeing if it fools a radar operator into mistaking it for a seagull. Passing that test would indeed guarantee flight, but countless genuine fliers — helicopters, hummingbirds, bats — would fail it anyway, since they look nothing like a seagull on radar, making the test useless for practical purposes despite being technically sufficient. French argues the Turing Test suffers the same flaw: passing it would guarantee thought, but far too many things that plausibly think would never pass it, since they wouldn't converse in a way indistinguishable from a human.",
    },
    {
      targets: "Goal-setting objection",
      label: "It aims AI research at the wrong target",
      text: "Some researchers argue that chasing a passing grade on the Turing Test pushes AI work toward mimicking irrelevant human quirks — typing speed, characteristic errors — rather than toward building genuinely intelligent systems, making it a poor organizing goal for the field.",
    },
    {
      targets: "Searle's objection that the bar is too low",
      label: "Passing could still mean nothing is understood",
      text: "John Searle argues the test actually sets too low a standard: a system could produce perfect conversational behavior while merely manipulating symbols it doesn't understand at all, in the way a person following a sufficiently detailed rulebook could answer questions in a language without grasping a word of it — a scenario developed fully as the Chinese Room thought experiment.",
    },
    {
      targets: "Proposed replacements",
      label: "Looking past the Turing Test for consciousness",
      text: "Susan Schneider proposes supplementing or replacing the Turing Test with alternatives like her AI Consciousness Test, which probes whether a machine has developed its own reflective views about consciousness, and the 'chip test,' which looks at whether a machine shares the underlying technology of devices already known to support consciousness in a human brain — shifting the focus from passing for human to independent evidence of genuine inner experience.",
    },
  ],

  note: `
    <p>Turing modeled his imitation game on an earlier parlor game involving
    a man trying to convince an interviewer he was a woman. Whether that
    gendered origin changes how the test itself should be interpreted
    remains a live, if secondary, point of dispute among commentators.</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — The Turing Test", url: "https://plato.stanford.edu/entries/turing-test/", note: "comprehensive overview of the test, its history, and the major objections" },
    { label: "Turing Test", url: "https://en.wikipedia.org/wiki/Turing_test", note: "general background and history of attempts to pass the test" },
  ],
};
