import React from "react";
import Select from "./Select/Select";
import Earnings from "./Earnings";
import Conversions from "./Conversions";

const ConversionAndFation = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        <Earnings />
        <Conversions />
      </div>
    </>
  );
};

export default ConversionAndFation;
