"use client";

import ProjectCard from "@/components/project-card";
import NextJS from "@/components/icons/nextjs";
import TailwindCSS from "@/components/icons/tailwind";
import TanstackQuery from "@/components/icons/tanstack-query";
import Drizzle from "@/components/icons/drizzle";
import Sanity from "@/components/icons/sanity";
import Container from "@/components/container";
import Payload from "@/components/icons/payload";
import Supabase from "@/components/icons/supabase";
import { projectCardData, techMeta } from "@/data/projects";
import type { ReactNode } from "react";

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
      <div className="mb-8 space-y-2">
        <h2 className="font-serif text-3xl text-black/80 italic dark:text-white/80">
          proof of work
        </h2>
        <p className="text-base tracking-wider text-black/40 dark:text-white/40">
          A showcase of my work and side projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectCardData.map((p) => (
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
