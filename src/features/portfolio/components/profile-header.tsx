import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"
import { ScrambleText } from "@/components/scramble-text"
import { SpinningCircularText } from "@/registry/components/spinning-circular-text/spinning-circular-text"
import { TextFlip } from "@/registry/components/text-flip"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { PronounceMyName } from "./pronounce-my-name"
import { SpotlightLogo } from "@/registry/components/spotlight-logo/spotlight-logo"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x border-line">
      <figure className="relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <SpotlightLogo />
        <figcaption className="pointer-events-none absolute right-2 bottom-2 font-mono text-xs leading-none text-zinc-400 select-none sm:right-4 dark:text-zinc-700">
          FIG_001
        </figcaption>
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <AvatarLightsToggle className="group/avatar-lights-toggle mx-0.5 my-0.75 flex outline-none">
            <div className="relative grid place-items-center">
              <SpinningCircularText
                text="Trying to be better"
                fontSize="1.18rem"
                charSpacing={1.5}
                spinClassName="duration-[20s]"
              />
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <AvatarLights
                  className="ring-border ring-offset-background group-focus-visible/avatar-lights-toggle:ring-1 group-focus-visible/avatar-lights-toggle:ring-offset-2"
                  variants={USER.avatarVariants}
                />
              </div>
            </div>
          </AvatarLightsToggle>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <ScrambleText
              as="h1"
              text={USER.displayName}
              className="-translate-y-px text-[2rem]/none font-medium tracking-tight"
            />

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="border-t border-line py-1 pl-4">
            <TextFlip
              className="font-mono text-sm text-muted-foreground"
              interval={2.5}
            >
              <span>Developer</span>
              <span>Builder</span>
              <span>Designer</span>
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  )
}
