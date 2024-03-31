import { db } from "@/db";
import { project, room } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

export async function getProject(projectid: string) {
  return await db.query.project.findFirst({
    where: eq(project.id, projectid),
  });
}

export async function isRoomUsersAllotedEmpty(
  projectId: string
): Promise<boolean> {
  const roomRecord = await db.query.room.findFirst({
    where: eq(room.projectId, projectId),
  });

  if (roomRecord) {
    return roomRecord.usersAlloted.length === 0;
  }

  return true; // Assume room is empty if it's not found
}

export async function getRoom(projectid: string) {
  return await db.query.room.findMany({
    where: eq(room.projectId, projectid),
  });
}
