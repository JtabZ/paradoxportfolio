// shared/js/type-effects.js
//
// A small, dependency-free library of dramatic text treatments for exhibit
// titles — the typographic counterpart to art-kit/. render-exhibit.js wires
// this up once per page; an exhibit opts into a themed effect by name via
// its exhibit.js (`titleEffect`), the same way a piece opts into an engine.
//
// Every effect degrades to fully-visible, static type under
// prefers-reduced-motion — nothing here is load-bearing for reading the
// page, only for how arriving at it feels.

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Replaces `el`'s text content with a per-character split for animation.
 * The real text stays readable to assistive tech via a visually-hidden
 * duplicate; the split characters are aria-hidden. Words never break
 * mid-word — each word is its own inline-block span, characters inside it.
 *
 * Returns the wrapper span containing the split characters (not `el`
 * itself), since that's what the other functions here animate.
 */
export function splitText(el) {
  const text = el.textContent.trim();
  el.textContent = "";

  const srOnly = document.createElement("span");
  srOnly.className = "sr-only";
  srOnly.textContent = text;
  el.appendChild(srOnly);

  const split = document.createElement("span");
  split.className = "split-text";
  split.setAttribute("aria-hidden", "true");

  const words = text.split(" ");
  let i = 0;
  words.forEach((word, wi) => {
    // A compound word like "Black-and-White" still has to wrap on a narrow
    // screen, but .split-text__word is nowrap (so single words never break
    // mid-letter). Split it further on hyphens, keeping each hyphen glued
    // to the chunk before it, so every chunk is its own unbreakable span
    // with a normal line-break opportunity between them.
    const chunks = word.split(/(?<=-)/);
    chunks.forEach((chunk) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "split-text__word";
      for (const ch of chunk) {
        const charSpan = document.createElement("span");
        charSpan.className = "split-text__char";
        charSpan.style.setProperty("--i", String(i++));
        charSpan.textContent = ch;
        wordSpan.appendChild(charSpan);
      }
      split.appendChild(wordSpan);
    });
    if (wi < words.length - 1) split.appendChild(document.createTextNode(" "));
  });

  el.appendChild(split);
  return split;
}

/**
 * Pointer-follow "candlelight": a warm light that drifts over the title,
 * brightening nearby letters and giving them a touch more weight via the
 * variable font's wght axis. `surface` is the element whose hover/pointer
 * events count as "the light is here" — pass something bigger than the
 * title itself (e.g. the whole hero) for a more forgiving hit area.
 *
 * No-ops under reduced motion. On devices with no real pointer (touch),
 * the light drifts on its own instead of chasing a cursor that can't hover.
 *
 * Returns a cleanup function.
 */
export function enableCandlelight(titleEl, splitEl, { surface = titleEl } = {}) {
  if (prefersReducedMotion()) return () => {};

  const chars = [...splitEl.querySelectorAll(".split-text__char")];
  let raf = null;

  function update(x, y) {
    const titleRect = titleEl.getBoundingClientRect();
    if (titleRect.width === 0) return;
    splitEl.style.setProperty("--mx", `${((x - titleRect.left) / titleRect.width) * 100}%`);
    splitEl.style.setProperty("--my", `${((y - titleRect.top) / titleRect.height) * 100}%`);

    const maxDist = Math.max(titleRect.width, 320) * 0.22;
    for (const ch of chars) {
      const r = ch.getBoundingClientRect();
      const dist = Math.hypot(r.left + r.width / 2 - x, r.top + r.height / 2 - y);
      ch.style.setProperty("--swell", Math.max(0, 1 - dist / maxDist).toFixed(3));
    }
  }

  function onMove(e) {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      update(e.clientX, e.clientY);
      raf = null;
    });
  }
  function onEnter() {
    splitEl.classList.add("split-text--lit");
  }
  function onLeave() {
    splitEl.classList.remove("split-text--lit");
  }

  const canHover = window.matchMedia("(hover: hover)").matches;

  if (!canHover) {
    // No real pointer to chase — the candle drifts on its own instead.
    splitEl.classList.add("split-text--lit");
    let t = 0;
    let driftRaf = requestAnimationFrame(function drift() {
      t += 0.006;
      const rect = titleEl.getBoundingClientRect();
      update(
        rect.left + rect.width * (0.5 + 0.42 * Math.sin(t)),
        rect.top + rect.height * (0.5 + 0.42 * Math.sin(t * 1.7))
      );
      driftRaf = requestAnimationFrame(drift);
    });
    return () => cancelAnimationFrame(driftRaf);
  }

  surface.addEventListener("pointermove", onMove);
  surface.addEventListener("pointerenter", onEnter);
  surface.addEventListener("pointerleave", onLeave);

  return () => {
    if (raf) cancelAnimationFrame(raf);
    surface.removeEventListener("pointermove", onMove);
    surface.removeEventListener("pointerenter", onEnter);
    surface.removeEventListener("pointerleave", onLeave);
  };
}

/**
 * Applies a named thematic treatment on top of the base split-text effects.
 * Each one adds a class (styled in type-effects.css) and, for the two that
 * need extra layers (echo, hollow), clones the split text to sit behind or
 * beside the original. Unknown/omitted names are a no-op — an exhibit
 * without a `titleEffect` just gets the default entrance + candlelight.
 */
export function initTitleEffect(titleEl, splitEl, effectName) {
  if (!effectName) return;
  splitEl.classList.add(`split-text--${effectName}`);

  if (effectName === "echo" && !prefersReducedMotion()) {
    for (let ring = 1; ring <= 2; ring++) {
      const clone = splitEl.cloneNode(true);
      clone.classList.add("split-text__echo");
      clone.style.setProperty("--ring", String(ring));
      clone.setAttribute("aria-hidden", "true");
      titleEl.appendChild(clone);
    }
  }

  if (effectName === "hollow") {
    const twin = splitEl.cloneNode(true);
    twin.classList.add("split-text__twin");
    twin.setAttribute("aria-hidden", "true");
    titleEl.appendChild(twin);
  }
}

/**
 * The convenience entry point render-exhibit.js actually calls: splits the
 * title, wires up its thematic effect (if any), and starts candlelight
 * (if requested). Returns a single cleanup function.
 */
export function mountTitle(titleEl, { effect, candlelight = false, surface } = {}) {
  const split = splitText(titleEl);
  initTitleEffect(titleEl, split, effect);
  const stopCandlelight = candlelight
    ? enableCandlelight(titleEl, split, { surface: surface || titleEl })
    : () => {};
  return function unmountTitle() {
    stopCandlelight();
  };
}
