import Image from "next/image";
import image from "../../../../../public/assets/images/aboutUs/MicrosoftTeams-image-413 1.png";
import star from "../../../../../public/assets/images/aboutUs/2.png";
import star2 from "../../../../../public/assets/images/aboutUs/Frame1.png";
import ButtonOutline from "../../Button/ButtonOutline";

const BannerDetails = ({ aboutHero }) => {
  return (
    <>
      <div
        className="pt-[180px]  flex items-center justify-between"
        styl={{
          backgroundImage: "url(/assets/images/aboutUs/Frame.png)",
          backgroundPosition: "left top",
        }}
      >
        <div className="w-full ">
          <div className="md:flex items-center space-x-3 text-primary-base font-medium marker:border-r-[1px] ">
            <p>{aboutHero?.service_one}</p> <span>|</span>{" "}
            <p>{aboutHero?.service_two}</p> <span>|</span>{" "}
            <p>{aboutHero?.service_three}</p> <span>|</span>{" "}
            <p>{aboutHero?.service_four}</p>
            {/* <p>{aboutHero?.service_five}</p> */}
          </div>
          <h1 className="text-black-base text-[40px] font-semibold py-5">
            {aboutHero?.title}
          </h1>
          <p className="text-black-base">{aboutHero?.description}</p>
          <div className="flex justify-start mt-6">
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
            className="absolute -top-20 left-0"
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
