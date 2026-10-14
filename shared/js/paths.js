// shared/js/paths.js
//
// Resolves site-root-relative paths (e.g. "wings/machine/") to real URLs,
// no matter how deep the current page is nested or what sub-path the site
// is served under (e.g. a GitHub Pages project page at /some-repo/).
//
// Every render-*.js module builds hrefs through href() instead of
// hardcoding "/..." or a hand-counted "../../". Because this file always
// lives at shared/js/paths.js, "../.." from its own URL always lands on
// the repo root — on localhost, on a custom domain, or under a Pages
// sub-path — so nothing here needs to know which one it's running under.

const ROOT = new URL("../..", import.meta.url);

export function href(rootRelativePath) {
  return new URL(rootRelativePath, ROOT).href;
}
