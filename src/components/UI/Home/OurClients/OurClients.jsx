import Image from "next/image";
import clientImage from "../../../../../public/assets/images/Alaska Air Group, Inc..png";
import icon2 from "../../../../../public/assets/images/Frame9.png";
import ButtonOutline from "../../Button/ButtonOutline";
const OurClients = () => {
  return (
    <>
      <div className="relative max-w-[1440px] mx-auto bg-no-repeat bg-none md:bg-[url('/assets/images/stars.png')]">
        <div className="container py-10">
          <h1 className="text-center text-primary-base text-2xl md:text-[40px] font-semibold">
            OurClients
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-28 mt-10 md:mt-14 mb-12 px-4">
            <Image
              src={clientImage}
              width={114}
              height={49}
              alt="client image"
            />
            <Image
              src={clientImage}
              width={114}
              height={49}
              alt="client image"
            />
            <Image
              src={clientImage}
              width={114}
              height={49}
              alt="client image"
            />
            <Image
              src={clientImage}
              width={114}
              height={49}
              alt="client image"
            />
            <Image
              src={clientImage}
              width={114}
              height={49}
              alt="client image"
            />
            <Image
              src={clientImage}
              width={114}
              height={49}
              alt="client image"
            />
          </div>
          <ButtonOutline className="hidden md:block" content="More Clients" />
        </div>
        <Image
          className="hidden md:block absolute bottom-0 right-16"
          src={icon2}
          width={100}
          height={100}
          alt="icon"
        />
      </div>
    </>
  );
};

export default OurClients;
