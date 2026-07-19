"use client"

import { motion } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import {
  rinkitName,
  rinkitLink,
} from "@/data/RinkitData/data"
import {
  gruzName,
  gruzLink,
} from "@/data/GruzData/data"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import SpotlightLogo from "@/components/spotlight-logo"

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { ssr: false })

const roles = [
  "Designer",
  "Developer",
  "Creator",
  "Freelancer",
  "Problem Solver",
]

function TextFlip() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block min-w-[140px] text-left">
      <motion.span
        key={roles[index]}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="inline-block"
      >
        {roles[index]}
      </motion.span>
    </span>
  )
}

function FluidGradientText({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}

function GitHubContributions() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-4">
      <GitHubCalendar
        username="ashish01-dev"
        blockRadius={2}
        blockSize={11}
        labels={{ totalCount: "{{count}} contributions in the past year" }}
      />
    </div>
  )
}

export default function HeroSection() {
  const { isSwitchOn } = useSwitch()
  const name = isSwitchOn ? gruzName : rinkitName
  const links = isSwitchOn ? gruzLink : rinkitLink

  return (
    <section className="flex flex-col items-center gap-8 pt-8 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SpotlightLogo size={48} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <FluidGradientText>{name}</FluidGradientText>
        <p className="max-w-lg text-lg text-muted-foreground">
          Frontend Developer — <TextFlip />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-3"
      >
        {links.map((link) => (
          <Tooltip key={link.id}>
            <TooltipTrigger>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <link.icon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>{link.name}</TooltipContent>
          </Tooltip>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-xl"
      >
        <GitHubContributions />
      </motion.div>
    </section>
  )
}
