import Team from "@/components/UI/Team/Team";
import Image from "next/image";
import teamBanner from "../../../../public/assets/images/about/team.png";
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
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={teamBanner}
            height={350}
            width={900}
            alt="teamBanner"
          />
        </div>
        <Team teams={teams} />
      </>
    );
  } catch {
    return null;
  }
};

export default TeamPage;
