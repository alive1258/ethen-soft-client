import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";
import Services from "@/components/UI/Home/Services/Services";
import Button from "@/components/UI/Button/Button";
// import imageBlent from "../../../../public/assets/images/left.png";
const ServicesPage = () => {
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
        <div className="absolute top-[40%] left-[42%]">
          <h1 className="banner-title before:w-full after:w-full relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
            Our Services
          </h1>
        </div>
      </div>
      <Services />
      <div className="flex justify-center mb-14">
        <Button content="View More" />
      </div>
    </>
  );
};

export default ServicesPage;
