import SwiperPages from "./SwiperPages";
import PriceAndPlan from "./PriceAndPlan";
import ProductDetailsHero from "./ProductDetailsHero";

import ServiceFaq from "../../Home/Faq/ServiceFaq";
import ProductServiceCards from "./ProductServiceCards";

const ProductPriceDetails = async ({ service }) => {
  return (
    <>
      <div>
        <ProductDetailsHero
          title={service?.title}
          slug={service?.slug}
          description={service?.description}
          serviceId={service?._id}
        />
      </div>

      <div
        className="max-w-[1440px] mx-auto pt-24 px-5 md:px-20 bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/images/price/Vector9.png)`,
          backgroundPosition: " right top 200px",
        }}
      >
        {/* Product Service categories */}
        <ProductServiceCards serviceId={service?._id} />

        {/* Our All Pages  update*/}
        <div
          className="pt-10 bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/images/price/Vector8.png)`,
            backgroundPosition: "left",
          }}
        >
          <div id="swiper-pages" className="text-center mb-10">
            <h1 className="text-black-solid font-semibold">Our All Pages</h1>
            <p className="text-sm text-[#0D0F12] pt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
          <SwiperPages service={service?._id} />
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
      <PriceAndPlan serviceId={service?._id} />
      {/* <Testimonials /> */}
      <ServiceFaq service={service?._id} />
    </>
  );
};

export default ProductPriceDetails;
