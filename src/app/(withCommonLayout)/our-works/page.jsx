import Image from "next/image";
import workBanner from "../../../../public/assets/images/about/ourWorkBanner.png";
import OurWorks from "@/components/UI/Home/OurWorks/OurWorks";

const page = async () => {
  return (
    <>
      <section>
        {/* work banner  */}
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={workBanner}
            height={350}
            width={900}
            alt="workBanner"
          />
        </div>

        <OurWorks />
      </section>
    </>
  );
};

export default page;
