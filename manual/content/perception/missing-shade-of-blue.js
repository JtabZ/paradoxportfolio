// manual/content/perception/missing-shade-of-blue.js
//
// Original retelling of The Missing Shade of Blue — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome; this
// file holds only the paraphrased content.

export const entry = {
  case: `
    <p>David Hume argued that every idea in the mind is just a faded copy of
    some earlier sense impression. The idea of pain traces back to feeling
    pain; the idea of red traces back to seeing red. Where there's no
    matching impression to point to, Hume treats the idea as suspect — this
    is the engine behind his skepticism about causation, substance, and the
    self, since none of those seem to correspond to any single, isolable
    sense impression.</p>
    <p>Then Hume hands his own theory a counterexample. Picture someone with
    perfectly ordinary vision who has spent thirty years seeing color — many
    shades of red, many shades of blue — but has, purely by chance, never
    once encountered one particular shade of blue. Lay out a graded strip of
    every blue they have seen, light to dark, and there will be a gap where
    that one shade belongs. Hume suggests that this person, looking at the
    shades on either side of the gap, can simply imagine the missing shade
    sitting between them — and in doing so, forms an idea of a color they
    have never actually sensed. That looks like a clean counterexample to
    his own rule that every idea must be traceable to a corresponding
    impression.</p>
  `,

  stakes: `
    <p>What makes this sting is that Hume raises the case himself and then
    simply moves on, never resolving it. If an idea can arise this easily
    without its matching impression, the principle doing the real work in
    Hume's skeptical arguments elsewhere — that an idea with no traceable
    impression is defective — starts to look shaky across the board. If we
    can get a concept of a never-seen shade for free, why not a concept of
    necessary connection, or substance, or the self, equally for free? The
    missing shade threatens to undercut the very engine of Humean
    empiricism.</p>
  `,

  tension: [
    {
      targets: "Restricts the empiricist principle",
      label: "Only simple ideas need a matching impression",
      text: "One line of defense notes that Hume's rule was always meant to apply only to simple ideas — ideas that aren't built out of other ideas. A unicorn is easy to imagine without ever seeing one because it's just a horse-idea plus a horn-idea stitched together. If color turns out to be complex rather than simple — built from hue, saturation, and value — maybe the missing shade is assembled the same way, from components the person has already experienced.",
      reply: "This fix doesn't obviously work, since the same puzzle can be rebuilt one level down: imagine a missing hue, saturation, or value instead of a missing shade, and the gap reappears. Worse, it can't rescue Hume specifically, since he explicitly treated particular shades of color as simple ideas in his own text.",
    },
    {
      targets: "Resemblance-based solution",
      label: "The missing shade is reached through resemblance, not impression",
      text: "Even granting that color impressions are simple, a Humean can appeal to resemblance relations between simple impressions rather than to any single corresponding impression. We don't derive the idea of the missing shade from an impression of that very shade; we derive it from the impressions of its neighbors and the systematic way shades of blue resemble one another.",
      reply: "It's unclear whether this same resemblance-based move could ever rescue Hume's other troubled ideas, like causal necessity, since causal relations between events don't obviously reduce to resemblances among simple impressions the way shades of a single color do.",
    },
  ],

  note: `
    <p>The case has resurfaced in debates about phenomenal concepts — the
    concepts tied specifically to what a conscious experience is like from
    the inside. Frank Jackson's Mary, who learns every physical fact about
    color vision from inside a black-and-white room, is sometimes compared
    to the missing-shade case: if we can extrapolate to an unseen shade of
    blue from shades we have seen, maybe Mary could extrapolate to what
    seeing red is like without ever seeing it, which would undercut Jackson's
    own argument. Torin Alter has replied that Jackson's argument doesn't
    actually require that every phenomenal concept trace back to a matching
    experience, only the much narrower claim that certain truths about
    experience can't be deduced from purely physical truths — a claim the
    missing-shade case doesn't touch. The case also feeds a broader question
    about the limits of imagination itself: how far can extrapolation from
    past experience really stretch, and is "how different is too different"
    even a question with a sharp answer?</p>
  `,

  furtherReading: [],
};
