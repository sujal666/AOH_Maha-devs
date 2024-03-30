import { VideoPlayer } from "@/components/video-player";
import { getRoom } from "@/data-access/rooms";

export default async function RoomPage(props: { params: { roomid: string } }) {
  const roomid = props.params.roomid;
  const room = await getRoom(roomid);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 min-h-screen p-5">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 col-span-3">
          <VideoPlayer room={roomid} />
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 col-span-1 flex flex-col gap-2">
          <h1>Room: {room?.name}</h1>
          <p className="text-base text-gray-600">{room?.description}</p>
        </div>
      </div>
    </div>
  );
}
