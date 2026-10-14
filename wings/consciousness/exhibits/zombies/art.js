// art.js — Zombies
//
// The piece: two silhouettes, drawn identically, breathing in the same
// quiet rhythm — from the outside there is nothing to tell them apart.
// Move the cursor across one and the piece lets you cheat: it opens a
// window straight into the chest. One figure holds a small pulsing glow.
// The other holds a flat dash — the same shape, doing the same things,
// with nothing lit inside it. The outsides never change. Only what you're
// allowed to see does.

export function mount(container, ctx) {
  const { createStage, createReveal } = ctx.kit;
  const stage = createStage(container, { onResize: () => draw() });

  const figures = [
    { key: "left", cx: 0.32, empty: true },
    { key: "right", cx: 0.68, empty: false },
  ];

  const reveals = {
    left: createReveal({ onChange: () => draw() }),
    right: createReveal({ onChange: () => draw() }),
  };

  let raf = null;
  let t = 0; // time accumulator for idle breathing + the glow's pulse

  function regionFor(x, width) {
    const half = width * 0.18;
    for (const figure of figures) {
      if (Math.abs(x - figure.cx * width) < half) return figure.key;
    }
    return null;
  }

  function onPointerMove(e) {
    const rect = stage.canvas.getBoundingClientRect();
    const region = regionFor(e.clientX - rect.left, stage.width);
    reveals.left[region === "left" ? "reveal" : "hide"]();
    reveals.right[region === "right" ? "reveal" : "hide"]();
  }

  function onPointerLeave() {
    reveals.left.hide();
    reveals.right.hide();
  }

  stage.canvas.addEventListener("pointermove", onPointerMove);
  stage.canvas.addEventListener("pointerleave", onPointerLeave);

  // Keyboard-accessible equivalent of hovering each figure.
  const buttonBar = document.createElement("div");
  buttonBar.className = "zombies-buttons";
  const buttonLabels = [
    ["left", "Look inside the left figure"],
    ["right", "Look inside the right figure"],
  ];
  for (const [key, text] of buttonLabels) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "zombies-look-button";
    button.textContent = text;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      reveals[key].toggle();
      button.setAttribute("aria-pressed", String(reveals[key].revealed));
    });
    buttonBar.appendChild(button);
  }
  container.appendChild(buttonBar);

  function roundRect(g, x, y, w, h, r) {
    g.beginPath();
    g.moveTo(x + r, y);
    g.arcTo(x + w, y, x + w, y + h, r);
    g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r);
    g.arcTo(x, y, x + w, y, r);
    g.closePath();
  }

  function drawFigure(g, figure, width, height, revealed, breathe) {
    const cx = figure.cx * width;
    const unit = Math.min(width, height);
    const headR = unit * 0.07 * breathe;
    const bodyW = unit * 0.16 * breathe;
    const bodyH = unit * 0.32 * breathe;
    const headCy = height * 0.4;
    const bodyTop = headCy + headR * 1.1;

    g.lineWidth = 2;
    g.strokeStyle = ctx.palette.ink;
    g.fillStyle = ctx.palette.bgRaised;

    g.beginPath();
    g.arc(cx, headCy, headR, 0, Math.PI * 2);
    g.fill();
    g.stroke();

    roundRect(g, cx - bodyW / 2, bodyTop, bodyW, bodyH, bodyW * 0.3);
    g.fill();
    g.stroke();

    if (!revealed) return;

    const chestCx = cx;
    const chestCy = bodyTop + bodyH * 0.38;

    if (figure.empty) {
      g.strokeStyle = ctx.palette.inkFaint;
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(chestCx - bodyW * 0.22, chestCy);
      g.lineTo(chestCx + bodyW * 0.22, chestCy);
      g.stroke();
    } else {
      const pulse = ctx.prefersReducedMotion ? 0.85 : 0.6 + 0.4 * Math.sin(t * 2.4);
      const glowR = unit * 0.09 * pulse;
      const grad = g.createRadialGradient(chestCx, chestCy, 0, chestCx, chestCy, glowR);
      grad.addColorStop(0, ctx.palette.accent);
      grad.addColorStop(1, "transparent");
      g.fillStyle = grad;
      g.beginPath();
      g.arc(chestCx, chestCy, glowR, 0, Math.PI * 2);
      g.fill();
    }
  }

  function draw() {
    const { ctx: g, width, height } = stage;
    if (!width || !height) return;

    g.clearRect(0, 0, width, height);
    g.fillStyle = ctx.palette.bgSunken;
    g.fillRect(0, 0, width, height);

    const breathe = ctx.prefersReducedMotion ? 1 : 1 + 0.02 * Math.sin(t * 1.1);
    for (const figure of figures) {
      drawFigure(g, figure, width, height, reveals[figure.key].revealed, breathe);
    }
  }

  function tick() {
    t += 0.02;
    draw();
    if (!ctx.prefersReducedMotion) raf = requestAnimationFrame(tick);
  }

  if (ctx.prefersReducedMotion) {
    draw();
  } else {
    raf = requestAnimationFrame(tick);
  }

  return function unmount() {
    if (raf) cancelAnimationFrame(raf);
    stage.canvas.removeEventListener("pointermove", onPointerMove);
    stage.canvas.removeEventListener("pointerleave", onPointerLeave);
    buttonBar.remove();
    stage.destroy();
  };
}
