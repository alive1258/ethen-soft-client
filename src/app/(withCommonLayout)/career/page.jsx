import Image from "next/image";
import blend from "../../../../public/assets/images/noisy-gradients.png";

import { GrEmptyCircle } from "react-icons/gr";
import CareerOppertunities from "@/components/UI/Career/CareerOppertunities";
import careerBanner from "../../../../public/assets/images/about/career.png";
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
        {careerOpportunities?.data ? (
          <div>
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
            </div>
            <CareerOppertunities />
          </div>
        ) : (
          <div>
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
                  Career
                </h1>
              </div>
            </div>
            <div className="container bg-[#f1f1f1] p-8 border-2 border-[#686C72] my-24 rounded-lg flex flex-col justify-center items-center gap-7">
              <GrEmptyCircle className="size-36 bg-[#D2D2D2] text-[72px] text-[#bebaba] p-4 rounded-full" />
              <h1 className="text-[32px] font-semibold text-[#4B4F56]">
                We Currently have no vacancies
              </h1>
            </div>
          </div>
        )}
      </>
    );
  } catch {
    return null;
  }
};

export default CareerPage;
