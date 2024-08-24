import About from "@/components/UI/Home/About/About";
import Blogs from "@/components/UI/Home/Blog/Blogs";
import Faq from "@/components/UI/Home/Faq/Faq";
import Hero from "@/components/UI/Home/Hero/Hero";
import MarqueeServices from "@/components/UI/Home/Marquee/MarqueeServices";
import OurClients from "@/components/UI/Home/OurClients/OurClients";
import OurWorks from "@/components/UI/Home/OurWorks/OurWorks";
import Services from "@/components/UI/Home/Services/Services";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import WhyTrustUs from "@/components/UI/Home/WhyTrustUs/WhyTrustUs";
import Products from "@/components/UI/Products/Products";

const page = async () => {
  return (
    <>
      <Hero />
      <MarqueeServices />
      <Services />
      <About />
      <WhyTrustUs />
      <OurWorks />
      <Products />
      <OurClients />
      <Testimonials />
      <Blogs />
      <Faq />
    </>
  );
};

export default page;
