import DataAnalysis from "@/components/Dashboard/DataAnalysis/DataAnalysis";
import GroceryData from "@/components/Dashboard/GroceryData/GroceryData";
import React from "react";

const page = () => {
  return (
    <div>
      <DataAnalysis />
      <GroceryData />
      {/* <ConversionAndEarning />
      <EnterpriseClients /> */}
    </div>
  );
};

export default page;
