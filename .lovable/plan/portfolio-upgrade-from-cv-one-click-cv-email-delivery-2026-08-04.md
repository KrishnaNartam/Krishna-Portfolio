# Portfolio Upgrade from CV + One-Click CV Email Delivery

## Part 1 — Content upgrade from the CV

Full enhancement pass on `src/routes/index.tsx` data arrays, keeping the current dark editorial design, spacing, and animations untouched.

### Rewritten intro / about
Position you as a full-stack + AI automation engineer with a mechanical engineering foundation, referencing real substance from the CV: MQTT telemetry, millisecond-level video annotation, human-in-the-loop AI review, and Hinglish conversational agents.

### Work section — expand to the real project set
Each project gets Problem / What I built / Stack / Outcome, using the CV's concrete metrics:
- Video Action Annotation Workbench — Next.js, TypeScript, Supabase, Gemini API. Millisecond action segmentation, human-in-the-loop caption review, JSON/CSV dataset export.
- AI Real Estate Lead Qualification Agent — n8n, OpenAI, WhatsApp Cloud API, Google Calendar, Slack. 80%+ faster response, 15+ hours/week of manual triage removed.
- Industrial IoT Real-Time OEE Platform — React, Node, MQTT, PostgreSQL. Sub-second telemetry sync.
- AI Resume Builder with ATS Optimization — Next.js, Node, PostgreSQL, OpenAI.
- AI Brand Content Intelligence Platform — Next.js, Gemini, computer vision scoring.

A compact "Also built" strip covers the four additional projects: Multi-Agent AI Customer Support SaaS, DentalFlow AI queue system, Multi-Brand Real Estate Lead Gen, AI Event Management Platform.

### New section — Certifications & Leadership
Same panel styling as Education, listing: n8n Certified Workflow Automation Specialist, AWS Cloud Practitioner/Fundamentals, Generative AI & Prompt Engineering, PostgreSQL & Database Design, Airtable Foundations, plus Cultural Head — NSS. Added to the nav and scroll-spy.

### Skills — add only what's missing
SQL, MongoDB, Node-RED, Video Action Segmentation, Docker, AWS, MQTT, Linux, Git/GitHub. No renames, no removals, no duplicates.

### Education
Corrected to the CV: BE Mechanical (SKN College of Engineering, Pune, 2023–2027) and Diploma in Mechanical (Government Polytechnic, Nagpur, 2019–2023).

## Part 2 — CV email delivery (Option C)

**Prerequisite:** sending real email needs Lovable Cloud plus an email domain you own and verify (for example `notify.yourdomain.com`). `krishnanartam.lovable.app` cannot be used as a sender. I'll enable Cloud and open the email domain setup for you; you add the DNS records at your registrar. Until DNS verifies, the button falls back to a direct download so the site is never broken.

### Flow
1. Visitor clicks **Download CV** — one click, no form.
2. A modal asks only for the destination email address (required so there is somewhere to send it) and submits.
3. A server route validates the address, rate-limits by IP, and enqueues a branded email with the CV PDF attached.
4. The modal confirms delivery and also shows an instant direct-download link as a fallback.

Note: attachment support depends on the email infrastructure; if attachments are unavailable, the email will instead contain a branded button linking to the hosted CV, and I'll tell you which path was used.

### Security and reliability
- Zod validation on the email field, strict length limits.
- Honeypot field plus per-IP rate limiting to stop abuse.
- CV stored as a Lovable CDN asset, not committed as a binary.
- Send handled server-side only; no keys in the browser.
- Queue-backed sending with automatic retry, so a transient failure doesn't lose the request.
- You get a notification copy of each request so you know who asked.

## Technical details
- Content edits are confined to the data arrays and section components in `src/routes/index.tsx`; a new `Certifications` section component follows the existing `panel` / `Reveal` patterns.
- CV uploaded via `lovable-assets` producing `src/assets/krishna-cv.pdf.asset.json`.
- Email send handled by a TanStack server route with the request modal calling it; templates as React Email components in `src/lib/email-templates/`.
- Requires enabling Lovable Cloud (database + email infrastructure).

## What you'll need to do
- Own a domain and add the DNS records Lovable shows you, so email can send from your brand.
- Everything else is handled in the build.
