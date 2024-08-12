import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <>
      <div className="container py-10">
        <SectionTitle
          subTitle="Contact"
          title="Contact Us For Any Questions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
        />
        <div className="mt-[60px] flex items-center justify-between">
          <div className="w-full">
            <h1 className="text-black-base text-2xl font-semibold pb-10 text-nowrap">
              Contact Info :
            </h1>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CiLocationOn className="bg-[#E9E9EA] w-[50px] h-[49px] p-2 rounded-full text-primary-base" />
                <div className="text-black-base flex flex-col gap-1.5">
                  <h6 className="font-medium">Address</h6>
                  <p className="text-sm">Bahir Gala, Sirajganj, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="bg-[#E9E9EA] w-[50px] h-[49px] p-2 rounded-full text-primary-base" />
                <div className="text-black-base flex flex-col gap-1.5">
                  <h6 className="font-medium">Address</h6>
                  <p className="text-sm">Bahir Gala, Sirajganj, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="bg-[#E9E9EA] w-[50px] h-[49px] p-2 rounded-full text-primary-base" />
                <div className="text-black-base flex flex-col gap-1.5">
                  <h6 className="font-medium">Address</h6>
                  <p className="text-sm">Bahir Gala, Sirajganj, Bangladesh</p>
                </div>
              </div>
            </div>
            <h5 className="text-black-base text-sm font-semibold pb-4 pt-10">
              Follow Us
            </h5>
            <div className="flex items-center gap-4">
              <FaFacebook className="social-icons" />
              <FaFacebook className="social-icons" />
              <FaFacebook className="social-icons" />
              <FaFacebook className="social-icons" />
            </div>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
