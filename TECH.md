# Technical Direction

## Product architecture

The current product is a landing page and interactive proof-of-concept.

Do not prematurely build the long-term admissions intelligence architecture.

The MVP should demonstrate the concept while keeping the codebase ready for later expansion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Base UI
- Framer Motion
- Lucide React
- Supabase
- PostHog
- Zod
- Vercel

## Existing architecture

Use the existing src/ directory structure.

src/
- app/
- components/
- data/
- lib/

## Rules

- Follow the installed Next.js version and AGENTS.md instructions.
- Read relevant Next.js documentation when framework behavior is uncertain.
- Follow Tailwind CSS v4 conventions.
- Do not introduce Tailwind v3 syntax.
- Do not modify foundational configuration without a clear reason.
- Prefer server components by default.
- Use client components only where interaction requires them.
- Keep data separate from UI.
- Use TypeScript types for case-study data.
- Reuse shadcn components where they genuinely improve consistency.
- Do not add libraries unless they solve a real requirement.
- Avoid abstraction for its own sake.
- Prefer simple components with clear responsibilities.

## Data model

MVP case studies should use structured typed data.

Primary example:

src/data/case-study.ts

The data model should not assume that every admissions system behaves like Indian counselling.

It should be possible to represent different admission environments later.

For example:

India:
- rank
- category
- domicile
- round
- college
- course
- cutoff
- allotment
- movement

International:
- academic profile
- program
- institution
- eligibility
- requirements
- cost
- scholarship
- deadline
- fit or modeled signals

Do not over-generalize the data model before there is a real requirement.

## Case-study architecture

Presentation components should consume structured case-study data.

Do not hard-code college rows directly inside visual components.

For example:

case-study data
→ case-study component
→ strategy table
→ round selector
→ change visualization

This should allow the underlying case data to be replaced without rewriting the UI.

## Multiple case studies

The architecture should eventually permit:

- Indian case
- International case
- future case studies

However, only implement additional case-study infrastructure when actually needed.

The first real case remains the primary proof.

## MVP data source

The initial Indian counselling demonstration uses local typed data.

No generalized external data service is required.

No automated scraping is required.

No automated data ingestion is required.

No database-backed case-study system is required yet.

## International case

If an illustrative international case is included, clearly separate it from verified real case data.

Do not mix fabricated example data into the real counselling dataset.

Use explicit metadata identifying whether a case is:

- real
- anonymized
- illustrative

## Backend

The waitlist is the only backend feature planned for MVP.

Do not build:

- authentication
- generalized APIs
- user profiles
- recommendation APIs
- database-backed counselling
- model-serving infrastructure

unless the product experiment requires them.

## Analytics

Use PostHog for basic product-validation events.

Useful events may include:

- page_view
- hero_cta_clicked
- case_study_opened
- round_selected
- strategy_row_opened
- international_case_opened
- vision_section_viewed
- waitlist_started
- waitlist_submitted

Track meaningful interactions, not every mouse movement.

## Waitlist

Use Supabase for the waitlist.

Keep the data collection minimal.

Initial fields:

- email
- optional exam
- optional year
- created_at
- source

Do not collect sensitive student information unless there is a demonstrated product reason.

## Security and privacy

Do not expose the real student's identifying information.

Do not ship unnecessary private source data to the client.

Only expose the minimum data required to render the public case study.

Do not place secrets in client-side code.

Use environment variables for Supabase/PostHog credentials as appropriate.

## AI architecture

Do not implement the actual AI engine in the MVP.

Long-term, the likely architecture is closer to:

structured admissions data
+
historical models
+
constraint / optimization engine
+
retrieval
+
language model
→
personalized strategy
→
explanation

The language model should not be treated as the authoritative source for admission probability.

Do not create mock AI APIs simply to make the MVP appear more advanced.

## Performance

The homepage should remain lightweight.

- Avoid unnecessary dependencies.
- Prefer CSS over JavaScript for simple visual effects.
- Lazy-load non-essential interactive content where appropriate.
- Avoid shipping the complete raw dataset to the client if only a subset is displayed.
- Keep animations efficient.

## Quality

Before declaring a feature complete:

- run lint
- run build
- check browser console
- test desktop layout
- test tablet layout
- test mobile layout
- test keyboard interaction where applicable
- verify no fabricated data entered the page
- verify no secrets are committed
- verify public case-study data is appropriately anonymized

## Deployment

Target deployment:

Vercel.

The MVP should be deployable without a custom server.

## Do not overbuild

The MVP is intended to test demand.

When choosing between:
- a simple implementation that demonstrates the concept
- a complex implementation that anticipates the future platform

choose the simple implementation.

Build the intelligence engine only after evidence that the concept deserves it.