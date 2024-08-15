"use client";

import SubmitButton from "@/components/UI/Button/SubmitButton";
import Input from "@/components/UI/Forms/Input";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-[556px] mx-auto bg-black-muted rounded-lg p-6 my-12">
      <p className="text-white border-0 border-b border-b-[#828282] pb-4">
        Sign Up Form
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
        <Input
          placeholder="Enter your password"
          text="password"
          type="password"
          label="Password"
          register={register}
        />
        <SubmitButton text="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
