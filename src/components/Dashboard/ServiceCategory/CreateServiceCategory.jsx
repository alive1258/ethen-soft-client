"use client";

import Input from "@/components/UI/Forms/Input";
import SelectForm from "@/components/UI/Forms/SelectForm";
import Textarea from "@/components/UI/Forms/Textarea";
import { useGetAllOurServicesQuery } from "@/redux/api/ourServiceApi";
import { useCreateServiceCategoryMutation } from "@/redux/api/serviceCategoryApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateServiceCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const { data } = useGetAllOurServicesQuery();
  const services = data?.data?.data;

  const [createServiceCategory, { isLoading }] =
    useCreateServiceCategoryMutation();

  const [slug, setSlug] = useState("");

  // logo url pattern check
  const logoPattern = {
    value: /\.(jpg|jpeg|png|gif|svg)$/i,
    message: "Logo must be a valid image URL (.jpg, .jpeg, .png, .gif, .svg)",
  };

  const router = useRouter();
  const watchProductName = watch("title");

  useEffect(() => {
    if (watchProductName) {
      setSlug(watchProductName.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchProductName]);

  const onSubmit = async (data) => {
    try {
      const res = await createServiceCategory({
        ...data,
        slug,
      }).unwrap();
      if (res?.success) {
        reset();
        router.back();
        toast.success(res?.message || "Category added successfully!", {
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

  return (
    <div className="max-w-[1000px] bg-black-muted text-[#ADB5BD] mx-auto my-10 p-8 rounded-lg">
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">
        Create New Service Category
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* service  */}
          <SelectForm
            label="Select Service"
            text="service"
            register={register}
            errors={errors}
          >
            {services ? (
              services?.map((item, index) => (
                <option key={index} value={item?._id}>
                  {item?.title}
                </option>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </SelectForm>

          {/*  title */}
          <Input
            placeholder="Category Title"
            text="title"
            type="text"
            label="Title"
            register={register}
            errors={errors}
          />

          {/* Slug */}
          <Input
            placeholder="Category Slug"
            text="slug"
            type="text"
            label="Slug"
            onChange={handleSlugChange}
            register={register}
            errors={errors}
            value={slug}
          />

          {/* sub description */}

          <Textarea
            placeholder="Category Sub Description"
            text="subDescription"
            type="text"
            label="Sub Description"
            register={register}
            errors={errors}
          />
          {/* logo */}
          <Input
            placeholder="Category Logo"
            text="logo"
            type="text"
            label="Logo"
            register={register}
            errors={errors}
            pattern={logoPattern}
          />
          {/* meta key */}
          <Input
            placeholder="Category Meta Key"
            text="metaKey"
            type="text"
            label="Meta Key"
            register={register}
            errors={errors}
          />

          {/* meta description */}
          <Textarea
            placeholder="Category Meta Description"
            text="metaDescription"
            type="text"
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
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default CreateServiceCategory;
