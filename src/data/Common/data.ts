import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaMedium,
} from "react-icons/fa6"
import { SiBuymeacoffee, SiSolana, SiPaytm } from "react-icons/si"
import { ImLab } from "react-icons/im"

export const skills = [
  { id: 1, icon: FaGithub, text: "GitHub" },
  { id: 2, icon: FaLinkedinIn, text: "LinkedIn" },
  { id: 3, icon: FaXTwitter, text: "Twitter" },
  { id: 4, icon: FaEnvelope, text: "Email" },
  { id: 5, icon: FaMedium, text: "Medium" },
  { id: 6, icon: SiBuymeacoffee, text: "Buy Me a Coffee" },
  { id: 7, icon: SiSolana, text: "Solana" },
  { id: 8, icon: SiPaytm, text: "Paytm" },
  { id: 9, icon: ImLab, text: "Lab" },
]

export const projects = [
  {
    id: 1,
    img: "/projects/3.png",
    title: "JEEIFY",
    status: true,
    content:
      "A full-stack JEE prep platform serving 100+ users with AI tutor, syllabus tracker, and more. Built with Next.js and Supabase, it provides a comprehensive dashboard for tracking syllabus progress, practicing 900+ PYQs, analyzing performance trends, and getting AI-powered doubt resolution — all synced across devices.",
    url: "https://jeeify.vercel.app/",
    github: "https://github.com/ashish01-dev/jeeify",
    skill: ["Next.js", "Tailwind", "Supabase", "Drizzle"],
    preview: "",
  },
  {
    id: 2,
    img: "/projects/4.png",
    title: "INNOVISION",
    status: false,
    content:
      "A platform that helps students choose the right stream after 10th & 12th through interest assessments, career path visualization, and curated guidance resources — turning confusion into clarity for one of life's biggest decisions.",
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
    content:
      "A curated wallpaper discovery platform featuring dynamic collections across categories — minimal, abstract, nature, and anime. Smart search, daily discovery, and community collections all wrapped in a performance-optimized browsing experience.",
    url: "",
    github: "",
    skill: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    preview: "",
  },
]

export const writings = [
  {
    id: 1,
    img: "/placeholder-banner.svg",
    head: "Things I Believe In",
    des: "My personal philosophy on building products, learning, and life.",
    link: "/blogs/things-i-believe-in",
  },
]

export const hireText =
  "I'm currently available for full-time opportunities and freelance projects. If you're looking for a frontend developer who cares about clean code, great UX, and shipping fast — let's talk."

export const emailLink = "mailto:ashish.jayshreeram@gmail.com?subject=Interested%20in%20Hiring%20You"

export const navLinks = [
  { id: 1, name: "GitHub", link: "https://github.com/ashish01-dev", icon: FaGithub },
  { id: 2, name: "X", link: "https://x.com/TechMaster54321", icon: FaXTwitter },
  { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/ashish-kumar0406", icon: FaLinkedinIn },
  { id: 4, name: "Email", link: "mailto:ashish.jayshreeram@gmail.com", icon: FaEnvelope },
]

export const supportText = "If you love what I do and want to support my work, consider sponsoring me."

export const newsText = "Subscribe to my newsletter for updates on new projects, blog posts, and more."