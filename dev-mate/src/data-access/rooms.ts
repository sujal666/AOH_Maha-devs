import { db } from "@/db";
import { unstable_noStore } from "next/cache";
import { eq } from "drizzle-orm";
import { room } from "@/db/schema";

export async function getRooms(){
    unstable_noStore();
    const rooms = await db.query.room.findMany();
}

export async function getRoom(roomid: string){
    unstable_noStore();
    return await db.query.room.findFirst({
        where: eq(room.id, roomid),
    });

}