"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import { mobileToggle } from "@/redux/features/toggleSlice";

const MobileNavbar = ({ setNavbar, navbar }) => {
  const { sidebarMobileStatus } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  return (
    <>
      <div className="md:hidden px-6 py-4 w-full flex items-center justify-between border-b-2 border-b-[#131517]">
        <Link href="/">logo</Link>
        <div className="flex items-center gap-4">
          <IoIosArrowDown
            className={` ${
              navbar ? " rotate-180" : ""
            } text-2xl duration-300 text-white cursor-pointer`}
            onClick={() => setNavbar((prev) => !prev)}
          />
          {sidebarMobileStatus ? (
            <div
              className={`size-10 bg-black-muted
               rounded-full flex items-center justify-center z-50`}
              // onClick={() => setShowSidebar((prev) => !prev)}
            >
              <IoClose className="text-2xl text-white cursor-pointer" />
            </div>
          ) : (
            <div
              onClick={() => dispatch(mobileToggle())}
              className={`size-10 rounded-full flex items-center justify-center z-50`}
            >
              <IoMenu className="text-2xl text-white cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
