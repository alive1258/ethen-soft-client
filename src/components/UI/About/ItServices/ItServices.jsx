import ServiceDetails from "./ServiceDetails";

const ItServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professional-services`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const professionalServices = await res.json();
    return (
      <>
        <div className="bg-[#F4EDF7]/50 py-14">
          <div className="container md:flex items-center gap-5">
            {professionalServices?.data?.slice(0, 1).map((service) => (
              <ServiceDetails key={service?._id} service={service} />
            ))}
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default ItServices;
