import { Mail } from "lucide-react"
import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  x: <XIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  discord: <DiscordIcon />,
  email: <Mail />,
}
