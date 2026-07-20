import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Geist_Mono } from "next/font/google";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Scale from "@/components/scale";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const neu = localFont({
  src: "./fonts/NeueMachina-Ultrabold.otf",
  variable: "--font-neu",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Abhishek Rathore",
  description:
    "I build cool things from zero. Full-stack developer focused on clean interfaces, smooth animations, and shipping modern experiences.",
  openGraph: {
    title: "Abhishek Rathore",
    description:
      "I build cool things from zero. Full-stack developer focused on clean interfaces, smooth animations, and shipping modern experiences.",
    type: "website",
    locale: "en",
    siteName: "Abhishek Rathore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Rathore",
    description:
      "I build cool things from zero. Full-stack developer shipping modern experiences.",
    creator: "@abhiishekz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${neu.variable} ${instrumentSerif.variable} ${manrope.variable} ${geistMono.variable} ${manrope.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-dvh w-full overflow-clip">
            <div className="relative mx-auto max-w-3xl">
              <Scale count={50} />
            </div>
            <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full overflow-y-clip border-x">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          strategy="lazyOnload"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
