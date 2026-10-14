// manual/js/format.js
//
// Tiny text helpers shared by the notebook and the sidebar. escapeHtml()
// is the only thing standing between a note someone typed and innerHTML —
// every note body goes through it before anything else happens to it.

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// A deliberately tiny markdown subset for note bodies: paragraphs (blank
// line separated), `code`, **bold**, and bare/`[label](url)` links. Input
// is escaped first, so nothing it contains can inject markup — the only
// HTML tags this ever produces are the ones below.
export function renderNoteBody(raw) {
  const escaped = escapeHtml(raw);
  const withInline = escaped
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/(^|[\s(])((?:https?:\/\/)[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');

  return withInline
    .split(/\n{2,}/)
    .map((para) => `<p>${para.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

export function formatTimestamp(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}
