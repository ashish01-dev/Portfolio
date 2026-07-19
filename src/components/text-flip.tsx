"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

interface TextFlipProps {
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
  children: React.ReactNode[]
  interval?: number
  transition?: any
  variants?: any
  play?: boolean
  onIndexChange?: (index: number) => void
}

export function TextFlip({
  as: Tag = "span",
  className,
  children,
  interval = 2000,
  transition,
  variants,
  play = true,
  onIndexChange,
}: TextFlipProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!play || children.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % children.length
        onIndexChange?.(next)
        return next
      })
    }, interval)
    return () => clearInterval(timer)
  }, [children.length, interval, play, onIndexChange])

  const defaultVariants = variants || {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  }

  const defaultTransition = transition || {
    duration: 0.4,
    ease: [0.33, 1, 0.68, 1],
  }

  return (
    <Tag className={className} style={{ perspective: "120px" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={defaultVariants}
          transition={defaultTransition}
          style={{ display: "inline-block" }}
        >
          {children[index]}
        </motion.span>
      </AnimatePresence>
    </Tag>
  )
}
