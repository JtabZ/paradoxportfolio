// manual/js/sidebar.js
//
// The left nav tree, rendered once from data/manifest.js — the same
// collection the cabinet's shared/js/chrome.js reads, so adding or
// reordering wings/exhibits there is all that's ever needed here too.
//
// Mirrors the cabinet's architecture (wings → exhibits) as a filterable
// file-tree: one <details> per wing, exhibits listed inside as files.

import { wings, exhibitsForWing } from "../../data/manifest.js";
import { href } from "../../shared/js/paths.js";
import { slugsWithNotes } from "./notes.js";

/**
 * @param {HTMLElement} container
 * @param {{ currentWing?: string, currentSlug?: string }} [opts]
 */
export async function renderSidebar(container, opts = {}) {
  const { currentWing, currentSlug } = opts;

  container.innerHTML = `
    <a class="manual-sidebar__brand" href="${href("manual/index.html")}">
      man paradox
      <span>Philosophy of Mind Manual</span>
    </a>
    <div class="manual-search">
      <input
        type="search"
        class="manual-search__input"
        id="manual-grep"
        placeholder="/ grep title or slug…"
        aria-label="Filter paradoxes"
      >
    </div>
    <nav class="manual-tree" id="manual-tree" aria-label="Paradoxes"></nav>
  `;

  const tree = container.querySelector("#manual-tree");
  const marked = await slugsWithNotes();

  tree.innerHTML = wings
    .map((wing, i) => {
      const roster = exhibitsForWing(wing.slug);
      const isCurrent = wing.slug === currentWing;
      const items = roster
        .map((e) => {
          const num = String(e.number).padStart(2, "0");
          const current = e.slug === currentSlug ? ' aria-current="page"' : "";
          const dot = marked.has(e.slug) ? '<span class="manual-tree__dot" title="Has notes">●</span>' : "";
          return `
            <li data-title="${escapeAttr(e.title.toLowerCase())}" data-slug="${e.slug}">
              <a href="${href(`manual/${wing.slug}/${e.slug}/`)}"${current}>
                <span class="manual-tree__num">${num}</span>
                <span>${escapeAttr(e.slug)}</span>
                ${dot}
              </a>
            </li>`;
        })
        .join("");

      return `
        <details ${isCurrent ? "open" : ""} data-wing="${wing.slug}">
          <summary>
            <span class="manual-tree__part">${i + 1}.</span> ${wing.slug}/
          </summary>
          <ul class="manual-tree__entries">${items}</ul>
        </details>`;
    })
    .join("");

  const grep = container.querySelector("#manual-grep");
  grep.addEventListener("input", () => {
    const q = grep.value.trim().toLowerCase();
    if (!q) {
      tree.dataset.filtering = "false";
      tree.querySelectorAll("li").forEach((li) => (li.style.display = ""));
      tree.querySelectorAll("details").forEach((d) => d.removeAttribute("data-match"));
      return;
    }
    tree.dataset.filtering = "true";
    tree.querySelectorAll("details").forEach((details) => {
      let anyMatch = false;
      details.querySelectorAll("li").forEach((li) => {
        const hit = li.dataset.title.includes(q) || li.dataset.slug.includes(q);
        li.style.display = hit ? "" : "none";
        if (hit) anyMatch = true;
      });
      if (anyMatch) {
        details.setAttribute("data-match", "true");
        details.open = true;
      } else {
        details.removeAttribute("data-match");
      }
    });
  });

  // Press "/" anywhere on the page to jump into the filter box, like a
  // man-page/pager search — unless focus is already in a text field.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "/" || isTyping(e.target)) return;
    e.preventDefault();
    grep.focus();
  });
}

function isTyping(el) {
  return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

// ---- mobile toggle --------------------------------------------------------

export function wireMobileToggle(shell, toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const open = shell.dataset.sidebarOpen === "true";
    shell.dataset.sidebarOpen = open ? "false" : "true";
    toggleBtn.setAttribute("aria-expanded", String(!open));
  });

  shell.addEventListener("click", (e) => {
    if (shell.dataset.sidebarOpen === "true" && e.target === shell) {
      shell.dataset.sidebarOpen = "false";
    }
  });
}
