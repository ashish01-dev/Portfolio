import config from "@payload-config";
import { getPayload } from "payload";
import Link from "next/link";
import Divider from "../divider";
import Container from "../container";
import Share from "../icons/share";
import BlogCard from "../blog-card";

const BlogsSection = async () => {
  const payload = await getPayload({ config });

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    depth: 1,
    limit: 3,
    sort: "-createdAt",
    where: { status: { equals: "published" } },
    select: {
      title: true,
      slug: true,
      image: true,
      createdAt: true,
    },
  });

  if (blogs.length === 0) return null;

  return (
    <>
      <Container className="px-8">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-xl text-black/50 italic dark:text-white/40">
            My Thoughts
          </h2>
          <Link
            href={"/blogs"}
            className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 hover:text-black/90 dark:text-white/30 dark:hover:text-white/90"
          >
            ALL <Share />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.slug}
              image={
                blog.image && typeof blog.image === "object"
                  ? {
                      url: (blog.image as { url: string }).url,
                      alt: (blog.image as { alt?: string | null }).alt,
                    }
                  : null
              }
              createdAt={blog.createdAt}
            />
          ))}
        </div>
      </Container>
      <Divider />
    </>
  );
};

export default BlogsSection;
