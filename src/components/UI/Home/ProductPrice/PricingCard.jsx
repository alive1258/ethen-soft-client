import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";

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
          className={`relative text-center cursor-pointer p-4 flex flex-col justify-center border rounded-lg duration-200 hover:duration-300 bg-white z-10 hover:shadow-primary  space-y-4 group overflow-hidden border-#${item?.colorCode}`}
          style={{ borderColor: item?.colorCode }}
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
          <div dangerouslySetInnerHTML={{ __html: item?.description }}></div>
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
              <div className="absolute w-[488px] h-[488px] left-[48px] top-0 bg-[#E8F6ED] rounded-full group-hover:opacity-80"></div>
              <div className="absolute w-[488px] h-[488px] left-[32px] top-[16px] bg-[#B6E3C8] rounded-full group-hover:opacity-80"></div>
              <div className="absolute w-[488px] h-[488px] left-[16px] top-[32px] bg-[#93D5AD] rounded-full group-hover:opacity-80"></div>
              <div className="absolute w-[488px] h-[488px] left-0 top-[48px] bg-[#62C288] rounded-full group-hover:opacity-80"></div>
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
