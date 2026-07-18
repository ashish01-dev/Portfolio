"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { House, MoveRight, Sun, Moon } from "lucide-react";

const blogs = [
  {
    title: "things i believe in",
    date: "July 17, 2026",
    href: "/blogs/things-i-believe-in",
    image: "/placeholder-banner.svg",
  },
];

function Separator() {
  return (
    <div className="w-full">
      <div className="relative z-0 mx-auto h-px max-w-3xl overflow-visible">
        <div className="bg-border absolute left-full h-px w-full" />
        <div className="bg-border h-px w-full" />
        <span className="ring-foreground/10 absolute -top-0.5 -left-0.5 size-1.5 rounded-full bg-background ring-1" />
        <span className="ring-foreground/10 absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-background ring-1" />
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
                {mounted && theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </button>
            </nav>
          </header>
        </div>

        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 flex-1 px-8">
          <div className="mb-8 space-y-2">
            <h2 className="font-serif text-3xl text-foreground/80 italic">thoughts</h2>
            <p className="text-base tracking-wider text-foreground/40">
              Stuff I write about design, code, and building things.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.title} href={blog.href} className="group relative block">
                <div className="h-full space-y-4 py-2">
                  <div className="relative perspective-[2000px]">
                    <div
                      className="border-border bg-muted/30 relative aspect-video w-full overflow-hidden rounded-sm border"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "translateX(8px) translateY(-6px) rotateX(5deg) rotateY(-12deg)",
                      }}
                    >
                      <Image src={blog.image} alt={blog.title} fill className="rounded-sm object-cover" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-sm border-x border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-foreground/40">{blog.date}</span>
                    </div>
                    <h3 className="relative block overflow-visible">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:4px_4px] bg-clip-text font-medium text-transparent italic select-none"
                      >
                        {blog.title}
                      </span>
                      <span className="block max-w-[90%] text-sm leading-tight font-medium text-foreground/60 italic transition-colors duration-200 group-hover:text-foreground">
                        {blog.title}
                      </span>
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Separator />

        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full space-y-4">
          <div className="relative flex flex-col items-center justify-between px-8 sm:flex-row">
            <p className="font-mono text-xs text-foreground/40">&copy; 2026 All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
