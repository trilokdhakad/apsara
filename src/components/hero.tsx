import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export function Hero() {
  return (
    <section className="bg-surface-warm border-b border-border/40">
      <div className="mx-auto w-full max-w-5xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="flex items-start justify-between">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground/90">
            Apsara
          </p>
          <p className="hidden text-xs text-muted-foreground/70 sm:block">
            Admissions intelligence, in preview.
          </p>
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl sm:leading-[1.02]">
          The intelligence layer for college admissions.
        </h1>

        <div className="mt-8 grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-16">
          <p className="text-lg leading-8 text-foreground/80 text-pretty max-w-md">
            Admissions generate enormous amounts of structured data. Students still navigate them with
            spreadsheets, anecdotes, and static predictors that go stale the moment rounds begin.
          </p>
          <p className="text-base leading-7 text-muted-foreground text-pretty max-w-md">
            Apsara turns historical cutoffs, current seat availability, student constraints, and round-by-round
            movement into a single, continuously updated strategy. This page is the proof of concept — not the finished platform.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#case" className={cn(buttonVariants({ size: "lg", variant: "default" }))}>
            Inspect the real case
          </a>
          <a href="#intelligence" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
            How the system works
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/40 pt-6 text-xs text-muted-foreground/80">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/60"></span>
            <span>Primary proof: real anonymized Indian MCC + MP counselling</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50"></span>
            <span>Broader vision: admissions systems across countries</span>
          </div>
        </div>
      </div>
    </section>
  )
}
