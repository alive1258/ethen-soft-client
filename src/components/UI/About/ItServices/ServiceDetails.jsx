import Image from "next/image";
import support from "../../../../../public/assets/images/support.png";
import Union from "../../../../../public/assets/images/Union.png";

const ServiceDetails = ({ service }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-black-base md:text-[40px] text-[22px] font-semibold md:pb-6 pb-3">
          {service?.title}
        </h1>
        <p className="text-black-base md:text-lg text-[14px] font-light">
          {service?.description}
        </p>
        <div className="grid md:text-xl text-lg font-medium md:grid-cols-2 grid-cols-1 gap-x-14 md:gap-y-10 gap-y-4 md:my-10 my-6">
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6 className=" ">{service?.service_one}</h6>
          </div>
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6>{service?.service_tow}</h6>
          </div>
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6>{service?.service_three}</h6>
          </div>
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6>{service?.service_four}</h6>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          className="rounded-lg"
          src={Union}
          width={629}
          height={476}
          alt="union"
        />
      </div>
    </>
  );
};

export default ServiceDetails;
