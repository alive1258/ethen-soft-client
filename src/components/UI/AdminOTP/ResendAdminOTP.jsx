import { useResendOTPMutation } from "@/redux/api/userApi";
import { sotreOTPInfo } from "@/redux/features/otp/otpSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ResendAdminOTP = () => {
  const dispatch = useDispatch();
  const [OTPTime, setOTPTime] = useState(59);
  const [count, setCount] = useState(false);

  const { otpData } = useSelector((state) => state?.otpData);

  const userId = otpData?.userId;
  const email = otpData?.email;

  const [resendOTPVerification] = useResendOTPMutation();

  useEffect(() => {
    const expiresAt = otpData?.expiresAt;
    const currentDate = new Date();
    const expirationDate = new Date(expiresAt);

    const differenceInMilliseconds =
      Number(expirationDate) - Number(currentDate);
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

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

      if (res?.success) {
        setCount(!count);
        setOTPTime(59);
        dispatch(sotreOTPInfo(res?.data));
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
        className="bg-white border border-primary-muted text-gray-800 font-semibold py-2 px-5 min-w-20 rounded-md"
      >
        {OTPTime >= 0 ? OTPTime : 0}
      </button>
      <button
        disabled={OTPTime > 0 && true}
        onClick={handleResendOTP}
        className="text-white rounded-md bg-warning-base py-2 px-4 font-semibold"
      >
        Resend OTP
      </button>
    </div>
  );
};

export default ResendAdminOTP;
