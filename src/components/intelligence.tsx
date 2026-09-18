export function Intelligence() {
  const dataLayer = [
    "Historical cutoffs and allotment outcomes",
    "Current seat availability and vacancy movement",
    "Category, domicile, and reservation rules",
    "Student preferences, budget, and geography",
    "Tuition, cost, and scholarship information",
    "Round timing, deadlines, and freeze windows",
  ]

  const modelLayer = [
    { label: "Statistical models", detail: "Historical patterns and cutoff distributions." },
    { label: "Prediction models", detail: "Likelihood of allotment at each rank and seat." },
    { label: "Optimization", detail: "Ordering choices to maximize realistic outcomes." },
    { label: "Constraint solving", detail: "Budget, eligibility, geography, and preference limits." },
    { label: "Retrieval", detail: "Finding comparable colleges and past cases." },
  ]

  const strategyLayer = [
    { step: "01", label: "Ordered working set", detail: "Stretch, core, and floor in true preference order — not a flat list." },
    { step: "02", label: "Round-aware revision", detail: "After each round, the strategy re-reads what actually moved." },
    { step: "03", label: "Explainable changes", detail: "Each addition, removal, or reorder has a reason tied to data." },
    { step: "04", label: "Continuous updates", detail: "New vacancy data, a changed rule, or a clarified preference — the strategy adapts." },
  ]

  return (
    <section id="intelligence" className="bg-surface-ink text-surface-ink-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-surface-ink-muted">
              Intelligence
            </p>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight leading-[1.15]">
              Structured data
              <br />
              plus decision models.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-surface-ink-foreground/80 text-pretty max-w-2xl">
              Apsara is built around structured admissions data and decision models. The pipeline is the product: data, context, rules, and conditions enter one reasoning layer — and a concrete, ordered strategy comes out.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center rounded-full border border-border-ink/60 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-surface-ink-muted">
                  Admissions data
                </span>
                <span className="inline-flex items-center rounded-full border border-border-ink/60 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-surface-ink-muted">
                  Student context
                </span>
                <span className="inline-flex items-center rounded-full border border-border-ink/60 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-surface-ink-muted">
                  Rules / constraints
                </span>
                <span className="inline-flex items-center rounded-full border border-border-ink/60 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-surface-ink-muted">
                  Historical patterns
                </span>
                <span className="inline-flex items-center rounded-full border border-border-ink/60 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-surface-ink-muted">
                  Current conditions
                </span>
              </div>
              <span className="text-surface-ink-muted/60 text-sm leading-none">↓</span>
              <span className="inline-flex items-center rounded-full border border-border-ink/70 bg-white/[0.06] px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-surface-ink-foreground/75">
                Models / reasoning
              </span>
              <span className="text-surface-ink-muted/60 text-sm leading-none">↓</span>
              <span className="inline-flex items-center rounded-full border border-border-ink/70 bg-white/[0.06] px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-surface-ink-foreground/75">
                Decision strategy
              </span>
              <span className="text-surface-ink-muted/60 text-sm leading-none">↓</span>
              <span className="inline-flex items-center rounded-full border border-border-ink/70 bg-white/[0.06] px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-surface-ink-foreground/75">
                Explanation / next action
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          <div className="rounded-2xl border border-border-ink/80 bg-white/[0.03]">
            <div className="flex flex-col gap-4 border-b border-border-ink/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-surface-ink-muted">
                  Layer 01
                </span>
                <h3 className="text-base font-semibold tracking-tight text-surface-ink-foreground/95">Historical and current admissions data</h3>
              </div>
              <span className="text-xs text-surface-ink-muted max-w-[18rem] sm:text-right">
                Everything admissions systems publish — structured.
              </span>
            </div>
            <div className="grid gap-x-8 gap-y-3 px-6 py-5 sm:grid-cols-2">
              {dataLayer.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[0.55rem] inline-block h-1 w-1 shrink-0 rounded-full bg-surface-ink-foreground/30"></span>
                  <span className="text-sm leading-6 text-surface-ink-foreground/75">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border-ink/80 bg-white/[0.03]">
            <div className="flex flex-col gap-4 border-b border-border-ink/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-surface-ink-muted">
                  Layer 02
                </span>
                <h3 className="text-base font-semibold tracking-tight text-surface-ink-foreground/95">Models that interpret the data</h3>
              </div>
              <span className="text-xs text-surface-ink-muted max-w-[18rem] sm:text-right">
                Not one model. A composition of statistical and decision models.
              </span>
            </div>
            <div className="divide-y divide-border-ink/60 px-6 py-2">
              {modelLayer.map((item) => (
                <div key={item.label} className="grid gap-3 py-4 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-8">
                  <span className="text-sm font-medium pt-0.5 text-surface-ink-foreground/90">{item.label}</span>
                  <p className="text-sm leading-6 text-surface-ink-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-surface-ink-foreground/80 bg-surface-ink-foreground text-surface-ink">
            <div className="flex flex-col gap-4 border-b border-surface-ink/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-surface-ink/50">
                  Layer 03
                </span>
                <h3 className="text-base font-semibold tracking-tight">A strategy that can be acted on</h3>
              </div>
              <span className="text-xs text-surface-ink/55 max-w-[18rem] sm:text-right">
                The output is not a prediction. It is a decision.
              </span>
            </div>
            <div className="grid gap-0 divide-y divide-surface-ink/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {strategyLayer.map((item, idx) => (
                <div key={item.step} className={`flex gap-5 py-5 ${idx % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                  <span className="text-xs font-medium tabular-nums tracking-wide text-surface-ink/45 pt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-surface-ink/60">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
