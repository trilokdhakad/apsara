# Tasks: Apsara Homepage Strategic Redesign

Implementation queue for the spec at `./spec.md`. Process one task at a time.
Set `Status: in_progress` when starting, then `Status: completed` after all task-local
Test Requirements (TR) pass self-verification and Completion Evidence is recorded.

---

## Task 1: Create the new Apsara Loop component (Loop.tsx)

**Scope:** New file `src/components/loop.tsx`. This is the single biggest new piece
of the redesign. Render a 7-stage continuous loop/flow diagram (Understand → Research
→ Reason → Plan → Act → Monitor → Re-plan) with connectors showing the stages feed
into each other and Re-plan loops back to Understand. Add an explicit
"Long-term product architecture" label. No new dependencies; use Tailwind v4 +
Framer Motion (already imported in project) for connectors/subtle motion if desired.
Server component by default unless motion is used — if motion is needed mark it
`"use client"`. Section id: `#loop`. Background treatment: use `bg-white` or
`bg-surface-slate` (whichever creates better rhythm between Problem and Case Study).

**Parent ACs covered:** AC3, AC4.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR1.1 (rule):** All 7 stages appear by name (Understand, Research, Reason, Plan, Act, Monitor, Re-plan) with correct descriptions.
  Evidence: source grep of `loop.tsx` for each stage name.

- **TR1.2 (rule):** A small label reading (or semantically equivalent to)
  "Long-term product architecture" is rendered near the section headline.
  Evidence: source review of loop-component header block.

- **TR1.3 (rubric, 0–2, threshold ≥1):** Connected-system visual quality.
  `2`: Explicit connectors (lines/arrows/circle) + good mobile stack.
  `1`: Clear ordered progression by numbers/spacing but no explicit connectors.
  `0`: Disconnected cards.
  Evidence: component source describing layout structure.

- **TR1.4 (rule):** Section renders inside `<section id="loop">` with a valid
  section-heading structure (kicker + h2 + body/visual).
  Evidence: source review of the root element.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 2: Redesign the Hero section (hero.tsx)

**Scope:** Rewrite copy and CTAs in `src/components/hero.tsx`.
- Kicker: "Admissions intelligence"
- Primary headline: lead with "Admissions are not a search problem." and second line
  establishing Apsara as building an intelligent system for the entire admissions process.
- Two supporting columns: first explains the decision-process nature (changing info,
  eligibility, constraints, choices, deadlines, revisited decisions); second briefly
  positions the MVP as a preview with the real Indian case and broader vision.
- Primary CTA: "Explore the proof" → `#case`.
- Secondary CTA (outline): "Join the waitlist" → `#waitlist`.
- Bottom status line: two bullets as before ("Primary proof: real anonymized Indian
  MCC + MP counselling" / "Broader vision: admissions systems across countries").
- Keep `bg-surface-warm` and all existing spacing/layout structures.
- Do NOT introduce any `"use client"` here; Hero is a server component.

**Parent ACs covered:** AC2.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR2.1 (rule):** Headline block contains "Admissions are not a search problem."
  Evidence: source review of the headline element in hero.tsx.

- **TR2.2 (rule):** Hero does NOT open with "NEET", "Indian medical", or "MCC" as
  its headline content. Those terms only appear in the supporting status line.
  Evidence: grep of hero.tsx headline text nodes.

- **TR2.3 (rule):** Two CTA buttons present: primary with text "Explore the proof"
  linking to `#case`; secondary (outline) with text "Join the waitlist" linking
  to `#waitlist`.
  Evidence: source review of anchor elements.

- **TR2.4 (rule):** Bottom status line preserved with both Indian-proof and
  broader-vision status bullets.
  Evidence: source review of bottom status block.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 3: Refine the Problem section (problem.tsx) — decision-loop framing

**Scope:** Refactor `src/components/problem.tsx`.
Keep the existing two-column (left kicker/h2, right body + 4-item list) structure
if it works, but shift the framing:
- Headline should move away from "A list tells you what exists / A prediction tells
  you what might happen" as the central headline idea. New headline should
  communicate that the problem is a continuously changing decision process.
- Add a visual loop/progression (can be a connected list of nodes, numbered
  progression, or editorial typographic loop) showing:
  Student → Profile → Eligibility → Options → Constraints → Decision → New information → Revised decision
  with the final stage visually feeding back (feedback arrow or cycling annotation).
- The 4 existing labels ("Fragmented", "Static", "Anecdotal", "Unordered") can be
  kept or replaced as long as the core idea is continuous decision-making.
- Keep `bg-white` background. Keep section id `#problem`.

**Parent ACs covered:** AC5.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR3.1 (rubric, 0–2, threshold ≥1):** Problem-framing shift.
  `2`: Explicit cyclical loop diagram/visual of 8 steps with feedback. Body copy
       talks about decisions that keep changing.
  `1`: Headline/body clearly communicates continuous decision-making / fragmentation.
       Old labels acceptable.
  `0`: Still list-vs-prediction as headline idea.
  Evidence: source review of problem.tsx head/body block.

- **TR3.2 (rule):** Section id is still `#problem`.
  Evidence: grep for `id="problem"`.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 4: Refine the Case Study section intro (case-study.tsx) — strategy-evolution framing

**Scope:** Edit `src/components/case-study.tsx` — only the section-intro block
(i.e. the area before the `<div className="overflow-hidden rounded-2xl...">` product
window). Keep ALL interaction code below (round tabs, sidebar, choice list,
`AnimatePresence`, `capture("case_round_changed")`, change badges, "What changed"
list) exactly as-is. Keep `MotionConfig`, state, `useMemo`, etc. untouched.
Specifically:
- Remove or demote the two-column "Most tools answer vs Apsara asks" cards that
  currently lead the section. Replace with a section intro whose central message
  is "The strategy changes when the state of the admissions system changes."
- Keep the "Real case · anonymized" status badge, the `caseStudy.title` h2,
  the `caseStudy.kicker`, and the `caseStudy.disclaimer` paragraphs.
- Keep `bg-surface-neutral`, section id `#case`.

**Parent ACs covered:** AC6, AC7.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR4.1 (rule):** `src/data/case-study.ts` has zero edits (byte-identical after
  the whole redesign).
  Evidence: `git diff --stat src/data/case-study.ts` (or confirm no write was
  performed on this file across tasks).

- **TR4.2 (rule):** Below the section intro, the following are preserved byte-for-byte
  or functionally equivalent:
  1. 4 round-tab buttons (R1–Mop-up) with click -> `selectRound(id)` calling
      `capture({ name: "case_round_changed", properties: { round: id } })`.
  2. `AnimatePresence mode="wait"` + `motion.div` keyed by `round.id` with opacity transitions.
  3. Profile sidebar with 5 dl items + 4 preference li bullets.
  4. Choice list with numbered positions + change badges.
  5. "What changed" visibleChanges ul with change reasons.
  Evidence: source review of case-study.tsx after the intro block.

- **TR4.3 (rubric, 0–1, threshold ≥1):** Intro framing.
  `1`: The section intro (before the product window) clearly states a thesis
       equivalent to "The strategy changes when the state of the admissions system
       changes." (Can be in h2 or in paragraph near title.) "Real case · anonymized"
       badge preserved.
  `0`: "Most tools answer vs Apsara asks" is still the dominant intro message.
  Evidence: source review of intro block (above first overflow-hidden div).

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 5: Refine the Intelligence section (intelligence.tsx) — data + decision model pipeline

**Scope:** Edit `src/components/intelligence.tsx`.
- Keep the 3-layer vertical composition (Data → Models → Strategy) and all
  existing bullet/detail content inside each layer.
- Update the intro headline/body block so it clearly establishes:
  "Apsara is built around structured admissions data and decision models."
- Make the conceptual pipeline explicit somewhere in the intro (either visually
  as a small pipeline diagram, or in the body copy):
  Admissions data + Student context + Rules/constraints + Historical patterns + Current conditions
  → Models / reasoning → Decision strategy → Explanation / next action
- Keep the restrained 3 rounded-2xl layer blocks. Keep section id `#intelligence`.
  Keep `bg-surface-slate`.

**Parent ACs covered:** AC8.

**Priority:** medium

**Status:** pending

**Test Requirements:**

- **TR5.1 (rubric, 0–1, threshold ≥1):** Framing and explicit pipeline.
  `1`: Headline/body reads "Apsara is built around structured admissions data
       and decision models" (or equivalent), AND the 5-input → models → strategy →
       explanation pipeline is explicitly visible in the section (either in a
       small visual pipeline or in body prose with arrows/linebreaks).
  `0`: Neither is visible; section reads as before.
  Evidence: source review of intro block and any new pipeline element.

- **TR5.2 (rule):** The three existing layers (01 data, 02 models, 03 strategy) and
  all their bullets/details are preserved.
  Evidence: grep for all 6 dataLayer items + 5 modelLayer items + 4 strategyLayer
  items, all present.

- **TR5.3 (rule):** Section id still `#intelligence`, bg still `bg-surface-slate`.
  Evidence: source grep.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 6: Refine the Vision section (vision.tsx) — "One architecture. Every system."

**Scope:** Edit `src/components/vision.tsx`.
- Shift the lead so the headline block leads with
  "One intelligence architecture. Every admissions system."
  The existing "Different systems. Different variables. Same decision problem."
  line can stay as a secondary/supporting headline.
- Keep the 3 systems cards (India real, UK illustrative, US illustrative).
  However, rebalance the composition so the thesis statement (one architecture)
  is visually dominant over the 3 cards — either by making the left column
  the primary area (currently both halves are ~equal) or by keeping the layout
  but using typography scale to prioritize the thesis.
- Keep the "Real case · verified" / "Illustrative" badges and the bottom
  disclaimer about UK/US engines not existing yet.
- Keep the closing pull-quote / thesis block (can rephrase for alignment).
- Keep `bg-surface-ink` dark section. Section id: `#vision`.

**Parent ACs covered:** AC9.

**Priority:** medium

**Status:** pending

**Test Requirements:**

- **TR6.1 (rubric, 0–1, threshold ≥1):** Vision-section framing.
  `1`: The headline block explicitly leads with "One intelligence architecture.
       Every admissions system." (or semantically identical phrasing). The 3
       systems cards are supporting evidence, not the biggest visual on the
       section. Real/Illustrative labels preserved. Disclaimer line preserved.
  `0`: Still opens with "Different systems. Different variables." as the primary
       headline; 3 cards still dominate.
  Evidence: source review of headline hierarchy and grid balance.

- **TR6.2 (rule):** India card status string begins with "Real" (case verified).
  UK and US cards read exactly "Illustrative" (or clearly labelled illustrative
  with that word).
  Evidence: grep of vision.tsx for the three status strings.

- **TR6.3 (rule):** Section id still `#vision`; still uses `bg-surface-ink` dark
  treatment with white-on-dark text.
  Evidence: source grep for id and className.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 7: Broaden Waitlist form copy + label text (waitlist-form.tsx) without breaking the wire contract

**Scope:** Edit `src/components/waitlist-form.tsx`.
- Headline: replace "Want Apsara to work on your admissions problem?" with
  something more like "Admissions decisions change. We are building a system
  that can keep up." or broader "Join the early access list." framing.
- Supporting copy: move away from the tight "MCC + MP counselling in next cycle"
  wording into a broader admissions framing while still being honest that this
  is a validation prototype.
- For the 4 counselling selector buttons:
  - The *values* and *state* stay `"mcc" | "mp" | "both" | "other"` (these are
    the values stored in Supabase and sent in POST body + analytics).
  - The UI *labels* (currently "MCC All-India", "Madhya Pradesh", "MCC + MP",
    "Other admissions") can be broadened. Suggested direction:
    `"mcc"` → "Indian medical / NEET (All-India)" or similar broader phrasing
    `"mp"`  → "Madhya Pradesh state" or similar
    `"both"`→ "All-India + Madhya Pradesh"
    `"other"` → "Other admissions system" or "Other system"
    These are suggestions only — keep labels recognizable while less niche.
- Keep the onSubmit flow, `waitlistSchema.safeParse`, POST to `/api/waitlist`,
  `capture("waitlist_submitted", { counselling })`, and all state/duplicate/error
  messages exactly as-is.
- Do NOT touch `src/lib/waitlist.ts` or `src/app/api/waitlist/route.ts`.
- Keep section id `#waitlist`. Keep `bg-white`.

**Parent ACs covered:** AC10.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR7.1 (rule):** Headline/intro copy is broader than MCC/MP.
  Evidence: source review of h2 and intro paragraphs — no exclusive focus on
  MCC + MP as the only context.

- **TR7.2 (rule):** Wire contract byte-identical from the browser's perspective:
  on submit, `fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email, counselling }) })`
  where `counselling` is one of exactly `"mcc" | "mp" | "both" | "other"`.
  The Zod schema in `lib/waitlist.ts` is NOT edited in this task (or any task).
  Evidence: source review of `onSubmit` function + confirm that `setCounselling`
  calls still pass the 4 enum strings unchanged.

- **TR7.3 (rule):** On successful submit, `capture({ name: "waitlist_submitted", properties: { counselling: parsed.data.counselling } })`
  still fires (code is present).
  Evidence: grep for "waitlist_submitted" in waitlist-form.tsx.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 8: Update Footer tagline (footer.tsx)

**Scope:** Edit `src/components/footer.tsx` to ensure the tagline reads exactly or
semantically identically to: "The intelligence layer for navigating college admissions."
(Currently it reads "The intelligence layer for college admissions." — the word
"navigating" should be added to match the new positioning statement from the user.)
Keep everything else minimal.

**Parent ACs covered:** AC11.

**Priority:** low

**Status:** pending

**Test Requirements:**

- **TR8.1 (rule):** Footer right-hand text contains "navigating college admissions".
  Evidence: source review of footer.tsx.

- **TR8.2 (rule):** Footer has no new links (no About, Blog, Features, Pricing, etc.).
  Evidence: source review of footer.tsx JSX.

**Blocked By:** —
**Unblock Condition:** —
**Completion Evidence:**

---

## Task 9: Wire up page.tsx order, navbar anchor labels, and (optionally) new analytics events

**Scope:** Edit `src/app/page.tsx`, `src/components/navbar.tsx`, and optionally
`src/lib/analytics.ts`.

In **`page.tsx`**:
- Import the new `Loop` component from `@/components/loop` (or whatever it was
  named in Task 1).
- Reorder the main section children so the order is:
  `<Hero /> → <Problem /> → <Loop /> → <CaseStudy /> → <Intelligence /> → <Vision /> → <WaitlistForm />`
- Keep Navbar and Footer wrapping.

In **`navbar.tsx`**:
- Verify anchor hrefs match existing section ids after the redesign:
  `#problem` (Problem), `#case` (Proof — still correct), `#intelligence`
  (Intelligence). No change needed unless ids moved; adjust only if necessary.
- Waitlist CTA button still goes to `#waitlist`.
- Navbar text labels: per suggestion they should read "Problem", "Proof",
  "Intelligence". (They already do in the current code — verify & keep.)

In **`lib/analytics.ts`** (optional but recommended):
- Optionally extend `AnalyticsEvent` union with:
  - `{ name: "hero_cta_clicked"; properties: { cta: "explore_proof" | "join_waitlist" } }`
  - If added, wire them up in hero.tsx as non-navigation click captures (e.g.
    `onClick` capture before the default anchor follow). Keep optional.
  Do NOT remove or rename the two existing events (`case_round_changed`,
  `waitlist_submitted`).

**Parent ACs covered:** AC1 (directly); also helps AC2 via analytics opt.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR9.1 (rule):** In page.tsx, the JSX order inside `<main>` is exactly:
  Hero, Problem, Loop, CaseStudy, Intelligence, Vision, WaitlistForm.
  Evidence: source review of page.tsx JSX tree.

- **TR9.2 (rule):** Loop component is imported and present.
  Evidence: import list in page.tsx + grep for `<Loop`.

- **TR9.3 (rule):** Navbar 4 items read: Problem → #problem, Proof → #case,
  Intelligence → #intelligence, Join waitlist → button to #waitlist.
  Evidence: source review of navbar.tsx nav children.

- **TR9.4 (rule):** The two existing analytics event names are preserved in
  analytics.ts (byte-identical type names and string literals):
  `waitlist_submitted` and `case_round_changed`.
  Evidence: grep of analytics.ts for both string literals.

**Blocked By:** Task 1 (Loop must exist before page.tsx imports it).
**Unblock Condition:** Task 1 completed and file exists at import path.
**Completion Evidence:**

---

## Task 10: Update metadata in layout.tsx (optional gentle broadening) + run lint & build

**Scope:**
1. Optionally edit `src/app/layout.tsx` `metadata.title` and
   `metadata.description` to reflect the new broader positioning if the current
   ones feel too tied to the Indian case. Keep them honest, short, and SEO-friendly.
   If current metadata already works, skip.
2. Run `npm run lint` and `npm run build` from the repo root. Fix any TypeScript
   or ESLint errors introduced by the redesign. Do not silence rules without a
   good reason; fix root causes.
3. Visually sanity-check the page by starting dev server if possible (optional,
   but highly recommended) and verify no runtime console errors on component
   mount, round switching, or waitlist form idle state.

**Parent ACs covered:** AC12 (directly: build + lint); also AC13, AC14 via review.

**Priority:** high

**Status:** pending

**Test Requirements:**

- **TR10.1 (rule):** `npm run lint` exits with code 0.
  Evidence: command stdout/stderr capture.

- **TR10.2 (rule):** `npm run build` exits with code 0.
  Evidence: command stdout/stderr capture (last lines show "✓ Compiled successfully"
  or Next equivalent success, not error stack).

- **TR10.3 (rule, AC13 proxy):** A repository-wide grep for the following forbidden
  claim patterns returns 0 results in `src/` (allowing occurrences in copy-voice
  documentation only, not component render output):
  - "revolutionary", "game-changing", "seamless", "cutting-edge", "10x", "unlock",
    "supercharge", "disrupt", "synergy", "unprecedented", "world-class"
  - "Unlike Careers360", "outdated tools", "first AI", "better than", "the only"
  - Fabricated metric patterns: "accuracy", "success rate", "students helped",
    "testimonial", "thousands of", "millions of"
  (Note: this is a proxy for AC13. The reviewer will re-run.)
  Evidence: grep output count.

**Blocked By:** Tasks 1–9 (all code changes must land first).
**Unblock Condition:** Tasks 1–9 completed.
**Completion Evidence:**

---

## Overall dependency graph

```
Task 1 (Loop) ────────────────────────────────────────────┐
Task 2 (Hero) ────────────────────────────────────────────┤
Task 3 (Problem) ─────────────────────────────────────────┤
Task 4 (Case Study intro) ────────────────────────────────┤
Task 5 (Intelligence) ────────────────────────────────────┼─► Task 9 (page.tsx + navbar + analytics) ──► Task 10 (lint+build)
Task 6 (Vision) ──────────────────────────────────────────┤
Task 7 (Waitlist) ────────────────────────────────────────┤
Task 8 (Footer) ──────────────────────────────────────────┘
```

All of Tasks 1–8 are mutually non-overlapping on files and could in theory run
concurrently via delegation. However, since each task touches only one file and
the implementation is relatively serial (and to keep review simple), the
recommended execution order is 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10.
