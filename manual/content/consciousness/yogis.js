// manual/content/consciousness/yogis.js
//
// Original retelling of Yogis — a paraphrase of the book's chapter,
// not a quotation. Credit lives in the page chrome; this file holds
// only the paraphrased content.

export const entry = {
  case: `
    <p>The zombie argument against physicalism asks us to conceive of a
    world physically and functionally identical to ours in every detail,
    except that nobody in it has any inner experience at all. If such a
    world is conceivable, part of the explanation is that we can refer
    to our experiences directly — not merely by describing their causes
    and effects, but by picking them out through their distinctive felt
    quality. Katalin Balog thinks that very feature of our concepts is
    exactly what makes the zombie argument go wrong, and she builds her
    case around an invented population she calls yogis.</p>
    <p>Imagine people much like us, except equipped with an unusual
    cognitive power: they can detect certain of their own brain states
    directly, without going through any physical or functional
    description of those states, and without even knowing how this
    detection works. Suppose one such brain state is called "A," and a
    yogi has a term, "flurg," that refers to it directly, purely in
    virtue of this special detection ability, with no physical or
    functional concept standing in between the term and the state.</p>
    <p>Now picture a yogi philosopher wondering whether flurgs are
    physical. They reason: it is conceivable that a world could be
    physically and functionally identical to ours and yet contain no
    flurgs; therefore such a world is possible; therefore flurgs are not
    physical. That argument mirrors the zombie argument move for move.
    But its conclusion is false by construction — flurgs were stipulated
    to be brain states, so any physical duplicate of the yogi world
    automatically contains flurgs, full stop. The world the yogi
    philosopher thinks they are conceiving simply isn't possible, however
    vividly they can picture it.</p>
  `,

  stakes: `
    <p>Balog takes this to expose a flaw at the heart of the zombie
    argument itself, not just a curiosity about an invented species. If a
    reasoning pattern exactly like the zombie argument generates a
    conclusion we already know is false in the yogi case, then whatever
    produces that error could be producing the very same error when we
    run the parallel argument about zombies. On her diagnosis, the yogi
    philosopher goes wrong not because the flurg world is secretly
    impossible for mysterious reasons, but because the flurg concept
    refers directly, bypassing physical or functional description
    altogether — and she argues our phenomenal concepts work the same
    way. If so, physicalists have grounds to reject the premise that a
    conceivable zombie world is thereby a possible one.</p>
  `,

  tension: [
    {
      targets: "Accepts the argument as undermining the zombie inference",
      label: "A matched error, caught in the act",
      text: "Balog's own gloss treats this as a clean instance of the broader phenomenal concept strategy: it accepts that zombies are genuinely conceivable, but explains that conceivability by appeal to special features of our phenomenal concepts rather than to any special, non-physical feature of the experiences those concepts refer to.",
    },
    {
      targets: "Offers a related but distinct conditional-concept strategy",
      label: "Phenomenal concepts might be built as conditionals",
      text: "A neighboring strategy treats phenomenal concepts as conditional in content — referring to physical states if the world turns out to be entirely physical, and to non-physical states if it doesn't. This defends physicalism by a different route: rather than granting that zombies are conceivable and then explaining away the conceivability, it challenges the claim that zombies are conceivable in the first place.",
    },
    {
      targets: "Denies the yogi/zombie analogy holds",
      label: "Flurg concepts and phenomenal concepts aren't alike",
      text: "Chalmers responds by rejecting the analogy Balog relies on. The flurg concept, he argues, is a demonstrative concept — roughly, 'this inner state, whatever it is.' Our phenomenal concepts don't work that way: the pain concept picks out a state by its distinctive felt quality, and whatever state ends up filling that role has to have that quality to count as pain, physical or not.",
      reply: "The chapter spells out why this difference matters: give the yogis the complete physical truth about their world, including that flurgs are brain states, plus enough information to locate themselves within that world, and they can straightforwardly conclude their flurgs are physical, closing off the flurg-world argument. Give a person the complete physical truth about our world plus their place in it, and the nature of pain remains open in a way the yogi case does not — which suggests the analogy between the two cases is weaker than Balog needs it to be.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Zombies", url: "https://plato.stanford.edu/entries/zombies/", note: "fuller treatment of the zombie argument that Balog's yogi case targets" },
  ],
};
