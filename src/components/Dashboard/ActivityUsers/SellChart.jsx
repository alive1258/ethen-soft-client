import React from "react";
import { HiArrowSmUp } from "react-icons/hi";

const SellChart = () => {
  return (
    <main>
      <div className=" grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4">
        {/* sell of this Year  */}
        <div className="py-5 px-6 bg-primary-base rounded-lg">
          <div className="flex items-center space-x-6">
            <h1 className="text-3xl font-bold">$66,555</h1>
            <div className="bg-[#484949] py-1 px-4 flex items-center rounded-md">
              <span>
                <HiArrowSmUp className="text-[#41B3A2] font-semibold" />
              </span>
              <p className="text-sm text-[#41B3A2] font-semibold">40%</p>
            </div>
          </div>
          <div className="pt-1">
            <p>Sell of this Year</p>
          </div>
          <div className=" pt-10 ">
            <div className="flex justify-between ">
              <h1>285 Left to Goal</h1>
              <p>60%</p>
            </div>
            <div className="w-full bg-gray-700 rounded mt-2 h-1">
              <div
                // className="bg-[#5497FA] h-1 rounded"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1 rounded"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* sell of this month  */}
        <div className="py-5 px-6 bg-primary-base rounded-lg">
          <div className="flex items-center space-x-6">
            <h1 className="text-3xl font-bold">$66,555</h1>
            <div className="bg-[#4b4a4a] py-1 px-4 flex items-center rounded-md">
              <span>
                <HiArrowSmUp className="text-[#F05A7E] font-semibold" />
              </span>
              <p className="text-sm text-[#F05A7E] font-semibold">25%</p>
            </div>
          </div>
          <div className="pt-1">
            <p>Sell of this Month</p>
          </div>
          <div className=" pt-10 ">
            <div className="flex justify-between ">
              <h1>285 Left to Goal</h1>
              <p>75%</p>
            </div>
            <div className="w-full bg-gray-700 rounded mt-2 h-1">
              <div
                // className="bg-[#5497FA] h-1 rounded"
                className="bg-gradient-to-r from-indigo-500 to-[#e4365e] h-1 rounded"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* sell of this Week  */}
        <div className="py-5 px-6 bg-primary-base rounded-lg">
          <div className="flex items-center space-x-6">
            <h1 className="text-3xl font-bold">$66,555</h1>
            <div className="bg-[#4a4b4a] py-1 px-4 flex items-center rounded-md">
              <span>
                <HiArrowSmUp className="text-[#06D001] font-semibold" />
              </span>
              <p className="text-sm text-[#06D001] font-semibold">25%</p>
            </div>
          </div>
          <div className="pt-1">
            <p>Sell of this Week</p>
          </div>
          <div className=" pt-10 ">
            <div className="flex justify-between ">
              <h1>285 Left to Goal</h1>
              <p>75%</p>
            </div>
            <div className="w-full bg-gray-700 rounded mt-2 h-1">
              <div
                // className="bg-[#5497FA] h-1 rounded"
                className="bg-gradient-to-r from-[#c2e936] to-[#06D001] h-1 rounded"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellChart;
