import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium tracking-tight">
          Counsel
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#case" className="hidden hover:text-foreground sm:inline">
            Case
          </a>
          <a href="#vision" className="hidden hover:text-foreground sm:inline">
            Product
          </a>
          <a href="#waitlist" className={cn(buttonVariants({ size: "sm" }))}>
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  )
}
