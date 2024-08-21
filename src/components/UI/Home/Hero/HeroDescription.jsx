import Image from "next/image";
import React from "react";
import Button from "@/components/UI/Button/Button";
import OurTechnology from "./OurTechnology";
import icon from "../../../../../public/assets/images/icon.png";

const HeroDescription = () => {
  return (
    <>
      <div className="container relative md:flex items-center justify-between md:gap-40">
        <div className="pl-1 md:pl-0">
          <h1 className=" md:text-[56px] text-2xl font-semibold text-white md:leading-[70px]">
            We Provide Best Technology Solutions
          </h1>
          <p className="text-sm md:text-base font-medium my-4 md:my-0 md:pt-8 md:pb-12 text-[#f1f1f1]">
            We are passionate about bringing enterprise-level productivity,
            scalability, and security to small and medium businesses. How it
            works Contact Us scalability, and security to small and medium
            businesses. How it works Contact Us
          </p>
          <Image
            className="hidden md:block absolute top-2/3 left-1/3"
            src={icon}
            width={100}
            height={100}
            alt="icon"
          />
          <div className="flex gap-6">
            <Button content="How it works" className="hidden md:block" />
            <Button content="Contact Us" />
          </div>
        </div>

        <div className="md:pt-0 pt-20 md:pl-0 pl-3">
          <OurTechnology />
        </div>
      </div>
    </>
  );
};

export default HeroDescription;
