import AdminOTP from "@/components/UI/AdminOTP/AdminOTP";
import React from "react";

const OTPPage = () => {
  return (
    <div>
      <AdminOTP redirectPath="/dashboard/admin" />
    </div>
  );
};

export default OTPPage;
