import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";
import Services from "@/components/UI/BlogDetails/Services/Services";

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
        <div className="md:h-[350px] h-[200px] bg-gray-400 "></div>
        <Services ourServices={ourServices} />
      </>
    );
  } catch {
    return null;
  }
};

export default ServicesPage;
