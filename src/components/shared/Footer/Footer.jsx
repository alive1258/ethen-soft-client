import Link from "next/link";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import logo from "../../../../public/assets/images/Logo-white.png";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black-base">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[55px]">
            <div>
              <Image src={logo} width={181} height={48} alt="logo" />
              <p className="text-sm text-primary-muted pt-6 pb-6">
                Sed ut perspiciatis unde omnis is natus error site voluptatem
                more accntium doloremque laudatium totam rem aperiam, eaque ipsa
                quae abventore veritatis.
              </p>
              <h5 className="text-[#E9E9EA] pb-4">Follow Us</h5>
              <div className="flex items-center gap-4">
                <FaFacebook className="social-icons" />
                <FaFacebook className="social-icons" />
                <FaFacebook className="social-icons" />
                <FaFacebook className="social-icons" />
              </div>
            </div>

            <div>
              <h1 className="text-primary-muted text-lg font-semibold pb-4">
                Our Services
              </h1>
              <ul className="space-y-2 text-primary-muted list-disc list-inside marker:text-primary-muted">
                <li>
                  <Link href="/"> Web Development</Link>
                </li>
                <li>
                  <Link href="/">Graphics Design</Link>
                </li>
                <li>
                  <Link href="/">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/">Video Editing</Link>
                </li>
                <li>
                  <Link href="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/">IT Solutions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-primary-muted text-lg font-semibold pb-4">
                Quick Links
              </h1>
              <ul className="space-y-2 text-primary-muted list-disc list-inside marker:text-primary-muted">
                <li>
                  <Link href="/"> Web Development</Link>
                </li>
                <li>
                  <Link href="/">Graphics Design</Link>
                </li>
                <li>
                  <Link href="/">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/">Video Editing</Link>
                </li>
                <li>
                  <Link href="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/">IT Solutions</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary-muted text-lg font-semibold pb-4 text-nowrap">
                Feel Free to Contact Us! Say Hello
              </h1>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="bg-[#E9E9EA] w-[50px] h-[49px] p-2 rounded-full text-primary-base" />
                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">Address</h6>
                    <p className="text-sm">Bahir Gala, Sirajganj, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="bg-[#E9E9EA] w-[50px] h-[49px] p-2 rounded-full text-primary-base" />
                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">Address</h6>
                    <p className="text-sm">Bahir Gala, Sirajganj, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="bg-[#E9E9EA] w-[50px] h-[49px] p-2 rounded-full text-primary-base" />
                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">Address</h6>
                    <p className="text-sm">Bahir Gala, Sirajganj, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
