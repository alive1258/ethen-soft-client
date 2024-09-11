import Link from "next/link";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import ethenSoftLogo from "../../../../public/assets/images/about/ethensoftlogo.svg";
import FooterOurService from "./FooterOurService";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-black-base">
        <div className="footer-container py-8 md:pt-14 bg-no-repeat">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="flex items-center  space-x-2">
                  <Image
                    className="md:size-14 size-9"
                    src={ethenSoftLogo}
                    height={28}
                    width={151}
                    alt="logo"
                  />
                  <h3 className="md:text-xl text-lg font-semibold text-[#fff]">
                    Ethen Soft
                  </h3>
                </div>
              </Link>

              <p className="text-sm text-primary-muted pt-6 pb-6">
                Sed ut perspiciatis unde omnis is natus error site voluptatem
                more accntium doloremque laudatium totam rem aperiam, eaque ipsa
                quae abventore veritatis.
              </p>
              <h5 className="text-[#E9E9EA] pb-4">Follow Us</h5>
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

            <div className="md:pl-7">
              <div>
                <h1 className="text-primary-muted text-lg font-semibold pb-4">
                  Popular Links
                </h1>
                <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/our-work">Our Work</Link>
                  </li>
                  <li>
                    <Link href="/clients">Clients</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* aService  */}
            <div className=" ">
              <div>
                <h1 className="text-primary-muted text-lg font-semibold pb-4">
                  Our Services
                </h1>
                <FooterOurService />
              </div>
            </div>

            <div>
              <h1 className="text-primary-muted text-lg font-semibold pb-4 text-nowrap">
                Contact Us
              </h1>
              <div className="space-y-4">
                <div className="">
                  <div className="text-primary-muted text-[16px] space-y-1 gap-1.5">
                    <p> Notun Vngbari,</p>
                    <p> Plastic factory beside building,</p>
                    <p>Ground floor, Ma Sufiya Moholo,</p>
                    <p>Sirajganj-6770, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="bg-[#E9E9EA] size-9 p-2 rounded-full text-primary-base" />
                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">+880 1793-636735</h6>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineMail className="bg-[#E9E9EA] size-9 p-2 rounded-full text-primary-base" />
                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">support@ethensoft.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Footer;
