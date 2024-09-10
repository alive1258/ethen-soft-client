import ProductPriceDetails from "@/components/UI/ProductPrice/ProductPriceDetails/ProductPriceDetails";

const page = ({ params }) => {
  return (
    <>
      <ProductPriceDetails slug={params?.id} />
    </>
  );
};

export default page;
