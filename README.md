# Always On Time Transportation — Website

The live marketing site for **Always On Time Transportation, Inc.** — static, no build step.
**Source of truth:** GitHub · **Hosting:** Vercel (auto-deploys on every push).

- Repo: https://github.com/AustinLanceButler/aot-website
- Live URL (after setup): shown in Vercel — typically `https://aot-website.vercel.app`

---

## The workflow

```
edit in the design tool  →  push to GitHub (main)  →  Vercel auto-builds  →  live URL updates
```

The persistent URL never changes; each push just updates what it serves. Share that one URL with Lloyd.

### One-time setup (two steps)

1. **Add the assets.** In the repo: **Add file → Upload files**, then drag the **`assets`** folder
   (from the provided download) into the box and **Commit** to `main`.
   This adds `assets/site.css`, `assets/site.js`, and the `logo/` + `photos/` images.
2. **Connect Vercel.** Go to **vercel.com → Add New → Project → Import** `aot-website`.
   Framework preset **Other**, root directory **`./`**, then **Deploy**. Vercel shows the live URL.

Once connected, every future change pushed to `main` redeploys automatically — no more manual steps.

---

## Pages
- `index.html` — Home (hero, services, care story, why AOT, contact)
- `services.html` — Services detail (NEMT, ambulatory, airport & cruise, private, stretcher); anchors `#nemt` … `#stretcher`
- `about.html` — Story, values, coverage
- `contact.html` — Both regional offices + message form
- `book.html` — Phone-first "Schedule a ride" + online request form

## Logo = single source of truth
The logo renders everywhere (header, footer, favicon) via the `<aot-logo>` web component in `assets/site.js`.

**When Lloyd's logo feedback lands** — he's keeping the original and adapting it — replace the three files in
`assets/logo/` (keep the filenames) and every page updates on the next deploy:
- `aot-lockup-color.png` — full-color lockup (header)
- `aot-lockup-mask.png` — solid silhouette of the lockup (drives the white footer knockout + one-color use via CSS mask)
- `aot-mark.png` — the wheelchair-in-clock mark (favicon)

`<aot-logo>` supports `variant="lockup|mark"` and `tone="color|reversed|mono"`.
Phone numbers, addresses, and nav are also single-source — edit `CONTACT` / `NAV` in `assets/site.js`.

## Assets
- `assets/site.css` — all styles; AOT brand tokens baked in (self-contained)
- `assets/site.js` — `<aot-logo>`, `<site-header>`, `<site-footer>`, icons, form handling
- `assets/logo/` — the three logo files · `assets/photos/` — fleet & care photography (web-optimized)

## Notes
- The request/message forms are front-end only — on submit they confirm and steer the visitor to call.
  Wire to email/CRM (a Vercel serverless function or a form service) before launch.
- Fonts (Lato, IBM Plex Mono) load from Google Fonts.
- `vercel.json` sets clean URLs and long-cache headers for `/assets`.
