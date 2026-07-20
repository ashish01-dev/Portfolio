"use client";

interface DiagonalPatternProps {
  side: "left" | "right";
  className?: string;
  topOffset?: string;
}

export default function DiagonalPattern({
  side,
  className = "",
  topOffset = "0",
}: DiagonalPatternProps) {
  return (
    <div
      className={`absolute ${side}-0 hidden h-full w-[60px] overflow-hidden sm:block ${className}`}
      style={{ top: topOffset }}
    >
      <div
        className="absolute inset-0 h-full w-[60px] border border-zinc-800/70 opacity-[0.06] dark:border-zinc-800/20 dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
        }}
      />
    </div>
  );
}
