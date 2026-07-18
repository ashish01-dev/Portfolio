import { FaDiscord, FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"
import { SiBluesky } from "react-icons/si"

const rinkitImage = "/assets/Images/pfps/mark.jpeg"
const rinkitName = "Rinkit Adhana"
const rinkitShortName = "Rinkit"
const rinkitBio = "Software Engineer"
const rinkitAbout = `
  <p>
    Hey! I'm Rinkit Adhana, an undergraduate computer science student and full-stack developer who loves turning ideas into real, working products.
  </p>
  <p>
    I'm flexible working with any tech stack, though I prefer modern tools. I'm currently working with Next.js, Django, Express, and TypeScript.
  </p>
  <p>
    I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems.
  </p>
`

const rinkitLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },

  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
]

const rinkitContact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries."
const rinkitContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
]

const rinkitFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
  // {
  //   id: 6,
  //   name: "Instagram",
  //   link: "https://www.instagram.com/rnkktt",
  //   icon: FaInstagram,
  // },
  {
    id: 6,
    name: "Bluesky",
    link: "https://bsky.app/profile/damngruz.bsky.social",
    icon: SiBluesky,
  },
]

export {
  rinkitImage,
  rinkitBio,
  rinkitContact,
  rinkitContactLink,
  rinkitName,
  rinkitShortName,
  rinkitAbout,
  rinkitLink,
  rinkitFooterLink,
}
