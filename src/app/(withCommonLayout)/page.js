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
import Head from "next/head";

const page = async () => {
  return (
    <>
      {/* Head sections  */}
      <Head>
        <title>Ethen Soft - Home</title>
        <meta
          name="description"
          content="Ethen Soft provides custom web solutions, mobile apps, and WordPress themes. We help businesses go digital."
        />
        <meta
          name="keywords"
          content="web solutions, custom software, mobile app development, WordPress themes, digital solutions"
        />
        <meta
          property="og:title"
          content="Ethen Soft - Web and Mobile Solutions"
        />
        <meta
          property="og:description"
          content="Custom web and mobile app solutions tailored for businesses."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.ethensoft.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ethen Soft - Web and Mobile Solutions"
        />
        <meta
          name="twitter:description"
          content="We specialize in creating custom web solutions and mobile apps for businesses."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Head>

      {/* main sections  */}
      <main>
        <section aria-label="Hero Section">
          <Hero />
        </section>
        <section aria-label="Marquee Services">
          <MarqueeServices />
        </section>
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
