"use client";
import React from "react";

import { BellRing, Check } from "lucide-react";
import Link from "next/link";
// import { checkout } from "@/components/checkout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "24hrs website access .",
    // description: "1 hour ago",
  },
  {
    title: "Limited Certifications",
    // description: "1 hour ago",
  },
  {
    title: "Limited Project Swipes",
    // description: "2 hours ago",
  },
  {
    title: "No Golden Rooms",
  },
  {
    title: "5 Compant listed projects Montly ",
  },
  {
    title: "Free",
  },
];

const premium = [
  {
    title: "24hrs website access .",
    // description: "1 hour ago",
  },
  {
    title: "Unlimited Certifications",
    // description: "1 hour ago",
  },
  {
    title: "Unimited Project Swipes",
    // description: "2 hours ago",
  },
  {
    title: "Golden Rooms Availabes",
  },
  {
    title: "20 Companny listed projects Montly ",
  },
  {
    title: "Price $20",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <div className="p-40 flex">
      <Card className={cn("w-[380px] px-8", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-5xl text-center">Free</CardTitle>
          <CardDescription className="text-center">
            Free membership includes the following feautred.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {notifications.map((notifications, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notifications.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" />
            Free plan{" "}
          </Button>
        </CardFooter>
      </Card>

      <Card className={cn("w-[380px] px-5 ml-40", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-5xl text-center">Premium</CardTitle>
          <CardDescription className="text-center">
            Premium membership includes the following feautred.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {premium.map((premium, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {premium.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href={`https://buy.stripe.com/test_3cs5mC3g84y8euA5kk`}>
            {" "}
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" />
              Premium Plan
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default CardDemo;
