import PostgreSQL from "@/components/icons/postgresql";

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: { src: string; label: string }[];
  techIds: string[];
  links: { website?: string; github?: string };
}

export interface ProjectCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  techIds: string[];
  link: string;
}

export const techMeta: Record<string, { label: string; image?: string }> = {
  nextjs: { label: "Next.js" },
  tailwind: { label: "Tailwind" },
  "tanstack-query": { label: "TanStack Query" },
  drizzle: { label: "Drizzle" },
  sanity: { label: "Sanity" },
  payload: { label: "Payload" },
  supabase: { label: "Supabase" },
  motion: { label: "Motion", image: "/skills/motion.png" },
  zod: { label: "Zod" },
  "tanstack-forms": { label: "TanStack Forms" },
  plasmo: { label: "Plasmo" },
  postgre: { label: "PostgreSQL" },
};

const details: ProjectDetail[] = [
  {
    id: "divine-canvas",
    title: "Divine Canvas",
    description:
      "An e-commerce platform offering premium, sacred vector paintings.",
    longDescription:
      "Built an e-commerce store for Divine Canvas that sells sacred vector artwork. It's got a proper product catalog with filtering, a smooth cart and checkout flow, and a headless CMS running on Payload so they can manage inventory and orders on their own.",
    images: [
      { label: "Home", src: "/projects/divine-canvas/home.png" },
      { label: "Products", src: "/projects/divine-canvas/products.png" },
      { label: "Cart", src: "/projects/divine-canvas/cart.png" },
      { label: "Orders", src: "/projects/divine-canvas/orders.png" },
      { label: "Payment", src: "/projects/divine-canvas/payment.png" },
      { label: "Custom Order", src: "/projects/divine-canvas/custom-order.png" },
      { label: "Portfolio", src: "/projects/divine-canvas/portfolio.png" },
      { label: "Blogs", src: "/projects/divine-canvas/blogs.png" },
      { label: "Contact", src: "/projects/divine-canvas/contact.png" },
      { label: "Reviews", src: "/projects/divine-canvas/reviews.png" },
      { label: "Admin Panel", src: "/projects/divine-canvas/admin-panel.png" },
      { label: "Personal Details", src: "/projects/divine-canvas/personal-details.png" },
      { label: "Notifications", src: "/projects/divine-canvas/notifictions.png" },
    ],
    techIds: [
      "nextjs",
      "tailwind",
      "motion",
      "payload",
      "tanstack-query",
      "zod",
      "tanstack-forms",
      "postgre",
    ],
    links: { website: "https://divinecanvas.art/" },
  },
  {
    id: "rvyu",
    title: "rvyu.",
    description:
      "A place for developers to share their side projects and get feedback from peers.",
    longDescription:
      "A platform where devs can share their side projects and get real feedback from other builders. Kept the UI clean and minimal so the projects speak for themselves — nothing flashy, just good typography and smooth interactions.",
    images: [
      { label: "Website", src: "/rvyu.png" },
      { label: "Projects", src: "/projects/rvyu/projects.png" },
      { label: "Create Project", src: "/projects/rvyu/create-project.png" },
      { label: "Edit Project", src: "/projects/rvyu/edit-project.png" },
      { label: "Project Details", src: "/projects/rvyu/project-details.png" },
      { label: "Lists", src: "/projects/rvyu/lists.png" },
    ],
    techIds: [
      "nextjs",
      "tailwind",
      "motion",
      "drizzle",
      "tanstack-query",
      "zod",
      "tanstack-forms",
      "postgre",
    ],
    links: {
      website: "https://rvyu.vercel.app/",
      github: "https://rathore-abhishek/rvyu",
    },
  },
  {
    id: "theleansuite",
    title: "The Leansuite",
    description:
      "SaaS website and dashboard with a custom CMS to manage blogs and pages.",
    longDescription:
      "Marketing site with a headless CMS behind it. The CMS lets non-technical folks manage blog posts, pages, and e-books with a block editor — keeps everything clean and easy to update.",
    images: [
      { label: "Website", src: "/projects/theleansuite/theleansuite.png" },
      { label: "Posts", src: "/projects/theleansuite/posts.png" },
      { label: "Authors", src: "/projects/theleansuite/authors.png" },
      { label: "Categories", src: "/projects/theleansuite/categories.png" },
      { label: "Pages", src: "/projects/theleansuite/pages.png" },
      { label: "E-Books", src: "/projects/theleansuite/e-books.png" },
    ],
    techIds: [
      "nextjs",
      "tailwind",
      "motion",
      "sanity",
      "tanstack-query",
      "zod",
      "tanstack-forms",
    ],
    links: { website: "https://theleansuite.com/" },
  },
  {
    id: "spf-logistics",
    title: "SPF Logistics",
    description:
      "Public website and internal dashboard built for an Australian logistics firm.",
    longDescription:
      "Public website plus an internal panel for managing the logistics side of things — blogs, career submissions, contact forms, and user profiles all in one place.",
    images: [
      { label: "Public Website", src: "/spf-logistics.png" },
      { label: "Login", src: "/projects/spf-logistics-panel/login.png" },
      { label: "Blogs", src: "/projects/spf-logistics-panel/blogs.png" },
      {
        label: "Blog Details",
        src: "/projects/spf-logistics-panel/blog-details.png",
      },
      { label: "Profile", src: "/projects/spf-logistics-panel/profile.png" },
    ],
    techIds: [
      "nextjs",
      "supabase",
      "tailwind",
      "motion",
      "tanstack-query",
      "zod",
      "tanstack-forms",
    ],
    links: { website: "https://spflogistics.com.au" },
  },
  {
    id: "trakkar-in",
    title: "Trakkar.in Extension",
    description:
      "Extension for time tracking with screenshot capture and task management.",
    longDescription:
      "A browser extension built for seamless time tracking, automatic screenshot capture, and task management. Designed for freelancers and remote teams to log hours effortlessly directly from the browser with a clean, minimal interface.",
    images: [
      { label: "Projects", src: "/projects/trakkar.in-exntesion/projects.png" },
      { label: "Tasks", src: "/projects/trakkar.in-exntesion/tasks.png" },
      { label: "Add Task", src: "/projects/trakkar.in-exntesion/add-task.png" },
      { label: "Login", src: "/projects/trakkar.in-exntesion/login.png" },
    ],
    techIds: [
      "plasmo",
      "supabase",
      "tailwind",
      "motion",
      "tanstack-query",
      "zod",
      "tanstack-forms",
    ],
    links: {
      website:
        "https://chromewebstore.google.com/detail/ojlcbfblfbkbfkoffkbfckmooaolpigl",
    },
  },
];

export const projectsData: Record<string, ProjectDetail> = {};
export const projectCardData: ProjectCardItem[] = [];
export const projectSlugs: string[] = [];

for (const d of details) {
  projectsData[d.id] = d;
  projectSlugs.push(d.id);
  projectCardData.push({
    id: d.id,
    title: d.title,
    description: d.description,
    image: d.images[0].src,
    techIds: d.techIds,
    link: d.links.website ?? "",
  });
}
