"use client";

import { useState } from "react";

const ServiceTitle = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h1
      style={{ color: isHovered ? `#${service?.variant}` : "#1e232c" }}
      className="text-black-base text-sm md:text-xl font-medium pt-6 pb-4 duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {service?.title}
    </h1>
  );
};

export default ServiceTitle;
