import SectionTitle from "../../SectionTitle/SectionTitle";
import TrustCard from "./TrustCard";

const WhyTrustUs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trust-us`, {
      next: {
        revalidate: 30,
      },
    });
    const trustUsDetails = await res.json();

    return (
      <>
        <div className="container md:mt-28 mt-12 bg-no-repeat bg-none md:bg-[url('/assets/images/star.png')]">
          <div className="">
            <SectionTitle
              width={400}
              subTitle="ETHENSOFT SO DIFFERENT?"
              title="Why Trust Us?"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:mt-28 mt-12">
              {trustUsDetails?.data?.map((trustUsDetail) => (
                <TrustCard
                  key={trustUsDetail?._id}
                  trustUsDetail={trustUsDetail}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default WhyTrustUs;
