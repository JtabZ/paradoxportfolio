// manual/content/self/sharing-feelings-combining-minds.js
//
// Original retelling of Sharing Feelings, Combining Minds — a paraphrase
// of the book's chapter, not a quotation. Credit lives in the page
// chrome; this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>William James offers a simple scene: twenty-six people are each
    assigned one letter of the alphabet to think about — the first thinks
    "A," the second "B," and so on through "Z." No matter how closely they
    stand, how intently they focus together, or how well they know one
    another, there is no twenty-seventh mind that emerges from the group
    and holds the whole alphabet. Twenty-six separate minds thinking
    twenty-six separate thoughts do not add up to one bigger mind that
    thinks all twenty-six at once. Minds, on this picture, simply don't
    combine, and their contents stay strictly private: your pain is yours,
    my pain is mine, and nothing either of us does can make them the very
    same pain.</p>
    <p>That claim of privacy might look threatened by a bit of science
    fiction: Star Trek's Vulcans can perform a "mind meld," pressing a
    hand to another being's face to become directly aware of that being's
    thoughts, as intimately as they're aware of their own. Does a
    successful meld mean two subjects can, after all, think one and the
    same token thought?</p>
  `,

  stakes: `
    <p>At issue is whether mental states are inherently private in a way
    that forbids them from ever literally being shared between distinct
    subjects, and whether distinct minds can ever combine into some
    further, more inclusive mind. The question isn't just a curiosity
    about empathy or telepathy — it turns out to be exactly the obstacle
    facing panpsychism, the view that consciousness is a pervasive,
    basic feature of reality present even at the microphysical level.
    If James is right that minds never combine, panpsychism faces a
    serious problem explaining how swarms of micro-conscious particles
    could ever add up to a unified mind like yours.</p>
  `,

  tension: [
    {
      targets: "Denies real sharing (the meld)",
      label: "Pains are like dances, not playing cards",
      text: "One view treats mental states as inseparable modifications of a self rather than free-floating objects a subject merely happens to possess — more like a dance than a playing card in your hand. You can't dance my exact jig, not because I'm possessive, but because the very same jig danced by someone else would be a different token jig. On this view, the Vulcan mind meld isn't really sharing: the Vulcan has their own thought, of the same type as the other being's and caused by it, but still their own token thought, individuated by the fact that they're the one having it.",
    },
    {
      targets: "Allows real sharing",
      label: "Craniopagus twins and one shared pain",
      text: "But privacy as usually defined only says that a thought can be known in a special way only by the subject(s) who have it — it doesn't strictly rule out two subjects both having that very same token thought. Craniopagus twins, conjoined at the skull and sharing some brain tissue, offer a test case: if they share the exact neural region realizing a particular pain and both say \"Ow!\" at once, there's at least a real question whether they're sharing one token pain rather than two merely similar ones — much as conjoined twins sharing a leg could, in some sense, be dancing one and the same jig.",
      reply: "This can be resisted by distinguishing a pain's narrow realizer (the specific patch of neural tissue) from its total realizer (that tissue properly integrated into a whole working brain). Even with one shared narrow realizer, the twins have two different total realizers, so a physicalist can still say there are two numerically distinct pains, individuated by the two different ways they're integrated — not one shared token after all.",
    },
    {
      targets: "The combination problem for panpsychism",
      label: "Micro-minds, James's letters, and whether they add up",
      text: "If consciousness exists even at the most basic physical level, the world is full of micro-subjects — but James's alphabet case suggests subjects simply don't compose further subjects by being put together, however intimately connected. If that generalizes, panpsychism can't explain the one thing it was invoked to explain: how a unified subject like you arises from the swarm of micro-subjects making you up.",
    },
    {
      targets: "Resolves the combination problem",
      label: "Some combinations might just be special",
      text: "A panpsychist reply denies the alphabet case settles the matter for every possible combination: just because twenty-six ordinary people thinking about letters don't compose a further mind doesn't mean no arrangement of subjects ever could. Perhaps some fundamental physical relations, when they hold between micro-subjects, really do yield a further subject containing both of their conscious states — a mode of combination simply absent from James's room full of strangers.",
    },
    {
      targets: "Resolves the combination problem",
      label: "Maybe James's twenty-six did combine — we just can't tell",
      text: "An alternative reply denies James's intuition altogether: perhaps the twenty-six subjects really do compose a twenty-seventh, and it only seems otherwise because none of us is that twenty-seventh subject and so none of us has access to its combined experience. That subject might simply be too poorly integrated to introspect and report on itself the way we can — a difference of degree from ordinary minds, not of kind.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Panpsychism", url: "https://plato.stanford.edu/entries/panpsychism/", note: "covers the combination problem this chapter's case feeds into" },
  ],
};
