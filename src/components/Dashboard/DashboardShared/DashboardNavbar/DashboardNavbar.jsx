import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { HiMiniEnvelope } from "react-icons/hi2";
import flag from "../../../../../public/assets/images/dashboard/flag.png";
import profile from "../../../../../public/assets/images/dashboard/profile.png";

const DashboardNavbar = () => {
  return (
    <>
      <div className="px-6 py-4 sticky top-0 -translate-y-0 bg-black-muted z-[500] shadow duration-300  transition-transform transform ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaBars className="text-xl text-white" />
            <input
              className="w-full md:w-[548px] bg-transparent py-1 px-4 rounded border border-[#30384F] placeholder:text-[#ADB5BD]"
              placeholder="Search…"
            />
          </div>
          <div className="flex items-center gap-4">
            <Image src={flag} width={32} height={32} alt="flag" />
            <IoNotifications className="text-[#8A92A6] size-6" />
            <HiMiniEnvelope className="text-[#8A92A6] size-[26px]" />
            <Image
              className="rounded-full"
              src={profile}
              width={45}
              height={45}
              alt="flag"
            />
            <div>
              <h6 className="text-white">Austin Robertson</h6>
              <p className="text-sm text-white">UI/UX Desinger</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
