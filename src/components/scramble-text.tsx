"use client"

import { useState, useEffect, useRef } from "react"

interface ScrambleTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  speed?: number
  scrambleChars?: string
  play?: boolean
  onComplete?: () => void
}

const defaultScrambleChars = "!<>-_\\/[]{}—=+*^?#________"

export function ScrambleText({
  text,
  className,
  as: Tag = "span",
  speed = 50,
  scrambleChars = defaultScrambleChars,
  play = true,
  onComplete,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const onCompleteRef = { current: onComplete }
    if (!play) {
      setDisplayText(text)
      return
    }

    let frame = 0
    const totalFrames = text.length * 2

    const scramble = () => {
      let result = ""
      for (let i = 0; i < text.length; i++) {
        if (frame >= i * 2) {
          result += text[i]
        } else {
          result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
        }
      }
      setDisplayText(result)
      frame++
      if (frame > totalFrames) {
        setDisplayText(text)
        onCompleteRef.current?.()
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }

    intervalRef.current = setInterval(scramble, speed)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [text, speed, scrambleChars, play])

  return <Tag className={className}>{displayText}</Tag>
}
