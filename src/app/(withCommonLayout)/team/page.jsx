import Image from "next/image";
import blend from "../../../../public/assets/images/Gradient2.png";
import Team from "@/components/UI/Team/Team";

const TeamPage = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
      next: {
        revalidate: 30,
      },
    });
    const teams = await res.json();

    return (
      <>
        {/* product banner  */}
        <div
          className="h-[374px] bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(/assets/images/team.png)`,
          }}
        >
          <div className="absolute top-[40%] left-[42%]">
            <h1 className="banner-title before:w-full after:w-full relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
              Our Creative Team
            </h1>
          </div>
        </div>
        <Team teams={teams} />
      </>
    );
  } catch {
    return null;
  }
};

export default TeamPage;
