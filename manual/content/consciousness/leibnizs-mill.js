// manual/content/consciousness/leibnizs-mill.js
//
// Original retelling of Leibniz's Mill — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Materialists hold that the mind is, at bottom, nothing but a
    physical mechanism — thought, perception, and consciousness are just
    what happens when the machine runs. Leibniz asks us to take that idea
    literally and scale it up. Imagine the brain, or whatever mechanism
    produces a mind, blown up to the size of a mill, so that a person
    could walk around inside it the way they'd walk into an actual
    grain mill and watch the gears turn and the grindstones rotate.</p>
    <p>Wandering through those enlarged workings, you would see parts
    pushing other parts, levers catching on gears, wheels turning
    wheels. All of it is perfectly intelligible as mechanical cause and
    effect. But nowhere among the pushing and pulling would you find
    anything that looked like a thought or a perception, no matter how
    closely you studied the machinery or how well you understood the
    physics governing it. The existence of thoughts and perceptions
    would be nowhere in evidence. Leibniz concludes that mechanical,
    material operations alone cannot be what thought and perception
    are.</p>
  `,

  stakes: `
    <p>By Leibniz's time, materialism about the mind already had
    defenders — Hobbes among them — and Leibniz saw it as resting on a
    mechanistic picture he thought could not deliver what it promised.
    The mill was his attempt to make that failure vivid and independent
    of his other metaphysical commitments. The argument looks forward to
    later attempts to show that structure and motion alone cannot
    account for consciousness, and it anticipates, in rough outline, the
    kind of challenge Searle would later pose with his Chinese Room.</p>
  `,

  tension: [
    {
      targets: "Rejects the inference from 'can't see it' to 'isn't there'",
      label: "Seeing the parts isn't seeing the whole",
      text: "Many commentators find the argument's basic move too quick: from the fact that walking through the mill wouldn't let you visually spot thoughts or perceptions among the gears, nothing follows about whether the mill actually has them. Watching the parts of a thing operate reveals some of its properties, not necessarily all of them — a system's capacities can outrun what's visible in its moving parts.",
      reply: "The chapter notes this problem can be sidestepped only partly by a more charitable reading, discussed next, and that even on the stronger reading, a version of the same worry resurfaces.",
    },
    {
      targets: "Offers a more charitable version of the argument",
      label: "The parts give no explanation, not just no sighting",
      text: "A better version has Leibniz arguing that if materialism were true, observing the moving parts should explain, or at least provide evidence of, thought and perception — but nothing about the moving parts does either. On this reading the argument isn't about failing to visually spot thoughts in the gears, but about the parts giving no explanatory purchase on them at all.",
      reply: "Even this stronger version runs into the same basic problem: focusing on parts in isolation might obscure what the whole thing is capable of. Shrink down and wander through a heart at the atomic level, and nothing you'd see would reveal that it's an organ, that it pumps blood, or even that it's alive — those are facts about the whole that don't show up at that scale. The brain could be no different.",
    },
    {
      targets: "Reads the argument as a conceivability claim",
      label: "It's simply inconceivable that gears could think",
      text: "On a still stronger reading, Leibniz is making a conceivability claim: it's inconceivable that any mechanical process — gears pushing and pulling, or anything else of that kind — could add up to thought or perception. This brings the mill close to later conceivability arguments like the zombie argument.",
      reply: "The reply again is that our difficulty conceiving of material minds may just reflect how little we currently understand about how matter in motion could generate thought or perception — if we understood the connection better, the inconceivability might dissolve.",
    },
    {
      targets: "Defends a difference in kind between movement and experience",
      label: "Feeling is a different kind of thing than moving",
      text: "Defenders of the mill argument hold their ground by insisting there's a difference in kind, not just in complexity, between material motion and conscious experience. Material processes are about how things behave in space and time; consciousness is about what it's like, from the inside, to be the thing having the experience. No amount of added mechanical complexity obviously explains why that felt quality should show up at all. The point isn't that matter in motion couldn't ever produce experience — add the right connecting laws and it certainly might — but that doing so requires adding something beyond the machine's parts and motions as such.",
    },
  ],

  note: `
    <p>Much of the modern debate over the mill concerns what Leibniz was
    even trying to prove — commentators disagree sharply on whether he
    intended a modest observation about what's visible inside a
    mechanism, or the much bolder claim that mechanism as such is
    incompatible with thought.</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Leibniz's Philosophy of Mind", url: "https://plato.stanford.edu/entries/leibniz-mind/", note: "situates the mill within Leibniz's broader philosophy of mind" },
  ],
};
