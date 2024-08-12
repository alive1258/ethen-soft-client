import Banner from "@/components/UI/About/Banner/Banner";
import DataAnalysis from "@/components/UI/About/DataAnalysis/DataAnalysis";
import ImageGallery from "@/components/UI/About/ImageGallery/ImageGallery";
import ItServices from "@/components/UI/About/ItServices/ItServices";

const AboutPage = () => {
  return (
    <>
      <Banner />
      <ImageGallery />
      <ItServices />
      <DataAnalysis />
    </>
  );
};

export default AboutPage;
