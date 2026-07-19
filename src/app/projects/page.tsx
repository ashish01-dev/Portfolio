"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { House, Sun, Moon } from "lucide-react"
import ProjectBox from "../components/project-box"

const projects = [
  {
    id: 1,
    img: "/projects/3.png",
    title: "JEEIFY",
    status: true,
    content: "A full-stack JEE prep platform serving 100+ users with AI tutor, syllabus tracker, and more. Built with Next.js and Supabase, it provides a comprehensive dashboard for tracking syllabus progress, practicing 900+ PYQs, analyzing performance trends, and getting AI-powered doubt resolution — all synced across devices.",
    url: "https://jeeify.vercel.app/",
    github: "https://github.com/ashish01-dev/jeeify",
    skill: ["Next.js", "Tailwind", "Supabase", "Drizzle"],
    preview: "",
  },
  {
    id: 2,
    img: "/projects/7.png",
    title: "INNOVISION",
    status: false,
    content: "A platform that helps students choose the right stream after 10th & 12th through interest assessments, career path visualization, and curated guidance resources — turning confusion into clarity for one of life's biggest decisions.",
    url: "https://innovison.vercel.app/",
    github: "",
    skill: ["Next.js", "TypeScript", "Tailwind"],
    preview: "",
  },
  {
    id: 3,
    img: "/placeholder-banner.svg",
    title: "WallX",
    status: false,
    content: "A curated wallpaper discovery platform featuring dynamic collections across categories — minimal, abstract, nature, and anime. Smart search, daily discovery, and community collections all wrapped in a performance-optimized browsing experience.",
    url: "",
    github: "",
    skill: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    preview: "",
  },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent/5 size-8 rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
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
          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl italic text-foreground/80">Projects</h2>
            <div className="flex flex-col md:gap-2.5 gap-3.5">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <ProjectBox
                    img={project.img}
                    status={project.status}
                    title={project.title}
                    content={project.content}
                    url={project.url}
                    github={project.github}
                    skill={project.skill}
                    preview={project.preview}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
