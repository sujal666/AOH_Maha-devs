"use client";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { generateTokenAction } from "@/app/rooms/[roomid]/actions";

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API!;
// const userId = "user-id";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGY0NzVlM2MtYjc0NC00OTIxLWI1MjItZTI4ZDZlYTk3NzUwIn0.sEolxolwVpBLj_1wSelbl8gwJL_CR6oUwtCM5r1KU50";
// // const user: User = { id: userId };

export function VideoPlayer({ room }: { room: string }) {
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!room) {
      return;
    }
    if (!session.data) {
      return;
    }

    const userId = session.data.user.id;

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
      },
      tokenProvider: () => generateTokenAction(),
    });
    const call = client.call("default", room);
    call.join({ create: true });

    setCall(call);
    setClient(client);

    return () => {
      call.leave();
      client.disconnectUser();
    };
  }, [session, room]);
  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamTheme>
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls />
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
    )
  );
}
