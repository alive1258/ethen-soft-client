"use client";

import Link from "next/link";

import CardSection from "./CardSection";

const HomeServiceCard = ({ service }) => {
  return (
    <>
      <Link href={`/services#${service?.slug || service?.id}`}>
        <div
          className={`text-center md:h-[300px] reveal cursor-pointer px-2 py-4 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out rounded-lg bg-white`}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0px 0px 16px 3px ${service?.color_code}`; // Apply dynamic shadow on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.1)`; // Revert to default shadow
          }}
        >
          <CardSection service={service} />
        </div>
      </Link>
    </>
  );
};

export default HomeServiceCard;
