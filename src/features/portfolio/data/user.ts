import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Ashish Kumar",
  lastName: "Singh",
  displayName: "Ashish Kumar Singh",
  username: "ashish01-dev",
  gender: "male",
  pronouns: "he/him",
  bio: "Frontend Developer — Designer, Developer, Creator, Freelancer, Problem Solver",
  flipSentences: [
    "Frontend Developer.",
    "Designer.",
    "Problem Solver.",
    "Freelancer.",
  ],
  address: "Bihar, India",
  phoneNumberB64: "KzkxOTk5OTk5OTk5", // base64 encoded (placeholder)
  emailB64: "YXNoaXNoLmpheXNocmVlcmFtQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://ashish-kumar.vercel.app",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Freelance",
      website: "#",
      experienceId: "freelance",
    },
  ],
  about: `I design conversion-focused websites and scalable product interfaces for startups. I'm Ashish, an India-based designer & developer who specializes in building high-converting websites for B2C and B2B brands.`,
  avatar: "/me.png",
  avatarVariants: {
    lightOff: "/me.png",
    lightOn: "/me.png",
    darkOff: "/me.png",
    darkOn: "/me.png",
  },
  ogImage: "/me.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "ashish",
    "ashish kumar singh",
    "ashish01-dev",
    "frontend developer",
    "web developer",
  ],
  dateCreated: "2024-01-15",
}
