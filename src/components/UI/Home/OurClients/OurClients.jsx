import Image from "next/image";

import icon2 from "../../../../../public/assets/images/Frame9.png";
import ButtonOutline from "../../Button/ButtonOutline";

import Clients from "../../Clients/Clients";
import Link from "next/link";

const OurClients = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-clients`, {
      next: {
        revalidate: 30,
      },
    });
    const clients = await res.json();

    return (
      <>
        <div className="relative md:mt-28 mt-12 px-10 bg-no-repeat bg-none md:bg-[url('/assets/images/stars.png')]">
          {/* <div className="flex gap-20 mt-16 md:mt-14 mb-12 px-4"> */}
          <Clients clients={clients} />
          {/* {ourClients?.data?.map((ourClient) => (
                <AllClients key={ourClient?._id} ourClient={ourClient} />
              ))} */}
          {/* </div> */}
          <div className="my-6 flex justify-center items-center">
            <Link href="/clients">
              <ButtonOutline className="" content="More Clients" />
            </Link>
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
