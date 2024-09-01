import UpdateTrustUs from "@/components/Dashboard/TrustUs/UpdateTrustUs";

const page = ({ params }) => {
  return (
    <>
      <UpdateTrustUs id={params?.trustUsId} />
    </>
  );
};

export default page;
