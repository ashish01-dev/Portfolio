import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"
import { ScrambleText } from "@/components/scramble-text"
import { SpinningCircularText } from "@/registry/components/spinning-circular-text/spinning-circular-text"
import { TextFlip } from "@/registry/components/text-flip"

import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] border-x border-line">
      <figure className="relative col-span-2 overflow-hidden sm:col-span-1 sm:col-start-2">
        <video
          src="/videmp4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-auto w-full"
        />
        <figcaption className="pointer-events-none absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
          <ScrambleText
            text={USER.displayName}
            className="text-[2rem]/none font-medium tracking-tight"
          />
        </figcaption>
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <AvatarLightsToggle className="group/avatar-lights-toggle mx-0.5 my-0.75 flex outline-none">
            <SpinningCircularText
              text="Trying to do better"
              fontSize="1.2rem"
              charSpacing={2.5}
              spinClassName="duration-[20s]"
            >
              <AvatarLights
                className="ring-border ring-offset-background group-focus-visible/avatar-lights-toggle:ring-1 group-focus-visible/avatar-lights-toggle:ring-offset-2"
                variants={USER.avatarVariants}
              />
            </SpinningCircularText>
          </AvatarLightsToggle>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <VerifiedIcon className="size-4.5 select-none" aria-hidden />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="py-2 pl-4">
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
