import Image from "next/image";
import { truncateDescription } from "@/utils/descriptionTruncate";
import image1 from "../../../../../public/assets/images/services.png";
import ServiceTitle from "../Services/ServiceTitle";
import Link from "next/link";

const HomeServiceCard = ({ service }) => {
  return (
    <>
      <Link href="/services">
        <div
          className={`text-center h-[300px] hover:shadow-gray-300 cursor-pointer px-2 py-4  hover:shadow-lg hover:scale-105 duration-300 transition-all shadow-#${service?.variant} rounded-lg duration-200 bg-white `}
        >
          <Image
            src={image1}
            className={`size-14 md:size-[100px] mx-auto p-2 md:p-6 rounded-full`}
            style={{
              backgroundColor: `${service?.color_code}`,
            }}
            width={56}
            height={56}
            alt="service icon"
          />
          <ServiceTitle service={service} />
          <p className="text-black-base text-[10px] md:text-base">
            {truncateDescription(service?.description, 13)}
          </p>
        </div>
      </Link>
    </>
  );
};

export default HomeServiceCard;
