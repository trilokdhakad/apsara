"use client"

import { buttonVariants } from "@/components/ui/button"
import { capture } from "@/lib/analytics"
import { cn } from "cn"

export function Hero() {
  return (
    <section className="bg-surface-warm border-b border-border/30">
      <div className="mx-auto w-full max-w-5xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="flex items-start justify-between">
          <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-muted-foreground/80">
            Apsara
          </p>
          <p className="hidden text-[0.68rem] text-muted-foreground/60 sm:block">
            Preview · validation prototype
          </p>
        </div>

        <h1 className="mt-10 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-balance sm:text-6xl sm:leading-[1]">
          Admissions are not a search problem.
          <br />
          <span className="text-foreground/70">
            They are a decision process that keeps changing.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/75 text-pretty sm:text-lg sm:leading-8">
          Admissions are shaped by eligibility, rules, deadlines, and changing options. Apsara is building an intelligent system that navigates the process, from understanding what is realistic to updating strategy as conditions change.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#case"
            onClick={() => capture({ name: "hero_cta_clicked", properties: { cta: "explore_proof" } })}
            className={cn(buttonVariants({ size: "lg", variant: "default" }))}
          >
            Explore the proof
          </a>
          <a
            href="#waitlist"
            onClick={() => capture({ name: "hero_cta_clicked", properties: { cta: "join_waitlist" } })}
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            Join the waitlist
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-2 border-t border-border/30 pt-5 text-[0.68rem] text-muted-foreground/70">
          <span>Primary proof · real anonymized Indian MCC + MP counselling</span>
          <span className="h-1 w-1 rounded-full bg-border"></span>
          <span>Broader architecture · admissions systems across contexts</span>
        </div>
      </div>
    </section>
  )
}
