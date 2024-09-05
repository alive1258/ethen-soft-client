"use client";

import SubmitButton from "@/components/UI/Button/SubmitButton";
import Input from "@/components/UI/Forms/Input";
import {
  useGetSingleUserQuery,
  useVerifyOTPMutation,
} from "@/redux/api/userApi";
import { removeOTPInfo } from "@/redux/features/otp/otpSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ResendOTP from "./ResendOTP";

const OTP = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { otpData } = useSelector((state) => state?.otpData);

  const { data: userData } = useGetSingleUserQuery(otpData?.userId);
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
        toast.success(res?.message || "Singed is successful!", {
          position: toast.TOP_RIGHT,
        });

        router.push("/dashboard/forms/login");
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
    <div className="bg-black-solid h-lvh w-lvw grid place-items-center">
      <div className="w-[556px] mx-auto bg-black-muted rounded-lg px-6 py-12">
        <p className="text-white border-0 border-b border-b-[#828282] pb-4">
          Verify OTP
        </p>
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

export default OTP;
