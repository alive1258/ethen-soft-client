"use client";

import Link from "next/link";
import Image from "next/image";
import { RiDashboardFill } from "react-icons/ri";
import logo from "../../../../../public/assets/images/dashboard/logo.png";
import SidebarCard from "./SidebarCard";

const DashboardSidebar = () => {
  return (
    <>
      <div className="bg-black-muted h-screen fixed top-0 left-0 shadow-2xl z-20 px-3">
        {/* logo  */}
        <div className="flex items-center gap-2 pt-6 pb-4 pl-6 pr-8">
          <Image
            className="size-"
            src={logo}
            width={28}
            height={28}
            alt="dashboard logo"
          />
          <h1 className="text-[33px] font-medium text-white">EthenSoft</h1>
        </div>
        {/* home part  */}
        <div className="text-[#ADB5BD]">
          <h2 className="px-3 py-2 text-[#ADB5BD] font-semibold">Home</h2>
          <ul className="mr-6 border-b border-b-[#343948]">
            <Link
              className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E8] hover:text-white duration-200"
              href={"/"}
            >
              <RiDashboardFill />
              <span>Dashboard</span>
            </Link>
            <SidebarCard />
          </ul>
        </div>
        {/* pages part  */}
        <div className="text-[#ADB5BD]">
          <h2 className="px-3 py-2 text-[#ADB5BD] font-semibold">Pages</h2>
          <ul className="mr-6 border-b border-b-[#343948]">
            <SidebarCard />
            <SidebarCard />
            <SidebarCard />
            <SidebarCard />
            <Link
              className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E8] hover:text-white duration-200"
              href={"/"}
            >
              <RiDashboardFill />
              <span>Dashboard</span>
            </Link>
            <Link
              className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E8] hover:text-white duration-200"
              href={"/"}
            >
              <RiDashboardFill />
              <span>Dashboard</span>
            </Link>
          </ul>
        </div>
        {/* pages part  */}
        <div className="text-[#ADB5BD]">
          <h2 className="px-3 py-2 text-[#ADB5BD] font-semibold">Elements</h2>
          <ul className="mr-6 border-b border-b-[#343948]">
            <SidebarCard />
            <SidebarCard />
            <Link
              className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E8] hover:text-white duration-200"
              href={"/"}
            >
              <RiDashboardFill />
              <span>Dashboard</span>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
