"use client"

import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

function formatStars(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k"
  }
  return String(count)
}

interface GitHubStarsProps {
  repo?: string
  className?: string
}

export function GitHubStars({ repo = "ashish01-dev/portfolio", className }: GitHubStarsProps) {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setCount(data.stargazers_count ?? 0)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCount(0)
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [repo])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="sm"
            className={className}
            onClick={() => window.open(`https://github.com/${repo}`, "_blank")}
          >
            <FaGithub className="size-4" />
            <span>{loading ? "—" : formatStars(count ?? 0)}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {loading ? "Loading…" : `${count ?? 0} stars on GitHub`}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
