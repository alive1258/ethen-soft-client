"use client";

import Image from "next/image";
import { useState } from "react";

const ServiceTitle = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div>
        <Image
          src={service?.icon}
          className="size-16 animate-bounce "
          height={200}
          width={200}
          alt="service image"
        />
      </div>
      <h1
        style={{ color: isHovered ? `${service?.color_code}` : "#1e232c" }}
        className="text-black-base text-sm md:text-xl font-medium pt-6 pb-4 duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {service?.title}
      </h1>
    </>
  );
};

export default ServiceTitle;
