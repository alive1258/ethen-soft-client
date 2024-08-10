import About from "@/components/UI/Home/About/About";
import Blogs from "@/components/UI/Home/Blog/Blogs";
import Faq from "@/components/UI/Home/Faq/Faq";
import Hero from "@/components/UI/Home/Hero/Hero";
import MarqueeServices from "@/components/UI/Home/Marquee/MarqueeServices";
import OurClients from "@/components/UI/Home/OurClients/OurClients";
import Services from "@/components/UI/Home/Services/Services";
import WhyTrustUs from "@/components/UI/Home/WhyTrustUs/WhyTrustUs";

const page = async () => {
  //   const res = await fetch("http://localhost:5000/api/v1/products", {
  //     cache: "no-store",
  //   });
  //   const products = await res.json();
  return (
    <>
      <Hero />
      <MarqueeServices />
      <Services />
      <About />
      <WhyTrustUs />
      <OurClients />
      <Blogs />
      <Faq />
    </>
  );
};

export default page;
