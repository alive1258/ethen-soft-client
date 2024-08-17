import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import ClientTable from "./ClientTable";

const EnterpriseClients = () => {
  return (
    <>
      <div className="bg-black-muted rounded-lg mt-6 px-8">
        <div className="flex items-center justify-between py-6 border-b border-b-black">
          <div className="">
            <h1 className="font-medium text-xl text-[#D3D3D3] pb-1.5">
              Enterprise Clients
            </h1>
            <div className="flex items-center gap-3">
              <FaCheck className="text-2xl text-[#3A57E8]" />
              <span className="text-[#8A92A6]">15 New Acquired ths month</span>
            </div>
          </div>
          <IoIosArrowDown className="text-[#5C6CA5] text-2xl" />
        </div>
      </div>
      <ClientTable />
    </>
  );
};

export default EnterpriseClients;
