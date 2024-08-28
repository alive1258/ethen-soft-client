import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";
import Services from "@/components/UI/Home/Services/Services";

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
        <div
          className="h-[374p] bg-no-repeat bg-cover relative "
          style={{
            backgroundImage: `url(/assets/images/contact.png)`,
          }}
        >
          <Image
            className="w-full mix-blend-difference"
            src={blend}
            width={1440}
            height={374}
            alt="blend image"
          />
          <div className="absolute top-[40%] left-[42%]">
            <h1 className="banner-title before:w-full after:w-full relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
              Our Services
            </h1>
          </div>
        </div>
        <Services ourServices={ourServices} />
      </>
    );
  } catch {
    return null;
  }
};

export default ServicesPage;
