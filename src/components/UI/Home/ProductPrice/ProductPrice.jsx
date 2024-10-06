import ProductPriceSection from "./ProductPriceSection";

const ProductPrice = async ({ limit = 10 }) => {
  try {
    //fetched all service products
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services?limit=${limit}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    // specify the name
    const servicesData = await res?.json();
    const services = servicesData?.data?.data;
    // const meta = servicesData?.data?.meta;

    return (
      <>
        <ProductPriceSection prices={services} />
      </>
    );
  } catch {
    return null;
  }
};

export default ProductPrice;
