"use client"
import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { House, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"

const projectsData = {
  jeeify: {
    title: "JEEIFY",
    description: "JEEIFY is a JEE preparation assistant website.",
    url: "https://jeeify.vercel.app/",
    stack: ["Next.js", "Tailwind", "Supabase", "Drizzle"],
    screenshots: [{ src: "/projects/3.png", label: "Homepage" }],
    details: [
      "<p><strong>Track Your Syllabus</strong> &ndash; Mark chapters as done/in-progress/revision for Physics, Chemistry, and Maths. See your progress at a glance.</p>",
      "<p><strong>Plan Your Time</strong> &ndash; A weekly timetable (hour-by-hour grid) and daily study planner to organize your routine.</p>",
      "<p><strong>Analyze Progress</strong> &ndash; Dashboard with heatmaps, subject-wise completion %, study pace (on-track/behind), and gamification (streaks, XP, levels, 10 achievements).</p>",
      "<p><strong>AI Tutor</strong> &ndash; Ask doubts, get summaries, formula sheets, or quiz generators. Powered by AI through OpenRouter.</p>",
      "<p><strong>Practice PYQs</strong> &ndash; 900+ previous year JEE questions with answer feedback, bookmarks, mock tests with timers, and analytics (accuracy, weak chapters).</p>",
      "<p><strong>Pomodoro Timer</strong> &ndash; Floating focus/break timer on every page that logs your study sessions.</p>",
      "<p><strong>Backlog Tracker</strong> &ndash; Add tasks you've fallen behind on (theory, PYQs, DPP, revision) with due dates and spaced repetition.</p>",
      "<p><strong>Test Analyzer</strong> &ndash; Log test scores, view trends (bar charts), accuracy stats, and get confetti when you score 90%+.</p>",
      "<p><strong>Gamification</strong> &ndash; Earn XP, level up, unlock 10 achievements (streaks, chapters completed, questions solved, etc.) to stay motivated.</p>",
      "<p><strong>Formula Vault</strong> &ndash; Upload and organize formula sheets/photos per chapter, download anytime.</p>",
      "<p><strong>Activity Journal</strong> &ndash; GitHub-style yearly heatmap + monthly calendar showing what you studied each day.</p>",
      "<p><strong>Syncs Across Devices</strong> &ndash; All data saved locally (works offline) and synced to Supabase cloud when online.</p>",
      '<p class="text-foreground/60" style="margin-top:0.5rem">It\'s an all-in-one JEE command center &mdash; replaces scattered notebooks, spreadsheets, and apps. You track everything in one place, see your weak areas, get AI help instantly, and stay motivated with streaks & achievements.</p>',
    ].join(""),
    prev: null,
    next: { title: "INNOVISION", href: "/projects/innovision" },
  },
  innovision: {
    title: "INNOVISION",
    description: "A platform that helps students choose the right stream after 10th & 12th.",
    url: "https://innovison.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshots: [{ src: "/projects/4.png", label: "Homepage" }],
    details: [
      "<p>Choosing the right stream after 10th or 12th is one of the most confusing decisions a student faces. INNOVISION is built to solve exactly that &mdash; it helps students explore career paths, understand stream options, and make an informed choice based on their interests and strengths.</p>",
      "<p class='mt-4 font-semibold text-foreground/80'>Key Features:</p>",
      "<ul class='mt-2 space-y-2 list-disc pl-5'>",
      "<li><strong>Stream Explorer</strong> &ndash; Browse all available streams (Science, Commerce, Arts, Vocational) with detailed descriptions of subjects, career prospects, and skill requirements.</li>",
      "<li><strong>Interest Assessment</strong> &ndash; A simple quiz that asks about your interests, strengths, and preferences, then suggests the best-fit streams.</li>",
      "<li><strong>Career Path Visualizer</strong> &ndash; See a visual map of how each stream connects to different careers, colleges, and entrance exams.</li>",
      "<li><strong>College & Exam Guide</strong> &ndash; Find colleges and entrance exams relevant to each stream, with cutoff info, application dates, and preparation tips.</li>",
      "<li><strong>Comparison Tool</strong> &ndash; Compare two or more streams side-by-side on factors like difficulty, career options, salary potential, and further study paths.</li>",
      "<li><strong>Success Stories</strong> &ndash; Real stories from students who chose different streams, showing where they are now and what they wish they had known.</li>",
      "<li><strong>Resource Library</strong> &ndash; Curated articles, videos, and guides on making stream decisions, written by career counselors and educators.</li>",
      "</ul>",
      "<p class='mt-4 text-foreground/60'>It's a one-stop platform that replaces the confusion, peer pressure, and guesswork with clear, structured guidance &mdash; helping students take their first big career step with confidence.</p>",
    ].join(""),
    prev: { title: "JEEIFY", href: "/projects/jeeify" },
    next: { title: "WallX", href: "/projects/wallx" },
  },
  wallx: {
    title: "WallX",
    description: "A curated wallpaper platform with dynamic collections and smart categorization.",
    url: "#",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    screenshots: [{ src: "/placeholder-banner.svg", label: "Homepage" }],
    details: [
      "<p><strong>WallX</strong> is a wallpaper discovery platform that curates stunning visuals across categories &mdash; minimal, abstract, nature, anime, and more.</p>",
      "<p class='mt-4 font-semibold text-foreground/80'>Key Features:</p>",
      "<ul class='mt-2 space-y-2 list-disc pl-5'>",
      "<li><strong>Curated Collections</strong> &ndash; Browse hand-picked wallpapers organized by mood, color, and category.</li>",
      "<li><strong>Smart Search</strong> &ndash; Find wallpapers by color palette, resolution, orientation, or keyword.</li>",
      "<li><strong>Daily Discovery</strong> &ndash; Fresh wallpapers every day with personalized recommendations.</li>",
      "<li><strong>Collections & Favorites</strong> &ndash; Save your favorite wallpapers and organize them into custom collections.</li>",
      "<li><strong>Upload & Share</strong> &ndash; Contribute your own wallpapers and share collections with the community.</li>",
      "</ul>",
      "<p class='mt-4 text-foreground/60'>Built with a focus on performance and smooth browsing &mdash; lazy-loaded images, infinite scroll, and optimized CDN delivery.</p>",
    ].join(""),
    prev: { title: "INNOVISION", href: "/projects/innovision" },
    next: null,
  },
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" strokeLinecap="round" /></svg>
      ) : (
        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      )}
    </button>
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = slug ? projectsData[slug as keyof typeof projectsData] : undefined

  if (!project) {
    notFound()
  }

  return (
    <div className="main-screen">
      <div className="screen">
        <div className="md:fixed md:top-4 flex w-full items-center md:justify-between justify-end md:px-8 px-4 select-none">
          <Link href="/" className="flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium">
            <House className="size-4" />
            <span className="hidden md:block">Home</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-8 pt-16 pb-12 px-4 md:px-8">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">/</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">{slug}</span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-md border bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-white/60 hover:bg-zinc-800/50 transition-colors"
              >
                <ArrowUpRight className="size-3.5" />
                Visit
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((s) => (
              <span key={s} className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/50 px-2.5 py-1 text-[10px] font-medium text-white/60">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-8">
            {project.screenshots.map((shot) => (
              <div key={shot.label}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-700">
                  <Image src={shot.src} alt={shot.label} fill className="object-cover object-top" />
                </div>
                <p className="mt-2 text-xs font-medium text-white/40 font-mono">{shot.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 text-base leading-relaxed text-white/60 max-w-2xl" dangerouslySetInnerHTML={{ __html: project.details }} />

          <div className="mt-16 flex items-center justify-between border-t border-zinc-700 pt-8">
            <div>
              {project.prev ? (
                <>
                  <p className="text-[10px] font-mono text-white/30 mb-1">Previous</p>
                  <Link href={project.prev.href} className="inline-flex items-center gap-1 text-sm font-medium text-white/60 hover:text-white transition-colors">
                    <ArrowLeft className="size-4" />
                    <span className="font-serif italic">{project.prev.title}</span>
                  </Link>
                </>
              ) : (
                <>
                  <p className="text-[10px] font-mono text-white/30 mb-1">Previous</p>
                  <span className="font-serif italic text-sm text-white/30">&mdash; End &mdash;</span>
                </>
              )}
            </div>
            <div className="text-right">
              {project.next ? (
                <>
                  <p className="text-[10px] font-mono text-white/30 mb-1">Next</p>
                  <Link href={project.next.href} className="inline-flex items-center gap-1 text-sm font-medium text-white/60 hover:text-white transition-colors">
                    <span className="font-serif italic">{project.next.title}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </>
              ) : (
                <>
                  <p className="text-[10px] font-mono text-white/30 mb-1">Next</p>
                  <span className="font-serif italic text-sm text-white/30">&mdash; End &mdash;</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}