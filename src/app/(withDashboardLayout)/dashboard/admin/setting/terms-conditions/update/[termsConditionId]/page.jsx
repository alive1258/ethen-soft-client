import UpdateTermsCondition from "@/components/Dashboard/TermsCondition/UpdateTermsCondition";

const page = ({ params }) => {
  return (
    <>
      <UpdateTermsCondition id={params?.termsConditionId} />
    </>
  );
};

export default page;
