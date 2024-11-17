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

const SignUp = () => {
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
      console.log(res);
      if (res?.success) {
        reset();
        await dispatch(sotreOTPInfo(res?.data));
        toast.success(res?.message || "Sing up is successful!", {
          position: toast.TOP_RIGHT,
        });

        router.push("/otp");
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
    <div className="text-white ">
      <div className="max-w-[650px] mx-auto bg-black-muted rounded-lg p-6">
        <p className="border-0 border-b border-b-[#828282] pb-4">
          Sign Up Form
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-3">
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
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SelectForm
              label="Select your gender"
              text="gender"
              register={register}
              errors={errors}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"others"}>Others</option>
            </SelectForm>

            <Input
              placeholder="ContactNo."
              text="contactNo"
              type="number"
              label="Contact Number"
              register={register}
              errors={errors}
            />
          </div>
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
          <SubmitButton text="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
