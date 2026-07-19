"use client"

interface SpinningCircularTextProps {
  text: string
  className?: string
  charSpacing?: number
  fontSize?: string
  spinClassName?: string
  renderChar?: (char: string, index: number) => React.ReactNode
}

export function SpinningCircularText({
  text,
  className,
  charSpacing = 3,
  fontSize = "14px",
  spinClassName,
  renderChar,
}: SpinningCircularTextProps) {
  const chars = text.split("")
  const fontSizeNum = parseInt(fontSize)
  const radius = (chars.length * (fontSizeNum * 0.6 + charSpacing)) / (2 * Math.PI)

  return (
    <div
      className={className}
      style={{
        width: radius * 2 + fontSizeNum,
        height: radius * 2 + fontSizeNum,
        position: "relative",
      }}
      role="img"
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      <div
        className={spinClassName}
        style={{
          position: "absolute",
          inset: 0,
          fontSize,
        }}
      >
        <style>{`
          @keyframes spinCcw {
            to { transform: rotate(-360deg); }
          }
        `}</style>
        <div style={{
          width: "100%",
          height: "100%",
          animation: "spinCcw 10s linear infinite",
        }}>
          {chars.map((char, i) => {
            const angle = (360 / chars.length) * i
            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "0",
                  transformOrigin: `0 ${radius}px`,
                  transform: `rotate(${angle}deg) translateX(-50%)`,
                  height: radius + "px",
                }}
              >
                {renderChar ? renderChar(char, i) : char}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
