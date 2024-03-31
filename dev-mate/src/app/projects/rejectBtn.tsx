"use client"
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { useState } from "react";

function RejectButton({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    // Retrieve the existing array of project IDs from local storage
    const existingProjectIds = JSON.parse(
      localStorage.getItem("projectIds") || "[]"
    );

    // Remove the rejected projectId from the array
    const updatedProjectIds = existingProjectIds.filter(
      (id: string) => id !== projectId
    );

    // Store the updated array back into local storage
    localStorage.setItem("projectIds", JSON.stringify(updatedProjectIds));

    // Console log the updated array
    console.log("Updated Project IDs:", updatedProjectIds);

    const session = await getSession();
    const userId = session?.user?.id;

    if (userId) {
      const url = "/api/reject-project";
      const data = { userId, projectId };

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

    setLoading(false);
    router.push("/dashboard");
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? "Rejecting..." : "Reject"}
    </button>
  );
}

export default RejectButton;
