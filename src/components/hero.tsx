import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-sm text-muted-foreground">Indian medical admissions</p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-14">
        Counselling is a strategy problem, not a college list problem.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground text-pretty">
        Students do not need another cutoff dump. They need an ordered plan that can change when
        rounds, vacancies, and constraints change.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#case" className={cn(buttonVariants({ size: "lg" }))}>
          Inspect the case study
        </a>
        <a href="#waitlist" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
          Join the waitlist
        </a>
      </div>
    </section>
  )
}
