import UpdateOurDeals from "@/components/Dashboard/OurDeals/UpdateOurDeals";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <UpdateOurDeals id={params?.ourDealId} />
    </>
  );
};

export default page;
