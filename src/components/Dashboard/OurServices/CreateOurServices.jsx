"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextEditor from "@/components/TextEditor/TextEditor";
import { useCreateOurServicesMutation } from "@/redux/api/ourServiceApi";

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

  const router = useRouter();
  const watchProductName = watch("title");

  useEffect(() => {
    if (watchProductName) {
      setSlug(watchProductName.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
    }
  }, [watchProductName]);

  const onSubmit = async (data) => {
    console.log({ ...data, slug, content });
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
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">Title *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Service Title"
              {...register("title", {
                required: "Our Services title is required",
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
            <span className="text-[16px] py-2"> Slug *</span>
            <input
              value={slug}
              onChange={(e) => handleSlugChange(e)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary mt-1"
              type="text"
              placeholder="Slug"
              required={true}
            />
          </div>

          {/* description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">Description *</span>
              <TextEditor content={content} setContent={setContent} />
            </div>
          </div>
          {/* sub description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Sub Description *</span>
              <textarea
                {...register("subDescription", {
                  required: "Sub Description required.",
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

          {/* logo */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Logo *</span>
              <input
                {...register("logo", {
                  required: "Logo required!",
                  pattern: {
                    value: /\.(jpg|jpeg|png|gif|svg)$/i,
                    message:
                      "Logo must be a valid image URL (.jpg, .jpeg, .png, .gif, .svg)",
                  },
                })}
                placeholder="Service Logo"
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
              <span className="text-[16px] py-2 block"> Color Code *</span>
              <input
                {...register("colorCode", {
                  required: "Color code is required !",
                })}
                placeholder="Color code"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.colorCode && (
                <span className="text-red-600 text-sm">
                  {errors.colorCode.message}
                </span>
              )}
            </div>
          </div>
          {/* meta_key */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Meta Key *</span>
              <input
                {...register("metaKey", {
                  required: "Meta Key is required!",
                })}
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
          {/* meta_description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">
                {" "}
                Meta Description *
              </span>
              <textarea
                {...register("metaDescription", {
                  required: "Meta Description is required!",
                })}
                rows={2}
                placeholder="Meta Description"
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
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateOurServices;
