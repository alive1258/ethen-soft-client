"use client";

import SelectForm from "@/components/UI/Forms/SelectForm";
import { useCreateFeatureAssignedToPricingMutation } from "@/redux/api/featureAssignedToPricingApi";
import { useGetAllPricingQuery } from "@/redux/api/pricingApi";
import { useGetAllPricingFeaturesQuery } from "@/redux/api/pricingFeatureApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateAssignedPricingFeature = () => {
  const router = useRouter();

  // define useForm from react-form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // fetched all pricing
  const { data: pricingData } = useGetAllPricingQuery();

  // define pricing
  const pricing = pricingData?.data;

  //fetched all pricing features
  const { data: pricingFeatureData } = useGetAllPricingFeaturesQuery();

  // define pricing features
  const pricingFeatures = pricingFeatureData?.data?.data;

  // for add pricing feature to pricing
  const [createFeatureAssignedToPricing, { isLoading }] =
    useCreateFeatureAssignedToPricingMutation();

  // create assigned pricing feature function
  const onSubmit = async (data) => {
    try {
      const res = await createFeatureAssignedToPricing(data).unwrap();
      if (res?.success) {
        reset();
        router.back();
        toast.success(res?.message || "Featured added successfully!", {
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
        Add Pricing Feature to Pricing
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* service  */}
          <SelectForm
            label="Select Pricing"
            text="pricing"
            register={register}
            errors={errors}
          >
            {pricing ? (
              pricing?.map((item, index) => (
                <option key={index} value={item?._id}>
                  {item?.title}
                </option>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </SelectForm>
          {/* pricing categories  */}
          <SelectForm
            label="Select Pricing Feature"
            text="pricingFeature"
            register={register}
            errors={errors}
          >
            {pricingFeatures ? (
              pricingFeatures?.map((item, index) => (
                <option key={index} value={item?._id}>
                  {item?.name}
                </option>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </SelectForm>
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
export default CreateAssignedPricingFeature;
