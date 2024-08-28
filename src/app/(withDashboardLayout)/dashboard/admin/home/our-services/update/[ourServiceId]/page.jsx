import UpdateOurService from "@/components/Dashboard/OurServices/UpdateOurService";

const page = ({ params }) => {
  return (
    <>
      <UpdateOurService id={params?.ourServiceId} />
    </>
  );
};

export default page;
