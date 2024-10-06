import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";
import { GrEmptyCircle } from "react-icons/gr";
import CareerOppertunities from "@/components/UI/Career/CareerOppertunities";
import careerBanner from "../../../../public/assets/images/about/careerBanners.png";

const CareerPage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/career-opportunities`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const careerOpportunities = await res.json();

    return (
      <>
        {careerOpportunities?.data.length > 0 ? (
          <div>
            <div>
              <Image
                className="w-full md:h-[350px] h-[150px]"
                src={careerBanner}
                height={350}
                width={900}
                alt="careerBanner"
              />
            </div>
            <CareerOppertunities careerOpportunities={careerOpportunities} />
          </div>
        ) : (
          <div>
            <div>
              <Image
                className="w-full md:h-[350px] h-[150px]"
                src={careerBanner}
                height={350}
                width={900}
                alt="careerBanner"
              />
            </div>
            <div className="container bg-[#f1f1f1] p-8 border-2 border-[#686C72] my-24 rounded-lg flex flex-col justify-center items-center gap-7">
              <GrEmptyCircle className="size-36 bg-[#D2D2D2] text-[72px] text-[#bebaba] p-4 rounded-full" />
              <h1 className="text-[32px] font-semibold text-[#4B4F56]">
                We currently have no vacancies
              </h1>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error("Failed to fetch career opportunities:", error);
    return null;
  }
};

export default CareerPage;
