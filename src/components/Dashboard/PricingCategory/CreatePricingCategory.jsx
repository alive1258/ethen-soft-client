"use client";

import Input from "@/components/UI/Forms/Input";
import { useCreatePricingCategoryMutation } from "@/redux/api/pricingCategory";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreatePricingCategory = () => {
  const router = useRouter();

  // define useForm from react-form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // for create pricing category
  const [createServiceFAQ, { isLoading }] = useCreatePricingCategoryMutation();

  // create pricing category function
  const onSubmit = async (data) => {
    try {
      const res = await createServiceFAQ(data).unwrap();
      if (res?.success) {
        reset();
        router.back();
        toast.success(
          res?.message || "Pricing Category created successfully!",
          {
            position: toast.TOP_RIGHT,
          }
        );
      } else {
        toast.error(res.message, {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="max-w-[1000px] bg-black-muted text-[#ADB5BD] mx-auto my-10 p-8 rounded-lg">
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">
        Create New Service FAQ
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/*  name */}
          <Input
            placeholder="Type Pricing Category Name"
            text="name"
            type="text"
            label="Name"
            register={register}
            errors={errors}
          />
        </div>

        <button
          disabled={isLoading}
          className="bg-info-base w-full rounded-md text-white font-semibold mt-10 py-3 px-5"
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default CreatePricingCategory;
