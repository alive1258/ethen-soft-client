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
import { storeUserInfo } from "@/services/auth.services";
import ResendCustomerOTP from "./ResendCustomerOTP";

const CustomerOTP = ({ redirectPath, closeModal }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { otpData } = useSelector((state) => state?.otpData);

  const [verifyOTP] = useVerifyOTPMutation();

  const onSubmit = async (data) => {
    try {
      data["userId"] = otpData?.userId;
      data.otp.trim();

      const res = await verifyOTP(data).unwrap();

      if (res?.success) {
        reset();
        dispatch(removeOTPInfo());
        await storeUserInfo(res?.data?.accessToken);
        toast.success(res?.message || "Singed is successful!", {
          position: toast.TOP_RIGHT,
        });
        if (closeModal) {
          closeModal();
        }

        if (redirectPath) {
          router.push(`${redirectPath}`);
        }
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
    <div className="grid place-items-center">
      <div className="w-[556px] mx-auto rounded-lg px-6 py-12">
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
        <ResendCustomerOTP />
      </div>
    </div>
  );
};

export default CustomerOTP;
