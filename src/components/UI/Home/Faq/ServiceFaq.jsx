import AccordionList from "@/components/UI/Home/Faq/AccordionList";
import FaqAnimation from "@/components/UI/Home/Faq/FaqAnimation";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";

const ServiceFaq = async ({ service }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service-faqs?service=${service}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
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
                <AccordionList faqs={faqs?.data} />
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

export default ServiceFaq;
