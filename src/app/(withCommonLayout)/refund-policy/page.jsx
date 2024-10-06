import Image from "next/image";
import refundBanner from "../../../../public/assets/images/about/refundPolicyBanner.png";

const RefundPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/refund-policies`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const refundPolicies = await res.json();
    return (
      <>
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={refundBanner}
            height={350}
            width={900}
            alt="refundBanner"
          />
        </div>

        <div className="md:mt-28 mt-12 md:pb-10 pb-5 container">
          {refundPolicies?.data?.map((refundPolicy) => (
            <div
              className="description"
              key={refundPolicy._id}
              dangerouslySetInnerHTML={{ __html: refundPolicy?.description }}
            ></div>
          ))}
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default RefundPage;
