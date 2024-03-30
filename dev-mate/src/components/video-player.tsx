"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  StreamVideoClient,
  Call,
  StreamTheme,
  StreamCall,
  SpeakerLayout,
  CallControls,
  StreamVideo,
} from "@stream-io/video-react-sdk";

import { generateTokenAction } from "@/app/rooms/[roomid]/actions";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API!;

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
      <div>
        <StreamVideo client={client}>
          <StreamTheme>
            <StreamCall call={call}>
              <SpeakerLayout />
              <CallControls />
            </StreamCall>
          </StreamTheme>
        </StreamVideo>
        <div></div>
      </div>
    )
  );
}
