export type AnalyticsEvent =
  | { name: "waitlist_submitted"; properties: { counselling: string } }
  | { name: "case_round_changed"; properties: { round: string } }

export function capture(event: AnalyticsEvent) {
  if (typeof window === "undefined") return
  const posthog = window.posthog
  if (!posthog) return
  posthog.capture(event.name, event.properties)
}

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, string>) => void
    }
  }
}
