import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";
import CareerOppertunities from "@/components/UI/Career/CareerOppertunities";

const CareerPage = () => {
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
          <h1
            className="banner-titl before:right-[140px] after:left-[140px] relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat z-30"
            // style={{
            //   backgroundImage: `url(/assets/images/left.png), url(/assets/images/left.png)`,
            //   backgroundPosition: "left, right",
            // }}
          >
            Career
          </h1>
        </div>
      </div>
      <CareerOppertunities />
    </>
  );
};

export default CareerPage;
