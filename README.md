# Looty Bay Manual / Looty Bay 攻略手册

An unofficial bilingual (English and Simplified Chinese) guide to [ROB RUN](https://store.steampowered.com/app/4262460/ROB_RUN/) by Kefir. Built with [Eleventy 3](https://www.11ty.dev/). This project is **not affiliated with Kefir**.

Live GitHub Pages URL: `https://good1uck.github.io/looty-bay/`. `SITE_URL` and `PATH_PREFIX` are configurable (see `src/_data/site.js` and `eleventy.config.js`).

## Editorial rule

Do not invent mechanics, numbers, keybinds, maps, or item databases. Cite an official source — the Steam store or news, the Kefir Help Center, or robrun.com — for every factual claim, and date the check (America/New_York). If an official source does not state something, say so or leave it out. Chinese pages keep official English terms in parentheses on first use, because there is no official Chinese client.

## Scripts

```bash
cd /workspace/looty-bay
npm install
# Local preview without the GitHub Pages prefix:
SITE_URL=http://localhost:8080 PATH_PREFIX=/ npm start
npm run build  # writes to _site/ (uses GitHub Pages defaults unless env is set)
```

Requires Node 18+. GitHub Actions builds with `SITE_URL=https://good1uck.github.io/looty-bay` and `PATH_PREFIX=/looty-bay`.

## Site map (v1)

- `/` — language chooser
- `/en/`, `/zh/` — language homes
- Guides (each has `/en/...` and `/zh/...`): what ROB RUN is, first hour, Federal Raid / wipe, money, heists, cops, bases, troubleshooting, official codes
- `/en/faq/`, `/zh/faq/`
- `/en/about/`, `/zh/about/`
- `/en/sources/`, `/zh/sources/`
- `/sitemap.xml`, `/robots.txt`, `/404.html`

A longer topic list lives in `CONTENT-BACKLOG.md`.

## Deploy

GitHub Actions (`.github/workflows/pages.yml`) builds Eleventy and deploys `_site/` to GitHub Pages.

To preview as it will appear on Pages:

```bash
SITE_URL=https://good1uck.github.io/looty-bay PATH_PREFIX=/looty-bay npm start
# then open http://localhost:8080/looty-bay/
```

When a custom domain is attached later, change `SITE_URL` and set `PATH_PREFIX=/` in the workflow.

## License and trademarks

Site copy is written for Looty Bay Manual. ROB RUN, Looty Bay, Kefir, and other names are used only to identify the game; trademarks remain with their owners.
