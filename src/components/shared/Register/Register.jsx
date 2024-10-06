import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { registerModalToggle } from "@/redux/features/toggleSlice";

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="my-12 mx-auto bg-[#ffffff] flex flex-col md:flex-row gap-16 w-full md:w-[834px] h-auto rounded-lg p-6">
        <div className="hidden md:block">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkovC9a5Je29Pg-DaKoC5fPi8s2JAdD5wNqx1esDO7uEv4r9LFFAl1Xu-IZKZYBRMqBz4&usqp=CAU"
            height={256}
            width={256}
            alt="register page"
          />
          <h1 className="font-semibold text-lg text-black-base mt-6 mb-4">
            Register to easily checkout your product
          </h1>
          <span className="text-black-base text-sm">
            Poonno will receive your order and be able to reply to you once you
            place an order and ask for help.
          </span>
        </div>
        <div className="w-full">
          <div className="flex justify-end">
            <IoCloseOutline
              onClick={() => dispatch(registerModalToggle())}
              className="size-6 text-danger-base cursor-pointer"
            />
          </div>
          <h1 className="text-2xl text-center md:text-start font-semibold text-black-base pb-4">
            Registration
          </h1>
          <span className="text-sm font-medium text-black-base">
            Register to make an order.
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3 mt-2"
          >
            <div className="flex flex-col gap-2 mb-1">
              <label className="text-sm font-medium text-black-base">
                Phone Number <sup className="text-secondary-base">*</sup>
              </label>
              <input
                type="text"
                className="border border-primary-base rounded-lg p-3 text-black-muted text-xs font-medium"
                placeholder="+880"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+8801|8801|01)[3-9]\d{8}$/,
                    message: "Invalid phone number",
                  },
                })}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              {errors.phoneNumber && (
                <span className="text-red-600 text-sm">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            <button
              className="bg-primary-base w-full rounded-md text-white font-semibold py-3 px-5"
              type="submit"
            >
              Register
            </button>
          </form>

          {/* Already have an account */}
          <div className="text-black-base flex items-center space-x-2 pt-2">
            <p>You already have an account</p>
            <div>
              <span
                // onClick={() => dispatch(handleLoginModal())} // Assuming login modal trigger
                className="text-primary-base underline cursor-pointer"
              >
                Login
              </span>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="text-sm text-primary-base mt-6">
            <span className="text-black-muted">
              By continuing you agree to our{" "}
            </span>
            <span className="underline">Terms & Conditions, Privacy</span>{" "}
            Policy & Refund-Return Policy
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
