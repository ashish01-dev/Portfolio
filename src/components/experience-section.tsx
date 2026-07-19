"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Freelance / Self-Employed",
    period: "2023 — Present",
    description:
      "Building conversion-focused websites and scalable product interfaces for startups. Specializing in Next.js, Tailwind CSS, and modern React patterns.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "JEEIFY",
    period: "2024 — Present",
    description:
      "Built and maintained a full-stack JEE preparation platform serving 100+ users. Features include AI tutor, syllabus tracker, 900+ PYQs, and performance analytics.",
    skills: ["Next.js", "Supabase", "Drizzle", "Tailwind"],
  },
]

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Experience
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-muted/30 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                <Briefcase className="size-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
