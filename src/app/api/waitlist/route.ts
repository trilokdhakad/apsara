import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase"
import { waitlistSchema } from "@/lib/waitlist"

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const parsed = waitlistSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and counselling system." }, { status: 400 })
  }

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    if (process.env.NODE_ENV !== "production") {
      console.info("waitlist (unconfigured)", parsed.data)
      return NextResponse.json({ ok: true, stored: false })
    }
    return NextResponse.json({ error: "Waitlist is not available yet." }, { status: 503 })
  }

  const { error } = await supabase.from("waitlist").insert({
    email: parsed.data.email.toLowerCase(),
    counselling: parsed.data.counselling,
  })

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, duplicate: true })
    }
    console.error("waitlist insert failed", error.message)
    return NextResponse.json({ error: "Could not join the waitlist." }, { status: 500 })
  }

  return NextResponse.json({ ok: true, stored: true })
}
