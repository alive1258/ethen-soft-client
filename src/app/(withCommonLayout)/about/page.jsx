import Banner from "@/components/UI/About/Banner/Banner";
import Contact from "@/components/UI/About/Contact/Contact";
import DataAnalysis from "@/components/UI/About/DataAnalysis/DataAnalysis";
import ImageGallery from "@/components/UI/About/ImageGallery/ImageGallery";
import ItServices from "@/components/UI/About/ItServices/ItServices";
import Faq from "@/components/UI/Home/Faq/Faq";
import OurClients from "@/components/UI/Home/OurClients/OurClients";

const AboutPage = () => {
  return (
    <>
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
