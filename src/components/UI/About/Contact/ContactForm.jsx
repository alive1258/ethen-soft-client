"use client";
import { useCreateContactUsMutation } from "@/redux/api/contactUsApi";
import { useForm } from "react-hook-form";
import Input from "../../Forms/Input";
import Textarea from "../../Forms/Textarea";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createContactUs] = useCreateContactUsMutation();

  const onSubmit = async (data) => {
    try {
      const res = await createContactUs(data).unwrap();

      if (res?.success) {
        reset();
        toast.success(res?.message || "Successfully Sended Message!", {
          position: toast.TOP_RIGHT,
        });
      }
      if (!res?.success) {
        toast.error(res?.message || "Something Went wrong!", {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error?.data || "Something Went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex items-center gap-6 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col gap-2">
            <Input
              placeholder="Enter Your Name"
              text="name"
              label="Name"
              type="text"
              errors={errors}
              register={register}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Input
              placeholder="Enter Your Subject"
              text="subject"
              label="Subject"
              type="text"
              errors={errors}
              register={register}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            placeholder="Enter Your Email"
            text="email"
            label="Email"
            type="email"
            errors={errors}
            register={register}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Textarea
            placeholder="Type Your Message"
            text="message"
            type="text"
            label="Message"
            register={register}
            errors={errors}
          />
        </div>
        <div className="my-6 text-center">
          <button
            type="submit"
            className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[16px] font-medium  rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white   focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
