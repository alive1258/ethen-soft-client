import UpdateOurTeam from "@/components/Dashboard/OurTeam/UpdateOurTeam";

const page = ({ params }) => {
  console.log(params);
  return (
    <>
      <UpdateOurTeam id={params?.teamId} />
    </>
  );
};

export default page;
