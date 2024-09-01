"use client";

import {
  useGetSingleOurDealsQuery,
  useUpdateOurDealsMutation,
} from "@/redux/api/ourDealsApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateOurDeals = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // <-- Import setValue to manually set form values
  } = useForm();

  const {
    data,
    isLoading: fetchLoading,
    error,
  } = useGetSingleOurDealsQuery(id);

  const [updateOurDeals, { isLoading }] = useUpdateOurDealsMutation();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setValue("title", data?.data?.title || ""); // Set initial name value
      setValue("image", data?.data?.image || ""); // Set initial image value
      setValue("deal", data?.data?.deal || ""); // Set initial image value
      setValue("description", data?.data?.description || ""); // Set initial image value
      setValue("color_code", data?.data?.color_code || ""); // Set initial image value
    }
  }, [data, setValue]);

  const onSubmit = async (data) => {
    try {
      const res = await updateOurDeals({
        id,
        data,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success("OurDeals updated successfully!", {
          position: toast.TOP_RIGHT,
        });
      } else {
        toast.error(res.message, {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error?.message || "An error occurred", {
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
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">Update OurDeals</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for OurDealtitlesname */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">Our Deals title *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your OurDeals title"
              {...register("title", {
                required: "OurDeals title is required",
              })}
            />
            {errors.title && (
              <span className="text-red-600 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Image */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Image *</span>
              <input
                {...register("image", {
                  required: "Image is required",
                })}
                rows={2}
                placeholder=" Image"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.image && (
                <span className="text-red-600 text-sm">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>
          {/* deal */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">deal *</span>
              <input
                {...register("deal", {
                  required: "deal is required",
                })}
                rows={2}
                placeholder=" deal"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.deal && (
                <span className="text-red-600 text-sm">
                  {errors.deal.message}
                </span>
              )}
            </div>
          </div>
          {/* description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">description *</span>
              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                rows={2}
                placeholder=" description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.description && (
                <span className="text-red-600 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
          {/* color_code */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">color_code *</span>
              <input
                {...register("color_code", {
                  required: "color_code is required",
                })}
                placeholder=" color_code"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.color_code && (
                <span className="text-red-600 text-sm">
                  {errors.color_code.message}
                </span>
              )}
            </div>
          </div>
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

export default UpdateOurDeals;
