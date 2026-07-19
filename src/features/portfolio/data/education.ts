import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "college",
    school: "University/College",
    degree: "Bachelor's degree",
    period: {
      start: "08.2021",
      end: "08.2025",
    },
    description: `- Studied Computer Science / Information Technology
- Passionate about web development, design, and building real-world products`,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    isExpanded: true,
  },
]
