// shared/js/render-home.js
// Renders the homepage's wing map from data/manifest.js. Adding, renaming,
// or reordering wings never requires touching index.html.

import { wings, exhibitsForWing, siteName } from "../../data/manifest.js";
import { renderHeader, renderFooter } from "./chrome.js";
import { href } from "./paths.js";

document.title = `${siteName} — a museum of the mind`;

renderHeader(document.getElementById("site-header"));
renderFooter(document.getElementById("site-footer"));

const grid = document.getElementById("wing-grid");

grid.innerHTML = wings
  .map((wing) => {
    const roster = exhibitsForWing(wing.slug);
    const built = roster.filter((e) => e.status === "built").length;
    return `
      <a class="wing-card" data-wing="${wing.slug}" href="${href(`wings/${wing.slug}/`)}">
        <span class="wing-card__part">${wing.part}</span>
        <h3 class="wing-card__name">${wing.name}</h3>
        <p class="wing-card__blurb">${wing.blurb}</p>
        <span class="wing-card__status">${built} of ${roster.length} exhibits open</span>
      </a>`;
  })
  .join("");
