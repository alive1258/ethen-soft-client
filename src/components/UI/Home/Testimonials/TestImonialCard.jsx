import image from "../../../../../public/assets/images/testimonials/avatar.png";
import { BiSolidQuoteRight } from "react-icons/bi";
import Image from "next/image";
import { TiStar } from "react-icons/ti";

const TestimonialCard = () => {
  return (
    <>
      <div className="flex items-center gap-10 mr-5">
        <div className="w-full h-full bg-gradient-to-b from-[#DCC8E6] to-[#FDF8FF] rounded-lg p-4">
          <Image src={image} width={140} height={168} alt="testimonial" />
          <h1 className="text-black-base font-semibold pt-3 text-nowrap">
            Roman Dymtro
          </h1>
          <p className="text-xs pt-1 text-nowrap"> MONPROFIT DIRECTOR</p>
        </div>
        <div>
          <h1
            className="bg-no-repeat pb-3.5 relative testmonial-title"
            style={{
              backgroundImage: "url(/assets/images/testimonials/Vector2.png)",
              backgroundPosition: "left bottom",
            }}
          >
            <span className="text-primary-base ">” </span>
            Fast Respond
            <span className="text-primary-base "> ” </span>
          </h1>
          <div className="relative">
            <p className="text-sx italic text-black-base my-4 z-20 pr-3">
              Working with Techco was a seamless experience from start to
              finish. Their team took the time to understand our business goals
              and challenges, and they delivered a solution that addressed our
              needs perfectly. Their professionalism, expertise, and dedication
              to customer satisfaction were evident throughout the project. We
              look forward to working with Techco on future initiatives.
            </p>
            <BiSolidQuoteRight className="absolute top-[16%] left-[31%] text-[#DCC8E6] text-9xl -z-20" />
          </div>
          <div className="flex items-center gap-1.5">
            <TiStar className="text-2xl text-[#FFC107]" />
            <TiStar className="text-2xl text-[#FFC107]" />
            <TiStar className="text-2xl text-[#FFC107]" />
            <TiStar className="text-2xl text-[#FFC107]" />
            <TiStar className="text-2xl text-[#FFC107]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
