"use client";

import SubmitButton from "@/components/UI/Button/SubmitButton";
import Input from "@/components/UI/Forms/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-[556px] mx-auto bg-black-muted rounded-lg p-6 my-12">
      <p className="text-white border-0 border-b border-b-[#828282] pb-4">
        Sign In Form
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Enter your name"
          text="name"
          label="Name"
          register={register}
        />
        <Input
          placeholder="Enter your email"
          text="email"
          type="email"
          label="Email"
          register={register}
        />
        <div className="flex items-center justify-between mt-6 mb-2 px-[1px]">
          <div className="flex items-center gap-2">
            <input className="text-2xl size-4" type="checkbox" />
            <span className="text-white text-sm font-light">Remember me </span>
          </div>
          <Link className="text-sm text-[#3A57E8] font-light" href="/">
            Forget password?
          </Link>
        </div>
        <SubmitButton text="Sign Up" />
      </form>
    </div>
  );
};

export default Login;
