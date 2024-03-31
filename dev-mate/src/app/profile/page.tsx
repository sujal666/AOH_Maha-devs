"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge"


function Profile() {
    const session = useSession();
    const isLogged = !!session.data;
    return (
        <div className="p-8">
            <div className="my-2">
                <Avatar className="my-5 " > <AvatarImage src={session.data?.user?.image ?? ''} /></Avatar>
                {session.data?.user?.name}
                <p className="text-gray-400">Heyy, I'm a freelance Website Developer</p>
            </div>
            <div className="my-5"><Button className="h-8"><Link href={"/"}>Follow</Link></Button></div>
            <div className="flex my-5"><Users className="mr-2" /><p className="mr-2">256 followers</p>
                <p>15 following</p></div>
<div className="">
    <h1 className="font-medium mb-2">Achievements</h1>
    <div className="space-x-2">
    <Badge>Issue Master</Badge>
    <Badge>Debug Warrior</Badge>
    <Badge>Active Geek</Badge>
    </div>
</div>
        </div>
    )
}

export default Profile;