import Image from "next/image";

import icon2 from "../../../../../public/assets/images/Frame9.png";
import ButtonOutline from "../../Button/ButtonOutline";
import AllClients from "./AllClients";

const OurClients = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-clients`, {
      next: {
        revalidate: 30,
      },
    });
    const ourClients = await res.json();

    return (
      <>
        <div className="relative px-10 bg-no-repeat bg-none md:bg-[url('/assets/images/stars.png')]">
          <div className="py-10">
            <h1 className="text-center text-primary-base text-2xl md:text-[40px] font-semibold">
              OurClients
            </h1>
            <div className="flex gap-20 mt-10 md:mt-14 mb-12 px-4">
              {ourClients?.data?.map((ourClient) => (
                <AllClients key={ourClient?._id} ourClient={ourClient} />
              ))}
            </div>
            <div className="mt-6 flex justify-center items-center">
              <ButtonOutline className="" content="More Clients" />
            </div>
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
  } catch {
    return null;
  }
};

export default OurClients;
