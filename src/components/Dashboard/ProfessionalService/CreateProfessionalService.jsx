"use client";

import { useCreateProfessionalServicesMutation } from "@/redux/api/professionalServicesApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateProfessionalService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createProfessionalServices, { isLoading }] =
    useCreateProfessionalServicesMutation();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await createProfessionalServices({ ...data }).unwrap();

      if (res?.success === true) {
        reset();
        router.back();
        toast.success("ProfessionalServices added successfully!", {
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
        Create New ProfessionalServices
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for ProfessionalServices name */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block"> title *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter  title"
              {...register("title", {
                required: "title name is required",
              })}
            />
            {errors.title && (
              <span className="text-red-600 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* service_one */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_one *</span>
              <input
                type="text"
                {...register("service_one", {
                  required: "service_one is required",
                })}
                placeholder="service_one"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.service_one && (
                <span className="text-red-600 text-sm">
                  {errors.service_one.message}
                </span>
              )}
            </div>
          </div>
          {/* service_tow */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_tow *</span>
              <input
                type="text"
                {...register("service_tow", {
                  required: "service_tow is required",
                })}
                placeholder="service_tow"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.service_tow && (
                <span className="text-red-600 text-sm">
                  {errors.service_tow.message}
                </span>
              )}
            </div>
          </div>
          {/* service_three */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> service_three *</span>
              <input
                type="text"
                {...register("service_three", {
                  required: "service_three is required",
                })}
                placeholder="service_three"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
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
                type="text"
                {...register("service_four", {
                  required: "service_four is required",
                })}
                placeholder="service_four"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.service_four && (
                <span className="text-red-600 text-sm">
                  {errors.service_four.message}
                </span>
              )}
            </div>
          </div>
          {/* color_code */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> color_code *</span>
              <input
                type="text"
                {...register("color_code", {
                  required: "color_code is required",
                })}
                placeholder="color_code"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.color_code && (
                <span className="text-red-600 text-sm">
                  {errors.color_code.message}
                </span>
              )}
            </div>
          </div>

          {/* description */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Description *</span>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={2}
                placeholder="Description"
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
                type="text"
                {...register("image", {
                  required: "Image is required",
                })}
                placeholder="Image URL"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.image && (
                <span className="text-red-600 text-sm">
                  {errors.image.message}
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

export default CreateProfessionalService;
