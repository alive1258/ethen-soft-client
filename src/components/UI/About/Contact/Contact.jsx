import { useForm } from "react-hook-form";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

// conatct
const Contact = () => {
  return (
    <>
      <div className="container py-10">
        <SectionTitle
          subTitle="Contact"
          title="Contact Us For Any Questions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
        />
        <div className="mt-[60px] flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
          <div className="w-full">
            <h1 className="text-black-base text-2xl font-semibold pb-10 text-nowrap">
              Contact Info :
            </h1>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CiLocationOn className="bg-[#E9E9EA] size-12 p-2 rounded-full text-primary-base" />
                <div className="text-black-base flex flex-col gap-1.5">
                  <h6 className="font-medium">Address</h6>

                  <p>Sirajganj-6770, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="bg-[#E9E9EA] size-12 p-2 rounded-full text-primary-base" />
                <div className=" flex flex-col gap-1.5">
                  <h6 className="font-medium">+880 1793-636735</h6>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineMail className="bg-[#E9E9EA] size-12 p-2 rounded-full text-primary-base" />
                <div className=" flex flex-col gap-1.5">
                  <h6 className="font-medium">support@ethensoft.com</h6>
                </div>
              </div>
            </div>
            <h5 className="text-black-base text-sm font-semibold pb-4 pt-10">
              Follow Us
            </h5>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61562726343346"
                target="_blank"
              >
                <BsFacebook className="social-icons hover:bg-[#3b5998] text-[#3b5998]" />
              </a>
              <a
                href="https://www.linkedin.com/company/ethen-soft/about/?viewAsMember=true"
                target="_blank"
              >
                <FaLinkedin className="social-icons hover:bg-[#0A66C2] text-[#0A66C2]" />
              </a>
              <a
                href="https://x.com/EthenSoft?fbclid=IwZXh0bgNhZW0CMTAAAR0t8rfRbeXgm5_8S060kghWEk_PHGc7UWKmQ67ECQsZkEJVw55xt2h5tgU_aem_MYkBOm5VjCMXThOKu09RLA"
                target="_blank"
              >
                <FaXTwitter className="social-icons hover:bg-[#14171A] text-[#14171A]" />
              </a>
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
