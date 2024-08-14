import Image from "next/image";
import aboutImage from "../../../../../public/assets/images/about/about-1.png";

const About = () => {
  return (
    <>
      <div
        className="bg-[#f4edf7] py-2 bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url(/assets/images/about/Ellipse-18.pn)",
        }}
      >
        <div
          className="container py-12 flex flex-col-reverse md:flex-row items-center bg-no-repeat gap-5"
          style={{
            backgroundImage: "url(/assets/images/about/Ellipse.png)",
          }}
        >
          <div className="w-full">
            <p className="uppercase text-primary-base text-base md:text-lg font-medium pb-4">
              ABOUT ETHENSOFT
            </p>
            <h1 className="text-2xl md:text-[32px] font-semibold pb-6">
              We design, develop, implement and support{" "}
              <span className="text-primary-base">IT Systems</span>
            </h1>
            <p className="text-sm md:text-lg font-light text-black-base pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat aute irure dolor in reprehenderit velit.
            </p>
            <p className="text-black-base text-base md:text-lg font-medium border-l-2 border-primary-base pl-6">
              We are a highly trained and qualified team ready to provide viable
              IT solutions together with full-time support and expert advice to
              fulfill your business needs.
            </p>
          </div>
          <div className="w-full">
            <Image
              className="w-[630px] h-[464px] rounded-lg"
              src={aboutImage}
              width={630}
              height={464}
              alt="about"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
