"use server";
import { db } from "@/db";
import { ProjectWorking, projectWorking } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getSession } from "next-auth/react";

export async function addToDB(existProjectIds: any) {
  const session = await getSession();
  if (!session) {
    return;
  }
  const projects = await db
    .select()
    .from(projectWorking)
    .where(eq(projectWorking.userId, session.user.id));

  if (projects) {
    await db.update(projectWorking).set({ projects: existProjectIds });
  } else {
    if (session.user.id) {
      await db.insert(projectWorking).values({
        userId: session.user.id,
        projects: existProjectIds,
        previousProjects: existProjectIds,
      });
    } else {
      // Handle the case where session.user.id is undefined
      console.error("session.user.id is undefined");
    }
  }
}
