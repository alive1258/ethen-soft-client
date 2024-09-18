"use client";

import {
  useDeleteOurProductsMutation,
  useGetSingleOurProductQuery,
} from "@/redux/api/ourProductApi";
import {
  useGetSingleTeamsQuery,
  useUpdateTeamsMutation,
} from "@/redux/api/teamsApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateOurTeam = ({ id }) => {
  console.log(id);
  const {
    register,
    handleSubmit,
    formState: { errors },

    setValue,
  } = useForm();

  const { data, isLoading: fetchLoading, error } = useGetSingleTeamsQuery(id);

  const [updateTeams, { isLoading }] = useUpdateTeamsMutation();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setValue("name", data?.data?.name || "");
      setValue("position", data?.data?.position || "");
      setValue("email", data?.data?.email || "");
      setValue("linked_in_url", data?.data?.linked_in_url || "");
      setValue("image", data?.data?.image || "");
    }
  }, [data, setValue]);

  const onSubmit = async (data) => {
    try {
      const res = await updateTeams({
        id,
        data,
      }).unwrap();

      if (res?.success === true) {
        router.back();
        toast.success("Teams updated successfully!", {
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

  if (fetchLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[1000px] bg-black-muted text-[#ADB5BD] mx-auto my-10 p-8 rounded-lg">
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">Update Team</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          {/* Input for Home About  title */}
          <div className="relative w-full">
            <span className="text-[16px] py-2 block">t Name *</span>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary-base disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              type="text"
              placeholder="Please enter your name"
              {...register("name", {
                required: "name is required",
              })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* position */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">position *</span>
              <textarea
                {...register("position", {
                  required: "position is required",
                })}
                rows={2}
                placeholder=" position"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.position && (
                <span className="text-red-600 text-sm">
                  {errors.position.message}
                </span>
              )}
            </div>
          </div>
          {/* email */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">email *</span>
              <textarea
                {...register("email", {
                  required: "email is required",
                })}
                rows={2}
                placeholder=" email"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
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
              <span className="text-[16px] py-2 block">linked_in_url *</span>
              <textarea
                {...register("linked_in_url", {
                  required: "linked_in_url is required",
                })}
                rows={2}
                placeholder=" linked_in_url"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></textarea>
              {errors.linked_in_url && (
                <span className="text-red-600 text-sm">
                  {errors.linked_in_url.message}
                </span>
              )}
            </div>
          </div>
          {/* image */}
          <div className="pt-3">
            <div>
              <span className="text-[16px] py-2 block">image *</span>
              <input
                {...register("image", {
                  required: "image is required",
                })}
                rows={2}
                placeholder=" image"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
              ></input>
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
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateOurTeam;
