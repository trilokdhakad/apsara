import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Apsara — The intelligence layer for navigating college admissions",
  description:
    "Apsara is building an intelligent, end-to-end system for navigating college admissions. Real proof with an anonymized Indian medical counselling case study.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  )
}
