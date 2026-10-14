# Publishing to GitHub Pages

This repo isn't a git repo yet, and the target GitHub repo
(`jtabz/paradoxportfolio`) is empty. Here's the full path from here to a live
site at `https://jtabz.github.io/paradoxportfolio/`.

Run everything below from the repo root:

```sh
cd /Users/jzitko/Demo_Projects/ParadoxWebsite
```

## 1. Switch GitHub auth to the right account

The repo is owned by GitHub account **JtabZ**. `gh` on this machine is
currently logged in as a different account, **Jzitko**, which doesn't have
push access to it. Both accounts are already known to `gh`, so just switch
the active one:

```sh
gh auth switch --hostname github.com --user JtabZ
gh auth status   # confirm JtabZ now shows as the active account
```

## 2. Clean up what shouldn't be committed

Add a `.gitignore`:

```sh
cat > .gitignore <<'EOF'
.DS_Store
.claude/
.cursor/
EOF

rm -f .DS_Store
```

**Decide about the PDF.** `Philosophy of Mind_ ... .pdf` (the book this whole
site is built around, ~2MB) is sitting at the repo root. It's not something
the site needs at runtime — it's only there as the original source material.
Two reasonable options:
- **Keep it** — handy to have alongside the code; it's small enough that it
  won't bother anyone.
- **Exclude it** — a 2024 Routledge book under copyright probably shouldn't
  sit in a public repo even if the site itself only ever paraphrases it. If
  you'd rather leave it out, add this line to `.gitignore` too:
  ```
  Philosophy of Mind_*.pdf
  ```

## 3. Initialize and commit

```sh
git init
git add -A
git commit -m "Initial commit: Cabinet of Minds + manual"
```

## 4. Point at the existing remote and push

```sh
git remote add origin https://github.com/JtabZ/paradoxportfolio.git
git branch -M main
git push -u origin main
```

## 5. Enable GitHub Pages

Via the web UI:
1. Go to `https://github.com/JtabZ/paradoxportfolio/settings/pages`
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**

Or via `gh` instead of the UI:

```sh
gh api -X POST repos/jtabz/paradoxportfolio/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

Pages takes a minute or two to build the first time.

## 6. Verify

Open:
- `https://jtabz.github.io/paradoxportfolio/` — Cabinet of Minds
- `https://jtabz.github.io/paradoxportfolio/manual/` — the manual

Check the browser console for 404s. If `_template/` or other
underscore-prefixed paths come back missing, confirm `.nojekyll` made it into
the pushed tree (`git show HEAD --stat | grep nojekyll`) — GitHub Pages runs
Jekyll by default, which silently skips `_`-prefixed folders, and that empty
file at the repo root turns Jekyll off entirely.

## 7. Future updates

After this first push, shipping changes is just:

```sh
git add -A
git commit -m "..."
git push
```

Pages redeploys automatically on every push to `main`.
