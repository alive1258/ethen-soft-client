import { GoArrowUpRight } from "react-icons/go";
import DataAnalysisCard from "./DataAnalysisCard";

const DataAnalysis = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataAnalysisCard />
        <DataAnalysisCard />
        <DataAnalysisCard />
        <DataAnalysisCard />
      </div>
    </>
  );
};

export default DataAnalysis;
