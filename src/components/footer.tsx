"use client"

import { useSwitch } from "@/components/Context/SwitchContext"
import { rinkitFooterLink } from "@/data/RinkitData/data"
import { gruzFooterLink } from "@/data/GruzData/data"
import SpotlightLogo from "@/components/spotlight-logo"

function SpinningCircularText() {
  return (
    <div className="relative flex size-16 items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="size-16 animate-[spin_10s_linear_infinite]"
      >
        <defs>
          <path
            id="circle-path"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>
        <text className="fill-muted-foreground text-[10px] font-medium uppercase tracking-[0.2em]">
          <textPath href="#circle-path" startOffset="0%">
            Ashish Kumar Singh •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <SpotlightLogo size={20} />
      </div>
    </div>
  )
}

export default function Footer() {
  const { isSwitchOn } = useSwitch()
  const footerLinks = isSwitchOn ? gruzFooterLink : rinkitFooterLink

  return (
    <footer className="mt-20 flex flex-col items-center gap-6 border-t border-border pt-8 pb-12">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Crafted by</span>
        <a
          href="https://github.com/ashish01-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          @ashish01-dev
        </a>
      </div>

      <div className="flex items-center gap-3">
        {footerLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <link.icon className="size-4" />
          </a>
        ))}
      </div>

      <SpinningCircularText />

      <p className="text-xs text-muted-foreground/60">
        &copy; {new Date().getFullYear()} Ashish Kumar Singh. All rights reserved.
      </p>
    </footer>
  )
}
