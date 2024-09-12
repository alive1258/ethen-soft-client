import Link from "next/link";
import CardSection from "./CardSection";

const HomeServiceCard = ({ service }) => {
  return (
    <>
      <Link href={`/services#${service?.slug || service?.id}`}>
        <div
          className={`text-center md:h-[300px] reveal cursor-pointer px-2 py-4 transition-all duration-300 ease-in-out rounded-lg bg-white dynamic-hover`}
          style={{
            "--dynamic-shadow": `0px 0px 16px 0px ${service?.color_code}`,
          }}
        >
          <CardSection service={service} />
        </div>
      </Link>
    </>
  );
};

export default HomeServiceCard;
