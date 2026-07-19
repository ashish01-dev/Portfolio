export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      {/* A */}
      <path
        fill="currentColor"
        d="M68 256H16V0h52v256ZM144 256H92V0h52v256ZM118 32H42V0h76v32ZM144 128H24v32h120v-32Z"
      />
      {/* K */}
      <path
        fill="currentColor"
        d="M288 256h-48V0h48v256ZM512 64H288V0h48v48h176v16ZM512 208H336v48h-48v-96h224v48Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M34 128H8V0h26v128ZM72 128H46V0h26v128ZM59 16H21V0h38v16ZM72 64H12v16h60v-16ZM144 128h-24V0h24v128ZM256 32H144V0h24v24h88v8ZM256 104H168v24h-24v-48h112v24Z"/></svg>`
}
