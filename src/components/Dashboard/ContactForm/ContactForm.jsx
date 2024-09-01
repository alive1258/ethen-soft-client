import { useForm } from "react-hook-form";
import Input from "@/components/UI/Forms/Input";
import Textarea from "@/components/UI/Forms/Textarea";
import SubmitButton from "@/components/UI/Button/SubmitButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Submit the form data to your API or server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-[556px] mx-auto bg-black-muted rounded-lg p-6 my-12">
        <p className="text-white border-0 border-b border-b-[#828282] pb-4">
          Contact Form
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex items-center gap-8">
            <Input
              placeholder="Enter your first name"
              text="firstName"
              label="First Name"
              register={register("firstName", { required: true })}
              error={errors.firstName}
            />
            <Input
              placeholder="Enter your last name"
              text="lastName"
              label="Last Name"
              register={register("lastName", { required: true })}
              error={errors.lastName}
            />
          </div>
          <Input
            placeholder="Enter your email"
            text="email"
            type="email"
            label="Email"
            register={register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            error={errors.email}
          />
          <Input
            placeholder="Enter your subject"
            text="subject"
            label="Subject"
            register={register("subject", { required: true })}
            error={errors.subject}
          />
          <Textarea
            register={register("message", { required: true })}
            text="message"
            label="Message"
            error={errors.message}
          />
          <SubmitButton text="Send Message" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
