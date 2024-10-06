import Image from "next/image";
import tramsBanner from "../../../../public/assets/images/about/terms.png";

const PrivacyPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/terms-conditions`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const termsConditions = await res.json();
    return (
      <>
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={tramsBanner}
            height={350}
            width={900}
            alt="productBanner"
          />
        </div>

        <div className="md:mt-28 mt-12 md:pb-10 pb-5 container">
          {termsConditions?.data?.map((termsCondition) => (
            <div
              key={termsCondition._id}
              dangerouslySetInnerHTML={{
                __html: termsCondition?.description || "",
              }}
              className="description text-[#292929] my-4 pt-4"
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
