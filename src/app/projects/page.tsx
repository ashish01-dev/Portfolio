"use client";

import Image from "next/image";
import Link from "next/link";
import { House, MoveRight, Sun } from "lucide-react";

const projects = [
  {
    title: "Divine Canvas",
    description: "An e-commerce platform offering premium, sacred vector paintings.",
    href: "/projects/divine-canvas",
    image: "/projects/divine-canvas/home.svg",
    stack: [{ n: "N", type: "next" }, { t: "T", type: "tailwind" }, { m: "M", type: "motion" }],
    more: "+3",
  },
  {
    title: "rvyu.",
    description: "A place for developers to share their side projects and get feedback from peers.",
    href: "/projects/rvyu",
    image: "/rvyu.svg",
    stack: [{ n: "N", type: "next" }, { t: "T", type: "tailwind" }, { m: "M", type: "motion" }],
    more: "+3",
  },
  {
    title: "The Leansuite",
    description: "SaaS website and dashboard with a custom CMS to manage blogs and pages.",
    href: "/projects/theleansuite",
    image: "/projects/theleansuite/theleansuite.svg",
    stack: [{ n: "N", type: "next" }, { t: "T", type: "tailwind" }, { m: "M", type: "motion" }],
    more: "+2",
  },
];

function Separator() {
  return (
    <div className="w-full">
      <div className="relative z-0 mx-auto h-px max-w-3xl overflow-visible">
        <div className="bg-border absolute left-full h-px w-full" />
        <div className="bg-border h-px w-full" />
        <span className="ring-foreground/10 absolute -top-0.5 -left-0.5 size-1.5 rounded-full bg-[#f9f9f9] ring-1 dark:bg-zinc-800" />
        <span className="ring-foreground/10 absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-[#f9f9f9] ring-1 dark:bg-zinc-800" />
      </div>
    </div>
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
              <button
                className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
                aria-label="Toggle theme"
              >
                <Sun className="size-5" />
              </button>
            </nav>
          </header>
        </div>

        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 flex-1 px-8">
          <div className="mb-8 space-y-2">
            <h2 className="font-serif text-3xl text-black/80 italic">proof of work</h2>
            <p className="text-base tracking-wider text-black/40">
              A showcase of my work and side projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group flex cursor-pointer flex-col gap-4 rounded-lg pb-4 transition-shadow duration-300 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-4">
                  <h4 className="text-base font-semibold text-black">{project.title}</h4>
                  <p className="w-[calc(100%-1.5rem)] text-sm text-black/50">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center pt-2">
                    {project.stack.map((s: any, i: number) => (
                      <div
                        key={i}
                        className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
                        style={{ marginLeft: i > 0 ? -8 : 0, zIndex: project.stack.length - i }}
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                          <span className="text-[10px] font-semibold text-black/60">{s.n || s.t || s.m}</span>
                        </div>
                      </div>
                    ))}
                    {project.more && (
                      <div
                        className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
                        style={{ marginLeft: -8, zIndex: 0 }}
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                          <span className="text-[10px] font-semibold text-black/60">{project.more}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Separator />

        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full px-8 text-center">
          <p className="text-xs text-black/20">&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
