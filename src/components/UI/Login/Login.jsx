"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import Input from "@/components/UI/Forms/Input";
import SubmitButton from "@/components/UI/Button/SubmitButton";
import { useLoginMutation } from "@/redux/api/authApi";
import { toast } from "react-toastify";
import { storeUserInfo } from "@/services/auth.services";

const Login = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.success) {
        reset();

        storeUserInfo(res?.data?.accessToken);
        toast.success(res?.message || "Singed is successful!", {
          position: toast.TOP_RIGHT,
        });
        closeModal();
      }

      if (!res?.success) {
        toast.error(res?.message || "Something Went wrong!", {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error?.data || "Something Went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="text-start  grid place-items-center">
      <div className="md:w-[556px]  mx-auto rounded-lg p-4 md:px-6 md:py-12">
        <div className="absolute  top-0 left-0 w-full h-[4px] bg-gradient-to-r from-violet-600  to-[#e4365e]"></div>
        <p className="font-semibold border-0 border-b border-b-[#828282] pb-4">
          Login Form
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Enter your email"
            text="email"
            type="email"
            label="Email"
            register={register}
            errors={errors}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            text="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <div className="flex items-center justify-between mt-6 mb-2 px-[1px]">
            <div className="flex items-center gap-2">
              <input className="text-2xl size-4" type="checkbox" />
              <span className="text-white text-sm font-light">Remember me</span>
            </div>
            <Link
              className="text-sm text-[#3A57E8] font-light"
              href="/forget-password"
            >
              Forget password?
            </Link>
          </div>
          <SubmitButton text="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
