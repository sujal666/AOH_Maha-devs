import { BarChartBig, CircleUserRound, FileCode, IndianRupee, LayoutDashboard, Presentation } from "lucide-react";
import Link from "next/link";

import React from "react";

function SideBar() {
  return (
    <div>
      <div className="w-64 h-screen text-[20px] bg-gray-100 dark:bg-gray-900 flex flex-col gap-[60px]   px-14 py-4  border-r">
        <Link href="/dashboard"><h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Dashboard
        </h6></Link>
     <Link href="/projects">
        <h6 className=" flex gap-2 items-center  ">
          <FileCode  />
          Projects
        </h6></Link>
      <Link href="/hiring-projects">
        <h6 className=" flex gap-2 items-center  ">
        <Presentation />
          Hiring
        </h6></Link>

      <Link href="/leaderboard"> <h6 className=" flex gap-2 items-center  ">
        <BarChartBig />
          Leaderboard
        </h6></Link>

      <Link href="/pricings">  <h6 className=" flex gap-2 items-center  ">
        <IndianRupee />
          Pricing
        </h6></Link>

       <Link href="/accounts"> <h6 className=" flex gap-2 items-center  ">
        <CircleUserRound />
          Accounts
        </h6></Link>
      </div>
    </div>
  );
}

export default SideBar;
