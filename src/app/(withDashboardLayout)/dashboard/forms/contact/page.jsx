"use client";

import { useForm } from "react-hook-form";
import Input from "../../../../../components/UI/Forms/Input";
import Textarea from "../../../../../components/UI/Forms/Textarea";
import SubmitButton from "../../../../../components/UI/Button/SubmitButton";

const ContactFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="w-[556px] mx-auto bg-black-muted rounded-lg p-6 mt-12">
        <p className="text-white border-0 border-b border-b-[#828282] pb-4">
          Contact Form
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex items-center gap-8">
            <Input
              placeholder="Enter your first name"
              text="firstName"
              label="First Name"
            />
            <Input
              placeholder="Enter your last name"
              text="lastName"
              label="Last Name"
            />
          </div>
          <Input
            placeholder="Enter your email name"
            text="email"
            type="email"
            label="Email"
          />
          <Input
            placeholder="Enter your subject"
            text="subject"
            label="Subject"
          />
          <Textarea label="Message" text="message" />

          <SubmitButton text="Send Message" />
        </form>
      </div>
    </>
  );
};

export default ContactFormPage;
