import { BiLogoPostgresql } from "react-icons/bi"
import {FaGithub, FaLinkedinIn, FaPython } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { PiFigmaLogoBold } from "react-icons/pi"
import { FaDocker, FaMediumM } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"

import {
  RiBearSmileLine,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiBehance,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiReactquery,
  SiLeetcode,
  SiPrisma,
  SiDjango,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 3, icon: SiDjango, text: "Django" },
  { id: 4, icon: DiJavascript, text: "JavaScript" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 7, icon: RiBearSmileLine, text: "Zustand" },
  { id: 8, icon: SiReactquery, text: "Tanstack Query" },
  { id: 9, icon: SiShadcnui, text: "shadcn" },
  { id: 10, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 11, icon: SiGreensock, text: "GSAP" },
  { id: 12, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 13, icon: SiExpress, text: "ExpressJS" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 15, icon: SiMongodb, text: "MongoDB" },
  { id: 16, icon: SiRedis, text: "Redis" },
  { id: 17, icon: SiPrisma, text: "Prisma" },
  { id: 18, icon: SiPostman, text: "Postman" },
  { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 20, icon: FaGithub, text: "GitHub" },
  { id: 21, icon: FaPython, text: "Python" },
  { id: 22, icon: RiJavaLine, text: "Java" },
  { id: 23, icon: TbHexagonLetterC, text: "C" },
  { id: 24, icon: TbBrandCpp, text: "C++" },
  { id: 25, icon: BsFiletypeSql, text: "SQL" },
  { id: 26, icon: FaDocker, text: "Docker" },
  { id: 27, icon: VscTerminalLinux, text: "Linux" },
  { id: 28, icon: SiVercel, text: "Vercel" },
  { id: 29, icon: PiFigmaLogoBold, text: "Figma" },
]
const projects = [
  {
    id: 1,
    img: "/assets/Images/project/DailyCrime.png",
    title: "The Daily Crimes",
    status: true,
    content:
      "A newspaper-inspired website combining classic layouts with modern design for an authentic feel. Covered the rise in crime in India, offering insightful and engaging news stories on this pressing issue. Added animations and moving visuals to deliver a dynamic and immersive user experience.",
    url: "https://thedailycrimes.vercel.app/",
    github: "https://github.com/rinkitadhana/The-Daily-Crimes",
    skill: ["React", "TypeScript", "Tailwind", "GSAP", "Motion", "Figma"],
    preview: "/assets/Videos/demo/TheDailyCrimes.mp4",
  },
  {
    id: 2,
    img: "/assets/Images/project/cuez.png",
    title: "Cuez",
    status: true,
    content:
      "Cuez is a social media platform designed specifically for programmers. It offers multiple features tailored to developers, including the ability to upload projects, ask doubts, and explore job opportunities. With a community-driven approach, Cuez helps programmers connect, learn, and grow together.",
    github: "https://github.com/rinkitadhana/Cuez",
    url: "https://cuez.vercel.app/",
    skill: [
      "Next",
      "Tailwind",
      "Motion",
      "Tanstack Query",
      "Zustand",
      "Axios",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Cloudinary",
    ],
    preview: "/assets/Videos/demo/cuez.mp4",
  },
  {
    id: 3,
    img: "/assets/Images/project/apple.jpg",
    title: "Apple Clone",
    status: true,
    content:
      "Built a replica website of the iPhone 15 Pro, featuring interactive 3D models and dynamic animations for a lifelike experience. Designed seamless interactions to closely mimic the official Apple product page. Delivered a polished, engaging user experience with meticulous attention to detail and functionality.",
    url: "https://therinkit-appleclone.vercel.app/",
    github: "https://github.com/rinkitadhana/iphone15-Apple-Clone",
    skill: ["React", "Tailwind", "GSAP", "Motion", "ThreeJS"],
    preview: "/assets/Videos/demo/apple.mp4",
  },
  {
    id: 4,
    img: "/assets/Images/project/Anecdot.png",
    title: "Anecdot.",
    status: true,
    content:
      "Developed a full-stack blogging platform with secure user authentication, profile management, and CRUD functionality for blog posts. Designed an intuitive, responsive UI with a modern aesthetic to enhance user engagement and streamline content creation.",
    url: "https://anecblog.vercel.app/",
    github: "https://github.com/rinkitadhana/Anecdot",
    skill: [
      "React",
      "Tailwind",
      "Shadcn",
      "Motion",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Cloudinary",
    ],
    preview: "/assets/Videos/demo/anecdot.mp4",
  },
  {
    id: 5,
    img: "/assets/Images/project/jwt.jpg",
    title: "JWT-auth",
    status: true,
    content:
      "A ready-to-use JWT authentication API built with Express, TypeScript, and MongoDB. It includes secure password hashing and robust authentication measures. Perfect for integrating secure user authentication into your projects effortlessly",
    github: "https://github.com/rinkitadhana/JWT-auth",
    skill: ["TypeScript", "Node", "Express", "JWT", "MongoDB"],
  },
  {
    id: 6,
    img: "/assets/Images/project/brain-rot.png",
    title: "Brain-Rot Converter",
    status: true,
    content:
      "Created a fun and interactive project designed to convert normal text into GenZ or brainrot slang with just one click. This tool ensures everyone can stay up-to-date with the latest trends and internet language. A playful solution to keep no one feeling left behind in the ever-evolving digital culture.",
    url: "https://brainrot-language-converter.vercel.app/",
    github: "https://github.com/rinkitadhana/BrainRot-Language-Converter",
    skill: ["React", "Tailwind", "Gemini API"],
    preview: "/assets/Videos/demo/brainrot.mp4",
  },
  {
    id: 7,
    img: "/assets/Images/project/TweetSpree.png",
    title: "TweetSpree",
    status: true,
    content:
      "A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community.",
    url: "https://therinkit-tweetspree.vercel.app/",
    github: "https://github.com/rinkitadhana/TweetSpree",
    skill: ["React", "Tailwind"],
    preview: "/assets/Videos/demo/tweetspree.mp4",
  },
  {
    id: 8,
    img: "/assets/Images/project/port.jpeg",
    title: "Old Portfolio",
    status: true,
    content:
      "My old portfolio combines a sleek, minimalistic design with powerful features, including About, Projects, and Blog sections. It offers seamless routing for smooth navigation and a theme switcher for personalized customization. A simple yet functional showcase of my work and creativity.",
    url: "https://therinkit.online",
    github: "https://github.com/rinkitadhana/My-Portfolio-Website",
    skill: ["React", "Tailwind", "Motion", "GSAP"],
    preview: "/assets/Videos/demo/portfolio.mp4",
  },
  {
    id: 9,
    img: "/assets/Images/project/promptopia.svg",
    title: "Promptopia",
    status: true,
    content:
      "A full-stack Next.js project for sharing your AI prompts and using others' shared prompts, featuring Google authentication, profile management, and options to like, edit, and delete prompts. It also includes advanced search and filtering capabilities to easily find and manage prompts.",
    url: "https://therinkit-promptopia.vercel.app",
    github: "https://github.com/rinkitadhana/Promptopia",
    skill: ["NextJS", "Tailwind", "MongoDB"],
    preview: "/assets/Videos/demo/promptopia.mp4",
  },
  {
    id: 10,
    img: "/assets/Images/project/LinkIt.png",
    title: "LinkIt",
    status: true,
    content:
      "A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles.",
    url: "https://therinkit-linkit.vercel.app/",
    github: "https://github.com/rinkitadhana/LinkIt",
    skill: ["React", "Tailwind", "GSAP"],
    preview: "/assets/Videos/demo/linkit.mp4",
  },
  {
    id: 11,
    img: "/assets/Images/project/11Hack.png",
    title: "11Hack",
    status: false,
    content:
      "A full-stack project showcasing the top 11 hackathon ideas from various students, ranked by popularity. This project helps you effectively implement these ideas and improve your chances of winning.",
    skill: ["React", "Tailwind", "Node", "Express", "MongoDB"],
  },
  {
    id: 12,
    img: "/assets/Images/project/snake.jpg",
    title: "Snake Game",
    status: true,
    content:
      "I made this snake game in my first year just for fun. At that time, I was a big Java fan and created this project using Java and JavaFX. This project really helped me deepen my understanding of object-oriented programming.",
    github: "https://github.com/rinkitadhana/SnakeByJava",
    skill: ["Java", "JavaFX"],
  },
  {
    id: 13,
    img: "/assets/Images/project/stopwatch.jpg",
    title: "Stop Watch",
    status: true,
    content:
      "I created this stopwatch to customize its functionality. It was built using only Java and JavaFX and is fully operational. This project helped me enhance my skills in Java programming and GUI design.",
    github: "https://github.com/rinkitadhana/StopWatchByJava",
    skill: ["Java", "JavaFX"],
  },
]

const writings = [
  {
    id: 1,
    img: "/assets/Images/writing/jwt.png",
    head: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    des: "This blog guides you through building a JWT authentication system using TypeScript, Node.js, Express, and MongoDB. Learn to implement secure authentication, protect routes, and test APIs with Postman.",
    link: "https://medium.com/@rinkitadhana/jwt-authentication-apis-with-typescript-node-js-and-mongodb-b05a8a3cb062",
  },
  {
    id: 2,
    img: "/assets/Images/writing/docker1.png",
    head: "Part 1: Docker with Node.js & Express.js — Basics.",
    des: "This blog is part one of the Docker series, and it will guide you through how to containerize your simple Node.js application at a basic level with some extra CLI commands.",
    link: "https://medium.com/@rinkitadhana/part-1-docker-with-node-js-express-js-basics-06229c95ff7a",
  },
  {
    id: 3,
    img: "/assets/Images/writing/gsoc.png",
    head: "My GSOC Journey: The 2-Month Sprint from Doubt to Done",
    des: "This blog details my intense, two-month journey to cracking GSOC 2025, from nearly giving up to securing a spot through hard work, strategic learning, and crucial mentorship.",
    link: "https://medium.com/@rinkitadhana/my-gsoc-journey-the-2-month-sprint-from-doubt-to-done-b92aee22dc1f",
  },
  {
    id: 4,
    img: "/assets/Images/writing/prisma.jpg",
    head: "Getting Started with Prisma: Quick and Easy Node.js Setup",
    des: "Learn how to quickly set up Prisma in your Node.js (and TypeScript) project with this step-by-step guide. This tutorial will walk you through the simplest and fastest way to get Prisma configured and ready to use.",
    link: "https://medium.com/@rinkitadhana/getting-started-with-prisma-set-up-prisma-on-your-typescript-express-server-45bcef5e178c",
  },
  {
    id: 5,
    img: "/assets/Images/writing/gsoc2.webp",
    head: "How I almost ruined my GSoC project: My Bonding Period Journey",
    des: "In this blog, I’ll share my journey after getting selected for GSoC, the challenges I faced while balancing exams and project work, and how I tackled the unexpected complexities of my project.",
    link: "https://medium.com/@rinkitadhana/how-i-almost-ruined-my-gsoc-project-my-community-bonding-period-journey-9b890d6002eb",
  },
  {
    id: 6,
    img: "/assets/Images/writing/figma.png",
    head: "Create Common Patterns in Figma Effortlessly",
    des: "In this blog, I will share a simple and effective way to create some of the most common patterns in Figma. You'll learn how to design grid patterns and dotted grid patterns effortlessly",
    link: "https://medium.com/@rinkitadhana/create-common-patterns-in-figma-effortlessly-grid-and-dotted-grid-patterns-43eadb877fe2",
  },
]

const hireText =
  "I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!"

const emailLink =
  "mailto:therinkit@gmail.com?subject=Interested%20in%20Hiring%20You"

const navLinks = [
  {
    id: 1,
    name: "Lab",
    link: "/lab",
    icon: ImLab,
  },
  {
    id: 2,
    name: "Medium",
    link: "https://medium.com/@rinkitadhana",
    icon: FaMediumM,
  },
  {
    id: 3,
    name: "Behance",
    link: "https://www.behance.net/rinkitadhana",
    icon: SiBehance,
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
]

const supportText =
  "If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work."

const newsText =
  "Subscribe to my newsletter to get updates on my latest projects, blogs, and news. Stay connected and be the first to know what I’m working on!"
export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
}
