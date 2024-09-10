import Image from "next/image";
import React from "react";
import Button from "@/components/UI/Button/Button";

import icon from "../../../../../public/assets/images/icon.png";

const HeroDescription = ({ heroDescription }) => {
  return (
    <>
      <div className="pl-1 md:pl-0">
        <h1 className=" md:text-[56px] text-[28px] font-semibold text-white md:leading-[70px]">
          {heroDescription?.title}
        </h1>
        <p className="md:text-lg  text-[14px]  font-medium my-4 md:my-0 md:pt-8 md:pb-12 text-[#f1f1f1]">
          {heroDescription?.description}
        </p>
        <Image
          className="hidden md:block absolute top-2/3 left-1/3"
          src={icon}
          width={100}
          height={100}
          alt="icon"
        />
        <div className="flex gap-6">
          <Button content="How it works" />
          <Button content="Contact Us" />
        </div>
      </div>
    </>
  );
};

export default HeroDescription;
