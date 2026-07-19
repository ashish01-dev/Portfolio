"use client"

import { useState, useRef, useCallback, useEffect } from "react"

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

function randomScramble(length: number, chars: string) {
  let result = ""
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

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
  const frameRef = useRef(0)

  const startScramble = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }

    frameRef.current = 0
    setDisplayText(randomScramble(text.length, scrambleChars))

    const totalFrames = text.length * 2
    const onCompleteRef = { current: onComplete }

    intervalRef.current = setInterval(() => {
      let result = ""
      for (let i = 0; i < text.length; i++) {
        if (frameRef.current >= i * 2) {
          result += text[i]
        } else {
          result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
        }
      }
      setDisplayText(result)
      frameRef.current++
      if (frameRef.current > totalFrames) {
        setDisplayText(text)
        onCompleteRef.current?.()
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }, speed)
  }, [text, speed, scrambleChars, onComplete])

  const resetText = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setDisplayText(text)
  }, [text])

  useEffect(() => {
    if (!play) {
      resetText()
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [play, resetText])

  if (!play) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag
      className={className}
      onMouseEnter={startScramble}
      onMouseLeave={resetText}
    >
      {displayText}
    </Tag>
  )
}
