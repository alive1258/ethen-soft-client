import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import Image from "next/image";
import page1 from "../../../../../public/assets/images/price/image 26.png";
import "./ProductPrice.css";

const PageCard = ({ title, image }) => {
  return (
    <>
      <div className="border border-primary-base rounded-lg pt-[2px] mb-2">
        <Image
          className="flex w-[320px] h-[400px] rounded-md"
          src={image}
          width={300}
          height={500}
          alt="page"
        />
        <div className="bg-[#F4EDF7] px-4 py-2 rounded-b-lg flex items-center justify-between">
          <h1 className="text-[#0D0F12] text-sm font-medium">{title}</h1>
          <span className="size-8 bg-[#DCC8E6] rounded-full flex items-center justify-center">
            <HiMiniArrowTopRightOnSquare className="text-base text-primary-base" />
          </span>
        </div>
      </div>
    </>
  );
};

export default PageCard;
