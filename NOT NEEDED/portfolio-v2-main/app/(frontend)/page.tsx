import { Banner } from "@/components/banner";
// import { CloudBackground } from "@/components/cloud-background";
import Divider from "@/components/divider";
import { ProfileHeader } from "@/components/profile-header";
import Blogs from "@/components/sections/blogs";
// import Scale from "@/components/scale";
// import Blogs from "@/components/sections/blogs";
import { CTA } from "@/components/sections/cta";
import ExperienceSection from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import GithubContributions from "@/components/sections/github-contributions";
import Projects from "@/components/sections/projects";
import { QuoteSection } from "@/components/sections/qoute";
import { SkillsSection } from "@/components/sections/skills";
import { Text } from "@/components/sections/txt";

export default function Home() {
  return (
    <>
      <Banner />
      <ProfileHeader />
      <Divider />
      <GithubContributions />
      <Divider />
      <ExperienceSection />
      <Divider />
      <Projects />
      <Divider />
      <SkillsSection />
      <Divider />
      <Blogs />
      <CTA />
      <Divider className="mb-0" />
      <Text />
      <Divider className="mt-0" />
      <QuoteSection />
      <Divider />
      <Footer />
    </>
  );
}
