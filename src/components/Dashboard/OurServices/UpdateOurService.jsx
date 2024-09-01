"use client";

import TextEditor from "@/components/TextEditor/TextEditor";

import {
  useGetSingleOurServiceQuery,
  useUpdateOurServicesMutation,
} from "@/redux/api/ourServiceApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateOurService = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const {
    data,

    isLoading: fetchLoading,
    error,
  } = useGetSingleOurServiceQuery(id);

  const [updateOurServices, { isLoading }] = useUpdateOurServicesMutation();

  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const watchTitle = watch("title");
  const serviceId = data?.data?._id;

  useEffect(() => {
    if (data) {
      setValue("title", data?.data?.title || "");
      setValue("sub_description", data?.data?.sub_description || "");
      setValue("image", data?.data?.image || "");
      setValue("icon", data?.data?.icon || "");
      setValue("color_code", data?.data?.color_code || "");
      setValue("meta_key", data?.data?.meta_key || "");
      setValue("meta_description", data?.data?.meta_description || "");
      setSlug(data?.data?.slug || "");
      setContent(data?.data?.description || "");
    }
  }, [data, setValue]);

  useEffect(() => {
    if (watchTitle) {
      setSlug(watchTitle.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchTitle]);

  const onSubmit = async (data) => {
    try {
      const res = await updateOurServices({
        data,
        id: serviceId,
        slug,
        content,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success(" Our Service updated successfully!", {
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
        Update Our Services
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
            <span className="text-[16px] py-2 block">Description *</span>
            <TextEditor content={content} setContent={setContent} />
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
                placeholder="sub_description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.sub_description && (
                <span className="text-red-600 text-sm">
                  {errors.sub_description.message}
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
          {/* icon */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">icon *</span>
              <input
                {...register("icon", {
                  required: "icon is required",
                })}
                rows={2}
                placeholder="icon"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.image && (
                <span className="text-red-600 text-sm">
                  {errors.image.message}
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
                rows={2}
                placeholder="color_code"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.color_code && (
                <span className="text-red-600 text-sm">
                  {errors.color_code.message}
                </span>
              )}
            </div>
          </div>
          {/* meta_key */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">meta_key *</span>
              <input
                {...register("meta_key")}
                rows={2}
                placeholder="meta_key"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.meta_key && (
                <span className="text-red-600 text-sm">
                  {errors.meta_key.message}
                </span>
              )}
            </div>
          </div>
          {/* meta_description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">meta_description *</span>
              <textarea
                {...register("meta_description")}
                rows={2}
                placeholder="meta_description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.meta_description && (
                <span className="text-red-600 text-sm">
                  {errors.meta_description.message}
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

export default UpdateOurService;
