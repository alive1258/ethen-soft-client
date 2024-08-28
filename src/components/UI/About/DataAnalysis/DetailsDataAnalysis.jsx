import React from "react";
import { BsDatabaseX } from "react-icons/bs";

const DetailsDataAnalysis = ({ deal }) => {
  return (
    <>
      <div className="p-4 space-y-4 bg-[#F2EAF3] rounded-lg">
        <div className="flex items-center gap-4">
          <BsDatabaseX className="size-14 p-3 bg-primary-base rounded-lg text-white" />
          <h1 className="text-black-base font-semibold text-3xl">
            {deal?.deal}
          </h1>
        </div>
        <h1 className="text-2xl font-medium text-primary-base">
          {deal?.title}
        </h1>
        <p className="text-black-base">{deal?.description}</p>
      </div>
    </>
  );
};

export default DetailsDataAnalysis;
