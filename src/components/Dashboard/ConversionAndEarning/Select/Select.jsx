import { FaChevronDown } from "react-icons/fa";

const Select = () => {
  return (
    <>
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
    </>
  );
};

export default Select;
