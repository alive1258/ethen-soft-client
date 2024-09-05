import Image from "next/image";
import Link from "next/link";
import { truncateDescription } from "@/utils/descriptionTruncate";
import Button from "../../Button/Button";
const PricingCard = ({ item }) => {
  return (
    <>
      <div
        className="relative text-center p-4 flex flex-col justify-center border rounded-lg duration-200 bg-white z-10 hover:shadow-primary space-y-4 group overflow-hidden"
        style={{ borderColor: item?.color_code }}
      >
        <Image
          src={item?.icon}
          className={`size-14 md:size-[100px] mx-auto p-2 md:p-6 rounded-full`}
          style={{
            backgroundColor: `${item?.color_code}`,
          }}
          width={56}
          height={56}
          alt="service icon"
        />
        <h1 className="text-xl text-black-base font-medium ">{item?.title}</h1>
        <p className="text-black-base text-[10px] md:text-base">
          {truncateDescription(item?.description, 15)}
        </p>
        <div className="flex items-center justify-between">
          <h1 className="text-base text-black-base font-medium">
            Start at $<span>{item?.price}</span>{" "}
          </h1>
          <Link href={`/price/${item?._id}`}>
            <Button content="Buy Now" className="p-2" />
          </Link>
        </div>

        {/* hover effect */}
        <div className="absolute top-36 right-32 hidden group-hover:block">
          <div className="relative w-[536px] h-[536px] opacity-40 mix-blend-multiply">
            <div className="absolute w-[488px] h-[488px] left-[48px] top-0 bg-[#E8F6ED] rounded-full group-hover:opacity-80"></div>
            <div className="absolute w-[488px] h-[488px] left-[32px] top-[16px] bg-[#B6E3C8] rounded-full group-hover:opacity-80"></div>
            <div className="absolute w-[488px] h-[488px] left-[16px] top-[32px] bg-[#93D5AD] rounded-full group-hover:opacity-80"></div>
            <div className="absolute w-[488px] h-[488px] left-0 top-[48px] bg-[#62C288] rounded-full group-hover:opacity-80"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
