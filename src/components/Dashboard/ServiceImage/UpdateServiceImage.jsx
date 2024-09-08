"use client";

import TextEditor from "@/components/TextEditor/TextEditor";
import Input from "@/components/UI/Forms/Input";
import Textarea from "@/components/UI/Forms/Textarea";
import {
  useGetSingleServiceCategoryQuery,
  useUpdateServiceCategoryMutation,
} from "@/redux/api/serviceCategoryApi";
import {
  useGetSingleServiceImageQuery,
  useUpdateServiceImageMutation,
} from "@/redux/api/serviceImageApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateServiceImage = ({ id }) => {
  // logo url pattern check
  const imagePattern = {
    value: /\.(jpg|jpeg|png|gif|svg)$/i,
    message: "Logo must be a valid image URL (.jpg, .jpeg, .png, .gif, .svg)",
  };

  // require useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // fetched the specific data for update.
  const {
    data,
    isLoading: fetchLoading,
    error,
  } = useGetSingleServiceImageQuery(id);

  console.log(data);
  // defined data as data name
  const serviceImage = data?.data;
  const serviceImageId = serviceImage?._id;

  // updated the data
  const [updateServiceCategory, { isLoading }] =
    useUpdateServiceImageMutation();

  //set slug and description
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const watchTitle = watch("title");

  //set default value
  useEffect(() => {
    if (serviceImage) {
      setValue("title", serviceImage?.title || "");
      setValue("image", serviceImage?.image || "");
    }
  }, [serviceImage, setValue, setContent, setSlug]);

  // update data submit function
  const onSubmit = async (data) => {
    try {
      const res = await updateServiceCategory({
        id: serviceImageId,
        data,
      }).unwrap();

      // show success message
      if (res?.success) {
        router.back();
        toast.success(res?.message || "Image updated successfully!", {
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
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">
        Update Service Category
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* title */}
          <Input
            placeholder="Service Title"
            text="title"
            type="text"
            label="Title"
            register={register}
            errors={errors}
          />
          {/* image */}
          <Input
            placeholder="Service Image URL"
            text="image"
            type="text"
            label="Image"
            register={register}
            errors={errors}
            pattern={imagePattern}
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

export default UpdateServiceImage;
