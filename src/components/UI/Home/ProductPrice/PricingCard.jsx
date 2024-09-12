import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";
import { truncateCharacters } from "@/utils/descriptionTextCounter";

const PricingCard = async ({ item }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pricing?sortOrder=asc&service=${item?._id}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    const data = await res.json();

    const pricing = data?.data?.data;

    return (
      <>
        <div
          className={`relative text-center cursor-pointer p-4 flex flex-col opacity-70 justify-center border rounded-lg duration-200 hover:duration-300 bg-white z-10 space-y-4 group overflow-hidden dynamic-hover`}
          style={{
            borderColor: item?.colorCode,
            "--dynamic-shadow": `0px 0px 16px 0px ${item?.colorCode}`,
          }}
        >
          <Image
            src={item?.logo}
            className={`size-14 md:size-[100px] mx-auto p-2 md:p-6 rounded-full`}
            style={{
              backgroundColor: `${item?.colorCode}`,
            }}
            width={56}
            height={56}
            alt="service icon"
          />
          <h1 className="md:text-xl text-lg text-black-base font-medium ">
            {item?.title}
          </h1>
          <p>{truncateCharacters(item?.subDescription, 70)}</p>
          <div className="flex items-center justify-between">
            <h1 className="text-base text-black-base font-medium z-[500]">
              Start at $<span>{pricing.length && pricing[0]?.price}</span>{" "}
            </h1>
            <Link href={`/pricing/${item?.slug}`}>
              <Button content="Buy Now" className="p-2" />
            </Link>
          </div>

          {/* hover effect */}
          <div className="absolute top-36 right-32 opacity-0 group-hover:opacity-100 duration-300">
            <div className="relative w-[536px] h-[536px] opacity-40 ">
              <div
                className="absolute w-[488px] h-[488px] left-[48px] top-0 rounded-full"
                style={{ backgroundColor: item?.colorCode, opacity: "16%" }}
              ></div>
              <div
                className="absolute w-[488px] h-[488px] left-[32px] top-[16px] rounded-full"
                style={{ backgroundColor: item?.colorCode, opacity: "16%" }}
              ></div>
              <div
                className="absolute w-[488px] h-[488px] left-[16px] top-[32px] rounded-full"
                style={{ backgroundColor: item?.colorCode, opacity: "16%" }}
              ></div>
              <div
                className="absolute w-[488px] h-[488px] left-0 top-[48px] rounded-full"
                style={{ backgroundColor: item?.colorCode, opacity: "16%" }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default PricingCard;
