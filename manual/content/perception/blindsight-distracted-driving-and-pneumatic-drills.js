// manual/content/perception/blindsight-distracted-driving-and-pneumatic-drills.js
//
// Original retelling of Blindsight, Distracted Driving, and Pneumatic
// Drills — a paraphrase of the book's chapter, not a quotation. Credit
// lives in the page chrome; this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Some patients with damage to the visual cortex have a region in their
    visual field — a "blindspot" — where they report seeing absolutely
    nothing. Yet when an object is moved through that blindspot and the
    patient is pressed to guess its direction of motion, they guess
    correctly far more often than chance would allow. They insist they see
    nothing, and yet information about what's there is clearly getting
    through and guiding their answer. This is blindsight.</p>
    <p>Ned Block uses blindsight to argue for a distinction between two
    kinds of consciousness that are usually bundled together. Phenomenal
    consciousness is the "what it's like" quality of an experience — the
    felt, experiential side of seeing red or tasting chocolate. Access
    consciousness is a matter of information being available for reasoning,
    reporting, and guiding action, regardless of whether it comes with any
    felt quality. Blindsight patients seem to retain some access to
    information about their blindspot — enough to guess directional motion
    reliably — while lacking any phenomenal experience of it. Because actual
    blindsighters only produce this information when specifically prompted
    to guess, Block also imagines a hypothetical "super-blindsighter" who
    can prompt themselves at will, making the access fully spontaneous and
    unprompted, in order to make the separation between the two kinds of
    consciousness as clean as possible.</p>
    <p>Two more everyday cases are meant to make the same distinction feel
    familiar rather than exotic. Picture driving late at night on a long
    trip while your mind wanders onto something stressful at work. After a
    while you snap back and realize you've been driving for some stretch of
    road without any felt awareness of what you were seeing or doing — even
    though you were clearly accessing the road well enough to steer safely
    the whole time. And picture being deep in conversation in your office
    when you suddenly notice a pneumatic drill has been pounding away
    outside; it's plausible you were hearing it the entire time, since you
    weren't selectively deaf, but the sound wasn't accessible enough to
    guide your speech or action until the moment you consciously registered
    it.</p>
  `,

  stakes: `
    <p>We tend to treat consciousness as a single, unified thing — the
    difference between being awake and aware versus being in a coma or
    dreamless sleep. Block's cases suggest consciousness might instead be a
    "mongrel concept" bundling together at least two separable properties:
    the felt, phenomenal quality of experience, and the functional
    availability of information for reasoning and report. If these two can
    come apart — information being accessible without any felt quality, as
    in blindsight, or a felt quality present without full access, as with
    the pneumatic drill — then an explanation of one doesn't automatically
    explain the other, and theories of consciousness that treat it as one
    phenomenon may be chasing two different targets at once.</p>
  `,

  tension: [
    {
      targets: "Challenges the blindsight data",
      label: "Maybe blindsight patients are dimly conscious after all",
      text: "Some researchers argue there's reason to think blindsight patients retain some degree of phenomenal consciousness of the stimuli rather than none. Normal subjects near the threshold of detection for a very dim stimulus behave similarly to blindsight patients, and scattered light reaching other, undamaged parts of the retina could also explain the correct guesses — both possibilities that don't require positing access without any experience at all.",
    },
    {
      targets: "Questions the methodology",
      label: "Response bias may be driving the contrast",
      text: "Blindsight experiments typically rely on two different kinds of question: a yes/no question (\"are you aware of anything?\"), which patients answer conservatively with \"no,\" and a forced-choice question (\"is it moving left or right?\"), which pushes them to commit to an answer even on a faint signal. The gap between the patients' answers may reflect nothing more than these two question formats inviting different response strategies, rather than revealing any genuine difference in what the patient consciously experiences.",
    },
    {
      targets: "Inverts the standard interpretation",
      label: "Maybe it's phenomenal consciousness without reportability, not without experience",
      text: "A further possibility flips Block's original story: perhaps blindsight involves phenomenal consciousness of the blindspot's contents after all, but the patient simply lacks the ability to verbally report on what they experience. The existing data doesn't clearly rule this reading out any more than it rules out Block's original one.",
    },
    {
      targets: "Reinterprets the drill and driving cases",
      label: "Maybe these are failures of attention, not failures of access",
      text: "Michael Tye suggests the pneumatic-drill case is better described as a conscious state that simply isn't being attended to, rather than a case of phenomenal consciousness minus access consciousness — on this reading, you do have access to the drill's sound the whole time, you just aren't attending to it. Similarly, the distracted driver may have ordinary phenomenal consciousness of the road throughout, just without the higher-order awareness of being aware of it — perceiving the road without, in some sense, perceiving that they're perceiving it.",
    },
  ],

  furtherReading: [
    { label: "Wikipedia — Blindsight", url: "https://en.wikipedia.org/wiki/Blindsight", note: "overview of the clinical phenomenon and its philosophical significance" },
  ],
};
