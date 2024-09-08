"use client";

import Input from "@/components/UI/Forms/Input";
import SelectForm from "@/components/UI/Forms/SelectForm";
import { useGetAllOurServicesQuery } from "@/redux/api/ourServiceApi";
import { useCreateServiceFAQMutation } from "@/redux/api/serviceFAQApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateServiceFAQ = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const { data, error } = useGetAllOurServicesQuery();
  const services = data?.data?.data;
  const meta = data?.data?.meta;

  const [createServiceFAQ, { isLoading }] = useCreateServiceFAQMutation();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await createServiceFAQ(data).unwrap();
      if (res?.success) {
        reset();
        router.back();
        toast.success(res?.message || "Service FAQ added successfully!", {
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

  return (
    <div className="max-w-[1000px] bg-black-muted text-[#ADB5BD] mx-auto my-10 p-8 rounded-lg">
      <h1 className="text-[#ADB5BD] text-[23px] font-bold">
        Create New Service FAQ
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

          {/*  question */}
          <Input
            placeholder="Service FAQ Question"
            text="question"
            type="text"
            label="Question"
            register={register}
            errors={errors}
          />

          {/* answer */}
          <Input
            placeholder="Service FAQ Answer"
            text="answer"
            type="text"
            label="Answer"
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
export default CreateServiceFAQ;
