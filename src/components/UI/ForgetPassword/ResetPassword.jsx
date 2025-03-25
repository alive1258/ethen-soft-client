"use client";

import SubmitButton from "@/components/UI/Button/SubmitButton";
import Input from "@/components/UI/Forms/Input";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { getUserinfo, storeUserInfo } from "@/services/auth.services";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const router = useRouter();

  // for strong password
  const pattern = {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character",
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const accessToken = getUserinfo();

  if (!accessToken) {
    router.push("/login");
  }

  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async (data) => {
    try {
      const res = await resetPassword({
        newPassword: data?.password,
      }).unwrap();
      if (res?.success) {
        reset();

        // set refresh token in cookies
        Cookies.set(REFRESH_TOKEN_KEY, res?.data?.refreshToken, {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });

        // store access token in local storage
        storeUserInfo(res?.data?.accessToken);
        toast.success(res?.message || "Singed is successful!", {
          position: toast.TOP_RIGHT,
        });
        router.push("/");
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
      <div className="md:w-[600px] max-w-[650px] mx-auto bg-[#122352]  relative  px-6 py-12 rounded-xl overflow-hidden shadow-xl">
        <div className="absolute  top-0 left-0 w-full h-[4px] bg-gradient-to-r from-violet-600  to-[#e4365e]"></div>

        <p className="border-0 border-b border-b-[#828282] pb-4">
          Reset Your Password
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Input
              placeholder="Enter your new password"
              text="password"
              type="password"
              label="New Password"
              register={register}
              pattern={pattern}
              errors={errors}
            />
            <Input
              placeholder="Re-enter your confirm password"
              text="confirmPassword"
              type="password"
              label="Re-Enter"
              register={register}
              pattern={pattern}
              errors={errors}
              validate={(value) =>
                value === watch("password") || "Passwords do not match"
              }
            />
          </div>
          <SubmitButton text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
