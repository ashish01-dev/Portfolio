"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { House, ArrowUpRight, Lightbulb, Moon } from "lucide-react";

const projectsData: Record<
  string,
  {
    title: string;
    description: string;
    url: string;
    stack: { name: string; type: string; src?: string }[];
    screenshots: { src: string; label: string }[];
    details: string;
    badge?: string;
    prev?: { title: string; href: string };
    next?: { title: string; href: string };
  }
> = {
  jeeify: {
    title: "JEEIFY",
    description: "JEEIFY is a JEE preparation assistant website.",
    url: "https://jeeify.vercel.app/",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Supabase", type: "supabase" },
      { name: "Drizzle", type: "drizzle" },
    ],
    screenshots: [{ src: "/projects/3.png", label: "Homepage" }],
    badge: "100+ users!",
    details: [
      "<p><strong>Track Your Syllabus</strong> &ndash; Mark chapters as done/in-progress/revision for Physics, Chemistry, and Maths. See your progress at a glance.</p>",
      "<p><strong>Plan Your Time</strong> &ndash; A weekly timetable (hour-by-hour grid) and daily study planner to organize your routine.</p>",
      "<p><strong>Analyze Progress</strong> &ndash; Dashboard with heatmaps, subject-wise completion %, study pace (on-track/behind), and gamification (streaks, XP, levels, 10 achievements).</p>",
      "<p><strong>AI Tutor</strong> &ndash; Ask doubts, get summaries, formula sheets, or quiz generators. Powered by AI through OpenRouter.</p>",
      "<p><strong>Practice PYQs</strong> &ndash; 900+ previous year JEE questions with answer feedback, bookmarks, mock tests with timers, and analytics (accuracy, weak chapters).</p>",
      "<p><strong>Pomodoro Timer</strong> &ndash; Floating focus/break timer on every page that logs your study sessions.</p>",
      "<p><strong>Backlog Tracker</strong> &ndash; Add tasks you&apos;ve fallen behind on (theory, PYQs, DPP, revision) with due dates and spaced repetition.</p>",
      "<p><strong>Test Analyzer</strong> &ndash; Log test scores, view trends (bar charts), accuracy stats, and get confetti when you score 90%+.</p>",
      "<p><strong>Gamification</strong> &ndash; Earn XP, level up, unlock 10 achievements (streaks, chapters completed, questions solved, etc.) to stay motivated.</p>",
      "<p><strong>Formula Vault</strong> &ndash; Upload and organize formula sheets/photos per chapter, download anytime.</p>",
      "<p><strong>Activity Journal</strong> &ndash; GitHub-style yearly heatmap + monthly calendar showing what you studied each day.</p>",
      "<p><strong>Syncs Across Devices</strong> &ndash; All data saved locally (works offline) and synced to Supabase cloud when online.</p>",
      '<p class="text-foreground/60" style="margin-top:0.5rem">It&apos;s an all-in-one JEE command center &mdash; replaces scattered notebooks, spreadsheets, and apps. You track everything in one place, see your weak areas, get AI help instantly, and stay motivated with streaks &amp; achievements.</p>',
    ].join(""),
    next: { title: "INNOVISION", href: "/projects/innovision" },
  },
  innovision: {
    title: "INNOVISION",
    description: "A platform that helps students choose the right stream after 10th & 12th.",
    url: "https://innovison.vercel.app/",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "TypeScript", type: "ts" },
      { name: "Tailwind", type: "tailwind" },
    ],
    screenshots: [{ src: "/projects/4.png", label: "Homepage" }],
    badge: "Down!",
    details: [
      "<p>Choosing the right stream after 10th or 12th is one of the most confusing decisions a student faces. INNOVISION is built to solve exactly that — it helps students explore career paths, understand stream options, and make an informed choice based on their interests and strengths.</p>",
      "<p class='mt-4 font-semibold text-foreground/80'>Key Features:</p>",
      "<ul class='mt-2 space-y-2 list-disc pl-5'>",
      "<li><strong>Stream Explorer</strong> &ndash; Browse all available streams (Science, Commerce, Arts, Vocational) with detailed descriptions of subjects, career prospects, and skill requirements.</li>",
      "<li><strong>Interest Assessment</strong> &ndash; A simple quiz that asks about your interests, strengths, and preferences, then suggests the best-fit streams.</li>",
      "<li><strong>Career Path Visualizer</strong> &ndash; See a visual map of how each stream connects to different careers, colleges, and entrance exams.</li>",
      "<li><strong>College &amp; Exam Guide</strong> &ndash; Find colleges and entrance exams relevant to each stream, with cutoff info, application dates, and preparation tips.</li>",
      "<li><strong>Comparison Tool</strong> &ndash; Compare two or more streams side-by-side on factors like difficulty, career options, salary potential, and further study paths.</li>",
      "<li><strong>Success Stories</strong> &ndash; Real stories from students who chose different streams, showing where they are now and what they wish they had known.</li>",
      "<li><strong>Resource Library</strong> &ndash; Curated articles, videos, and guides on making stream decisions, written by career counselors and educators.</li>",
      "</ul>",
      "<p class='mt-4 text-foreground/60'>It&apos;s a one-stop platform that replaces the confusion, peer pressure, and guesswork with clear, structured guidance — helping students take their first big career step with confidence.</p>",
    ].join(""),
    prev: { title: "JEEIFY", href: "/projects/jeeify" },
    next: { title: "WallX", href: "/projects/wallx" },
  },
  wallx: {
    title: "WallX",
    description: "A curated wallpaper platform with dynamic collections and smart categorization.",
    url: "#",
    stack: [
      { name: "Next.js", type: "next" },
      { name: "TypeScript", type: "ts" },
      { name: "Tailwind", type: "tailwind" },
      { name: "Supabase", type: "supabase" },
    ],
    screenshots: [{ src: "/placeholder-banner.svg", label: "Homepage" }],
    details: [
      "<p><strong>WallX</strong> is a wallpaper discovery platform that curates stunning visuals across categories — minimal, abstract, nature, anime, and more.</p>",
      "<p class='mt-4 font-semibold text-foreground/80'>Key Features:</p>",
      "<ul class='mt-2 space-y-2 list-disc pl-5'>",
      "<li><strong>Curated Collections</strong> &ndash; Browse hand-picked wallpapers organized by mood, color, and category.</li>",
      "<li><strong>Smart Search</strong> &ndash; Find wallpapers by color palette, resolution, orientation, or keyword.</li>",
      "<li><strong>Daily Discovery</strong> &ndash; Fresh wallpapers every day with personalized recommendations.</li>",
      "<li><strong>Collections &amp; Favorites</strong> &ndash; Save your favorite wallpapers and organize them into custom collections.</li>",
      "<li><strong>Upload &amp; Share</strong> &ndash; Contribute your own wallpapers and share collections with the community.</li>",
      "</ul>",
      "<p class='mt-4 text-foreground/60'>Built with a focus on performance and smooth browsing — lazy-loaded images, infinite scroll, and optimized CDN delivery.</p>",
    ].join(""),
    prev: { title: "INNOVISION", href: "/projects/innovision" },
  },
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isAnimating = useRef(false);
  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    if (isAnimating.current || !mounted) return;
    const target = theme === "dark" ? "light" : "dark";
    const fromBottom = theme === "dark";

    document.documentElement.style.setProperty(
      "--theme-clip-from",
      fromBottom ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)"
    );
    document.documentElement.style.setProperty(
      "--theme-clip-to",
      "inset(0 0 0 0)"
    );

    if ((document as any).startViewTransition) {
      isAnimating.current = true;
      const t = (document as any).startViewTransition(() => setTheme(target));
      t.finished.finally(() => { isAnimating.current = false; });
    } else {
      isAnimating.current = true;
      setTheme(target);
      setTimeout(() => { isAnimating.current = false; }, 500);
    }
  };

  if (!mounted) {
    return (
      <button className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full" aria-label="Toggle theme">
        <Lightbulb className="size-4" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Lightbulb className="size-4 fill-yellow-400 text-yellow-500" />
      ) : (
        <Moon className="size-4" />
      )}
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
    <div className="relative min-h-dvh w-full overflow-x-clip">
      <div className="border-border ring-0.5 ring-border z-10 mx-auto min-h-screen w-full border-x bg-background">
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
                    {project.badge && (
                      <span className={`absolute bottom-2 right-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm ${project.badge === "100+ users!" ? "bg-green-500/90" : "bg-red-500/90"}`}>
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground/40 font-mono">{shot.label}</p>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="mt-8 space-y-3 text-base leading-relaxed text-foreground/60 max-w-2xl" dangerouslySetInnerHTML={{ __html: project.details }} />

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
