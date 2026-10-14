#!/usr/bin/env python3
"""manual/tools/make-shells.py

One-off (but re-runnable) generator for the manual's near-identical HTML
shells: the home page, the 5 wing pages, and the 50 entry pages. Mirrors
how the cabinet keeps wings/<slug>/index.html and
wings/<slug>/exhibits/<slug>/index.html as thin shells driven by a shared
renderer (shared/js/render-wing.js, render-exhibit.js) plus
data/manifest.js.

Re-run this any time data/manifest.js gains or renames an entry — it
regenerates every shell from scratch (safe: shells hold no hand-written
content, only the <body data-*> wiring that tells manual/js/render.js what
to render).

Usage (from the repo root):
    python3 manual/tools/make-shells.py
"""
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
MANIFEST = REPO_ROOT / "data" / "manifest.js"
MANUAL = REPO_ROOT / "manual"

SUITE = "Philosophy of Mind Manual"


def parse_manifest():
    text = MANIFEST.read_text()

    wings = []
    for m in re.finditer(
        r'slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*part:\s*"([^"]+)",\s*blurb:\s*((?:"[^"]*"\s*\+?\s*)+),',
        text,
        re.S,
    ):
        slug, name, part, blurb_raw = m.groups()
        blurb = "".join(re.findall(r'"([^"]*)"', blurb_raw))
        wings.append({"slug": slug, "name": name, "part": part, "blurb": blurb})

    exhibits = []
    for m in re.finditer(
        r'number:\s*(\d+),\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*wing:\s*"([^"]+)",\s*oneLiner:\s*((?:"[^"]*"\s*\+?\s*)+),',
        text,
        re.S,
    ):
        number, slug, title, wing, oneliner_raw = m.groups()
        oneliner = "".join(re.findall(r'"([^"]*)"', oneliner_raw))
        exhibits.append(
            {"number": int(number), "slug": slug, "title": title, "wing": wing, "oneLiner": oneliner}
        )

    return wings, exhibits


def write(path: Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)
    print(f"  wrote {path.relative_to(REPO_ROOT)}")


def head(title, description, depth, extra_og=""):
    up = "../" * depth
    return f"""<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="icon" type="image/svg+xml" href="{up}shared/img/favicon.svg">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  {extra_og}
  <link rel="stylesheet" href="{up}manual/css/manual.css">"""


def shell(body_attrs, main_depth, script_depth=None):
    script_depth = main_depth if script_depth is None else script_depth
    up_script = "../" * script_depth
    return f"""<body {body_attrs}>
  <a class="skip-link" href="#manual-root">Skip to content</a>
  <div class="manual-topbar">
    <button class="manual-topbar__toggle" id="manual-menu-toggle" aria-expanded="false" aria-controls="manual-sidebar">&#9776; menu</button>
    <span class="manual-topbar__mark">man paradox</span>
  </div>
  <div class="manual-shell" id="manual-shell" data-sidebar-open="false">
    <aside class="manual-sidebar" id="manual-sidebar" aria-label="Paradox index"></aside>
    <main class="manual-main">
      <div class="manual-container" id="manual-root"></div>
    </main>
  </div>
  <footer class="manual-footer" id="manual-footer"></footer>
  <script type="module" src="{up_script}manual/js/render.js"></script>
</body>
</html>
"""


def make_home():
    title = "man paradox — Philosophy of Mind Manual"
    desc = "A developer-manual-style reference for fifty philosophy-of-mind paradoxes, with a built-in notebook for your own notes."
    html = f"""<!doctype html>
<html lang="en">
<head>
  {head(title, desc, depth=1)}
</head>
{shell('data-page="home"', main_depth=1)}"""
    write(MANUAL / "index.html", html)


def make_wing(wing):
    title = f"{wing['slug']}/ — {SUITE}"
    desc = wing["blurb"]
    html = f"""<!doctype html>
<html lang="en">
<head>
  {head(title, desc, depth=2)}
</head>
{shell(f'data-page="wing" data-wing="{wing["slug"]}"', main_depth=2)}"""
    write(MANUAL / wing["slug"] / "index.html", html)


def make_entry(exhibit):
    title = f"{exhibit['title']} — {SUITE}"
    desc = exhibit["oneLiner"]
    html = f"""<!doctype html>
<html lang="en">
<head>
  {head(title, desc, depth=3)}
</head>
{shell(f'data-page="entry" data-wing="{exhibit["wing"]}" data-slug="{exhibit["slug"]}"', main_depth=3)}"""
    write(MANUAL / exhibit["wing"] / exhibit["slug"] / "index.html", html)


def main():
    wings, exhibits = parse_manifest()
    assert len(wings) == 5, f"expected 5 wings, found {len(wings)}"
    assert len(exhibits) == 50, f"expected 50 exhibits, found {len(exhibits)}"

    print("Generating manual/index.html ...")
    make_home()

    print("Generating 5 wing shells ...")
    for w in wings:
        make_wing(w)

    print("Generating 50 entry shells ...")
    for e in exhibits:
        make_entry(e)

    print(f"\nDone: 1 home + {len(wings)} wings + {len(exhibits)} entries.")


if __name__ == "__main__":
    main()
