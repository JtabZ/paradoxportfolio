// shared/js/render-exhibit.js
//
// One script, reused by every exhibit page. It builds the immersive layout
// — a hero (the title, and if the exhibit has one, its live piece, above
// the fold) followed by scroll-staged scenes (What's at Stake / The Case /
// The Argument / The Tension / a note / Further Reading) and a closing
// outro — from data/manifest.js plus the exhibit's own sibling exhibit.js,
// then mounts the sibling art.js piece into the stage. Which exhibit to
// render comes from <body data-exhibit-slug="…">, set in that exhibit's
// otherwise near-identical shell — a layout or chrome change only ever
// happens here.

import { exhibitBySlug, wingBySlug, neighbors, book, siteName } from "../../data/manifest.js";
import { renderHeader, renderFooter } from "./chrome.js";
import { href } from "./paths.js";
import { readPalette } from "./art-kit/palette.js";
import { createStage } from "./art-kit/canvas-stage.js";
import { createReveal } from "./art-kit/reveal.js";
import { loadP5 } from "./art-kit/p5-loader.js";
import { mountTitle } from "./type-effects.js";

const slug = document.body.dataset.exhibitSlug;
const meta = exhibitBySlug(slug);
const wing = meta ? wingBySlug(meta.wing) : null;

renderFooter(document.getElementById("site-footer"));

if (!meta || !wing) {
  renderHeader(document.getElementById("site-header"));
  document.getElementById("exhibit-root").innerHTML = `<p>This exhibit doesn't exist yet.</p>`;
} else {
  document.title = `${meta.title} — ${siteName}`;

  renderHeader(document.getElementById("site-header"), {
    currentWing: wing.slug,
    immersive: true,
  });

  const root = document.getElementById("exhibit-root");
  const { exhibit } = await import(new URL("./exhibit.js", window.location.href));
  const { prev, next } = neighbors(slug);
  const number = String(meta.number).padStart(2, "0");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // The exhibit's declared hero, overridable in dev via ?hero=type|piece to
  // design/check both modes against any exhibit regardless of its own
  // field — see the plan: "a dev-only ?hero=type query param forces this
  // mode on any exhibit."
  const forcedHero = new URLSearchParams(window.location.search).get("hero");
  const heroMode = forcedHero === "type" || forcedHero === "piece" ? forcedHero : exhibit.hero || "piece";

  const heroLineHtml = exhibit.heroLine || escapeHtml(meta.oneLiner);

  // Scenes are built as a list so numbering (the faint outlined numeral
  // behind each heading) stays sequential even though stakes/argument/note
  // are optional per exhibit.
  const sceneDefs = [];

  if (exhibit.stakes) {
    sceneDefs.push({
      tag: "section",
      cls: "exhibit-stakes",
      wrap: "u-measure",
      heading: "What's at Stake",
      html: `<div class="exhibit-stakes__body">${exhibit.stakes}</div>`,
    });
  }

  // In type-hero mode, a piece doesn't vanish — it gets its own scene,
  // right after The Case, so the typography still owns the opening.
  const caseScene = {
    tag: "section",
    cls: "exhibit-case",
    wrap: "u-measure",
    heading: "The Case",
    html: `<div class="exhibit-case__body">${exhibit.case}</div>`,
  };
  sceneDefs.push(caseScene);

  if (heroMode === "type") {
    sceneDefs.push({
      tag: "section",
      cls: "exhibit-piece-scene",
      wrap: null,
      heading: null,
      ariaLabel: "Interactive piece",
      html: `
        <div class="stage" id="piece-stage"></div>
        ${exhibit.pieceHint ? `<p class="exhibit-piece__hint">${exhibit.pieceHint}</p>` : ""}
      `,
    });
  }

  if (exhibit.argument) {
    sceneDefs.push({
      tag: "section",
      cls: "exhibit-argument",
      wrap: "u-measure",
      heading: "The Argument",
      sticky: true,
      html: `
        <ol class="exhibit-argument__steps">
          ${exhibit.argument.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        <p class="exhibit-argument__conclusion">${exhibit.argument.conclusion}</p>
      `,
    });
  }

  sceneDefs.push({
    tag: "section",
    cls: "exhibit-tension",
    wrap: "u-container",
    heading: "The Tension",
    html: `
      <div class="exhibit-tension__grid">
        ${exhibit.tension
          .map(
            (t) => `<div class="tension-path" tabindex="0">
              ${t.targets ? `<span class="tension-path__targets">${t.targets}</span>` : ""}
              <h3>${t.label}</h3>
              <p>${t.text}</p>
              ${
                t.reply
                  ? `<p class="tension-path__reply"><span class="tension-path__reply-label">Reply:</span> ${t.reply}</p>`
                  : ""
              }
            </div>`
          )
          .join("")}
      </div>
    `,
  });

  if (exhibit.note) {
    sceneDefs.push({
      tag: "aside",
      cls: "exhibit-note",
      wrap: "u-measure",
      heading: null,
      html: exhibit.note,
    });
  }

  sceneDefs.push({
    tag: "section",
    cls: "exhibit-reading",
    wrap: "u-measure",
    heading: "Further Reading",
    html: `
      <ul class="exhibit-reading__list">
        <li>
          <a href="${book.url}" target="_blank" rel="noopener">${book.title}</a>
          by ${book.authors} (${book.publisher}, ${book.year}) — the case this exhibit retells.
        </li>
        ${(exhibit.furtherReading || [])
          .map(
            (r) =>
              `<li><a href="${r.url}" target="_blank" rel="noopener">${r.label}</a>${
                r.note ? ` — ${r.note}` : ""
              }</li>`
          )
          .join("")}
      </ul>
    `,
  });

  let num = 0;
  const scenesHtml = sceneDefs
    .map((s) => {
      const showNum = s.heading ? String(++num).padStart(2, "0") : null;
      const heading = s.heading ? `<h2 class="scene__heading" data-num="${showNum}">${s.heading}</h2>` : "";
      const inner = s.sticky
        ? `<div class="exhibit-argument__inner"><div class="${s.wrap}">${heading}${s.html}</div></div>`
        : s.wrap
        ? `<div class="${s.wrap}">${heading}${s.html}</div>`
        : `${heading}${s.html}`;
      const label = s.ariaLabel ? ` aria-label="${s.ariaLabel}"` : "";
      return `<${s.tag} class="scene ${s.cls}" data-reveal${label}>${inner}</${s.tag}>`;
    })
    .join("");

  root.innerHTML = `
    <article class="exhibit">
      <section class="exhibit-hero" data-hero-mode="${heroMode}">
        <div class="exhibit-hero__frame">
          <div class="exhibit-hero__text">
            <p class="u-eyebrow exhibit-hero__eyebrow">Exhibit ${number} · ${wing.name}</p>
            <h1 class="exhibit-title" data-title-effect="${exhibit.titleEffect || ""}">${meta.title}</h1>
            <p class="exhibit-hero__line">${heroLineHtml}</p>
            ${
              heroMode === "piece" && exhibit.pieceHint
                ? `<p class="exhibit-piece__hint exhibit-piece__hint--hero">${exhibit.pieceHint}</p>`
                : ""
            }
          </div>
          ${heroMode === "piece" ? `<div class="exhibit-hero__piece"><div class="stage" id="piece-stage"></div></div>` : ""}
        </div>
        <div class="exhibit-hero__scrollcue" aria-hidden="true"><span></span>Scroll</div>
      </section>

      ${scenesHtml}

      <section class="exhibit-outro">
        <div class="u-container exhibit-outro__inner">
          ${
            prev
              ? `<a class="exhibit-outro__prev" href="${href(`wings/${prev.wing}/exhibits/${prev.slug}/`)}">← ${prev.title}</a>`
              : ""
          }
          <a class="exhibit-outro__wing" href="${href(`wings/${wing.slug}/`)}">All of ${wing.name}</a>
          ${
            next
              ? `<a class="exhibit-outro__next" href="${href(`wings/${next.wing}/exhibits/${next.slug}/`)}">
                  <span class="u-eyebrow">Next Exhibit</span>
                  <span class="exhibit-outro__title">${next.title} →</span>
                </a>`
              : ""
          }
        </div>
      </section>
    </article>
  `;

  const titleEl = root.querySelector(".exhibit-title");
  let stopTitle = () => {};
  if (titleEl) {
    stopTitle = mountTitle(titleEl, {
      effect: exhibit.titleEffect,
      candlelight: heroMode === "type",
      surface: heroMode === "type" ? root.querySelector(".exhibit-hero") : titleEl,
    });
  }
  window.addEventListener("pagehide", () => stopTitle(), { once: true });

  initSceneEffects(root, prefersReducedMotion);
  mountPiece(slug);
}

/**
 * Wires up the scroll-staged reveal (fade-up-and-sharpen on arrival) and
 * The Argument's center-focus step staging. Both collapse to "everything
 * already visible/active" under prefers-reduced-motion, since there's
 * nothing here that's load-bearing for reading the page.
 */
function initSceneEffects(root, prefersReducedMotion) {
  const reveals = root.querySelectorAll("[data-reveal]");
  const steps = root.querySelectorAll(".exhibit-argument__steps li");

  if (prefersReducedMotion) {
    reveals.forEach((el) => el.classList.add("is-in"));
    steps.forEach((li) => li.classList.add("is-active"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  if (steps.length) {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    steps.forEach((li) => stepObserver.observe(li));
  }
}

async function mountPiece(exhibitSlug) {
  const stage = document.getElementById("piece-stage");
  if (!stage) return; // type-hero exhibits with no piece scene at all
  try {
    const artModule = await import(new URL("./art.js", window.location.href));
    const rect = stage.getBoundingClientRect();
    const ctx = {
      palette: readPalette(document.body),
      prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      width: rect.width,
      height: rect.height,
      // art.js files live at varying folder depths (wings/<wing>/exhibits/<slug>/),
      // so they never import art-kit modules themselves — they take them from
      // here, where the path from this file is always fixed and correct.
      kit: { createStage, readPalette, createReveal, loadP5 },
    };
    // mount() may return the unmount function directly, or a Promise of one
    // (pieces that lazy-load an engine like p5 via ctx.kit.loadP5 need to
    // await that first).
    const mounted = artModule.mount(stage, ctx);
    const result = mounted instanceof Promise ? await mounted : mounted;
    const cleanup = typeof result === "function" ? result : artModule.unmount;
    if (cleanup) {
      window.addEventListener("pagehide", () => cleanup(), { once: true });
    }
  } catch (err) {
    console.error(`Failed to mount the piece for "${exhibitSlug}":`, err);
    stage.innerHTML = `<p class="exhibit-piece__hint" style="position:static;padding:var(--space-5)">
      The piece for this exhibit couldn't be loaded.
    </p>`;
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}
