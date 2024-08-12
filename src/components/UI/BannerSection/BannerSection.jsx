import Image from "next/image";

const BannerSection = ({ title, banner, blendImage }) => {
  return (
    <>
      <div
        className="h-[374p] bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <Image
          className="w-full mix-blend-difference"
          src={blendImage}
          width={1440}
          height={374}
          alt="blend image"
        />
        <div className="absolute top-[40%] left-[42%]">
          <h1 className="banner-title relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
