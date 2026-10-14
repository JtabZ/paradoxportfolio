// shared/js/render-wing.js
//
// One script, reused by all 5 wings/<slug>/index.html pages. Which wing to
// render comes from the <body data-wing="…"> attribute set in that page's
// otherwise-identical shell — everything else (roster, built vs. coming-soon
// cards, breadcrumb) is looked up from data/manifest.js.

import { wingBySlug, exhibitsForWing, siteName } from "../../data/manifest.js";
import { renderHeader, renderFooter } from "./chrome.js";
import { href } from "./paths.js";

const wingSlug = document.body.dataset.wing;
const wing = wingBySlug(wingSlug);

renderFooter(document.getElementById("site-footer"));

if (!wing) {
  renderHeader(document.getElementById("site-header"));
  document.getElementById("main").innerHTML =
    `<div class="u-container"><p>That wing doesn't exist yet.</p></div>`;
} else {
  document.title = `${wing.name} — ${siteName}`;

  renderHeader(document.getElementById("site-header"), {
    breadcrumbs: [
      { label: siteName, href: href("index.html") },
      { label: wing.name },
    ],
    currentWing: wing.slug,
  });

  document.getElementById("wing-part").textContent = wing.part;
  document.getElementById("wing-name").textContent = wing.name;
  document.getElementById("wing-blurb").textContent = wing.blurb;

  const roster = exhibitsForWing(wing.slug);

  document.getElementById("exhibit-grid").innerHTML = roster
    .map((exhibit) => {
      const number = String(exhibit.number).padStart(2, "0");
      if (exhibit.status === "built") {
        return `
          <a class="exhibit-card" data-wing="${wing.slug}" href="${href(
            `wings/${wing.slug}/exhibits/${exhibit.slug}/`
          )}">
            <span class="exhibit-card__number">${number}</span>
            <h3 class="exhibit-card__title">${exhibit.title}</h3>
            <p class="exhibit-card__oneliner">${exhibit.oneLiner}</p>
            <span class="badge badge--built">Open</span>
          </a>`;
      }
      return `
        <div class="exhibit-card exhibit-card--coming-soon" aria-disabled="true">
          <span class="exhibit-card__number">${number}</span>
          <h3 class="exhibit-card__title">${exhibit.title}</h3>
          <p class="exhibit-card__oneliner">${exhibit.oneLiner}</p>
          <span class="badge">Coming soon</span>
        </div>`;
    })
    .join("");
}
