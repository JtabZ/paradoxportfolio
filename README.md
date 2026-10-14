# Cabinet of Minds

A museum of the mind: 50 philosophy-of-mind thought experiments, each retold as a gallery
**exhibit** — a short original retelling paired with a small interactive artwork that
performs the idea.

Inspired by, and crediting throughout, *Philosophy of Mind: 50 Puzzles, Paradoxes, and
Thought Experiments* by Torin Alter, Robert J. Howell, and Amy Kind. This site does not
reproduce the book's text — every retelling here is written in original words, with
credit and a link back to the source on each exhibit page.

There's also a second, text-first way into the same 50 paradoxes: **[`manual/`](manual/)**,
a dark-mode, developer-manual-styled reference with all 50 entries and a built-in notebook
for your own notes. See `manual/README.md`.

## Running locally

No build step. From the repo root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `data/manifest.js` — the single source of truth for all 5 wings and 50 exhibits
  (title, wing, slug, one-liner, and `status: "built" | "coming-soon"`).
- `shared/` — global CSS (`css/tokens.css`, `base.css`, `components.css`, `exhibit.css`),
  shared page renderers (`js/render-home.js`, `render-wing.js`, `render-exhibit.js`), and
  the reusable art framework (`js/art-kit/`).
- `wings/<wing-slug>/index.html` — a wing's gallery page, listing its exhibits.
- `wings/<wing-slug>/exhibits/<exhibit-slug>/` — one exhibit: `index.html` (shell),
  `exhibit.js` (content), `art.js` (the interactive piece), optional `art.css`.
- `_template/exhibit/` — copy this folder to start a new exhibit.
- `manual/` — the text-first, developer-manual-styled version of the same 50 paradoxes,
  with a notebook for your own notes. See `manual/README.md`.

## Adding a new exhibit

1. Copy `_template/exhibit/` into the right wing's `exhibits/` folder, renamed to the new
   exhibit's slug.
2. Fill in `exhibit.js` (title, one-liner, case, tension, further reading — the book credit).
   Follow the book chapter's own logical structure (its stated premises/steps, its actual
   responses) — paraphrase it in original words, never quote it.
3. Build the piece in `art.js` using the `mount(container, ctx)` / `unmount()` contract from
   `shared/js/art-kit/`.
4. Flip that exhibit's entry in `data/manifest.js` from `status: "coming-soon"` to `"built"`.
5. Fill in the `title` / `description` / `og:*` placeholders in that exhibit's `index.html`
   with the real title and one-liner.

## Deployment

Hosted on GitHub Pages, served straight from the repository root — no build pipeline.
