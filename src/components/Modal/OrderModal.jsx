import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import SelectForm from "../UI/Forms/SelectForm";
import Input from "../UI/Forms/Input";
import { useForm } from "react-hook-form";
import Textarea from "../UI/Forms/Textarea";
import { useCreatePaymentMutation } from "@/redux/api/paymentsApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const OrderModal = ({
  closeModal,
  title,
  price,
  pricingCategory,
  serviceId,
  pricingId,
  userId,
}) => {
  const router = useRouter();
  // define useForm from react-form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // get the create function
  const [createPayment] = useCreatePaymentMutation();

  // create faq function
  const onSubmit = async (data) => {
    data.totalAmount = price;
    data.serviceId = serviceId;
    data.pricingId = pricingId;
    data.userId = userId;

    console.log(data);
    try {
      const res = await createPayment(data).unwrap();
      console.log(res);
      if (res?.success) {
        reset();
        router.replace(res?.data);
        toast.success(res?.message || "Payment successful!", {
          position: toast.TOP_RIGHT,
        });
      } else {
        toast.error(res.message, {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data || "Something went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };
  return (
    <div className=" mx-6 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="rounded-xl relative bg-white w-fit">
        <IoCloseCircleOutline
          onClick={closeModal}
          className="absolute right-2 top-2 cursor-pointer"
          size={32}
        />
        {/* main body  */}
        <div className="p-2 rounded-md flex">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4 space-y-3 mt-4"
            >
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Country */}
                  <Input
                    placeholder="Country Name"
                    text="country"
                    type="text"
                    label="Country"
                    register={register}
                    errors={errors}
                  />

                  {/* City */}
                  <Input
                    placeholder="City"
                    text="city"
                    type="text"
                    label="City"
                    register={register}
                    errors={errors}
                  />
                </div>

                {/* Address  */}
                <Textarea
                  placeholder="Address"
                  text="address"
                  type="text"
                  label="Address"
                  register={register}
                  errors={errors}
                />

                {/* Currency */}
                <SelectForm
                  label="Currency"
                  text="currency"
                  register={register}
                  errors={errors}
                >
                  <option value="BDT">BDT</option>
                  <option value="USD">USD</option>
                </SelectForm>
              </div>
              <div>
                <div className="my-2 p-2 rounded-md border-[1px] bg-gray-100">
                  <h3 className="text-xl font-bold">
                    Service Name:
                    <span className="text-primary-base">{title}</span>
                  </h3>
                  <h3 className="text-lg font-semibold">
                    Service Category:
                    <span className="text-primary-base">
                      {pricingCategory?.name}
                    </span>
                  </h3>
                  <h3 className="text-xl font-bold">
                    Price: <span className="text-info-base">${price}</span>
                  </h3>
                </div>
                {/* <button
                disabled={isLoading}
                className="bg-info-base w-full rounded-md text-white font-semibold mt-10 py-3 px-5"
                type="submit"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button> */}
                <button
                  type="submit"
                  className="bg-primary-base w-full rounded-md text-white font-semibold mt-10 py-3 px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
