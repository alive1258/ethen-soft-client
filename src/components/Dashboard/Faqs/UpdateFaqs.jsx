"use client";

import {
  useGetSingleHomeAboutQuery,
  useUpdateHomeAboutMutation,
} from "@/redux/api/homeAboutApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateHomeAbout = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },

    setValue,
  } = useForm();

  const {
    data,
    isLoading: fetchLoading,
    error,
  } = useGetSingleHomeAboutQuery(id);

  const [updateHomeAbout, { isLoading }] = useUpdateHomeAboutMutation();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setValue("title", data?.data?.title || "");
      setValue("description", data?.data?.description || "");
      setValue("sub_description", data?.data?.sub_description || "");
      setValue("image", data?.data?.image || "");
    }
  }, [data, setValue]);

  const onSubmit = async (data) => {
    try {
      const res = await updateHomeAbout({
        id,
        data,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success("Home About updated successfully!", {
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
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">
        Update Home About
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for Home About  title */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">Home About title *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your Home About  title"
              {...register("title", {
                required: "Home About  title is required",
              })}
            />
            {errors.title && (
              <span className="text-red-600 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Description *</span>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={2}
                placeholder="Sub Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.description && (
                <span className="text-red-600 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
          {/* sub_description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">sub_description *</span>
              <textarea
                {...register("sub_description", {
                  required: "sub_description is required",
                })}
                rows={2}
                placeholder="Sub Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.sub_description && (
                <span className="text-red-600 text-sm">
                  {errors.sub_description.message}
                </span>
              )}
            </div>
          </div>
          {/* image */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">image *</span>
              <input
                {...register("image", {
                  required: "image is required",
                })}
                rows={2}
                placeholder=" image"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.image && (
                <span className="text-red-600 text-sm">
                  {errors.image.message}
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

export default UpdateHomeAbout;
