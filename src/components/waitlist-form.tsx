"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { capture } from "@/lib/analytics"
import { counsellingOptions, waitlistSchema } from "@/lib/waitlist"
import { cn } from "cn"

const labels: Record<(typeof counsellingOptions)[number], string> = {
  mcc: "MCC",
  mp: "Madhya Pradesh",
  both: "Both",
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
          : "You are on the waitlist. We will write when there is something worth using.",
      )
    } catch {
      setStatus("error")
      setMessage("Network error. Try again.")
    }
  }

  return (
    <section id="waitlist" className="mx-auto w-full max-w-5xl px-6 py-8 pb-28">
      <div className="max-w-lg">
        <h2 className="text-3xl font-semibold tracking-tight">Join the waitlist</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          If this problem is familiar — a child, a rank, and a choice list that goes stale every
          round — leave an email. We are validating whether this is worth building next.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
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
            <legend className="text-sm font-medium">Counselling you care about</legend>
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
          <Button type="submit" size="lg" disabled={status === "submitting" || status === "done"}>
            {status === "submitting" ? "Joining…" : status === "done" ? "Joined" : "Request access"}
          </Button>
          {message ? (
            <p className={cn("text-sm", status === "error" ? "text-destructive" : "text-muted-foreground")} role="status">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
