import SwiperPages from "./SwiperPages";
import PriceAndPlan from "./PriceAndPlan";
import ProductDetailsHero from "./ProductDetailsHero";
import ProductServiceCard from "./ProductServiceCard";
import ServiceFaq from "../../Home/Faq/ServiceFaq";
import ProductServiceCards from "./ProductServiceCards";

const ProductPriceDetails = async ({ slug }) => {
  try {
    const serviceData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${slug}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    const service = await serviceData?.json();

    return (
      <>
        <div>
          <ProductDetailsHero
            title={service?.data?.title}
            slug={slug}
            description={service?.data?.description}
            serviceId={service?.data?._id}
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
          <ProductServiceCards serviceId={service?.data?._id} />

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
                but the majority have suffered alteration
              </p>
            </div>
            <SwiperPages service={service?.data?._id} />
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
        <PriceAndPlan serviceId={service?.data?._id} />
        {/* <Testimonials /> */}
        <ServiceFaq service={service?.data?._id} />
      </>
    );
  } catch {
    return null;
  }
};

export default ProductPriceDetails;
