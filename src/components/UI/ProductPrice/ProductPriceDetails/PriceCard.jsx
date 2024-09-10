import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PriceCard = () => {
  return (
    <>
      <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-medium">Single Site</h1>
            <h1 className="text-sm">A one-time payment of</h1>
          </div>
          <div className="">
            <span className="premium-btn px-4 py-2">Premium</span>
          </div>
        </div>
        <h1 className="text-2xl font-medium text-black-solid pb-2 mt-2 border-b border-b-[#989A9E]">
          $29.99
          <span className="text-base font-light text-[#686C72]">Only</span>
        </h1>
        <div className="my-5 space-y-2">
          {/* Features list */}

          <div className="flex  items-center space-x-2">
            <FaCheckCircle className="text-lg text-primary-base " />

            <p className="text-[16px] text-[#0D0F12]">
              Open the slide image in the lightbox
            </p>
          </div>
          <div className="flex  items-center space-x-2">
            <FaCheckCircle className="text-lg text-primary-base " />

            <p className="text-[16px] text-[#0D0F12]">
              Open the slide image in the lightbox
            </p>
          </div>
          <div className="flex  items-center space-x-2">
            <FaCheckCircle className="text-lg text-primary-base " />

            <p className="text-[16px] text-[#0D0F12]">
              Open the slide image in the lightbox
            </p>
          </div>
        </div>
        <button className="text-white w-full bg-btn mb-2">Buy Now</button>
      </div>
    </>
  );
};

export default PriceCard;
