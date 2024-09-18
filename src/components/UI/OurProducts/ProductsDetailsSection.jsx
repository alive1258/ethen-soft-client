import Image from "next/image";
import React from "react";

const ProductsDetailsSection = ({ product }) => {
  return (
    <div>
      <div className="h-[350px] bg-orange-300"></div>
      <div className="container mb-12">
        {/* Blog Image Section */}
        <div className="mt-20">
          <Image
            className="h-[400px] w-full"
            src={product?.image}
            width={1280}
            height={600}
            alt="blog details"
          />
        </div>

        {/* Product Content */}
        <div className="mt-10">
          <div>{product?.title}</div>
          {product?.description ? (
            <div
              className="mt-10 description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          ) : (
            <div>No description available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsSection;
