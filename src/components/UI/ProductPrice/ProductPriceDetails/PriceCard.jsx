"use client";

import { useGetAllFeatureAssignedToPricingQuery } from "@/redux/api/featureAssignedToPricingApi";
import { FaCheckCircle } from "react-icons/fa";

const PriceCard = ({ title, price, pricingCategory, serviceId, pricingId }) => {
  const { data, isLoading } = useGetAllFeatureAssignedToPricingQuery({
    pricing: pricingId,
  });

  const features = data?.data?.data;
  const meta = data?.data?.meta;

  // for payment
  //serviceId and pricingId given in params
  return (
    <div className="relative hover:scale-105 hover:shadow-[0px_0px_16px_0px_rgba(187,1,252,0.5)] duration-300 ease-in-out transition-all delay-100 cursor-pointer w-full items-center justify-center p-0.5 mb-2.5 overflow-hidden text-[16px] font-medium rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-medium">{title}</h1>
            <h1 className="text-sm">A one-time payment of</h1>
          </div>
          <div className="">
            <span className="premium-btn px-4 py-2">
              {pricingCategory?.name}
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-medium text-black-solid pb-2 mt-2 border-b-[#989A9E]">
          $ {price}
          <span className="text-base font-light text-[#686C72]">Only</span>
        </h1>
        <div className="my-5 space-y-2">
          {/* Features list */}

          {features?.length &&
            features?.map((feature, index) => (
              <div key={index} className="flex  items-center space-x-2">
                <FaCheckCircle className="text-lg text-primary-base " />

                <p className="text-[16px] text-[#0D0F12]">
                  {feature?.pricingFeature?.name}
                </p>
              </div>
            ))}
        </div>
        <button className="text-white w-full bg-btn mb-2">Buy Now</button>
      </div>
    </div>
  );
};

export default PriceCard;
