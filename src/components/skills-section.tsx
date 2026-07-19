"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/Common/data"

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Skills
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <Badge key={skill.id} variant="outline" className="gap-1.5 px-3 py-1.5 text-sm">
            <skill.icon className="size-3.5" />
            {skill.text}
          </Badge>
        ))}
      </motion.div>
    </section>
  )
}
