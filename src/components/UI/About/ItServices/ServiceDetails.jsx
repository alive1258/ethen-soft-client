import Image from "next/image";
import support from "../../../../../public/assets/images/support.png";
import Union from "../../../../../public/assets/images/Union.png";

const ServiceDetails = ({ service }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-black-base text-[40px] font-semibold pb-6">
          {service?.title}
        </h1>
        <p className="text-black-base text-lg font-light">
          {service?.description}
        </p>
        <div className="grid grid-cols-2 gap-x-14 gap-y-10 mt-10">
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6 className="text-xl font-medium">{service?.service_one}</h6>
          </div>
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6 className="text-xl font-medium">{service?.service_tow}</h6>
          </div>
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6 className="text-xl font-medium">{service?.service_three}</h6>
          </div>
          <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
            <Image src={support} width={40} height={40} alt="icon" />
            <h6 className="text-xl font-medium">{service?.service_four}</h6>
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
