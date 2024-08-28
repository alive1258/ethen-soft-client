"use client";

import {
  useGetSingleHeroDescriptionQuery,
  useUpdateHeroDescriptionMutation,
} from "@/redux/api/heroDescriptionApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateHeroDescription = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue, // <-- Import setValue to manually set form values
  } = useForm();

  const {
    data,
    isLoading: fetchLoading,
    error,
  } = useGetSingleHeroDescriptionQuery(id);
  console.log(data);
  const [updateHeroDescription, { isLoading }] =
    useUpdateHeroDescriptionMutation();

  const [slug, setSlug] = useState("");

  const router = useRouter();
  const watchTitle = watch("title");

  useEffect(() => {
    if (data) {
      setValue("title", data?.data?.title || ""); // Set initial title value
      setValue("description", data?.data?.description || ""); // Set initial description value
      setSlug(data?.data?.slug || ""); // Set initial slug value
    }
  }, [data, setValue]);

  useEffect(() => {
    if (watchTitle) {
      setSlug(watchTitle.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchTitle]);

  const onSubmit = async (data) => {
    try {
      const res = await updateHeroDescription({
        id,
        data,
        slug,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success("Hero Description updated successfully!", {
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

  const handleSlugChange = (e) => {
    const value = e.target.value;
    setSlug(value.toLowerCase().replace(/[^a-z0-9-]/g, ""));
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
        Update Hero Description
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for Hero Description title */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">
              Hero Description title *
            </span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your Hero Description title"
              {...register("title", {
                required: "Hero Description title is required",
              })}
            />
            {errors.title && (
              <span className="text-red-600 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Slug */}
          <div className="mt-2">
            <span className="text-[16px] py-2">Hero Description Slug *</span>
            <input
              value={slug}
              onChange={handleSlugChange}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary mt-1"
              type="text"
              placeholder="Slug"
              required={true}
            />
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

export default UpdateHeroDescription;
