"use client"

import { useRef, useEffect, useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  className,
  speed = 30,
  direction = "left",
  pauseOnHover = false,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scroller = scrollerRef.current
    const children = Array.from(scroller.children)

    children.forEach((child) => {
      const clone = child.cloneNode(true)
      scroller.appendChild(clone)
    })

    setStart(true)
  }, [])

  return (
    <div
      ref={containerRef}
      className={[
        "overflow-hidden w-full",
        pauseOnHover ? "group" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        ref={scrollerRef}
        className="flex w-max"
        style={{
          animation: start
            ? `marquee-${direction} ${speed}s linear infinite`
            : "none",
          animationPlayState: pauseOnHover ? "running" : undefined,
        }}
        onMouseEnter={() => {
          if (pauseOnHover && containerRef.current) {
            containerRef.current.style.animationPlayState = "paused"
          }
        }}
        onMouseLeave={() => {
          if (pauseOnHover && containerRef.current) {
            containerRef.current.style.animationPlayState = "running"
          }
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .group:hover [style*="animation-play-state"] {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  )
}
