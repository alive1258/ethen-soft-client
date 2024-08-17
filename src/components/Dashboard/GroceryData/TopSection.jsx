import { FaChevronDown } from "react-icons/fa";

const TopSection = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-[#D3D3D3] font-medium">$855.8K</h1>
          <span className="text-[#5C6CA5]">Gross Sales</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block size-4 bg-[#3A57E8] rounded-full"></span>
            <span className="text-[#5C6CA5]">Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-4 bg-[#85F4FA] rounded-full"></span>
            <span className="text-[#5C6CA5]">Cost</span>
          </div>
        </div>
        <div className="">
          <div class="inline-block relative w-36">
            <select class="block appearance-none bg-transparent text-[#5C6CA5] w-ful px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>This Week</option>
              <option>This Week</option>
              <option>This Week</option>
              <option>This Week</option>
              <option>This Week</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8A92A6]">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
