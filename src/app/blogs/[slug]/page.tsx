"use client"

import Link from "next/link"
import { House, ArrowLeft } from "lucide-react"
import { writings } from "@/data/Common/data"
import { ThemeToggle } from "@/components/ThemeToggle"

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const writing = writings.find((w) => w.link.endsWith(slug))

  if (!writing) {
    return (
      <div className="main-screen">
        <div className="screen flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white mb-4">Not Found</h1>
            <Link href="/blogs" className="text-white/60 hover:text-white">
              Back to Writings
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-screen">
      <div className="screen">
        <div className="md:fixed md:top-4 flex w-full items-center md:justify-between justify-end md:px-8 px-4 select-none">
          <Link href="/" className="flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium">
            <House className="size-4" />
            <span className="hidden md:block">Home</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-8 pt-16 pb-12 px-4 md:px-8 max-w-3xl">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">/</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">writings</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">{slug}</span>
          </div>

          <h1 className="text-4xl font-semibold text-white">{writing.head}</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/60">{writing.des}</p>
            <hr className="my-8 border-zinc-700" />
            <p className="text-white/60">This article is coming soon. Check back later!</p>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-zinc-700 pt-8">
            <Link href="/blogs" className="inline-flex items-center gap-1 text-sm font-medium text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="size-4" />
              Back to Writings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}