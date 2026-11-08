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
index.html              entry, fonts, meta
vite.config.ts          base './' for portable deploys
src/
  main.tsx              providers + router
  App.tsx               routes (currently one placeholder route)
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

## Partially Completed Work

- Phase 1 design system: header, mega menu, mobile menu, footer, layout, shared components (Button, Card, Breadcrumb, Table, states) still to build.

## Remaining Development Tasks

See `DEVELOPMENT_ROADMAP.md` (ordered checklist by phase).

## Current Development Status

- Estimated completion: **~13%** (method: 11 phases weighted equally; Phase 0 done = 1.0, Phase 1 about 0.4).
- Completed: Phase 0.
- In progress: Phase 1 (design system).
- Remaining: Phases 2 to 10.
- Branch: `main`
- Latest commit: `b4a4db0` (pushed to `main`). Build: passing. Details in `PROJECT_STATUS.md` (updated after every commit).

## Current Session Log

Session 1 (2026-11-08): audited empty repo, scaffolded project, tokens, i18n, nav data, handover docs; verified all files pushed; reference-site audit attempted but site unreachable (documented).

## Known Issues

- Only a placeholder page exists; nav paths are defined but not routed yet.
- Bangla labels exist for top-level nav only; sub-items fall back to English.
- No sitemap, robots.txt, PWA, or 404 yet.

## Next Immediate Actions

1. (Blocked on owner input) finish `docs/REFERENCE_AUDIT.md`; do not invent site content.
2. Build `Header` (identity, search trigger, language toggle) and desktop mega menu from `src/data/nav.ts`.
3. Build accessible mobile menu.
4. Build `Footer`.
5. Build `Layout` (skip link, header, outlet, footer) and wire routes with a shared "In development" page so no link is broken.
6. Add shared components: Button, Card, Breadcrumb, StatusBadge (Official / Demonstration / Awaiting backend).
7. Commit, push, update docs; then start Phase 2 (homepage).

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
