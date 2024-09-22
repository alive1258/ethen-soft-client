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
        <section aria-label="Hero Section">
          <Hero />
        </section>
        {/* <section aria-label="Marquee Services"> */}
        <MarqueeServices />
        {/* </section> */}
        <section aria-label="Home Services">
          <HomeService />
        </section>
        <section aria-label="About Us">
          <About />
        </section>
        <section aria-label="Product Prices">
          <ProductPrices />
        </section>
        <section aria-label="Why Trust Us">
          <WhyTrustUs />
        </section>
        <section aria-label="Our Works">
          <OurWorks />
        </section>
        <section aria-label="Our Clients">
          <OurClients />
        </section>
        <section aria-label="Testimonials">
          <Testimonials />
        </section>
        <section aria-label="Blogs">
          <Blogs />
        </section>
        <section aria-label="FAQs">
          <Faq />
        </section>
      </main>
    </>
  );
};

export default page;
