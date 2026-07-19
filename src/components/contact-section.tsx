"use client"

import { motion } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import { rinkitContact, rinkitContactLink } from "@/data/RinkitData/data"
import { gruzContact, gruzContactLink } from "@/data/GruzData/data"
import { Mail } from "lucide-react"

export default function ContactSection() {
  const { isSwitchOn } = useSwitch()
  const contactText = isSwitchOn ? gruzContact : rinkitContact
  const contactLinks = isSwitchOn ? gruzContactLink : rinkitContactLink

  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Contact
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-4 rounded-xl border border-border bg-muted/30 p-6"
      >
        <p className="text-foreground/80 leading-relaxed">{contactText}</p>
        <div className="flex flex-wrap gap-2">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-all hover:bg-muted"
            >
              <link.icon className="size-4" />
              {link.name}
            </a>
          ))}
          <a
            href="mailto:ashish.jayshreeram@gmail.com"
            className="inline-flex h-7 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-primary px-2.5 text-sm font-medium whitespace-nowrap text-primary-foreground transition-all hover:bg-primary/80"
          >
            <Mail className="size-4" />
            Send Email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
