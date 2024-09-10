"use client";
import { useEffect } from "react";
import PricingCard from "./PricingCard";
import { applyScrollAnimation } from "@/utils/applyScrollAnimation ";

const ProductPriceSection = ({ prices }) => {
  useEffect(() => {
    // Use the utility function and pass the section and reveal classes
    const cleanup = applyScrollAnimation("section", ".reveal");

    // Clean up event listeners when the component is unmounted
    return cleanup;
  }, []);

  return (
    <>
      <section className="md:mt-28 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {prices?.map((item) => (
          // price card
          <PricingCard item={item} key={item?._id} />
        ))}
      </section>
    </>
  );
};

export default ProductPriceSection;
