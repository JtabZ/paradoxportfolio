// shared/js/chrome.js
//
// The header and footer that appear, identically, on every page. Centralizing
// them here means a nav change or a wording tweak to the book credit line
// happens once, not across 50+ exhibit pages.

import { siteName, book, wings } from "../../data/manifest.js";
import { href } from "./paths.js";

/**
 * @param {HTMLElement} container
 * @param {{ breadcrumbs?: {label: string, href?: string}[], currentWing?: string, immersive?: boolean }} [opts]
 *   breadcrumbs: ordered list, last item has no href (it's "here"). Ignored
 *     when immersive is true.
 *   currentWing: slug of the wing this page belongs to, if any — marks the
 *     matching nav link aria-current="page" (see components.css), or (in
 *     immersive mode) becomes the "back to this wing" link.
 *   immersive: exhibit pages only. Renders a minimal bar — the site mark
 *     and a link back to the wing, no nav, no breadcrumbs — fixed and
 *     hidden by default, revealed on scroll-up, near the page end, or on
 *     keyboard focus. The visitor should feel like there's nothing else on
 *     the page until they ask for it.
 */
export function renderHeader(container, opts = {}) {
  const { breadcrumbs = [], currentWing, immersive = false } = opts;

  if (immersive) {
    renderImmersiveHeader(container, currentWing);
    return;
  }

  const navLinks = wings
    .map((w) => {
      const current = w.slug === currentWing ? ' aria-current="page"' : "";
      return `<a href="${href(`wings/${w.slug}/`)}"${current}>${w.name.replace(/^The /, "")}</a>`;
    })
    .join("");

  const crumbs = breadcrumbs.length
    ? `<nav class="breadcrumbs u-container" aria-label="Breadcrumb">${breadcrumbs
        .map((c, i) =>
          i === breadcrumbs.length - 1
            ? `<span class="breadcrumbs__current" aria-current="page">${c.label}</span>`
            : `<a href="${c.href}">${c.label}</a><span class="breadcrumbs__sep" aria-hidden="true">/</span>`
        )
        .join("")}</nav>`
    : "";

  container.innerHTML = `
    <div class="u-container site-header__inner">
      <a class="site-header__mark" href="${href("index.html")}">${siteName}</a>
      <nav class="site-header__nav" aria-label="Wings">${navLinks}</nav>
    </div>
    ${crumbs}
  `;
}

function renderImmersiveHeader(container, currentWing) {
  const wing = wings.find((w) => w.slug === currentWing);

  container.classList.add("site-header--immersive");
  container.innerHTML = `
    <div class="u-container site-header__inner site-header__inner--immersive">
      <a class="site-header__mark" href="${href("index.html")}">${siteName}</a>
      ${wing ? `<a class="site-header__back" href="${href(`wings/${wing.slug}/`)}">← ${wing.name}</a>` : ""}
    </div>
  `;

  // Hidden on open — the exhibit should feel like there's nothing else on
  // the page until the visitor asks for it, by scrolling back up, reaching
  // the end, or tabbing to it.
  let lastY = window.scrollY;
  function updateVisibility() {
    const y = window.scrollY;
    const nearEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 80;
    const scrollingUp = y < lastY;
    container.classList.toggle("is-visible", nearEnd || scrollingUp);
    lastY = y;
  }

  window.addEventListener("scroll", updateVisibility, { passive: true });
  container.addEventListener("focusin", () => container.classList.add("is-visible"));
  container.addEventListener("focusout", updateVisibility);
}

export function renderFooter(container) {
  container.innerHTML = `
    <div class="u-container">
      <p class="site-footer__credit">
        Every retelling on this site is written in original words. The
        underlying cases are drawn from
        <a href="${book.url}" target="_blank" rel="noopener">${book.title}</a>
        by ${book.authors} (${book.publisher}, ${book.year}) — credited and
        linked from every exhibit, never reproduced.
      </p>
      <p class="site-footer__credit">
        Want the plain-text, developer-manual version instead —
        all 50 entries, plus a notebook for your own notes?
        <a href="${href("manual/index.html")}">Read it as a manual →</a>
      </p>
    </div>
  `;
}
