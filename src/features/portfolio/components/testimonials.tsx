"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/marquee"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const ID = "testimonials"

const reviews = [
  {
    name: "Arjun Mehta",
    username: "@arjunmehta",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
  {
    name: "Priya Sharma",
    username: "@priyasharma",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Vikram Patel",
    username: "@vikrampatel",
    body: "“This is easily one of the most reliable SaaS tools we've adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”",
    profile: "https://images.shadcnspace.com/assets/profiles/linda.webp",
  },
  {
    name: "Ananya Gupta",
    username: "@ananyagupta",
    body: "Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.",
    profile: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
  },
  {
    name: "Rohit Verma",
    username: "@rohitverma",
    body: "“We evaluated multiple solutions, but this stood out immediately. It's fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.”",
    profile: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
  },
  {
    name: "Neha Singh",
    username: "@nehasingh",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Aditya Kapoor",
    username: "@adityakapoor",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
]

function ReviewCard({
  profile,
  name,
  username,
  body,
}: {
  profile: string
  name: string
  username: string
  body: string
}) {
  return (
    <Card className="relative mx-2 w-72 cursor-pointer overflow-hidden border border-line bg-card p-4 shadow-none shrink-0">
      <CardContent className="flex flex-col gap-3 p-0">
        <div className="flex items-center gap-2">
          <img
            className="size-8 rounded-full"
            src={profile}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-foreground">{name}</p>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-foreground">{body}</p>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>Trusted by many</PanelTitle>
      </PanelHeader>

      <PanelContent className="relative overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee speed={20} pauseOnHover direction="left">
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
        </div>
      </PanelContent>
    </Panel>
  )
}
