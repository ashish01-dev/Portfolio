"use client";

import Container from "@/components/container";
import ArrowUpRight from "@/components/icons/arrow-up-right";
import Github from "@/components/icons/github";
import NextJS from "@/components/icons/nextjs";
import TailwindCSS from "@/components/icons/tailwind";
import TanstackQuery from "@/components/icons/tanstack-query";
import Drizzle from "@/components/icons/drizzle";
import Sanity from "@/components/icons/sanity";
import Payload from "@/components/icons/payload";
import Supabase from "@/components/icons/supabase";
import Zod from "@/components/icons/zod";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  useState,
  type ReactNode,
  useEffect,
  useCallback,
  useRef,
} from "react";
import type { ProjectDetail } from "@/data/projects";
import { techMeta } from "@/data/projects";
import { Button } from "@/components/ui/button";
import TanstackForm from "@/components/icons/tanstack-form";
import PostgreSQL from "@/components/icons/postgresql";
import Plasmo from "@/components/icons/plasmo";

const techIconMap: Record<string, ReactNode> = {
  nextjs: <NextJS />,
  tailwind: <TailwindCSS />,
  "tanstack-query": <TanstackQuery />,
  drizzle: <Drizzle />,
  sanity: <Sanity />,
  payload: <Payload />,
  supabase: <Supabase />,
  zod: <Zod />,
  "tanstack-forms": <TanstackForm />,
  postgre: <PostgreSQL />,
  plasmo: <Plasmo />,
};

interface Props {
  project: ProjectDetail;
}

const ProjectDetails = ({ project }: Props) => {
  const [current, setCurrent] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const touchStartX = useRef(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % project.images.length),
    [project.images.length],
  );
  const prev = useCallback(
    () =>
      setCurrent(
        (p) => (p - 1 + project.images.length) % project.images.length,
      ),
    [project.images.length],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, [paused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next();
    }
  };

  return (
    <Container className="flex-1 px-9">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-medium tracking-tight text-black dark:text-white">
              {project.title}
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.links.website && (
              <Button variant="outline" size="icon" className="group" asChild>
                <a target="_blank" href={project.links.website}>
                  <span className="relative block size-3.5 overflow-hidden">
                    <ArrowUpRight className="absolute inset-0 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
                    <ArrowUpRight className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </span>
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant={"secondary"} className="border" asChild>
                <a target="_blank" href={project.links.github}>
                  <Github />
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techIds.map((id) => {
            const meta = techMeta[id];
            if (!meta) return null;
            return (
              <span
                key={id}
                className="inline-flex items-center gap-1 rounded-md border border-dashed border-black/20 bg-transparent px-2 py-1 text-sm text-black transition-colors duration-200 hover:border-black/40 hover:bg-black/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
              >
                {techIconMap[id] && (
                  <span className="flex size-4 shrink-0 items-center justify-center overflow-hidden [&>svg]:size-full">
                    {techIconMap[id]}
                  </span>
                )}
                {meta.image && (
                  <Image
                    src={meta.image}
                    alt={meta.label}
                    width={16}
                    height={16}
                    className="size-4 shrink-0 rounded-full object-contain"
                  />
                )}
                <span className="text-sm font-semibold">{meta.label}</span>
              </span>
            );
          })}
        </div>

        <div
          className="group relative my-2"
          onMouseEnter={() => {
            setPaused(true);
            setHoveredImage(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
            setHoveredImage(false);
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black/5 dark:bg-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, filter: "blur(8px)", x: 40 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", x: -40 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="h-full w-full"
              >
                <Image
                  src={project.images[current].src}
                  alt={`${project.title} — ${project.images[current].label}`}
                  width={1200}
                  height={675}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-4">
              <span className="inline-block overflow-hidden rounded-md">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={current}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="block rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-[2px]"
                  >
                    {project.images[current].label}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>

            <AnimatePresence>
              {hoveredImage && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    onClick={prev}
                    className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-xs transition-all hover:bg-white/25"
                  >
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.15 }}
                    onClick={next}
                    className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 text-white backdrop-blur-xs transition-all hover:bg-white/25"
                  >
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="my-3 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    i === current
                      ? "h-1.5 w-6 bg-black/60 dark:bg-white/60"
                      : "h-1.5 w-1.5 bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-base leading-relaxed text-black/50 dark:text-white/50">
            {project.longDescription}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
