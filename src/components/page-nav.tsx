"use client"

import { useEffect, useState, useCallback } from "react"
import { usePathname } from "next/navigation"

import { LineNav } from "@/registry/components/line-nav/line-nav"
import type { LineNavItem } from "@/registry/components/line-nav/line-nav"

const NAV_ITEMS: LineNavItem[] = [
  { title: "Overview", href: "#overview" },
  { title: "Introduction", href: "#hello" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Projects", href: "#projects" },
  { title: "Tech Stack", href: "#stack" },
  { title: "Resume", href: "#resume" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Blog", href: "#blog" },
  { title: "Awards", href: "#awards" },
  { title: "Certifications", href: "#certs" },
  { title: "Bookmarks", href: "#bookmarks" },
]

function useScrollSpy() {
  const [activeHref, setActiveHref] = useState<string>("#overview")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      let current = NAV_ITEMS[0].href
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href.slice(1))
        if (el && el.offsetTop <= scrollPos) {
          current = item.href
        }
      }
      setActiveHref(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeHref
}

export function PageNav() {
  const pathname = usePathname()
  const activeHref = useScrollSpy()

  const handleItemClick = useCallback(
    (item: LineNavItem, event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const id = item.href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    []
  )

  if (pathname !== "/") return null

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
