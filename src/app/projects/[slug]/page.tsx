"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { House, ArrowUpRight, Sun } from "lucide-react";

const projectsData: Record<
  string,
  {
    title: string;
    description: string;
    url: string;
    stack: { name: string; type: string }[];
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
      { name: "Motion", type: "motion" },
      { name: "Payload", type: "payload" },
      { name: "TanStack Query", type: "ts" },
      { name: "Zod", type: "zod" },
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
      { name: "Motion", type: "motion" },
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
      { name: "Motion", type: "motion" },
      { name: "Sanity", type: "sanity" },
    ],
    screenshots: [{ src: "/projects/theleansuite/theleansuite.svg", label: "Dashboard" }],
    details:
      "Built a SaaS platform for The Leansuite with a public website, dashboard, and a custom headless CMS using Sanity to manage blogs, pages, and content seamlessly.",
    prev: { title: "rvyu.", href: "/projects/rvyu" },
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
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
              <button
                className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
                aria-label="Toggle theme"
              >
                <Sun className="size-5" />
              </button>
            </nav>
          </header>
        </div>

        {/* Breadcrumb */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-black/40">
            <Link href="/" className="hover:text-black transition-colors">
              /
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-black transition-colors">
              projects
            </Link>
            <span className="text-black/20">/</span>
            <span className="text-black/60">{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
          </div>

          {/* Title & Link */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-serif text-4xl text-black/80 italic">{project.title}</h1>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-black/60 hover:bg-accent/5 transition-colors"
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
                className="inline-flex items-center gap-1 rounded-full border border-black/5 bg-white px-2.5 py-1 text-[10px] font-medium text-black/60 shadow-sm"
              >
                {s.type === "motion" ? (
                  <Image src="/skills/motion.svg" alt={s.name} width={12} height={12} className="size-3" />
                ) : (
                  <span className="size-3 flex items-center justify-center text-[8px] font-bold rounded bg-black/5">
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
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/5">
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-2 text-xs font-medium text-black/40 font-mono">{shot.label}</p>
              </div>
            ))}
          </div>

          {/* Details */}
          <p className="mt-8 text-base leading-relaxed text-black/60 max-w-2xl">
            {project.details}
          </p>

          {/* Prev / Next */}
          <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
            <div>
              {project.prev && (
                <>
                  <p className="text-[10px] font-mono text-black/30 mb-1">Previous</p>
                  <Link
                    href={project.prev.href}
                    className="text-sm font-medium text-black/60 hover:text-black transition-colors"
                  >
                    &mdash; End &mdash;
                  </Link>
                </>
              )}
            </div>
            <div className="text-right">
              {project.next && (
                <>
                  <p className="text-[10px] font-mono text-black/30 mb-1">Next</p>
                  <Link
                    href={project.next.href}
                    className="text-sm font-medium text-black/60 hover:text-black transition-colors"
                  >
                    {project.next.title}
                    <span className="ml-1 inline-block">→</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full px-8 text-center">
          <p className="text-xs text-black/20">&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
