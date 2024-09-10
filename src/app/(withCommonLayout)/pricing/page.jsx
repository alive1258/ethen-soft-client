import ProductPrice from "@/components/UI/Home/ProductPrice/ProductPrice";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";

const PricingPage = () => {
  return (
    <>
      {/* banner section  */}
      <div className="h-[342px] bg-gradient-to-r from-[#8E37BB] via-[#EFCFFF] to-[#8D33BA] pt-32 py-12">
        <SectionTitle
          subTitle="PRODUCT PRICING"
          title="Our Product Price"
          description="We take digital experience to the next level"
        />
      </div>
      {/* all prcice section  */}
      <div
        className="py-20"
        style={{ backgroundImage: `url(/assets/images/ppb.png)` }}
      >
        {/* <div className="max-w-[1440px] mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
          {prices?.map((item) => (
            // price card
            <PricingCard item={item} key={item?._id} />
          ))}
        </div> */}
        <div className="container">
          <ProductPrice />
        </div>
        {/* View All Products button  */}
        {/* <div className="mx-auto mt-10 w-44 text-center">
          <Link href="/price">
            <Button content="View All Products" />
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default PricingPage;
