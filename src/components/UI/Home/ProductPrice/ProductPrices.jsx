import Link from "next/link";
import Button from "../../Button/Button";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ProductPriceSection from "./ProductPriceSection";
import ProductPrice from "./ProductPrice";

const ProductPrices = async () => {
  const limit = 4;
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
          <ProductPrice limit={limit} />
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

export default ProductPrices;
