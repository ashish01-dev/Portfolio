"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";
import { House, Sun, Moon } from "lucide-react";
import { ShaderBackground } from "../components/shader-background";
import type { ShaderVariant } from "../components/shader-background";

const projects: ({
  title: string;
  description: string;
  href: string;
  image?: string;
  live?: boolean;
  stack?: string[];
  shader?: { variant: ShaderVariant; props: Record<string, unknown> };
})[] = [
  {
    title: "JEEIFY",
    description: "A full-stack JEE prep platform serving 100+ users with AI tutor, syllabus tracker, and more.",
    href: "/projects/jeeify",
    image: "/projects/3.png",
    live: true,
    stack: ["Next.js", "Tailwind", "Supabase", "Drizzle"],
    shader: { variant: "mesh-gradient", props: { colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"], distortion: 0.8, swirl: 0.3, speed: 0.4 } },
  },
  {
    title: "INNOVISION",
    description: "A platform that helps students choose the right stream after 10th & 12th.",
    href: "/projects/innovision",
    image: "/projects/4.png",
    live: false,
    stack: ["Next.js", "TypeScript", "Tailwind"],
    shader: { variant: "grain-gradient", props: { colors: ["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"], colorBack: "#000000", softness: 0.6, speed: 0.5 } },
  },
  {
    title: "WallX",
    description: "A curated wallpaper platform with dynamic collections and smart categorization.",
    href: "/projects/wallx",
    image: "/placeholder-banner.svg",
    live: false,
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    shader: { variant: "warp", props: { colors: ["#121212", "#9470ff", "#121212", "#8838ff"], speed: 0.4 } },
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

        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 flex-1 px-8">
          <div className="mb-8 space-y-2">
            <h2 className="font-serif text-3xl text-foreground/80 italic">Projects</h2>
            <p className="text-base tracking-wider text-foreground/40">
              A showcase of my work and side projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={i === projects.length - 1 && projects.length % 2 === 1 ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:justify-self-center" : ""}
              >
                <Link
                  href={project.href}
                  className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all duration-300 hover:border-foreground/20 hover:shadow-sm"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    {project.shader && (
                      <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90">
                        <ShaderBackground variant={project.shader.variant} {...project.shader.props} className="h-full w-full" />
                      </div>
                    )}
                    <Image
                      src={project.image!}
                      alt={project.title}
                      width={600}
                      height={338}
                      className="relative h-full w-full object-contain object-bottom p-2 transition-all duration-500 group-hover:scale-105"
                    />
                    {project.live ? (
                      <span className="absolute bottom-2 right-2 rounded-full bg-green-500/90 px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm">
                        Running
                      </span>
                    ) : (
                      <span className="absolute bottom-2 right-2 rounded-full bg-red-500/90 px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm">
                        Down
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                    <p className="text-sm text-foreground/50">{project.description}</p>
                    {project.stack && (
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 rounded-full border border-black/5 dark:border-white/5 bg-background px-2 py-0.5 text-[10px] font-medium text-foreground/60 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
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
