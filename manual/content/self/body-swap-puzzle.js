// manual/content/self/body-swap-puzzle.js
//
// Original retelling of The Body-Swap Puzzle — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Bernard Williams asks us to compare two scenarios that, he argues,
    are really the same scenario told two different ways. In the first,
    scientists build a machine that can extract all the mental content
    from one person's brain and transfer it into another person's brain,
    and vice versa. Two contestants, A and B, sign up for a competition
    where the winner gets a huge cash prize and the loser gets painful
    torture. The machine is used to swap A's and B's mental contents, and
    then the contestants are asked, in advance, to vote on who should get
    the money afterward — the person now walking around in A's body, or
    the person now walking around in B's body? Most people, hearing this,
    conclude that A should vote for the money to go to whoever ends up
    with A's memories and personality, even if that person is physically
    sitting in B's old body. Psychology, not flesh, seems to be what
    matters.</p>
    <p>In the second scenario, you are kidnapped by a scientist who tells
    you that you're going to be tortured. Then you're told something that
    might sound like good news: before the torture starts, you'll lose all
    your memories and personality, and gain an entirely new set in their
    place. Does that news make the prospect any less frightening? Most
    people say no — they'd still dread the torture just as much, still
    feel it's going to happen to them, even knowing the person being hurt
    will have none of their current memories or traits.</p>
    <p>Williams's point is that these are the same case from two different
    angles — scenario two is just scenario one described from inside A's
    perspective, focusing only on the body A is about to lose. Yet the two
    descriptions pull our intuitions in opposite directions: the first says
    identity goes with psychology, the second says it stays with the body.
    If the same facts can produce flatly contradictory verdicts depending
    on how the story is told, Williams concludes, our intuitions about
    body swaps can't be trusted as reliable guides to personal identity.</p>
  `,

  stakes: `
    <p>Body-swap and brain-transplant cases are usually treated as the
    strongest evidence for psychological theories of personal identity —
    the ordinary verdict is that "you go where your psychology goes."
    Williams's puzzle is designed to undercut that evidence at its source,
    in service of his own view that personal identity actually requires
    bodily continuity. If the intuitions these thought experiments trade on
    flip depending on grammatical framing rather than any underlying fact,
    then thought experiments like the Prince and the Cobbler (Chapter 39)
    may be far less probative than they look.</p>
  `,

  tension: [
    {
      targets: "Extends the critique",
      label: "Can a personality survive in just any body?",
      text: "Williams presses a related worry against the Prince and the Cobbler directly: imagine the haughty, arrogant prince's personality trying to express itself through the cobbler's naturally cheerful face and squeaky voice. It's not obvious that a personality can simply be transplanted into any body whatsoever and come through intact — personality and body may be more tightly bound together than body-swap stories assume.",
    },
    {
      targets: "Broader methodological worry",
      label: "Thought experiments are too weird to trust",
      text: "Some philosophers extend Williams's suspicion into a general methodological complaint: imaginary cases like these are so bizarre that our reactions to them are unreliable. Kathleen Wilkes argues we'd learn more from real phenomena that already pull psychological and physical continuity apart — dissociative identity disorder, amnesia, dementia, or split-brain patients (see Chapter 44) — than from any number of science-fiction swaps.",
    },
    {
      targets: "Defends the thought experiments",
      label: "The two cases aren't really parallel",
      text: "Defenders of psychological theories point to disanalogies between the two scenarios that could explain the diverging intuitions without impeaching the method itself. One is grammatical: the first case is described in the third person, the second in the first person, and switching perspective might simply distort judgment rather than reveal some incoherence in body-swap reasoning generally — a disanalogy Williams himself acknowledged.",
    },
    {
      targets: "Defends the thought experiments",
      label: "No rival to identify with in the torture case",
      text: "A second disanalogy: in the torture case, your memories don't go anywhere — they simply vanish, leaving no other person around who could be a better claimant to being you. In the swap case, there's a flesh-and-blood rival elsewhere who has all your memories. We may simply default to identifying with whichever candidate counts as our \"closest continuer,\" and that will depend on who else is in the running — which differs between the two cases for a principled reason, not an incoherent one.",
    },
    {
      targets: "Empirical test of the puzzle",
      label: "Changing the pronoun didn't change people's answers",
      text: "Shaun Nichols and Michael Bruno tested whether rephrasing the torture scenario in the third person (\"Jerry will be tortured\") rather than the second person (\"you will be tortured\") changed people's intuitions, as Williams's grammatical-framing explanation would predict. They found no significant difference — and more broadly found that people's attachment to the psychological theory is remarkably stubborn, surviving exposure to cases engineered to undermine it.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Personal Identity", url: "https://plato.stanford.edu/entries/identity-personal/", note: "situates Williams's bodily-continuity view among the alternatives" },
  ],
};
