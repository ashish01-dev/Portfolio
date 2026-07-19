import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"

export function NotFound() {
  return (
    <div className="grid min-h-svh place-items-center py-6">
      <section className="flex flex-col items-center gap-6">
        <h1 className="font-mono text-8xl font-medium">404</h1>

        <p className="max-w-64 text-center text-base text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Button
          className="gap-2 pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/" />}
        >
          Back to home
          <ArrowRightIcon />
        </Button>
      </section>
    </div>
  )
}
