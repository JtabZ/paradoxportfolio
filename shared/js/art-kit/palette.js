// shared/js/art-kit/palette.js
//
// Reads the current page's live CSS custom properties (global tokens plus
// whichever [data-wing] accent is active) so canvas art and page chrome
// always share one source of color. No art piece should hardcode a hex
// value — pull it from here instead.

export function readPalette(el = document.body) {
  const cs = getComputedStyle(el);
  const get = (name) => cs.getPropertyValue(name).trim();
  return {
    bg: get("--bg"),
    bgRaised: get("--bg-raised"),
    bgSunken: get("--bg-sunken"),
    ink: get("--ink"),
    inkDim: get("--ink-dim"),
    inkFaint: get("--ink-faint"),
    line: get("--line"),
    accent: get("--accent"),
    accentSoft: get("--accent-soft"),
    accentInk: get("--accent-ink"),
  };
}
