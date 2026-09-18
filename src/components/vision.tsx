export function Vision() {
  const systems = [
    {
      label: "India · NEET / MCC / State counselling",
      status: "Real case · verified",
      shape: [
        "Rank and category position",
        "Eligibility and seat type",
        "Round-by-round vacancy",
        "Ordered choice list",
      ],
    },
    {
      label: "UK · UCAS and similar",
      status: "Illustrative",
      shape: [
        "Academic profile and predicted grades",
        "Program and institutional entry requirements",
        "Course fit and institution preference",
        "Limited application slots",
      ],
    },
    {
      label: "US · Undergraduate admissions",
      status: "Illustrative",
      shape: [
        "Academic and extracurricular profile",
        "Institutional and program requirements",
        "Cost, aid, and scholarship consideration",
        "Application strategy and deadline sequencing",
      ],
    },
  ]

  return (
    <section id="vision" className="bg-surface-ink text-surface-ink-foreground border-b border-black">
      <div className="mx-auto w-full max-w-5xl px-6 pt-16 pb-24 sm:pt-20 sm:pb-32">
        <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-surface-ink-muted">
          The opportunity
        </p>

        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight leading-[1.05] sm:text-5xl sm:leading-[1]">
          One intelligence architecture.
          <br />
          Every admissions system.
        </h2>

        <div className="mt-10 grid gap-14 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:gap-16">
          <div className="sm:pt-1">
            <h3 className="text-2xl font-semibold tracking-tight leading-[1.15] max-w-md">
              Not built for one country.
              <br />
              <span className="text-surface-ink-muted">Built for the shape of the decision.</span>
            </h3>
            <p className="mt-6 text-base leading-8 text-surface-ink-muted max-w-md text-pretty">
              Every system exposes different data, imposes different constraints, and has different deadlines. The underlying decision problem — realistic options, ordered preference, timing, and uncertainty — is the same structure.
            </p>
          </div>

          <div className="space-y-2 border-t border-border-ink/40 pt-5">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-surface-ink-muted/75">
              Evidence of the same structure
            </p>
            {systems.map((system) => (
              <div
                key={system.label}
                className="rounded-lg border border-border-ink/60 px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-[0.88rem] font-semibold tracking-tight text-surface-ink-foreground/95">
                    {system.label}
                  </h4>
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium tracking-wide shrink-0 ${
                      system.status.startsWith("Real")
                        ? "border-surface-ink-foreground/25 text-surface-ink-foreground/90"
                        : "border-border-ink text-surface-ink-muted"
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[0.78rem] leading-5 text-surface-ink-muted/90">
                  {system.shape.map((line) => (
                    <li key={line} className="flex items-start gap-2 col-span-1">
                      <span className="mt-[0.45rem] inline-block h-1 w-1 shrink-0 rounded-full bg-surface-ink-muted/50"></span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="pt-3 text-[0.68rem] leading-5 text-surface-ink-muted/55 max-w-md">
              International systems are illustrative architectures. The engine does not exist for them yet. Only the Indian case uses verified research data.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-border-ink/60 pt-10">
          <p className="max-w-3xl text-lg leading-9 text-surface-ink-foreground/80 text-pretty">
            &ldquo;Students should not need a different spreadsheet, predictor, and consultant for every system. They need one layer that can reason across the systems that matter to them.&rdquo;
          </p>
          <p className="mt-6 text-[0.68rem] tracking-[0.14em] uppercase text-surface-ink-muted/70">
            — Apsara, working thesis
          </p>
        </div>
      </div>
    </section>
  )
}
