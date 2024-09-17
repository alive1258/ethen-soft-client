"use client";

import { useCreateTeamsMutation } from "@/redux/api/teamsApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateOurTeam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [creteTeam, { isLoading }] = useCreateTeamsMutation();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await creteTeam({
        ...data,
      }).unwrap();

      if (res?.success === true) {
        reset();
        router.back();
        toast.success("Team added successfully!", {
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
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">Create New Team</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for title name */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block"> name *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter  name"
              {...register("name", {
                required: "name name is required",
              })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* email */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> email *</span>
              <input
                type="text"
                {...register("email", {
                  required: "email is required",
                })}
                placeholder="email "
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* linked_in_url */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> linked_in_url *</span>
              <input
                type="text"
                {...register("linked_in_url", {
                  required: "linked_in_url is required",
                })}
                placeholder="linked_in_url "
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.linked_in_url && (
                <span className="text-red-600 text-sm">
                  {errors.linked_in_url.message}
                </span>
              )}
            </div>
          </div>

          {/* position */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block"> position *</span>
              <input
                type="text"
                {...register("position", {
                  required: "position is required",
                })}
                placeholder="position "
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              />
              {errors.position && (
                <span className="text-red-600 text-sm">
                  {errors.position.message}
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

export default CreateOurTeam;
