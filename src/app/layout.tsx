import type { Metadata } from "next"
import { Manrope, Instrument_Serif, Geist_Mono } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { SwitchProvider } from "@/components/Context/SwitchContext"
import "../styles/globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Ashish Kumar Singh — Developer",
    template: "%s | Ashish Kumar Singh",
  },
  description: "I design conversion-focused websites and scalable product interfaces for startups. I'm Ashish, an India-based designer & developer who specializes in building high-converting websites for B2C and B2B brands.",
  openGraph: {
    title: "Ashish Kumar Singh — Developer",
    description: "Designer & Developer",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh bg-background text-foreground">
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: { background: "#18181b", color: "#e4e4e7", border: "1px solid #3f3f46", fontSize: "14px" },
          }}
        />
        <SwitchProvider>
          {children}
        </SwitchProvider>
      </body>
    </html>
  )
}