import ProductsDetailsSection from "@/components/UI/OurProducts/ProductsDetailsSection";

const ProductDetailsPage = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/our-products/${params?.slug}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Products");
    }

    const products = await res.json();

    return (
      <>
        <ProductsDetailsSection product={products?.data} />
      </>
    );
  } catch {
    return null;
  }
};

export default ProductDetailsPage;
