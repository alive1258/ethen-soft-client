import ActivityUsers from "@/components/Dashboard/ActivityUsers/ActivityUsers";
import EarningData from "@/components/Dashboard/EarningData/EarningData";
import Expenses from "@/components/Dashboard/Expenses/Expenses";
import SellChart from "@/components/Dashboard/SellChart/SellChart";
import ShortOverview from "@/components/Dashboard/ShortOverview/ShortOverview";
import Students from "@/components/Dashboard/Students/Students";

const page = () => {
  return (
    <>
      <main className="p-4">
        <ShortOverview />
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="w-full">
            <EarningData />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-6">
            <Expenses />
            <Students />
          </div>
        </div>
        <div className="mt-5">
          <SellChart />
        </div>
        <div className="mt-5">
          <ActivityUsers />
        </div>
      </main>
    </>
  );
};

export default page;
