import {
  useGetSingleUserQuery,
  useResendOTPMutation,
} from "@/redux/api/userApi";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ResendOTP = () => {
  const [OTPTime, setOTPTime] = useState(59);
  const [count, setCount] = useState(false);

  const { otpData } = useSelector((state) => state?.otpData);

  const userId = otpData?.userId;

  const { data, isLoading } = useGetSingleUserQuery(userId);
  const email = data?.data?.email;

  const [resendOTPVerification] = useResendOTPMutation();

  useEffect(() => {
    const expiresAt = otpData?.expiresAt;
    const currentDate = new Date();
    const expirationDate = new Date(expiresAt);

    const differenceInMilliseconds =
      Number(expirationDate) - Number(currentDate);
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    console.log(differenceInSeconds);

    setOTPTime(differenceInSeconds);
  }, [otpData]);

  useEffect(() => {
    if (OTPTime <= 0) return;

    const availableTime = setInterval(() => setOTPTime(OTPTime - 1), 1000);

    return () => clearInterval(availableTime);
  }, [OTPTime]);

  const handleResendOTP = async () => {
    const data = {
      userId,
      email,
    };

    try {
      const res = await resendOTPVerification(data).unwrap();

      if (res?.userId) {
        setCount(!count);
        toast.success(res?.message || "OTP Re-sended successfully!", {
          position: toast.TOP_RIGHT,
        });
      }
      if (!res?.success) {
        toast.error(res?.message || "Something Went wrong!", {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error?.message || "Something Went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="flex justify-between  mt-5 items-center">
      <button
        disabled
        className="bg-white text-gray-800 font-semibold py-2 px-5 min-w-20 rounded-md"
      >
        {OTPTime >= 0 ? OTPTime : 0}
      </button>
      <button
        disabled={OTPTime >= 0 && true}
        onClick={handleResendOTP}
        className="text-white rounded-md bg-[#3A57E8] py-2 px-4 font-semibold"
      >
        Resend OTP
      </button>
    </div>
  );
};

export default ResendOTP;
