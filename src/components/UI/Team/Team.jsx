import SectionTitle from "../SectionTitle/SectionTitle";
import TeamCard from "./TeamCard";

const Team = ({ teams }) => {
  return (
    <>
      <div className="container py-14 bg-no-repeat -z-20">
        <SectionTitle
          subTitle="TEAM"
          title="Our Professional Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
          {teams?.data?.map((team) => (
            <TeamCard key={team?._id} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
