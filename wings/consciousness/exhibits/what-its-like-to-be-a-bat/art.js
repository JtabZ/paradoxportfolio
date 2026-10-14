// art.js — What It's Like to Be a Bat
//
// The piece: total dark. Click (or press "Send a pulse") and a ring of sound
// expands outward from that point; only the shapes it sweeps past light up,
// and only for as long as the ring is near them. You're given exactly the
// bat's tool — echo timing — and nothing else. You can locate the moths and
// walls this way. What you can't get, no matter how many pulses you send, is
// what any of it is like for the bat doing the same thing by nature.
//
// This is the p5 path: it lazy-loads p5 via ctx.kit.loadP5() before doing
// anything else, so mount() is async and render-exhibit.js awaits it.

export async function mount(container, ctx) {
  const p5 = await ctx.kit.loadP5();

  // Hidden shapes at fractional stage positions (0–1), revealed only while
  // a pulse's expanding ring is passing near them.
  const shapes = [
    { x: 0.22, y: 0.32, r: 0.045, kind: "moth" },
    { x: 0.7, y: 0.24, r: 0.04, kind: "moth" },
    { x: 0.42, y: 0.64, r: 0.09, kind: "wall" },
    { x: 0.84, y: 0.68, r: 0.05, kind: "moth" },
    { x: 0.14, y: 0.74, r: 0.11, kind: "wall" },
  ];

  let pulses = [];
  let instance = null;
  let staticClearTimer = null;

  function triggerPulse(x, y) {
    if (ctx.prefersReducedMotion) {
      // No continuously expanding ring — one flash reveals everything at
      // once, held briefly, then cleared. Still an event, just not a loop.
      pulses = [{ x, y, r: Infinity, alpha: 1, static: true }];
      instance?.redraw();
      clearTimeout(staticClearTimer);
      staticClearTimer = setTimeout(() => {
        pulses = [];
        instance?.redraw();
      }, 700);
      return;
    }
    pulses.push({ x, y, r: 0, alpha: 1 });
  }

  function sketch(p) {
    let w = 1;
    let h = 1;

    function measure() {
      const rect = container.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
    }

    p.setup = () => {
      measure();
      p.pixelDensity(window.devicePixelRatio || 1);
      const canvas = p.createCanvas(w, h);
      canvas.elt.style.display = "block";
      // Decorative: the "Send a pulse" button is the real, focusable
      // control, and the argument itself lives in The Case below.
      canvas.elt.setAttribute("aria-hidden", "true");
      p.noStroke();
      if (ctx.prefersReducedMotion) p.noLoop();
    };

    p.windowResized = () => {
      measure();
      p.resizeCanvas(w, h);
      if (ctx.prefersReducedMotion) p.redraw();
    };

    p.mousePressed = () => {
      if (p.mouseX >= 0 && p.mouseX <= w && p.mouseY >= 0 && p.mouseY <= h) {
        triggerPulse(p.mouseX, p.mouseY);
      }
    };

    p.draw = () => {
      p.background(p.color(ctx.palette.bgSunken));

      const unit = Math.min(w, h);
      const ringWidth = unit * 0.08;

      if (!ctx.prefersReducedMotion) {
        for (const pulse of pulses) {
          pulse.r += unit * 0.012;
          pulse.alpha = Math.max(0, 1 - pulse.r / (unit * 0.9));
        }
        pulses = pulses.filter((pulse) => pulse.alpha > 0.01);
      }

      const inkColor = p.color(ctx.palette.ink);
      for (const shape of shapes) {
        const sx = shape.x * w;
        const sy = shape.y * h;
        const sr = shape.r * unit;

        let reveal = 0;
        for (const pulse of pulses) {
          if (pulse.static) {
            reveal = Math.max(reveal, pulse.alpha);
            continue;
          }
          const d = p.dist(sx, sy, pulse.x, pulse.y);
          const closeness = Math.max(0, 1 - Math.min(1, Math.abs(d - pulse.r) / ringWidth));
          reveal = Math.max(reveal, closeness * pulse.alpha);
        }
        if (reveal <= 0.02) continue;

        inkColor.setAlpha(reveal * 255);
        p.fill(inkColor);
        p.noStroke();
        if (shape.kind === "moth") {
          p.circle(sx, sy, sr * 2);
        } else {
          p.rectMode(p.CENTER);
          p.rect(sx, sy, sr * 1.8, sr * 1.8, sr * 0.2);
        }
      }

      p.noFill();
      const ringColor = p.color(ctx.palette.accent);
      for (const pulse of pulses) {
        if (pulse.static) continue;
        ringColor.setAlpha(pulse.alpha * 255);
        p.stroke(ringColor);
        p.strokeWeight(2);
        p.circle(pulse.x, pulse.y, pulse.r * 2);
      }
      p.noStroke();
    };
  }

  instance = new p5(sketch, container);

  // p5's own windowResized only fires on window resize; the stage can also
  // change size from responsive layout shifts with the window untouched.
  const resizeObserver = new ResizeObserver(() => instance.windowResized());
  resizeObserver.observe(container);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "bat-pulse-button";
  button.textContent = "Send a pulse";
  const onClick = () => triggerPulse(instance.width / 2, instance.height / 2);
  button.addEventListener("click", onClick);
  container.appendChild(button);

  return function unmount() {
    clearTimeout(staticClearTimer);
    resizeObserver.disconnect();
    button.removeEventListener("click", onClick);
    button.remove();
    instance.remove();
  };
}
