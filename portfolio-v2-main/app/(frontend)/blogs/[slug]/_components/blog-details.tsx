import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import Image from "next/image";
import Container from "@/components/container";
import ShareButton from "./share-button";
import Calendar from "@/components/icons/calendar";

interface BlogDetailProps {
  title: string;
  slug: string;
  content: SerializedEditorState;
  createdAt: string;
  image?: { url: string; alt?: string | null } | null;
}

const BlogDetails = ({
  title,
  slug,
  content,
  createdAt,
  image,
}: BlogDetailProps) => {
  return (
    <Container className="flex-1 px-8">
      <article className="flex flex-col">
        {image && (
          <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-black/5 dark:bg-white/5">
            <Image
              src={image.url}
              alt={image.alt ?? title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="w-full space-y-2">
            <h1 className="font-serif text-5xl font-medium text-black dark:text-white">
              {title}
            </h1>
            <div className="flex w-full items-center justify-between gap-2">
              <span className="inline-flex items-center justify-center gap-2 font-mono text-sm text-black/40 dark:text-white/30">
                <Calendar />{" "}
                {new Date(createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <ShareButton
                title={title}
                url={
                  typeof window !== "undefined"
                    ? window.location.href
                    : `https://abhishekz.me/blogs/${slug}`
                }
              />
            </div>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none border-t">
          <RichText data={content} />
        </div>
      </article>
    </Container>
  );
};

export default BlogDetails;
