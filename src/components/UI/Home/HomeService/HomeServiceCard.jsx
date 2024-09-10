import Image from "next/image";
import { truncateDescription } from "@/utils/descriptionTruncate";

import Link from "next/link";
import HomeServiceTitle from "./HomeServiceTitle";

const HomeServiceCard = ({ service }) => {
  return (
    <>
      <Link href={`/services#${service?.slug || service?.id}`}>
        <div
          className={`text-center md:h-[300px] reveal hover:shadow-gray-300 cursor-pointer px-2 py-4  hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-#${service?.variant} rounded-lg duration-200 bg-white `}
        >
          <Image
            src={service?.icon}
            className={`size-14 md:size-[110px] mx-auto p-2 md:p-4 rounded-full hover:animate-spin hover:scale-110  delay-100 transition-transform duration-300 ease-in-out`} // Add animation classes here
            style={{
              backgroundColor: `${service?.color_code}`,
            }}
            width={56}
            height={56}
            alt="service icon"
          />
          <HomeServiceTitle service={service} />
          <p className="text-black-base md:block hidden md:text-base">
            {truncateDescription(service?.sub_description, 13)}
          </p>
        </div>
      </Link>
    </>
  );
};

export default HomeServiceCard;
