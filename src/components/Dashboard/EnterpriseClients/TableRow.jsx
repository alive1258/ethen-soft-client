import Image from "next/image";
import companyLogo from "../../../../public/assets/images/company.png";

const TableRow = () => {
  return (
    <>
      <tr className="px-6 border-b border-b-slate-800">
        <td className="flex items-center gap-4 py-5">
          <Image src={companyLogo} width={45} height={45} alt="client logo" />
          <span>Addidas Sportwear</span>
        </td>
        <td className="relative py-3">
          <span className="px-3 py-4 rounded-full w-full h-full border-2 border-[#3A57E8] text-[#3A57E8] bg-[#3A57E8] bg-opacity-50">
            MM
          </span>
          <span className="-ml-3 z-20 px-3 py-4 rounded-full w-full h-full border-2 border-[#3A57E8] text-[#3A57E8] bg-[#3A57E8] bg-opacity-50">
            MD
          </span>
        </td>
        <td className=" py-3">$14,000</td>
        <td className="p-4 max-w-xs rounded">
          <div className="flex items-center justify-between mb-1">
            <span className="text-gray-300">60%</span>
          </div>
          <div className="w-full bg-gray-700 rounded h-2">
            <div
              className="bg-blue-600 h-2 rounded"
              style={{ width: "60%" }}
            ></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
