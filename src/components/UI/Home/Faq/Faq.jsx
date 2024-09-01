import Image from "next/image";
import faqImage from "../../../../../public/assets/images/faq/faq.png";
import SectionTitle from "../../SectionTitle/SectionTitle";

import AccordionList from "./AccordionList";
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
        <div className="bg-[#FBF9FC] py-10 md:pb-28">
          <div
            className="container faq-container bg-no-repeat"
            // style={{
            //   backgroundImage:
            //     "url(/assets/images/faq/Frame1.png), url(/assets/images/faq/Ellipse.png)",
            //   backgroundPosition: "left bottom, right bottom",
            // }}
          >
            <SectionTitle
              subTitle="FAQ"
              title="Frequently Asked Questions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
            />

            <div className="md:flex justify-between gap-14 mt-9">
              <div className="w-full">
                <Image
                  src={faqImage}
                  width={593}
                  height={478}
                  alt="faq image"
                />
              </div>
              <div className="w-full mt-4">
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
