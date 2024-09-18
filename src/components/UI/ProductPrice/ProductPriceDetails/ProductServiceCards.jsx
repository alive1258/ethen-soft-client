import React from "react";
import ProductServiceCard from "./ProductServiceCard";

const ProductServiceCards = async ({ serviceId }) => {
  const serviceCategoryData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories?service=${serviceId}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const serviceCategories = await serviceCategoryData?.json();

  try {
    return (
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
        {/* service category cards  */}
        {serviceCategories?.data?.data?.map((item, index) => (
          <ProductServiceCard
            key={index}
            logo={item?.logo}
            title={item?.title}
            // description={item?.description}
            subDescription={item?.subDescription}
          />
        ))}
      </div>
    );
  } catch {
    return null;
  }
};

export default ProductServiceCards;
