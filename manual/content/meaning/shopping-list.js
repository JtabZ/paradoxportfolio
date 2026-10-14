// manual/content/meaning/shopping-list.js
//
// Original retelling of The Shopping List — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>A man walks through a grocery store holding a shopping list: cheese,
    bread, chocolate, grapes. A detective is secretly tailing him, writing
    down everything he actually puts in his cart, and her list ends up
    reading exactly the same way: cheese, bread, chocolate, grapes. Word
    for word, the two lists match. But they work in opposite directions.
    The shopper's list is supposed to govern what ends up in the cart — if
    the cart doesn't match the list, the shopper has made a mistake, and
    the fix is to go back and get the right items, not to rewrite the
    list. The detective's list is supposed to track what the shopper
    actually bought — if her list doesn't match the cart, the mistake is
    hers, and the fix is simply to correct her list to reflect reality.</p>
    <p>Suppose the man gets home and discovers he grabbed grappa instead of
    grapes. He can't repair the error by crossing out "grapes" and writing
    in "grappa" — that would abandon the whole point of having a shopping
    list in the first place. He has to go back and trade the grappa for
    actual grapes, bringing the world into line with the list. If the
    detective's list says "grapes" and the man in fact bought grappa, she
    corrects her error the opposite way: she edits her list to say
    "grappa," bringing the list into line with the world.</p>
    <p>Elizabeth Anscombe's case is meant to illustrate what she calls
    direction of fit. The detective's list has to fit the world — it's
    successful exactly when it accurately mirrors how things are. The
    shopper's list has the world fit it — it's successful exactly when
    the world is made to match it. Anscombe's proposal is that beliefs and
    desires differ from one another in just this way. A belief is like
    the detective's list: it aims to represent the world as it actually
    is, and when the world and the belief disagree, the belief is what
    should give way. A desire is like the shopper's list: it aims to get
    the world to match it, and when the world and the desire disagree,
    it's the world — via the agent's action — that is supposed to give
    way. Other mental states seem to sort the same way: perceptions, like
    beliefs, aim to fit the world; intentions, like desires, aim to make
    the world fit them.</p>
  `,

  stakes: `
    <p>The direction-of-fit idea responds to a basic question about the
    mind: beliefs and desires can share exactly the same content — you can
    believe your mother will send money and also simply desire that she
    will — so what, beyond just stipulating "one's a belief, one's a
    desire," actually distinguishes these two kinds of mental state from
    each other? Anscombe's shopping-list image offers an answer that
    doesn't just restate the labels: the two states are oriented
    oppositely toward the world, one tracking it and one trying to shape
    it. That distinction has since been put to significant philosophical
    work, especially in functionalist theories of belief and desire and in
    arguments for a broadly Humean picture of what actually motivates
    action.</p>
  `,

  tension: [
    {
      targets: "Turns the image into a functionalist theory",
      label: "Beliefs vanish on contrary evidence, desires persist",
      text: "Michael Smith develops the most influential formal version of the idea: a belief that p is, roughly, a state that tends to disappear once the subject perceives that not-p, while a desire that p is a state that survives that very same contrary perception and instead drives the subject to try to make p true.",
      reply: "This descriptive gloss runs into trouble, since beliefs often don't behave this way: some beliefs are notably stubborn (a mother may keep believing her son is innocent despite a mountain of contrary evidence), and some contrary-seeming perceptions are rightly ignored rather than belief-revising (seeing a stick look bent in water doesn't actually change the belief that it's straight).",
    },
    {
      targets: "Reinterprets direction of fit as normative",
      label: "How states should behave, not how they do",
      text: "A natural fix treats direction of fit as a claim about norms rather than actual psychological behavior: a subject should believe p only if p is true, and if a subject desires p, they should try to bring p about. This reading fits how Anscombe herself seems to present the case.",
      reply: "Stated this crudely, the normative version also runs into counterexamples: wanting something, such as wanting to harm a sibling, plainly doesn't always generate an obligation to pursue it, and the mere fact that p happens to be true doesn't mean a subject with no evidence for p, or even evidence against it, therefore should believe it.",
    },
    {
      targets: "Uses the distinction to argue for Humean motivation",
      label: "Beliefs alone never move you to act",
      text: "Some, including Smith, take direction of fit to support a Humean picture on which beliefs by themselves are motivationally inert and only desires can move an agent to act — you can believe that a gift would make your son happy, but without the independent desire to make him happy, that belief alone won't get you to buy the gift. On this reading, a state characterized only by its disposition to track the world could never, just by itself, generate a disposition to change the world.",
      reply: "This argument seems to assume there are no states that are simultaneously belief-like, aiming to represent how things are, and yet also capable of motivating action on their own — an assumption that can be challenged. The belief that it's good to make children happy, or the belief that one has promised to pick someone up at the airport, looks like exactly this kind of hybrid: a state that represents a fact about the world while also, by itself, moving the believer to act on it.",
    },
  ],

  furtherReading: [
    { label: "Anscombe, G.E.M. — Intention (1957)", note: "the canonical source of the shopping-list case" },
  ],
};
