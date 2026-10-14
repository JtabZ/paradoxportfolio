# Philosophy of Mind Manual (`manual/`)

A second, text-first way into the same 50 paradoxes as **Cabinet of Minds**
(the gallery version at the repo root): a dark-mode, monospace,
developer-manual/man-page-styled reference, with a notebook for your own
thoughts attached to each entry.

Served at `/manual/` on the same site — no build step, no separate deploy.

## Structure

- `index.html` — the "man paradox" landing page: table of contents + notebook tools.
- `<wing>/index.html` — one page per wing (`consciousness`, `machine`,
  `meaning`, `perception`, `self`), listing its entries.
- `<wing>/<slug>/index.html` — one shell per paradox (55 total). All of
  these are generated — see below — and hold no hand-written content.
- `css/manual.css` — the one stylesheet: dark terminal palette, monospace
  type, and the four highlighter hues (green/red/yellow/blue) used for
  callouts.
- `js/render.js` — renders home/wing/entry pages from `<body data-*>` plus
  `data/manifest.js` (shared with the cabinet) and this entry's
  `content/<wing>/<slug>.js`.
- `js/sidebar.js` — the left nav tree + grep filter + mobile toggle.
- `js/notes.js` — the notebook: localStorage CRUD, the entry notebook UI,
  and the export/import tools on the home page.
- `js/format.js` — HTML-escaping and the tiny safe markdown subset used to
  render note bodies.
- `content/<wing>/<slug>.js` — the actual prose for each entry: `stakes`
  (Background), `case` (The Case), `argument` (steps + conclusion),
  `tension` (Responses, each with optional `targets`/`reply`), `note`, and
  `furtherReading`. **Same schema as the cabinet's `exhibit.js`** — three
  entries (`marys-room`, `zombies`, `what-its-like-to-be-a-bat`) are
  one-line re-exports of the cabinet's own files rather than copies.
- `notes/notes.json` — published notes, committed to the repo. Starts as
  `{"version": 1, "notes": {}}`.
- `tools/make-shells.py` — regenerates all 55 shell HTML files from
  `data/manifest.js`. Re-run it after adding/renaming/reordering entries
  there; it's safe, since shells hold no content of their own.

## Content rule

Every entry is an **original retelling**, not a reproduction, of a chapter
from *Philosophy of Mind: 50 Puzzles, Paradoxes, and Thought Experiments*.
Follow the chapter's own structure (background → case → argument →
responses), write every sentence in your own words, and credit + link the
book — never quote it. The source `exhibit.js` template at
`_template/exhibit/exhibit.js` documents this in more detail; the schema
is identical here.

## The notebook

Every entry page ends with a notebook: log a `thought`, `research` note
(optionally with a source URL), `question`, or `objection` against that
paradox. Notes save instantly to `localStorage` in your browser — private,
per-browser, not synced anywhere.

To make your notes visible on the published site:

1. Open the manual home page (`/manual/`).
2. Click **Export notes.json** under "Your Notebook." This downloads a
   merged file (your local notes + whatever's already published).
3. Replace `manual/notes/notes.json` with the downloaded file.
4. Commit and push. Published notes show a `[published]` badge; anything
   still only in your browser shows `[draft]`.

**Import** on the same page loads a `notes.json` back into your browser's
local store — useful for moving notes to another device/browser, or for
restoring from a backup.

## Running locally

Same as the cabinet — no build step:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/manual/`.
