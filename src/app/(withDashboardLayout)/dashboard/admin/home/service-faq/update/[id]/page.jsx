import UpdateServiceFAQ from "@/components/Dashboard/ServiceFAQ/UpdateServiceFAQ";
import React from "react";

const UpdateServiceFAQPage = ({ params }) => {
  return (
    <>
      <UpdateServiceFAQ id={params?.id} />
    </>
  );
};

export default UpdateServiceFAQPage;
