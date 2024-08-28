import Link from "next/link";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import { FaFacebook } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import logo from "../../../../public/assets/images/Logo-white.png";
import shape from "../../../../public/assets/images/Shapes.png";
import mobileLogo from "../../../../public/assets/images/res-mob-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-black-base">
        <div className=" footer-container py-8 md:pt-14 bg-no-repeat">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[55px]">
            <div>
              <Image
                className="hidden md:block"
                src={logo}
                width={181}
                height={48}
                alt="logo"
              />
              <Image
                className="block md:hidden"
                src={mobileLogo}
                width={172}
                height={48}
                alt="logo"
              />
              <p className="text-sm text-primary-muted pt-6 pb-6 pr-20">
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

            {/* all link  */}
            <div className="block md:hidden col-span-2 flex items-center justify-between px-4 pr-10">
              <div>
                <h1 className="text-primary-muted text-lg font-semibold pb-4">
                  Our Services
                </h1>
                <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
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
                <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
                  <li className="border-none hover:border-b hover:border-b-white">
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
            </div>

            <div className="hidden md:block">
              <h1 className="text-primary-muted text-lg font-semibold pb-4">
                Our Services
              </h1>
              <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
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
            <div className="hidden md:block">
              <h1 className="text-primary-muted text-lg font-semibold pb-4">
                Quick Links
              </h1>
              <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
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
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Footer;
