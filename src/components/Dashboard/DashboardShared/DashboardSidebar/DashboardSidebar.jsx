"use client";

import Link from "next/link";
import Image from "next/image";
import { RiDashboardFill } from "react-icons/ri";
import logo from "../../../../../public/assets/images/dashboard/logo.png";
import SidebarCard from "./SidebarCard";
import { SidebarItemsData } from "@/utils/dashboardSidebarData";

const DashboardSidebar = () => {
  return (
    <div className="bg-black-muted fixed  h-screen top-0 left-0 shadow-2xl z-20 px-3">
      {/* logo  */}
      <div className="flex items-center gap-2 pt-6 pb-4 pl-6 pr-8">
        <Image src={logo} width={28} height={28} alt="dashboard logo" />
        <h1 className="text-[33px] font-medium text-white">EthenSoft</h1>
      </div>
      {/* home part  */}
      <div className="text-[#ADB5BD] scroll-smooth">
        <ul className="mr-6 border-b border-b-[#343948] overflow-auto">
          <li>
            <Link href="/dashboard/admin">
              <span className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E...]">
                <RiDashboardFill />
                Dashboard
              </span>
            </Link>
          </li>
          {/* Render other links based on SidebarItemsData */}
          {SidebarItemsData.map((item, index) => (
            <SidebarCard item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
