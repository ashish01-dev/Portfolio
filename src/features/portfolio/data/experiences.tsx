import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Bihar, India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "01.2024",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Build high-converting websites for B2C and B2B brands.
- Design and develop scalable product interfaces for startups.
- Create pixel-perfect, conversion-focused web experiences.
- Work with Next.js, Tailwind CSS, and modern frontend tooling.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
