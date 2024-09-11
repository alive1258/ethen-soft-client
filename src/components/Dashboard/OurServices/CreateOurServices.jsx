"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextEditor from "@/components/TextEditor/TextEditor";
import { useCreateOurServicesMutation } from "@/redux/api/ourServiceApi";
import Input from "@/components/UI/Forms/Input";
import Textarea from "@/components/UI/Forms/Textarea";

const CreateOurServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [createOurServices, { isLoading }] = useCreateOurServicesMutation();
  const [content, setContent] = useState("");
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
      const res = await createOurServices({
        ...data,
        slug,
        description: content,
      }).unwrap();
      if (res?.success === true) {
        reset();
        router.back();
        toast.success(res?.message || "Our Services added successfully!", {
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
        Create New Our Services
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for Our Services title */}
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

          {/* description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Description *</span>
              <TextEditor content={content} setContent={setContent} />
            </div>
          </div>
          {/* sub description */}
          <Textarea
            placeholder="Service Sub Description"
            text="subDescription"
            type="text"
            label="Sub Description"
            register={register}
            errors={errors}
          />

          {/* logo */}
          <Input
            placeholder="Service Logo"
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
          {/* meta_key */}
          <Input
            placeholder="Service Meta Key"
            text="metaKey"
            type="text"
            label="Meta Key"
            register={register}
            errors={errors}
          />

          {/* meta_description */}
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
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateOurServices;
