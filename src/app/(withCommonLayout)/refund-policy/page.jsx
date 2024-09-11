import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";

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
        <div
          className="h-[374p] bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(/assets/images/contact.png)`,
          }}
        >
          <Image
            className="w-full mix-blend-difference"
            src={blend}
            width={1440}
            height={374}
            alt="blend image"
          />
          <div className="absolute top-[40%] left-[45%]">
            <h1 className="banner-title before:right-[170px] after:left-[170px] relative text-[56px] font-semibold text-white shadow-lrge bg-no-repeat z-30">
              Refund Policy
            </h1>
          </div>
        </div>

        <div className="md:mt-28 mt-12 md:pb-10 pb-5 container">
          {refundPolicies?.data?.map((refundPolicy) => (
            <div
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
