"use client"

import { MotionConfig, motion } from "framer-motion"

const stages = [
  {
    num: "01",
    name: "Understand",
    desc: "Profile, goals, preferences, constraints",
  },
  {
    num: "02",
    name: "Research",
    desc: "Institutions, programs, rules, deadlines, historical data, current information",
  },
  {
    num: "03",
    name: "Reason",
    desc: "Eligibility, tradeoffs, uncertainty, realistic options",
  },
  {
    num: "04",
    name: "Plan",
    desc: "Ordered application / choice / admissions strategy",
  },
  {
    num: "05",
    name: "Act",
    desc: "Assist with the next concrete task",
  },
  {
    num: "06",
    name: "Monitor",
    desc: "Watch for meaningful changes",
  },
  {
    num: "07",
    name: "Re-plan",
    desc: "Update the strategy as conditions change",
  },
] as const

export function Loop() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="loop" className="bg-surface-slate border-b border-border/30">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
          <div className="grid gap-12 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-20">
            <div>
              <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                The architecture
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-1 text-[0.68rem] font-medium tracking-wide text-muted-foreground/90">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/60"></span>
                Long-term product architecture
              </span>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight leading-[1.15]">
                The Apsara Loop.
                <br />
                One continuous decision system.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-foreground/80 text-pretty max-w-2xl">
                Admissions modelled as one continuous loop — understand the
                student, research the landscape, reason through tradeoffs,
                plan strategy, act, monitor, and re-plan the moment conditions shift.
              </p>
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="relative hidden sm:block">
              <div className="grid grid-cols-7 gap-2">
                {stages.map((stage, idx) => (
                  <div key={stage.num} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="relative z-10 rounded-xl border border-border/60 bg-white p-4"
                    >
                      <span className="text-[0.68rem] font-medium tabular-nums tracking-wide text-muted-foreground">
                        {stage.num}
                      </span>
                      <p className="mt-2 text-sm font-semibold tracking-tight">
                        {stage.name}
                      </p>
                      <p className="mt-1.5 text-[0.7rem] leading-5 text-muted-foreground">
                        {stage.desc}
                      </p>
                    </motion.div>
                    {idx < stages.length - 1 ? (
                      <div className="pointer-events-none absolute inset-y-0 left-full z-0 hidden w-2 items-center sm:flex">
                        <div className="relative h-px w-full bg-border/55">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[3px] border-l-[5px] border-y-transparent border-l-border/55"></div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 200 28"
                    className="h-7 w-[28rem] text-border/55"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 24 C 40 4, 160 4, 196 24"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M189 18 L196 24 L189 30"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-white px-3 py-1 text-[0.68rem] font-medium tracking-wide text-muted-foreground/90">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50"></span>
                  Conditions change · strategy re-enters at Understand
                </span>
              </div>
            </div>

            <div className="relative sm:hidden">
              <div className="relative space-y-0 pl-6">
                <div className="absolute left-[0.45rem] top-0 h-full w-px bg-border/50"></div>
                {stages.map((stage, idx) => (
                  <motion.div
                    key={stage.num}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="relative py-5"
                  >
                    <div className="absolute -left-6 top-6 flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full border border-border/70 bg-white">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground/60"></div>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-white p-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[0.68rem] font-medium tabular-nums tracking-wide text-muted-foreground">
                          {stage.num}
                        </span>
                        <p className="text-sm font-semibold tracking-tight">
                          {stage.name}
                        </p>
                      </div>
                      <p className="mt-1.5 text-[0.76rem] leading-5 text-muted-foreground">
                        {stage.desc}
                      </p>
                    </div>
                    {idx === stages.length - 1 ? (
                      <div className="mt-4 flex items-start gap-3">
                        <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border/60 bg-white">
                          <svg viewBox="0 0 16 16" className="h-3 w-3 text-muted-foreground" fill="none">
                            <path
                              d="M12.5 5.5 V 2.5 H 9.5"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.5 2.5 C 10 4.5, 7 6, 4.5 5.5 C 2.5 5, 2 3.5, 2 2"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <p className="text-[0.72rem] leading-5 text-muted-foreground">
                          Re-plan re-enters at <span className="font-medium text-foreground/70">Understand</span> — revised preferences, new data, and changed constraints fold into the next cycle.
                        </p>
                      </div>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}

/*

Responsive structure and connector notes
========================================

Desktop (≥sm, horizontal flow)
------------------------------
- A 7-column CSS grid (`grid-cols-7 gap-2`) lays out the stage nodes side-by-side.
  Each node is a compact `rounded-xl border` box with subtle padding, intentionally
  smaller than a "card" so the row reads as one connected system, not seven
  separate UI blocks.

Stage-to-stage connectors (stages 01→02, 02→03 … 06→07)
-------------------------------------------------------
- Each column sits inside a `relative` wrapper. A `pointer-events-none` pseudo
  column sits at `left-full` of stages 01–06: it is a `sm:flex` flex container
  centering a 1px horizontal `h-px` line (`bg-border/70`) plus a tiny CSS
  triangle on the right end (`border-y-transparent / border-l-*`). This gives
  a thin, subtle arrow between each adjacent stage pair.

Loop-back connector (stage 07 → 01)
-----------------------------------
- Because the 7 nodes span the full width of the 5xl wrapper, a curved SVG path
  is rendered *below* the row (not over the top) so it does not compete with
  the stage content. The `<svg viewBox="0 0 200 28" … preserveAspectRatio="none">`
  draws a soft quadratic Bézier curve from the left side back to the right, with
  an arrowhead on the right end. Below the curve, a small pill badge explains
  the semantic: "Conditions change · strategy re-enters at Understand". This
  combination (curved line + caption) makes the cycle visible without requiring
  the stage boxes themselves to carry decorative chrome.

Mobile (<sm, vertical flow)
---------------------------
- The horizontal grid is `hidden sm:block`, and a sibling vertical layout is
  `sm:hidden`. Stages stack with `pl-6` so a single thin 1px vertical line
  (`.absolute left-[0.45rem] top-0 h-full w-px bg-border/60`) runs as the
  trunk of the tree. Each stage has a small circular connector dot sitting on
  that line at `top-6`, giving the standard "flow / tree" left-border style.
  No separate arrow glyphs are drawn between items — the vertical line itself
  reads as the connector, which keeps the stack clean.

Loop-back on mobile
-------------------
- The final stage (07 Re-plan) appends a small inline block underneath itself:
  a rounded icon chip (a refresh-like SVG path drawn manually, no Lucide import
  used) plus one sentence that explicitly states the cycle re-enters
  "Understand". This is textually explicit because a curved SVG path wrapping
  a tall vertical stack would be harder to parse on a narrow viewport.

Animation
---------
- `framer-motion` is used with `MotionConfig reducedMotion="user"` so the
  motion layer is always polite. Each stage runs a tiny `opacity: 0 → 1,
  y: 8 → 0` transition when it enters the viewport (`whileInView` +
  `viewport={{ once: true }}`), staggered by index. On mobile the stagger
  animates the vertical stack; on desktop it animates the horizontal row.
  Because `once: true`, the animation does not replay if the user scrolls
  back up.

*/
