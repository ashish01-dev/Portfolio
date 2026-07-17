"use client";

import { useState, useEffect, useRef } from "react";

interface BlurShimmerTextProps {
  texts: string[];
  blur?: number;
  interval?: number;
  className?: string;
}

export default function BlurShimmerText({
  texts,
  blur = 4,
  interval = 2,
  className,
}: BlurShimmerTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const animRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const duration = interval * 1000;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p >= 1) {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        startRef.current = Date.now();
        setProgress(0);
      }
      animRef.current = requestAnimationFrame(tick);
    };
    startRef.current = Date.now();
    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [texts, interval]);

  const currentText = texts[currentIndex];
  const nextIndex = (currentIndex + 1) % texts.length;
  const nextText = texts[nextIndex];

  const chars = nextText.split("").map((char, i) => {
    const charProgress = Math.max(0, Math.min(1, (progress * nextText.length - i) / 1.5));
    const blurVal = blur * (1 - charProgress);
    const opacity = charProgress;
    return (
      <span
        key={i}
        className="inline-block whitespace-pre"
        style={{ filter: `blur(${blurVal}px)`, opacity }}
      >
        {char}
      </span>
    );
  });

  return (
    <div className={`inline-grid ${className || ""}`}>
      {texts.map((text, i) => (
        <span
          key={i}
          className="invisible col-start-1 row-start-1 block whitespace-nowrap"
          aria-hidden="true"
        >
          {text.split("").map((char, j) => (
            <span key={j} className="inline-block whitespace-pre">{char}</span>
          ))}
        </span>
      ))}
      <p className="col-start-1 row-start-1 block whitespace-nowrap">{chars}</p>
    </div>
  );
}
