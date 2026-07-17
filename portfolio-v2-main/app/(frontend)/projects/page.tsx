import type { Metadata } from "next";
import Divider from "@/components/divider";
import Navbar from "./_components/navbar";
import ProjectsSection from "./_components/projects";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Projects — Abhishek Rathore",
  description:
    "A showcase of my work — full-stack applications, side projects, and things I've built from scratch.",
  openGraph: {
    title: "Projects — Abhishek Rathore",
    description:
      "A showcase of my work — full-stack applications, side projects, and things I've built from scratch.",
    type: "website",
    siteName: "Abhishek Rathore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Abhishek Rathore",
    description:
      "A showcase of my work — full-stack applications, side projects, and things I've built from scratch.",
    creator: "@abhiishekz",
  },
};

const ProjectsPage = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Divider />
      <ProjectsSection />
      <Divider />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
