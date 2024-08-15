import { GoArrowUpRight } from "react-icons/go";
const DataAnalysisCard = () => {
  return (
    <>
      <div className="h-[145px] rounded-lg bg-black-muted p-6">
        <div className="flex items-center justify-center gap-6">
          <div class="relative">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle-bg"
                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle stroke-[#08B1BA]"
                stroke-dasharray="56, 100"
                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            <div class="absolute top-5 left-5">
              <GoArrowUpRight className="text-3xl text-[#5c6ca5]" />
            </div>
          </div>

          <div>
            <h6 className="text-[#8A92A6]">Total Sales</h6>
            <h3 className="text-xl text-[#D3D3D3] font-medium mt-2">$560K</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalysisCard;
