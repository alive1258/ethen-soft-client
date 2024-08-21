"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "@/components/UI/Button/Button";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import ethenSoftLogo from "../../../../public/assets/images/about/ethensoftlogo.svg";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { display: "Home", path: "/" },
    { display: "About Us", path: "/about-us" },
    { display: "Services", path: "/services" },
    { display: "Products", path: "/products" },
    { display: "Our Work", path: "/ourWork" },
    { display: "Clients", path: "/clients" },
    { display: "Team", path: "/team" },
    { display: "Career", path: "/career" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-[500] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#fff] shadow-md text-gray-900"
          : "text-[#fff] bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 md:px-20 mx-auto h-[88px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              className="size-14"
              src={ethenSoftLogo}
              height={28}
              width={151}
              alt="logo"
            />
            <h3
              className={`md:text-xl text-lg font-semibold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Ethen Soft
            </h3>
          </div>
        </Link>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button className="pt-1.5 rounded-md" onClick={() => setOpen(!open)}>
            {open ? (
              <HiMiniXMark
                className={`size-10 text-lg ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <HiOutlineBars3BottomLeft
                className={`size-10 bg-[#F4EDF7] rounded-lg p-2 text-xl ${
                  isScrolled ? "text-gray-900" : "text-primary-base"
                }`}
              />
            )}
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`flex flex-col md:flex-row items-center gap-y-8 md:pb-0 pb-10 pt-8 md:pt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open
              ? "top-[89px] z-10"
              : "-top-[999px] md:border-t-0 border-t-2 border-t-primary-base"
          }`}
        >
          {items.map(({ display, path }) => {
            const isActive = pathName === path;
            return (
              <Link
                key={display}
                className={`md:ml-10 font-normal duration-300 ${
                  isActive
                    ? `font-semibold  ${
                        isScrolled ? "text-primary-base" : " text-primary-base"
                      }`
                    : `${isScrolled ? "text-gray-900" : "text-white"}`
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
  );
};

export default Navbar;
