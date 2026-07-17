"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  House,
  MessageCircle,
  PenLine,
  ChevronDown,
  Sun,
  MoveRight,
  Plus,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "size-4 fill-black dark:fill-white"}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "size-4 fill-black dark:fill-white"}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className={className || "size-4"} />;
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "size-4 fill-black dark:fill-white"}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://github.com/ashish-kumar-singh",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://x.com/ashish_k_singh",
    icon: XIcon,
    label: "X",
  },
  {
    href: "https://www.instagram.com/ashish.kumar.singh",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ashish-kumar-singh",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
];

const projects = [
  {
    title: "Divine Canvas",
    description: "An e-commerce platform offering premium, sacred vector paintings.",
    href: "/projects/divine-canvas",
    image: "/projects/divine-canvas/home.svg",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Motion", type: "image", src: "/skills/motion.svg" },
      { name: "Payload", type: "payload" },
    ],
    more: "+3",
  },
  {
    title: "rvyu.",
    description: "A place for developers to share their side projects and get feedback from peers.",
    href: "/projects/rvyu",
    image: "/rvyu.svg",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Motion", type: "image", src: "/skills/motion.svg" },
      { name: "Drizzle", type: "drizzle" },
    ],
    more: "+3",
  },
  {
    title: "The Leansuite",
    description: "SaaS website and dashboard with a custom CMS to manage blogs and pages.",
    href: "/projects/theleansuite",
    image: "/projects/theleansuite/theleansuite.svg",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Motion", type: "image", src: "/skills/motion.svg" },
    ],
    more: "+2",
  },
];

const blogs = [
  {
    title: "things i believe in",
    date: "July 17, 2026",
    href: "/blogs/things-i-believe-in",
    image: "/placeholder-banner.svg",
  },
];

const skills = [
  { name: "Next.js", icon: "next" },
  { name: "TypeScript", icon: "ts" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "node" },
  { name: "React", icon: "react" },
  { name: "Framer Motion", icon: "image", src: "/skills/motion.svg" },
  { name: "Prisma", icon: "prisma" },
  { name: "Supabase", icon: "supabase" },
  { name: "Figma", icon: "figma" },
];

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "size-5"} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const footerSocials = [
  { href: "https://github.com/ashish-kumar-singh", icon: GithubIcon, label: "Github", rotate: -20 },
  { href: "https://www.instagram.com/ashish.kumar.singh", icon: InstagramIcon, label: "Instagram", rotate: -10 },
  { href: "https://x.com/ashish_k_singh", icon: XIcon, label: "Twitter", rotate: -2 },
  { href: "https://www.linkedin.com/in/ashish-kumar-singh", icon: LinkedinIcon, label: "LinkedIn", rotate: 10 },
  { href: "mailto:ashish@example.com", icon: MailIcon, label: "Mail", rotate: 20 },
];

function Ruler() {
  const marks = [];
  for (let i = 0; i <= 2450; i += 50) {
    marks.push(
      <div
        key={i}
        className="text-foreground/25 absolute inline-flex gap-1 text-xs font-medium right-full mr-1"
        style={{ top: `calc(var(--spacing) * ${i === 0 ? 5 : i / 4 + 5})` }}
      >
        <p className="rotate-90">{i}</p>
        <p>-</p>
      </div>
    );
  }
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{marks}</div>
    </div>
  );
}

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

function Nav() {
  return (
    <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4">
      <header className="w-full px-8">
        <nav className="flex justify-between">
          <Link
            href="/"
            className="group bg-muted flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors"
          >
            <House className="size-4 opacity-60 transition-opacity group-hover:opacity-80" />
          </Link>
          <div className="flex gap-1">
            <button
              data-variant="outline"
              className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
              aria-label="Toggle theme"
            >
              <Sun className="size-5" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

function StackIcon({ name, icon, src }: { name: string; icon: string; src?: string }) {
  return (
    <motion.div
      className="z-20 cursor-grab touch-none select-none active:cursor-grabbing"
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileTap={{ scale: 1.1 }}
      title={name}
    >
      {src ? (
        <Image src={src} alt={name} width={40} height={40} className="h-8 w-8 md:h-10 md:w-10" />
      ) : (
        <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-muted text-[10px] font-bold text-foreground/60">
          {name.slice(0, 2)}
        </div>
      )}
    </motion.div>
  );
}

function ProjectStackBadge({ stack, more }: { stack: any[]; more?: string }) {
  return (
    <div className="mt-auto flex items-center pt-2">
      {stack.map((s, i) => (
        <div
          key={s.name}
          className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
          style={{ marginLeft: i > 0 ? -8 : 0, zIndex: stack.length - i }}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center">
            {s.type === "image" ? (
              <Image src={s.src} alt={s.name} width={16} height={16} className="h-4 w-4 rounded-full object-contain" />
            ) : s.type === "next" ? (
              <svg viewBox="0 0 180 180" className="size-4">
                <circle cx="90" cy="90" r="90" fill="transparent" />
                <circle cx="90" cy="90" r="87" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="90" y="100" textAnchor="middle" fontSize="60" fill="currentColor">N</text>
              </svg>
            ) : s.type === "tailwind" ? (
              <svg viewBox="0 0 54 33" className="size-4">
                <path
                  fill="#06b6d4"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.148 3.653C30.042 12.7 32.4 15.1 40.5 15.1c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.148-3.653C36.958 3.4 34.6 1 27 1zM13.5 15.1C6.3 15.1 1.8 18.7 0 25.9c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.148 3.653C16.542 27.8 18.9 30.2 27 30.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.148-3.653C23.458 18.5 21.1 16.1 13.5 15.1z"
                />
              </svg>
            ) : s.type === "payload" ? (
              <svg viewBox="0 0 64 64" className="size-4">
                <rect width="64" height="64" rx="8" fill="currentColor" opacity="0.2" />
                <text x="32" y="40" textAnchor="middle" fontSize="20" fill="currentColor">P</text>
              </svg>
            ) : s.type === "drizzle" ? (
              <svg viewBox="0 0 64 64" className="size-4">
                <rect width="64" height="64" rx="8" fill="currentColor" opacity="0.2" />
                <text x="32" y="40" textAnchor="middle" fontSize="16" fill="currentColor">Dz</text>
              </svg>
            ) : (
              <span className="text-[10px] font-semibold text-black/60 dark:text-white/60">{s.name.slice(0, 2)}</span>
            )}
          </div>
        </div>
      ))}
      {more && (
        <div
          className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white text-[10px] font-medium text-black/40 shadow-sm dark:border-white/5 dark:bg-white/5"
          style={{ marginLeft: -8, zIndex: 0 }}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center">
            <span className="text-[10px] font-semibold text-black/60 dark:text-white/60">{more}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative min-h-dvh w-full overflow-clip">
      <Ruler />
      <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full overflow-y-clip border-x bg-background">
        <Nav />

        {/* Banner Section */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-0">
          <div className="relative mb-2 w-full mask-x-from-90% mask-b-from-95% mask-radial-from-75%">
            <div className="relative">
              <Image
                src="/placeholder-banner.svg"
                alt="Banner"
                width={1240}
                height={900}
                className="h-[200px] w-full rounded-none object-cover sm:h-[270px]"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <p className="text-center font-serif text-base text-white italic sm:text-xl">
                  I am gonna be hokage one day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 pt-0">
          <div className="-mt-10 flex-col">
            <div className="mr-4 mb-4 ml-4 flex items-center justify-between sm:mr-8 sm:ml-8">
              <div className="relative">
                <Image
                  src="/decorations/cyber-katana.svg"
                  alt="decoration katana"
                  width={500}
                  height={500}
                  className="absolute z-10 size-24 sm:size-28"
                />
                <div
                  className="relative z-0 h-24 w-24 shrink-0 overflow-hidden rounded-full border bg-white bg-cover bg-center sm:h-28 sm:w-28"
                  role="img"
                  aria-label="Ashish Kumar Singh"
                  style={{ backgroundImage: "url(/me.svg)" }}
                />
              </div>
              <div className="mt-1 flex shrink-0 flex-col items-end gap-1">
                <p className="flex items-center gap-1.5 font-mono text-[10px] font-medium whitespace-nowrap text-black/70 sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Available for work
                </p>
                <div className="flex flex-col items-end font-mono text-[10px] text-black/40 sm:text-xs">
                  <span className="text-[9px] text-black/20 sm:text-[10px]">// 5.5h ahead</span>
                </div>
              </div>
            </div>

            <div className="w-full flex-col px-4 text-left sm:flex sm:flex-row sm:items-end sm:justify-between sm:px-8">
              <div className="px-0">
                <h1 className="mb-0 font-serif text-2xl font-medium tracking-[0.01em] italic sm:text-4xl">
                  Ashish Kumar Singh
                </h1>
                <div className="font-manrope flex flex-wrap items-center gap-1 text-xs font-medium text-black/40 sm:text-sm">
                  <p>Designer &amp; developer &amp; Developer — I</p>
                </div>
              </div>
              <div className="mt-3 flex justify-start gap-1 px-0 sm:mt-0 sm:gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    data-variant="secondary"
                    className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80 size-8 rounded-full touch-manipulation active:opacity-75"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 px-4 text-base leading-loose tracking-wider text-black/50 sm:px-8">
              I design{" "}
              <span className="font-medium text-black">conversion-focused</span> websites and{" "}
              <span className="font-medium text-black">scalable product interfaces</span> for{" "}
              <span className="font-medium text-black">startups</span>. I&apos;m Ashish, an{" "}
              <span className="font-medium text-black">India-based designer &amp; developer</span>{" "}
              who specializes in building{" "}
              <span className="font-medium text-black">high-converting</span> websites for{" "}
              <span className="font-medium text-black">B2C</span> and{" "}
              <span className="font-medium text-black">B2B</span> brands.
            </div>

            <div className="mt-4 flex items-center px-4 sm:px-8">
              <a
                data-variant="outline"
                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 h-8 rounded-md gap-1.5 px-3"
                href="https://x.com/messages/compose?recipient_id=ashish"
                target="_blank"
              >
                <MessageCircle className="size-4 opacity-40" />
                Twitter DM
              </a>
              <span className="mx-1 text-xs font-medium text-black/20">OR</span>
              <a
                data-variant="outline"
                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 h-8 rounded-md gap-1.5 px-3"
                href="mailto:ashish@example.com"
              >
                <PenLine className="size-4 opacity-40" />
                Email
              </a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Professional Experience */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <h2 className="mb-2 font-serif text-xl text-black/50">Professional Experience</h2>

          <div className="group mt-4 rounded-2xl transition-all duration-300 hover:border-black/5">
            <div
              className="flex cursor-pointer flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              onClick={() => setExpanded(!expanded)}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/10 sm:h-14 sm:w-14 flex items-center justify-center bg-muted">
                  <span className="text-xs font-bold text-black/40">A</span>
                </div>
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-sm font-bold text-black sm:text-base">
                      Angrio Technologies
                    </h3>
                    <ChevronDown
                      className={`size-3.5 shrink-0 text-black/50 transition-all duration-300 sm:size-4 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <p className="text-xs font-medium whitespace-nowrap text-black/50 sm:text-sm">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-1 text-start sm:ml-auto sm:flex-col sm:items-end sm:justify-center sm:text-end">
                <p className="inline-flex items-center gap-2 text-[10px] font-medium text-black/50 sm:justify-end sm:text-sm">
                  <span className="hidden h-px w-12 bg-linear-to-l from-black/10 to-transparent sm:block md:w-20" />
                  Jan 2025 - Dec 2025
                </p>
                <p className="text-[10px] tracking-tight text-black/30 normal-case sm:text-xs">
                  India, Remote
                </p>
              </div>
            </div>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 text-sm leading-relaxed text-black/70 pt-4 md:text-base">
                  <p>
                    Started as an <span className="font-semibold">Intern</span> on January 18, 2025,
                    focused on crafting responsive and high-converting landing pages. Due to strong
                    performance and technical growth, I was promoted to Full-Stack Developer in April
                    2025.
                  </p>
                  <ul className="space-y-3 pl-1">
                    <li className="flex items-start gap-3">
                      <span className="size-1.5 shrink-0 rounded-full bg-black/40 mt-2" />
                      <p className="text-base text-black/50">
                        Developed high-performance landing pages and complex interactive dashboards
                        with a focus on UX.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="size-1.5 shrink-0 rounded-full bg-black/40 mt-2" />
                      <p className="text-base text-black/50">
                        Implemented robust headless CMS architectures using Sanity for flexible
                        content management.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="size-1.5 shrink-0 rounded-full bg-black/40 mt-2" />
                      <p className="text-base text-black/50">
                        Built scalable full-stack features with Supabase for real-time data
                        persistence and authentication.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="size-1.5 shrink-0 rounded-full bg-black/40 mt-2" />
                      <p className="text-base text-black/50">
                        Engineered a core browser extension for &apos;Trakkar.in&apos; (Company
                        SaaS) to handle automated time tracking and cross-browser screenshot capture.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Proof of Work */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl text-black/50">Proof of work</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 hover:text-black/90"
            >
              ALL
              <MoveRight className="size-3" />
            </Link>
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
                  <ProjectStackBadge stack={project.stack} more={project.more} />
                </div>
              </Link>
            ))}
          </div>

          <h5 className="font-serif mt-4 bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text py-1 text-center text-3xl font-bold whitespace-nowrap text-transparent opacity-30 md:text-6xl">
            Shipping More Soon
          </h5>
        </div>

        <Separator />

        {/* Stack I use */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <h2 className="mb-6 font-serif text-xl text-black/50">Stack I use</h2>

          <div className="relative grid grid-cols-4 justify-items-center gap-8 sm:grid-cols-6 md:grid-cols-8 md:justify-items-start lg:grid-cols-12">
            <span className="pointer-events-none absolute -top-12 right-0 size-12 -rotate-12 font-mono text-[10px] font-medium text-black/30">
              drag me :D
            </span>
            <svg
              className="pointer-events-none absolute -top-12 right-15 size-10 rotate-30 text-black/30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 15l7-7 7 7" />
            </svg>

            {skills.map((skill) => (
              <StackIcon key={skill.name} name={skill.name} icon={skill.icon} src={skill.src} />
            ))}
          </div>
        </div>

        <Separator />

        {/* My Thoughts */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-serif text-xl text-black/50 italic">My Thoughts</h2>
            <Link
              href="/blogs"
              className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 hover:text-black/90"
            >
              ALL
              <MoveRight className="size-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="rounded-sm object-cover"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-sm border-x border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-black/40">{blog.date}</span>
                    </div>
                    <h3 className="relative block overflow-visible">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:4px_4px] bg-clip-text font-medium text-transparent italic select-none"
                      >
                        {blog.title}
                      </span>
                      <span className="block max-w-[90%] text-sm leading-tight font-medium text-black/60 italic transition-colors duration-200 group-hover:text-black">
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

        {/* CTA / Footer */}
        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full flex-col px-6 sm:flex sm:items-center sm:justify-between sm:px-12">
          <p className="mb-4 text-center font-serif text-2xl text-pretty italic opacity-50 sm:mb-3 md:text-xl">
            If you&apos;ve read this far, you might be interested in what I do.
          </p>

          <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
            <a
              href="https://cal.com/ashish-kumar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="relative cursor-pointer rounded-lg border font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow bg-background text-foreground border-border h-auto px-3 py-2">
                <span className="relative block size-full text-sm tracking-wide text-black">
                  <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
                    <div className="h-5 w-5 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/me.svg"
                        alt="Ashish Kumar Singh"
                        width={20}
                        height={20}
                        className="h-full w-full rounded-full bg-zinc-900 object-cover"
                      />
                    </div>
                    <div className="absolute left-[24px] flex -translate-x-full transform items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <Plus className="size-3" />
                      <div className="mr-2 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[8px]">
                        You
                      </div>
                    </div>
                    <span className="relative ml-0 block text-sm font-bold whitespace-nowrap normal-case transition-all duration-300 group-hover:ml-4">
                      Book a call
                    </span>
                  </div>
                </span>
              </button>
            </a>
          </div>

          <p className="py-2 text-center text-sm font-medium text-black/30 uppercase">or</p>

          <div className="group flex items-center justify-center flex-wrap gap-1">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background flex w-13 cursor-pointer flex-col items-center gap-1 rounded-lg border border-black/20 p-2 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                style={{ transform: `rotate(${s.rotate}deg)` as any }}
              >
                <s.icon className="size-5" />
                <p className="text-[8px] font-bold text-black/50">{s.label}</p>
              </a>
            ))}
          </div>
        </div>

        <Separator />

        {/* Quote & Footer */}
        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full px-8 text-center">
          <p className="text-2xl font-serif text-black/10">改善</p>
          <p className="mt-4 text-sm leading-relaxed text-black/30 italic max-w-md mx-auto">
            &quot;You have a right to perform your prescribed duty, but you are not entitled to the
            fruits of actions.&quot;
          </p>
          <p className="mt-2 text-xs text-black/20 font-medium">Bhagavad Gita</p>
          <p className="mt-6 text-xs text-black/20">&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
