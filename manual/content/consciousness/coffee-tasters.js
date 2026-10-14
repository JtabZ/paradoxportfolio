// manual/content/consciousness/coffee-tasters.js
//
// Original retelling of The Coffee Tasters — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Mr. Chase and Ms. Sanborn have spent ten years as professional
    coffee tasters in quality control at the same company, a job they
    both once loved. Lately, though, neither enjoys the company's
    signature blend anymore. That alone wouldn't be strange, except that
    nothing about the coffee has changed — the recipe is identical,
    chemical analysis confirms the current batches match the old ones
    exactly, and every other taster on the team insists it tastes just
    as good as ever.</p>
    <p>Comparing notes over tea, Chase and Sanborn discover they
    disagree about what's happened to them, even though they share the
    same complaint. Chase is sure the coffee tastes exactly as it always
    did — what's changed is that he no longer likes that taste. Sanborn
    is equally sure her preferences haven't budged — what's changed, she
    thinks, is her own tasting apparatus, so that the very same coffee
    now produces a different taste experience in her. Dennett puts it
    memorably: Chase thinks his tastes have changed; Sanborn thinks her
    tasters have changed.</p>
    <p>Here is the catch: neither can settle which of them is right
    just by introspecting harder. And outside tests don't obviously
    settle it either. Suppose a battery of tests shows Sanborn's
    gustatory system working exactly as it always has — if we let that
    override her insistence that the coffee tastes different to her now,
    we're saying she can be wrong about her own qualia, which undercuts
    the idea that she apprehends them directly and infallibly. Suppose
    instead Chase fails a battery of taste-identification tests — if we
    let that override his insistence that the coffee tastes the same to
    him, we're making the same move in his case. Either way, treating
    outside tests as authoritative means abandoning the thought that
    each person has unmediated, incorrigible access to their own
    qualitative experience. And if preferences themselves can reshape
    how something tastes — the way acquiring a taste for wine seems to
    change the flavor you experience, not just your reaction to a fixed
    flavor — then qualia turn out to be relational, shaped by your
    reactions, rather than the fixed, intrinsic properties they were
    supposed to be.</p>
  `,

  stakes: `
    <p>Dennett built this case, along with several companions, in
    "Quining Qualia," his sustained attack on the usefulness of the very
    notion of qualia. He has in mind a specific bundle of commitments
    that he thinks make up the traditional concept: qualia are
    ineffable, intrinsic (not analyzable in terms of their relations to
    other things), directly introspectable, and private, accessible only
    to the subject having them. The Chase-and-Sanborn case is designed
    to show that no coherent notion survives once you try to apply all
    four commitments to a real case of changing taste experience, pulling
    the concept apart from the inside rather than attacking it head-on.</p>
  `,

  tension: [
    {
      targets: "Accepts the argument and eliminates qualia",
      label: "There's nothing there to misdescribe",
      text: "Dennett draws an eliminativist conclusion: the traditional notion of qualia is confused enough that it should be dropped from philosophy altogether, much as outdated folk-physics notions (like the idea that heavier objects fall faster) got dropped once physics matured. This view, now often called illusionism, holds that qualia don't exist and that we are simply under the impression that they do.",
    },
    {
      targets: "Traces the puzzle to faulty memory instead",
      label: "Blame the memory, not the qualia",
      text: "Ned Block argues the whole puzzle is an artifact of memory failure: Chase and Sanborn aren't wrong about their current qualia, they're just unreliable about recalling their past qualia accurately. Since the traditional notion of qualia only claims direct, infallible access to one's current experience, not to memories of past experience, the thought experiment doesn't actually touch the view it's aimed at.",
    },
    {
      targets: "Argues Dennett demands an unreasonably strong infallibility",
      label: "Fallible access doesn't mean no direct access",
      text: "A related complaint is that Dennett's argument only works if direct apprehension of qualia requires total infallibility about them. But a defender of qualia can allow for mistaken identification while still holding onto direct access to the quality itself — someone grabbed from behind in the dark and told 'I have a knife' might initially judge they feel a sharp pain, then realize moments later that the sensation was always just numbing cold from a popsicle. Their initial judgment about what kind of sensation it was can be wrong even while they were directly and immediately experiencing the sensation itself the whole time.",
    },
  ],

  note: `
    <p>Illusionism remains a minority position among philosophers of
    mind; most who have engaged with the Chase-and-Sanborn case think it
    falls short of showing the traditional concept of qualia is
    incoherent, even if it usefully highlights how memory and preference
    can complicate our access to our own past experience.</p>
  `,

  furtherReading: [
    { label: "Wikipedia — Qualia", url: "https://en.wikipedia.org/wiki/Qualia", note: "general background on the concept Dennett's thought experiment targets" },
    { label: "Wikipedia — Eliminative materialism", url: "https://en.wikipedia.org/wiki/Eliminative_materialism", note: "the broader view Dennett's illusionism about qualia descends from" },
  ],
};
