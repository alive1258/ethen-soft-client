import Image from "next/image";
import image from "../../../../../public/assets/images/aboutUs/MicrosoftTeams-image-413 1.png";
import star from "../../../../../public/assets/images/aboutUs/2.png";
import star2 from "../../../../../public/assets/images/aboutUs/Frame1.png";
import ButtonOutline from "../../Button/ButtonOutline";

const BannerDetails = ({ aboutHero }) => {
  return (
    <>
      <div className="md:pt-[180px] pt-[30px]  md:flex items-center justify-between">
        <div className="w-full ">
          <div className="md:flex md:text-[17px] text-[14px] items-center md:space-y-0 space-y-2 space-x-3 text-primary-base font-medium marker:border-r-[1px] ">
            <p className="pl-2.5 md:pl-0">{aboutHero?.service_one}</p>{" "}
            <span className="md:block hidden">|</span>{" "}
            <p>{aboutHero?.service_two}</p>{" "}
            <span className="md:block hidden">|</span>{" "}
            <p>{aboutHero?.service_three}</p>{" "}
            <span className="md:block hidden">|</span>{" "}
            <p>{aboutHero?.service_four}</p>
          </div>
          <h1 className="text-black-base md:text-[40px] text-[22px] font-semibold md:py-5 py-2">
            {aboutHero?.title}
          </h1>
          <p className="text-black-base">{aboutHero?.description}</p>
          <div className="flex justify-start md:my-6 my-3">
            <ButtonOutline content="Join Now" url="/" />
          </div>
        </div>
        <div className="w-full relative">
          <Image
            className=""
            src={image}
            width={630}
            height={344}
            alt="banner"
          />
          <Image
            className="absolute md:block hidden -top-20 left-0"
            src={star2}
            width={86}
            height={86}
            alt="banner"
          />
          <Image
            className="absolute -bottom-9 -right-9"
            src={star}
            width={100}
            height={100}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
};

export default BannerDetails;
