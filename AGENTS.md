# AGENTS.md

## Project Purpose

- This repository is the GitHub Pages organization root site for `GuangHouGong.github.io`.
- Production URL: `https://guanghougong.github.io/`.
- Public project name: `土城廣厚宮福德正神・玄壇財神官方網站`.
- The site's primary job is to introduce 土城廣厚宮, its main deities, local faith story, announcements, and contact path.
- The lottery wheel app at `/fortune-draw-wheel/` is a secondary digital activity tool, not the homepage focus.

## Stack And Commands

- Use Vite + React + TypeScript.
- No backend, database, server runtime, or external image dependency is required.
- Keep `vite.config.ts` `base` set to `/` because this is an organization root GitHub Pages site.
- Use these commands:
  - `npm install` or `npm ci`
  - `npm run dev`
  - `npm run lint`
  - `npm run build`
  - `npm run preview`

## Content Rules

- Default site copy and documentation language is Traditional Chinese.
- Do not scrape Facebook or invent temple facts unless the user explicitly asks for research.
- Keep the provided Facebook URL as the canonical contact link unless the user gives an updated official link.
- Keep the homepage hero and primary CTA focused on understanding or contacting 土城廣厚宮, not the lottery wheel.
- Keep the lottery wheel link in a lower-priority digital activity tool or related project section.
- Keep the open-source project section linked to:
  - `https://github.com/GuangHouGong/fortune-draw-wheel`
  - `https://guanghougong.github.io/fortune-draw-wheel/`

## Design Rules

- Use a clean Taiwan temple visual direction: gold, red, deep brown, and warm off-white.
- Prefer CSS and SVG assets under `public/assets/`.
- Do not add external image dependencies unless requested.
- Keep the layout responsive for mobile, tablet, and desktop.
- Avoid decorative clutter; the site should feel formal and official.

## SEO And Public Files

- Keep `index.html` metadata in sync with the official site name and production URL.
- Maintain `html lang="zh-Hant-TW"`.
- Maintain canonical, Open Graph, Twitter Card, JSON-LD, `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`.
- If routes or public URLs change, update `README.md`, `public/sitemap.xml`, and relevant metadata in the same change.

## Documentation And Memory

- `AGENTS.md` is the repo-level instruction surface for future Codex work.
- `README.md` is the human-facing project guide and should be updated when setup, deployment, SEO behavior, or related project links change.
- Codex memories are local recall only; do not rely on memory as the only place for project rules that future agents must follow.

## Verification

- After code, asset, config, or metadata changes, run `npm run lint` and `npm run build`.
- After visible UI changes, run `npm run dev` and inspect the page in a browser when practical.
- Check `git diff --check` before committing.

## Git

- Use Conventional Commits.
- Commit only intentional project files. Do not commit `node_modules/` or `dist/`.
- Report the final commit hash and message after committing.

## License Notes

- Source code is MIT licensed.
- Temple name, copy, and identity assets are for this official website; do not imply third-party authorization to represent the temple.
