import image from "../../../../../public/assets/images/testimonials/avatar.png";
import { BiSolidQuoteRight } from "react-icons/bi";
import Image from "next/image";
import { TiStar } from "react-icons/ti";

const TestimonialCard = ({ testimonial }) => {
  const rating = testimonial?.rating || 0;
  return (
    <>
      <div className="md:flex items-center gap-10 md:mr-5">
        <div className="w-full md:h-full bg-gradient-to-b from-[#DCC8E6] to-[#FDF8FF] rounded-lg p-4">
          <Image
            className="md:h-40 h-32"
            src={image}
            width={140}
            height={168}
            alt="testimonial"
          />
          <h1 className="text-black-base font-semibold pt-3 text-nowrap">
            {testimonial?.name}
          </h1>
          <p className="text-xs pt-1 text-nowrap"> {testimonial?.profession}</p>
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
            {testimonial?.name}
            <span className="text-primary-base "> ” </span>
          </h1>
          <div className="relative">
            <p className="text-sm italic text-black-base my-4 z-20 pr-3">
              {testimonial?.description}
            </p>
            <BiSolidQuoteRight className="absolute top-[16%] left-[31%] text-[#DCC8E6] text-9xl -z-20" />
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, index) => (
              <TiStar
                key={index}
                className={`text-2xl ${
                  index < rating ? "text-[#FFC107]" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
