export function Problem() {
  const contrasts = [
    {
      label: "Fragmented",
      statement:
        "Cutoffs live in PDFs. Seat matrices in spreadsheets. Counselling rules buried in circulars. Nothing speaks to anything else.",
    },
    {
      label: "Static",
      statement:
        "A predictor or a cutoff list is a snapshot. The moment Round 1 closes, it is already wrong. The strategy needs to move with the round.",
    },
    {
      label: "Anecdotal",
      statement:
        "Advice is usually last year's story. Ranks shift. Reservations change. New colleges open. Anecdotes do not update.",
    },
    {
      label: "Unordered",
      statement:
        "The mistake is not missing a college. It is putting the wrong college first, or keeping a stretch option that blocks a real upgrade.",
    },
  ]

  return (
    <section id="problem" className="bg-white border-b border-border/40">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid gap-14 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">
              The problem
            </p>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight leading-snug">
              A list tells you what exists.
              <br />
              A prediction tells you what might happen.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-foreground/85 text-pretty max-w-2xl">
              Neither tells a student what to do. Admissions is a decision under uncertainty —
              constraints, preferences, seat movement, and deadlines all changing together.
              That is what Apsara is being built to reason about.
            </p>
            <div className="mt-12 space-y-0 border-t border-border/60">
              {contrasts.map((item, idx) => (
                <div
                  key={item.label}
                  className="grid gap-6 py-6 border-b border-border/60 sm:grid-cols-[minmax(0,8rem)_minmax(0,1fr)] sm:gap-12 first:pt-6 last:border-b-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium tracking-tight">{item.label}</span>
                  </div>
                  <p className="text-base leading-7 text-muted-foreground text-pretty max-w-xl">
                    {item.statement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
