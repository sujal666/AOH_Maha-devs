"use client";
import { db } from "@/db";
import { ProjectWorking, projectWorking } from "@/db/schema";
import React, { useEffect, useState } from "react";
import { addToDB } from "./action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

function Cards({ projects }: any) {
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
    <div className="grid grid-cols-3 gap-4 px-3">
      {filteredProjects.map((project: any) => (
        <div key={project.id}>
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {project.githubRepo && (
                <Link
                  href={project.githubRepo}
                  className="flex items-center gap-2"
                  target="blank"
                >
                  <GithubIcon /> Github Project
                </Link>
              )}
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <Button>
                  <Link href={`/projects-detail/${project.id}`}>
                    View Project
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
