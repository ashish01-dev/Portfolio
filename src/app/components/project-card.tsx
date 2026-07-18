"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Link as LinkIcon, Share2 } from "lucide-react";
import { ShaderBackground } from "./shader-background";
import type { ShaderVariant } from "./shader-background";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 98 96" className={className || "size-4"} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
    </svg>
  );
}

function InfoTipProject({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="relative flex items-center select-none">
      <div className="group relative flex">
        {children}
        <span className="absolute bottom-6 left-1/2 transform transition-all -translate-x-1/2 mb-2 w-max bg-foreground text-background font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 duration-100 pointer-events-none">
          {text}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-foreground" />
        </span>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  img: string;
  status: boolean;
  title: string;
  content: string;
  url?: string;
  github?: string;
  skill: string[];
  preview?: string;
  href?: string;
  shader?: { variant: ShaderVariant; props: Record<string, unknown> };
}

export default function ProjectCard({
  img,
  status,
  title,
  content,
  url,
  github,
  skill,
  preview,
  href,
  shader,
}: ProjectCardProps) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".project-box")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleShare = async (shareUrl: string) => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="project-box bg-muted cursor-pointer hover:bg-accent/[0.04] transition-colors duration-100 border border-border rounded-md"
    >
      <AnimatePresence mode="wait">
        {show && preview && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-2">
              <video className="rounded-md w-full" loop autoPlay controls>
                <source src={preview} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex md:flex-row flex-col gap-3 p-2">
        <div className="basis-[22%] p-1 select-none">
          {href ? (
            <Link href={href} onClick={(e) => e.stopPropagation()}>
              <motion.div
                whileHover={{ scaleY: 0.92, translateY: 4 }}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="origin-top relative overflow-hidden rounded-md"
              >
                {shader && (
                  <div className="absolute inset-0">
                    <ShaderBackground variant={shader.variant} {...shader.props} className="h-full w-full" />
                  </div>
                )}
                <Image
                  className="relative md:h-[130px] h-[200px] w-full object-contain object-bottom"
                  src={img}
                  alt={title}
                  width={200}
                  height={200}
                />
              </motion.div>
            </Link>
          ) : (
            <div className="relative overflow-hidden rounded-md">
              {shader && (
                <div className="absolute inset-0">
                  <ShaderBackground variant={shader.variant} {...shader.props} className="h-full w-full" />
                </div>
              )}
              <Image
                className="relative md:h-[130px] h-[200px] w-full object-contain object-bottom"
                src={img}
                alt={title}
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
        <div className="basis-[78%] flex flex-col md:gap-0 gap-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center truncate">
              <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
              {status ? (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-400/10 text-green-400">
                  <span className="animate-pulse"><span className="size-1.5 rounded-full bg-current inline-block" /></span>
                  Running
                </div>
              ) : (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-red-400/10 text-red-400">
                  <span className="animate-pulse"><span className="size-1.5 rounded-full bg-current inline-block" /></span>
                  Building
                </div>
              )}
            </div>
            <div className="select-none flex gap-2 px-2 text-base">
              {preview && (
                <>
                  {show ? (
                    <InfoTipProject text="Close">
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                          setShow((prev) => !prev);
                        }}
                        target="_blank"
                        className="cursor-pointer hover:text-foreground/60 transition-colors duration-100 text-foreground/60"
                      >
                        <EyeOff className="size-4" />
                      </a>
                    </InfoTipProject>
                  ) : (
                    <InfoTipProject text="Preview">
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                          setShow((prev) => !prev);
                        }}
                        target="_blank"
                        className="cursor-pointer hover:text-foreground/60 transition-colors duration-100 text-foreground/60"
                      >
                        <Eye className="size-4" />
                      </a>
                    </InfoTipProject>
                  )}
                </>
              )}
              {url && (
                <InfoTipProject text="Live">
                  <a
                    target="_blank"
                    className="hover:text-foreground/60 transition-colors duration-100 text-foreground/60"
                    href={url}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkIcon className="size-4" />
                  </a>
                </InfoTipProject>
              )}
              {github && (
                <InfoTipProject text="Github">
                  <a
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="hover:text-foreground/60 transition-colors duration-100 text-foreground/60"
                    href={github}
                  >
                    <GithubIcon className="size-4" />
                  </a>
                </InfoTipProject>
              )}
            </div>
          </div>
          <p className="opacity-80 text-foreground/80">{content}</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex border-t border-border w-[97%] mt-3 md:mt-0 mx-auto" />
            <div className="flex justify-between items-center md:py-2 py-3 px-3 transition-all duration-100">
              <div className="flex flex-wrap gap-1.5 select-none">
                {skill.map((skillName, index) => (
                  <p
                    key={index}
                    className="border border-border px-2 py-0.5 rounded-md text-sm text-foreground/80"
                  >
                    {skillName}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 items-center md:px-2 px-2.5 md:text-lg text-xl">
                <div
                  className="cursor-pointer select-none hover:text-foreground/60 transition-colors duration-100 text-foreground/60"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(url || github || "");
                  }}
                >
                  <Share2 className="size-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
