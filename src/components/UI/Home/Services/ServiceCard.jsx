import Image from "next/image";
import { truncateDescription } from "@/utils/descriptionTruncate";
import image1 from "../../../../../public/assets/images/services.png";
import ServiceTitle from "./ServiceTitle";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="text-center px-2 py-4 hover:shadow-primary hover:rounded-lg duration-200 bg-white z-10">
        <Image
          src={image1}
          className={`size-[100px] mx-auto p-6 rounded-full`}
          style={{
            backgroundColor: `#${service?.variant}`,
          }}
          width={56}
          height={56}
          alt="service icon"
        />
        <ServiceTitle service={service} />
        <p className="text-black-base">
          {truncateDescription(service?.description, 15)}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
