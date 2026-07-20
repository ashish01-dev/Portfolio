"use client"

import { useState, useRef, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MapPin } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"

export type SocialPlatform = "GitHub" | "X" | "LinkedIn" | "Discord" | "Email"

interface SocialTooltipProps {
  platform: SocialPlatform
  username: string
  children: React.ReactNode
}

function GitHubCard({ username }: { username: string }) {
  return (
    <div className="w-[300px] bg-background border border-line rounded-xl p-4 shadow-2xl select-none">
      <div className="flex items-start gap-3">
        <div className="size-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
          <img src={USER.avatar} alt="" className="size-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-base text-foreground">{USER.displayName}</h3>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground leading-relaxed">
        If I can imagine it, I can build it.
      </p>
      <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="size-3.5" />
        <span>{USER.address}</span>
      </div>
    </div>
  )
}

function XCard({ username }: { username: string }) {
  return (
    <div className="w-[320px] bg-background border border-line rounded-2xl shadow-2xl overflow-hidden select-none">
      <div className="h-20 bg-gradient-to-r from-blue-400 to-purple-500" />
      <div className="-mt-8 px-4 pb-4">
        <div className="size-16 rounded-full border-4 border-background bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
          <img src={USER.avatar} alt="" className="size-full object-cover" />
        </div>
        <div className="mt-3">
          <h3 className="flex items-center gap-1 text-base font-bold text-foreground">
            {USER.displayName}
            <svg className="size-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
            </svg>
          </h3>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
        <p className="mt-3 text-sm text-foreground leading-relaxed">
          Frontend Developer. Building cool stuff on the web.
        </p>
      </div>
    </div>
  )
}

function LinkedInCard({ username }: { username: string }) {
  return (
    <div className="w-[320px] bg-background border border-line rounded-lg shadow-2xl overflow-hidden select-none">
      <div className="relative">
        <div className="h-[72px] bg-gradient-to-r from-[#8ab4cd] to-[#a8c5d8]" />
        <div className="absolute -bottom-10 left-4">
          <div className="size-[72px] rounded-full border-2 border-background bg-background overflow-hidden">
            <img src={USER.avatar} alt="" className="size-full object-cover" />
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 pt-12">
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-foreground leading-tight">{USER.displayName}</h2>
          <p className="mt-1 text-sm text-muted-foreground leading-tight">
            {USER.jobTitle}. Building cool stuff on the web.
          </p>
        </div>
        <div className="text-sm text-muted-foreground leading-relaxed">
          <div className="mb-1">{USER.address}</div>
          <div className="font-semibold text-[#0073b1]">500+ connections</div>
        </div>
      </div>
    </div>
  )
}

function DiscordCard({ username }: { username: string }) {
  return (
    <div className="w-[300px] bg-background border border-line rounded-xl shadow-2xl p-4 select-none">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shrink-0 overflow-hidden">
          <img src={USER.avatar} alt="" className="size-full object-cover" />
        </div>
        <div>
          <h3 className="text-base font-bold text-foreground">{username}</h3>
          <p className="text-sm text-muted-foreground">Community Server</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground leading-relaxed">
        Join the community, devs, designers, and builders.
      </p>
    </div>
  )
}

function EmailCard() {
  return (
    <div className="w-[300px] bg-background border border-line rounded-xl shadow-2xl p-4 select-none">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shrink-0 overflow-hidden">
          <img src={USER.avatar} alt="" className="size-full object-cover" />
        </div>
        <div>
          <h3 className="text-base font-bold text-foreground">{USER.displayName}</h3>
          <p className="text-sm text-muted-foreground">Send me an email</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground leading-relaxed">
        I typically reply within 24 hours.
      </p>
    </div>
  )
}

function PlatformCard({ platform, username }: { platform: SocialPlatform; username: string }) {
  switch (platform) {
    case "GitHub":
      return <GitHubCard username={username} />
    case "X":
      return <XCard username={username} />
    case "LinkedIn":
      return <LinkedInCard username={username} />
    case "Discord":
      return <DiscordCard username={username} />
    case "Email":
      return <EmailCard />
  }
}

export function SocialTooltip({ platform, username, children }: SocialTooltipProps) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    let x = e.clientX + 5
    let y = e.clientY + 25

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const W = window.innerWidth
      const H = window.innerHeight
      if (x + rect.width > W) x = e.clientX - rect.width - 5
      if (y + rect.height > H) y = e.clientY - rect.height - 25
      if (x < 0) x = 5
      if (y < 0) y = 25
    }

    setPos({ x, y })
  }, [])

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <div
            ref={cardRef}
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: "translate3d(0,0,0)",
              willChange: "transform",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <PlatformCard platform={platform} username={username} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
