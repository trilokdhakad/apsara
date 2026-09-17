import { z } from "zod"

export const counsellingOptions = ["mcc", "mp", "both", "other"] as const

export const waitlistSchema = z.object({
  email: z.email(),
  counselling: z.enum(counsellingOptions),
})

export type WaitlistInput = z.infer<typeof waitlistSchema>
