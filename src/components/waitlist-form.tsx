"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { capture } from "@/lib/analytics"
import { counsellingOptions, waitlistSchema } from "@/lib/waitlist"
import { cn } from "cn"

const labels: Record<(typeof counsellingOptions)[number], string> = {
  mcc: "MCC All-India",
  mp: "Madhya Pradesh",
  both: "MCC + MP",
  other: "Other admissions",
}

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [counselling, setCounselling] = useState<(typeof counsellingOptions)[number]>("both")
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = waitlistSchema.safeParse({ email, counselling })
    if (!parsed.success) {
      setStatus("error")
      setMessage("Enter a valid email.")
      return
    }

    setStatus("submitting")
    setMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      const body = (await response.json()) as { error?: string; duplicate?: boolean }
      if (!response.ok) {
        setStatus("error")
        setMessage(body.error ?? "Could not join the waitlist.")
        return
      }
      capture({ name: "waitlist_submitted", properties: { counselling: parsed.data.counselling } })
      setStatus("done")
      setMessage(
        body.duplicate
          ? "You are already on the waitlist."
          : "You are on the waitlist. We will write when there is something worth using for your admissions context.",
      )
    } catch {
      setStatus("error")
      setMessage("Network error. Try again.")
    }
  }

  return (
    <section id="waitlist" className="bg-white border-b border-border/40">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid gap-14 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">
              Join the waitlist
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight leading-[1.1] max-w-md">
              Want Apsara to work on your admissions problem?
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground max-w-md text-pretty">
              This is the proof of concept. The full admissions engine is not yet available for arbitrary students or
              international systems. We are validating demand before building it further.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground/85 max-w-md">
              If you — or someone you are advising — is facing a high-stakes admissions decision in the next
              cycle, leave an email and tell us which system matters. We will follow up when we can analyse it.
            </p>
          </div>
          <div>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium">Admissions you care about</legend>
                <div className="flex flex-wrap gap-2">
                  {counsellingOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCounselling(option)}
                      aria-pressed={counselling === option}
                      className={cn(
                        "rounded-lg border px-3 py-1.5 text-sm",
                        counselling === option
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:bg-muted",
                      )}
                    >
                      {labels[option]}
                    </button>
                  ))}
                </div>
              </fieldset>
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting" || status === "done"}
              >
                {status === "submitting"
                  ? "Joining…"
                  : status === "done"
                  ? "Joined the waitlist"
                  : "Request access"}
              </Button>
              {message ? (
                <p
                  className={cn(
                    "text-sm",
                    status === "error" ? "text-destructive" : "text-muted-foreground",
                  )}
                  role="status"
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
