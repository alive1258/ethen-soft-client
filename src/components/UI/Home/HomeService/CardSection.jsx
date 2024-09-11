import React from "react";
import HomeServiceTitle from "./HomeServiceTitle";
import Image from "next/image";
import { truncateDescription } from "@/utils/descriptionTruncate";

const CardSection = ({ service }) => {
  return (
    <>
      <Image
        src={service?.icon}
        className={`size-14 md:size-[110px] mx-auto p-2 md:p-4 rounded-full hover:animate-spin hover:scale-110  delay-100 transition-transform duration-300 ease-in-out`} // Add animation classes here
        style={{
          backgroundColor: `${service?.color_code}`,
        }}
        width={56}
        height={56}
        alt="service icon"
      />
      <HomeServiceTitle service={service} />
      <p className="text-black-base md:block hidden md:text-base">
        {truncateDescription(service?.sub_description, 13)}
      </p>
    </>
  );
};

export default CardSection;
