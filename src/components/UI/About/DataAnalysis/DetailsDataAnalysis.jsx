import React from "react";
import { BsDatabaseX } from "react-icons/bs";

const DetailsDataAnalysis = ({ deal }) => {
  return (
    <>
      <div className="p-4 md:space-y-4 space-y-2 bg-[#F2EAF3] rounded-lg">
        <div className="flex items-center gap-4">
          <BsDatabaseX className="md:size-14 size-8 md:p-3 p-1 bg-primary-base rounded-lg text-white" />
          <h1 className="text-black-base font-semibold md:text-3xl text-xl">
            {deal?.deal}
          </h1>
        </div>
        <h1 className="md:text-2xl text-lg font-medium text-primary-base">
          {deal?.title}
        </h1>
        <p className="text-black-base">{deal?.description}</p>
      </div>
    </>
  );
};

export default DetailsDataAnalysis;
