import UpdatePrivacyPolicy from "@/components/Dashboard/PrivacyPolicy/UpdatePrivacyPolicy";

const page = ({ params }) => {
  return (
    <>
      <UpdatePrivacyPolicy id={params?.privacyPolicyId} />
    </>
  );
};

export default page;
