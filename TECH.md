# Technical Direction

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

## Architecture

Use the existing src/ directory structure.

src/
- app/
- components/
- data/
- lib/

## Rules

- Follow the installed Next.js version and AGENTS.md instructions.
- Follow Tailwind CSS v4 conventions.
- Do not introduce Tailwind v3 syntax.
- Do not modify foundational configuration without a clear reason.
- Prefer server components by default.
- Use client components only where interaction requires them.
- Keep data separate from UI.
- Use TypeScript types for case-study data.
- Reuse shadcn components where they genuinely improve consistency.
- Do not add libraries unless they solve a real requirement.

## MVP data

The initial counselling demonstration should be local typed data.

Example location:

src/data/case-study.ts

Do not build a database-backed case-study system yet.

## Backend

The waitlist is the only backend feature planned for MVP.

Do not build authentication or a generalized API.

## Quality

Before declaring a feature complete:
- run lint
- run build
- check browser console
- test mobile layout
- test keyboard interaction where applicable