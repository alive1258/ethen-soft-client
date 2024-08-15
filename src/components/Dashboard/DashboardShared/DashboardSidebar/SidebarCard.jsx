"use client";
import Link from "next/link";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaChevronRight } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const SidebarCard = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div>
        <div
          onClick={() => setActive(!active)}
          className={`${
            active ? "text-white bg-[#3A57E8]" : "text-[#ADB5BD]"
          } flex items-center justify-between gap-3 duration-300 p-2 my-2 rounded cursor-pointer`}
        >
          <div className="flex items-center gap-2">
            <RiDashboardFill className="size-5 transition duration-75" />
            <span className=" capitalize whitespace-nowrap">Menu Style</span>
          </div>

          <FaChevronRight
            className={`${
              active ? "rotate-90 duration-300 text-white" : ""
            } duration-300 text-[16px] text-[#ADB5BD] ml-14`}
          />
        </div>
        <Collapse isOpened={active}>
          {active ? (
            <div className="ml-3 mb-2">
              <Link
                className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E8] hover:text-white duration-200"
                href={"/"}
              >
                <RiDashboardFill />
                <span>item </span>
              </Link>

              <Link
                className="px-3 py-2 flex items-center gap-2 rounded hover:bg-[#3A57E8] hover:text-white duration-200"
                href={"/"}
              >
                <RiDashboardFill />
                <span>item</span>
              </Link>
            </div>
          ) : (
            ""
          )}
        </Collapse>
      </div>
    </>
  );
};

export default SidebarCard;
