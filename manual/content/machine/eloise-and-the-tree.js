// manual/content/machine/eloise-and-the-tree.js
//
// Original retelling of Eloise and the Tree — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>Eloise stands in her front yard, looking up at an oak tree. Looking
    at the canopy gives her a visual experience with a greenish quality;
    running her hand along the bark gives her a tactile experience of
    rough bumpiness. Now ask her to turn her attention inward, away from
    the tree and onto the experience itself — onto the greenishness, as a
    feature of her experience rather than of the tree. She finds she
    can't do it. Every attempt to focus on the experience slides straight
    through to the tree; there's nothing intrinsic to the experience
    itself that she can catch hold of and examine.</p>
    <p>You can run the same test right now. Reading this sentence, you're
    having an experience of dark text against a light background (or the
    reverse, in dark mode). Try to turn away from the text itself and
    attend instead to the blackness of your experience, as opposed to the
    blackness of the words. Does your attention slip through to the
    letters on the page, no matter how hard you try to hold it on the
    experience alone?</p>
  `,

  stakes: `
    <p>Representationalists hold that phenomenal consciousness can be
    explained entirely in terms of intentional content — the "aboutness"
    that makes a mental state represent something. Eloise's case is
    offered as support: when we try to introspect the character of an
    experience, we find nothing there except what the experience
    represents, which representationalists take as evidence that there is
    nothing more to the experience than its representational content.
    This is the transparency thesis — experience is like a pane of glass
    we see straight through to the world, never catching our own
    reflection in it.</p>
  `,

  tension: [
    {
      targets: "Inference to the best explanation, stated plainly",
      label: "No intrinsic features found, so none exist",
      text: "If experience had genuine intrinsic qualia — features over and above its functional and representational properties — we should, in principle, be able to attend to them directly. Since careful introspective effort like Eloise's turns up nothing but the tree, the best explanation is that there's nothing else there to find: what seemed like an intrinsic phenomenal quality was really just a representational property all along.",
    },
    {
      targets: "Denies the transparency claim applies generally",
      label: "Not every experience represents something external",
      text: "Critics point to experiences that don't obviously represent anything in the world at all. Push gently on your closed eyelid and you'll see a phosphene — a moving, colored patch that doesn't suggest any actual colored shape is out there; stare at a green dot and look away, and you'll see a red afterimage on blank paper where no red dot exists. In both cases, attention seems to land on the experience itself rather than slipping through to a worldly object, since there's no plausible worldly object for it to slip through to.",
    },
    {
      targets: "Denies the transparency claim applies generally",
      label: "Blurry experience without a blurry world",
      text: "Reading a text message without your glasses, the words look blurry, but nothing in the world — the actual printed or displayed words — is blurry; putting your glasses on changes the phenomenal character of the experience without changing what's represented. That gap suggests the blurriness is a feature of the experience, attendable in its own right, not something the experience merely points toward.",
    },
    {
      targets: "Kind's distinction — weakens the thesis needed",
      label: "Weak transparency isn't strong enough to do the job",
      text: "Amy Kind distinguishes strong transparency, on which it's impossible to attend to experience independent of what it represents, from weak transparency, on which doing so is merely difficult but not impossible. Representationalism needs the strong version to make its case; if experience is only weakly transparent, as Kind argues, careful introspective effort could in principle isolate intrinsic features after all, and the argument from Eloise's case collapses.",
    },
    {
      targets: "Ambiguity about what transparency even claims",
      label: "Negative versus positive transparency",
      text: "There's a further ambiguity in what the transparency thesis asserts: a negative claim about what we cannot attend to directly (anything intrinsic), or a positive claim about what we can attend to directly (the world). The representationalist argument needs the negative claim, but the more defensible reading of cases like Eloise's may only establish the positive one — that we can attend to the tree — which, on its own, doesn't rule out there being additional intrinsic features we simply aren't attending to in that moment.",
    },
  ],

  furtherReading: [],
};
