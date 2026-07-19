"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

interface ParticlesProps {
  className?: string
  quantity?: number
  color?: string
  speed?: number
  size?: [number, number]
  connect?: boolean
  connectDistance?: number
  lineColor?: string
  lineOpacity?: number
}

export function Particles({
  className,
  quantity = 50,
  color = "var(--foreground)",
  speed = 0.5,
  size = [1, 3],
  connect = true,
  connectDistance = 120,
  lineColor,
  lineOpacity = 0.15,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const frameRef = useRef(0)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener("resize", resize)

    const particles: Particle[] = []
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: size[0] + Math.random() * (size[1] - size[0]),
        alpha: 0.2 + Math.random() * 0.8,
      })
    }

    particlesRef.current = particles

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    canvas.addEventListener("pointermove", onPointer)
    canvas.addEventListener("pointerleave", onLeave)

    const animate = () => {
      if (!canvas || !ctx) return
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight

      ctx.clearRect(0, 0, cw, ch)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > cw) p.vx *= -1
        if (p.y < 0 || p.y > ch) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      }

      if (connect) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < connectDistance) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = lineColor ?? color
              ctx.globalAlpha = lineOpacity * (1 - dist / connectDistance)
              ctx.stroke()
            }
          }
        }
      }

      // interaction with mouse
      if (mouseRef.current.x > 0) {
        for (const p of particles) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
            ctx.strokeStyle = lineColor ?? color
            ctx.globalAlpha = lineOpacity * (1 - dist / connectDistance)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointer)
      canvas.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(frameRef.current)
    }
  }, [quantity, color, speed, size[0], size[1], connect, connectDistance, lineColor, lineOpacity])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  )
}
