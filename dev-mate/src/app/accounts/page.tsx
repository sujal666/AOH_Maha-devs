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
      <div className="my-4">
        <Avatar className="my-5"> <AvatarImage src={session.data?.user?.image ?? ''} /></Avatar>
        <h1 className="text-xl font-semibold">{session.data?.user?.name}</h1>
        <p className="text-base text-gray-600">Heyy, I'm a freelance Website Developer</p>
      </div>
      <div className="my-6"><Button className="h-10 text-lg"><Link href={"/"}>Follow</Link></Button></div>
      <div className="flex my-6 items-center"><Users className="mr-3" size="24" /><p className="mr-3 text-lg">256 followers</p>
        <p className="text-lg">15 following</p></div>
      <div className="">
        <h1 className="text-lg font-medium mb-3">Achievements</h1>
        <div className="space-x-3">
          <Badge className="text-lg">Issue Master</Badge>
          <Badge className="text-lg">Debug Warrior</Badge>
          <Badge className="text-lg">Active Geek</Badge>
        </div>
      </div>
    </div>
  )
}

export default Profile;
