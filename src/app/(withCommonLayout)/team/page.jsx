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
        <div className="h-[350px] bg-emerald-400"></div>
        <Team teams={teams} />
      </>
    );
  } catch {
    return null;
  }
};

export default TeamPage;
