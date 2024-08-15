"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "@/components/UI/Button/Button";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import logo from "../../../../public/assets/images/Logo.png";
import mobileLogo from "../../../../public/assets/images/mobile-logo.png";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const items = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "About Us",
      path: "/about-us",
    },
    {
      display: "Services",
      path: "/services",
    },
    {
      display: "Products",
      path: "/products",
    },
    {
      display: "Our Work",
      path: "/ourWork",
    },
    {
      display: "Clients",
      path: "/clients",
    },
    {
      display: "Team",
      path: "/team",
    },
    {
      display: "Career",
      path: "/career",
    },
  ];

  return (
    <>
      <div className="sticky top-0 -translate-y-0 bg-[#ffffff] z-[500] shadow duration-300  transition-transform transform ">
        <div className="max-w-[1440px] w-full px-5 md:px-20 mx-auto h-[88px] flex items-center justify-between ">
          {/* logo */}
          <div>
            <Image
              className="block md:hidden"
              src={mobileLogo}
              height={48}
              width={151}
              alt="logo"
            />
            <Image
              className="hidden md:block"
              src={logo}
              height={48}
              width={151}
              alt="logo"
            />
          </div>

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="pt-1.5 rounded-md"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <HiMiniXMark className="size-10 text-lg text-[#DC4C64]" />
              ) : (
                <HiOutlineBars3BottomLeft className="size-10 bg-[#F4EDF7] rounded-lg p-2 text-xl text-primary-base" />
              )}
            </button>
          </div>

          {/* navitem  */}

          <ul
            className={`flex flex-col md:flex-row items-center gap-y-8 md:pb-0 pb-10 pt-8 md:pt-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
              open
                ? "top-[89px] z-10"
                : "-top-[999px] md:border-t-0 border-t-2 border-t-primary-base"
            }`}
          >
            {items?.map(({ display, path }) => {
              const isActive = pathName.startsWith(path);
              return (
                <Link
                  key={display}
                  className={`md:ml-10 font-normal duration-300 ${
                    isActive ? "text-primary-base font-semibold" : ""
                  }`}
                  href={path}
                >
                  {display}
                </Link>
              );
            })}

            <Link className="md:ml-10" href="/contact-us">
              <Button content="Contact Us" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
