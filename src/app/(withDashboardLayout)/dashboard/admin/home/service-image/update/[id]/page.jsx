import UpdateServiceImage from "@/components/Dashboard/ServiceImage/UpdateServiceImage";
import React from "react";

const UpdateServiceImagePage = ({ params }) => {
  return (
    <>
      <UpdateServiceImage id={params?.id} />
    </>
  );
};

export default UpdateServiceImagePage;
