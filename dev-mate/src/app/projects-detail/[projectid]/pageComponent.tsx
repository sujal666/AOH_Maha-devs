"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

function PageComponent({ project, roomEmpty, rooms }: any) {
  const session = useSession();

  const userId = session?.data?.user?.id;

  const [apiResponse, setApiResponse] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/room-allot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          projectId: project?.id,
        }),
      });
      const data = await response.json();
      // Store the API response in the state variable
      setApiResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="bg-white  h-screen">
      <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {project?.name}
          </h2>

          <p className="mt-4 text-gray-500">{project?.description}</p>
          {rooms.map((room: any) => (
            <div key={room.id} className="mt-4 text-gray-500">
              {room.usersAlloted
                .filter((userr: any) => userr === userId)
                .map((userr: any) => (
                  <div className=" flex justify-between items-center">
                    <p className="text-lg tracking-tight text-gray-900 sm:text-4xl">
                      {room.name}
                    </p>
                    <Link href={`/rooms/${room.id}`}>
                      <button className=" py-3 px-6 text-base font-semibold bg-black text-white rounded-md">
                        {" "}
                        Join Room
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className=" bg-black mt-4 w-24 min-w-full min-h-full mb-6">
          <h1 className="text-left  mt-8 text-5xl font-bold font-sans px-14">
            Ready for building??
          </h1>
          <p className="text-left  mt-8 text-1xl font-normal font-sans px-14">
            Includes the necessary assets, design files, style guide and a
            README file to help you with each step of the project. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Alias temporibus error,
            aspernatur rem eligendi eaque incidunt pariatur quis maxime enim
            explicabo, velit eum ex reiciendis vel at itaque eius odio. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores
            impedit dicta obcaecati architecto non, ex dolor eius perferendis
            repudiandae debitis molestias iusto iure tempore! Modi repellendus
            deleniti quasi accusantium!
          </p>{" "}
          <button
            onClick={fetchData}
            className="bg-white text-black ml-14 mt-8 px-14 h-10"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageComponent;
