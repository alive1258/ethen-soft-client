import SectionTitle from "../../SectionTitle/SectionTitle";
import ServiceSection from "./ServiceSection";

const HomeService = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-services`, {
      next: {
        revalidate: 30,
      },
    });
    const ourServices = await res.json();

    return (
      <>
        <div className="max-w-[1440px] mt-28 mx-auto bg-no-repeat bg-left-bottom bg-none md:bg-[url('/assets/images/bg-shape.png')]">
          <div className="container   mt-10 bg-no-repeat bg-none md:bg-[url('/assets/images/icons.png')]">
            <SectionTitle
              subTitle="SERVICES"
              title="Our Services"
              description="We take digital experience to the next level"
            />
            <ServiceSection ourServices={ourServices} />
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default HomeService;
