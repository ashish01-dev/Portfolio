"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface SpotlightLogoProps {
  size?: number
}

export default function SpotlightLogo({ size = 32 }: SpotlightLogoProps) {
  const ref = useRef<SVGSVGElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <defs>
        <radialGradient
          id="spotlight-glow"
          cx={`${(position.x / size) * 100}%`}
          cy={`${(position.y / size) * 100}%`}
          r="40%"
        >
          <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.rect
        width={32}
        height={32}
        rx={8}
        fill="var(--muted)"
        stroke="var(--border)"
        strokeWidth={1}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.text
        x={16}
        y={20}
        textAnchor="middle"
        fill="var(--foreground)"
        fontSize={14}
        fontWeight={700}
        fontFamily="var(--font-manrope)"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        A
      </motion.text>
      <rect width={32} height={32} rx={8} fill="url(#spotlight-glow)" />
    </svg>
  )
}
