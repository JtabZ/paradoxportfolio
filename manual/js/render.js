// manual/js/render.js
//
// One script, reused by every page in the manual (home, the 5 wing pages,
// and the 50 entry pages) — same pattern as the cabinet's render-home.js /
// render-wing.js / render-exhibit.js. Which page and which entry to render
// come from <body data-page="…" data-wing="…" data-slug="…">; everything
// else is looked up from data/manifest.js plus this entry's sibling
// content/<wing>/<slug>.js.

import { wings, exhibits, exhibitsForWing, wingBySlug, exhibitBySlug, neighbors, book } from "../../data/manifest.js";
import { href } from "../../shared/js/paths.js";
import { renderSidebar, wireMobileToggle } from "./sidebar.js";
import { renderNotebook, renderNotesTools } from "./notes.js";

const SUITE = "Philosophy of Mind Manual";
const page = document.body.dataset.page;
const currentWing = document.body.dataset.wing || null;
const currentSlug = document.body.dataset.slug || null;

mountShellChrome();

if (page === "home") {
  renderHome();
} else if (page === "wing") {
  renderWing(currentWing);
} else if (page === "entry") {
  renderEntry(currentWing, currentSlug);
}

// ---- shell: topbar + sidebar + footer -------------------------------------

function mountShellChrome() {
  const shell = document.getElementById("manual-shell");
  const toggle = document.getElementById("manual-menu-toggle");
  if (shell && toggle) wireMobileToggle(shell, toggle);

  renderSidebar(document.getElementById("manual-sidebar"), {
    currentWing,
    currentSlug,
  });

  const footer = document.getElementById("manual-footer");
  if (footer) {
    footer.innerHTML = `
      <p>
        Every entry here is an original retelling, not a reproduction, of
        <a href="${book.url}" target="_blank" rel="noopener">${book.title}</a>
        by ${book.authors} (${book.publisher}, ${book.year}) — credited and
        linked from every entry.
      </p>
      <div class="manual-footer__links">
        <a href="${href("index.html")}">← Cabinet of Minds (the gallery version)</a>
        <a href="${href("manual/index.html")}">man paradox: home</a>
      </div>
    `;
  }
}

// ---- home ------------------------------------------------------------------

function renderHome() {
  document.title = `man paradox — ${SUITE}`;

  const main = document.getElementById("manual-root");
  const totalEntries = exhibits.length;

  main.innerHTML = `
    <section class="manual-hero">
      <p class="manual-hero__eyebrow">$ man paradox</p>
      <h1 class="manual-hero__title">Philosophy of Mind Manual</h1>
      <p class="manual-hero__lede">
        ${totalEntries} philosophy-of-mind paradoxes, thought experiments, and
        puzzles — reference pages, not art pieces. Pick a section (wing)
        below, or use the tree on the left. Every entry ends with a notebook
        where you can log your own thoughts, research, questions, and
        objections.
      </p>
    </section>

    <section class="manual-section" aria-labelledby="toc-heading">
      <h2 class="manual-section__heading" id="toc-heading">Table of Contents</h2>
      <div id="toc-list"></div>
    </section>

    <section class="manual-section notebook" aria-labelledby="notes-heading">
      <h2 class="manual-section__heading" id="notes-heading">Your Notebook</h2>
      <div id="notes-tools"></div>
    </section>
  `;

  document.getElementById("toc-list").innerHTML = wings
    .map((wing, i) => {
      const roster = exhibitsForWing(wing.slug);
      return `
        <a class="toc-wing" href="${href(`manual/${wing.slug}/`)}">
          <span class="toc-wing__part">Part ${toRoman(i + 1)} — ${wing.part.replace(/^Part [IVX]+\s*—\s*/, "")}</span>
          <h3 class="toc-wing__name">${wing.slug}/ — ${wing.name}</h3>
          <p class="toc-wing__blurb">${wing.blurb}</p>
          <span class="toc-wing__status">${roster.length} entries</span>
        </a>`;
    })
    .join("");

  renderNotesTools(document.getElementById("notes-tools"), { exhibits });
}

// ---- wing --------------------------------------------------------------

function renderWing(wingSlug) {
  const wing = wingBySlug(wingSlug);
  const main = document.getElementById("manual-root");

  if (!wing) {
    document.title = `Not found — ${SUITE}`;
    main.innerHTML = `<p>That section doesn't exist yet.</p>`;
    return;
  }

  document.title = `${wing.slug} — ${SUITE}`;
  const roster = exhibitsForWing(wing.slug);

  main.innerHTML = `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="${href("manual/index.html")}">man paradox</a>
      <span class="breadcrumbs__sep" aria-hidden="true">/</span>
      <span aria-current="page">${wing.slug}</span>
    </nav>

    <section class="manual-hero">
      <p class="manual-hero__eyebrow">${wing.part}</p>
      <h1 class="manual-hero__title">${wing.slug}/</h1>
      <p class="manual-hero__lede">${wing.blurb}</p>
    </section>

    <section class="manual-section" aria-label="Entries in this section">
      <div class="entry-grid" id="wing-entries"></div>
    </section>
  `;

  document.getElementById("wing-entries").innerHTML = roster
    .map((e) => {
      const num = String(e.number).padStart(2, "0");
      return `
        <a class="entry-card" href="${href(`manual/${wing.slug}/${e.slug}/`)}">
          <span class="entry-card__num">${num}</span>
          <span class="entry-card__body">
            <span class="entry-card__title">${e.title}</span>
            <span class="entry-card__oneliner">${e.oneLiner}</span>
          </span>
        </a>`;
    })
    .join("");
}

// ---- entry -------------------------------------------------------------

async function renderEntry(wingSlug, slug) {
  const meta = exhibitBySlug(slug);
  const wing = meta ? wingBySlug(meta.wing) : null;
  const main = document.getElementById("manual-root");

  if (!meta || !wing) {
    document.title = `Not found — ${SUITE}`;
    main.innerHTML = `<p>This entry doesn't exist yet.</p>`;
    return;
  }

  document.title = `${meta.title} — ${SUITE}`;

  let content = null;
  try {
    const mod = await import(href(`manual/content/${wing.slug}/${slug}.js`));
    content = mod.entry;
  } catch {
    content = null;
  }

  const number = String(meta.number).padStart(2, "0");
  const partNum = toRoman(wings.findIndex((w) => w.slug === wing.slug) + 1);
  const manName = `${slug.toUpperCase()}(${wings.findIndex((w) => w.slug === wing.slug) + 1})`;

  main.innerHTML = `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="${href("manual/index.html")}">man paradox</a>
      <span class="breadcrumbs__sep" aria-hidden="true">/</span>
      <a href="${href(`manual/${wing.slug}/`)}">${wing.slug}</a>
      <span class="breadcrumbs__sep" aria-hidden="true">/</span>
      <span aria-current="page">${slug}</span>
    </nav>

    <div class="manpage-header">
      <span class="manpage-header__name">${manName}</span>
      <span class="manpage-header__suite">${SUITE}</span>
      <span class="manpage-header__name">${manName}</span>
    </div>

    <span class="entry-wingtag">Part ${partNum} — ${wing.name}</span>
    <h1 class="entry-title">
      <span class="entry-title__number">#${number}</span>
      ${meta.title}
      <span class="entry-title__cursor" aria-hidden="true"></span>
    </h1>
    <p class="entry-oneliner">${content && content.heroLine ? content.heroLine : escapeHtml(meta.oneLiner)}</p>

    <div id="entry-body"></div>

    <section class="manual-section notebook" aria-labelledby="notebook-heading" id="entry-notebook"></section>

    <nav class="entry-pager" id="entry-pager" aria-label="Entry navigation"></nav>
  `;

  document.getElementById("entry-body").innerHTML = content
    ? renderEntryBody(content)
    : `<div class="callout callout--warn">
         <p class="callout__label">⚠ Not yet written</p>
         <p>This entry's content file hasn't been added yet. Check back soon,
         or open the <a href="${href("index.html")}">Cabinet of Minds</a>
         version if this paradox has an exhibit there.</p>
       </div>`;

  await renderNotebook(document.getElementById("entry-notebook"), slug);

  renderPager(document.getElementById("entry-pager"), slug);
}

function renderEntryBody(entry) {
  const parts = [];

  if (entry.stakes) {
    parts.push(`
      <section class="manual-section">
        <h2 class="manual-section__heading">Background</h2>
        <div class="callout callout--note">
          <p class="callout__label">ℹ Note</p>
          <div class="manual-prose">${entry.stakes}</div>
        </div>
      </section>`);
  }

  parts.push(`
    <section class="manual-section">
      <h2 class="manual-section__heading">The Case</h2>
      <p class="cmd-line"><span class="cmd-line__prompt">$</span> cat case.txt</p>
      <div class="manual-prose">${entry.case}</div>
    </section>`);

  if (entry.argument) {
    parts.push(`
      <section class="manual-section">
        <h2 class="manual-section__heading">The Argument</h2>
        <div class="argument-block">
          <ol class="argument-block__steps">
            ${entry.argument.steps.map((s) => `<li>${s}</li>`).join("")}
          </ol>
          <p class="argument-block__conclusion"><span class="argument-block__conclusion-mark">∴</span>${entry.argument.conclusion}</p>
        </div>
      </section>`);
  }

  if (entry.tension && entry.tension.length) {
    parts.push(`
      <section class="manual-section">
        <h2 class="manual-section__heading">Responses</h2>
        ${entry.tension
          .map(
            (t) => `
          <div class="callout callout--warn response">
            <div class="response__head">
              <span class="callout__label">⚠ Response</span>
              ${t.targets ? `<span class="response__tag">${t.targets}</span>` : ""}
            </div>
            ${t.label ? `<p class="response__label">${t.label}</p>` : ""}
            <p class="response__text">${t.text}</p>
            ${
              t.reply
                ? `<div class="response__reply">
                     <span class="response__reply-tag">✗ Counter</span>
                     <p>${t.reply}</p>
                   </div>`
                : ""
            }
          </div>`
          )
          .join("")}
      </section>`);
  }

  if (entry.note) {
    parts.push(`
      <section class="manual-section">
        <h2 class="manual-section__heading">Notes</h2>
        <div class="callout callout--note">
          <p class="callout__label">ℹ Note</p>
          <div class="manual-prose">${entry.note}</div>
        </div>
      </section>`);
  }

  const furtherReading = entry.furtherReading || [];
  parts.push(`
    <section class="manual-section">
      <h2 class="manual-section__heading">See Also</h2>
      <ul class="see-also">
        ${furtherReading
          .map(
            (f) =>
              `<li><a href="${f.url}" target="_blank" rel="noopener">${f.label}</a>${
                f.note ? ` <span class="see-also__note">— ${f.note}</span>` : ""
              }</li>`
          )
          .join("")}
        <li><a href="${book.url}" target="_blank" rel="noopener">${book.title}</a>
          <span class="see-also__note">— ${book.authors} (${book.publisher}, ${book.year}); the source this entry retells</span>
        </li>
      </ul>
    </section>`);

  return parts.join("\n");
}

function renderPager(container, slug) {
  const { prev, next } = neighbors(slug);
  container.innerHTML = `
    ${
      prev
        ? `<a class="entry-pager__link entry-pager__link--prev" href="${href(`manual/${prev.wing}/${prev.slug}/`)}">
             <span class="entry-pager__dir">← [${String(prev.number).padStart(2, "0")}]</span>${prev.title}
           </a>`
        : `<span class="entry-pager__spacer"></span>`
    }
    ${
      next
        ? `<a class="entry-pager__link entry-pager__link--next" href="${href(`manual/${next.wing}/${next.slug}/`)}">
             <span class="entry-pager__dir">[${String(next.number).padStart(2, "0")}] →</span>${next.title}
           </a>`
        : `<span class="entry-pager__spacer"></span>`
    }
  `;

  // "[" and "]" jump to the previous/next entry, same shortcut a pager uses.
  document.addEventListener("keydown", (e) => {
    if (isTyping(e.target)) return;
    if (e.key === "[" && prev) window.location.href = href(`manual/${prev.wing}/${prev.slug}/`);
    if (e.key === "]" && next) window.location.href = href(`manual/${next.wing}/${next.slug}/`);
  });
}

function isTyping(el) {
  return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}

function toRoman(n) {
  const map = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return map[n - 1] || String(n);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
