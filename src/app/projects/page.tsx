"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";
import { House, ArrowUpRight, Sun, Moon } from "lucide-react";
import { ShaderBackground } from "../components/shader-background";
import { TextReveal } from "../components/text-reveal";
import type { ShaderVariant } from "../components/shader-background";

const projects: ({
  title: string;
  description: string;
  href: string;
  image?: string;
  url?: string;
  github?: string;
  status: "running" | "down" | "building";
  stack?: string[];
  shader?: { variant: ShaderVariant; props: Record<string, unknown> };
})[] = [
  {
    title: "JEEIFY",
    description: "A full-stack JEE prep platform serving 100+ users with AI tutor, syllabus tracker, and more. Built with Next.js and Supabase, it provides a comprehensive dashboard for tracking syllabus progress, practicing 900+ PYQs, analyzing performance trends, and getting AI-powered doubt resolution — all synced across devices.",
    href: "/projects/jeeify",
    image: "/projects/3.png",
    url: "https://jeeify.vercel.app/",
    github: "https://github.com/ashish01-dev/jeeify",
    status: "running",
    stack: ["Next.js", "Tailwind", "Supabase", "Drizzle"],
    shader: { variant: "mesh-gradient", props: { colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"], distortion: 0.8, swirl: 0.3, speed: 0.4 } },
  },
  {
    title: "INNOVISION",
    description: "A platform that helps students choose the right stream after 10th & 12th through interest assessments, career path visualization, and curated guidance resources — turning confusion into clarity for one of life's biggest decisions.",
    href: "/projects/innovision",
    image: "/projects/4.png",
    url: "https://innovison.vercel.app/",
    status: "down",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    shader: { variant: "grain-gradient", props: { colors: ["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"], colorBack: "#000000", softness: 0.6, speed: 0.5 } },
  },
  {
    title: "WallX",
    description: "A curated wallpaper discovery platform featuring dynamic collections across categories — minimal, abstract, nature, and anime. Smart search, daily discovery, and community collections all wrapped in a performance-optimized browsing experience.",
    href: "/projects/wallx",
    image: "/placeholder-banner.svg",
    url: "#",
    status: "building",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    shader: { variant: "warp", props: { colors: ["#121212", "#9470ff", "#121212", "#8838ff"], speed: 0.4 } },
  },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 98 96" className={className || "size-4"} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
    </svg>
  );
}

function InfoTip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="relative flex items-center select-none">
      <div className="group relative flex">
        {children}
        <span className="absolute bottom-8 left-1/2 transform transition-all -translate-x-1/2 mb-2 w-max bg-white text-black font-medium text-xs rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 duration-100 pointer-events-none whitespace-nowrap">
          {text}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white" />
        </span>
      </div>
    </div>
  );
}

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
            <TextReveal
              text="A showcase of my work and side projects — from full-stack platforms to design systems."
              split="word"
              delay={0.15}
              stagger={0.04}
              blur={4}
              yOffset="30%"
              className="inline"
            />
          </div>

          <div className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={project.href}
                  className="group flex cursor-pointer flex-col gap-3 rounded-lg border border-border/20 bg-background/50 p-2 transition-all duration-200 hover:bg-background/80 hover:border-foreground/10 md:flex-row md:gap-3"
                >
                  {/* Image area — 22% width */}
                  <div className="relative w-full overflow-hidden rounded-md md:w-[22%] md:min-h-[130px] aspect-video md:aspect-auto">
                    {project.shader && (
                      <div className="absolute inset-0">
                        <ShaderBackground variant={project.shader.variant} {...project.shader.props} className="h-full w-full" />
                      </div>
                    )}
                    <Image
                      src={project.image!}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="relative h-full w-full object-contain object-left-bottom transition-all duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Content area — 78% width */}
                  <div className="flex w-full flex-col gap-1 md:w-[78%] md:gap-0">
                    {/* Title row with status + actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <h3 className="font-serif text-lg italic font-medium text-foreground truncate">
                          {project.title}
                        </h3>
                        {project.status === "running" ? (
                          <span className="inline-flex items-center gap-1 rounded-md bg-green-500/10 px-1.5 py-0.5 text-[10px] font-medium text-green-500 select-none">
                            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                            Running
                          </span>
                        ) : project.status === "down" ? (
                          <span className="inline-flex items-center gap-1 rounded-md bg-red-500/10 px-1.5 py-0.5 text-[10px] font-medium text-red-500 select-none">
                            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                            Down
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-500 select-none">
                            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-amber-600 dark:bg-amber-500" />
                            Building
                          </span>
                        )}
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5 px-1 text-base">
                        {project.url && project.url !== "#" && (
                          <InfoTip text="Live">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="cursor-pointer text-foreground/50 transition-colors duration-100 hover:text-foreground/80"
                            >
                              <ArrowUpRight className="size-4" />
                            </a>
                          </InfoTip>
                        )}
                        {project.github && (
                          <InfoTip text="GitHub">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="cursor-pointer text-foreground/50 transition-colors duration-100 hover:text-foreground/80"
                            >
                              <GithubIcon className="size-4" />
                            </a>
                          </InfoTip>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2 md:line-clamp-3">
                      {project.description}
                    </p>

                    {/* Skills */}
                    {project.stack && (
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border/30 px-2 py-0.5 text-[11px] font-medium text-foreground/50"
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
