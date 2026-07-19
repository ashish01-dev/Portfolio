"use client"

import { motion } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import { rinkitAbout } from "@/data/RinkitData/data"
import { gruzAbout } from "@/data/GruzData/data"

export default function AboutSection() {
  const { isSwitchOn } = useSwitch()
  const aboutHtml = isSwitchOn ? gruzAbout : rinkitAbout

  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          About
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="prose prose-neutral dark:prose-invert max-w-none text-foreground/80"
        dangerouslySetInnerHTML={{ __html: aboutHtml }}
      />
    </section>
  )
}
