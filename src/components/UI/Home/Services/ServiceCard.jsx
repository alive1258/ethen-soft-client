import Image from "next/image";
import { truncateDescription } from "@/utils/descriptionTruncate";
import ServiceTitle from "./ServiceTitle";
import icon from "../../../../../public/assets/images/blog/blog-1.png";

const ServiceCard = ({ service, index }) => {
  const isImageLeft = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
        isImageLeft ? "" : "md:grid-cols-2-reverse"
      }`}
    >
      {/* Left Side: Image or Description */}
      <div className={`flex  ${isImageLeft ? "order-1" : "order-2"}`}>
        <Image
          src={service?.image}
          className="h-[400px] p-2 md:p-6 w-full"
          // className="size-14 md:size-[100px] mx-auto p-2 md:p-6 rounded-full"
          height={200}
          width={200}
          alt="service image"
        />
      </div>

      {/* Right Side: Description or Image */}
      <div className={`flex flex-col ${isImageLeft ? "order-2" : "order-1"}`}>
        <ServiceTitle service={service} />
        <div className="text-black-base text-[10px] md:text-base">
          <div dangerouslySetInnerHTML={{ __html: service?.description }}></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
