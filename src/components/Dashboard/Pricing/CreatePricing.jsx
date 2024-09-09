"use client";

import Input from "@/components/UI/Forms/Input";
import SelectForm from "@/components/UI/Forms/SelectForm";
import Textarea from "@/components/UI/Forms/Textarea";
import { useGetAllOurServicesQuery } from "@/redux/api/ourServiceApi";
import { useCreatePricingMutation } from "@/redux/api/pricingApi";
import { useGetAllPricingCategoriesQuery } from "@/redux/api/pricingCategory";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreatePricing = () => {
  const router = useRouter();

  // define useForm from react-form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // fetched all services
  const { data: serviceData } = useGetAllOurServicesQuery();

  // define services
  const services = serviceData?.data?.data;

  //fetched all pricing categories
  const { data: pricingCategoryData } = useGetAllPricingCategoriesQuery();

  // define pricing categories
  const pricingCategories = pricingCategoryData?.data;

  // for create faq service
  const [createPricing, { isLoading }] = useCreatePricingMutation();

  // create faq function
  const onSubmit = async (data) => {
    try {
      const res = await createPricing(data).unwrap();
      if (res?.success) {
        reset();
        router.back();
        toast.success(res?.message || "Pricing created successfully!", {
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
        Create New Pricing
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
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
            </SelectForm>{" "}
            {/* pricing categories  */}
            <SelectForm
              label="Select Pricing Categories"
              text="pricingCategory"
              register={register}
              errors={errors}
            >
              {pricingCategories ? (
                pricingCategories?.map((item, index) => (
                  <option key={index} value={item?._id}>
                    {item?.name}
                  </option>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </SelectForm>
          </div>

          {/*  question */}
          <Input
            placeholder="Pricing Title"
            text="title"
            type="text"
            label="Title"
            register={register}
            errors={errors}
          />

          {/* answer */}
          <Input
            placeholder="Price"
            text="price"
            type="text"
            label="Price"
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
export default CreatePricing;
