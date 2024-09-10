"use client";
import { useEffect } from "react";
import HomeServiceCard from "./HomeServiceCard";
import { applyScrollAnimation } from "@/utils/applyScrollAnimation ";

const ServiceSection = ({ ourServices }) => {
  useEffect(() => {
    // Use the utility function and pass the section and reveal classes
    const cleanup = applyScrollAnimation("section", ".reveal");

    // Clean up event listeners when the component is unmounted
    return cleanup;
  }, []);

  return (
    <section className="md:mt-28 mt-16  grid grid-cols-2 md:col-end-3 lg:grid-cols-4 md:gap-x-5 gap-x-3 md:gap-y-6">
      {ourServices?.data?.map((service) => (
        <HomeServiceCard className="" service={service} key={service?._id} />
      ))}
    </section>
  );
};

export default ServiceSection;
