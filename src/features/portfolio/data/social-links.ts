import type { SocialProfile } from "@/features/portfolio/types/social-links"

export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "ashish01-dev",
    href: "https://github.com/ashish01-dev",
    sameAs: true,
  },
  x: {
    title: "X",
    handle: "@TechMaster54321",
    href: "https://x.com/TechMaster54321",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "ashish-kumar0406",
    href: "https://www.linkedin.com/in/ashish-kumar0406",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
