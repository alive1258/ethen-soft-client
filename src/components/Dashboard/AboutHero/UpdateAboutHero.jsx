"use client";

import {
  useGetSingleAboutHeroQuery,
  useUpdateAboutHeroMutation,
} from "@/redux/api/aboutHerosApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateAboutHero = ({ id }) => {
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
  } = useGetSingleAboutHeroQuery(id);

  const [updateAboutHero, { isLoading }] = useUpdateAboutHeroMutation();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setValue("title", data?.data?.title || "");
      setValue("description", data?.data?.description || "");
      setValue("service_one", data?.data?.service_one || "");
      setValue("service_two", data?.data?.service_two || "");
      setValue("service_three", data?.data?.service_three || "");
      setValue("service_four", data?.data?.service_four || "");
      setValue("service_five", data?.data?.service_five || "");
      setValue("image", data?.data?.image || "");
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    try {
      const res = await updateAboutHero({
        id,
        data: formData,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success("About Hero updated successfully!", {
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
        Update About Hero
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for About Hero title */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">About Hero title *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your About Hero title"
              {...register("title", {
                required: "About Hero title is required",
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
                placeholder="Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.description && (
                <span className="text-red-600 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Image *</span>
              <input
                {...register("image", {
                  required: "Image is required",
                })}
                placeholder="Image"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.image && (
                <span className="text-red-600 text-sm">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>

          {/* Service One */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Service One *</span>
              <input
                {...register("service_one", {
                  required: "Service One is required",
                })}
                placeholder="Service One"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_one && (
                <span className="text-red-600 text-sm">
                  {errors.service_one.message}
                </span>
              )}
            </div>
          </div>

          {/* Service Two */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Service Two *</span>
              <input
                {...register("service_two", {
                  required: "Service Two is required",
                })}
                placeholder="Service Two"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_two && (
                <span className="text-red-600 text-sm">
                  {errors.service_two.message}
                </span>
              )}
            </div>
          </div>

          {/* Service Three */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Service Three *</span>
              <input
                {...register("service_three", {
                  required: "Service Three is required",
                })}
                placeholder="Service Three"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_three && (
                <span className="text-red-600 text-sm">
                  {errors.service_three.message}
                </span>
              )}
            </div>
          </div>

          {/* Service Four */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Service Four *</span>
              <input
                {...register("service_four", {
                  required: "Service Four is required",
                })}
                placeholder="Service Four"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_four && (
                <span className="text-red-600 text-sm">
                  {errors.service_four.message}
                </span>
              )}
            </div>
          </div>

          {/* Service Five (Optional) */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Service Five</span>
              <input
                {...register("service_five")}
                placeholder="Service Five"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
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

export default UpdateAboutHero;
