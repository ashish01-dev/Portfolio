"use client";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useMotionValue, animate } from "motion/react";

import TypeScript from "@/components/icons/typescript";
import NextJS from "@/components/icons/nextjs";
import TailwindCSS from "@/components/icons/tailwind";
import PostgreSQL from "@/components/icons/postgresql";
import Supabase from "@/components/icons/supabase";
import Docker from "../icons/docker";
import Figma from "../icons/figma";
import Drizzle from "../icons/drizzle";
import Prisma from "../icons/prisma";
import Sanity from "../icons/sanity";
import Container from "../container";
import Payload from "../icons/payload";

interface Skill {
  name: string;
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
  image?: string;
}

const skills: Skill[] = [
  { name: "Next.js", icon: NextJS },
  { name: "TypeScript", icon: TypeScript },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "Supabase", icon: Supabase },
  { name: "Payload CMS", icon: Payload },
  { name: "Drizzle", icon: Drizzle },
  { name: "Prisma", icon: Prisma },
  { name: "Sanity", icon: Sanity },
  { name: "Framer Motion", image: "/skills/motion.png" },
  // { name: "Git", icon: Git },
  { name: "Docker", icon: Docker },
  { name: "Figma", icon: Figma },
];

export const SkillsSection = () => {
  return (
    <Container className="px-8">
      <h2 className="mb-6 font-serif text-xl text-black/50 dark:text-white/40">
        Stack I use
      </h2>
      <TooltipProvider>
        <div className="relative grid grid-cols-4 justify-items-center gap-8 sm:grid-cols-6 md:grid-cols-8 md:justify-items-start lg:grid-cols-12">
          <span className="pointer-events-none absolute -top-12 right-0 size-12 -rotate-34 font-mono text-[10px] font-medium text-black/30 dark:text-white/10">
            drag me :D
          </span>
          <svg
            className="pointer-events-none absolute -top-12 right-15 size-10 rotate-120 text-black/30 dark:text-white/10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 323.057 323.057"
            fill="currentColor"
          >
            <path d="M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343M144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707"></path>
            <path d="M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73"></path>
          </svg>
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <DraggableSkill>
                  {skill.icon ? (
                    <skill.icon className="h-8 w-8 text-black md:h-10 md:w-10 dark:text-white" />
                  ) : skill.image ? (
                    <div className="relative h-8 w-8 md:h-10 md:w-10">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        draggable={false}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-[10px] font-bold md:h-10 md:w-10 dark:border-white/10">
                      {skill.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </DraggableSkill>
              </TooltipTrigger>
              <TooltipContent side="top" className="font-medium">
                {skill.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Container>
  );
};

export const DraggableSkill = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof motion.div>
>(({ children, className, ...props }, ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragEnd={() => {
        animate(x, 0, {
          type: "spring",
          stiffness: 350,
          damping: 24,
          mass: 1.1,
        });
        animate(y, 0, {
          type: "spring",
          stiffness: 350,
          damping: 24,
          mass: 1.1,
        });
      }}
      whileTap={{ cursor: "grabbing" }}
      className={`z-20 cursor-grab touch-none select-none active:cursor-grabbing ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </motion.div>
  );
});

DraggableSkill.displayName = "DraggableSkill";
