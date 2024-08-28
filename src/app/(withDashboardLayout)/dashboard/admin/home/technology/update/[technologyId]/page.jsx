import UpdateTechnology from "@/components/Dashboard/Technology/UpdateTechnology";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <UpdateTechnology id={params?.technologyId} />
    </>
  );
};

export default page;
