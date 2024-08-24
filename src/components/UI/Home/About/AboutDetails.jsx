import Image from "next/image";
import aboutImage from "../../../../../public/assets/images/about/about-1.png";

const AboutDetails = ({ homeAboutDetail }) => {
  return (
    <>
      <div className="w-full">
        <p className="uppercase text-primary-base text-base md:text-lg font-medium pb-4">
          ABOUT ETHENSOFT
        </p>
        <h1 className="text-2xl md:text-[32px] font-semibold pb-6">
          {homeAboutDetail?.title}
          <span className="text-primary-base">IT Systems</span>
        </h1>
        <p className="text-sm md:text-lg font-light text-black-base pb-8">
          {homeAboutDetail?.description}
        </p>
        <p className="text-black-base text-base md:text-lg font-medium border-l-2 border-primary-base pl-6">
          {homeAboutDetail?.sub_description}
        </p>
      </div>
      <div className="w-full">
        <Image
          className="md:w-[630px] h-[288px] md:h-[464px] rounded-lg"
          src={aboutImage}
          width={630}
          height={464}
          alt="about"
        />
      </div>
    </>
  );
};

export default AboutDetails;
