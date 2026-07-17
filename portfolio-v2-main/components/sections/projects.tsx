"use client";

import ProjectCard from "../project-card";
import NextJS from "../icons/nextjs";
import TailwindCSS from "../icons/tailwind";
import TanstackQuery from "../icons/tanstack-query";
import Drizzle from "../icons/drizzle";
import Sanity from "../icons/sanity";
import Container from "../container";
import Payload from "../icons/payload";
import Supabase from "../icons/supabase";
import Link from "next/link";
import { projectCardData, techMeta } from "@/data/projects";
import type { ReactNode } from "react";
import Share from "../icons/share";

const iconMap: Record<string, ReactNode> = {
  nextjs: <NextJS />,
  tailwind: <TailwindCSS />,
  "tanstack-query": <TanstackQuery />,
  drizzle: <Drizzle />,
  sanity: <Sanity />,
  payload: <Payload />,
  supabase: <Supabase />,
};

const ProjectsSection = () => {
  return (
    <Container className="px-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl text-black/50 dark:text-white/40">
          Proof of work
        </h2>
        <Link
          href={"/projects"}
          className="inline-flex items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 hover:text-black/90 dark:text-white/30 dark:hover:text-white/90"
        >
          ALL
          <Share />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectCardData.slice(0, 3).map((p) => (
          <ProjectCard
            key={p.id}
            slug={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            techStack={p.techIds.map((id) => {
              const meta = techMeta[id];
              return {
                id,
                label: meta?.label ?? id,
                icon: iconMap[id],
                image: meta?.image,
              };
            })}
          />
        ))}
      </div>
      <h5 className="font-neu mt-4 bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text py-1 text-center text-3xl font-extrabold whitespace-nowrap text-transparent opacity-30 md:text-6xl">
        Shipping More Soon
      </h5>
    </Container>
  );
};

export default ProjectsSection;
