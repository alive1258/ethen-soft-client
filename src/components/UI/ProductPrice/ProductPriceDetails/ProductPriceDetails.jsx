import SwiperPages from "./SwiperPages";
import Testimonials from "../../Home/Testimonials/Testimonials";
import PriceAndPlan from "./PriceAndPlan";
import ProductDetailsHero from "./ProductDetailsHero";

import ProductServiceCard from "./ProductServiceCard";
import Faq from "../../Home/Faq/Faq";

const ProductPriceDetails = () => {
  return (
    <>
      <div>
        <ProductDetailsHero />
      </div>

      <div
        className="max-w-[1440px] mx-auto pt-24 px-5 md:px-20 bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/images/price/Vector9.png)`,
          backgroundPosition: " right top 200px",
        }}
      >
        {/* Product Services */}
        <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
          {/* single card  */}
          <ProductServiceCard />
          <ProductServiceCard />
          <ProductServiceCard />
          <ProductServiceCard />
          <ProductServiceCard />
          <ProductServiceCard />
        </div>

        {/* Our All Pages  */}
        <div
          className="pt-10 bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/images/price/Vector8.png)`,
            backgroundPosition: "left",
          }}
        >
          <div className="text-center mb-10">
            <h1 className="text-black-solid font-semibold">Our All Pages</h1>
            <p className="text-sm text-[#0D0F12] pt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <SwiperPages />
        </div>
      </div>

      <div
        className="py-10"
        style={{ background: "rgba(244, 237, 247, 0.34)" }}
      >
        <div className="container mb-10">
          <h1>testimonial</h1>{" "}
        </div>
      </div>
      <PriceAndPlan />
      {/* <Testimonials /> */}
      <Faq />
    </>
  );
};

export default ProductPriceDetails;
