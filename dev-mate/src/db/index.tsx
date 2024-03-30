import { drizzle } from "drizzle-orm/postgres-js";
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from "postgres";
import * as schema from "./schema";

// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)

// for query purposes
const queryClient = postgres(
  "postgres://postgres.eonxjcafvsumacwweair:devmate123!@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);
const db = drizzle(queryClient, { schema });
// await db.select().from(...)...

export { db };
