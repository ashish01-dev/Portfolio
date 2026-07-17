"use client";
import Container from "@/components/container";
import { Navbar } from "@/components/navbar";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

const colors = [
  "#FF6B6B", // coral red
  "#F7B801", // golden yellow
  "#6BCF63", // fresh green
  "#4D96FF", // bright blue
  "#845EC2", // purple
  "#FF9671", // peach
  "#00C9A7", // teal
  "#2C2C54", // deep navy
  "#FBEAFF", // soft pink
  "#3A86FF", // royal blue
  "#8338EC", // violet
  "#FF006E", // hot pink
  "#FB5607", // orange
  "#118AB2", // ocean blue
  "#073B4C", // dark teal
  "#FFD166", // soft amber
];

export default function LabPage() {
  const [currentColor, setCurrentColor] = useState<number>(0);
  const [animatingColor, setAnimatingColor] = useState<{
    color: string;
    from: { x: number; y: number };
    to: { x: number; y: number };
  } | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  function handleColorClick(
    color: string,
    idx: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) {
    const clickedElement = e.currentTarget;
    const targetElement = targetRef.current;

    if (!targetElement) return;

    // Get positions
    const clickedRect = clickedElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    // Calculate center points
    const fromX = clickedRect.left + clickedRect.width / 2;
    const fromY = clickedRect.top + clickedRect.height / 2;
    const toX = targetRect.left + targetRect.width / 2;
    const toY = targetRect.top + targetRect.height / 2;

    // Update indicator immediately (runs in parallel with ball animation)
    setCurrentColor(idx);

    // Start ball animation
    setAnimatingColor({
      color,
      from: { x: fromX, y: fromY },
      to: { x: toX, y: toY },
    });

    setTimeout(() => {
      setAnimatingColor(null);
    }, 800);
  }

  return (
    <Container className="px-8">
      <Navbar />

      <div className="flex flex-col gap-4">
        <div
          ref={targetRef}
          id="target"
          className="mt-4 aspect-video rounded-2xl bg-cyan-500/90 ring-1 ring-black/20 transition-colors delay-400 duration-300"
          style={{ backgroundColor: colors[currentColor] }}
        ></div>

        <div className="grid grid-cols-8 gap-4">
          {colors.map((color, idx) => (
            <div
              key={`${color}-${idx}`}
              className="relative flex items-center justify-center p-1"
            >
              {currentColor === idx && (
                <motion.div
                  layoutId="indicator"
                  className="border-border bg-muted absolute -z-10 h-full w-full rounded-xl border-4"
                ></motion.div>
              )}
              <div
                className="z-10 aspect-square w-full cursor-pointer rounded ring-1 ring-black/10 dark:ring-white/20"
                onClick={(e) => handleColorClick(color, idx, e)}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Circle */}
      <AnimatePresence>
        {animatingColor && (
          <motion.div
            initial={{
              position: "fixed",
              left: animatingColor.from.x,
              top: animatingColor.from.y,
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: animatingColor.color,
              x: -12,
              y: -12,
              scale: 1,
              zIndex: 50,
            }}
            animate={{
              left: animatingColor.to.x,
              top: animatingColor.to.y,
              scale: [1, 1.5, 20],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}
