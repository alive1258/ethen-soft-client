import UpdatePricingFeature from "@/components/Dashboard/PricingFeature/UpdatePricingFeature";

const UpdatePricingFeaturePage = ({ params }) => {
  return (
    <>
      <UpdatePricingFeature id={params?.id} />
    </>
  );
};

export default UpdatePricingFeaturePage;
