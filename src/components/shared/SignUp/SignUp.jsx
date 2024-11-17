"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/UI/Forms/Input";
import SubmitButton from "@/components/UI/Button/SubmitButton";
import SelectForm from "@/components/UI/Forms/SelectForm";
import { toast } from "react-toastify";
import { getFromLocalStorage } from "@/hooks/local-storage";
import { useRouter } from "next/navigation";
import { sotreOTPInfo } from "@/redux/features/otp/otpSlice";
import { useDispatch } from "react-redux";
import { useCreateCustomerMutation } from "@/redux/api/customerApi";

const SignUp = ({ isSignUp }) => {
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

  const userId = getFromLocalStorage("userId");
  if (userId) {
    router.push("/otp");
  }

  const [createCustomer] = useCreateCustomerMutation();

  const onSubmit = async (data) => {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      gender,
      contactNo,
    } = data;
    
    const user = {
      name: { firstName, middleName, lastName },
      email,
      password,
      gender,
      contactNo,
      role: process.env.CUSTOMER_ROLE,
    };

    try {
      const res = await createCustomer(user).unwrap();

      if (res?.success) {
        reset();
        await dispatch(sotreOTPInfo(res?.data));
        toast.success(res?.message || "Sing up is successful!", {
          position: toast.TOP_RIGHT,
        });
        if (isSignUp) {
          isSignUp();
        }
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
    <div className="text-black-base text-start md:w-[800px]">
      <div className="w-full mx-auto rounded-lg p-2 md:p-6">
        <p className="border-0 border-b border-b-[#828282] pb-4">
          Sign Up Form
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              text="firstName"
              label="First Name"
              register={register}
              errors={errors}
            />
            <Input
              placeholder="Middle Name"
              text="middleName"
              label="Middle Name"
              required={false}
              errors={errors}
            />
            <Input
              placeholder="Last Name"
              text="lastName"
              label="Last Name"
              register={register}
              errors={errors}
            />{" "}
            <Input
              placeholder="ContactNo."
              text="contactNo"
              type="text"
              label="Contact Number"
              register={register}
              errors={errors}
            />
            <SelectForm
              label="Gender"
              text="gender"
              register={register}
              errors={errors}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"others"}>Others</option>
            </SelectForm>
            <Input
              placeholder="Enter your email"
              text="email"
              type="email"
              label="Email"
              register={register}
              errors={errors}
            />
            <Input
              placeholder="Enter your password"
              text="password"
              type="password"
              label="Password"
              register={register}
              pattern={pattern}
              errors={errors}
            />
            <Input
              placeholder="Enter your confirm password"
              text="confirmPassword"
              type="password"
              label="Confirm Password"
              register={register}
              pattern={pattern}
              errors={errors}
              validate={(value) =>
                value === watch("password") || "Passwords do not match"
              }
            />
          </div>

          <SubmitButton text="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
