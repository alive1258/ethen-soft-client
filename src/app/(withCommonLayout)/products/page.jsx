import Products from "@/components/UI/Products/Products";

const ProductPage = () => {
  return (
    <>
      <section className="">
        {/* product nanner  */}
        <div
          className="h-[374px] bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(/assets/images/product.png)`,
          }}
        >
          {/* <Image
          className="w-full h-[374px] mix-blend-difference"
          src={blend}
          width={1440}
          height={374}
          alt="blend image"
        /> */}
          <div className="absolute top-[40%] left-[42%]">
            <h1 className="banner-title before:w-full after:w-full relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat">
              Our Products
            </h1>
          </div>
        </div>

        {/* products section */}
        <Products />
      </section>
    </>
  );
};

export default ProductPage;
