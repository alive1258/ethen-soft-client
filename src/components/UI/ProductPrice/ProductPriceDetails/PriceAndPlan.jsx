import { FaCheckCircle } from "react-icons/fa";
import PriceCard from "./PriceCard";

const PriceAndPlan = () => {
  return (
    <>
      <div className="container my-20">
        <h1 className="text-[#15191F] text-2xl font-semibold border-b border-b-primary-base pb-2">
          Pricing & Plans
        </h1>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* price 1 single card  */}

          <div className="relative hover:scale-105 hover:shadow-[0px_0px_16px_0px_rgba(187,1,252,0.5)] duration-300 ease-in-out transition-all delay-100 cursor-pointer w-full items-center justify-center p-0.5 mb-2.5 overflow-hidden text-[16px] font-medium rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                <span className="text-base font-light text-[#686C72]">
                  Only
                </span>
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
          </div>
          {/* price 2 single card  */}

          <div className="relative hover:scale-105 hover:shadow-[0px_0px_16px_0px_rgba(187,1,252,0.5)] duration-300 ease-in-out transition-all delay-100 cursor-pointer w-full items-center justify-center p-0.5 mb-2.5 overflow-hidden text-[16px] font-medium rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <PriceCard />
          </div>
          {/* price 3 single card  */}

          <div className="relative hover:scale-105 hover:shadow-[0px_0px_16px_0px_rgba(187,1,252,0.5)] duration-300 ease-in-out transition-all delay-100 cursor-pointer w-full items-center justify-center p-0.5 mb-2.5 overflow-hidden text-[16px] font-medium rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <PriceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceAndPlan;
