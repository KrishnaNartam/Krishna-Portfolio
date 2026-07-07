# Fox Founder AI — Rebrand & IA Plan

Reposition the existing portfolio into the official Fox Founder AI studio site. Studio-first branding with Krishna as founder. Keep the current Paper & Ink / Instrument Serif / Magazine design system — this is IA, copy, and content work, not a visual overhaul.

## 1. Positioning

- One-liner: **"Fox Founder AI — a boutique studio building AI products, automation systems, and Industrial IoT dashboards. From first prompt to production."**
- Voice: "we" for offers and outcomes, "I" (Krishna) for craft, story, and founder page.
- Recruiter posture: **Studio only.** No "open to roles" line anywhere. Founder page reads as credibility, not availability.

## 2. Information Architecture

Convert the current single-page site into a multi-route studio site.

```text
/            Studio home  — hero, 3 service pillars, featured case
             studies (3), founder ribbon, selected clients/logos or
             testimonial, closing CTA
/services    The 3 pillars in depth — deliverables, engagement models,
             process, starting-at pricing, FAQ
/work        Case-study index (grid of all case studies)
/work/$slug  Full case study — context, problem, approach, stack,
             results, role, artifacts
/founder     Krishna — story, experience, education, skills, writing,
             resume download
/contact     Inquiry form + Calendly/email + "what to include" prompt
```

Nav: `Work · Services · Founder · Contact` + persistent **Start a project** CTA button.

Footer: studio name, © Fox Founder AI 2025–2026, socials, contact email, sitemap link.

## 3. Personal vs. Business split

| Surface | Voice | Owner |
|---|---|---|
| Hero, Services, Case-study framing, Process, Pricing, Contact, Footer | "we" | Fox Founder AI |
| Founder page, Experience, Education, Skills, Writing, Resume | "I" | Krishna |
| Case-study body | "we built… I led…" | Both |

## 4. Service pillars (locked)

1. **AI Products** — LLM-powered SaaS, agents, RAG apps, internal AI tools.
2. **Automation Systems** — n8n pipelines, workflow automation, integrations, ops automation.
3. **IIoT Dashboards** — Industrial IoT telemetry, real-time dashboards, monitoring systems.

Each gets: one-paragraph description, deliverables list, typical engagement (fixed scope / retainer), starting-at price range, "good fit if / not a fit if" block.

## 5. Case studies (the biggest credibility lever)

Promote 3–5 existing portfolio projects into full case studies at `/work/$slug`. Each follows one template:

- Context (client type, problem space)
- Problem (in their words)
- Approach (how we scoped and built)
- Stack (technologies, models, integrations)
- Result (metric, screenshot, or artifact)
- Role (what Krishna personally did)

Home page shows 3 featured; `/work` shows all.

## 6. Domain

User is creating a new domain (likely `foxfounder.ai` or similar). Until the domain is registered and connected in Project Settings → Domains:

- Keep `https://krishnanartam.lovable.app` in canonical, og:url, sitemap.xml, JSON-LD.
- Ship the rebrand on the current URL.
- Once the domain is live, do a single find-and-replace pass on all absolute URLs and add a note to submit the new domain to Google Search Console.

I'll flag the exact files to update in the domain-swap follow-up (`__root.tsx`, per-route `head()`, `sitemap[.]xml.ts`, JSON-LD blocks, robots.txt sitemap directive).

## 7. Metadata & SEO per route

Each route gets its own `head()` with unique title, description, og:title, og:description, og:url, canonical (leaf only), matching twitter:card. JSON-LD:

- `__root.tsx` — `Organization` schema for Fox Founder AI (name, url, founder → Person Krishna, sameAs socials, areaServed, knowsAbout).
- `/founder` — `Person` schema (moved from index).
- `/work/$slug` — `CreativeWork` per case study.
- `/services` — `Service` schema per pillar.
- `sitemap.xml` — add all new routes.

## 8. Design system

**No visual overhaul.** Keep Paper & Ink palette, Instrument Serif + Work Sans, magazine layout. Only additions:

- A small "Fox Founder AI" wordmark for logo slot (replaces "Krishna").
- Founder ribbon component: portrait thumb + "Founded and led by Krishna Nartam, AI Engineer based in Pune" → links to `/founder`.
- Case-study template layout (magazine-style, reuses existing type scale).
- Service-pillar card (three across on desktop, stacked on mobile).

## 9. Content the user needs to supply (or I'll draft placeholders)

Before or during implementation:

1. **Studio name confirmation** — "Fox Founder AI" as shown, or a variant?
2. **3–5 projects to case-study** — names + a sentence each; I'll draft the full write-ups from your existing portfolio blurbs.
3. **Starting-at pricing** per pillar (or "on request" if you prefer).
4. **Contact preference** — form only, Calendly, email, or all three.
5. **Any real client logos / testimonials** we can use; if none, we omit that block rather than fake it.

If you'd rather move fast, I'll write plausible placeholders you can edit in-place.

## 10. Implementation order

1. Rebrand shell: logo → "Fox Founder AI", nav → Work/Services/Founder/Contact, root JSON-LD → Organization, footer.
2. Create routes: `/services`, `/work`, `/work/$slug`, `/founder`, `/contact`. Extract content from current `/` into `/founder` and `/work/$slug` pages.
3. Rewrite `/` as studio home (hero, pillars, featured cases, founder ribbon, CTA).
4. Build case-study template + port 3–5 projects.
5. `/services` page with pillars, process, FAQ.
6. `/contact` page with form (Lovable Cloud) or mailto + Calendly.
7. Update `sitemap.xml`, per-route meta, robots.txt.
8. Ship. Domain swap when new domain is registered.

## Technical notes

- Runtime hydration mismatch currently in the app (`07 July 2026` vs `01 January 1970`) — the footer year is being derived from `Date` at render. I'll fix by moving the year to a client-only effect or hardcoding "2025–2026" during this refactor.
- Existing `google-site-verification` meta, canonical, and JSON-LD blocks in `__root.tsx` and `index.tsx` are preserved and extended, not replaced.
- Route files use flat dot notation (`work.$slug.tsx`, not folders).

## Out of scope for this plan

- Blog / writing section (can add later once you have 2–3 posts).
- Multi-language.
- Backend for form submissions (will use Lovable Cloud in the implementation step, with your approval).
- Visual redesign — deferred; current design system stays.

Reply with (a) which case-study projects to include, (b) pricing approach, and (c) whether to draft placeholder copy where content is missing. Then I'll implement in the order above.
