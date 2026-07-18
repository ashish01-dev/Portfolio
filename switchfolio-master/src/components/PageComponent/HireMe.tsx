"use client"
import SectionTitle from "../SectionTitle"
import { PiSuitcaseSimpleBold } from "react-icons/pi"
import { emailLink, hireText } from "@/data/Common/data"

const HireMe = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Hire Me" />
      <div className=" flex flex-col gap-2">
        <p>{hireText}</p>
        <div>
          <a className="btn" target="_blank" href={emailLink}>
            <PiSuitcaseSimpleBold />
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HireMe
