import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "jeeify",
    title: "JEEIFY",
    status: "running",
    period: {
      start: "01.2025",
    },
    link: "https://jeeify.vercel.app/",
    github: "https://github.com/ashish01-dev/jeeify",
    skills: [
      "Next.js",
      "Tailwind",
      "Supabase",
      "Drizzle",
    ],
    description: `A full-stack JEE prep platform serving 100+ users with AI tutor, syllabus tracker, and more. Built with Next.js and Supabase, it provides a comprehensive dashboard for tracking syllabus progress, practicing 900+ PYQs, analyzing performance trends, and getting AI-powered doubt resolution — all synced across devices.`,
    logo: "/projects/3.png",
    isExpanded: true,
  },
  {
    id: "innovision",
    title: "INNOVISION",
    status: "down",
    period: {
      start: "03.2024",
    },
    link: "https://innovison.vercel.app/",
    github: "https://github.com/ashish01-dev/innovision",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind",
    ],
    description: `A platform that helps students choose the right stream after 10th & 12th through interest assessments, career path visualization, and curated guidance resources — turning confusion into clarity for one of life's biggest decisions.`,
    logo: "/projects/4.png",
  },
  {
    id: "wallx",
    title: "WallX",
    status: "building",
    period: {
      start: "06.2024",
    },
    link: "https://wallx.vercel.app/",
    github: "https://github.com/ashish01-dev/wallx",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
    ],
    description: `A curated wallpaper discovery platform featuring dynamic collections across categories — minimal, abstract, nature, and anime. Smart search, daily discovery, and community collections all wrapped in a performance-optimized browsing experience.`,
    logo: "/placeholder-banner.svg",
  },
]
