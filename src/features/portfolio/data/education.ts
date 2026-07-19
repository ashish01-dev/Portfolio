import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "college",
    school: "GGSIPU, Delhi, India",
    degree: "BTech in Information Technology",
    period: {
      start: "08.2021",
      end: "08.2025",
    },
    description: `- Pursuing BTech in Information Technology at Guru Gobind Singh Indraprastha University
- Focused on software engineering, web development, and system design
- Active in tech communities and building real-world projects`,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    isExpanded: true,
  },
]
