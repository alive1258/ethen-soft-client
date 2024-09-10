"use client";

import SwiperPages from "./SwiperPages";
import PriceAndPlan from "./PriceAndPlan";
import ProductDetailsHero from "./ProductDetailsHero";

import ProductServiceCard from "./ProductServiceCard";
import Faq from "../../Home/Faq/Faq";
import { useGetSingleOurServiceQuery } from "@/redux/api/ourServiceApi";
import { useGetAllServiceCategoriesQuery } from "@/redux/api/serviceCategoryApi";
import Loading from "@/app/loading";

const ProductPriceDetails = ({ slug }) => {
  const { data, error, isLoading } = useGetSingleOurServiceQuery(slug);
  const service = data?.data;
  const { data: serviceCategoryData } = useGetAllServiceCategoriesQuery({
    service: service?._id,
  });
  const serviceCategory = serviceCategoryData?.data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <ProductDetailsHero
          title={service?.title}
          slug={slug}
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
        <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
          {/* service category cards  */}
          {serviceCategory?.map((item, index) => (
            <ProductServiceCard
              key={index}
              logo={item?.logo}
              title={item?.title}
              description={item?.description}
            />
          ))}
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
      <Faq service={service?._id} />
    </>
  );
};

export default ProductPriceDetails;
