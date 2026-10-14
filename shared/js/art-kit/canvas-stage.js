// shared/js/art-kit/canvas-stage.js
//
// Shared mount plumbing for raw-canvas art pieces: creates a canvas that
// fills its container, keeps it crisp at any devicePixelRatio, and keeps it
// correctly sized as the container resizes (the stage is responsive; the
// window can change size at any time). A piece's art.js should only need to
// implement what to draw, not this bookkeeping.
//
// Usage inside an art.js's mount(container, ctx):
//   const stage = createStage(container, { onResize: (w, h) => { ... } });
//   ... draw into stage.ctx using stage.width / stage.height ...
//   return () => stage.destroy();   // hand this back as your unmount

export function createStage(container, { onResize } = {}) {
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";
  // Decorative/interactive canvas, not content: the piece's textual
  // equivalent lives in The Case below it, and any real control (a toggle,
  // a button) is a separate focusable element outside this attribute's
  // reach — so hiding the canvas itself from AT loses nothing.
  canvas.setAttribute("aria-hidden", "true");
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;

  function resize(fireOnResize) {
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (fireOnResize) onResize?.(width, height);
  }

  const resizeObserver = new ResizeObserver(() => resize(true));
  resizeObserver.observe(container);
  // Size the canvas immediately so stage.width/height are correct as soon
  // as createStage() returns — but don't fire onResize for this first,
  // constructor-time sizing. A piece typically writes
  // `const stage = createStage(el, { onResize: () => draw() })`; firing
  // onResize synchronously in here would call draw() before that `const
  // stage = …` assignment finishes, throwing a "cannot access before
  // initialization" error for any draw() that reads `stage`. A piece
  // should do its own first draw right after createStage() returns,
  // reading the already-correct stage.width/height directly; onResize is
  // only for real, later container resizes.
  resize(false);

  return {
    canvas,
    ctx,
    get width() {
      return width;
    },
    get height() {
      return height;
    },
    destroy() {
      resizeObserver.disconnect();
      canvas.remove();
    },
  };
}
