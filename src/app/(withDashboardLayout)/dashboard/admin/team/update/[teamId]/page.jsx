import UpdateOurTeam from "@/components/Dashboard/OurTeam/UpdateOurTeam";

const page = ({ params }) => {
  return (
    <>
      <UpdateOurTeam id={params?.teamId} />
    </>
  );
};

export default page;
