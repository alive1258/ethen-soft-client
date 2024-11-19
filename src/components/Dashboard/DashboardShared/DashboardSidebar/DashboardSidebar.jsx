"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/assets/images/dashboard/logo.png";
import SidebarCard from "./SidebarCard";
import { SidebarItemsData } from "@/utils/dashboardSidebarData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sidebarToggle } from "@/redux/features/toggleSlice";
import { IoMenuSharp } from "react-icons/io5";

const DashboardSidebar = ({ sidebarRef, sidebarMobileStatus }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSidebar, setActiveSidebar] = useState(null);

  const dispatch = useDispatch();

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { sidebarToggleStatus } = useSelector((state) => state.sidebarToggle);
  return (
    <div
      ref={sidebarRef}
      className={`overflow-hidden bottom-0 w-[300px] h-screen top-0 text-[#E7EEF8] text-sm font-medium  `}
    >
      <div
        className={`fixed bottom-0 top-[67px] lg:top-0 bg-primary-base  left-0 w-[300px] ${
          sidebarToggleStatus
            ? "-translate-x-full  duration-500  ease-in-out"
            : "-translate-x-0 duration-500  ease-in-out"
        } `}
      >
        <div className="border-t-2 border-t-[#131517]">
          {/* Logo and Sidebar Toggle Icon */}
          {!sidebarMobileStatus ? (
            <div className="border-b-[4px] border-[#131517] px-6 py-[24px]">
              <div className=" flex items-center  justify-between">
                <Link href="/">
                  <h1 className="text-xl font-bold">Ethen Soft</h1>
                </Link>
                <div
                  onClick={() => dispatch(sidebarToggle())}
                  className={`text-2xl text-gray-300 cursor-pointer transition-transform duration-500 ease-in-out `}
                >
                  <IoMenuSharp />
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* Sidebar Content */}
          <div className="px-4 pt-2 h-[90vh] sidebarScroll overflow-y-auto">
            {SidebarItemsData?.map((item, index) => (
              <SidebarCard
                key={index}
                index={index}
                item={item}
                activeSidebar={activeSidebar}
                setActiveSidebar={setActiveSidebar}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
