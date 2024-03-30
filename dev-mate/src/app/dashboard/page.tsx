import { db } from "@/db";
import React from "react";
import Card from "./card";

const page = async () => {
  const projects = await db.query.project.findMany();
  return (
    <div>
      Dashboard:
      <Card projects={projects} />
    </div>
  );
};

export default page;
