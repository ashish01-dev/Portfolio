"use client"

import Link from "next/link"
import { House } from "lucide-react"
import { writings } from "@/data/Common/data"
import WritingsBox from "@/components/WritingsBox"
import { useState } from "react"
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function BlogsPage() {
  const showAllVis = writings.length > 2
  const [showAll, setShowAll] = useState(false)
  const visibleWritings = showAll ? writings : writings.slice(0, 2)
  let delayValue = 0

  return (
    <div className="main-screen">
      <div className="screen">
        <div className="md:fixed md:top-4 flex w-full items-center md:justify-between justify-end md:px-8 px-4 select-none">
          <Link href="/" className="flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium">
            <House className="size-4" />
            <span className="hidden md:block">Home</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-8 pt-16 pb-12 px-4 md:px-8">
          <section className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Writings.</h1>
            <div className="flex flex-col md:gap-2.5 gap-3.5">
              {visibleWritings.map((writing) => (
                <AnimatedWrapper
                  key={writing.id}
                  delay={writing.id === 1 ? delayValue : (delayValue += 0.075)}
                >
                  <WritingsBox
                    img={writing.img}
                    head={writing.head}
                    des={writing.des}
                    link={writing.link}
                  />
                </AnimatedWrapper>
              ))}
            </div>
            {showAllVis && (
              <button className="showMore-btn" onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? (
                  <div className="flex gap-0.5 justify-center items-center">
                    <div className="animate-pulse"><MdKeyboardDoubleArrowUp /></div>
                    Show less
                  </div>
                ) : (
                  <div className="flex gap-0.5 justify-center items-center">
                    <div className="animate-pulse"><MdKeyboardDoubleArrowDown /></div>
                    Show all
                  </div>
                )}
              </button>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}