# Development Roadmap

Ordered checklist. Mark `[x]` only after verifying in code. Every item = one small commit + push.

## Phase 0: Audit
- [x] Inspect repository (empty)
- [~] Audit reference website: `docs/REFERENCE_AUDIT.md` written but INCOMPLETE (site unreachable from the session; needs owner to supply homepage HTML/screenshots/menu list)

## Phase 1: Design system
- [x] Scaffold (Vite, React, TS)
- [x] Tokens and global styles
- [x] i18n layer
- [x] Navigation data
- [x] Header (identity, language toggle; search trigger deferred until search exists)
- [x] Desktop dropdown menus (simple dropdowns, not full mega menu; revisit if content warrants)
- [x] Mobile menu (accordion)
- [x] Footer
- [x] Layout (skip link) and routes for every nav path with shared "In development" page; 404
- [x] Visual check of header/footer at 360/1240/1280 px; fixed nav wrap and mobile brand wrap
- [ ] Visual check of Bangla at desktop widths, open dropdown and mobile menu states
- [ ] Shared components: Button, Card, Breadcrumb, StatusBadge, Table, empty/loading/error states

## Phase 2: Homepage
- [ ] Hero + global search
- [ ] Quick-access services
- [ ] Notices, exam announcements, routines
- [ ] Results and verification shortcuts
- [ ] Online services, institution services
- [ ] Publications/downloads, statistics, news
- [ ] Contact block

## Phase 3: Information pages
- [ ] About the Board (history, mission, structure, officials, departments, policies, legislation: only verified content)
- [ ] Academics, Students, Teachers, Publications, Downloads, Contact (with feedback form UI)

## Phase 4: Examinations and results
- [ ] SSC, HSC, equivalent, routines, registration, form fill-up, admit card, centres, practical, re-scrutiny
- [ ] Results portal UI (lookup forms linking to official systems; never fabricate results)

## Phase 5: Online services
- [ ] Service directory with official external links (e-TC, e-SIF, e-FF, certificates, corrections, EIIN, tracking, payment info)

## Phase 6: Institution directory
- [ ] Search, EIIN lookup, filters, detail page

## Phase 7: Portals
- [ ] Student, institution, teacher portal pages (public info; auth only where backend exists)

## Phase 8: Administration architecture
- [ ] Role/permission model, module designs, backend requirements doc

## Phase 9: Performance, accessibility, SEO, security
- [ ] sitemap.xml, robots.txt, structured metadata, 404, PWA (if appropriate), a11y audit, Lighthouse

## Phase 10: Final QA and deployment
- [x] GitHub Pages deploy workflow added early (`f33c8c0`); needs owner to enable Pages source = GitHub Actions and a first green run confirmed
- [ ] Responsive check, broken-link check, deployment docs
