"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { House, Sun, Moon } from "lucide-react";

const beliefs = [
  "how smart a person is just how fast he can learn something new",
  "it is not hard, it is just new",
  "iteration in the right direction x consistency = freedom",
  "how capable you are depends on where your fav dopamine hit comes from",
  "you can just do things",
  "preserving time and energy is what matters, rest can come back",
  "the greatest of all time have things written down in a book but you choose not to read",
  '"nothing helps; i must help myself, or i am finished" - neitzsche',
  "code and media are the best forms of leverage",
  "you are the average of five people rule stands true everywhere in all spheres of life",
  "the opinions you think are your own are almost never really your own, it's always conditioned unless it's a fact",
  "everything in your life today is a result of the butterfly effect",
  "being fast with what you do is always better - high agency above all",
  "reading, writing, meditating, exercising has resulted in great things for whoever tried",
  "you are dying daily, today is the last today",
];

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const { theme, setTheme } = useTheme();

  if (slug !== "things-i-believe-in") {
    notFound();
  }

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
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </button>
            </nav>
          </header>
        </div>

        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-foreground/40">
            <Link href="/" className="hover:text-foreground transition-colors">/</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-foreground transition-colors">blogs</Link>
            <span className="text-foreground/20">/</span>
            <span className="text-foreground/60">things-i-believe-in</span>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/50 mb-8">
            <Image src="/placeholder-banner.svg" alt="Things I Believe In" fill className="object-cover" />
          </div>

          <h1 className="font-serif text-3xl text-foreground/80 italic mb-2">things i believe in</h1>
          <p className="font-mono text-xs text-foreground/40 mb-8">July 17, 2026</p>

          <ul className="space-y-4">
            {beliefs.map((belief, i) => (
              <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground/60">
                <span className="size-1.5 shrink-0 rounded-full bg-foreground/30 mt-2" />
                {belief}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm font-medium text-foreground/30 italic">more on the way..</p>
        </div>

        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full">
          <div className="relative flex flex-col items-center justify-between px-8 sm:flex-row">
            <p className="font-mono text-xs text-foreground/40">&copy; 2026 All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
