import Image from "next/image";
import React from "react";
import Button from "@/components/UI/Button/Button";
import OurTechnology from "./OurTechnology";
import icon from "../../../../../public/assets/images/icon.png";

const HeroDescription = () => {
  return (
    <>
      <div className="container relative flex items-center justify-between md:gap-40">
        <div className="pl-1 md:pl-0">
          <h1 className="text-base md:text-[56px] font-semibold text-white md:leading-[70px]">
            We Provide Best Technology Solutions
          </h1>
          <p className="text-[10px] md:text-base font-medium my-4 md:my-0 md:pt-8 md:pb-12 text-[#f1f1f1]">
            We are passionate about bringing enterprise-level productivity,
            scalability, and security to small and medium businesses. How it
            works Contact Us
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

        <div className="hidden lg:block">
          <OurTechnology />
        </div>
      </div>
    </>
  );
};

export default HeroDescription;
