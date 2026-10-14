// art.js — Mary and the Black-and-White Room
//
// The piece: a small still-life sits in the room. It starts desaturated —
// Mary's entire visual world before she leaves. A button lets you step
// outside; color floods in over the same objects. Stepping back "into the
// room" drains it again. Nothing about the scene's shapes ever changes —
// only whether it's in color, which is the whole point of the exhibit.

export function mount(container, ctx) {
  const { createStage, createReveal } = ctx.kit;

  // Fractional positions (0–1) so the scene scales with the stage.
  const items = [
    { x: 0.26, y: 0.66, r: 0.1, hue: 4, shape: "circle" }, // an apple
    { x: 0.52, y: 0.58, w: 0.16, h: 0.24, hue: 214, shape: "rect" }, // a book
    { x: 0.76, y: 0.7, r: 0.12, hue: 132, shape: "circle" }, // a plant
    { x: 0.52, y: 0.22, r: 0.22, hue: 46, shape: "glow" }, // lamplight
  ];

  let sat = 0; // 0 = grayscale, 1 = full color — the only thing that animates
  let satTarget = 0;
  let raf = null;

  const stage = createStage(container, { onResize: () => draw() });

  const button = document.createElement("button");
  button.type = "button";
  button.className = "marys-room-toggle";
  button.textContent = "Leave the room";
  button.setAttribute("aria-pressed", "false");
  container.appendChild(button);

  const reveal = createReveal({
    onChange(revealed) {
      button.textContent = revealed ? "Return to the room" : "Leave the room";
      button.setAttribute("aria-pressed", String(revealed));
      animateTo(revealed ? 1 : 0);
    },
  });

  function onToggle() {
    reveal.toggle();
  }
  button.addEventListener("click", onToggle);

  function tone(hue, alpha) {
    const s = 68 * sat;
    return `hsla(${hue}, ${s}%, 54%, ${alpha ?? 1})`;
  }

  function draw() {
    const { ctx: g, width, height } = stage;
    if (!width || !height) return;

    g.clearRect(0, 0, width, height);
    g.fillStyle = `hsl(32, ${sat * 12}%, ${8 + sat * 3}%)`;
    g.fillRect(0, 0, width, height);

    const unit = Math.min(width, height);
    for (const item of items) {
      if (item.shape === "circle") {
        g.beginPath();
        g.fillStyle = tone(item.hue);
        g.arc(item.x * width, item.y * height, item.r * unit, 0, Math.PI * 2);
        g.fill();
      } else if (item.shape === "rect") {
        g.fillStyle = tone(item.hue);
        g.fillRect(
          (item.x - item.w / 2) * width,
          (item.y - item.h / 2) * height,
          item.w * width,
          item.h * height
        );
      } else if (item.shape === "glow") {
        const cx = item.x * width;
        const cy = item.y * height;
        const r = item.r * unit;
        const grad = g.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, tone(item.hue, 0.85));
        grad.addColorStop(1, tone(item.hue, 0));
        g.fillStyle = grad;
        g.beginPath();
        g.arc(cx, cy, r, 0, Math.PI * 2);
        g.fill();
      }
    }
  }

  function animateTo(target) {
    satTarget = target;
    cancelAnimationFrame(raf);

    if (ctx.prefersReducedMotion) {
      sat = target;
      draw();
      return;
    }

    function tick() {
      sat += (satTarget - sat) * 0.12;
      draw();
      if (Math.abs(satTarget - sat) > 0.003) {
        raf = requestAnimationFrame(tick);
      } else {
        sat = satTarget;
        draw();
      }
    }
    raf = requestAnimationFrame(tick);
  }

  draw(); // initial grayscale frame

  return function unmount() {
    cancelAnimationFrame(raf);
    button.removeEventListener("click", onToggle);
    button.remove();
    stage.destroy();
  };
}
