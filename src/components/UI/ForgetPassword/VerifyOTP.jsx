"use client";

import SubmitButton from "@/components/UI/Button/SubmitButton";
import Input from "@/components/UI/Forms/Input";
import {
  useGetSingleUserQuery,
  useVerifyOTPMutation,
} from "@/redux/api/userApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ResendOTP from "../CustomerOTP/ResendCustomerOTP";
import { toast } from "react-toastify";
import { removeOTPInfo } from "@/redux/features/otp/otpSlice";
import { storeUserInfo } from "@/services/auth.services";
import Cookies from "js-cookie";

const VerifyOTP = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { otpData } = useSelector((state) => state?.otpData);
  const userId = otpData?.userId;

  const { data: userData } = useGetSingleUserQuery(userId, {
    skip: !userId,
  });
  const role = userData?.data?.role;

  const [verifyOTP] = useVerifyOTPMutation();

  const onSubmit = async (data) => {
    try {
      data["userId"] = otpData?.userId;
      data["role"] = role;
      data.otp.trim();
      const res = await verifyOTP(data).unwrap();
      if (res?.success) {
        reset();
        dispatch(removeOTPInfo());

        // set refresh token in cookies
        Cookies.set(REFRESH_TOKEN_KEY, res?.data?.refreshToken, {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });

        // set access token in local storage
        storeUserInfo(res?.data?.accessToken);
        toast.success(res?.message || "Singed is successful!", {
          position: toast.TOP_RIGHT,
        });
        router.push("/reset-password");
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
    <div className="text-white bg-[#0a0b31] h-lvh w-lvw grid place-items-center">
      <div className="w-[556px] mx-auto bg-[#122352]  relative  px-6 py-12 rounded-xl overflow-hidden shadow-xl">
        <div className="absolute  top-0 left-0 w-full h-[4px] bg-gradient-to-r from-violet-600  to-[#e4365e]"></div>
        <p className="border-0 border-b border-b-[#828282] pb-4">Verify OTP</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Enter your OTP"
            text="otp"
            type="text"
            label="OTP"
            register={register}
            errors={errors}
          />
          <SubmitButton text="Verify OTP" />
        </form>
        <ResendOTP />
      </div>
    </div>
  );
};

export default VerifyOTP;
