import { ArrowUpRight } from "lucide-react"

import { ScrambleText } from "@/components/scramble-text"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}><ScrambleText text="Projects" /></a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 [&>*]:border-b [&>*]:border-line [&>*:nth-child(odd)]:sm:border-r [&>*:nth-child(odd)]:sm:border-r-line">
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden rounded-none border-0 pt-0 shadow-none ring-0"
          >
            <CardContent className="px-0">
              <div className="aspect-video w-full bg-muted" />
            </CardContent>
            <CardHeader className="px-4 py-4">
              <CardTitle className="font-heading text-lg font-medium">
                {project.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="gap-3 rounded-none px-4 pb-4 max-sm:flex-col max-sm:items-stretch">
              {project.github && (
                <Button variant="outline" className="gap-2" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full border border-current">
                      <svg viewBox="0 0 98 96" className="size-3" fill="currentColor" aria-hidden>
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                      </svg>
                    </span>
                    GitHub
                  </a>
                </Button>
              )}
              <Button variant="default" className="gap-2" asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                >
                  Visit Now
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Panel>
  )
}
