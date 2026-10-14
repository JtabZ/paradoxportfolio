// shared/js/art-kit/reveal.js
//
// The recurring "reveal on interaction" state helper. Something starts
// hidden or muted; an interaction (click, hover, keypress) reveals it,
// optionally reversibly. Mary's Room (color floods in on leaving) and
// Zombies (hover shows the emptiness inside) both build on this instead of
// each hand-rolling the same tiny state machine.

export function createReveal({ onChange, reversible = true } = {}) {
  let revealed = false;

  function set(next) {
    if (revealed === next) return;
    revealed = next;
    onChange?.(revealed);
  }

  return {
    get revealed() {
      return revealed;
    },
    reveal() {
      set(true);
    },
    hide() {
      if (reversible) set(false);
    },
    toggle() {
      set(reversible ? !revealed : true);
    },
  };
}
