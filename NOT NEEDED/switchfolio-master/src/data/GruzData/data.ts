import { SiBuymeacoffee } from "react-icons/si"
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6"
import { SiBluesky } from "react-icons/si"

const gruzImage = "/assets/Images/pfps/gruz.jpeg"
const gruzName = "Gruz"
const gruzAbout = `
  <p>
    Hey, I'm Gruz, a full-stack developer with OCPD. I love building things that people genuinely use and love, not just for showcases (like the typical engineer).
  </p>
  <p>
    Besides programming, I'm a volleyball player who loves football. I also enjoy playing video games, mostly FIFA and Valorant in my free time.
  </p>
  <p>
    If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the navbar image!
  </p>
`

const gruzBio = "Autistic with OCPD"

const gruzLink = [
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
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 4,
    name: "BuyMeACoffee",
    link: "https://buymeacoffee.com/rinkitadhana",
    icon: SiBuymeacoffee,
  },
]

const gruzFooterLink = [
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
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 4,
    name: "BuyCoffee",
    link: "https://buymeacoffee.com/damngruz",
    icon: SiBuymeacoffee,
  },
  {
    id: 5,
    name: "Bluesky",
    link: "https://bsky.app/profile/damngruz.bsky.social",
    icon: SiBluesky,
  },
]

const gruzContact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there!"
const gruzContactLink = [
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
]

export {
  gruzName,
  gruzBio,
  gruzImage,
  gruzLink,
  gruzFooterLink,
  gruzAbout,
  gruzContact,
  gruzContactLink,
}
