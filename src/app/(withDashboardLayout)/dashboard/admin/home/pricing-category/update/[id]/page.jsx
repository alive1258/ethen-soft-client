import UpdatePricingCategory from "@/components/Dashboard/PricingCategory/UpdatePricingCategory";
import React from "react";

const UpdatePricingCategoryPage = ({ params }) => {
  return (
    <>
      <UpdatePricingCategory id={params?.id} />
    </>
  );
};

export default UpdatePricingCategoryPage;
