"use client";

import Input from "@/components/UI/Forms/Input";
import Textarea from "@/components/UI/Forms/Textarea";
import {
  useGetSingleServiceCategoryQuery,
  useUpdateServiceCategoryMutation,
} from "@/redux/api/serviceCategoryApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateServiceCategory = ({ id }) => {
  // logo url pattern check
  const logoPattern = {
    value: /\.(jpg|jpeg|png|gif|svg)$/i,
    message: "Logo must be a valid image URL (.jpg, .jpeg, .png, .gif, .svg)",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // fetched the specific data for update
  const {
    data,
    isLoading: fetchLoading,
    error,
  } = useGetSingleServiceCategoryQuery(id);

  const category = data?.data;
  const categoryId = category?._id;

  // updated the data
  const [updateServiceCategory, { isLoading }] =
    useUpdateServiceCategoryMutation();

  // Slug state
  const [slug, setSlug] = useState("");

  const router = useRouter();
  const watchTitle = watch("title");

  // Set default form values and slug state
  useEffect(() => {
    if (category) {
      setValue("title", category?.title || "");
      setValue("logo", category?.logo || "");
      setValue("subDescription", category?.subDescription || "");
      setValue("metaKey", category?.metaKey || "");
      setValue("metaDescription", category?.metaDescription || "");
      setSlug(category?.slug || "");
    }
  }, [category, setValue]);

  // Watch title changes to update slug dynamically
  useEffect(() => {
    if (watchTitle) {
      setSlug(watchTitle.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchTitle]);

  // Update data submission function
  const onSubmit = async (data) => {
    try {
      // Ensure that slug is added to the form data before submission
      setValue("slug", slug);
      data["slug"] = slug; // Pass slug to form data

      const res = await updateServiceCategory({
        id: categoryId,
        data,
      }).unwrap();

      if (res?.success) {
        router.back();
        toast.success(res?.message || "Category updated successfully!", {
          position: toast.TOP_RIGHT,
        });
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

  // Handle manual slug change
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
        Update Service Category
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Service Title */}
          <Input
            placeholder="Service Title"
            text="title"
            type="text"
            label="Title"
            register={register}
            errors={errors}
          />

          {/* Slug */}
          <Input
            placeholder="Service Slug"
            text="slug"
            type="text"
            label="Slug"
            onChange={handleSlugChange}
            value={slug}
            required={false}
            errors={errors}
          />

          {/* Sub Description */}
          <Textarea
            placeholder="Service Sub Description"
            text="subDescription"
            label="Sub Description"
            register={register}
            errors={errors}
          />

          {/* Logo */}
          <Input
            placeholder="Service Logo URL"
            text="logo"
            type="text"
            label="Logo"
            register={register}
            errors={errors}
            pattern={logoPattern}
          />

          {/* Meta Key */}
          <Input
            placeholder="Service Meta Key"
            text="metaKey"
            type="text"
            label="Meta Key"
            register={register}
            errors={errors}
          />

          {/* Meta Description */}
          <Textarea
            placeholder="Service Meta Description"
            text="metaDescription"
            label="Meta Description"
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

export default UpdateServiceCategory;
