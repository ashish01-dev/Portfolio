"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import GithubContributions from "./components/github-contributions";
import {
  House,
  MessageCircle,
  PenLine,
  ChevronDown,
  Sun,
  Moon,
  MoveRight,
} from "lucide-react";
import { NextJS, TypeScript, TailwindCSS, ReactIcon, Prisma, Supabase, Figma, Sanity, Drizzle } from "./components/icons";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 98 96" className={className || "size-4"} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 1227" className={className || "size-3"} fill="none">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "size-4"} fill="none">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "size-4"} fill="none">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://github.com/ashish01-dev", icon: GithubIcon, label: "GitHub" },
  { href: "https://x.com/TechMaster54321", icon: XIcon, label: "X" },
  { href: "https://www.instagram.com/ashish.kumar.singh", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.linkedin.com/in/ashish-kumar0406", icon: LinkedinIcon, label: "LinkedIn" },
];

const projects = [
  {
    title: "Divine Canvas",
    description: "An e-commerce platform offering premium, sacred vector paintings.",
    href: "/projects/divine-canvas",
    image: "/placeholder-banner.svg",
    stack: [
      { name: "Next.js", type: "icon" },
      { name: "Tailwind", type: "icon" },
      { name: "Motion", type: "image", src: "/skills/motion.png" },
      { name: "Supabase", type: "icon" },
    ],
  },
  {
    title: "rvyu.",
    description: "A place for developers to share their side projects and get feedback from peers.",
    href: "/projects/rvyu",
    image: "/placeholder-banner.svg",
    stack: [
      { name: "Next.js", type: "icon" },
      { name: "Tailwind", type: "icon" },
      { name: "Motion", type: "image", src: "/skills/motion.png" },
      { name: "Drizzle", type: "icon" },
    ],
    more: "+3",
  },
  {
    title: "The Leansuite",
    description: "SaaS website and dashboard with a custom CMS to manage blogs and pages.",
    href: "/projects/theleansuite",
    image: "/placeholder-banner.svg",
    stack: [
      { name: "Next.js", type: "icon" },
      { name: "Tailwind", type: "icon" },
      { name: "Motion", type: "image", src: "/skills/motion.png" },
      { name: "Supabase", type: "icon" },
    ],
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
  { name: "Next.js", type: "icon" },
  { name: "TypeScript", type: "icon" },
  { name: "Tailwind CSS", type: "icon" },
  { name: "React", type: "icon" },
  { name: "Supabase", type: "icon" },
  { name: "Drizzle", type: "icon" },
  { name: "Prisma", type: "icon" },
  { name: "Sanity", type: "icon" },
  { name: "Framer Motion", type: "image", src: "/skills/motion.png" },
  { name: "Figma", type: "icon" },
];

const footerSocials = [
  { href: "https://github.com/ashish01-dev", icon: GithubIcon, label: "Github", rotate: -20, z: "" },
  { href: "https://www.instagram.com/ashish.kumar.singh", icon: InstagramIcon, label: "Instagram", rotate: -10, z: "", popup: true },
  { href: "https://x.com/TechMaster54321", icon: XIcon, label: "Twitter", rotate: -2, z: "z-5" },
  { href: "https://www.linkedin.com/in/ashish-kumar0406", icon: LinkedinIcon, label: "LinkedIn", rotate: 10, z: "z-2" },
  { href: "mailto:ashish.jayshreeram@gmail.com", icon: (p: any) => (
    <svg viewBox="0 0 24 24" className={(p?.className) || "size-5"} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ), label: "Mail", rotate: 20, z: "z-1" },
];

function Ruler() {
  const marks = [];
  for (let i = 0; i <= 2450; i += 50) {
    marks.push(
      <div
        key={i}
        className="text-foreground/25 absolute inline-flex gap-1 text-xs font-medium right-full mr-1 pointer-events-none"
        style={{ top: `calc(var(--spacing) * ${i === 0 ? 5 : i / 4 + 5})` }}
      >
        <p className="rotate-90">{i}</p>
        <p>-</p>
      </div>
    );
  }
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{marks}</div>;
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
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    if (isAnimating.current || !buttonRef.current || !mounted) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const target = theme === "dark" ? "light" : "dark";

    document.documentElement.style.setProperty("--toggle-x", x + "px");
    document.documentElement.style.setProperty("--toggle-y", y + "px");

    if ((document as any).startViewTransition) {
      isAnimating.current = true;
      const t = (document as any).startViewTransition(() => setTheme(target));
      t.finished.finally(() => { isAnimating.current = false; });
    } else {
      isAnimating.current = true;
      setTheme(target);
      setTimeout(() => { isAnimating.current = false; }, 400);
    }
  };

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
      ref={buttonRef}
      onClick={handleToggle}
      className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}

const iconMap: Record<string, React.ComponentType<React.ComponentProps<"svg">>> = {
  "Next.js": NextJS,
  "TypeScript": TypeScript,
  "Tailwind CSS": TailwindCSS,
  "React": ReactIcon,
  "Prisma": Prisma,
  "Supabase": Supabase,
  "Figma": Figma,
  "Sanity": Sanity,
  "Drizzle": Drizzle,
};

function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (Icon) return <Icon className={className || "size-4"} />;
  return <span className="text-[10px] font-bold text-foreground/60">{name.slice(0, 2)}</span>;
}

function StackIcon({ name, type, src }: { name: string; type: string; src?: string }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      className="relative z-20 cursor-grab touch-none select-none active:cursor-grabbing"
      style={{ x, y }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragEnd={() => {
        animate(x, 0, { type: "spring", stiffness: 350, damping: 24, mass: 1.1 });
        animate(y, 0, { type: "spring", stiffness: 350, damping: 24, mass: 1.1 });
      }}
      whileTap={{ cursor: "grabbing", scale: 1.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {src ? (
        <div className="relative h-8 w-8 md:h-10 md:w-10">
          <Image src={src} alt={name} fill draggable={false} className="object-contain" />
        </div>
      ) : (
        <TechIcon name={name} className="h-8 w-8 text-black md:h-10 md:w-10 dark:text-white" />
      )}
      <motion.div
        className="pointer-events-none absolute -top-8 left-1/2 z-30 -translate-x-1/2 rounded-md border bg-background px-2 py-1 shadow-sm whitespace-nowrap"
        initial={{ opacity: 0, y: 4, scale: 0.9 }}
        animate={hovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 4, scale: 0.9 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <span className="text-[10px] font-medium text-foreground/70">{name}</span>
      </motion.div>
    </motion.div>
  );
}

function ProjectStackBadge({ stack, more }: { stack: any[]; more?: string }) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="mt-auto flex items-center pt-2">
      {stack.slice(0, 5).map((s) => {
        const isHovered = hoveredTech === s.name;
        return (
          <motion.div
            key={s.name}
            className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
            style={{ marginLeft: "-8px", zIndex: isHovered ? 10 : 1 }}
            animate={{ width: isHovered ? "auto" : "28px" }}
            onMouseEnter={() => setHoveredTech(s.name)}
            onMouseLeave={() => setHoveredTech(null)}
            layout
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center">
              {s.type === "image" ? (
                <Image src={s.src} alt={s.name} width={16} height={16} className="h-4 w-4 rounded-full object-contain" />
              ) : (
                <div className="flex h-4 w-4 items-center justify-center">
                  <TechIcon name={s.name} className="size-4" />
                </div>
              )}
            </div>
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  className="overflow-hidden pr-2 text-xs font-medium"
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: "auto", opacity: 1, marginLeft: "4px" }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span className="whitespace-nowrap">{s.name}</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
      {more && (
        <motion.div
          className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white text-[10px] font-medium text-black/40 shadow-sm hover:bg-white dark:border-white/5 dark:bg-white/5 dark:text-white/40"
          style={{ marginLeft: "-8px", zIndex: hoveredTech === "more" ? 10 : 1 }}
          animate={{ width: hoveredTech === "more" ? "auto" : "28px" }}
          onMouseEnter={() => setHoveredTech("more")}
          onMouseLeave={() => setHoveredTech(null)}
          layout
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center">
            <span className="text-[10px] font-semibold text-black/60 dark:text-white/60">{more}</span>
          </div>
          <AnimatePresence>
            {hoveredTech === "more" && (
              <motion.span
                className="overflow-hidden pr-2 text-xs font-medium"
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                animate={{ width: "auto", opacity: 1, marginLeft: "4px" }}
                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="whitespace-nowrap">more</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

function MotionSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ForeignWordTooltip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const padding = 14;
    setPos({
      x: clientX - rect.left + padding,
      y: clientY - rect.top + padding,
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block cursor-help py-8"
      onPointerEnter={(e) => {
        setVisible(true);
        updatePosition(e.clientX, e.clientY);
      }}
      onPointerMove={(e) => {
        if (!visible) return;
        updatePosition(e.clientX, e.clientY);
      }}
      onPointerLeave={() => setVisible(false)}
    >
      <div className="group relative">
        <span className="text-inner-shadow pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-clip-text text-center text-9xl font-bold whitespace-nowrap text-transparent italic select-none">
          अध्यात्म
        </span>
        <span className="text-inner-shadow z-10 block -translate-x-4 -translate-y-4 text-center text-9xl font-bold whitespace-nowrap text-[#808080] italic transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 hover:text-black dark:hover:text-white">
          अध्यात्म
        </span>
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="pointer-events-none absolute w-[260px] bg-background border-border z-10 rounded-xl border shadow-lg"
            style={{ left: pos.x, top: pos.y }}
          >
            <div className="space-y-2 p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-black dark:text-white">अध्यात्म</span>
                <span className="text-xs font-medium text-black/60 italic dark:text-white/60">/adhyātma/</span>
              </div>
              <div className="bg-border h-px w-full" />
              <div>
                <div className="text-xs font-medium tracking-wide text-black uppercase dark:text-white">noun</div>
                <p className="text-xs leading-relaxed font-medium text-black/50 dark:text-white/50">
                  The inner self; that which pertains to the spiritual essence of being — the journey inward toward self-realization.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollIndicator() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.div
      className="fixed right-6 top-1/2 z-50 hidden flex-col items-center gap-5 md:flex"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: hidden ? 0 : 1, x: hidden ? 20 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ translateY: "-50%" }}
    >
      <span className="font-serif text-sm font-medium italic tracking-[0.2em] text-foreground/20 [writing-mode:vertical-rl]">
        scroll down
      </span>
      <svg viewBox="0 0 24 80" className="size-6 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 0 Q 20 20, 12 40 Q 4 60, 12 80" />
        <path d="M6 68 L12 80 L18 68" />
      </svg>
      <motion.div
        className="mt-2 h-10 w-px bg-foreground/10"
        animate={{ height: [10, 28, 10] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [x, setX] = useState(100);
  const [showInstaPopup, setShowInstaPopup] = useState(false);
  const { theme } = useTheme();

  const animateX = useCallback(() => {
    let val = 100;
    const interval = setInterval(() => {
      val = 30 + Math.sin(Date.now() / 2000) * 30;
      setX(val);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = animateX();
    return cleanup;
  }, [animateX]);

  return (
    <div className="relative min-h-dvh w-full overflow-clip">
      <ScrollIndicator />
      <div className="relative mx-auto max-w-3xl">
        <Ruler />
      </div>
      <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full overflow-y-clip border-x bg-background">

        {/* NAV */}
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

        {/* BANNER */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-0">
          <motion.div
            className="relative mb-2 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src="/banner.png"
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
          </motion.div>
        </div>

        {/* PROFILE HEADER */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 pt-0">
          <motion.div
            className="-mt-10 flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
                  style={{ backgroundImage: "url(/me.png)" }}
                />
              </div>
              <div className="mt-1 flex shrink-0 flex-col items-end gap-1">
                <p className="flex items-center gap-1.5 font-mono text-[10px] font-medium whitespace-nowrap text-foreground/70 sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Available for work
                </p>
                <div className="flex flex-col items-end font-mono text-[10px] text-foreground/40 sm:text-xs">
                  <span className="text-[9px] text-foreground/20 sm:text-[10px]">// 5.5h ahead</span>
                </div>
              </div>
            </div>

            <div className="w-full flex-col px-4 text-left sm:flex sm:flex-row sm:items-end sm:justify-between sm:px-8">
              <div className="px-0">
                <h1 className="mb-0 font-serif text-2xl font-medium tracking-[0.01em] italic sm:text-4xl text-foreground">
                  Ashish Kumar Singh
                </h1>
                <div className="font-manrope flex flex-wrap items-center gap-1 text-xs font-medium text-foreground/40 sm:text-sm">
                  <p>Frontend Developer — <Typewriter words={["Designer", "Developer", "Creator", "Freelancer", "Problem Solver"]} loop={0} cursor cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={1200} /></p>
                </div>
              </div>
              <div className="mt-3 flex justify-start gap-1 px-0 sm:mt-0 sm:gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
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

            <div className="mt-4 px-4 text-base leading-loose tracking-wider text-foreground/50 sm:px-8">
              I design{" "}
              <span className="font-medium text-foreground">conversion-focused</span> websites and{" "}
              <span className="font-medium text-foreground">scalable product interfaces</span> for{" "}
              <span className="font-medium text-foreground">startups</span>. I&apos;m Ashish, an{" "}
              <span className="font-medium text-foreground">India-based designer &amp; developer</span>{" "}
              who specializes in building{" "}
              <span className="font-medium text-foreground">high-converting</span> websites for{" "}
              <span className="font-medium text-foreground">B2C</span> and{" "}
              <span className="font-medium text-foreground">B2B</span> brands.
            </div>

            <div className="mt-4 flex items-center px-4 sm:px-8">
              <a
                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 h-8 rounded-md gap-1.5 px-3"
                href="https://x.com/messages/compose?recipient_id=ashish_k_singh"
                target="_blank"
              >
                <MessageCircle className="size-4 opacity-40" />
                Twitter DM
              </a>
              <span className="mx-1 text-xs font-medium text-foreground/20">OR</span>
              <a
                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 h-8 rounded-md gap-1.5 px-3"
                href="mailto:ashish.jayshreeram@gmail.com"
              >
                <PenLine className="size-4 opacity-40" />
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* GITHUB ACTIVITY */}
        <GithubContributions />

        <Separator />

        {/* EXPERIENCE */}
        <MotionSection delay={0.1}>
          <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
            <h2 className="mb-2 font-serif text-xl text-foreground/50">Professional Experience</h2>
            <div className="group mt-4 rounded-2xl transition-all duration-300">
              <div
                className="flex cursor-pointer flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                onClick={() => setExpanded(!expanded)}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/10 dark:border-white/10 sm:h-14 sm:w-14 flex items-center justify-center bg-muted">
                    <span className="text-xs font-bold text-foreground/40">A</span>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-foreground sm:text-base">Angrio Technologies</h3>
                      <ChevronDown className={`size-3.5 shrink-0 text-foreground/50 transition-all duration-300 sm:size-4 ${expanded ? "rotate-180" : ""}`} />
                    </div>
                    <p className="text-xs font-medium whitespace-nowrap text-foreground/50 sm:text-sm">Full-Stack Developer</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-1 text-start sm:ml-auto sm:flex-col sm:items-end sm:justify-center sm:text-end">
                  <p className="inline-flex items-center gap-2 text-[10px] font-medium text-foreground/50 sm:justify-end sm:text-sm">
                    <span className="hidden h-px w-12 bg-linear-to-l from-black/10 to-transparent sm:block md:w-20 dark:from-white/10" />
                    Jan 2025 - Dec 2025
                  </p>
                  <p className="text-[10px] tracking-tight text-foreground/30 normal-case sm:text-xs">India, Remote</p>
                </div>
              </div>
              <div className={`grid transition-all duration-500 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="space-y-4 text-sm leading-relaxed text-foreground/70 pt-4 md:text-base">
                    <p>Started as an <span className="font-semibold">Intern</span> on January 18, 2025, focused on crafting responsive and high-converting landing pages. Due to strong performance and technical growth, I was promoted to Full-Stack Developer in April 2025.</p>
                    <ul className="space-y-3 pl-1">
                      <li className="flex items-start gap-3"><span className="size-1.5 shrink-0 rounded-full bg-foreground/40 mt-2" /><p className="text-base text-foreground/50">Developed high-performance landing pages and complex interactive dashboards with a focus on UX.</p></li>
                      <li className="flex items-start gap-3"><span className="size-1.5 shrink-0 rounded-full bg-foreground/40 mt-2" /><p className="text-base text-foreground/50">Implemented robust headless CMS architectures using Sanity for flexible content management.</p></li>
                      <li className="flex items-start gap-3"><span className="size-1.5 shrink-0 rounded-full bg-foreground/40 mt-2" /><p className="text-base text-foreground/50">Built scalable full-stack features with Supabase for real-time data persistence and authentication.</p></li>
                      <li className="flex items-start gap-3"><span className="size-1.5 shrink-0 rounded-full bg-foreground/40 mt-2" /><p className="text-base text-foreground/50">Engineered a core browser extension for &apos;Trakkar.in&apos; (Company SaaS) to handle automated time tracking and cross-browser screenshot capture.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <Separator />

        {/* PROOF OF WORK */}
        <MotionSection delay={0.2}>
          <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl text-black/50 dark:text-white/40">Proof of work</h2>
              <Link href="/projects" className="inline-flex items-center gap-1 text-xs font-medium text-foreground/30 transition-colors duration-200 hover:text-foreground/90">
                ALL <MoveRight className="size-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    href={project.href}
                    className="group flex cursor-pointer flex-col gap-4 rounded-lg pb-4"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg transition-all duration-500 group-hover:scale-[1.05]">
                      <Image src={project.image} alt={project.title} width={400} height={300} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-4">
                      <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                      <p className="w-[calc(100%-1.5rem)] text-sm text-foreground/50">{project.description}</p>
                      <ProjectStackBadge stack={project.stack} more={project.more} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <h5 className="font-serif mt-4 bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text py-1 text-center text-3xl font-bold whitespace-nowrap text-transparent opacity-30 md:text-6xl">
              Shipping More Soon . . .
            </h5>
          </div>
        </MotionSection>

        <Separator />

        {/* STACK */}
        <MotionSection delay={0.3}>
          <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
              <h2 className="mb-6 font-serif text-xl text-black/50 dark:text-white/40">Stack I use</h2>
            <div className="relative grid grid-cols-4 justify-items-center gap-8 sm:grid-cols-6 md:grid-cols-8 md:justify-items-start lg:grid-cols-12">
              <span className="pointer-events-none absolute -top-12 right-0 size-12 -rotate-34 font-mono text-[10px] font-medium text-foreground/30">drag me :D</span>
              <svg className="pointer-events-none absolute -top-12 right-15 size-10 rotate-120 text-foreground/30" viewBox="0 0 323.057 323.057" fill="currentColor">
                <path d="M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343M144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707"></path>
                <path d="M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73"></path>
              </svg>
              {skills.map((skill) => (
                <StackIcon key={skill.name} name={skill.name} type={skill.type} src={skill.src} />
              ))}
            </div>
          </div>
        </MotionSection>

        {/* MY THOUGHTS */}
        <MotionSection delay={0.4}>
          <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 px-8">
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="font-serif text-xl text-foreground/50 italic">My Thoughts</h2>
              <Link href="/blogs" className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-foreground/30 transition-colors duration-200 hover:text-foreground/90">
                ALL <MoveRight className="size-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link key={blog.title} href={blog.href} className="group relative block">
                  <div className="h-full space-y-4 py-2">
                    <div className="relative perspective-[2000px]">
                      <motion.div
                        initial={{ rotateY: -12, rotateX: 5, x: 8, y: -6 }}
                        whileHover={{ rotateY: 0, rotateX: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="border-border bg-muted/30 relative aspect-video w-full overflow-hidden rounded-sm border"
                      >
                        <Image src={blog.image} alt={blog.title} fill className="rounded-sm object-cover" />
                      </motion.div>
                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-sm border-x border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-foreground/40">{blog.date}</span>
                      </div>
                      <h3 className="relative block overflow-visible">
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:4px_4px] bg-clip-text font-medium text-transparent italic select-none">{blog.title}</span>
                        <span className="block max-w-[90%] text-sm leading-tight font-medium text-foreground/60 italic transition-colors duration-200 group-hover:text-foreground">{blog.title}</span>
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </MotionSection>

        <Separator />

        {/* CTA + FOOTER SOCIALS + KAIZEN + QUOTE — exact original structure */}
        <MotionSection delay={0.5}>
          {/* CTA Section */}
          <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full flex-col px-6 sm:flex sm:items-center sm:justify-between sm:px-12">
            <p className="mb-4 text-center font-serif text-2xl text-pretty italic text-foreground/50 sm:mb-3 md:text-xl">
              If you&apos;ve read this far, you might be interested in what I do.
            </p>
            <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
              <a href="https://cal.com/ashish/30min" target="_blank" rel="noopener noreferrer">
                <button
                  className="relative cursor-pointer rounded-lg border font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/20%] group bg-background text-foreground border-border h-auto px-3 py-2"
                  style={{ transform: "scale(0.8)" }}
                >
                  <span
                    className="relative block size-full text-sm tracking-wide text-black uppercase dark:font-light dark:text-[rgb(255,255,255,90%)]"
                    style={{
                      maskImage: `linear-gradient(-75deg,var(--primary) ${x + 20}%,transparent ${x + 30}%,var(--primary) ${x + 100}%)`,
                    }}
                  >
                    <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
                      <div className="h-5 w-5 shrink-0 overflow-hidden rounded-full">
                        <Image src="/me.png" alt="Ashish Kumar Singh" width={20} height={20} className="h-full w-full rounded-full bg-zinc-900 object-cover dark:bg-white" />
                      </div>
                      <div className="absolute left-[24px] flex -translate-x-full transform items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        <div className="mr-2 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">You</div>
                      </div>
                      <span className="relative ml-0 block text-sm font-bold whitespace-nowrap normal-case transition-all duration-300 group-hover:ml-4">Book a call</span>
                    </div>
                  </span>
                  <span
                    className="absolute inset-0 z-10 block rounded-[inherit] p-px"
                    style={{
                      mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                      WebkitMask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                      backgroundImage: `linear-gradient(-75deg,var(--primary)/10% ${x + 20}%,var(--primary)/50% ${x + 25}%,var(--primary)/10% ${x + 100}%)`,
                    }}
                  />
                </button>
              </a>
            </div>

            <p className="py-2 text-center text-sm font-medium text-foreground/30 uppercase">or</p>

            {/* FOOTER SOCIAL CARDS — CSS group-hover matching reference */}
            <div className="group flex items-center justify-center flex-wrap">
              {footerSocials.map((s) => {
                const rotation = s.label === "Github" ? "-rotate-20" : s.label === "Instagram" ? "-rotate-10" : s.label === "Twitter" ? "-rotate-2" : s.label === "LinkedIn" ? "rotate-10" : "rotate-20";
                return s.popup ? (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setShowInstaPopup(true)}
                    className={`${s.z} bg-background -mr-1 flex w-13 cursor-pointer flex-col items-center gap-0.5 rounded-lg border border-foreground/20 p-2 text-foreground/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)] ${rotation}`}
                  >
                    <s.icon className="size-5" />
                    <p className="text-[8px] font-bold text-foreground/50">{s.label}</p>
                  </button>
                ) : (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${s.z} bg-background -mr-1 flex w-13 cursor-pointer flex-col items-center gap-0.5 rounded-lg border border-foreground/20 p-2 text-foreground/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 group-hover:mr-2 group-hover:rotate-0 dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)] ${rotation}`}
                  >
                    <s.icon className="size-5" />
                    <p className="text-[8px] font-bold text-foreground/50">{s.label}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </MotionSection>

        <Separator />

        {/* ADHYATMA DECORATIVE SECTION */}
        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x relative flex w-full flex-col items-center overflow-visible py-0 select-none">
          <div className="relative h-8 w-full">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 10px, var(--color-foreground) 10px, var(--color-foreground) 11px)" }} />
          </div>
          <ForeignWordTooltip />
          <div className="relative h-8 w-full overflow-hidden">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)" }} />
          </div>
        </div>

        <Separator />

        {/* QUOTE SECTION */}
        <div className="border-border ring-0.5 ring-border mx-auto w-full max-w-3xl border-x py-4 relative z-0 px-8">
          <div className="pointer-events-none absolute bottom-1 left-8 opacity-[0.05] dark:opacity-[0.05]">
            <svg width="60" height="40" viewBox="0 0 120 100" fill="currentColor" className="text-foreground">
              <path d="M0 100V50c0-27.614 22.386-50 50-50h10v20H50c-16.569 0-30 13.431-30 30v10h30v40H0zm60 0V50c0-27.614 22.386-50 50-50h10v20h-10c-16.569 0-30 13.431-30 30v10h30v40H60z" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col justify-center">
            <div className="flex flex-col">
              <p className="font-serif text-lg leading-relaxed text-foreground/40 italic dark:text-white/40">
                &quot;karmaṇy evādhikāras te mā phaleṣu kadācana. mā karma-phala-hetur bhūr mā te saṅgo&apos;stv akarmaṇi&quot;
              </p>
              <div className="mt-4 flex items-center gap-3 self-end">
                <div className="h-px w-8 bg-foreground/20" />
                <span className="text-sm font-medium text-foreground italic">Bhagavad Gita 2.47</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* FOOTER */}
        <div className="border-border ring-0.5 ring-border mx-auto max-w-3xl border-x py-4 w-full relative space-y-4">
          <div className="relative flex flex-col items-center justify-between px-8 sm:flex-row">
            <p className="font-mono text-xs text-foreground/40">&copy; 2026 All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Instagram popup */}
      <AnimatePresence>
        {showInstaPopup && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-5 py-3 shadow-lg">
              <span className="text-sm text-foreground/70">Couldn&apos;t open Instagram — try again later</span>
              <button
                type="button"
                onClick={() => setShowInstaPopup(false)}
                className="ml-2 inline-flex size-6 items-center justify-center rounded-full border border-border/50 text-foreground/40 transition-colors hover:text-foreground/80"
              >
                <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
