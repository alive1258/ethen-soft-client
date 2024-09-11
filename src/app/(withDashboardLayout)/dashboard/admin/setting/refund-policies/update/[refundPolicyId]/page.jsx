import UpdateRefundPolicy from "@/components/Dashboard/RefundPolicy/UpdateRefundPolicy";

const page = ({ params }) => {
  return (
    <>
      <UpdateRefundPolicy id={params?.refundPolicyId} />
    </>
  );
};

export default page;
