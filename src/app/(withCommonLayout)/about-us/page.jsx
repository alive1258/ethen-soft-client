import Banner from "@/components/UI/About/Banner/Banner";
import Contact from "@/components/UI/About/Contact/Contact";
import DataAnalysis from "@/components/UI/About/DataAnalysis/DataAnalysis";
import ImageGallery from "@/components/UI/About/ImageGallery/ImageGallery";
import ItServices from "@/components/UI/About/ItServices/ItServices";
import Faq from "@/components/UI/Home/Faq/Faq";
import OurClients from "@/components/UI/Home/OurClients/OurClients";
import Image from "next/image";
import aboutBanner from "../../../../public/assets/images/about/aboutBanner.png";

const AboutPage = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={aboutBanner}
          height={350}
          width={900}
          alt="aboutBanner"
        />
      </div>
      <Banner />
      <ImageGallery />
      <ItServices />
      <DataAnalysis />
      <OurClients />
      <Faq />
      <Contact />
    </>
  );
};

export default AboutPage;
