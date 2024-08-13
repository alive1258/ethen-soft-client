import Image from "next/image";
import blend from "../../../../public/assets/images/Gradient2.png";
import Team from "@/components/UI/Team/Team";

const TeamPage = () => {
  return (
    <>
      {/* product banner  */}
      <div
        className="h-[374px] bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(/assets/images/team.png)`,
        }}
      >
        {/* <Image
          className="w-full h-[374px] mix-blend-difference"
          src={blend}
          width={1440}
          height={374}
          alt="blend image"
        /> */}
        <div className="absolute top-[40%] left-[42%]">
          <h1 className="banner-title before:w-full after:w-full relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
            Our Creative Team
          </h1>
        </div>
      </div>
      <Team />
    </>
  );
};

export default TeamPage;
