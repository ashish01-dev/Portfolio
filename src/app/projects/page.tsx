"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";
import { House, MoveRight, Sun, Moon } from "lucide-react";

const projects = [
  {
    title: "JEEIFY",
    description: "JEEIFY is a JEE preparation assistant website.",
    href: "/projects/jeeify",
    image: "/projects/3.png",
    badge: "100+ users!",
    stack: ["Next.js", "Tailwind", "Supabase", "Drizzle"],
  },
  {
    title: "INNOVISION",
    description: "A platform that helps students choose the right stream after 10th & 12th.",
    href: "/projects/innovision",
    image: "/projects/4.png",
    badge: "Down!",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Coming Soon",
    href: "#",
    comingSoon: true,
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

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  useState(() => {});

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

export default function ProjectsPage() {
  return (
    <div className="relative min-h-dvh w-full overflow-clip">
      <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full overflow-y-clip border-x bg-background">
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

        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 flex-1 px-8">
          <div className="mb-8 space-y-2">
            <h2 className="font-serif text-3xl text-foreground/80 italic">Projects</h2>
            <p className="text-base tracking-wider text-foreground/40">
              A showcase of my work and side projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {project.comingSoon ? (
                  <div className="group flex flex-col gap-4 pb-4 pointer-events-none">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-dashed border-foreground/20 bg-muted/30 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-serif italic text-foreground/20 -rotate-12">Coming Soon</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-foreground/30">{project.title}</h4>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={project.href}
                    className="group flex cursor-pointer flex-col gap-4 pb-4"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={project.image!}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover object-top"
                      />
                      {project.badge && (
                        <span className={`absolute bottom-2 right-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm ${project.badge === "100+ users!" ? "bg-green-500/90" : "bg-red-500/90"}`}>
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-4">
                      <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                      <p className="w-[calc(100%-1.5rem)] text-sm text-foreground/50">{project.description}</p>
                    </div>
                  </Link>
                )}
              </motion.div>
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
