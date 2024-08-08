import Hero from "@/components/UI/Home/Hero/Hero";
import MarqueeServices from "@/components/UI/Home/Marquee/MarqueeServices";

const page = async () => {
  //   const res = await fetch("http://localhost:5000/api/v1/products", {
  //     cache: "no-store",
  //   });
  //   const products = await res.json();
  return (
    <>
      <Hero />
      <MarqueeServices />
    </>
  );
};

export default page;
