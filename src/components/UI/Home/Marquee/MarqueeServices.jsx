import React from "react";
import AllServices from "./AllServices";

const MarqueeServices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-services`, {
      next: {
        revalidate: 30,
      },
    });
    const ourServices = await res.json();
    return (
      <>
        <AllServices ourServices={ourServices} />
      </>
    );
  } catch {
    return null;
  }
};

export default MarqueeServices;
