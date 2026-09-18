import { CaseStudy } from "@/components/case-study"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Intelligence } from "@/components/intelligence"
import { Loop } from "@/components/loop"
import { Navbar } from "@/components/navbar"
import { Problem } from "@/components/problem"
import { Vision } from "@/components/vision"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Loop />
        <CaseStudy />
        <Intelligence />
        <Vision />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}
