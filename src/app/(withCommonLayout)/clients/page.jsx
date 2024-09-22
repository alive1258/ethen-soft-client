import Image from "next/image";

import Clients from "@/components/UI/Clients/Clients";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import clientBanner from "../../../../public/assets/images/about/clinet.png";
const ClientPage = () => {
  return (
    <>
      {/* client banner  */}
      <div className="bg-blue-400 md:h-[350px] h-[200px]">
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={clientBanner}
          height={350}
          width={900}
          alt="clientBanner"
        />
      </div>
      <Clients />
      <Testimonials />
    </>
  );
};

export default ClientPage;
