import CreateTeams from "@/components/Dashboard/Teams/CreateTeams";

const page = ({ params }) => {
  return (
    <>
      <CreateTeams id={params?.teamId} />
    </>
  );
};

export default page;
