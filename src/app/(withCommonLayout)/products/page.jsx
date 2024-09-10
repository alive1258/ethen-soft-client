import Products from "@/components/UI/OurProducts/Products";

const ProductPage = () => {
  return (
    <>
      <section className="">
        {/* product banner  */}
        <div className="bg-blue-400 md:h-[350px] h-[200px]"></div>

        {/* products section */}
        <Products />
      </section>
    </>
  );
};

export default ProductPage;
