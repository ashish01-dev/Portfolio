"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from "motion/react"
import type { TOCItemType } from "fumadocs-core/toc"

import { cn } from "@/lib/utils"

export function BlogNavToc({
  items,
  className,
}: {
  items: TOCItemType[]
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const [measuredHeight, setMeasuredHeight] = useState(0)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMeasuredHeight(entry.contentRect.height)
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ids = items.map((item) => item.url.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-100px 0px -66% 0px" },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useMotionValueEvent(scaleX, "change", (latest) => {
    setProgress(latest * 100)
  })

  if (!items.length) return null

  const activeIndex = items.findIndex(
    (item) => item.url.replace("#", "") === activeId,
  )
  const activeItem = activeIndex !== -1 ? items[activeIndex] : items[0]
  const minDepth = Math.min(...items.map((i) => i.depth))

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/10 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <motion.div
        className={cn(
          "fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0))] left-1/2 z-60 w-[90vw] -translate-x-1/2 overscroll-contain bg-background text-sm ring transition-[box-shadow,--tw-ring-color] duration-300",
          className,
          isOpen
            ? "shadow-lg ring-foreground/15"
            : "shadow-sm ring-foreground/10",
        )}
        initial={false}
        animate={{
          maxWidth: isOpen ? 384 : 288,
          borderRadius: isOpen ? 16 : 9999,
        }}
        transition={{
          maxWidth: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
          borderRadius: {
            duration: isOpen ? 0 : 0.35,
            ease: [0.32, 0.72, 0, 1],
            delay: isOpen ? 0 : 0.15,
          },
        }}
      >
        <motion.div
          initial={false}
          animate={{ height: isOpen ? measuredHeight : 0 }}
          transition={{
            height: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
          }}
          className="overflow-hidden"
        >
          <div ref={contentRef} className="px-2">
            <p className="px-3 py-2 pb-1! text-[10px] font-semibold tracking-wider text-muted-foreground">
              TABLE OF CONTENTS
            </p>
            <div className="flex max-h-[35vh] flex-col gap-0.5 overflow-y-auto overscroll-contain pb-5">
              {items.map((item) => {
                const isActive = activeId === item.url.replace("#", "")
                const depthOffset = Math.max(0, item.depth - minDepth)

                return (
                  <a
                    key={item.url}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between gap-3 rounded-lg px-3 py-1.5 text-sm text-muted-foreground! no-underline! transition-colors",
                      isActive
                        ? "bg-secondary text-foreground!"
                        : "hover:bg-muted/50 hover:text-foreground!",
                    )}
                    style={{
                      paddingLeft: `${0.75 + depthOffset * 0.75}rem`,
                    }}
                  >
                    <span className="line-clamp-2">{item.title}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/90" />
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "flex h-12 w-full cursor-pointer items-center justify-between gap-3 bg-transparent px-5",
            isOpen ? "rounded-b-xl border-t" : "rounded-full",
          )}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/90" />
            <span className="truncate font-medium text-foreground">
              {activeItem?.title}
            </span>
          </div>
          <div className="relative flex h-5 w-5 items-center justify-center">
            <svg
              className="block h-full w-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                className="fill-none stroke-border"
                strokeWidth={15}
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                className="fill-none stroke-foreground/85"
                strokeWidth={15}
                style={{
                  strokeDasharray: "251.2",
                  strokeDashoffset: 251.2 - (251.2 * progress) / 100,
                }}
              />
            </svg>
          </div>
        </button>
      </motion.div>
    </>
  )
}
