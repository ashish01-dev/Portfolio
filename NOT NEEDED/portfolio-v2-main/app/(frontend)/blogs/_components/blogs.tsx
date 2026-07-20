import config from "@payload-config";
import { getPayload } from "payload";
import Container from "@/components/container";
import BlogCard from "@/components/blog-card";

const BlogsSection = async () => {
  const payload = await getPayload({ config });

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    depth: 1,
    limit: 12,
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
    <Container className="flex-1 px-8">
      <div className="mb-8 space-y-2">
        <h2 className="font-serif text-3xl text-black/80 italic dark:text-white/80">
          thoughts
        </h2>
        <p className="text-base tracking-wider text-black/40 dark:text-white/40">
          Stuff I write about design, code, and building things.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default BlogsSection;
