import ConversionAndEarning from "@/components/Dashboard/ConversionAndEarning/ConversionAndEarning";
import DataAnalysis from "@/components/Dashboard/DataAnalysis/DataAnalysis";
import GroceryData from "@/components/Dashboard/GroceryData/GroceryData";

const page = () => {
  return (
    <>
      <DataAnalysis />
      <GroceryData />
      <ConversionAndEarning />
    </>
  );
};

export default page;
