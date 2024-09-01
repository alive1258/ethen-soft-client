"use client";

import { useCreateTestimonialsMutation } from "@/redux/api/testimonialApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateTestimonial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createTestimonials, { isLoading }] = useCreateTestimonialsMutation();

  const router = useRouter();

  const onSubmit = async (data) => {
    data.rating = Number(data.rating);
    try {
      const res = await createTestimonials({ ...data }).unwrap();

      if (res?.success === true) {
        reset();
        router.back();
        toast.success("Testimonials added successfully!", {
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
        Create New Testimonials
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for Testimonials name */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block"> name *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your name"
              {...register("name", {
                required: "Testimonials name is required",
              })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* profession */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Profession *</span>
              <input
                type="text"
                {...register("profession", {
                  required: "Profession is required",
                })}
                placeholder="Profession"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.profession && (
                <span className="text-red-600 text-sm">
                  {errors.profession.message}
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

          {/* rating */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> Rating *</span>
              <input
                type="number"
                {...register("rating", {
                  required: "Rating is required",
                  min: { value: 1, message: "Minimum rating is 1" },
                  max: { value: 5, message: "Maximum rating is 5" },
                  valueAsNumber: true,
                })}
                placeholder="Rating (1-5)"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.rating && (
                <span className="text-red-600 text-sm">
                  {errors.rating.message}
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

export default CreateTestimonial;
