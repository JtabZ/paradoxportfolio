// exhibit.js — the original retelling for this exhibit.
//
// Title, exhibit number, wing, and the one-line teaser all come from
// data/manifest.js (that's the single source of truth for those). This
// file holds only the longer prose that's unique to this exhibit: the
// setup, the full case, the argument, the tension between responses, and
// any extra sources beyond the book credit that render-exhibit.js already
// adds automatically.
//
// Fidelity matters here: paradoxes depend on their exact logical steps.
// Before writing, read the book's chapter closely and follow its structure
// — BACKGROUND maps to `stakes`, THE CASE maps to `case`, the chapter's own
// chain of reasoning maps to `argument`, and DISCUSSION maps to `tension`
// (with `targets`/`reply` capturing each response and its counter-reply).
// Write every field in your own words. Paraphrase, don't quote — credit
// and link the book instead.

export const exhibit = {
  // Hero layout — optional, defaults to "piece". Use "piece" when this
  // exhibit has an art.js piece worth leading with (2 columns: title
  // beside the live piece, above the fold). Use "type" to let the title
  // itself carry the opening screen instead — the piece, if there is one,
  // gets its own scene right after The Case. (Dev-only: append ?hero=type
  // or ?hero=piece to any exhibit's URL to preview the other mode without
  // changing this field.)
  // hero: "piece",

  // An HTML version of the manifest one-liner, with <em>...</em> around
  // the word or phrase that should land hardest — it renders in the
  // italic serif accent, in the wing's accent color. Optional: falls back
  // to the plain-text manifest oneLiner if omitted.
  // heroLine: "Replace this with an <em>accented</em> version of the one-liner.",

  // Optional thematic treatment for the giant title, registered in
  // shared/js/type-effects.js: "color-flood" (letters start grayscale,
  // color floods in letter by letter), "echo" (outlined ghost copies
  // ripple outward like sonar), or "hollow" (a filled title and an
  // outlined twin; hover swaps which one reads as "real"). Omit for the
  // default entrance + candlelight only.
  // titleEffect: "color-flood",

  // A short line shown under the piece, e.g. "Click to leave the room."
  // Leave empty to omit.
  pieceHint: "",

  // What's at Stake — optional. A paragraph or two paraphrasing the
  // chapter's BACKGROUND: what the relevant theory claims, and why this
  // case puts pressure on it. Omit the field entirely to skip the section.
  stakes: `
    <p>TODO: what's the theory under pressure here, and why does this case
    challenge it?</p>
  `,

  // The Case — a paragraph or two, as an HTML string (a few <p> tags).
  case: `
    <p>TODO: retell the paradox here, in your own words.</p>
  `,

  // The Argument — optional. The reasoning laid out as explicit steps,
  // ending in a stated conclusion. Follow the book's own chain of
  // reasoning (its numbered premises, if it has them). Omit the field
  // entirely to skip the section.
  argument: {
    steps: [
      "TODO: step one of the reasoning.",
      "TODO: step two.",
    ],
    conclusion: "TODO: what the steps are meant to establish.",
  },

  // The Tension — 2 or more main responses/positions, shown as forking
  // paths. `targets` and `reply` are both optional per item:
  //   targets — a short tag naming what the response does, e.g.
  //             "Rejects premise 2" or "Accepts the argument".
  //   reply   — the book's counter-reply to that response, if it has one.
  tension: [
    { label: "TODO: position one", text: "TODO: a sentence or two." },
    { label: "TODO: position two", text: "TODO: a sentence or two." },
  ],

  // A closing aside — optional. For a point that fits nowhere else (a
  // twist, a historical note, a caveat about the example). Omit the field
  // entirely to skip the section.
  note: `
    <p>TODO: anything worth mentioning that doesn't fit above.</p>
  `,

  // Further Reading — sources beyond the book credit. Optional; delete the
  // example object or add more. Prefer the chapter's own "canonical
  // presentation" citation. Verify any URL actually resolves to the right
  // source before using it — don't guess a DOI or JSTOR ID from memory.
  furtherReading: [
    // { label: "Author, Title (Year)", url: "https://...", note: "why it matters" },
  ],
};
