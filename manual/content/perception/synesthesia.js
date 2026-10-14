// manual/content/perception/synesthesia.js
//
// Original retelling of Synesthesia — a paraphrase of the book's chapter,
// not a quotation. Credit lives in the page chrome; this file holds only
// the paraphrased content.

export const entry = {
  case: `
    <p>Consider a synesthete we can call Cyndi, who has chromesthesia:
    sounds automatically trigger color experiences. Frying bacon gives her
    a sensation of red. Cracking an egg gives her a sensation of blue.
    Pouring orange juice gives her a sensation of green. None of this is
    something she's choosing to picture — the colors simply arrive, stable
    and automatic, every time, exactly the way an ordinary person's
    experience of a loud noise or a sharp smell simply arrives.</p>
    <p>How should we classify Cyndi's color experience? Calling it visual
    seems wrong, since nothing green is actually in front of her eyes — her
    eyes might even be closed when it happens — and color is usually
    discriminated by sight, triggered by visual input, not sound. But
    calling it auditory seems equally wrong, since colors don't have
    auditory properties like pitch or volume; nothing about hue or
    brightness is the kind of thing ears register. Saying her senses have
    simply gotten "cross-wired" names the phenomenon without explaining it.
    And it isn't mere imagination either: imagination is typically something
    we produce voluntarily and can tell apart from perceiving, whereas
    Cyndi's color sensations arrive involuntarily and feel, to her, exactly
    like perceiving. Testing on grapheme-color synesthetes reinforces the
    perceptual reading: a synesthete who sees red whenever she sees the
    numeral 2 can pick 2s out of a field of green 5s just as fast as an
    ordinary person spots a numeral printed in a genuinely different color
    — evidence that the triggered color is doing real work inside the
    visual system, not just floating alongside it as an afterthought.</p>
  `,

  stakes: `
    <p>Synesthesia puts pressure on some fairly basic assumptions about how
    the senses work. We typically assume the senses are discrete,
    independent systems, individuated either by which sensory organ is in
    use or by which kind of stimulus is proprietary to them — sound for
    hearing, color for vision, and so on. Synesthesia resists both ways of
    drawing the line: Cyndi doesn't need her eyes to get a color experience,
    and the stimulus actually driving her experience (sound) belongs to a
    different sense than the content it produces (color). If synesthesia is
    perceptual, as the pop-out evidence suggests, something has to give in
    how we individuate the senses from one another in the first place.</p>
  `,

  tension: [
    {
      targets: "Challenges modularity of the senses",
      label: "Maybe the senses were never cleanly separate",
      text: "One response, following Brian Keeley, is to drop the standard assumption that the senses are discrete and independent of one another. If the senses were never fully separately wired to begin with, synesthesia stops looking like an anomalous cross-wiring and starts looking like a vivid case of an interconnection that's present, in subtler form, all the time — as in the McGurk effect, where what syllable you hear changes depending on the mouth movements you're simultaneously watching.",
    },
    {
      targets: "Challenges functionalism",
      label: "Same functional role should mean same mental state — but it doesn't",
      text: "Functionalism defines a mental state by its functional role, including what typically causes it. An experience of red is partly defined by its connection to retinal stimulation. But Cyndi's color experience, triggered by sound with no retinal stimulation involved, is reportedly experientially identical to an ordinary person's experience of seeing a red apple, despite having a completely different causal profile — which seems to force functionalism into denying that two experientially identical states are states of the same type.",
      reply: "Defenders of functionalism have responses on both sides: some argue a more sophisticated functionalism can accommodate synesthetic triggers without abandoning the framework, while others simply treat synesthetic experience as a kind of malfunction that needn't be taken as revealing a color experience's normal functional role.",
    },
    {
      targets: "Challenges representationalism",
      label: "Same representational content, different phenomenal character",
      text: "Representationalists hold that an experience's phenomenal character is nothing more than its representational content. But a non-synesthete and Cyndi both hearing bacon sizzle seem to have auditory experiences representing the same thing — bacon sizzling — while Cyndi's experience carries extra phenomenal character the non-synesthete's lacks, which looks like exactly the kind of case representationalism says can't happen.",
      reply: "Representationalists can try to locate some representational difference between the two experiences after all, which would preserve the view by denying that the contents really are identical in the first place.",
    },
    {
      targets: "Raises doubts about introspection",
      label: "Can synesthetes' reports of their own experience really be taken at face value?",
      text: "A grapheme-color synesthete who sees the numeral 2 as red can still correctly report that the ink printing the numeral is black — meaning the numeral apparently looks both red and black to her at once, in the very same place. Fiona Macpherson argues it's hard to make sense of a single experience representing two different, incompatible colors in the same location simultaneously, which suggests synesthetes' introspective reports of their own experience may need more careful untangling than they're usually given credit for.",
    },
  ],

  furtherReading: [
    { label: "Allen-Hermanson, Sean, and Matey, Jennifer — \"Synesthesia\" (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/synesthe/", note: "a philosophical overview of synesthesia covering the individuation-of-the-senses, functionalism, and representationalism debates" },
  ],
};
