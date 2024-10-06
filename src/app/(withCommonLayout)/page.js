import About from "@/components/UI/Home/About/About";
import Blogs from "@/components/UI/Home/Blog/Blogs";
import Faq from "@/components/UI/Home/Faq/Faq";
import Hero from "@/components/UI/Home/Hero/Hero";
import HomeService from "@/components/UI/Home/HomeService/HomeService";
import MarqueeServices from "@/components/UI/Home/Marquee/MarqueeServices";
import OurClients from "@/components/UI/Home/OurClients/OurClients";
import OurWorks from "@/components/UI/Home/OurWorks/OurWorks";
import ProductPrices from "@/components/UI/Home/ProductPrice/ProductPrices";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import WhyTrustUs from "@/components/UI/Home/WhyTrustUs/WhyTrustUs";

const page = async () => {
  return (
    <>
      {/* main sections  */}
      <main>

        <Hero />
        <MarqueeServices />
        <HomeService />
        <About />
        <ProductPrices />
        <WhyTrustUs />
        <OurWorks />
        <OurClients />
        <Testimonials />
        <Blogs />
        <Faq />

      </main>
    </>
  );
};

export default page;
