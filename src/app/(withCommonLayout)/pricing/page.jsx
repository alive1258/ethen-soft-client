import ProductPrice from "@/components/UI/Home/ProductPrice/ProductPrice";

import productBanner from "../../../../public/assets/images/about/productprice.png";
import Image from "next/image";
const PricingPage = () => {
  return (
    <>
      {/* banner section  */}
      <div>
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={productBanner}
          height={350}
          width={900}
          alt="productBanner"
        />
      </div>
      {/* all price section  */}
      <div className="py-20">
        <div className="container">
          <ProductPrice />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
