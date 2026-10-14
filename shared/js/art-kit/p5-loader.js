// shared/js/art-kit/p5-loader.js
//
// Lazily injects the local, pinned p5.js build (shared/vendor/p5.min.js) —
// only exhibits that actually declare an engine: "p5" piece pay the ~1MB
// cost; every raw-canvas piece never loads it at all.

let p5Promise = null;

export function loadP5() {
  if (window.p5) return Promise.resolve(window.p5);
  if (p5Promise) return p5Promise;

  p5Promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = new URL("../../vendor/p5.min.js", import.meta.url).href;
    script.onload = () => resolve(window.p5);
    script.onerror = () => reject(new Error("Failed to load p5.js"));
    document.head.appendChild(script);
  });

  return p5Promise;
}
