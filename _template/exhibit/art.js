// art.js — the interactive piece for this exhibit.
//
// render-exhibit.js calls mount(container, ctx) once the page shell is in
// the DOM. ctx = { palette, prefersReducedMotion, width, height, kit }:
//   - ctx.palette: this wing's live colors (see shared/js/art-kit/palette.js)
//     — pull colors from here, never hardcode a hex value.
//   - ctx.prefersReducedMotion: true means render one still frame, no loop.
//   - ctx.kit: the shared art-kit helpers (createStage, createReveal,
//     loadP5, readPalette) — take them from ctx instead of importing
//     art-kit modules directly, since this file's own folder depth varies
//     by exhibit and relative imports would break when copied.
//
// mount() must return an unmount function that stops any animation loop
// and removes any listeners this piece added. mount() may itself be async
// (or just return a Promise) if it needs to lazy-load something first, e.g.
// `await ctx.kit.loadP5()` — render-exhibit.js awaits it either way.

export function mount(container, ctx) {
  const { createStage } = ctx.kit;
  const stage = createStage(container);
  let raf = null;

  function draw() {
    const { ctx: g, width, height } = stage;
    g.clearRect(0, 0, width, height);
    g.fillStyle = ctx.palette.bgSunken;
    g.fillRect(0, 0, width, height);

    // TODO: draw the piece here using g (a 2D canvas context) and
    // ctx.palette. This placeholder just proves the stage mounted.
    g.strokeStyle = ctx.palette.accent;
    g.lineWidth = 2;
    g.strokeRect(20, 20, width - 40, height - 40);

    if (!ctx.prefersReducedMotion) {
      raf = requestAnimationFrame(draw);
    }
  }

  draw();

  return function unmount() {
    if (raf) cancelAnimationFrame(raf);
    stage.destroy();
  };
}
