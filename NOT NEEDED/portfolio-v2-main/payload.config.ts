import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Blogs } from "./collections/blogs";
import { Categories } from "./collections/categories";
import { Media } from "./collections/media";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Media, Categories, Blogs],

  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: { disablePayloadAccessControl: true },
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
});
