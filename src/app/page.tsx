import { CaseStudy } from "@/components/case-study"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Vision } from "@/components/vision"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CaseStudy />
        <Vision />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}
