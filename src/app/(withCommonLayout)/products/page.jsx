import Products from "@/components/UI/OurProducts/Products";

const ProductPage = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-products`, {
      next: {
        revalidate: 30,
      },
    });
    const ourProducts = await res.json();
    return (
      <>
        <section className="">
          {/* product banner  */}
          <div className="bg-blue-400 md:h-[350px] h-[200px]"></div>

          {/* products section */}
          <Products ourProducts={ourProducts} />
        </section>
      </>
    );
  } catch {
    return null;
  }
};

export default ProductPage;
