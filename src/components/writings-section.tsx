"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { writings } from "@/data/Common/data"
import { ArrowUpRight } from "lucide-react"

export default function WritingsSection() {
  if (writings.length === 0) return null

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
          Writings
        </h2>
        <Link
          href="/blogs"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted"
        >
          All posts
          <ArrowUpRight className="size-3.5" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-3"
      >
        {writings.map((post) => (
          <Link
            key={post.id}
            href={post.link}
            className="group flex items-center gap-4 rounded-xl border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/60"
          >
            {post.img && (
              <div className="size-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                <img
                  src={post.img}
                  alt={post.head}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                {post.head}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
                {post.des}
              </p>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ))}
      </motion.div>
    </section>
  )
}
