// manual/content/self/prince-and-cobbler.js
//
// Original retelling of The Prince and the Cobbler — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome; this
// file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Two men live very different lives in the same town. One is a prince,
    waited on hand and foot in a palace, his days filled with rich food and
    idle amusements. The other is a cobbler, scraping by in a cramped
    cottage, mending shoes from dawn to dusk to feed his wife and children.
    One night something strange happens: the prince's consciousness wakes
    up inside the cobbler's body.</p>
    <p>The person who opens his eyes in the cobbler's bed is baffled. The
    room is unfamiliar, the woman beside him a stranger, the children in
    the next room unrecognized, and the rough nightshirt nothing like the
    silk gown he remembers putting on. What he does remember, vividly, is a
    childhood in the palace, a lifetime of servants and delicacies — he is
    still thinking the same kind of thoughts a prince would think. Yet
    everyone around him calls him by the cobbler's name, assumes he's
    joking when he insists otherwise, and scolds him for running late to
    work.</p>
    <p>So who woke up in that bed — the prince or the cobbler? John Locke's
    answer is that it's obviously the prince: the body is the cobbler's,
    but the person inside it is not.</p>
  `,

  stakes: `
    <p>Locke was addressing a question that had occupied philosophers since
    antiquity but that he gave fresh shape to: what makes someone at one
    time the same person as someone at an earlier time? Three broad
    answers compete — a persisting soul, a persisting body, or persisting
    psychological facts, especially memory. Locke stakes out the memory
    view: B at a later time is the same person as A at an earlier time just
    when B can remember A's experiences. The prince-and-cobbler case is his
    flagship illustration — meant to show that identity tracks memory even
    when it defies body and even defies a continuous soul, since on Locke's
    view even sharing a soul with someone whose experiences you can't
    recall wouldn't make you that person.</p>
  `,

  tension: [
    {
      targets: "Supports the memory theory",
      label: "Fiction keeps agreeing with Locke",
      text: "Centuries of body-swap fiction echo the same judgment. In the film Freaky Friday, when a mother and daughter trade bodies, audiences have no trouble calling the person in the teenage body \"the mother\" and the person in the adult body \"the daughter\" — psychology, not flesh, decides who's who.",
    },
    {
      targets: "Rejects the memory theory",
      label: "The brave officer's forgotten apples",
      text: "Thomas Reid's counterexample imagines a general who, late in life, remembers winning a medal as a young officer but has entirely forgotten an incident from boyhood — stealing apples — that the officer himself still remembered at the time. By Locke's own rule, the general is the officer (he remembers the officer's deeds) and the officer is the boy (he remembered the boy's deeds), so by transitivity the general must be the boy. But the general has no memory connection to the boy at all, so Locke's rule also says he isn't. The theory contradicts itself.",
      reply: "A natural patch is to drop the requirement of a direct memory link and settle for overlapping chains of memory — the general connects to the boy via the officer, even without connecting to the boy directly.",
    },
    {
      targets: "Circularity worry",
      label: "Does memory secretly need identity first?",
      text: "Even the patched theory faces the objection that memory might presuppose personal identity rather than explain it. If someone else actually told the joke you \"recall\" telling, we say you don't really remember it — you only seem to. But that means whether a memory is genuine already depends on whether you are the person who had the original experience, which makes it circular to then explain personal identity in terms of memory.",
    },
    {
      targets: "Generalizes to psychological continuity",
      label: "Beyond memory: the reduplication problem",
      text: "Broadening the theory to cover intentions, desires, and personality traits (not just memory) doesn't escape the deepest problem: psychological continuity, unlike identity, isn't guaranteed to be one-to-one. A malfunctioning teleporter could leave psychologically continuous successors on two different planets, and no single one of them has a better claim to be the original than the other.",
    },
    {
      targets: "Embodiment worry",
      label: "The body remembers too",
      text: "Research on trauma suggests memory isn't a purely psychological affair in the way Locke assumed — flashbacks are often lived as bodily states, as though the body itself retains the trauma. If memory is this embodied, the clean split between psychological facts and physical facts that the memory theory relies on starts to look artificial.",
    },
  ],

  note: `
    <p>The chapter notes that Locke's theory also seems to rule out ever
    having been a fetus or infant, since there's no memory connection
    reaching back that far — a consequence some see as an independent
    strike against the view, whatever one makes of the prince and the
    cobbler themselves.</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Personal Identity", url: "https://plato.stanford.edu/entries/identity-personal/", note: "overview of the soul, psychological, and physical theories this case stages" },
  ],
};
