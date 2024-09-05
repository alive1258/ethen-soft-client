import { USER_KEY } from "@/contents/authKey";
import { getFromLocalStorage } from "@/hooks/local-storage";
import {
  useGetSingleUserQuery,
  useResendOTPMutation,
} from "@/redux/api/userApi";
import React, { useEffect, useState } from "react";

const ResendOTP = () => {
  const [OTPTime, setOTPTime] = useState(59);
  const [count, setCount] = useState(false);

  const userId = getFromLocalStorage(USER_KEY);

  const { data, isLoading } = useGetSingleUserQuery(userId);
  const email = data?.data?.email;

  const [resendOTPVerification] = useResendOTPMutation();

  useEffect(() => {});

  return <div></div>;
};

export default ResendOTP;
