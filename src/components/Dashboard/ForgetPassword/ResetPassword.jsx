"use client";

import SubmitButton from "@/components/UI/Button/SubmitButton";
import Input from "@/components/UI/Forms/Input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const dispatch = useDispatch();
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

  //   const [createUser] = useCreateUserMutation();

  const onSubmit = async (data) => {
    // try {
    //   const res = await createUser(user).unwrap();
    //   if (res?.success) {
    //     reset();
    //     console.log(res?.data);
    //     await dispatch(sotreOTPInfo(res?.data));
    //     toast.success(res?.message || "Sing up is successful!", {
    //       position: toast.TOP_RIGHT,
    //     });
    //     router.push("/dashboard/forms/otp");
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
    <div className="bg-black-solid h-lvh w-svw grid place-items-center">
      <div className="md:w-[600px] max-w-[650px] mx-auto bg-black-muted rounded-lg p-6">
        <p className="text-white border-0 border-b border-b-[#828282] pb-4">
          Sign Up Form
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
