import { db } from "@/db";
import { ProjectWorking, projectWorking } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function acceptProjectAction(projectId: string) {
  const session = await getSession();
  if (!session) {
    return;
  }

  await db
    .update(projectWorking)
    .set({ projects: [projectId] } as Partial<ProjectWorking>)
    .where(eq(projectWorking.userId, session.user.id));

  revalidatePath("/projects");
}
