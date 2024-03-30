import { LayoutDashboard } from "lucide-react";
import React from "react";

function SideBar() {
  return (
    <div>
      <div className="w-64 h-screen bg-gray-100 dark:bg-gray-900 flex flex-col gap-5   px-14 py-4  border-r">
        <h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Dashboard
        </h6>

        <h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Projects
        </h6>

        <h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Hiring
        </h6>

        <h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Leaderboard
        </h6>

        <h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Pricing
        </h6>

        <h6 className=" flex gap-2 items-center  ">
          <LayoutDashboard />
          Accounts
        </h6>
      </div>
    </div>
  );
}

export default SideBar;
