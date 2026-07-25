# NorthPeak Digital

A one-page responsive site for a fictional digital agency, built with plain HTML, CSS and JavaScript — no framework, no page builder.

**Design concept:** a topographic / survey vernacular (contour lines, elevation stats, "grid ref" labels) as the visual signature, paired with a Fraunces + IBM Plex type system. Palette is a deep ink-navy, warm paper, and a muted brass accent.

## Structure

```
index.html   — markup, semantic sections (header, hero, services, results, pricing, contact, footer)
styles.css   — design tokens (custom properties) + responsive layout
script.js    — mobile nav toggle + client-side form validation, no dependencies
```

No build step. No external JS libraries. The only external requests are two Google Fonts files.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

### Option A — GitHub Pages (simplest, free)
```bash
# from inside this folder
git init
git add .
git commit -m "NorthPeak Digital — initial build"
git branch -M main
git remote add origin https://github.com/<your-username>/northpeak-digital.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: Deploy from branch → Branch: main / (root)**.
Your live URL will be `https://<your-username>.github.io/northpeak-digital/`.

### Option B — Netlify
1. Push the folder to a GitHub repo (steps above).
2. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → pick the repo.
3. Build command: *none*. Publish directory: `/` (root).
4. Deploy — Netlify gives you a live URL immediately, and redeploys on every push.

### Option C — Vercel
1. Push the folder to a GitHub repo.
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset: **Other**. No build command needed.
4. Deploy.

## Notes for the submission

- The footer credit line ("Built for Digital Heroes Training Task", linked to digitalheroesco.com) is already in `index.html` — don't remove it.
- Update `README.md`/submission notes with your live URL once deployed.
- See `CHANGELOG.md` for the performance/accessibility reasoning (Task B).
