"use server";

import { db } from "@/db";
import { Project, project } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const { v4: uuidv4 } = require("uuid");

export async function uploadImageToFirebaseStorage(image: File) {
  const imgID = uuidv4(); // Generate a UUID for the project ID
  const storage = getStorage();
  const storageRef = ref(storage, `projects/${imgID}/${image.name}`);
  await uploadBytes(storageRef, image);
  const downloadURL = await getDownloadURL(storageRef);
  return { downloadURL, imgID };
}

export async function createProjectAction(
  projectData: Omit<Project, "id" | "userId">
) {
  const session = await getSession();

  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

  // const { downloadURL, imgID } = await uploadImageToFirebaseStorage(image);
  await db.insert(project).values({
    ...projectData,
    userId: session.user.id,
  });
  revalidatePath("/");
}

export async function addProjectToRoomAction(
  roomId: string,
  projectId: string
) {
  await db
    .update(project)
    .set({ rooms: [roomId] } as Partial<Project>)
    .where(eq(project.id, projectId));
  revalidatePath("/");
}
