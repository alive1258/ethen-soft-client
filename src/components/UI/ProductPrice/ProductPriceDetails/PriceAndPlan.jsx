import PriceCard from "./PriceCard";

const PriceAndPlan = async ({ serviceId }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pricing?service=${serviceId}&sortOrder=asc`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    const PriceAndPlan = ({ serviceId }) => {
      const { data } = useGetAllPricingQuery({
        service: serviceId,
        sortOrder: "asc",
      });
    };

    const pricing = await res?.json();
    return (
      <>
        <div id="pricing" className="container my-20">
          <h1 className="text-[#15191F] text-2xl font-semibold border-b border-b-primary-base pb-2">
            Pricing & Plans
          </h1>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* price 1 single card  */}

            {pricing?.data?.data?.map((item, index) => (
              <PriceCard
                key={index}
                title={item?.title}
                price={item?.price}
                pricingCategory={item?.pricingCategory}
                pricingId={item?._id}
              />
            ))}
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default PriceAndPlan;
