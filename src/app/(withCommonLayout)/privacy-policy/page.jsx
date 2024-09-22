import Image from "next/image";
import privacyBanner from "../../../../public/assets/images/about/privacy.png";

const PrivacyPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/privacy-policies`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const privacyPolicies = await res.json();
    return (
      <>
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={privacyBanner}
            height={350}
            width={900}
            alt="privacyBanner"
          />
        </div>

        <div className="md:mt-28 mt-12 md:pb-10 pb-5 container">
          {privacyPolicies?.data?.map((privacyPolicy) => (
            <div
              key={privacyPolicy._id}
              dangerouslySetInnerHTML={{ __html: privacyPolicy?.description }}
            ></div>
          ))}
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default PrivacyPage;
