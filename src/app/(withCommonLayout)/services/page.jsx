import Image from "next/image";

import Services from "@/components/UI/BlogDetails/Services/Services";
import serviceBanner from "../../../../public/assets/images/about/service.png";

const ServicesPage = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-services`, {
      next: {
        revalidate: 30,
      },
    });
    const ourServices = await res.json();
    return (
      <>
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={serviceBanner}
            height={350}
            width={900}
            alt="serviceBanner"
          />
        </div>
        <Services ourServices={ourServices} />
      </>
    );
  } catch {
    return null;
  }
};

export default ServicesPage;
