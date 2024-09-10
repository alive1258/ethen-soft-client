"use client";

import Link from "next/link";
import Button from "../../Button/Button";
import SectionTitle from "../../SectionTitle/SectionTitle";
import PricingCard from "./PricingCard";
import ProductPriceSection from "./ProductPriceSection";
import { useGetAllOurServicesQuery } from "@/redux/api/ourServiceApi";
import Loading from "@/app/loading";

const ProductPrice = () => {
  //fetched all service products
  const { data, error, isLoading } = useGetAllOurServicesQuery();

  // specify the name
  const services = data?.data?.data;
  const meta = data?.data?.meta;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container md:mt-28 mt-16 bg-white z-30">
        <SectionTitle
          subTitle="PRODUCT PRICING"
          title="Our Product Price"
          description="We take digital experience to the next level"
        />
        {/* all pricing  */}
        <div>
          <ProductPriceSection prices={services} />
        </div>
        {/* View All Products button  */}
        <div className="mx-auto mt-10 w-44 text-center">
          <Link href="/pricing">
            <Button content="View All Products" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
