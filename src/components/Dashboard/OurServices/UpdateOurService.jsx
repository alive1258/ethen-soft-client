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

  const service = data?.data;
  console.log(service);

  const [updateOurServices, { isLoading }] = useUpdateOurServicesMutation();

  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const watchTitle = watch("title");
  const serviceId = service?._id;

  useEffect(() => {
    if (service) {
      setValue("title", service?.title || "");
      setValue("subDescription", service?.subDescription || "");
      setValue("logo", service?.logo || "");
      setValue("colorCode", service?.colorCode || "");
      setValue("metaKey", service?.metaKey || "");
      setValue("metaDescription", service?.metaDescription || "");
      setSlug(service?.slug || "");
      setContent(service?.description || "");
    }
  }, [service, setValue, setContent, setSlug]);

  useEffect(() => {
    if (watchTitle) {
      setSlug(watchTitle.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchTitle]);

  const onSubmit = async (data) => {
    try {
      data["slug"] = slug;
      data["description"] = content;
      const res = await updateOurServices({
        id: serviceId,
        data,
      }).unwrap();

      if (res?.success) {
        router.back();
        toast.success(res?.message || "Our Service updated successfully!", {
          position: toast.TOP_RIGHT,
        });
      } else {
        toast.error(res.message, {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "An error occurred", {
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
              placeholder="Title"
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
              <span className="text-[16px] py-2 block">Sub Description *</span>
              <textarea
                {...register("subDescription", {
                  required: "Sub description is required",
                })}
                rows={2}
                placeholder="Sub Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.subDescription && (
                <span className="text-red-600 text-sm">
                  {errors.subDescription.message}
                </span>
              )}
            </div>
          </div>
          {/* Logo */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Logo *</span>
              <input
                {...register("logo", {
                  required: "Logo is required",
                })}
                rows={2}
                placeholder=" Logo"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.logo && (
                <span className="text-red-600 text-sm">
                  {errors.logo.message}
                </span>
              )}
            </div>
          </div>
          {/* color code */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Color Code *</span>
              <input
                {...register("colorCode", {
                  required: "Color code is required",
                })}
                rows={2}
                placeholder="Color Code"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.colorCode && (
                <span className="text-red-600 text-sm">
                  {errors.colorCode.message}
                </span>
              )}
            </div>
          </div>
          {/* meta key */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Meta Key *</span>
              <input
                {...register("metaKey")}
                rows={2}
                placeholder="Meta Key"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.metaKey && (
                <span className="text-red-600 text-sm">
                  {errors.metaKey.message}
                </span>
              )}
            </div>
          </div>
          {/* meta description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Meta Description *</span>
              <textarea
                {...register("metaDescription")}
                rows={2}
                placeholder="metaDescription"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.metaDescription && (
                <span className="text-red-600 text-sm">
                  {errors.metaDescription.message}
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
