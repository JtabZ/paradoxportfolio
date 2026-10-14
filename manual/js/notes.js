// manual/js/notes.js
//
// The notebook: lets the visitor attach their own thoughts, research,
// questions, and objections to any paradox. Two tiers, merged by note id:
//
//   - "local" notes live in localStorage (key below) — private, instant,
//     per-browser.
//   - "published" notes come from notes/notes.json, fetched read-only —
//     visible to anyone who loads the site, because they're committed to
//     the repo.
//
// The publish workflow is manual, on purpose (this is a static site with
// no backend): write notes locally, hit Export on the home page to
// download a merged notes.json, then replace manual/notes/notes.json with
// it and commit. See manual/README.md.

import { href } from "../../shared/js/paths.js";
import { escapeHtml, renderNoteBody, formatTimestamp } from "./format.js";

const STORAGE_KEY = "paradox-manual:notes:v1";
const TYPES = ["thought", "research", "question", "objection"];
const TYPE_LABEL = {
  thought: "Thought",
  research: "Research",
  question: "Question",
  objection: "Objection",
};

let publishedCache = null; // {slug: [note, ...]} | null until first fetch

// ---- storage -----------------------------------------------------------

function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveLocal(bySlug) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bySlug));
}

async function loadPublished() {
  if (publishedCache) return publishedCache;
  try {
    const res = await fetch(href("manual/notes/notes.json"), { cache: "no-cache" });
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    publishedCache = (json && json.notes) || {};
  } catch {
    publishedCache = {};
  }
  return publishedCache;
}

function makeId() {
  return `n_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// ---- public data API -----------------------------------------------------

export async function getNotesForSlug(slug) {
  const local = loadLocal()[slug] || [];
  const published = (await loadPublished())[slug] || [];
  const byId = new Map();
  for (const n of published) byId.set(n.id, { ...n, source: "published" });
  for (const n of local) {
    // A local note that was later published shows as published (read-only);
    // otherwise it's a draft the visitor can still edit.
    if (!byId.has(n.id)) byId.set(n.id, { ...n, source: "draft" });
  }
  return [...byId.values()].sort((a, b) => new Date(b.created) - new Date(a.created));
}

export async function hasAnyNotes(slug) {
  const notes = await getNotesForSlug(slug);
  return notes.length > 0;
}

// Which slugs (across the whole collection) have at least one note —
// used by the sidebar to show a marker. One fetch of notes.json, plus a
// read of localStorage.
export async function slugsWithNotes() {
  const local = loadLocal();
  const published = await loadPublished();
  return new Set([...Object.keys(local), ...Object.keys(published)]);
}

export function addNote(slug, { type, body, url }) {
  const all = loadLocal();
  const list = all[slug] || [];
  const now = new Date().toISOString();
  const note = {
    id: makeId(),
    type: TYPES.includes(type) ? type : "thought",
    body: String(body || "").trim(),
    url: url ? String(url).trim() : "",
    created: now,
    updated: now,
  };
  list.push(note);
  all[slug] = list;
  saveLocal(all);
  return note;
}

export function updateNote(slug, id, { body, url, type }) {
  const all = loadLocal();
  const list = all[slug] || [];
  const i = list.findIndex((n) => n.id === id);
  if (i === -1) return null;
  list[i] = {
    ...list[i],
    body: body !== undefined ? String(body).trim() : list[i].body,
    url: url !== undefined ? String(url).trim() : list[i].url,
    type: type && TYPES.includes(type) ? type : list[i].type,
    updated: new Date().toISOString(),
  };
  all[slug] = list;
  saveLocal(all);
  return list[i];
}

export function deleteNote(slug, id) {
  const all = loadLocal();
  const list = all[slug] || [];
  all[slug] = list.filter((n) => n.id !== id);
  saveLocal(all);
}

// ---- export / import ------------------------------------------------------

export async function buildExportPayload() {
  const local = loadLocal();
  const published = await loadPublished();
  const merged = {};
  const slugs = new Set([...Object.keys(local), ...Object.keys(published)]);
  for (const slug of slugs) {
    const byId = new Map();
    for (const n of published[slug] || []) byId.set(n.id, n);
    for (const n of local[slug] || []) byId.set(n.id, n);
    merged[slug] = [...byId.values()].sort((a, b) => new Date(a.created) - new Date(b.created));
  }
  return { version: 1, notes: merged };
}

export async function exportNotesFile() {
  const payload = await buildExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "notes.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function importNotesFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        const incoming = (json && json.notes) || {};
        const all = loadLocal();
        for (const [slug, notes] of Object.entries(incoming)) {
          const byId = new Map((all[slug] || []).map((n) => [n.id, n]));
          for (const n of notes) byId.set(n.id, n);
          all[slug] = [...byId.values()];
        }
        saveLocal(all);
        resolve();
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

// ---- rendering: per-entry notebook section --------------------------------

export async function renderNotebook(container, slug) {
  container.innerHTML = `
    <h2 class="manual-section__heading">Notebook</h2>
    <div class="notebook__log" id="notebook-log"></div>
    <form class="notebook-form" id="notebook-form">
      <div class="notebook-form__row">
        <label>Type
          <select name="type">
            ${TYPES.map((t) => `<option value="${t}">${TYPE_LABEL[t]}</option>`).join("")}
          </select>
        </label>
        <label class="notebook-form__url">Source URL (optional)
          <input type="url" name="url" placeholder="https://…">
        </label>
      </div>
      <textarea name="body" placeholder="Write a thought, a research note, a question, or an objection… (⌘/Ctrl+Enter to save)" required></textarea>
      <div class="notebook-form__footer">
        <span class="notebook-form__hint">Saved to this browser. Export from the manual home page to publish.</span>
        <button type="submit">Save note</button>
      </div>
    </form>
  `;

  const log = container.querySelector("#notebook-log");
  const form = container.querySelector("#notebook-form");

  async function refresh() {
    const notes = await getNotesForSlug(slug);
    if (!notes.length) {
      log.innerHTML = `<p class="notebook-empty">No notes yet on this entry.</p>`;
      return;
    }
    log.innerHTML = notes.map((n) => renderNoteEntry(n)).join("");

    log.querySelectorAll("[data-edit-id]").forEach((btn) => {
      btn.addEventListener("click", () => startEdit(btn.dataset.editId, notes));
    });
    log.querySelectorAll("[data-delete-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (confirm("Delete this note?")) {
          deleteNote(slug, btn.dataset.deleteId);
          refresh();
        }
      });
    });
  }

  function renderNoteEntry(n) {
    const badge = `<span class="notebook-entry__badge notebook-entry__badge--${n.type}">${TYPE_LABEL[n.type]}</span>`;
    const status =
      n.source === "published"
        ? `<span class="notebook-entry__status">[published]</span>`
        : `<span class="notebook-entry__status">[draft]</span>`;
    const urlLine = n.url
      ? `<p class="notebook-entry__url"><a href="${escapeHtml(n.url)}" target="_blank" rel="noopener">${escapeHtml(n.url)}</a></p>`
      : "";
    const actions =
      n.source === "published"
        ? ""
        : `<div class="notebook-entry__actions">
             <button type="button" data-edit-id="${n.id}">edit</button>
             <button type="button" data-delete-id="${n.id}">delete</button>
           </div>`;
    return `
      <article class="notebook-entry">
        <div class="notebook-entry__head">
          ${badge}
          <span class="notebook-entry__time">${formatTimestamp(n.created)}</span>
          ${status}
        </div>
        <div class="notebook-entry__body">${renderNoteBody(n.body)}</div>
        ${urlLine}
        ${actions}
      </article>
    `;
  }

  let editingId = null;

  function startEdit(id, notes) {
    const note = notes.find((n) => n.id === id);
    if (!note || note.source === "published") return;
    editingId = id;
    form.type.value = note.type;
    form.url.value = note.url || "";
    form.body.value = note.body;
    form.body.focus();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = form.body.value.trim();
    if (!body) return;
    const payload = { type: form.type.value, url: form.url.value.trim(), body };
    if (editingId) {
      updateNote(slug, editingId, payload);
      editingId = null;
    } else {
      addNote(slug, payload);
    }
    form.reset();
    refresh();
  });

  form.body.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      form.requestSubmit();
    }
  });

  await refresh();
}

// ---- rendering: home-page notebook tools (export/import + recent feed) ---

export async function renderNotesTools(container, { exhibits } = { exhibits: [] }) {
  container.innerHTML = `
    <div class="notes-toolbar">
      <button type="button" id="notes-export">⇩ Export notes.json</button>
      <label for="notes-import">⇧ Import notes.json</label>
      <input type="file" id="notes-import" accept="application/json">
    </div>
    <div id="notes-recent"></div>
  `;

  container.querySelector("#notes-export").addEventListener("click", () => exportNotesFile());
  container.querySelector("#notes-import").addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      await importNotesFile(file);
      alert("Notes imported.");
      renderRecent();
    } catch {
      alert("That file didn't look like a notes.json export.");
    }
  });

  const titleBySlug = new Map(exhibits.map((e) => [e.slug, e]));

  async function renderRecent() {
    const local = loadLocal();
    const published = await loadPublished();
    const slugs = new Set([...Object.keys(local), ...Object.keys(published)]);
    const all = [];
    for (const slug of slugs) {
      for (const n of await getNotesForSlug(slug)) all.push({ ...n, slug });
    }
    all.sort((a, b) => new Date(b.created) - new Date(a.created));
    const recentEl = container.querySelector("#notes-recent");
    if (!all.length) {
      recentEl.innerHTML = `<p class="notebook-empty">No notes yet. Open any entry to start one.</p>`;
      return;
    }
    recentEl.innerHTML = all
      .slice(0, 20)
      .map((n) => {
        const meta = titleBySlug.get(n.slug);
        const label = meta ? meta.title : n.slug;
        const link = meta ? href(`manual/${meta.wing}/${meta.slug}/`) : "#";
        return `
          <article class="notebook-entry">
            <div class="notebook-entry__head">
              <span class="notebook-entry__badge notebook-entry__badge--${n.type}">${TYPE_LABEL[n.type]}</span>
              <span class="notebook-entry__time">${formatTimestamp(n.created)}</span>
              <a href="${link}">${escapeHtml(label)}</a>
            </div>
            <div class="notebook-entry__body">${renderNoteBody(n.body)}</div>
          </article>
        `;
      })
      .join("");
  }

  await renderRecent();
}
