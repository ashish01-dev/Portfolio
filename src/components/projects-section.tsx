"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/Common/data"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

const visibleProjects = projects.slice(0, 3)

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Projects
        </h2>
        <Link
          href="/projects"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted"
        >
          Show all
          <ExternalLink className="size-3.5" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="flex h-full flex-col">
              {project.img && (
                <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.status && (
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                  )}
                </div>
                <CardDescription className="line-clamp-3">
                  {project.content}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.skill.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-7 items-center justify-center gap-1 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted"
                  >
                    <ExternalLink className="size-3.5" />
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-7 items-center justify-center gap-1 rounded-lg px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted"
                  >
                    <FaGithub className="size-3.5" />
                    Code
                  </a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
