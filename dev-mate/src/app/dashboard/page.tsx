import { db } from "@/db";
import React from "react";
import Cards from "./card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { project } from "@/db/schema";
import { GithubIcon } from "lucide-react";

import { Button } from "react-day-picker";
import AcceptButton from "../projects/acceptBtn";

const page = async () => {
  const projects = await db.query.project.findMany();
  return (
    <div>
      <Cards projects={projects} />
    </div>
  );
};

export default page;
