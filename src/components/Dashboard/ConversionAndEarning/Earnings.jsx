import Select from "./Select/Select";

const Earnings = () => {
  return (
    <>
      <div className="w-full bg-black-muted rounded-lg p-8">
        <div className="w-[480px] ml-10 flex items-center justify-between">
          <h1 className="text-xl text-[#D3D3D3] font-medium"> Earnings</h1>
          <Select />
        </div>
        <div className="flex items-center gap-6 pt-14">
          <div className="relative w-full">
            <svg viewBox="0 0 36 36" className="circular-chart-earning">
              <path
                className="circle-bg-earning"
                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle-earning stroke-[#3A57E8]"
                strokeDasharray="78, 100"
                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            <div className="absolute top-[16%] left-[34%]">
              <svg viewBox="0 0 36 36" className="circular-chart-earning-inner">
                <path
                  className="circle-bg-earning-inner"
                  d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle-earning-inner stroke-[#85F4FA]"
                  strokeDasharray="56, 100"
                  d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-4">
              <span className="inline-block size-4 bg-[#3A57E8] rounded-full"></span>
              <div className="flex flex-col gap-2.5">
                <span className="text-[#5C6CA5]">Fashion</span>
                <span className="text-[#8A92A6] font-medium">251K</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-12">
              <span className="inline-block size-4 bg-[#85F4FA] rounded-full"></span>
              <div className="flex flex-col gap-2.5">
                <span className="text-[#5C6CA5]">Fashion</span>
                <span className="text-[#8A92A6] font-medium">251K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnings;
