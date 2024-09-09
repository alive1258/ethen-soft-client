"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Input from "@/components/UI/Forms/Input";
import SubmitButton from "@/components/UI/Button/SubmitButton";
import { useLoginMutation } from "@/redux/api/authApi";
import { setToLocalStorage } from "@/hooks/local-storage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //   const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    // try {
    //   const res = await login(data).unwrap();
    //   if (res?.success) {
    //     reset();
    //     await setToLocalStorage("accessToken", res?.data?.accessToken);
    //     toast.success(res?.message || "Singed is successful!", {
    //       position: toast.TOP_RIGHT,
    //     });
    //     router.push("/dashboard/admin");
    //   }
    //   if (!res?.success) {
    //     toast.error(res?.message || "Something Went wrong!", {
    //       position: toast.TOP_RIGHT,
    //     });
    //   }
    // } catch (error) {
    //   toast.error(error?.data || "Something Went wrong!", {
    //     position: toast.TOP_RIGHT,
    //   });
    // }
  };

  return (
    <div className="bg-black-solid h-lvh w-lvw grid place-items-center">
      <div className="w-[556px] mx-auto bg-black-muted rounded-lg px-6 py-12">
        <p className="text-white border-0 border-b border-b-[#828282] pb-4">
          Forget Password?
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

          <SubmitButton text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
