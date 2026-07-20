import type { MetadataRoute } from "next";

import { getDocsByCategory } from "@/features/doc/data/documents";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ratneshc.com";

  const blogs = getDocsByCategory("blogs").map((doc) => ({
    url: `${baseUrl}/blog/${doc.slug}`,
    lastModified: new Date(
      doc.metadata.updatedAt || doc.metadata.createdAt
    ).toISOString(),
  }));

  const components = getDocsByCategory("components").map((doc) => ({
    url: `${baseUrl}/components/${doc.slug}`,
    lastModified: new Date(
      doc.metadata.updatedAt || doc.metadata.createdAt
    ).toISOString(),
  }));

  const routes = ["", "/blog", "/components", "/collection"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs, ...components];
}
