import ConversionAndEarning from "@/components/Dashboard/ConversionAndEarning/ConversionAndEarning";
import DataAnalysis from "@/components/Dashboard/DataAnalysis/DataAnalysis";
import EnterpriseClients from "@/components/Dashboard/EnterpriseClients/EnterpriseClients";
import GroceryData from "@/components/Dashboard/GroceryData/GroceryData";

const page = () => {
  return (
    <>
      <DataAnalysis />
      <GroceryData />
      {/* <ConversionAndEarning /> */}
      <EnterpriseClients />
    </>
  );
};

export default page;
