import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "blogs-categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug"],
    group: "Content",
    description: "Blog post categories",
    listSearchableFields: ["name", "slug"],
  },
  timestamps: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      required: true,
      admin: {
        position: "sidebar",
        description: "Auto-generated from name if left empty",
        components: {
          Field: {
            path: "/components/payload/slug-field.tsx",
            exportName: "SlugField",
          },
        },
      },
    },
  ],
};
