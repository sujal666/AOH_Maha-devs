import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { db } from "@/db";

async function Page({
  params: { projectid },
}: {
  params: { projectid: string };
}) {
  const rooms = await db.query.room.findMany();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 min-h-screen p-5">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 col-span-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Description
            </h1>
          </div>

          <div>
            <div className="flex justify-between px-10 py-5">
              <h1 className="text-2xl font-semibold tracking-tight">Issues</h1>
              <Button>
                <Link href={`/create-room/${projectid}`}>New Room</Link>
              </Button>
            </div>
            <table className="min-w-full divide-y border bg-card text-card-foreground rounded-lg">
              <thead className="rounded-lg border bg-card text-card-foreground">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                  >
                    Rooms
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="rounded-lg border bg-card text-card-foreground divide-y divide-gray-600">
                {rooms
                  .filter((room) => room.projectId === projectid)
                  .map((room) => (
                    <tr key={room.id}>
                      <td className="px-6 py-4 ">
                        <div className="text-sm font-medium text-white-900">
                          {room.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-400">
                          {room.description}
                        </div>
                      </td>
                      <td className="px-9 py-4 ">
                        <Button>
                          <Link href={`/rooms/${room.id}`}>Join Room</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 col-span-1 flex flex-col gap-2">
          <h1>Room:</h1>
          <p className="text-base text-gray-600">MahaDev Room</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
