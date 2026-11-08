# Dhaka Education Board Digital Portal (Concept Redesign)

> **Not an official website.** This is a demonstration redesign. All content is either structural (navigation, layout) or clearly labelled demonstration content until verified against the official source.

Reference (functional reference only): https://www.dhakaeducationboard.gov.bd/site/

## Project Overview

A premium, bilingual (English/Bangla) static front-end for a national education board portal: notices, examinations, results, online services, institution directory, portals, and an admin architecture design. No backend exists; anything needing one is documented, not faked.

Design direction: midnight navy primary, warm neutral surfaces, restrained gold, cyan/blue accents. Inter + Hind Siliguri. Minimal, information-dense, accessible.

## Project Audit (Phase 0)

- Date: 2026-11-08
- Repo `tanvirpersonal/sikkha-board` was **empty** (no commits, no branches). Nothing to preserve, no debt.
- Branch created on first push: `main` (confirmed by owner).
- Reference website: **could not be read** (fetch blocked by the session allowlist). See `docs/REFERENCE_AUDIT.md`. Nav/service names come from the owner's brief, not verified against the live site. Completing the audit needs the owner to supply homepage HTML, screenshots or the menu list.

## Current Architecture

- Vite 5 + React 18 + TypeScript (strict) + react-router-dom 6 (HashRouter, so GitHub Pages works without rewrites).
- No UI framework; plain CSS with design tokens.

```
index.html              entry, fonts, meta, favicon link
public/favicon.svg      favicon
.github/workflows/deploy.yml  builds and deploys dist/ to GitHub Pages on push to main
vite.config.ts          base './' for portable deploys
src/
  main.tsx              providers + router
  App.tsx               routes: every nav path -> InDevelopment page, * -> NotFound
  components/           Header (+css, dropdown + mobile menu), Footer (+css), Layout (skip link)
  pages/                InDevelopment (shared placeholder + breadcrumb), NotFound (404)
  i18n/index.tsx        I18nProvider, useI18n(), Label {en, bn?} (bn falls back to en)
  data/nav.ts           primary navigation tree (structure only)
  styles/tokens.css     colour, type, spacing tokens
  styles/global.css     base styles, focus ring, skip link, reduced motion
```

Commands: `npm install`, `npm run dev`, `npm run build` (type-check + build), `npm run preview`.

## Completed Work

- Project scaffold; `npm run build` passes (verified 2026-11-08).
- Design tokens and global base styles.
- i18n layer (language persisted in localStorage, sets `<html lang>`).
- Primary navigation data model (13 top-level items from the spec).
- Header: concept banner, identity, EN/বাং toggle, desktop dropdown menus (click, Escape, outside-click close, aria-expanded), mobile accordion menu. Build verified; **not yet visually checked in a browser**.
- Footer, Layout with skip link, routes for every nav path, 404 page.
- GitHub Pages deploy workflow (`f33c8c0`) and favicon (`d466d5f`). Fixes console 404s for `main.tsx` and `favicon.ico`, which happened because the unbuilt repo root was being served.

## Partially Completed Work

- Phase 1 design system: shared components (Button, Card, Breadcrumb component, StatusBadge, Table, loading/empty/error states) still to build. Header/footer need a visual check at desktop, tablet and mobile widths (no browser tooling in this session).

## Remaining Development Tasks

See `DEVELOPMENT_ROADMAP.md` (ordered checklist by phase).

## Current Development Status

- Estimated completion: **~15%** (method: 11 phases weighted equally; Phase 0 done = 1.0, Phase 1 about 0.7).
- Completed: Phase 0.
- In progress: Phase 1 (design system).
- Remaining: Phases 2 to 10.
- Branch: `main`
- Latest feature commit: `d466d5f` (pushed to `main`). Build: passing. Details in `PROJECT_STATUS.md` (updated after every commit).

## Current Session Log

Session 1 (2026-11-08): audited empty repo, scaffolded project, tokens, i18n, nav data, handover docs; verified all files pushed; reference-site audit attempted but site unreachable (documented); header, footer, layout, routes, 404 built; fixed deploy 404s (Pages workflow + favicon).

## Known Issues

- **Owner action needed for the site to load:** in the GitHub repo go to Settings > Pages > Build and deployment > Source = **GitHub Actions**. Until then Pages may serve raw source (blank page, 404 on `/src/main.tsx`). After pushing, check the Actions tab for a green run.
- Deploy workflow is untested until Pages is switched to GitHub Actions; if the run fails, read the Actions log first.

- All pages are still the shared "awaiting implementation" page; no real content yet.
- Header/menu untested visually; 13 top-level items may wrap on desktop widths just above 1180px.
- No global search UI yet (removed from header until it works).
- Bangla labels exist for top-level nav only; sub-items fall back to English.
- No sitemap, robots.txt, PWA, or 404 yet.

## Next Immediate Actions

1. (Blocked on owner input) finish `docs/REFERENCE_AUDIT.md`; do not invent site content.
2. Add shared components: Button, Card, Breadcrumb, StatusBadge (Official / Demonstration / Awaiting backend), state components. Refactor InDevelopment to use Breadcrumb.
3. Visually check header/footer at 360, 768, 1280 px if browser tooling exists; fix wrapping.
4. Start Phase 2: homepage hero and quick-access services (one section per commit).
5. Add global search UI once there is content to search.

## Important Technical Decisions

- **Vite + React + TS**: static, fast, deployable to GitHub Pages; chosen with owner.
- **HashRouter**: no server rewrites needed on GitHub Pages.
- **Label {en, bn?}**: content translated incrementally without blocking; fallback to English.
- **No fake data as real**: every data-driven section must carry a StatusBadge.
- **No fake login**: auth only for genuinely protected services, which need a backend (documented, not mocked).

## GitHub Workflow

- Repo: https://github.com/tanvirpersonal/sikkha-board, branch `main`.
- Rule: **commit and push after every change, then update `README.md`, `PROJECT_STATUS.md`, `DEVELOPMENT_ROADMAP.md`, `CHANGELOG.md` and push again** so a new session can resume after a usage limit.
- Conventional commits (`feat(home):`, `fix(nav):`, `docs:` ...). Never force push. No secrets in commits.
- Small steps: one change, build check, commit, push.

## Handover Instructions

1. Read `README.md`, `PROJECT_STATUS.md`, `DEVELOPMENT_ROADMAP.md`, `CHANGELOG.md`.
2. `git log --oneline -10` and `git status`.
3. `npm install && npm run build` to verify the real state.
4. Continue from the first unchecked item in `DEVELOPMENT_ROADMAP.md`.
5. After each commit: push, then update the status docs and push again.
