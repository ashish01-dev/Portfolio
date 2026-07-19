import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.name}>
              <Button
                className="text-foreground/80 shadow-none rounded-full [&_svg:not([class*='size-'])]:size-4.5"
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a
                    href={addQueryParams(item.href, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    {SOCIAL_ICONS[item.name]}
                    <span>{item.title}</span>
                  </a>
                }
              />
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
