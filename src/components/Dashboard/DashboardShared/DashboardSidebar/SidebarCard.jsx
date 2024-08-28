"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaChevronRight } from "react-icons/fa";

const SidebarCard = ({ item }) => {
  const [active, setActive] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Check if the current route matches the item's path
  const isActiveRoute = router.pathname === item?.path;
  return (
    <div>
      <div className=" py-2">
        <div>
          {/* If there is a subcategory then it will be rendered */}
          {item?.sub?.length > 0 ? (
            <>
              {" "}
              <div
                onClick={() => setActive(!active)}
                className={`${
                  active ? "text-white bg-[#3A57E8]" : "text-[#ADB5BD]"
                } flex items-center justify-between gap-3 duration-300 p-2 my-2 rounded cursor-pointer`}
                // className=" flex items-center cursor-pointer justify-between gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                    {item?.Icon}
                  </span>
                  <button className=" flex-1   capitalize whitespace-nowrap">
                    {" "}
                    {item?.name}{" "}
                  </button>
                </div>
                <div>
                  <FaChevronRight
                    className={`${
                      active ? "rotate-90 duration-500" : ""
                    } duration-500  text-[16px]  `}
                  />
                </div>
              </div>
              {/* collapse animation use  */}
              <Collapse isOpened={active}>
                {/* sub category  */}
                {active ? (
                  <>
                    {item?.sub?.map((item, index) => (
                      <div key={index} className=" py-2 ml-5">
                        <div className="  flex items-center justify-center gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100">
                          <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                            {item?.Icon}
                          </span>
                          <Link
                            className=" flex-1   capitalize whitespace-nowrap"
                            href={item?.path}
                          >
                            {" "}
                            <span
                              className={`${
                                isActiveRoute
                                  ? "text-[#3A57E8]"
                                  : "text-[#ADB5BD]"
                              } flex-1 items-center justify-between gap-3 duration-300 p-2 my-2 rounded cursor-pointer`}
                            >
                              {item?.name}{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
              </Collapse>
            </>
          ) : (
            <div className=" flex items-center justify-center gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100">
              <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900">
                {item?.Icon}
              </span>
              <Link
                className=" flex-1 capitalize whitespace-nowrap"
                href={item?.path}
              >
                {" "}
                {item?.name}{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarCard;
