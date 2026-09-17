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
    <section id="intelligence" className="bg-surface-slate border-b border-border/40">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid gap-14 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">
              Intelligence
            </p>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight leading-snug">
              Data.
              <br />
              Models.
              <br />
              Strategy.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-foreground/85 text-pretty max-w-2xl">
              The product story is not a chatbot. It is a pipeline: structured admissions data enters,
              multiple modelling layers interpret it, and an actionable, continuously-updated strategy comes out.
              Language models assist explanation — they do not decide the rank order.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <div className="rounded-2xl border border-border/80 bg-white">
            <div className="flex flex-col gap-4 border-b border-border/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-muted-foreground">
                  Layer 01
                </span>
                <h3 className="text-base font-semibold tracking-tight">Historical and current admissions data</h3>
              </div>
              <span className="text-xs text-muted-foreground max-w-[18rem] text-right">
                The raw material. Everything admissions systems publish, leak, or imply — structured.
              </span>
            </div>
            <div className="grid gap-x-8 gap-y-3 px-6 py-5 sm:grid-cols-2">
              {dataLayer.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[0.55rem] inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/40"></span>
                  <span className="text-sm leading-6 text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-white">
            <div className="flex flex-col gap-4 border-b border-border/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-muted-foreground">
                  Layer 02
                </span>
                <h3 className="text-base font-semibold tracking-tight">Models that interpret the data</h3>
              </div>
              <span className="text-xs text-muted-foreground max-w-[18rem] text-right">
                Not one model. A composition of statistical and decision models.
              </span>
            </div>
            <div className="divide-y divide-border/60 px-6 py-2">
              {modelLayer.map((item) => (
                <div key={item.label} className="grid gap-3 py-4 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-8">
                  <span className="text-sm font-medium pt-0.5">{item.label}</span>
                  <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-foreground/85 bg-foreground text-background">
            <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-background/60">
                  Layer 03
                </span>
                <h3 className="text-base font-semibold tracking-tight">A strategy that can be acted on</h3>
              </div>
              <span className="text-xs text-background/60 max-w-[18rem] sm:text-right">
                The output is not a prediction. It is a decision.
              </span>
            </div>
            <div className="grid gap-0 divide-y divide-white/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {strategyLayer.map((item, idx) => (
                <div key={item.step} className={`flex gap-5 py-5 ${idx % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                  <span className="text-xs font-medium tabular-nums tracking-wide text-background/55 pt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-background/65">{item.detail}</p>
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
