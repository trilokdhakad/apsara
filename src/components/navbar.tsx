import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/25 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-[0.88rem] font-semibold tracking-[0.02em] text-foreground">
          Apsara
        </a>
        <nav className="flex items-center gap-6 text-[0.82rem] text-muted-foreground">
          <a href="#problem" className="hidden hover:text-foreground sm:inline">
            Problem
          </a>
          <a href="#case" className="hidden hover:text-foreground sm:inline">
            Proof
          </a>
          <a href="#intelligence" className="hidden hover:text-foreground sm:inline">
            Intelligence
          </a>
          <a href="#waitlist" className={cn(buttonVariants({ size: "sm" }))}>
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  )
}
