"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Input from "@/components/UI/Forms/Input";
import SubmitButton from "@/components/UI/Button/SubmitButton";
import { useLoginMutation } from "@/redux/api/authApi";
import { setToLocalStorage } from "@/hooks/local-storage";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.success) {
        await setToLocalStorage("accessToken", res?.data?.accessToken);
        toast.success(res?.message || "Singed in successful!", {
          position: toast.TOP_RIGHT,
        });
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
    <div className="bg-black-solid h-lvh w-lvw grid place-items-center">
      <div className="w-[556px] mx-auto bg-black-muted rounded-lg px-6 py-12">
        <p className="text-white border-0 border-b border-b-[#828282] pb-4">
          Sign In Form
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
              <span className="text-white text-sm font-light">
                Remember me{" "}
              </span>
            </div>
            <Link className="text-sm text-[#3A57E8] font-light" href="/">
              Forget password?
            </Link>
          </div>
          <SubmitButton text="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Login;
