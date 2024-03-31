"use client";
import React from "react";

function PageComponent({ project, roomEmpty, rooms }: any) {
  return (
    <div className="bg-white h-screen">
      <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {project?.name}
          </h2>
          <p className="mt-4 text-gray-500">{project?.description}</p>
          {rooms.map((room: any) => (
            <p key={room.id} className="mt-4 text-gray-500">
              {room.name}
            </p>
          ))}
          {/* <dl className="">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl> */}
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
          {roomEmpty ? (
            <button
              onClick={() => console.log("clicked")}
              className="bg-white text-black ml-14 mt-8 px-14 h-10"
            >
              {" "}
              Start Building
            </button>
          ) : (
            <p className="text-left  mt-8 text-1xl font-normal font-sans px-14">
              Add more users to start
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageComponent;
