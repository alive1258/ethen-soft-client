import UpdateOurWorks from "@/components/Dashboard/OurWorks/UpdateOurWork";

const page = ({ params }) => {
  return (
    <>
      <UpdateOurWorks id={params?.ourWorkId} />
    </>
  );
};

export default page;
