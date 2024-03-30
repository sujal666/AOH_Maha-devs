"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";


function AccountDropdown() {
  const session = useSession();
  const isLogged = !!session.data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">

        <Avatar className="mr-3">
          <AvatarImage src={session.data?.user?.image ?? ''} />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="my-2">{session.data?.user?.name}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}

        {isLogged ? <DropdownMenuItem><Button onClick={() => signOut()} variant={"outline"}><LogIn className="mr-2" /> Sign Out</Button></DropdownMenuItem> : ''}

        <DropdownMenuItem><Link href="/profile">Profile</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

function Header() {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const signInWithGoogle = () => {
    signIn("google");
    setOpen(false);
  };

  const signInWithGithub = () => {
    signIn("github");
    setOpen(false);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex justify-between w-full px-14 items-center py-4 border-b">
      <div>
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">

          Dev Mate

        </h3>
      </div>
      <div className="flex">
        <div className="mx-4 my-2"><AccountDropdown /></div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign up to Create Rooms</DialogTitle>
            </DialogHeader>

            <div className=" flex flex-col space-y-4 my-10 ">
              <Button
                className={cn("w-full flex gap-4 items-center border-white")}
                variant={"outline"}
                onClick={signInWithGoogle}
              >
                <FcGoogle className=" w-6 h-6" /> Sign up with Google
              </Button>
              <Button
                className={cn("w-full flex gap-4 items-center border-white")}
                variant={"outline"}
                onClick={signInWithGithub}
              >
                <FaGithub className=" w-6 h-6" />
                Sign up with Github
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className=" flex gap-4 items-center">
          {session.data ? (
            ""
          ) : (
            <Button onClick={() => setOpen(true)}><LogOut className="mr-2" /> Sign In</Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
