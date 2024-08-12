import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";
import Services from "@/components/UI/Home/Services/Services";
import Button from "@/components/UI/Button/Button";
import Blogs from "@/components/UI/Home/Blog/Blogs";
import ButtonOutline from "@/components/UI/Button/ButtonOutline";

const page = () => {
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
        <div className="absolute top-[40%] left-[47%]">
          <h1
            className="banner-title before:right-[140px] after:left-[140px] relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat z-30"
            // style={{
            //   backgroundImage: `url(/assets/images/left.png), url(/assets/images/left.png)`,
            //   backgroundPosition: "left, right",
            // }}
          >
            Blog
          </h1>
        </div>
      </div>
      <Blogs />
    </>
  );
};

export default page;
