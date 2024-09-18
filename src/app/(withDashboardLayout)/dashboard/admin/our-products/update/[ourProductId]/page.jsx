import UpdateOurProducts from "@/components/Dashboard/OurProducts/UpdateOurProducts";

const page = ({ params }) => {
  return (
    <>
      <UpdateOurProducts id={params?.ourProductId} />
    </>
  );
};

export default page;
