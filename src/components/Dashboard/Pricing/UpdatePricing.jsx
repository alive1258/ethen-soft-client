"use client";

import Input from "@/components/UI/Forms/Input";
import SelectForm from "@/components/UI/Forms/SelectForm";
import Textarea from "@/components/UI/Forms/Textarea";
import { useGetAllOurServicesQuery } from "@/redux/api/ourServiceApi";
import {
  useGetSinglePricingQuery,
  useUpdatePricingMutation,
} from "@/redux/api/pricingApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdatePricing = ({ id }) => {
  // require useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // fetched the specific data for update.
  const { data, isLoading: fetchLoading, error } = useGetSinglePricingQuery(id);

  // defined data as data name
  const pricing = data?.data;
  const pricingId = pricing?._id;

  // updated the data
  const [updatePricing, { isLoading }] = useUpdatePricingMutation();

  const router = useRouter();

  //set default value
  useEffect(() => {
    if (pricing) {
      setValue("title", pricing?.title || "");
      setValue("price", pricing?.price || "");
    }
  }, [pricing, setValue]);

  // update data submit function
  const onSubmit = async (data) => {
    try {
      const res = await updatePricing({
        id: pricingId,
        data,
      }).unwrap();

      // show success message
      if (res?.success) {
        router.back();
        toast.success(res?.message || "Pricing updated successfully!", {
          position: toast.TOP_RIGHT,
        });
      } else {
        // show error message
        toast.error(res.message, {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      // show error message
      toast.error(error?.message || "Something went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };

  if (fetchLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[1000px] bg-black-muted text-[#ADB5BD] mx-auto my-10 p-8 rounded-lg">
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">Update Pricing</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Title */}
          <Input
            placeholder="Pricing Title"
            text="title"
            type="text"
            label="Title"
            register={register}
            errors={errors}
          />
          {/* price */}
          <Input
            placeholder="Pricing Price"
            text="price"
            type="text"
            label="Price"
            register={register}
            errors={errors}
          />
        </div>

        <button
          disabled={isLoading}
          className="bg-info-base w-full rounded-md text-white font-semibold mt-10 py-3 px-5"
          type="submit"
        >
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePricing;
