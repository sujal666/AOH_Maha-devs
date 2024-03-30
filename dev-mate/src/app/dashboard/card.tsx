"use client";
import { db } from "@/db";
import { ProjectWorking, projectWorking } from "@/db/schema";
import React, { useEffect, useState } from "react";
import { addToDB } from "./action";

function Card({ projects }: any) {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [existProjectIds, setExistProjectIds] = useState([]);

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      // Retrieve the existing array of project IDs from local storage
      const existingProjectIds = JSON.parse(
        localStorage.getItem("projectIds") || "[]"
      );

      setExistProjectIds(existingProjectIds);

      // Filter projects to include only those with IDs in existingProjectIds
      const filteredProjects = projects.filter((project: any) =>
        existingProjectIds.includes(project.id)
      );

      setFilteredProjects(filteredProjects);

      addToDB(existingProjectIds);
    }
  }, [projects]);

  return (
    <div>
      {filteredProjects.map((project: any) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Card;
