import Image from "next/image";
import image from "../../../../../public/assets/images/aboutUs/MicrosoftTeams-image-413 1.png";
import star from "../../../../../public/assets/images/aboutUs/2.png";
import star2 from "../../../../../public/assets/images/aboutUs/Frame1.png";
import ButtonOutline from "../../Button/ButtonOutline";

const Banner = () => {
  return (
    <>
      <div
        className="container h-[80vh] bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/images/aboutUs/bg.png), url(/assets/images/aboutUs/Frame.png), url(/assets/images/works/Vecto.png)",
          backgroundPosition:
            "right top,  80px top,  right bottom, right calc(100% - 100px) top",
        }}
      >
        <div
          className="pt-[125px] flex items-center justify-between"
          styl={{
            backgroundImage: "url(/assets/images/aboutUs/Frame.png)",
            backgroundPosition: "left top",
          }}
        >
          <div className="w-full">
            <div className="flex items-center gap-4 text-primary-base font-medium marker:border-r-[1px] uppercase">
              <p>web apps</p>
              <p>mobile apps</p>
              <p>web apps</p>
              <p>mobile apps</p>
            </div>
            <h1 className="text-black-base text-[40px] font-semibold py-5">
              About Our Company EthenSoft
            </h1>
            <p className="text-black-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
              dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt dolore. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt dolore.
            </p>
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
      </div>
    </>
  );
};

export default Banner;
