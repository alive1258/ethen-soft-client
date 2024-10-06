import OTP from "@/components/UI/OTP/OTP";
import React from "react";

const OTPPage = () => {
  return (
    <div>
      <OTP redirectPath="/dashboard/admin" />
    </div>
  );
};

export default OTPPage;
