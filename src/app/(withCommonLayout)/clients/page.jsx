import Image from "next/image";
import blendImage from "../../../../public/assets/images/Gradient2.png";
import Clients from "@/components/UI/Clients/Clients";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";

const page = () => {
  return (
    <>
      {/* client banner  */}
      <div
        className="h-[374px] bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(/assets/images/customer.png)`,
        }}
      >
        <Image
          className="w-full h-[374px] mix-blend-difference"
          src={""}
          width={1440}
          height={374}
          alt="blend image"
        />
        <div className="absolute top-[40%] left-[42%]">
          <h1 className="banner-title before:w-full after:w-full relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
            Our Clients
          </h1>
        </div>
      </div>
      <Clients />
      <Testimonials />
    </>
  );
};

export default page;
