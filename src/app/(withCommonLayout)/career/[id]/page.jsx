import Image from "next/image";
import JobCard from "@/components/UI/Career/JobCard";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import blend from "../../../../../public/assets/images/noisy-gradients.png";

const CareerDetails = () => {
  return (
    <>
      <div
        className="h-[374p] bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(/assets/images/contact.png)`,
        }}
      >
        <Image
          className="w-full mix-blend-difference"
          src={blend}
          width={1440}
          height={374}
          alt="blend image"
        />
        <div className="absolute top-[40%] left-[45%]">
          <h1 className="banner-title before:right-[170px] after:left-[170px] relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat z-30">
            Career
          </h1>
        </div>
      </div>
      <div className="container md:grid grid-cols-3 gap-8 my-12">
        <div className="col-span-2"></div>
        <div className="col-span-1 space-y-10">
          <div className="flex items-center gap-2">
            <HiDotsCircleHorizontal className="text-[#77CC00] text-5xl bg-transparent" />
            <h1 className="text-3xl font-semibold text-black-base">
              Others Jobs
            </h1>
          </div>
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </>
  );
};

export default CareerDetails;
