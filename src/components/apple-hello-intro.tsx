"use client"

import { useCallback, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { AppleHelloEffectEnglish } from "@/registry/components/apple-hello-effect/apple-hello-effect-english"

export function AppleHelloIntro() {
  const [show, setShow] = useState(true)
  const [animationDone, setAnimationDone] = useState(false)

  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            animate={
              animationDone
                ? { opacity: 0, y: -20 }
                : { opacity: 1, y: 0, scale: [1, 1.02, 1] }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <AppleHelloEffectEnglish
              className="h-24 w-auto sm:h-32"
              strokeWidth={18}
              durationScale={1.2}
              onAnimationComplete={handleAnimationComplete}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
