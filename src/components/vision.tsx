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
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-surface-ink-muted">
              The opportunity
            </p>
            <h2 className="mt-8 text-4xl font-semibold tracking-tight leading-[1.05] sm:text-5xl sm:leading-[1.02]">
              One intelligence architecture.
              <br />
              <span className="text-surface-ink-muted">Every admissions system.</span>
            </h2>
            <p className="mt-8 text-base leading-8 text-surface-ink-muted max-w-md text-pretty">
              The long-term product is not built for one country. It is built for the shape of the decision:
              the data each system exposes, the constraints it imposes, and the student inside it.
            </p>
            <p className="mt-5 text-sm leading-7 text-surface-ink-muted/80 max-w-md text-pretty">
              Different systems are modelled as different data and decision environments — not as a single
              generic prediction engine pretending every country works the same way.
            </p>
          </div>

          <div className="space-y-3 sm:pt-2">
            {systems.map((system) => (
              <div
                key={system.label}
                className="rounded-xl border border-border-ink/80 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold tracking-tight text-surface-ink-foreground">
                    {system.label}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.68rem] font-medium tracking-wide ${
                      system.status.startsWith("Real")
                        ? "border-surface-ink-foreground/25 text-surface-ink-foreground/90"
                        : "border-border-ink text-surface-ink-muted"
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm leading-6 text-surface-ink-muted/90">
                  {system.shape.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <span className="mt-[0.55rem] inline-block h-1 w-1 shrink-0 rounded-full bg-surface-ink-muted/60"></span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="pt-2 text-[0.72rem] leading-5 text-surface-ink-muted/60 max-w-md">
              International cases are illustrative architectures. The underlying admissions engine does not exist for them yet.
              Only the Indian case uses verified research data.
            </p>
          </div>
        </div>

        <div className="mt-28 border-t border-border-ink/60 pt-10">
          <p className="max-w-3xl text-lg leading-9 text-surface-ink-foreground/80 text-pretty">
            &ldquo;Students should not need a different spreadsheet, a different predictor, and a different consultant for every country they apply to. They need one layer that can reason across the systems that matter to them.&rdquo;
          </p>
          <p className="mt-6 text-xs tracking-[0.14em] uppercase text-surface-ink-muted/70">
            — Apsara, working thesis
          </p>
        </div>
      </div>
    </section>
  )
}
