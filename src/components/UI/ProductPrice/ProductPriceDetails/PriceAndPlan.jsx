"use client";

import { FaCheckCircle } from "react-icons/fa";
import PriceCard from "./PriceCard";
import { useGetAllPricingQuery } from "@/redux/api/pricingApi";

const PriceAndPlan = ({ serviceId }) => {
  const { data, error, isLoading } = useGetAllPricingQuery({
    service: serviceId,
  });

  const pricing = data?.data;
  return (
    <>
      <div className="container my-20">
        <h1 className="text-[#15191F] text-2xl font-semibold border-b border-b-primary-base pb-2">
          Pricing & Plans
        </h1>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* price 1 single card  */}

          {pricing?.map((item, index) => (
            <PriceCard
              key={index}
              title={item?.title}
              price={item?.price}
              pricingCategory={item?.pricingCategory}
              pricingId={item?._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceAndPlan;
