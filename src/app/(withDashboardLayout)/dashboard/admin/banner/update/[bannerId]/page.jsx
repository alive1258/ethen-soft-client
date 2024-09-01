import UpdateBanners from "@/components/Dashboard/Banner/UpdateBanner";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <UpdateBanners id={params?.bannerId} />
    </>
  );
};

export default page;
