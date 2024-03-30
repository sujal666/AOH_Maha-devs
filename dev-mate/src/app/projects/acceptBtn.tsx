"use client";
import { useRouter } from "next/navigation";
import { acceptProjectAction } from "./action";
import { getSession, useSession } from "next-auth/react";

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
    const session = await getSession();
    const userId = session?.user?.id;

    if (userId) {
      const url = "/api/accept-project";
      const data = { userId, projects: existingProjectIds };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("ProjectWorking table updated successfully");
        } else {
          console.error("Failed to update ProjectWorking table");
        }
      } catch (error) {
        console.error("Error updating ProjectWorking table:", error);
      }
    } else {
      console.error("User ID not found in session");
    }

    router.push("/dashboard");
  }

  return <button onClick={handleClick}>Accept</button>;
}

export default AcceptButton;
