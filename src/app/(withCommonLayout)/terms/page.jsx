import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";

const TermsAndCondition = () => {
  return (
    <>
      <div
        className="h-[374p] bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(/assets/images/contact.png)`,
        }}
      >
        <Image
          className="w-full mix-blend-difference"
          src={blend}
          width={1440}
          height={374}
          alt="blend image"
        />
        <div className="absolute top-[40%] left-[45%]">
          <h1 className="banner-title before:right-[170px] after:left-[170px] relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat z-30">
            Privacy Policy
          </h1>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
