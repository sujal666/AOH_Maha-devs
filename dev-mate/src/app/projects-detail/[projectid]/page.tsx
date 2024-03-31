// /

import Link from "next/link";
import { getProject, getRoom, isRoomUsersAllotedEmpty } from "./action";

import PageComponent from "./pageComponent";
import { getSession } from "next-auth/react";

const features = [
  { name: "Project", description: "E-Commerce." },
  { name: "Tech-stack", description: "Mongo, Express, React,Node" },
];

export default async function page(props: { params: { projectid: string } }) {
  const projectid = props.params.projectid;
  const project = await getProject(projectid);
  const roomEmpty = await isRoomUsersAllotedEmpty(projectid);
  const session = await getSession();
  var rooms = await getRoom(projectid);
  if (roomEmpty) {
    console.log("room not empty");
  }
  // console.log(project);

  return (
    <PageComponent
      project={project}
      roomEmpty={roomEmpty}
      rooms={rooms}
      user={session?.user}
    />
  );
}
