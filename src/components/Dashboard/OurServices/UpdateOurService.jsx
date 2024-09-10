"use client";

import TextEditor from "@/components/TextEditor/TextEditor";
import Input from "@/components/UI/Forms/Input";
import Textarea from "@/components/UI/Forms/Textarea";

import {
  useGetSingleOurServiceQuery,
  useUpdateOurServicesMutation,
} from "@/redux/api/ourServiceApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateOurService = ({ id }) => {
  // logo url pattern check
  const logoPattern = {
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
  } = useGetSingleOurServiceQuery(id);

  // defined data as data name
  const service = data?.data;
  const serviceId = service?._id;

  // updated the data
  const [updateOurServices, { isLoading }] = useUpdateOurServicesMutation();

  //set slug and description
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const watchTitle = watch("title");

  //set default value
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


  // converting title
  useEffect(() => {
    if (watchTitle) {
      setSlug(watchTitle.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchTitle]);

  // update data submit function
  const onSubmit = async (data) => {
    try {
      data["slug"] = slug;
      data["description"] = content;
      const res = await updateOurServices({
        id: serviceId,
        data,

      }).unwrap();

      // show success message
      if (res?.success) {
        router.back();

        toast.success(res?.message || "Our Service updated successfully!", {
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
      toast.error(error?.message || "An error occurred", {
        position: toast.TOP_RIGHT,
      });
    }
  };

  //converting slug
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
            register={register}
            errors={errors}
            value={slug}
          />

          {/* Description */}
          <div className="pt-3">
            <span className="text-[16px] py-2 block">Description *</span>
            <TextEditor content={content} setContent={setContent} />
          </div>
          {/* sub description */}
          <div className="pt-3">
            <Textarea
              placeholder="Service Sub Description"
              text="subDescription"
              type="text"
              label="Sub Description"
              register={register}
              errors={errors}
            />
          </div>
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
          {/* color code */}
          <Input
            placeholder="Service Color Code"
            text="colorCode"
            type="text"
            label="Color Code"
            register={register}
            errors={errors}
          />
          {/* meta key */}
          <Input
            placeholder="Service Meta Key"
            text="metaKey"
            type="text"
            label="Meta Key"
            register={register}
            errors={errors}
          />
          {/* meta description */}
          <Textarea
            placeholder="Service Meta Description"
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
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateOurService;
