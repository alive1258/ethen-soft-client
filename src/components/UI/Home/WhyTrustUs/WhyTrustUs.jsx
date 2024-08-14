import SectionTitle from "../../SectionTitle/SectionTitle";
import TrustCard from "./TrustCard";

const WhyTrustUs = () => {
  return (
    <>
      <div className="container bg-no-repeat bg-none md:bg-[url('/assets/images/star.png')]">
        <div className="py-14">
          <SectionTitle
            width={400}
            subTitle="ETHENSOFT SO DIFFERENT?"
            title="Why Trust Us?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
            <TrustCard />
            <TrustCard />
            <TrustCard />
            <TrustCard />
            <TrustCard />
            <TrustCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrustUs;
