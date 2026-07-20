import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["image", "title", "category", "status", "createdAt"],
    group: "Content",
    description: "Blog posts and articles",
    listSearchableFields: ["title", "slug", "description"],
  },
  versions: {
    drafts: {
      autosave: false,
    },
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        revalidatePath("/");
        revalidatePath("/blogs");
        if (doc && typeof doc.slug === "string") {
          revalidatePath(`/blogs/${doc.slug}`);
        }
        if (
          previousDoc &&
          typeof previousDoc.slug === "string" &&
          previousDoc.slug !== doc?.slug
        ) {
          revalidatePath(`/blogs/${previousDoc.slug}`);
        }
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidatePath("/");
        revalidatePath("/blogs");
        if (doc && typeof doc.slug === "string") {
          revalidatePath(`/blogs/${doc.slug}`);
        }
      },
    ],
  },
  defaultSort: "-createdAt",
  timestamps: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      index: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      required: true,
      admin: {
        components: {
          Field: {
            path: "/components/payload/slug-field.tsx",
            exportName: "SlugField",
            clientProps: {
              fieldName: "title",
            },
          },
        },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description: "Featured image for the blog post",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "blogs-categories",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Published",
          value: "published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
