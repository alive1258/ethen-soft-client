import Products from "@/components/UI/OurProducts/Products";

const ProductPage = () => {
  return (
    <>
      <section className="">
        {/* banner  */}
        <div className="h-[342px] bg-gradient-to-r from-[#2c6bdf] via-[#cfe2ff] to-[#2c6bdf] pt-32 py-12"></div>

        {/* products section */}
        <Products />
      </section>
    </>
  );
};

export default ProductPage;
