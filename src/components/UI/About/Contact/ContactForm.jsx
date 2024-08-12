"use client";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-black-base font-medium"> Name </label>
          <input
            className="px-2 py-4 border border-[#BDBDBD] rounded focus:border-primary-base focus:outline-none"
            placeholder="Enter your name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black-base font-medium"> Subject </label>
          <input
            className="px-2 py-4 border border-[#BDBDBD] rounded focus:border-primary-base focus:outline-none"
            placeholder="Enter your subject"
            {...register("subject")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 my-4">
        <label className="text-black-base font-medium"> E-mail </label>
        <input
          className="px-2 py-4 border border-[#BDBDBD] rounded focus:border-primary-base focus:outline-none"
          placeholder="Enter your Email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black-base font-medium"> Message </label>
        <textarea
          className="h-[170px] px-2 py-4 border border-[#BDBDBD] rounded focus:border-primary-base focus:outline-none"
          placeholder="Type your massage"
          {...register("massage")}
        />
      </div>

      <input
        className="mt-10 text-primary-base border border-primary-base font-normal px-4 py-2 rounded cursor-pointer bg-white hover:bg-primary-base hover:text-white duration-200"
        value="Join Now"
        type="submit"
      />
    </form>
  );
};

export default ContactForm;
