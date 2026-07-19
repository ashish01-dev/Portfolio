"use client"
import Link from "next/link"
import { projects } from "@/data/Common/data"
import ProjectBox from "@/components/ProjectBox"
import SectionTitle from "@/components/SectionTitle"
import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { House } from "lucide-react"

const ProjectsPage = () => {
  const showAllVis = projects.length > 2
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 2)
  let delayValue = 0
  return (
    <div className="main-screen">
      <div className="screen">
        <div className="md:fixed md:top-4 flex w-full items-center md:justify-between justify-end md:px-8 px-4 select-none">
          <Link href="/" className="flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium">
            <House className="size-4" />
            <span className="hidden md:block">Home</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 pt-16">
          <SectionTitle title="Projects" />
          <div className="flex flex-col md:gap-2.5 gap-3.5">
            {visibleProjects.map((project) => (
              <AnimatedWrapper
                key={project.id}
                delay={project.id === 1 ? delayValue : (delayValue += 0.075)}
              >
                <ProjectBox
                  title={project.title}
                  img={project.img}
                  content={project.content}
                  status={project.status}
                  skill={project.skill}
                  url={project.url || ""}
                  github={project.github || ""}
                  preview={project.preview || ""}
                />
              </AnimatedWrapper>
            ))}
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectsPage