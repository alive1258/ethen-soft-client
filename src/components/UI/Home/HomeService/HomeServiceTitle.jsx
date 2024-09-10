"use client";

import { useState } from "react";

const HomeServiceTitle = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1
        style={{ color: isHovered ? `${service?.color_code}` : "#1e232c" }}
        className="text-black-base md:text-xl text-[14px] font-medium pt-6 pb-4 duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {service?.title}
      </h1>
    </>
  );
};

export default HomeServiceTitle;
