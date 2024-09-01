import UpdateClients from "@/components/Dashboard/OurClients/UpdateOurClients";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <UpdateClients id={params?.ourClientId} />
    </>
  );
};

export default page;
