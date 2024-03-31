import { NextRequest, NextResponse } from "next/server";
import { room } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { and } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userId, projectId } = body;

  // Find all existing rooms with the same projectId
  const existingRooms = await db
    .select()
    .from(room)
    .where(eq(room.projectId, projectId));

  let roomToUpdate = null;

  // Find a room with less than four users allotted
  for (let i = 0; i < existingRooms.length; i++) {
    if (existingRooms[i].usersAlloted.length < 4) {
      roomToUpdate = existingRooms[i];
      break;
    }
  }

  if (roomToUpdate) {
    // Update the existing room by adding the new user
    await db
      .update(room)
      .set({ usersAlloted: [...roomToUpdate.usersAlloted, userId] })
      .where(eq(room.id, roomToUpdate.id));
  } else {
    // Create a new room and allot the user
    await db.insert(room).values({
      projectId,
      name: "New Room",
      description: "New Room for project",
      usersAlloted: [userId],
    });
  }

  return NextResponse.json({ message: "Room allotted successfully" });
}
