import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <div
        className="container py-14 bg-no-repeat -z-20"
        style={{
          backgroundImage:
            "url(/assets/images/works/Vector.png), url(/assets/images/star3.png), url(/assets/images/round.png)",
          backgroundPosition:
            "calc(100% - 100px) top, 100px 100px, right bottom",
        }}
      >
        <SectionTitle
          subTitle="TEAM"
          title="Our Professional Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default Team;
