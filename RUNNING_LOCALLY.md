# Running the site locally

No build step — just a static file server from the repo root.

## Start

```sh
cd /Users/jzitko/Demo_Projects/ParadoxWebsite
python3 -m http.server 8000
```

Leave that running in its terminal, then open:

- Cabinet of Minds: http://localhost:8000/
- Manual: http://localhost:8000/manual/

If `localhost` doesn't load (some sandboxes/VPNs block it), use `http://127.0.0.1:8000/` instead.

## Stop

Press `Ctrl+C` in the terminal running the server.

If you started it in the background instead, find and kill it:

```sh
lsof -ti:8000 | xargs kill
```
