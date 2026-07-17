"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { House, ArrowUpRight, Sun, Moon } from "lucide-react";

const projectsData: Record<
  string,
  {
    title: string;
    description: string;
    url: string;
    stack: { name: string; type: string; src?: string }[];
    screenshots: { src: string; label: string }[];
    details: string;
    prev?: { title: string; href: string };
    next?: { title: string; href: string };
  }
> = {
  "divine-canvas": {
    title: "Divine Canvas",
    description: "An e-commerce platform offering premium, sacred vector paintings.",
    url: "https://divinecanvas.art/",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Motion", type: "motion", src: "/skills/motion.svg" },
      { name: "Payload", type: "payload" },
      { name: "TanStack Query", type: "ts" },
      { name: "Zod SVG Icon", type: "zod" },
      { name: "TanStack Forms", type: "forms" },
      { name: "PostgreSQL", type: "pg" },
    ],
    screenshots: [{ src: "/projects/divine-canvas/home.svg", label: "Home" }],
    details:
      "Built an e-commerce store for Divine Canvas that sells sacred vector artwork. It's got a proper product catalog with filtering, a smooth cart and checkout flow, and a headless CMS running on Payload so they can manage inventory and orders on their own.",
    next: { title: "rvyu.", href: "/projects/rvyu" },
  },
  rvyu: {
    title: "rvyu.",
    description: "A place for developers to share their side projects and get feedback from peers.",
    url: "https://rvyu.dev/",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Motion", type: "motion", src: "/skills/motion.svg" },
      { name: "Drizzle", type: "drizzle" },
      { name: "PostgreSQL", type: "pg" },
    ],
    screenshots: [{ src: "/rvyu.svg", label: "Home" }],
    details:
      "Built rvyu. — a platform where developers can share side projects and get meaningful feedback from the community. Features include project showcases, peer reviews, and a clean browsing experience.",
    prev: { title: "Divine Canvas", href: "/projects/divine-canvas" },
    next: { title: "The Leansuite", href: "/projects/theleansuite" },
  },
  theleansuite: {
    title: "The Leansuite",
    description: "SaaS website and dashboard with a custom CMS to manage blogs and pages.",
    url: "https://theleansuite.com/",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Motion", type: "motion", src: "/skills/motion.svg" },
      { name: "Sanity", type: "sanity" },
    ],
    screenshots: [{ src: "/projects/theleansuite/theleansuite.svg", label: "Dashboard" }],
    details:
      "Built a SaaS platform for The Leansuite with a public website, dashboard, and a custom headless CMS using Sanity to manage blogs, pages, and content seamlessly.",
    prev: { title: "rvyu.", href: "/projects/rvyu" },
  },
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full" aria-label="Toggle theme">
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

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = slug ? projectsData[slug] : undefined;

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-dvh w-full overflow-clip">
      <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full overflow-y-clip border-x bg-background">
        {/* Nav */}
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

        {/* Breadcrumb */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 flex items-center gap-2 font-mono text-xs text-foreground/40">
              <Link href="/" className="hover:text-foreground transition-colors">/</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-foreground transition-colors">projects</Link>
              <span className="text-foreground/20">/</span>
              <span className="text-foreground/60">{slug}</span>
            </div>

            {/* Title & Visit */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-serif text-4xl text-foreground/80 italic">{project.title}</h1>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-accent/5 transition-colors"
              >
                <ArrowUpRight className="size-3.5" />
                Visit
              </a>
            </div>

            {/* Stack */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.stack.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-1 rounded-full border border-black/5 dark:border-white/5 bg-background px-2.5 py-1 text-[10px] font-medium text-foreground/60 shadow-sm"
                >
                  {s.type === "motion" ? (
                    <Image src={s.src || "/skills/motion.svg"} alt={s.name} width={12} height={12} className="size-3 dark:invert" />
                  ) : (
                    <span className="size-3 flex items-center justify-center text-[8px] font-bold rounded bg-foreground/5">
                      {s.name[0]}
                    </span>
                  )}
                  {s.name}
                </span>
              ))}
            </div>

            {/* Screenshots */}
            <div className="mt-8 space-y-8">
              {project.screenshots.map((shot) => (
                <div key={shot.label}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/50">
                    <Image src={shot.src} alt={shot.label} fill className="object-cover object-top" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground/40 font-mono">{shot.label}</p>
                </div>
              ))}
            </div>

            {/* Details */}
            <p className="mt-8 text-base leading-relaxed text-foreground/60 max-w-2xl">
              {project.details}
            </p>

            {/* Prev / Next */}
            <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
              <div>
                {project.prev ? (
                  <>
                    <p className="text-[10px] font-mono text-foreground/30 mb-1">Previous</p>
                    <Link
                      href={project.prev.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <span>{"<-"}</span>
                      <span className="font-serif italic">{project.prev.title}</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] font-mono text-foreground/30 mb-1">Previous</p>
                    <span className="font-serif italic text-sm text-foreground/30">&mdash; End &mdash;</span>
                  </>
                )}
              </div>
              <div className="text-right">
                {project.next ? (
                  <>
                    <p className="text-[10px] font-mono text-foreground/30 mb-1">Next</p>
                    <Link
                      href={project.next.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <span className="font-serif italic">{project.next.title}</span>
                      <span>{"->"}</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] font-mono text-foreground/30 mb-1">Next</p>
                    <span className="font-serif italic text-sm text-foreground/30">&mdash; End &mdash;</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator />

        {/* Copyright */}
        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full space-y-4">
          <div className="relative flex flex-col items-center justify-between px-8 sm:flex-row">
            <p className="font-mono text-xs text-foreground/40">&copy; 2026 All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
