# Spec: Apsara Homepage Strategic Redesign

## Problem

The current homepage, while solid and well-structured, does not yet fully communicate the broader long-term product vision. The existing implementation leans too heavily on positioning Apsara as a concrete Indian medical counselling tool ("NEET counselling", "MCC + MP") rather than establishing it first as an ambitious, technically serious company building a general intelligence layer for college admissions.

The current narrative has the right ingredients (Problem → Case Study → Intelligence → Vision → Waitlist), but:
1. The hero leads with the specific Indian wedge rather than the broader company thesis.
2. There is no dedicated "Apsara Loop / How It Works" section that visually establishes the end-to-end decision process (Understand → Research → Reason → Plan → Act → Monitor → Re-plan).
3. The Case Study section, while strong, introduces the proof with a "Most tools answer vs Apsara asks" contrast frame that is a useful supporting idea but not the ideal section-opening framing for the narrative.
4. The waitlist copy and form fields are too tightly bound to "MCC / MP / Other counselling" rather than the broader admissions positioning.
5. The site does not cleanly separate real product evidence (the Indian case) from future product vision (the loop architecture and broader systems).

## Users

1. **Qualified prospective student / parent**: Visiting after hearing about Apsara in the context of NEET or college admissions. Needs to understand within 20-30 seconds that this is not just another cutoff predictor — that there is a larger, more serious system being built.
2. **Angel / seed investor or hiring candidate**: Evaluating the company. Needs to see a credible, ambitious product thesis backed by real evidence that the team understands decision systems.
3. **Domain expert / counsellor**: Assessing whether the product has genuine analytical depth or is just "AI college search" marketing.

## Goals

1. **Reposition the hero**: Lead with a broad company statement — "Admissions are not a search problem. They are a continuously changing decision process." — with the Indian case as the starting wedge, not the company.
2. **Add the Apsara Loop section**: A visually compelling new section between Problem and Case Study that introduces the 7-stage long-term workflow (Understand → Research → Reason → Plan → Act → Monitor → Re-plan) as a connected continuous system diagram, with an explicit "Long-term product architecture" label so it is not misread as currently-shipped features.
3. **Refine the Problem section**: Reframe from "a list vs prediction vs strategy" contrast into a more visual and editorial explanation of the decision loop that admissions impose on students: Profile → Eligibility → Options → Constraints → Decision → New information → Revised decision.
4. **Strengthen the Case Study section**: Keep the anonymized MCC + MP case, the 4-round structure, the interactive round selector, the Framer Motion round transitions, and the student profile sidebar intact. Re-frame the section intro so its central message is "The strategy changes when the state of the admissions system changes" rather than a two-column "most tools vs Apsara" comparison.
5. **Refine the Intelligence / Data Layer section**: Introduce the section headline with the concept of a structured data + decision model pipeline. Keep the restrained 3-layer (Data → Models → Strategy) architecture, but ensure the copy and visual feel closer to an engineering company explaining a system than an AI SaaS landing page. No AI graphics or glowing surfaces.
6. **Refine the Vision section**: Keep the high-contrast dark `surface-ink` treatment (it breaks up the page rhythm correctly). Shift the leading headline concept to "One intelligence architecture. Every admissions system." Keep the India / UK / US cards but demote them so they are supporting evidence rather than the centerpiece. UK / US must remain explicitly "Illustrative" and India must be the only "Real case · verified" example.
7. **Broaden the Waitlist section**: Change the headline and supporting copy from a tight "MCC + MP counselling" framing to a broader admissions framing that reads: "Admissions decisions change. We are building a system that can keep up. Join the early access list." Carefully update the form's counselling selector to preserve the Supabase schema and waitlist API contract (Zod enum `["mcc", "mp", "both", "other"]`) while broadening the label UI text to fit the wider positioning.
8. **Preserve existing infrastructure**: Do not break the waitlist API at `/api/waitlist`, do not change the Supabase table schema, do not remove or rename PostHog capture sites (`case_round_changed`, `waitlist_submitted`), do not switch the Next.js / Tailwind v4 / Framer Motion / shadcn stack.
9. **Maintain the existing visual system**: Warm off-white (`surface-warm`) hero, pure-white and neutral sections, the single dark near-black `surface-ink` section for Vision, Inter (already loaded via layout.tsx), the restrained typography and border rules from globals.css. No new accent colors. No purple gradients. No AI-themed stock visuals.

## Non-goals

- Do NOT implement any backend admissions engine, recommendation API, or personalization feature.
- Do NOT fabricate new ranks, probabilities, prediction accuracy, user counts, or testimonials for the case study or any other section.
- Do NOT add user accounts, login, pricing, features, about, or blog navigation items.
- Do NOT replace the real Indian counselling case with a fabricated universal dashboard.
- Do NOT introduce new NPM dependencies unless strictly unavoidable (the Loop section should be achievable with existing Tailwind + Framer Motion).
- Do NOT change the global CSS variable system, the color tokens (`--surface-warm`, `--surface-ink`, etc.), or the shadcn button component.
- Do NOT remove the existing analytics provider or PostHog integration.
- Do NOT write new case-study data files. The typed data in `src/data/case-study.ts` is the authoritative source and should remain exactly as-is.

## Functional Requirements

### F1. Navbar
- Keep the `Apsara` wordmark on the left.
- Desktop nav anchors in order: `Problem` → `Proof` → `Intelligence` → `Join waitlist`. (Waitlist remains the CTA button, not a plain link.)
- Anchor hrefs should map to section IDs that exist on the page after the redesign: `#problem`, `#case` (for Proof), `#intelligence`, `#waitlist`.
- Mobile behavior (nav items hidden below `sm` breakpoint, waitlist CTA button always visible) should be preserved.
- Sticky background/blur from existing implementation should remain unchanged.

### F2. Hero section
- Small kicker: "Admissions intelligence".
- Primary large headline: "Admissions are not a search problem." (with a second line establishing the product, e.g. "Apsara is building an intelligent system that helps students navigate the entire admissions process.") — exact wording can be tuned for tone but the semantic meaning must be preserved.
- Two short supporting paragraphs, one per column in the existing 2-column split layout pattern, explaining that admissions involve: changing information, eligibility, constraints, choices, deadlines, and decisions that have to be revisited.
- Primary CTA button: "Explore the proof" → links to `#case`.
- Secondary CTA button (outline variant): "Join the waitlist" → links to `#waitlist`.
- Status line at the bottom confirming the two evidence layers: "Primary proof: real anonymized Indian MCC + MP counselling" and "Broader vision: admissions systems across countries".

### F3. Problem section
- Editorial, visual, non-card layout (can keep the existing left-kicker/headline + right-body two-column grid pattern, which is already not a three-card SaaS layout).
- Core conceptual change: the headline and body must establish that the problem is continuous decision-making in the face of changing information, not simply "there are too many colleges" or "a list vs prediction vs strategy" contrast.
- Introduce a visual (diagrammatic or typographic) representation of the decision loop that admissions impose on the student:
  ```
  Student → Profile → Eligibility → Options → Constraints → Decision → New information → Revised decision
  ```
  The final stage should visually feed back into the process. This can be implemented with a connected line of nodes, a circular diagram, or an editorial numbered progression that is clearly cyclical.
- The four existing contrast labels ("Fragmented", "Static", "Anecdotal", "Unordered") can be kept or replaced as long as the section's central copy is about the decision loop and fragmentation.

### F4. The Apsara Loop / How It Works (NEW section)
- New section placed between Problem (`#problem`) and Case Study (`#case`).
- Must be visually striking and clearly communicate that Apsara is a continuous decision system, not a database, prediction model, or chatbot.
- The 7 stages in order:
  1. **UNDERSTAND** — Profile, goals, preferences, constraints
  2. **RESEARCH** — Institutions, programs, rules, deadlines, historical data, current information
  3. **REASON** — Eligibility, tradeoffs, uncertainty, realistic options
  4. **PLAN** — Ordered application / choice / admissions strategy
  5. **ACT** — Assist with the next concrete task
  6. **MONITOR** — Watch for meaningful changes
  7. **RE-PLAN** — Update the strategy as conditions change
- Visual approach: must feel like one connected continuous flow, not seven giant cards. Options include: a horizontal connected flow (desktop) that stacks to vertical on mobile, a circular/looped system diagram with connecting lines, a progressive reveal with subtle Framer Motion, or numbered labels with thin connectors.
- An explicit small label near the title must state something equivalent to "Long-term product architecture" so the visitor does not confuse these stages with currently-shipped features.
- No duplicate section IDs. Give this section its own ID, e.g. `#loop`.

### F5. Real Proof / Case Study section
- Keep the `caseStudy` data from `src/data/case-study.ts` exactly as-is. Do not add, remove, or rename colleges, rounds, or change reasons.
- Keep the interactive round selector (4 round buttons) with Framer Motion `AnimatePresence` transitions between rounds.
- Keep the student profile sidebar (Exam, Domicile, Category, Systems, Target + 4 preference bullets).
- Keep the strategy/choice list rendering with change badges ("Added", "Removed", "Moved up", "Moved down") and the "What changed" block of reasons.
- Refine the section intro: replace or rework the two-column "Most tools answer vs Apsara asks" comparison cards with a section intro whose central message is that "The strategy changes when the state of the admissions system changes." The "Real case · anonymized" status badge must remain.
- The case study must continue to track `case_round_changed` PostHog events with `{ round: id }` when a round tab is clicked.
- Section ID stays `#case` (mapped from navbar "Proof").

### F6. Intelligence / Data Layer section
- Headline conceptual change: the section should clearly introduce the idea that "Apsara is built around structured admissions data and decision models."
- Keep the restrained 3-layer vertical composition:
  - Layer 01 — Historical and current admissions data (6 data source bullets)
  - Layer 02 — Models that interpret the data (5 model type rows with label + detail)
  - Layer 03 — A strategy that can be acted on (4 dark-highlighted strategy step blocks)
- The concept of a conceptual architecture pipeline should be made explicit:
  ```
  Admissions data + Student context + Rules/constraints + Historical patterns + Current conditions
    → Models / reasoning → Decision strategy → Explanation / next action
  ```
  This can be added as a small pipeline diagram before the 3 layers, or integrated into the copy/headline.
- Visual restraint: no glowing AI graphics, no neural network illustrations, no purple gradients, no fake animated data.
- Section ID stays `#intelligence`.

### F7. Broader System Vision section
- Keep the `bg-surface-ink` dark, high-contrast treatment — it correctly breaks up the light page.
- Leading headline concept must be: "One intelligence architecture. Every admissions system." The existing "Different systems. Different variables. Same decision problem." line can stay as a second statement or supporting headline.
- The India / UK / US three-card structure can be kept but must be secondary evidence (i.e. not the largest visual element on the left). The existing left+right split can be flipped or re-balanced so the thesis statement is the primary focus and the three systems cards sit on the supporting side.
- India card: must stay "Real case · verified". UK and US cards: must stay explicitly "Illustrative" with the disclaimer line at the bottom that the engine does not exist for them yet.
- The closing pull-quote block with the working thesis can stay, or be reworded to support the new headline more directly.
- Section ID stays `#vision`.

### F8. Waitlist / CTA section
- Headline and body copy must be broadened beyond "MCC + MP counselling". Suggested direction:
  - Headline: something along the lines of "Admissions decisions change. We are building a system that can keep up." (or equivalent broader framing).
  - Supporting copy: explain that this is a validation prototype, and if you are facing a high-stakes admissions decision in the next cycle, join the early access list.
- The form must still POST JSON `{ email, counselling }` to `/api/waitlist`.
- The Zod enum in `waitlist.ts` is `["mcc", "mp", "both", "other"]`. The UI labels for these four options can be broadened (e.g. "Indian medical / NEET", "Madhya Pradesh state", "Both", or "Other admissions system") as long as the **values** submitted on the wire and stored in Supabase remain `mcc`, `mp`, `both`, `other` exactly. Do NOT add or remove enum members — the Supabase table stores a text column matching these values and we must not break existing rows.
- PostHog `waitlist_submitted` event with `{ counselling: value }` must continue to fire on successful submit.
- The idle / submitting / done / error status states, duplicate-handling message, and network-error message must continue to work as before.
- Section ID stays `#waitlist`.

### F9. Footer
- Keep minimal:
  - Left: "Apsara"
  - Right/tagline: "The intelligence layer for navigating college admissions."
- No extra nav links, no social links, no copyright clutter unless already present.

## Non-functional Requirements

### N1. Visual / editorial quality
- The finished page must maintain or exceed the current visual quality bar. Sections must have rhythm (light → white → neutral → white → dark → light CTA). The existing 8 section-treatment colors (surface-warm, white, surface-neutral, surface-slate, surface-ink) provide the available palette and should be assigned to the new 9-section structure with intentional transitions.
- Typography must follow the existing system: `Inter` via layout.tsx, tight tracking on headlines (`tracking-tight`), restrained body line-heights, small caps kickers with `tracking-[0.14em] uppercase`.
- No new brand assets, icons, or images should be introduced unless they are from `lucide-react` (already in the stack) and genuinely improve comprehension of a diagram. Prefer typography and lines over decorative iconography.

### N2. Responsive design
- All sections must be usable on mobile (≤ 640px), tablet, and desktop. The Loop section in particular must have a valid mobile representation (the horizontal flow can stack vertically below `sm` or `md`).
- The case-study table/list with change badges must not require horizontal scrolling on mobile; the existing implementation already stacks and is acceptable.

### N3. Technical integrity
- `eslint` (`npm run lint`) and `next build` (`npm run build`) must pass cleanly after the changes.
- No new NPM packages.
- Server components by default; only mark components `"use client"` when they use state (CaseStudy, WaitlistForm, AnalyticsProvider — the existing three).
- Tailwind v4 syntax only. No v3 `@apply` inside layers beyond what already exists in globals.css.
- Framer Motion is available and encouraged for the Loop section connectors, the case-study round transitions (already in place), and any section-entering micro-animations.

### N4. Analytics integrity
- Existing PostHog capture sites: `case_round_changed` (with round id) and `waitlist_submitted` (with counselling enum value) must still fire from the same interaction points.
- No new capture calls are required, but adding `hero_cta_clicked` or `loop_section_viewed` events is acceptable and recommended as long as they are typed into `AnalyticsEvent` in `src/lib/analytics.ts`.

### N5. Waitlist / Supabase integrity
- `/api/waitlist` route handler must accept exactly the same JSON schema: `{ email: string, counselling: "mcc" | "mp" | "both" | "other" }`.
- The `counselling` column in Supabase `waitlist` table must continue to receive one of those four strings. Do not add new values or rename existing ones.
- The `source` column (if used later) is out of scope for this redesign.

## Constraints & Dependencies

- The stack is pinned: Next.js 16.3.5, React 19, Tailwind v4, Framer Motion 13, shadcn + Base UI, Lucide React, Supabase JS 2, PostHog, Zod, Vercel.
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`. The redesign must not depend on any new env vars.
- AGENTS.md rule: this is a non-standard Next.js; verify with `node_modules/next/dist/docs/` if unsure, and heed deprecation. (No App Router API changes are anticipated for this redesign since we are modifying page components only.)
- Browser/dev-environment constraint: in dev mode if Supabase is not configured, the waitlist endpoint falls back to a no-op `console.info` mode per TECH.md. This behavior must be preserved.

## Assumptions

- The existing case-study data structure (`CaseStudy`, `Round`, `ChoiceChange`, `diffRounds`) in `src/data/case-study.ts` is authoritative and final for this redesign. If the Loop section or Case Study section needs extra metadata, it should live in the component's local constants, not in the typed case data.
- The navbar "Proof" link points to `#case` (the existing section id). "Problem" → `#problem`. "Intelligence" → `#intelligence`. New Loop section gets a new id `#loop` and is reachable by scrolling, not by a dedicated nav item (per the user's 4-item suggested nav: Problem, Proof, Intelligence, Join waitlist).
- The user does not require a standalone HTML `sitemap.xml`, `robots.txt`, or Open Graph image update as part of this redesign. Metadata `title` and `description` in layout.tsx can be reviewed and gently broadened if appropriate, but are not required to change.

## Open Questions

None at specification time. The strategic direction is fully stated in the user request.

---

## Acceptance Criteria

Below, ACs are typed as either `rule` (objective binary pass/fail, verifiable by inspection or command output) or `rubric` (evaluative quality dimension with numeric scale and threshold).

### AC1 — Homepage narrative order is correct (rule)
- The section order in `src/app/page.tsx` (top to bottom) must be:
  1. Navbar
  2. Hero
  3. Problem
  4. Apsara Loop / How It Works (new component, e.g. `Loop.tsx` or an equivalent-named component)
  5. Case Study
  6. Intelligence
  7. Vision
  8. Waitlist
  9. Footer
- Evidence: reading `src/app/page.tsx` shows the component imports and JSX children in this order.

### AC2 — Hero headline leads with the broad company thesis, not the Indian wedge (rule)
- The hero `<h1>` or primary headline block must contain a statement equivalent to "Admissions are not a search problem" and/or "Admissions is not a search problem. It is a continuously changing decision process."
- The hero must NOT open with "Indian medical admissions", "NEET counselling", or "MCC + MP" as its lead statement. The Indian case can appear in the supporting status line / kicker only.
- Evidence: inspecting `Hero.tsx` render output.

### AC3 — Apsara Loop section exists with the correct 7 stages (rule)
- A section (new component file or new block) rendered between Problem and Case Study.
- All 7 stages are present and named exactly (case-insensitive display OK): Understand, Research, Reason, Plan, Act, Monitor, Re-plan.
- A small label equivalent to "Long-term product architecture" appears in the section header area.
- Evidence: reading the new loop-component source.

### AC4 — Apsara Loop section reads as one connected continuous system (rubric, 0–2, threshold ≥1)
- Dimension: connected-system visual quality.
- `2`: Stages are visually connected by lines, arrows, a looped circle, or another obvious flow. It is immediately obvious that these stages feed into each other, not that they are 7 separate feature cards. Desktop has a horizontal or circular flow; mobile has a valid stacked representation.
- `1`: All 7 stages are present in order, but the connection between them is only implied by spacing/numbers, not by explicit connectors or a diagram. Still clearly one section, not 7 cards.
- `0`: Looks like 7 cards or 7 disconnected bullets. No visual continuity.
- Evidence: screenshot + source review of loop component.

### AC5 — Problem section emphasizes the decision loop, not just list-vs-prediction (rubric, 0–2, threshold ≥1)
- Dimension: problem-framing shift.
- `2`: A cyclical/loop diagram or numbered progression visual showing Student → Profile → Eligibility → Options → Constraints → Decision → New info → Revised decision (with feedback) is clearly present. The supporting copy explicitly talks about decisions that keep changing.
- `1`: The headline and body copy clearly reframe the problem as continuous decision-making and fragmentation. The 4 old labels can still be there. Even without a diagram, the reader understands "the decision keeps changing" is the core.
- `0`: Still fundamentally "A list vs prediction vs strategy" triad as the headline idea. No mention of the decision loop or cyclical process.
- Evidence: source review of `Problem.tsx`.

### AC6 — Case Study preserves the interactive MCC + MP proof unchanged (rule)
- `src/data/case-study.ts` has zero content changes (same case study title, kicker, disclaimer, profile 5 items, 4 preferences, 4 rounds with identical college lists, change reasons).
- Case-study component still:
  - renders 4 round-tab buttons (R1, R2, R3, Mop-up),
  - preserves `AnimatePresence` + `motion` transitions between rounds,
  - shows the candidate sidebar (5 profile dls + 4 preference bullets),
  - shows per-row change badges and a "What changed" reasons block,
  - emits `capture({ name: "case_round_changed", properties: { round: id } })` on tab click.
- Evidence: `git diff` on `src/data/case-study.ts` is empty; source review of `case-study.tsx`.

### AC7 — Case Study intro states the central message about strategy changing with system state (rubric, 0–1, threshold ≥1)
- Dimension: framing of the case-study intro.
- `1`: The section intro headline/body clearly states something equivalent to "The strategy changes when the state of the admissions system changes." The old "Most tools answer vs Apsara asks" two-column contrast can stay or go, but the central framing is about the strategy evolution under changing conditions. The "Real case · anonymized" badge is preserved.
- `0`: The section still opens primarily with the two-column comparison cards and does not surface the strategy-change thesis.
- Evidence: source review of `case-study.tsx` intro block.

### AC8 — Intelligence section headline establishes structured data + decision models (rubric, 0–1, threshold ≥1)
- Dimension: intelligence-section framing.
- `1`: Headline or kicker+headline clearly states "Apsara is built around structured admissions data and decision models" (or equivalent). The explicit pipeline (data + context + rules → models/reason → strategy → explanation/action) is visible somewhere in the section — either as a small pipeline diagram or in the body copy of the intro block. The 3-layer composition is kept.
- `0`: No explicit pipeline, headline still reads "Data. Models. Strategy." only without the new framing.
- Evidence: source review of `intelligence.tsx`.

### AC9 — Vision section headline prioritizes "One architecture. Every admissions system." (rubric, 0–1, threshold ≥1)
- Dimension: vision-section framing.
- `1`: The section headline block explicitly leads with "One intelligence architecture. Every admissions system." (or semantically identical wording). The 3 systems cards (India real, UK/US illustrative) are present but positioned as supporting evidence, not as the dominant visual of the section. The disclaimer about UK/US being illustrative engines that do not yet exist remains.
- `0`: Still opens primarily with "Different systems. Different variables. Same decision problem." and the 3 cards are still the centerpiece.
- Evidence: source review of `vision.tsx`.

### AC10 — Waitlist form copy is broadened, but wire contract unchanged (rule)
- Headline and supporting copy no longer lead with "a child, a rank, and a choice list" or "MCC All-India + MP" as the primary framing. Broader admissions framing is present.
- The waitlist form still POSTs `{ email: string, counselling: "mcc" | "mp" | "both" | "other" }` to `/api/waitlist`.
- The 4 button options in the UI can have different display labels, but their stored values via `setCounselling(option)` are still exactly the 4 enum strings `"mcc"`, `"mp"`, `"both"`, `"other"`.
- `waitlist_submitted` capture fires on success with the counselling value.
- `/api/waitlist/route.ts` is unchanged.
- `src/lib/waitlist.ts` schema and enum are unchanged.
- Evidence: source review of `waitlist-form.tsx`, `lib/waitlist.ts`, `api/waitlist/route.ts`.

### AC11 — Footer tagline uses the broader navigation framing (rule)
- Footer right-hand tagline reads "The intelligence layer for navigating college admissions." (or semantically identical) — not the narrower version if it differs.
- No extra links (About, Blog, etc.) have been added to the footer.
- Evidence: source review of `footer.tsx`.

### AC12 — Build and lint pass (rule)
- `npm run lint` exits with code 0.
- `npm run build` exits with code 0.
- Evidence: terminal command output captured as part of task completion evidence.

### AC13 — No fabricated data or claims (rule)
- Reviewing all components:
  - No new ranks, probabilities, accuracy numbers, testimonials, user counts, logos, success rates, or partnership claims have been added anywhere.
  - UK / US examples remain "Illustrative".
  - AI is not the headline of any section; it is a supporting implementation detail only.
  - There is no competitive bashing ("Unlike Careers360...", "Existing tools are outdated...").
- Evidence: full-text grep across `src/` for forbidden phrases and fabricated-metric patterns.

### AC14 — Visual system is consistent and sections have intentional rhythm (rubric, 0–2, threshold ≥1)
- Dimension: overall page composition and visual pacing.
- `2`: Section background treatments are assigned intentionally across the 9 sections (e.g. warm hero, white problem, neutral/white loop, neutral case, slate intelligence, dark vision, white waitlist + footer). Transitions feel editorial. No section uses a gratuitously different palette. Typography hierarchy is consistent across sections (kicker → h2 → body patterns match).
- `1`: Minor inconsistency in one section's treatment, but overall the page still clearly feels like the same restrained premium-tech product. No visual jarring.
- `0`: Colors clash, sections have inconsistent treatment, typography patterns break, or AI-themed visual clichés (purple gradients, glowing panels, etc.) have been introduced.
- Evidence: full-page screenshot + source review of section `className` backgrounds.
