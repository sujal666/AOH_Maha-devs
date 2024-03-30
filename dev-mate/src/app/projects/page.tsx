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

<<<<<<< HEAD
// export default page
// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselSize() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

export default page
=======
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
>>>>>>> ddc70b6827d9ee1b8baadb5ab995768df8790741
