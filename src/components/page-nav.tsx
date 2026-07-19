"use client"

import { useEffect, useState } from "react"

import { LineNav } from "@/registry/components/line-nav/line-nav"
import type { LineNavItem } from "@/registry/components/line-nav/line-nav"

const NAV_ITEMS: LineNavItem[] = [
  { title: "Overview", href: "#overview" },
  { title: "Introduction", href: "#hello" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Projects", href: "#projects" },
  { title: "Tech Stack", href: "#stack" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Blog", href: "#blog" },
  { title: "Awards", href: "#awards" },
  { title: "Certifications", href: "#certs" },
  { title: "Bookmarks", href: "#bookmarks" },
  { title: "Resume", href: "#resume" },
]

export function PageNav() {
  const [activeHref, setActiveHref] = useState<string>("#overview")

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1))
    const observers: IntersectionObserver[] = []

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveHref(`#${entry.target.id}`)
        }
      }
    }

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        })
        observer.observe(el)
        observers.push(observer)
      }
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect()
      }
    }
  }, [])

  const handleItemClick = (
    item: LineNavItem,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault()
    const id = item.href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed top-1/2 right-8 z-50 hidden -translate-y-1/2 xl:block">
      <LineNav
        items={NAV_ITEMS}
        activeHref={activeHref}
        onItemClick={handleItemClick}
      />
    </div>
  )
}
