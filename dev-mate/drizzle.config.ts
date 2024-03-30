import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://postgres.eonxjcafvsumacwweair:devmate123!@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres",
  },
  verbose: true,
  strict: true,
});
