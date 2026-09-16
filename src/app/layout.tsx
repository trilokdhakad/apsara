import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Counsel — counselling strategy for medical admissions",
  description:
    "A counselling strategy that can change as MCC and state rounds unfold. Built around a real, anonymized medical admissions case.",
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
