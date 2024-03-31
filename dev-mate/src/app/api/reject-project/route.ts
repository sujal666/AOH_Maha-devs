import { NextRequest, NextResponse } from "next/server";
import { projectWorking } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userId, notWorking } = body;

  // Check if a record already exists for the user
  const existingRecord = await db
    .select()
    .from(projectWorking)
    .where(eq(projectWorking.userId, userId));

  if (existingRecord && existingRecord.length > 0) {
    // Update the existing record
    await db
      .update(projectWorking)
      .set({
        notWorking,
      })
      .where(eq(projectWorking.userId, userId));
  } else {
    // Insert a new record
    await db.insert(projectWorking).values({
      userId,
      notWorking,
    });
  }

  return NextResponse.json({ existingRecord });
}
