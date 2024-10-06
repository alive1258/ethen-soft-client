import Image from "next/image";
import blogBanner from "../../../../public/assets/images/about/blogBanners.png";
import Blogs from "@/components/UI/Home/Blog/Blogs";

const page = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={blogBanner}
          height={350}
          width={900}
          alt="blogBanner"
        />
      </div>
      <Blogs />
    </>
  );
};

export default page;
