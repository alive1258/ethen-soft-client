"use client";

import TextEditor from "@/components/TextEditor/TextEditor";
import {
  useGetSingleBlogQuery,
  useUpdateBlogsMutation,
} from "@/redux/api/blogsApi";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateBlogs = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // <-- Import setValue to manually set form values
  } = useForm();

  const { data, isLoading: fetchLoading, error } = useGetSingleBlogQuery(id);

  const [updateBlogs, { isLoading }] = useUpdateBlogsMutation();
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setValue("title", data?.data?.title || ""); // Set initial name value
      setValue("image", data?.data?.image || ""); // Set initial image value
      setValue("subject", data?.data?.subject || "");
      setValue("sub_description", data?.data?.sub_description || "");
      setContent(data?.data?.description || "");
    }
  }, [data, setValue]);

  const onSubmit = async (data) => {
    try {
      const res = await updateBlogs({
        id,
        data,
        content,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success("Blogs updated successfully!", {
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
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">Update Blogs</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for Blogsname */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">Blogs title *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your Blogs title"
              {...register("title", {
                required: "Blogs title is required",
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
          {/* subject */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">subject *</span>
              <input
                {...register("subject", {
                  required: "subject is required",
                })}
                rows={2}
                placeholder=" subject"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.subject && (
                <span className="text-red-600 text-sm">
                  {errors.subject.message}
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
                placeholder=" sub_description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.sub_description && (
                <span className="text-red-600 text-sm">
                  {errors.sub_description.message}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="pt-3">
            <span className="text-[16px] py-2 block">Description *</span>
            <TextEditor content={content} setContent={setContent} />
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

export default UpdateBlogs;
