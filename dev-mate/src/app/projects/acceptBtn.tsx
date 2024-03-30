"use client";
import { useRouter } from "next/navigation";
import { acceptProjectAction } from "./action";

function AcceptButton({ projectId }: { projectId: string }) {
  const router = useRouter();

  async function handleClick() {
    // Retrieve the existing array of project IDs from local storage
    const existingProjectIds = JSON.parse(
      localStorage.getItem("projectIds") || "[]"
    );

    // Add the new projectId to the array
    existingProjectIds.push(projectId);

    // Store the updated array back into local storage
    localStorage.setItem("projectIds", JSON.stringify(existingProjectIds));

    // Console log the updated array
    console.log("Updated Project IDs:", existingProjectIds);

    router.push("/dashboard");
  }

  return <button onClick={handleClick}>Accept</button>;
}

export default AcceptButton;
