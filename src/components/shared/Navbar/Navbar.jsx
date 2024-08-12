import Image from "next/image";
import logo from "../../../../public/assets/images/Logo.png";
import Link from "next/link";
import NavItem from "./NavItem";
import Button from "@/components/UI/Button/Button";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 -translate-y-0 bg-[#ffffff] z-[500] shadow duration-300  transition-transform transform ">
        <div className="max-w-[1440px] w-full px-20 mx-auto h-[88px] flex items-center justify-between ">
          {/* logo */}
          <div>
            <Image src={logo} height={48} width={151} alt="logo" />
          </div>
          {/* menu  */}
          <div>
            <ul>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Home
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                About Us
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Services
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Products
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Our Work
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Clients
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Team
              </Link>
              <Link
                className="pl-10 text-sm font-normal hover:font-semibold hover:text-primary-base duration-300"
                href="/"
              >
                Career
              </Link>
              <Link className="pl-10" href="/">
                <Button content="Contact Us" />
              </Link>
            </ul>
          </div>
          {/* <NavItem /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
