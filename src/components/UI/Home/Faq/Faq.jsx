import Image from "next/image";
import faqImage from "../../../../../public/assets/images/faq/faq.png";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AccordionList from "./AccordionList";
import FaqAnimation from "./FaqAnimation";

const Faq = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs`, {
      next: {
        revalidate: 30,
      },
    });
    const faqs = await res.json();

    return (
      <>
        <div className="bg-[#FBF9FC] md:pt-16 pt-9 md:pb-28">
          <div className="container faq-container bg-no-repeat">
            <SectionTitle
              subTitle="FAQ"
              title="Frequently Asked Questions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
            />

            <div className="md:flex justify-between gap-14 ">
              <div className="w-full">
                {/* Add animation classes here */}
                {/* <Image
                  src={faqImage}
                  width={593}
                  height={478}
                  alt="faq image"
                  className="transition-transform duration-700 ease-in-out transform hover:scale-110 cursor-pointer animate-fadeInUp" // Added animation classes
                /> */}
                <FaqAnimation />
              </div>
              <div className="w-full md:mt-14 my-5">
                <AccordionList faqs={faqs} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Faq;
