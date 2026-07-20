import Container from "@/components/container";
import Footer from "@/components/sections/footer";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import Divider from "@/components/divider";
import Home from "@/components/icons/home";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import "./(frontend)/globals.css";

export default function NotFound() {
  return (
    <ThemeProvider>
      <div className="flex min-h-dvh flex-col">
        <Container>
          <header className="w-full px-8">
            <nav className="flex justify-between">
              <Link
                href="/"
                className="bg-muted group flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors"
              >
                <Home className="size-4 opacity-60 transition-opacity group-hover:opacity-80" />
              </Link>
              <ThemeToggle />
            </nav>
          </header>
        </Container>
        <Divider />

        <Container className="flex flex-1 px-8">
          <main className="flex flex-1 flex-col items-center justify-center gap-8">
            <div className="relative" style={{ perspective: "800px" }}>
              <div
                className="flex items-center justify-center"
                style={{
                  transform: "rotateX(55deg) rotateZ(45deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute size-32 bg-black/10 dark:bg-white/10"
                  style={{ transform: "translateZ(32px)" }}
                />
                <div
                  className="absolute size-32 origin-right bg-black/15 dark:bg-white/15"
                  style={{ transform: "rotateY(-90deg) translateX(-32px)" }}
                />
                <div
                  className="absolute size-32 origin-bottom bg-black/20 dark:bg-white/20"
                  style={{ transform: "rotateX(90deg) translateZ(-32px)" }}
                />
                <span
                  className="relative font-serif text-8xl font-bold text-black/10 italic dark:text-white/10"
                  style={{ transform: "translateZ(33px)" }}
                >
                  404
                </span>
              </div>
            </div>

            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-medium text-black dark:text-white">
                Looks like you wandered off
              </h2>
              <p className="text-sm text-black/50 dark:text-white/50">
                This page doesn&apos;t exist — or it&apos;s still being built.
              </p>
            </div>

            <Button asChild variant={"outline"}>
              <Link href="/">
                <Home className="size-4 opacity-60" />
                Go back home
              </Link>
            </Button>
          </main>
        </Container>

        <Divider />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
