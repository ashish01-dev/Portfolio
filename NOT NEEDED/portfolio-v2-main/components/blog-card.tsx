"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import NoImage from "./icons/no-image";

interface BlogCardHomeProps {
  title: string;
  slug: string;
  image?: { url: string; alt?: string | null } | null;
  createdAt: string;
}

const BlogCardHome = ({ title, slug, image, createdAt }: BlogCardHomeProps) => {
  return (
    <Link href={`/blogs/${slug}`} className="group relative block">
      <div className="h-full space-y-4 py-2">
        <div className="relative perspective-[2000px]">
          <motion.div
            initial={{ rotateY: -12, rotateX: 5, x: 8, y: -6 }}
            whileHover={{ rotateY: 0, rotateX: 0, x: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="border-border bg-muted/30 relative aspect-video w-full overflow-hidden rounded-sm border"
          >
            {image ? (
              <Image
                src={image.url}
                alt={image.alt ?? title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-sm object-cover"
              />
            ) : (
              <div className="bg-accent flex h-full items-center justify-center">
                <NoImage className="size-4.5 opacity-50" />
              </div>
            )}
          </motion.div>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-sm border-x border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-black/40 dark:text-white/30">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="relative block overflow-visible">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[4px_4px] bg-fixed bg-clip-text font-medium text-transparent italic select-none"
            >
              {title}
            </span>
            <span className="block max-w-[90%] text-sm leading-tight font-medium text-black/60 italic transition-colors duration-200 group-hover:text-black dark:text-white/50 dark:group-hover:text-white">
              {title}
            </span>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardHome;
