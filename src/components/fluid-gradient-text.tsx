"use client"

import { useRef, useState, useCallback } from "react"

interface FluidGradientTextProps {
  text: string
  className?: string
  svgViewBoxWidth?: number
  svgViewBoxHeight?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function FluidGradientText({
  text,
  className,
  as: Tag = "span",
}: FluidGradientTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 50 })

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100
      setPosition({ x: Math.max(0, Math.min(100, x)) })
    }
  }, [])

  const handlePointerLeave = useCallback(() => {
    setPosition({ x: 50 })
  }, [])

  return (
    <Tag className={className}>
      <span
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          background: `linear-gradient(90deg, #a1a1aa ${position.x - 15}%, #fafafa ${position.x}%, #a1a1aa ${position.x + 15}%)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background 0.1s ease-out",
        }}
      >
        {text}
      </span>
    </Tag>
  )
}
