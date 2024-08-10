import iii from "../../../../../public/assets/images/faq/Frame1.png";
import SectionTitle from "../../SectionTitle/SectionTitle";
const Faq = () => {
  return (
    <>
      <div className="bg-[#FBF9FC] py-10">
        <div
          className="container bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/images/faq/Frame1.png), url(/assets/images/faq/Ellipse.png)",
            backgroundPosition: "left bottom, right bottom",
          }}
        >
          <SectionTitle
            subTitle="FAQ"
            title="Frequently Asked Questions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
