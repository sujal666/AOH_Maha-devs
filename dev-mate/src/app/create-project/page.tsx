import { CreateProjectForm } from "@/components/create-project-form";
import { CreateRoomForm } from "@/components/create-room-form";
import { getSession } from "@/lib/auth";


export default async function CreateRoomPage() {
  const session = await getSession();

  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      {!session ? (
        <>
          <p className="text-lg text-center">
            You must be logged in to create a room
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold">Create Project</h1>
          <CreateProjectForm />
        </>
      )}
    </div>
  );
}
