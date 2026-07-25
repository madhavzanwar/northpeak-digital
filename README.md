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

## Live site
🔗 https://madhavzanwar.github.io/northpeak-digital/

## Repo
🔗 https://github.com/madhavzanwar/northpeak-digital
