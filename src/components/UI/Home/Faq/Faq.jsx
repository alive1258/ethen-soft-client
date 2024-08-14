import Image from "next/image";
import faqImage from "../../../../../public/assets/images/faq/faq.png";
import SectionTitle from "../../SectionTitle/SectionTitle";

import Accordion from "./Accordion";
import AccordionList from "./AccordionList";
const Faq = () => {
  const items = [
    {
      title: "What Is EthenSoft ?",
      description:
        "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi Voluptates Aspernatur Consequuntur Facere?",
    },
    {
      title: "What Is EthenSoft ?",
      description:
        "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi Voluptates Aspernatur Consequuntur Facere?",
    },
    {
      title: "What Is EthenSoft ?",
      description:
        "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi Voluptates Aspernatur Consequuntur Facere?",
    },
    {
      title: "What Is EthenSoft ?",
      description:
        "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi Voluptates Aspernatur Consequuntur Facere?",
    },
    {
      title: "What Is EthenSoft ?",
      description:
        "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum Ullam Earum Itaque, Quas Labore Illo Eligendi Iure Asperiores, Modi Veniam Molestiae Vero Quasi. Ex, Alias Modi Voluptates Aspernatur Consequuntur Facere?",
    },
  ];
  return (
    <>
      <div className="bg-[#FBF9FC] py-10">
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
              <Image src={faqImage} width={593} height={478} alt="faq image" />
            </div>
            <div className="w-full mt-4">
              <AccordionList accordions={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
