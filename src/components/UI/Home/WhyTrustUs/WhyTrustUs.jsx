import SectionTitle from "../../SectionTitle/SectionTitle";
import icon from "../../../../../public/assets/images/trust.png";
import Image from "next/image";

const WhyTrustUs = () => {
  return (
    <>
      <div
        className="max-w-[1440px] mx-auto bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/star.png)",
        }}
      >
        <div className="py-14">
          <SectionTitle
            width={400}
            subTitle="ETHENSOFT SO DIFFERENT?"
            title="Why Trust Us?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
            <div className="flex gap-6 py-4">
              <div>
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-black-base text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-primary-base pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <div>
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-black-base text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-primary-base pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <div>
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-black-base text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-primary-base pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <div>
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-black-base text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-primary-base pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <div>
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-black-base text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-primary-base pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <div>
                <Image src={icon} width={88} height={88} alt="icon" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-black-base text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-primary-base pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrustUs;
