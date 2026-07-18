"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NotFoundGlitch } from "./components/not-found/glitch";
import { House, Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
        aria-label="Toggle theme"
      >
        <Sun className="size-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}

export default function NotFoundPage() {
  return (
    <div className="relative min-h-dvh w-full overflow-x-clip">
      <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full border-x bg-background">
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4">
          <header className="w-full px-8">
            <nav className="flex justify-between">
              <Link
                href="/"
                className="group bg-muted flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors"
              >
                <House className="size-4 opacity-60 transition-opacity group-hover:opacity-80" />
              </Link>
              <ThemeToggle />
            </nav>
          </header>
        </div>
        <div className="px-4 py-16">
          <NotFoundGlitch />
        </div>
      </div>
    </div>
  );
}
