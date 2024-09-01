"use client";

import { useCreateAboutHeroMutation } from "@/redux/api/aboutHerosApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateAboutHero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createAboutHero, { isLoading }] = useCreateAboutHeroMutation();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await createAboutHero({ ...data }).unwrap();
      if (res?.success === true) {
        reset();
        router.back();
        toast.success("About Hero added successfully!", {
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

  return (
    <div className="max-w-[1000px] bg-black-muted text-[#ADB5BD] mx-auto my-10 p-8 rounded-lg">
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">
        Create New About Hero
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for About Hero title */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">About Hero title *</span>
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

          {/* description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Description *</span>
              <textarea
                {...register("description")}
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

          {/* Image */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Image *</span>
              <input
                {...register("image")}
                placeholder="Image"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.image && (
                <span className="text-red-600 text-sm">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>
          {/* service_one */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_one *</span>
              <input
                {...register("service_one")}
                placeholder="service_one"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_one && (
                <span className="text-red-600 text-sm">
                  {errors.service_one.message}
                </span>
              )}
            </div>
          </div>
          {/* service_two */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_two *</span>
              <input
                {...register("service_two")}
                placeholder="service_two"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_two && (
                <span className="text-red-600 text-sm">
                  {errors.service_two.message}
                </span>
              )}
            </div>
          </div>
          {/* service_three */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_three *</span>
              <input
                {...register("service_three")}
                placeholder="service_three"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_three && (
                <span className="text-red-600 text-sm">
                  {errors.service_three.message}
                </span>
              )}
            </div>
          </div>
          {/* service_four */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_four *</span>
              <input
                {...register("service_four")}
                placeholder="service_four"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
              {errors.service_four && (
                <span className="text-red-600 text-sm">
                  {errors.service_four.message}
                </span>
              )}
            </div>
          </div>
          {/* Service Five (Optional) */}
          <div className="pt-3">
            <span className="text-[16px] py-2 block">
              Service Five (Optional)
            </span>
            <input
              {...register("service_five")}
              placeholder="Enter Service Five"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
            />
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

export default CreateAboutHero;
