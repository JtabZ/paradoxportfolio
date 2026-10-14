// manual/content/consciousness/slugs-and-tiles.js
//
// Original retelling of The Slugs and the Tiles — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Imagine a community of intelligent slugs living out their lives
    on a vast mosaic made of two kinds of tiles: triangles and
    pie-slice-shaped sectors of circles, arranged together into larger
    patterns including circles, rectangles, and figure eights. The slugs
    have a perceptual system tuned to detect triangular tiles, and a
    separate one tuned to detect circular shapes — but nothing at all
    tuned to detect the pie-slice sectors themselves.</p>
    <p>Among slug philosophers, a dispute breaks out. Some hold that
    the circular tiles are, at bottom, built up out of non-circular
    tiles — specifically, out of triangles. Others reject this, arguing
    in a form that mirrors Mary's room and the zombie argument: they
    describe "Slug Mary," who knows every truth about the mosaic
    expressible in non-circular terms but is never permitted to use her
    circle detector. Slug Mary, they insist, would still be unable to
    tell whether the mosaic has any circles in it — which shows that
    facts about circularity aren't deducible from the non-circular
    facts, and therefore that circular tiles must be basic, irreducible
    features of the mosaic, not built out of anything else. A matching
    "zombie" version runs alongside it: it's conceivable that a mosaic
    identical to theirs in every non-circular respect could simply lack
    circular tiles altogether, and if that's conceivable, such a mosaic
    is possible — again implying circularity is basic.</p>
    <p>Both slug arguments reach a false conclusion. The mosaic's
    circular tiles plainly are built from sectors, pie-slice tiles the
    slugs simply cannot perceive. Daniel Stoljar's point is that the
    slugs' arguments feel airtight to them only because of this
    perceptual blind spot — a gap in what they can detect, not a genuine
    gap in the mosaic's underlying composition. He intends the parallel
    to cut close to home: human philosophers who find the knowledge
    argument and the zombie argument compelling might be in exactly the
    slugs' position, reasoning soundly from premises that look complete
    but are missing physical facts we simply don't yet have access to —
    facts that, once known, might show why a world physically and
    functionally like ours couldn't fail to contain consciousness.</p>
  `,

  stakes: `
    <p>The knowledge argument and the conceivability (zombie) argument
    both move from an epistemic gap — something physical knowledge alone
    doesn't settle — to a metaphysical gap, a claim that consciousness
    could vary independently of all the physical and functional facts.
    Stoljar's slugs are meant to show that this inference pattern can be
    produced entirely by ignorance of relevant facts, with no
    metaphysical gap in reality at all. If our situation really does
    parallel the slugs', the knowledge and conceivability arguments
    would be unsound for the same underlying reason, even though they
    look valid and even though their premises look plausible from the
    inside.</p>
  `,

  tension: [
    {
      targets: "Distinguishes this case from Jackson's original sea slugs",
      label: "A borrowed thought experiment, repurposed",
      text: "Stoljar's mosaic case descends from an example Frank Jackson himself used, involving sea slugs with a restricted picture of the world due to the limits of their environment — but Jackson's point there was about intellectual humility in general, not a challenge to his own knowledge argument. Stoljar redeploys the device for the opposite purpose: to undercut the very argument Jackson is famous for.",
    },
    {
      targets: "Supports the ignorance diagnosis with historical precedent",
      label: "Chemical bonding looked irreducible too, in 1925",
      text: "Stoljar points to C. D. Broad's 1925 argument that facts about chemical bonding were irreducible to more basic physical facts — an argument that collapsed once quantum mechanics supplied the chemical bonding story that wasn't available in Broad's time. If an argument structurally like the knowledge argument has already been undone once by a later physical discovery, it's reasonable to ask whether the knowledge and conceivability arguments about consciousness could meet the same fate.",
    },
    {
      targets: "Challenges the historical analogy as disanalogous",
      label: "Chemistry and consciousness may not be alike",
      text: "Opponents note a possible disanalogy: Broad's argument concerned whether chemical truths follow from more basic structural, spatiotemporal-causal truths — the kind of truth expressible in abstract mathematical terms. But it's far from clear that phenomenal truths are structural truths in that sense. The particular truth Mary learns on first seeing red — 'so that's what it's like to see red' — doesn't obviously describe any spatiotemporal causal structure at all, which would make the chemical bonding precedent a poor match for the consciousness case.",
    },
    {
      targets: "Questions whether the slugs' own reasoning is actually fallacious",
      label: "Maybe the slugs conclude something true, not something false",
      text: "A further challenge revisits exactly what the slugs are entitled to conclude. Based only on what they can perceive, the most they could reasonably infer is that circular tiles aren't built from triangular tiles specifically — and that conclusion happens to be true, not false, since circles are actually built from sectors. If so, their argument wasn't fallacious after all; it just supports a narrower conclusion than Stoljar's story suggests. Carried over to the human case, the parallel conclusion would be only that consciousness isn't composed of the specific kind of physical phenomena fully expressible in the black-and-white terms available to Mary in her room — not that consciousness isn't composed of any physical phenomena whatsoever. And it remains unclear what a non-structural physical phenomenon, of the sort that conclusion would need, could even be.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Qualia: The Knowledge Argument", url: "https://plato.stanford.edu/entries/qualia-knowledge/", note: "the knowledge argument that Stoljar's slugs are built to challenge" },
    { label: "Wikipedia — Knowledge argument", url: "https://en.wikipedia.org/wiki/Knowledge_argument", note: "general overview of the argument and its critics, including Stoljar" },
  ],
};
