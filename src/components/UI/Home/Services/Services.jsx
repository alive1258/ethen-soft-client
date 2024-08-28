import SectionTitle from "../../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = ({ ourServices }) => {
  return (
    <>
      <div className="container mt-10 bg-no-repeat bg-none md:bg-[url('/assets/images/icons.png')]">
        <SectionTitle
          subTitle="SERVICES"
          title="Our Services"
          description="We take digital experience to the next level"
        />
        <div className="my-10 grid grid-cols-1 gap-x-5 gap-y-6">
          {ourServices?.data?.map((service, index) => (
            <ServiceCard
              service={service}
              key={service?._id}
              index={index} // Pass index to determine layout
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
