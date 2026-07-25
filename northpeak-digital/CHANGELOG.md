# Optimization Changelog — Task B

This site was built performance- and accessibility-first rather than bolted on afterward. Below is what was done and what each choice buys, organized the way the task asks for.

## Performance

| Change | Why it helps |
|---|---|
| Zero JS/CSS frameworks, hand-written vanilla code | No unused framework CSS/JS shipped to the browser. Total payload is ~33KB uncompressed across all three files combined. |
| Only 2 font families loaded (Fraunces, IBM Plex Sans/Mono) via one Google Fonts request, with `preconnect` hints and `font-display: swap` | `preconnect` starts the DNS/TLS handshake early; `swap` means text renders in a fallback font immediately instead of blocking on font download (kills a common "Largest Contentful Paint" penalty). |
| No hero image / no raster images anywhere | Icons and the hero contour lines are inline SVG (vector, tiny, no separate HTTP request, scale perfectly at any DPI). This removes the single biggest common cause of a low Performance score — large unoptimized hero images. |
| CSS is a single file, JS is a single small file, both loaded normally (no blocking third-party scripts) | Keeps the critical rendering path short: one HTML request, one CSS request, one JS request, one font request. |
| `will-change`/heavy animation avoided; only lightweight CSS transitions (hover states, mobile menu) | Cheap transitions run on the compositor and don't trigger layout thrashing. |
| `prefers-reduced-motion` respected globally | Not a raw speed win, but it's the kind of detail Lighthouse's "Best Practices" adjacent checks and real users notice. |
| Sticky header uses `backdrop-filter` sparingly, not a scroll-linked JS effect | Avoids JS-driven scroll listeners, which are a common source of jank on lower-end phones. |

**What to actually do for Task B:** open the deployed URL in Chrome DevTools → Lighthouse → run Performance + Accessibility (mobile + desktop) → screenshot both reports. Given the payload size and lack of render-blocking assets described above, this should land at or above 90 on both without further work — but confirm with the real report, since Lighthouse also factors in your specific hosting's TTFB (Netlify/Vercel/GitHub Pages are all fine here).

## Accessibility

| Change | Why it helps |
|---|---|
| Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`, one `h1` and a logical `h2`/`h3` hierarchy | Screen reader users can jump by landmark/heading instead of reading linearly. |
| Skip-to-content link, visible on keyboard focus | Lets keyboard/screen-reader users bypass the nav instead of tabbing through it every page load. |
| Every form input has a real `<label for>`, required fields use `aria-describedby` pointing at a live error region (`role="alert"`) | Errors are announced to screen readers the moment they appear, not just shown visually. |
| Color palette checked for contrast: ink (`#16202B`) on paper (`#EFEDE6`) and white text on the dark results/footer sections both clear 4.5:1 for body text | Meets WCAG AA for normal text. |
| Visible `:focus-visible` outline (brass, offset) on every interactive element, not just default browser outline suppressed | Keyboard users can always see where focus is — this is one of the most commonly missed/removed styles in agency sites. |
| Decorative SVGs (icons, contour background) marked `aria-hidden="true"`; the logo mark has an accessible label via the parent link's `aria-label` | Screen readers skip decoration instead of announcing meaningless SVG paths. |
| Mobile nav toggle uses `aria-expanded` + `aria-controls`, updates on open/close | Announces menu state changes to assistive tech. |
| Touch targets (buttons, nav links, form fields) sized comfortably above the 44px minimum on mobile | Reduces mis-taps for motor-impaired and mobile users generally. |

## What I'd do differently

Honest note for the walkthrough: the hero's animated contour background is a nice signature element, but on very low-end devices four layered SVG paths with opacity blending could be simplified to two if a real device test shows any jank — I didn't have a physical low-end Android to test against, only DevTools throttling.

## Your remaining steps (can't be done for you)

1. Deploy (see `README.md`).
2. Run Lighthouse in Chrome DevTools on the live URL (mobile + desktop), screenshot both.
3. Record a 2–3 min Loom: point out (a) the contour-line hero as the signature visual choice, (b) the inline error/`aria-live` form validation, (c) zero-dependency JS/CSS keeping the payload tiny — then name one thing you'd change (e.g. the contour animation note above, or your own observation).
4. Submit the live URL + repo link per the task kit instructions.
