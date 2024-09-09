import UpdatePricing from "@/components/Dashboard/Pricing/UpdatePricing";
import React from "react";

const UpdatePricingPage = ({ params }) => {
  return (
    <>
      <UpdatePricing id={params?.id} />
    </>
  );
};

export default UpdatePricingPage;
