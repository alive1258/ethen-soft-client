import Products from "@/components/UI/OurProducts/Products";
import Image from "next/image";
import productBanner from "../../../../public/assets/images/about/productBanners.png";

const ProductPage = () => {
  return (
    <>
      <section className="">
        {/* banner  */}
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={productBanner}
            height={350}
            width={900}
            alt="productBanner"
          />
        </div>

        {/* products section */}
        <Products />
      </section>
    </>
  );
};

export default ProductPage;
