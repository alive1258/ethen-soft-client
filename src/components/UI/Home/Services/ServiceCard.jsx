import Image from "next/image";
import { truncateDescription } from "@/utils/descriptionTruncate";
import image1 from "../../../../../public/assets/images/services.png";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="text-center px-2 py-4 hover:shadow-primary hover:rounded-lg duration-200">
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
        <h1 className="text-black-base text-xl font-medium pt-6 pb-4">
          {service?.title}
        </h1>
        <p className="text-black-base">
          {truncateDescription(service?.description, 15)}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
