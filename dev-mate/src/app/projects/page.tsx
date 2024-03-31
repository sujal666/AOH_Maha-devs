import { db } from "@/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Project } from "@/db/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import { acceptProjectAction } from "./action";
import AcceptButton from "./acceptBtn";
// import { useRouter } from "next/navigation";

function ProjectCard({ project }: { project: Project }) {
  // const router = useRouter();

  const handleAccept = async () => {
    // Call acceptProjectAction with projectId
  };

  return (
    <Card>
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
            rel="noopener noreferrer"
          >
            <GithubIcon /> Github Project{" "}
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <div className=" flex gap-2">
          <Button asChild>
            <Link href={`/projects/${project.id}`}>View Project</Link>
          </Button>

          <AcceptButton projectId={project.id} />

          <Button variant={"ghost"} asChild>
            <Link href={`/projects/${project.id}`}>Reject</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default async function page() {
  const projects = await db.query.project.findMany();

  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between item-center mb-10">
        <h1 className="text-4xl">Find Projects</h1>
        <span>Credit : 1/3</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </main>
  );
}
