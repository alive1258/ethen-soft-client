import Image from "next/image";

import icon2 from "../../../../../public/assets/images/Frame9.png";
import ButtonOutline from "../../Button/ButtonOutline";
import Clients from "../../Clients/Clients";

const OurClients = async () => {
  return (
    <>
      <div className="relative md:mt-28 mt-12 px-10 bg-no-repeat bg-none md:bg-[url('/assets/images/stars.png')]">
        <Clients />
        <div className="my-6 flex justify-center items-center">
          <ButtonOutline className="" content="More Clients" />
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
